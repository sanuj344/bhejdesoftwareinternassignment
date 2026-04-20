import React from 'react';
import StatusBadge from './StatusBadge';

const ItemTable = ({ items, loading }) => {
  if (loading && items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-20 bg-white rounded-2xl shadow-sm border border-gray-100">
        <div className="w-10 h-10 border-3 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-gray-500 font-medium tracking-tight">Syncing inventory...</p>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-20 bg-white rounded-2xl shadow-sm border border-gray-100 border-dashed">
        <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 ring-1 ring-gray-100">
          <span className="text-4xl">📥</span>
        </div>
        <p className="text-gray-900 font-bold text-xl mb-1 tracking-tight">Your inventory is empty</p>
        <p className="text-gray-500 max-w-[280px] text-center">Add your first item using the form on the right to start tracking stock.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-50/50 border-b border-gray-100">
              <th className="px-6 py-4.5 text-[11px] font-bold text-gray-400 uppercase tracking-widest pl-8">Item Details</th>
              <th className="px-6 py-4.5 text-[11px] font-bold text-gray-400 uppercase tracking-widest">SKU</th>
              <th className="px-6 py-4.5 text-[11px] font-bold text-gray-400 uppercase tracking-widest">Available</th>
              <th className="px-6 py-4.5 text-[11px] font-bold text-gray-400 uppercase tracking-widest pr-8 text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {items.map((item) => (
              <tr key={item.id} className="group hover:bg-gray-50/80 transition-all duration-200 cursor-default">
                <td className="px-6 py-5 pl-8">
                  <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {item.name}
                  </div>
                </td>
                <td className="px-6 py-5">
                  <code className="text-xs font-mono bg-gray-100 p-1 px-1.5 rounded-md text-gray-500 uppercase tracking-tight">
                    {item.sku}
                  </code>
                </td>
                <td className="px-6 py-5 text-sm font-medium text-gray-600">
                  {item.quantity}
                </td>
                <td className="px-6 py-5 pr-8 text-right">
                  <StatusBadge status={item.stockStatus} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ItemTable;
