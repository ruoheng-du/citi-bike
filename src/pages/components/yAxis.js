import React from 'react';

function YAxis(props){
    const { yScale, height, axisLable } = props;
    if(yScale){
        const ticks = yScale.ticks();

        return (
        <g>
            <line y2={height} stroke="black" />
                {ticks.map((tickValue, index) => (
                    <g key={index} transform={`translate(-10, ${yScale(tickValue)})`}>
                        <line x2={10} stroke="black" />
                        <text style={{ textAnchor: 'end', fontSize: '13px' }}>
                            {tickValue}
                        </text>
                    </g>
                ))}
            <text style={{ textAnchor:'end', fontSize:'13px'}} transform={`translate(20, 0)rotate(-90)`}>
                {axisLable}
            </text>
        </g>
        );
    } else {
        return <g></g>
    }

}

export default YAxis