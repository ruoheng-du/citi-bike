import React from 'react';
import XAxis from './xAxis';
import YAxis from './yAxis';
import Points from './points';

function ScatterPlot(props){
    const { offsetX, offsetY, data, xScale, yScale, height, width, selectedStation, setSelectedStation, setTooltipX, setTooltipY } = props;

    const handleMouseEnter = (event, d) => {
        setSelectedStation(d);
        setTooltipX(event.pageX);
        setTooltipY(event.pageY);
    };

    const handleMouseLeave = () => {
        setSelectedStation(null);
        setTooltipX(null);
        setTooltipY(null);
    };

    //task1: transform the <g> with the offsets so that the barchart can show properly 
    //task2: import the components needed and uncomment the components in the return 
    return (<g transform={`translate(${offsetX}, ${offsetY})`}>
                <Points data={data} xScale={xScale} yScale={yScale} height={height} width={width}
                selectedStation={selectedStation} setSelectedStation={setSelectedStation}
                handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} />
                <YAxis yScale={yScale} height={height} axisLable={"Trip duration end in"}/>
                <XAxis xScale={xScale} height={height} width={width} axisLable={"Trip duration start from"}/>
        </g>
    );
}

export default ScatterPlot