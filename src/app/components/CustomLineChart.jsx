'use client'
import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'Monday',
      SentimentScore: 30
    },
    {
      name: "Tuesday",
      SentimentScore: 40,
    },
    {
      name: "Wednesday",
      SentimentScore: 70,
    },
    {
      name: "Thursday",
      SentimentScore: 20,
    },
    {
      name: "Friday",
      SentimentScore: 60,
    },
  ];

const CustomLineChart = () => {
  return (
    <>
    <div className='mt-4'>
      <h2 className='text-center text-2xl font-semibold'>7 Day Report</h2>
      <div className='flex justify-center'>
      <ResponsiveContainer width="70%" aspect={3} className>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 15,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid  horizontal="true" vertical="" stroke="#000"/>
        <XAxis dataKey="name" tick={{fill:"#000"}}/>
        <YAxis type="number" domain={[0, 100]} tick={{fill:"#000"}} />
        <Tooltip contentStyle={{ backgroundColor: "#8884d8", color: "#fff" }} itemStyle={{ color: "#000" }} cursor={false}/>
        <Line type="monotone" dataKey="SentimentScore" stroke="#8884d8" strokeWidth="5" dot={{fill:"#2e4355",stroke:"#8884d8",strokeWidth: 2,r:5}} activeDot={{fill:"#2e4355",stroke:"#8884d8",strokeWidth: 5,r:10}} />
        
      </LineChart>
    </ResponsiveContainer>
    </div>
    </div>
  </>
  )
}

export default CustomLineChart