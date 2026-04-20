import React from 'react';
import { useItems } from './hooks/useItems';
import ItemTable from './components/ItemTable';
import AddItemForm from './components/AddItemForm';

function App() {
  const { items, loading, error, addItem } = useItems();

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Navbar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-lg shadow-sm shadow-blue-200">
              <span className="text-white text-xl">📦</span>
            </div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">
              Stockly <span className="text-slate-400 font-normal">Manager</span>
            </h1>
          </div>
          <div className="flex items-center gap-4 text-sm font-medium text-slate-500">
            <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-100">
              {items.length} Total Items
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 pt-8">
        <div className="grid lg:grid-cols-[1fr_350px] gap-8 items-start">
          
          {/* Main List Area */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-800">Inventory Overview</h2>
                <p className="text-slate-500 mt-1">Real-time view of your current stock levels</p>
              </div>
            </div>

            {error ? (
              <div className="bg-rose-50 border border-rose-200 p-4 rounded-xl flex items-center gap-3 text-rose-700">
                <span className="text-xl">⚠️</span>
                <p>{error}</p>
              </div>
            ) : (
              <ItemTable items={items} loading={loading} />
            )}
          </section>

          {/* Sidebar Area */}
          <aside className="sticky top-24">
            <AddItemForm onAdd={addItem} />
            
            <div className="mt-6 p-5 bg-white rounded-xl border border-slate-200">
              <h3 className="font-semibold text-slate-800 mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
                💡 Useful Tips
              </h3>
              <ul className="text-sm text-slate-600 space-y-3">
                <li className="flex gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  Status is automatically calculated based on quantity.
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  Low stock threshold is set at 10 units.
                </li>
              </ul>
            </div>
          </aside>

        </div>
      </main>
    </div>
  );
}

export default App;
