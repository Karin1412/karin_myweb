import React from 'react';
import Header from './components/header';
import CardComponent from './components/card';
import ChartComponent from './components/chart';

const App = () => {
  const cardData = [
    { title: 'Total Sales', value: '$5000' },
    { title: 'Orders', value: '200' },
    { title: 'Customers', value: '150' },
  ];

  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Sales',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],}
  // ... (giữ nguyên phần code cho CardComponent và ChartComponent)

  return (
    <div>
      <Header />

      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-3 gap-4">
          {cardData.map((card, index) => (
            <CardComponent key={index} title={card.title} value={card.value} />
          ))}
        </div>

        <div className="mt-8">
          <ChartComponent data={chartData} type="bar" />
        </div>
      </div>
    </div>
  );
};

export default App;


