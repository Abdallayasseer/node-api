
# 🛒 Node.js REST API Shop

![Node.js](https://img.shields.io/badge/Node.js-v14+-green.svg)
![Express](https://img.shields.io/badge/Express-v4.17-blue.svg)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-forestgreen.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

A complete, production-ready RESTful API built with **Node.js**, **Express**, and **MongoDB**. This API serves as a backend for an e-commerce application, handling product management, order processing, image uploads, and secure user authentication via JWT.

## 🚀 Features

* **Product Management:** Create, read, update, and delete products (CRUD).
* **Order Processing:** Create orders linked to specific products.
* **User Authentication:** Secure Signup and Login using **JWT (JSON Web Tokens)**.
* **Image Uploads:** Upload product images using `Multer`.
* **Security:** Password hashing with `bcrypt` and protected routes.
* **Logging:** Request logging with `Morgan`.
* **CORS Support:** Handles Cross-Origin Resource Sharing headers.

## 🛠️ Tech Stack

* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB (via Mongoose)
* **Authentication:** JSON Web Token (JWT) & Bcrypt
* **File Handling:** Multer
* **Dev Tools:** Nodemon, Morgan

---

## ⚙️ Installation & Setup

Follow these steps to set up the project locally.

### 1. Prerequisites
Ensure you have the following installed:
* [Node.js](https://nodejs.org/)
* [MongoDB](https://www.mongodb.com/try/download/community) (Locally) or a [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account.

### 2. Clone the Repository
```bash
git clone [https://github.com/Abdallayasseer/node-api.git](https://github.com/Abdallayasseer/node-api.git)
cd node-api
````

### 3\. Install Dependencies

```bash
npm install
```

### 4\. Configuration (Environment Variables)

**⚠️ Important:** To avoid connection errors and security leaks, creates a `.env` file in the root directory and add your specific values.

Create a file named `.env` and add:

```env
PORT=3000
MONGODB_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/shop?retryWrites=true&w=majority
JWT_SECRET=your_secret_super_key
```

### 5\. Start the Server

For development (with auto-restart):

```bash
npm start
```

*The server will start on `http://localhost:3000`*

-----

## 📡 API Endpoints

### 🛍️ Products

| Method | Endpoint | Description | Auth Required | Body Params |
| :--- | :--- | :--- | :---: | :--- |
| `GET` | `/products` | Get all products | ❌ | - |
| `GET` | `/products/:id` | Get single product | ❌ | - |
| `POST` | `/products` | Create a product | ✅ | `name`, `price`, `productImage` (File) |
| `PATCH` | `/products/:id` | Update a product | ✅ | `[{"propName": "name", "value": "New"}]` |
| `DELETE` | `/products/:id` | Delete a product | ✅ | - |


### 👤 Users (Authentication)

| Method | Endpoint | Description | Body Params |
| :--- | :--- | :--- | :--- |
| `POST` | `/user/signup` | Register new user | `email`, `password` |
| `POST` | `/user/login` | Login (Returns Token) | `email`, `password` |
| `DELETE` | `/user/:id` | Delete user | - |

-----

## 🔐 How to Access Protected Routes

Routes marked with **Auth Required** need a valid JWT token.

1.  **Login** via `/user/login` to receive a `token`.
2.  Add the token to the **Headers** of your request:
    ```
    Authorization: Bearer <YOUR_TOKEN_HERE>
    ```

-----

## 📂 Project Structure

```bash
node-api/
├── api/
│   ├── controllers/   # Logic for requests
│   ├── middleware/    # Auth checks (check-auth.js)
│   ├── models/        # Mongoose Schemas (Product, Order, User)
│   └── routes/        # Route definitions
├── app.js             # App setup (Middlewares, CORS)
└── package.json       # Dependencies
```

-----

## 🐛 Troubleshooting / Common Errors

  * **Database Connection Failed:**
      * Check your IP Whitelist in MongoDB Atlas.
      * Ensure your `.env` file exists and variables are named correctly.
-----

## 🤝 Contributing

Contributions, issues, and feature requests are welcome\!

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

-----

**Developed by** [Abdallayasseer](https://www.google.com/search?q=https://github.com/Abdallayasseer)
