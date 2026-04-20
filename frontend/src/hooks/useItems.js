import { useState, useEffect, useCallback } from 'react';
import { inventoryService } from '../services/api';

export const useItems = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchItems = useCallback(async () => {
    try {
      setLoading(true);
      const data = await inventoryService.getItems();
      setItems(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch inventory items.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const addItem = async (newItem) => {
    try {
      const addedItem = await inventoryService.addItem(newItem);
      setItems((prev) => [...prev, addedItem]);
      return { success: true };
    } catch (err) {
      const message = err.response?.data?.error || 'Failed to add item.';
      return { success: false, error: message };
    }
  };

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  return { items, loading, error, addItem, refresh: fetchItems };
};
