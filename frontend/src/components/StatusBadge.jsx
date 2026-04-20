import React from 'react';

const StatusBadge = ({ status }) => {
  const getStatusStyles = (status) => {
    switch (status) {
      case 'In Stock':
        return 'bg-emerald-50 text-emerald-700 border-emerald-100 ring-emerald-500/10';
      case 'Low Stock':
        return 'bg-amber-50 text-amber-700 border-amber-100 ring-amber-500/10';
      case 'Out of Stock':
        return 'bg-rose-50 text-rose-700 border-rose-100 ring-rose-500/10';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-100 ring-gray-500/10';
    }
  };

  return (
    <span className={`inline-flex items-center px-3 py-0.5 rounded-full text-xs font-semibold border ring-1 ring-inset transition-all duration-200 ${getStatusStyles(status)}`}>
      {status}
    </span>
  );
};

export default StatusBadge;
