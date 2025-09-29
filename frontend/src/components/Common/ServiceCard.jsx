import React from 'react';

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
      <div className="text-blue-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default ServiceCard;