import React, { Component } from 'react';
import { Chart } from './Chart';

export class Bar extends Component{
    render(){
        return (
            <Chart width="420" height="150">
                <title id="title">A bar chart showing information</title>
                <desc id="desc">Showing a comparison of something</desc>
                <g className="bar">
                    <rect width="40" height="19"></rect>
                    <text x="45" y="9.5" dy=".35em">4 apples</text>
                </g>
                <g className="bar">
                    <rect width="80" height="19" y="20"></rect>
                    <text x="85" y="28" dy="0.35em">8 bananas</text>
                </g>
                <g className="bar">
                    <rect width="150" height="19" y="40"></rect>
                    <text x="150" y="48" dy="0.35em">15 kiwis</text>
                </g>
                <g className="bar">
                    <rect width="160" height="19" y="60"></rect>
                    <text x="161" y="68" dy="0.35em">16 oranges</text>
                </g>
                <g className="bar">
                    <rect width="230" height="19" y="80"></rect>
                    <text x="235" y="88" dy="0.35em">24 lemons</text>
                </g>
            </Chart>
        );
    }
}
