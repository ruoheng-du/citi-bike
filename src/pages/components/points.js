import React from "react";

function Points(props){

    const { data, xScale, yScale, width, height, selectedStation, setSelectedStation, handleMouseEnter, handleMouseLeave } = props;

    const getColor = (d, selectedStation) => {
        return d.station === selectedStation.station ? "red" : "steelblue";
    };
    
    const getRadius = (d, selectedStation) => {
        return d.station === selectedStation.station ? 10 : 5;
    };

    if (selectedStation === null){
        return <g> {
            data && data.map((d,index) => {
                return (<circle 
                        onMouseEnter={(event) => handleMouseEnter(event, d)} 
                        onMouseLeave={handleMouseLeave}
                        key = {index}
                        cx = {xScale(d.tripdurationS)}
                        cy = {yScale(d.tripdurationE)}
                        r = {5}
                        fill = {"steelblue"}
                        stroke = {"black"} />
                );
                })}
            </g>
    } else {
        return <g> {
            data && data.map((d,index) => {
                return (<circle
                        onMouseEnter={(event) => handleMouseEnter(event, d)} 
                        onMouseLeave={handleMouseLeave}
                        key = {index}
                        cx = {xScale(d.tripdurationS)}
                        cy = {yScale(d.tripdurationE)} 
                        r = {getRadius(d, selectedStation)}
                        fill = {getColor(d, selectedStation)}
                        stroke = {"black"} />
                        );
                })}
            <rect x = {0} y = {0} width = {width} height = {height} fill = {"yellow"} opacity = {0.5} />
            
            {data && data.filter(d => d.station === selectedStation.station).map((d, index) => {
                return (<circle
                        onMouseEnter={(event) => handleMouseEnter(event, d)} 
                        onMouseLeave={handleMouseLeave}
                        key = {index}
                        cx = {xScale(d.tripdurationS)}
                        cy = {yScale(d.tripdurationE)}
                        r = {getRadius(d, selectedStation)}
                        fill = {getColor(d, selectedStation)}
                        stroke = {"black"} />
                        );                            
                })
            }                      
        </g>
    }
}

export default Points;