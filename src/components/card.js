import React from 'react';

const CardComponent = ({ title, value }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      <p className="text-3xl font-bold text-blue-500 mt-2">{value}</p>
    </div>
  );
};

export default CardComponent;
