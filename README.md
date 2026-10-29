# Gadgets Galore - Product Inventory API

A robust RESTful API built with **Node.js**, **Express**, and **MongoDB** to manage product inventory for Gadgets Galore. This service provides full CRUD functionality with strict input validation, error handling, and a modular architecture.

---

## 🚀 Features

* **Complete CRUD Operations:** Create, read, update, and delete product records.
* **Input Validation:** Enforces positive pricing, non-negative integer quantities, and required fields using Mongoose schema rules.
* **Centralized Error Handling:** Standardized error responses (`400`, `404`, `500`) to prevent unhandled rejections or crashed servers.
* **Modular Architecture:** Clean separation of concerns with dedicated folders for routes, models, and business logic.

---

## 🛠️ Tech Stack

* **Runtime:** Node.js
* **Framework:** Express.js
* **Database & ODM:** MongoDB & Mongoose
* **Environment Management:** dotenv
* **Development Tooling:** Nodemon

---

## 📂 Project Structure

```text
gadgets-galore-api/
├── api/
│   ├── models/
│   │   └── product.model.js
│   └── routes/
│       └── product.routes.js
├── .env
├── .gitignore
├── package.json
├── README.md
└── server.js