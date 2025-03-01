# Dynamic Configurable Dashboard with WidgetAPI

This project consists of two main parts:
1. **WidgetAPI** - A .NET Core Web API (v9.0.101) using SQLite for widget data management.
2. **WidgetUI** - An Angular 19 application for visualizing widgets with lazy loading, state management, filtering, and virtual scrolling.

---

## 🚀 Getting Started

### Prerequisites
Ensure you have the following installed:
- **.NET SDK** (v9.0.101) - [Download](https://dotnet.microsoft.com/en-us/download/dotnet)
- **Node.js** (v23.7.0) - [Download](https://nodejs.org/)
- **Angular CLI** (v19.1.7)
  ```sh
  npm install -g @angular/cli
  ```
- **Git** (Optional, for cloning the repository) - [Download](https://git-scm.com/)

---

## 🛠️ WidgetAPI (.NET Core Web API)

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

### 4️⃣ API Documentation (Swagger)
- Open [http://localhost:5206/swagger](http://localhost:5206/swagger) in your browser.
- View and test API endpoints interactively.

### 5️⃣ API Endpoints
| Method  | Endpoint               | Description           |
|---------|------------------------|-----------------------|
| GET     | `/api/widgets`         | Get all widgets      |
| GET     | `/api/widgets/{id}`    | Get widget by ID     |
| POST    | `/api/widgets`         | Add a new widget     |
| PUT     | `/api/widgets/{id}`    | Update a widget      |
| DELETE  | `/api/widgets/{id}`    | Delete a widget      |

---

## 🎨 Dynamic Dashboard (Angular 18)

### 1️⃣ Navigate to the Angular Project
```sh
cd WidgetUI
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Run the Application
```sh
ng serve
```
The application will be available at: [http://localhost:4200](http://localhost:4200)

### 4️⃣ Features
- Drag/Drop features & state management
- Dynamic widget rendering (bar charts, pie charts, tables, histograms, line graphs)
- Full responsiveness & performance optimizations

---

## 🔗 Connecting Angular to the API
- Open `environment.ts` and update the API URL:
```ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:5206/api/widgets'
};
```
- Restart the Angular app for changes to take effect.

---

## 📌 Additional Notes
- Ensure the **WidgetAPI** is running before starting the **Angular App**.
- Use `Postman` or `Swagger` to test API endpoints.
- If using different ports, update `proxy.conf.json` in Angular to avoid CORS issues.

---

## 🤝 Contributing
Feel free to open a pull request if you want to contribute!

---
