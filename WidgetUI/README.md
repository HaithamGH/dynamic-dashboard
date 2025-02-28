# Widget UI (Angular 19)

This project is an Angular 19 application for visualizing widgets with lazy loading, state management, filtering, and virtual scrolling.

---

## 🚀 Getting Started

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v23.7.0) - [Download](https://nodejs.org/)
- **Angular CLI** (v19.1.7)
  ```sh
  npm install -g @angular/cli
  ```
- **Git** (Optional, for cloning the repository) - [Download](https://git-scm.com/)

---

## 🎨 Widget UI (Angular 19)

### 1️⃣ Clone the Repository
```sh
  git clone https://github.com/HaithamGH/dynamic-dashboard.git
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
- Lazy loading & state management
- Dynamic widget rendering (bar charts, pie charts, tables, histograms, line graphs)
- Filtering & virtual scrolling for large datasets
- Full responsiveness & performance optimizations

---

## 🔗 Connecting to an API
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
- Ensure the backend API is running before starting the Angular App.
- If using different ports, update `proxy.conf.json` to avoid CORS issues.

---

## 🤝 Contributing
Feel free to open a pull request if you want to contribute!

---