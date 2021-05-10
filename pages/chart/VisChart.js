import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { Button } from "semantic-ui-react";
import '../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis} from 'react-vis';
//npm install react-vis


const max=3000;
const min=1000;
let xNum=0;

export default function VisChart() {
     
  const [data, setData] = useState([]);

  function day(){
    xNum = xNum+1
    setData([
        ...data,
        {
            x: xNum,
            y: Math.floor(Math.random() * (max - min)) + min,
        }
    ]);
    console.log(xNum);
  }

  return (
    <>
    <div className="btn-wrap">
        <Button size='mini' color='orange'>자동</Button>
        <Button size='mini' color='yellow'>정지</Button>
        <Button size='mini' color='olive' onClick={day}>일</Button>
        <Button size='mini' color='green'>주</Button>
        <Button size='mini' color='teal'>월</Button>
        <Button size='mini' color='blue'>년</Button>
    </div>
    
    <XYPlot  width={500} height={300}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis />
      <YAxis />
      <LineSeries data={data} />
    </XYPlot>
    </>
  );
}
