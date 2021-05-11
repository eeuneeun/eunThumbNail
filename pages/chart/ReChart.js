import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { Button } from "semantic-ui-react";
//npm install recharts

var _ = require('lodash');

const max=3000;
const min=1000;
let xNum=0;
let intervalObj = null;

function ReChart() {
    
  const [data, setData] = useState([]);
  const [isRepeat, setIsRepeat] = useState(0);
    
    function auto(){
      setIsRepeat(isRepeat+1);
    };

    function stop(){
      setIsRepeat(0);
    };


    function day(){
        xNum = xNum+1;
        setData([
          ...data,
          {
            name: xNum,
            line01: Math.floor(Math.random() * (max - min)) + min,
            line02: Math.floor(Math.random() * (max - min)) + min,
            amt: Math.floor(Math.random() * (max - min)) + min
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


    <LineChart 
      width={500}
      height={300}
      data={data}
    >
      <CartesianGrid strokeDasharray="3 3" />
      
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="line01"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line 
        type="monotone"
        dataKey="line02"
        stroke="#82ca9d" />
    </LineChart>
    </>
  );
}



export default ReChart;