# WidgetAPI (.NET Core Web API)

This project is a .NET Core Web API using SQLite for widget data management. It provides endpoints for fetching, adding, updating, and deleting widget data.

---

## 🚀 Getting Started

### Prerequisites
Ensure you have the following installed:
- **.NET SDK** (v9.0.101) - [Download](https://dotnet.microsoft.com/en-us/download/dotnet)
- **Git** (Optional, for cloning the repository) - [Download](https://git-scm.com/)

---

## 🛠️ Setup and Run WidgetAPI

### 1️⃣ Clone the Repository
```sh
  git clone https://github.com/HaithamGH/dynamic-dashboard.git
  cd WidgetApi
```

### 2️⃣ Setup the Database
```sh
  dotnet ef migrations add InitialCreate
  dotnet ef database update
```

### 3️⃣ Run the API
```sh
  dotnet run
```
The API will be available at: `http://localhost:5206` (HTTP).

---

## 📖 API Documentation (Swagger)
- Open [http://localhost:5206/swagger](http://localhost:5206/swagger) in your browser.
- View and test API endpoints interactively.

### API Endpoints
| Method  | Endpoint               | Description           |
|---------|------------------------|-----------------------|
| GET     | `/api/widgets`         | Get all widgets      |
| GET     | `/api/widgets/{id}`    | Get widget by ID     |
| POST    | `/api/widgets`         | Add a new widget     |
| PUT     | `/api/widgets/{id}`    | Update a widget      |
| DELETE  | `/api/widgets/{id}`    | Delete a widget      |

---

## 📌 Additional Notes
- Use `Postman` or `Swagger` to test API endpoints.
- Ensure the database is properly migrated using `dotnet ef database update`.

---

## 🤝 Contributing
Feel free to open a pull request if you want to contribute!

---
