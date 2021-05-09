import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { Button } from "semantic-ui-react";

const max=3000;
const min=1000;
let xNum=0;
let intervalForSecond = null;


export default function ReChart() {
    
    const [data, setData] = useState([]);

    function auto(){
        intervalForSecond = setInterval(function(){
            day()
            console.log(data)
        }, 3000);
    };

    function stop(){
        clearInterval(intervalForSecond)
        console.log("정지")

    };


    function day(){
        xNum = xNum+1
        setData([
            ...data,
            {
                name: xNum,
                line01: Math.floor(Math.random() * (max - min)) + min,
                line02: Math.floor(Math.random() * (max - min)) + min,
                amt: Math.floor(Math.random() * (max - min)) + min
            }
        ]);
        console.log(xNum);
    }




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
