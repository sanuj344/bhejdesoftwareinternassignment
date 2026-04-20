# 📦 Inventory Items Manager (Stockly)

A clean, modern, and well-structured full-stack application built for efficient inventory management.

## 🚀 Features
- **Real-time Inventory List**: View all items with computed stock statuses.
- **Dynamic Stock Status**: Automatic badge coloring based on quantity.
  - 🟢 **In Stock**: 10 or more units
  - 🟡 **Low Stock**: Less than 10 units
  - 🔴 **Out of Stock**: 0 units
- **Instant Addition**: Add new items via a clean, validated form.
- **Mobile Responsive**: Works perfectly on any screen size.
- **Premium UI**: Soft colors, Inter typography, and subtle micro-interactions.

## 🛠️ Tech Stack
- **Frontend**: React (Vite), Tailwind CSS v4, Axios.
- **Backend**: ASP.NET Core Web API (.NET 8/10).
- **Architecture**: Separated Controller-Service pattern, Service-Repository (in-memory).

---

## 🏃 How to Run

### 1. Start the Backend API
```powershell
cd backend
dotnet run
```
The API will start at `http://localhost:5223`.

### 2. Start the Frontend
```powershell
cd frontend
npm install
npm run dev
```
Open `http://localhost:5173` in your browser.

---

## 📝 Assumptions & Decisions
- **In-Memory Storage**: Data is stored in a `List<Item>` within the backend. It will reset if the server restarts.
- **No Auth**: Built as a public internal tool (MVP focus).
- **CORS**: Backend is configured to specifically allow requests from the React development server.
- **Standardized SKU**: SKUs are automatically converted to uppercase for consistency.

## 📁 Project Structure
- `backend/`: ASP.NET Core project with Controllers, Models, and Services.
- `frontend/`: React app with custom hooks for state management and modular Tailwind components.
