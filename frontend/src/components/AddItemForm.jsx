import React, { useState } from 'react';

const AddItemForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    name: '',
    sku: '',
    quantity: 0
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [localError, setLocalError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'quantity' ? parseInt(value) || 0 : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError('');

    if (!formData.name || !formData.sku) {
      setLocalError('Please fill in both Name and SKU.');
      return;
    }

    setIsSubmitting(true);
    const result = await onAdd(formData);
    setIsSubmitting(false);

    if (result.success) {
      setFormData({ name: '', sku: '', quantity: 0 });
    } else {
      setLocalError(result.error);
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 transition-all duration-300">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-xl ring-4 ring-blue-50/50">
          +
        </div>
        <h2 className="text-xl font-bold text-gray-900 tracking-tight">Add New Item</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-[13px] font-bold text-gray-400 uppercase tracking-wider mb-2 ml-1">
            Item Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Wireless Mouse"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:bg-white focus:ring-4 focus:ring-blue-100/50 focus:border-blue-400 transition-all duration-200 placeholder:text-gray-300 font-medium"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-[13px] font-bold text-gray-400 uppercase tracking-wider mb-2 ml-1">
              SKU
            </label>
            <input
              type="text"
              name="sku"
              value={formData.sku}
              onChange={handleChange}
              placeholder="WM-123"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:bg-white focus:ring-4 focus:ring-blue-100/50 focus:border-blue-400 transition-all duration-200 uppercase font-mono text-sm placeholder:text-gray-300"
            />
          </div>
          <div>
            <label className="block text-[13px] font-bold text-gray-400 uppercase tracking-wider mb-2 ml-1">
              Quantity
            </label>
            <input
              type="number"
              name="quantity"
              min="0"
              value={formData.quantity}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:bg-white focus:ring-4 focus:ring-blue-100/50 focus:border-blue-400 transition-all duration-200 font-medium"
            />
          </div>
        </div>
        
        {localError && (
          <div className="flex items-center gap-2 text-sm text-rose-600 bg-rose-50 p-4 rounded-xl border border-rose-100 animate-in fade-in slide-in-from-top-1">
            <span>⚠️</span>
            <p className="font-medium">{localError}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full relative group mt-4 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:opacity-90"></div>
          <div className="relative flex items-center justify-center gap-2 py-4 px-6 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 transition-transform active:scale-[0.98]">
            {isSubmitting ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
              'Create Item'
            )}
          </div>
        </button>
      </form>
    </div>
  );
};

export default AddItemForm;
