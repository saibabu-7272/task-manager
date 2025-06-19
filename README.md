# Task Manager Application

A simple full-stack Task Manager app to create, view, update, and delete tasks. No authentication, no filtering, and no optional UI features — just core functionality.

---

## Tech Stack

### Backend
- Node.js
- Express.js
- TypeORM
- SQLite
- TypeScript

### 🌐 Frontend
- React (Created using `create-react-app`)
- React Router
- Plain CSS

---

## 📁 Project Structure

task-manager/
├── backend/
├── frontend/
└── README.md


---

## ⚙️ Setup Instructions

### 🔧 Backend Setup (`/backend`)

#### ✅ Prerequisites:
- Node.js installed
- npm or yarn

#### 📥 Install Dependencies
```bash
cd backend
npm install
```
Configure Environment
Create a .env file in backend/:
```
PORT=3001
```
💾 SQLite Database Info
No need to set up SQLite manually.

TypeORM will automatically create a database.sqlite file on first run.

🚀 Run Backend Server
```
cd backend
npx ts-node src/index.ts
npm install --save-dev @types/express @types/node @types/cors
```
API base URL: http://localhost:3001
# Frontend Setup (/frontend)
### Prerequisites:
  Node.js installed
  npm or yarn
📥 Install Dependencies
```
cd frontend
npm install
```
### Configure Environment
Create a .env file in frontend/:
```
REACT_APP_API_URL=http://localhost:3001
```
### Run Frontend React App
```
npm start
```
Frontend URL: http://localhost:3000

### API Endpoints
| Method | Endpoint     | Description         |
| ------ | ------------ | ------------------- |
| GET    | `/tasks`     | Get all tasks       |
| POST   | `/tasks`     | Create a new task   |
| PUT    | `/tasks/:id` | Update a task by ID |
| DELETE | `/tasks/:id` | Delete a task by ID |
### Frontend Pages
| Route       | Description                          |
| ----------- | ------------------------------------ |
| `/`         | Home page (list tasks + delete/edit) |
| `/add`      | Add new task                         |
| `/edit/:id` | Edit existing task                   |


Built by Sai Babu — Assignment for Restomart
