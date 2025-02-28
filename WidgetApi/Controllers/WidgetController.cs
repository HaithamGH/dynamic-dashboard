using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WidgetApi.Data;
using WidgetApi.Models;

[Route("api/[controller]")]
[ApiController]
public class WidgetsController : ControllerBase
{
    private readonly WidgetContext _context;

    // Constructor to inject the database context into the controller
    public WidgetsController(WidgetContext context)
    {
        _context = context;
    }

    // GET: api/widgets
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Widget>>> GetWidgets()
    {
        var widgets = await _context.Widgets.ToListAsync();
        return Ok(widgets);
    }

    // GET: api/widgets/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Widget>> GetWidget(int id)
    {
        var widget = await _context.Widgets.FindAsync(id);

        if (widget == null)
        {
            return NotFound();
        }

        return widget;
    }

    // POST: api/widgets
    [HttpPost]
    public async Task<ActionResult<Widget>> CreateWidget(Widget widget)
    {
        _context.Widgets.Add(widget);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetWidget), new { id = widget.Id }, widget);
    }

    // PUT: api/widgets/5
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateWidget(int id, Widget widget)
    {
        if (id != widget.Id)
        {
            return BadRequest();
        }

        _context.Entry(widget).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!WidgetExists(id))
            {
                return NotFound();
            }
            else
            {
                throw;
            }
        }

        return NoContent();
    }

    // DELETE: api/widgets/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteWidget(int id)
    {
        var widget = await _context.Widgets.FindAsync(id);
        if (widget == null)
        {
            return NotFound();
        }

        _context.Widgets.Remove(widget);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    // Check if a widget exists in the database by id
    private bool WidgetExists(int id)
    {
        return _context.Widgets.Any(e => e.Id == id);
    }
}
