import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-2xl font-semibold">Admin Dashboard</div>
        <nav>
          <ul className="flex space-x-4">
            <li className="text-white hover:text-gray-300 cursor-pointer">Home</li>
            <li className="text-white hover:text-gray-300 cursor-pointer">Products</li>
            <li className="text-white hover:text-gray-300 cursor-pointer">Orders</li>
            <li className="text-white hover:text-gray-300 cursor-pointer">Customers</li>
            {/* Add more menu items as needed */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
