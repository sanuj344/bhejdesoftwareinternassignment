using InventoryApi.Services;

var builder = WebApplication.CreateBuilder(args);

// ── Services ─────────────────────────────────────────────────────────────────
builder.Services.AddControllers();

// Register ItemService as Singleton so the in-memory list persists
builder.Services.AddSingleton<IItemService, ItemService>();

// ── CORS ─────────────────────────────────────────────────────────────────────
// Allow the React dev server (port 5173) to call our API
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

// ── Middleware pipeline ───────────────────────────────────────────────────────
app.UseCors("AllowFrontend");
app.UseAuthorization();
app.MapControllers();

app.Run();
