```md
# Node API - Authentication & RESTful Backend

A backend RESTful API built with **Node.js, Express, and MongoDB** featuring:
- ✅ JWT Authentication
- ✅ Password Hashing with bcrypt
- ✅ RESTful API Architecture
- ✅ Environment Variables Support
- ✅ Clean MVC Project Structure

---

## 📁 Project Structure

```

node-api/
│
├── controller/        # Business Logic
├── routes/            # API Routes
├── model/             # Database Models (Mongoose)
├── middleware/        # Auth, Validation, etc.
├── index.js           # Application Entry Point
├── .env.example       # Environment Variables Example
└── package.json

````

---

## ⚙️ Requirements

- Node.js v16 or higher
- MongoDB (Local or Atlas)
- npm or yarn

---

## 🚀 Installation & Running

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Abdallayasseer/node-api.git
cd node-api
````

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Setup Environment Variables

Copy `.env.example` and create a new `.env` file:

```bash
cp .env.example .env
```

Edit the values inside `.env`:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/node-api
JWT_SECRET=your_strong_secret
REFRESH_TOKEN_SECRET=your_refresh_secret
NODE_ENV=development
```

### 4️⃣ Run the Server

```bash
npm run dev
```

or:

```bash
npm start
```

The server will run at:

```
http://localhost:3000
```

---

## 🔐 Authentication Flow

* Passwords are securely hashed using **bcrypt**
* **JWT Access Tokens** are generated upon login
* Protected routes are secured using an **Auth Middleware**

---

## 📌 API Endpoints (Example)

### ✅ Auth

| Method | Endpoint           | Description       |
| ------ | ------------------ | ----------------- |
| POST   | /api/auth/register | Register new user |
| POST   | /api/auth/login    | Login user        |
| GET    | /api/auth/me       | Get current user  |

### ✅ Users (Protected)

| Method | Endpoint       | Description    |
| ------ | -------------- | -------------- |
| GET    | /api/users     | Get all users  |
| GET    | /api/users/:id | Get user by ID |

> ⚠️ Authorization Header:

```
Authorization: Bearer YOUR_TOKEN
```

---

## 🛡️ Security Features

* ✅ bcrypt for password hashing
* ✅ JWT-based authentication
* ✅ Protected routes with middleware
* ✅ Secrets stored in Environment Variables
* ✅ MVC Architecture for clean separation

---

## 🧪 Testing

Tests are not yet added. Recommended tools:

* Jest
* Supertest

---

## 📦 Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcrypt
* dotenv

---

## 🛠️ Future Improvements

* [ ] Refresh Token System
* [ ] Rate Limiting
* [ ] Input Validation (Joi / Zod)
* [ ] Unit & Integration Tests
* [ ] Swagger / Postman Documentation
* [ ] Docker Support

---

## 👨‍💻 Author

**Abdullah Yasser**
Backend Developer – Node.js

GitHub:
[https://github.com/Abdallayasseer](https://github.com/Abdallayasseer)

---

## 📄 License

This project is open-source and available under the **MIT License**.