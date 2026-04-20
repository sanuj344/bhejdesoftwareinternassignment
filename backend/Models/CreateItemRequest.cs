namespace InventoryApi.Models
{
    /// <summary>
    /// DTO used when the client sends a request to create a new item.
    /// </summary>
    public class CreateItemRequest
    {
        public string Name { get; set; } = string.Empty;
        public string SKU { get; set; } = string.Empty;
        public int Quantity { get; set; }
    }
}
