import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = ({ data, type }) => {
  useEffect(() => {
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
      type: type || 'bar',
      data: data,
    });
  }, [data, type]);

  return <canvas id="myChart" width="400" height="400"></canvas>;
};

export default ChartComponent;
