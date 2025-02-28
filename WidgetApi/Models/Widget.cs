using System.Collections.Generic;

namespace WidgetApi.Models
{
    public class Widget
    {
        public int Id { get; set; }
        public string Type { get; set; } = string.Empty;
        public string Title { get; set; } = string.Empty;
        public string Data { get; set; } = string.Empty;  
    }
}
