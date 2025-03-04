# Student Management System (MERN Stack)

## 🚀 Overview

This is a **Student Management System** built using the **MERN (MongoDB, Express.js, React.js, Node.js) stack**. It allows users to add, edit, view, and manage student records efficiently. The frontend is deployed on **Vercel**, while the backend is deployed on **Render**.

## 📂 Project Structure

The project consists of two repositories:

- **Frontend**: [student-management-frontend](https://github.com/sachinchaunal/student-management-frontend)
- **Backend**: [student-management-backend](https://github.com/sachinchaunal/student-management-backend)

---

## 🛠️ Setup Instructions

### 🔹 Prerequisites

Ensure you have the following installed:

- **Node.js** (v16+ recommended)
- **MongoDB** (Locally or MongoDB Atlas)
- **Git**
  

### **1️⃣ Clone the Repositories**

```sh
# Clone frontend repo
git clone https://github.com/sachinchaunal/student-management-frontend.git

# Clone backend repo
git clone https://github.com/sachinchaunal/student-management-backend.git
```

---

## 🖥 Backend Setup

### **2️⃣ Install Backend Dependencies**

```sh
cd student-management-backend
npm install
```

### **3️⃣ Configure Environment Variables**

Create a `.env` file in the **backend root folder** and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=


```

### **4️⃣ Run Backend Locally**

```sh
npx nodemon server.js
```

Your backend will run at `http://localhost:5000`

### **5️⃣ Deploy Backend to Render**

1. Go to [**Render**](https://render.com/) and create a new **Web Service**.
2. Connect the backend **GitHub repository**.
3. Set the **Build Command**: `npm install`
4. Set the **Start Command**: `npm start`
5. Add **Environment Variables** (same as `.env`)
6. Deploy 🚀

---

## 🎨 Frontend Setup

### **6️⃣ Install Frontend Dependencies**

```sh
cd student-management-frontend
npm install
```

### **7️⃣ Configure API Endpoint**

Update the `BASE_URL` inside the frontend API requests to point to your deployed backend:

```js
const BASE_URL = "https://student-management-backend-xxxxx.onrender.com"; // Replace with your backend URL and if you are running this code locally then paste your backend url containing the port at which the server will run
```

### **8️⃣ Run Frontend Locally**

```sh
npm start
```

Your frontend will run at `http://localhost:3000`

### **9️⃣ Deploy Frontend to Vercel**

1. Go to [**Vercel**](https://vercel.com/) and create a new project.
2. Connect the frontend **GitHub repository**.
3. Set the **Build Command**: `npm install && npm run build`
4. Set the **Output Directory**: `build`
5. Deploy 🚀

---

## 🔗 Live Demo

- **Frontend**: [View on Vercel](https://student-management-system-ten-plum.vercel.app)
- **Backend**: [View on Render](https://student-management-backend-xxxxx.onrender.com)

---

## 📜 API Endpoints

| Method | Endpoint            | Description            |
| ------ | ------------------- | ---------------------- |
| GET    | `/students`     | Fetch all students     |
| POST   | `/students`     | Add a new student      |
| PUT    | `/students/:id` | Update student details |
| DELETE | `/students/:id` | Delete a student       |

---

## 📌 Features

✅ Add, Edit, Delete student records ✅ Upload student photos (Cloudinary Integration) ✅ Responsive UI with Tailwind CSS / Bootstrap ✅ Secure API with Express.js ✅ Hosted on Vercel (Frontend) and Render (Backend)

---





