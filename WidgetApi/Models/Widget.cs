using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WidgetApi.Models
{
    public class Widget
    {
        [Key] // Defines this as a primary key
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)] // Automatically generates a unique value
        public int Id { get; set; }
        public string Type { get; set; } = string.Empty;
        public string Title { get; set; } = string.Empty;
        public string Data { get; set; } = string.Empty;  
    }
}
