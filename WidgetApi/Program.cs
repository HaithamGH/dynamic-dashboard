using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using WidgetApi.Data;
using WidgetApi.Repositories;

var builder = WebApplication.CreateBuilder(args);

// Add CORS policy to allow requests from the frontend application running on localhost:4200.
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontendApp",
        policy =>
        {
            policy.WithOrigins("http://localhost:4200")
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});

// Add services for controllers.
builder.Services.AddControllers();

// Add services for API documentation. 
builder.Services.AddEndpointsApiExplorer();

// Add services for Swagger documentation.
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "Widget API", Version = "v1" });
});

// Add services for Entity Framework Core with SQLite.
builder.Services.AddDbContext<WidgetContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));

// Add services for the repository pattern.
builder.Services.AddScoped<IWidgetRepository, WidgetRepository>();

// Build the app.
var app = builder.Build();

// Configure the HTTP request pipeline to include middleware for handling requests and responses.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Widget API v1"));
}
app.UseCors("AllowFrontendApp");
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();
