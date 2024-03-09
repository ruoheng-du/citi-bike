import React from "react";

function Bars(props){
    const { data, height, xScale, yScale, selectedStation, setSelectedStation } = props;

    const handleMouseLeave = () => {
        setSelectedStation(null);
    };

    const handleMouseEnter = (event, d) => {
        setSelectedStation(d);
    };

    const getColor = (d, selectedStation) => {
        return d.station === selectedStation.station ? "red":"steelblue"
    }

    if (selectedStation === null){
        return <g> {
            data.map(d => {
                return (<rect 
                        onMouseEnter={(event) => handleMouseEnter(event, d)} 
                        onMouseLeave={handleMouseLeave}
                        key={d.station} 
                        x={xScale(d.station)} 
                        y={yScale(d.start)} 
                        height={height - yScale(d.start)}
                        width={xScale.bandwidth()} 
                        fill="steelblue"
                        stroke={"black"}/>
                    )
                }
            )}
        </g>
    } else {
        return <g> {
            data.map(d => {
                return (<rect 
                        onMouseEnter={(event) => handleMouseEnter(event, d)} 
                        onMouseLeave={handleMouseLeave}
                        key={d.station}
                        x={xScale(d.station)} 
                        y={yScale(d.start)} 
                        height={height - yScale(d.start)} 
                        width={xScale.bandwidth()} 
                        fill={getColor(d, selectedStation)}
                        stroke={"black"}/>
                    )
                }
            )}
        </g>
    }
}

export default Bars