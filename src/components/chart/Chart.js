import React from "react";
import './Chart.css'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default function Chart({ title, data, dataKey, grid }) {
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4}>
        <LineChart data={data}>
            <Line type="monotone" dataKey={dataKey} stroke="#5550bd"></Line>
            <XAxis dataKey="name" stroke="#5550bd"></XAxis>
            <Tooltip></Tooltip>
            {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="10"></CartesianGrid>}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
