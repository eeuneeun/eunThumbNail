import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import '../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis} from 'react-vis';
//npm install react-vis


const max=3000;
const min=1000;
let xNum=0;
let intervalObj = null;


export default function VisChart() {
     
  const [data, setData] = useState([
    {x: 0, y: 1000},
  ]);

  const [isRepeat, setIsRepeat] = useState(0);
    
  function auto(){
    setIsRepeat(isRepeat+1);
  };

  function stop(){
    setIsRepeat(0);
  };


  function day(){
    xNum = xNum + 1;
    setData([
      ...data,
      {
        x: xNum,
        y: Math.floor(Math.random() * (max - min)) + min,
      }
    ]);
  }

  // Set up the interval.
  useEffect(() => {
    if (isRepeat > 0) {
      intervalObj = setTimeout(()=>{
        day();
        setIsRepeat(isRepeat+1);
      }, 3000);
    }else{
      clearInterval(intervalObj);
    }
  }, [isRepeat]);


  return (
    <>
    <div className="btn-wrap">
        <Button size='mini' color='orange' onClick={auto}>자동</Button>
        <Button size='mini' color='yellow' onClick={stop}>정지</Button>
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
