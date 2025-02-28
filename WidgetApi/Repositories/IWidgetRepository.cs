using System.Collections.Generic;
using System.Threading.Tasks;
using WidgetApi.Models;

namespace WidgetApi.Repositories
{
    //  Interface to implement the CRUD operations for widgets in the database 
    public interface IWidgetRepository
    {
        Task<IEnumerable<Widget>> GetAllWidgetsAsync();
        Task<Widget?> GetWidgetByIdAsync(int id);
        Task AddWidgetAsync(Widget widget);
        Task UpdateWidgetAsync(Widget widget);
        Task DeleteWidgetAsync(int id);
        Task<bool> WidgetExistsAsync(int id);
    }
}
