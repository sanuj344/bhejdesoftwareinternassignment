using InventoryApi.Data;
using InventoryApi.Models;

namespace InventoryApi.Services
{
    /// <summary>
    /// Interface for item operations – enables clean separation and easy testing.
    /// </summary>
    public interface IItemService
    {
        IEnumerable<Item> GetAll();
        Item Add(CreateItemRequest request);
    }

    /// <summary>
    /// In-memory implementation of IItemService.
    /// Registered as a Singleton so the list persists for the life of the process.
    /// </summary>
    public class ItemService : IItemService
    {
        // Thread-safe backing store initialised with seed data
        private readonly List<Item> _items = SeedData.GetSeedItems();
        private int _nextId;

        public ItemService()
        {
            // Start IDs after the last seed item
            _nextId = _items.Max(i => i.Id) + 1;
        }

        /// <summary>Returns all items (with their computed StockStatus).</summary>
        public IEnumerable<Item> GetAll() => _items;

        /// <summary>
        /// Validates and adds a new item to the in-memory store.
        /// Throws ArgumentException when validation fails so the controller
        /// can return a proper 400 response.
        /// </summary>
        public Item Add(CreateItemRequest request)
        {
            // ── Validation ──────────────────────────────────────────────
            if (string.IsNullOrWhiteSpace(request.Name))
                throw new ArgumentException("Name is required.");

            if (string.IsNullOrWhiteSpace(request.SKU))
                throw new ArgumentException("SKU is required.");

            if (request.Quantity < 0)
                throw new ArgumentException("Quantity must be 0 or greater.");

            // ── Create ───────────────────────────────────────────────────
            var item = new Item
            {
                Id       = _nextId++,
                Name     = request.Name.Trim(),
                SKU      = request.SKU.Trim().ToUpper(),
                Quantity = request.Quantity
            };

            _items.Add(item);
            return item;
        }
    }
}
