# Widget API - .NET Core Web API with SQLite

## Overview
The Widget API is a .NET Core Web API that provides CRUD operations for managing widgets. The API uses SQLite as the database and includes Swagger documentation for easy testing.

## Features
- CRUD operations for widgets
- SQLite database integration
- Data seeding with initial widget data
- Swagger documentation for API testing

---

## Prerequisites
Ensure you have the following installed:
- [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- [SQLite](https://www.sqlite.org/download.html)
- A tool like Postman or a browser to test API endpoints

---

## Installation and Setup

### Step 1: Clone the Repository
```sh
git clone <repository_url>
cd WidgetApi
```

### Step 2: Install Dependencies
```sh
dotnet restore
```

### Step 3: Apply Migrations and Seed Data
```sh
dotnet ef database update
```

### Step 4: Run the Application
```sh
dotnet run
```

The API will start at `https://localhost:5001/` (or `http://localhost:5000/`).

---

## Database Schema
The API includes two models:
- **Widget**: Represents different types of widgets (charts, tables, etc.).
- **UserData**: Represents detailed data for table widgets.

### Widget Model
```csharp
public class Widget
{
    public int Id { get; set; }
    public string Type { get; set; }
    public string Title { get; set; }
    public List<int>? Data { get; set; }
}
```

### UserData Model
```csharp
public class UserData
{
    public int Id { get; set; }
    public string Name { get; set; }
    public int Value { get; set; }
    public string Description { get; set; }
    public string Status { get; set; }
}
```

---

## API Endpoints

### Base URL
```
https://localhost:5001/api/widgets
```

### Get All Widgets
**GET** `/api/widgets`
- Response: List of all widgets.

### Get Widget by ID
**GET** `/api/widgets/{id}`
- Response: Widget object.

### Create a Widget
**POST** `/api/widgets`
- Request Body:
```json
{
  "type": "bar-chart",
  "title": "New Chart",
  "data": [10, 20, 30]
}
```
- Response: Created widget.

### Update a Widget
**PUT** `/api/widgets/{id}`
- Request Body:
```json
{
  "id": 1,
  "type": "bar-chart",
  "title": "Updated Chart",
  "data": [15, 25, 35]
}
```
- Response: No content (204).

### Delete a Widget
**DELETE** `/api/widgets/{id}`
- Response: No content (204).

---

## Swagger Documentation
Swagger UI is available at:
```
https://localhost:5001/swagger/index.html
```
Use it to explore and test the API interactively.

---

## License
This project is licensed under the MIT License.

---

## Author
Developed by [Your Name].

