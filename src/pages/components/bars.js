import React from "react";

function Bars(props){
    const { data, height, xScale, yScale, selectedStation, setSelectedStation } = props;

    const handleMouseLeave = () => {
        setSelectedStation(null);
    };

    const handleMouseEnter = (event, data) => {
        setSelectedStation(data);
    };

    const getColor = (data, selectedStation) => {
        return data.station === selectedStation.station ? "red":"steelblue"
    };

    if (selectedStation === null){
        return (<g> {
            data && data.map(data => {
                return (<rect 
                        onMouseEnter={(event) => handleMouseEnter(event, data)} 
                        onMouseLeave={handleMouseLeave}
                        key={data.station} 
                        x={xScale(data.station)} 
                        y={yScale(data.start)} 
                        height={height - yScale(data.start)}
                        width={xScale.bandwidth()} 
                        fill="steelblue"
                        stroke={"black"}/>
                    );
                }
            )}
        </g>);
    } else {
        return (<g> {
            data && data.map(data => {
                return (<rect 
                        onMouseEnter={(event) => handleMouseEnter(event, data)} 
                        onMouseLeave={handleMouseLeave}
                        key={data.station}
                        x={xScale(data.station)} 
                        y={yScale(data.start)} 
                        height={height - yScale(data.start)} 
                        width={xScale.bandwidth()} 
                        fill={getColor(data, selectedStation)}
                        stroke={"black"}/>
                    );
                }
            )}
        </g>);
    }
}

export default Bars;