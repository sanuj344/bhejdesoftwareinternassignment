using InventoryApi.Models;
using InventoryApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace InventoryApi.Controllers
{
    /// <summary>
    /// Handles all HTTP requests related to inventory items.
    /// Base route: /api/items
    /// </summary>
    [ApiController]
    [Route("api/[controller]")]
    public class ItemsController : ControllerBase
    {
        private readonly IItemService _itemService;

        public ItemsController(IItemService itemService)
        {
            _itemService = itemService;
        }

        // ── GET /api/items ───────────────────────────────────────────────
        /// <summary>Returns the full list of inventory items with computed stock status.</summary>
        [HttpGet]
        public ActionResult<IEnumerable<Item>> GetAll()
        {
            var items = _itemService.GetAll();
            return Ok(items);
        }

        // ── POST /api/items ──────────────────────────────────────────────
        /// <summary>
        /// Adds a new item to the inventory.
        /// Returns 400 Bad Request with an error message if validation fails.
        /// Returns 201 Created with the new item on success.
        /// </summary>
        [HttpPost]
        public ActionResult<Item> Create([FromBody] CreateItemRequest request)
        {
            try
            {
                var item = _itemService.Add(request);
                // 201 Created + Location header pointing to the new resource
                return CreatedAtAction(nameof(GetAll), new { id = item.Id }, item);
            }
            catch (ArgumentException ex)
            {
                return BadRequest(new { error = ex.Message });
            }
        }
    }
}
