'use client'
import React from 'react'
import { PolarAngleAxis, PolarRadiusAxis, PolarGrid, Radar, ResponsiveContainer, RadarChart, Legend} from 'recharts'

const data = [
  {
    "subject": "Positive",
    "A": 120,
    "B": 110,
    "fullMark": 150
  },
  {
    "subject": "Negative",
    "A": 98,
    "B": 130,
    "fullMark": 150
  },
  {
    "subject": "Growth",
    "A": 86,
    "B": 130,
    "fullMark": 150
  },
  {
    "subject": "Stagnation",
    "A": 99,
    "B": 100,
    "fullMark": 150
  },
  {
    "subject": "A",
    "A": 85,
    "B": 90,
    "fullMark": 150
  },
  {
    "subject": "B",
    "A": 65,
    "B": 85,
    "fullMark": 150
  }
]


const CustomRadarChart = () => {
  return (
    <>
    <RadarChart outerRadius={70} width={730} height={250} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis angle={30} domain={[0, 150]} />
      <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
      <Legend />
  </RadarChart>
    </>
  )
}

export default CustomRadarChart