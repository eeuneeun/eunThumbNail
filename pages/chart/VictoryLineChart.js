import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { Button } from "semantic-ui-react";
import {VictoryChart, VictoryLine, VictoryTheme} from 'victory';
//npm install victory



const max=3000;
const min=1000;
let xNum=0;

export default function VictoryLineChart() {
     
  const [data, setData] = useState([
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 14250},
    {quarter: 4, earnings: 19000}
  ]);

  function day(){
    xNum = xNum+1
    setData([
        ...data,
        {
            quarter: xNum,
            earnings: Math.floor(Math.random() * (max - min)) + min,
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
    
    <VictoryChart
      width={500}
      height={300}
      theme={VictoryTheme.material}
      animate={{ duration: 500 }}
    >
      <VictoryLine
        interpolation="natural"
        style={{
          data: { stroke: "#82ca9d" },
          parent: { border: "1px solid #ccc"}
        }}
        data={data}
        x="quarter"
        y="earnings"
      />
    </VictoryChart>
    </>
  );
}
