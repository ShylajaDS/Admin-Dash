import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const BarAnimation = () => {
  const chartContainer = useRef(null);
  let barChart;

  useEffect(() => {
    const ctx = chartContainer.current.getContext('2d');
    barChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'XML Pending',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255, 99, 132, 0.4)',
            hoverBorderColor: 'rgba(255, 99, 132, 1)',
            data: Array.from({ length: 12 }, () => Math.floor(Math.random() * (700 - 100 + 1) + 100)),
          },
          {
            label: 'Release Label',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(54, 162, 235, 0.4)',
            hoverBorderColor: 'rgba(54, 162, 235, 1)',
            data: Array.from({ length: 12 }, () => Math.floor(Math.random() * (700 - 100 + 1) + 100)),
          },
        ],
      },
      options: {
        animation: {
          duration: 1000, 
        },
      },
    });

    return () => {
      barChart.destroy();
    };
  }, []);

  return (
    <div>
      <canvas ref={chartContainer} style={{ width: '591px', height: '350px',marginLeft:'29px',marginTop:'5px',fontFamily:'Poppins'}} />
    </div>
  );
};

export default BarAnimation;
