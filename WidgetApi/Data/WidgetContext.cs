using Microsoft.EntityFrameworkCore;
using WidgetApi.Models;

namespace WidgetApi.Data
{
    public class WidgetContext : DbContext
    {
        // Constructor to inject the database context options into the context 
        public WidgetContext(DbContextOptions<WidgetContext> options) : base(options) { }

        // Database set for the widgets table
        public DbSet<Widget> Widgets { get; set; }

        // Seed data for the database on startup (for testing purposes)
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Widget>().HasData(
                new Widget { Id = 1, Type = "bar-chart", Title = "Sales Overview", Data = "[10,20,30]" },
                new Widget { Id = 2, Type = "pie-chart", Title = "Market Share", Data = "[40,30,30]" },
                new Widget { Id = 3, Type = "table", Title = "User Data", Data = "[{\"name\":\"x\",\"value\":30,\"description\":\"This is x\",\"status\":\"active\"},{\"name\":\"y\",\"value\":23,\"description\":\"This is y\",\"status\":\"inactive\"},{\"name\":\"z\",\"value\":24,\"description\":\"This is z\",\"status\":\"active\"},{\"name\":\"a\",\"value\":25,\"description\":\"This is a\",\"status\":\"inactive\"},{\"name\":\"b\",\"value\":26,\"description\":\"This is b\",\"status\":\"active\"}]" },
                new Widget { Id = 4, Type = "histogram", Title = "Profits", Data = "[5,10,15,20,25,30,35]" },
                new Widget { Id = 5, Type = "line-graph", Title = "Costs", Data = "[3,7,15,20,30]" }
            );
        }
    }
}
