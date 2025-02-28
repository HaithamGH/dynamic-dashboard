using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WidgetApi.Data;
using WidgetApi.Models;
using WidgetApi.Repositories;

namespace WidgetApi.Repositories
{
    public class WidgetRepository : IWidgetRepository
    {
        private readonly WidgetContext _context;

        // Constructor to inject the database context into the repository 
        public WidgetRepository(WidgetContext context)
        {
            _context = context;
        }

        // Get all widgets from the database
        public async Task<IEnumerable<Widget>> GetAllWidgetsAsync()
        {
            return await _context.Widgets.ToListAsync();
        }

        // Get a widget by id from the database
        public async Task<Widget?> GetWidgetByIdAsync(int id)
        {
            return await _context.Widgets.FindAsync(id);
        }

        // Add a widget to the database
        public async Task AddWidgetAsync(Widget widget)
        {
            _context.Widgets.Add(widget);
            await _context.SaveChangesAsync();
        }

        // Update a widget in the database
        public async Task UpdateWidgetAsync(Widget widget)
        {
            _context.Entry(widget).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        // Delete a widget from the database
        public async Task DeleteWidgetAsync(int id)
        {
            var widget = await _context.Widgets.FindAsync(id);
            if (widget != null)
            {
                _context.Widgets.Remove(widget);
                await _context.SaveChangesAsync();
            }
        }

        // Check if a widget exists in the database
        public async Task<bool> WidgetExistsAsync(int id)
        {
            return await _context.Widgets.AnyAsync(w => w.Id == id);
        }
    }
}
