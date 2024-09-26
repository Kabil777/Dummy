import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import "./StorageChart.css";

const data = [
  { name: "System", value: 200, color: "#7BC043" },
  { name: "Photo", value: 600, color: "#0DADEA" },
  { name: "Music", value: 900, color: "#2855CC" },
  { name: "Application", value: 1000, color: "#FFC107" },
  { name: "Video", value: 700, color: "#FF5722" },
  { name: "Other", value: 555, color: "#F57C00" },
  { name: "Available Size", value: 1045, color: "#dfe0f1" },
];

let val = data.reduce((acc, current) => acc + current.value, 0);
val = (val / 1024).toFixed(2);

const Mukil = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(-1);
  };

  const renderLabel = () => {
    return (
      <text
        x={350} 
        y={280}
        textAnchor="middle"
        dominantBaseline="middle"
        className="center-label"
      >
        Used Size: {val} GB
      </text>
    );
  };

  // Custom formatter for the legend to show name and value
  const renderLegend = (value, entry) => {
    const { value: chartValue } = entry.payload;
    return `${value}: ${chartValue}MB`;
  };

  return (
    <div className="maincont">
      <div className="chart-container">
        <h1>Internal Storage Of Information</h1>
        <PieChart width={700} height={600}> {200}
          <Pie
            data={data}
            dataKey="value"
            outerRadius={200}
            innerRadius={130}
            onMouseEnter={onPieEnter}
            onMouseLeave={onPieLeave}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                outerRadius={activeIndex === index ? 220 : 200}
              />
            ))}
          </Pie>
          {renderLabel()}
          <Tooltip />
        </PieChart>
        <div className="total-size">
          <h2>Total Size: 10GB</h2>
        </div>
      </div>
      <div>
     <p>{renderLegend} </p> 

      </div>
    </div>
  );
};

export default Mukil;
