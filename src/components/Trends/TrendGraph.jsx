import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

import "./trend.css"

const trends = [
    {
      id: 1,
      type: 'Resolved',
      count: 449,
    },
    {
      id: 2,
      type: 'Received',
      count: 426,
    },
    {
      id: 3,
      type: 'Average first response time',
      count: '33m', 
      value: 33     
    },
    {
      id: 4,
      type: 'Average response time',
      count: '3h 8m',
      value: 188     
    },
    {
      id: 5,
      type: 'Resolution within SLA',
      count: '84%',  
      value: 84       
    },
  ];

const TrendChart = () => {
  // Chart data
  const data = {
    labels: trends.map(trend => trend.type),
    datasets: [
      {
        label: 'Trend Data',
        data: trends.map(trend => trend.value || trend.count),
        backgroundColor: 'rgba(55, 81, 255, .6)',
        borderColor: 'rgba(55, 81, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const trend = trends[context.dataIndex];
            return `${trend.type}: ${trend.count}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Values (minutes, %, counts)',
        },
      },
    },
  };

  return (
    <div className='w-full chart'>
      <Bar data={data} options={options} />
    </div>
  );
};

export default TrendChart;
