namespace InventoryApi.Models
{
    /// <summary>
    /// Represents an inventory item.
    /// </summary>
    public class Item
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string SKU { get; set; } = string.Empty;
        public int Quantity { get; set; }

        /// <summary>
        /// Computed stock status based on quantity.
        /// </summary>
        public string StockStatus => Quantity == 0
            ? "Out of Stock"
            : Quantity < 10
                ? "Low Stock"
                : "In Stock";
    }
}
