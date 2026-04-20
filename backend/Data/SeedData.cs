using InventoryApi.Models;

namespace InventoryApi.Data
{
    /// <summary>
    /// Provides hardcoded seed data for the in-memory item store.
    /// No database needed – data lives in memory for the lifetime of the app.
    /// </summary>
    public static class SeedData
    {
        public static List<Item> GetSeedItems() => new()
        {
            new Item { Id = 1, Name = "Wireless Keyboard",   SKU = "WK-001", Quantity = 45 },
            new Item { Id = 2, Name = "USB-C Hub",           SKU = "UC-002", Quantity = 8  },
            new Item { Id = 3, Name = "Monitor Stand",       SKU = "MS-003", Quantity = 0  },
            new Item { Id = 4, Name = "Mechanical Mouse",    SKU = "MM-004", Quantity = 22 },
            new Item { Id = 5, Name = "Laptop Sleeve 15\"",  SKU = "LS-005", Quantity = 3  },
            new Item { Id = 6, Name = "HDMI Cable 2m",       SKU = "HC-006", Quantity = 60 },
            new Item { Id = 7, Name = "Webcam HD 1080p",     SKU = "WC-007", Quantity = 0  },
            new Item { Id = 8, Name = "Desk Lamp LED",       SKU = "DL-008", Quantity = 15 },
        };
    }
}
