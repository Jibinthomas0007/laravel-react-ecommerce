# 🛍️ Tryloom — Premium Headless E-Commerce Platform

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Laravel](https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)

Tryloom is a modern, high-performance fashion e-commerce platform built using a powerful **Headless Architecture**.  
The frontend and backend are fully decoupled, delivering a fast, scalable, and secure shopping experience.

---

# ✨ Project Overview

This repository follows a **Monorepo Architecture**, containing both the frontend storefront and backend API inside a single unified workspace.

### 🖥️ Storefront (React)

A fully responsive customer-facing UI built with:

- React + Vite
- Tailwind CSS
- GSAP animations
- Modern reusable component architecture

### ⚙️ Backend Engine (Laravel)

A powerful Laravel API system featuring:

- RESTful API architecture
- Filament v3 admin dashboard
- MySQL database management
- Laravel Sanctum authentication
- Secure headless backend structure

---

# 📂 Repository Structure

```text
TRYLOOM-UP/
│
├── frontend/                  # React (Vite) Storefront
│   ├── src/
│   │   ├── components/        # Reusable UI Components
│   │   ├── hooks/             # Custom Hooks & API Logic
│   │   ├── pages/             # Route Pages
│   │   └── data/              # Static Data & Assets
│   └── package.json
│
├── backend/                   # Laravel 11 API & Admin Panel
│   ├── app/                   # Controllers & Models
│   ├── database/              # Migrations & Seeders
│   └── routes/api.php         # API Routes
│
├── .gitignore
└── README.md
```

## 🛠️ Tech Stack

**Frontend (Storefront)**

| Technology      | Purpose            |
| --------------- | ------------------ |
| React.js (Vite) | Frontend Framework |
| Tailwind CSS    | Styling            |
| GSAP            | Animations         |
| React Icons     | Icon Library       |

**Backend (API & Admin Panel)**

| Technology      | Purpose           |
| --------------- | ----------------- |
| Laravel 11      | Backend Framework |
| MySQL           | Database          |
| Filament v3     | Admin Dashboard   |
| Laravel Sanctum | Authentication    |

## 🚀 Getting Started

**1️⃣ Clone the Repository**

git clone https://github.com/Jibinthomas0007/laravel-react-ecommerce.git

cd laravel-react-ecommerce

**2️⃣ Backend Setup (Laravel API)**

Navigate to the backend folder:

cd backend

**Install PHP Dependencies**

composer install

**Create Environment File**

cp .env.example .env

Update your database credentials inside .env.

**Generate Application Key**

php artisan key:generate

**Run Database Migrations**

php artisan migrate

**Link Storage Folder**

php artisan storage:link

**Start Laravel Server**

php artisan serve

Backend API:

http://localhost:8000

## 🔐 Create Admin Account

Run the following command:

php artisan make:filament-user

Filament Admin Panel:

http://localhost:8000/admin

**3️⃣ Frontend Setup (React Storefront)**

Open a new terminal:

cd frontend

**Install Node Dependencies**

npm install

**Create Environment File**

echo "VITE_API_BASE_URL=http://localhost:8000/api" > .env

**Start Frontend Server**

npm run dev

Frontend URL:

http://localhost:5173

## 📡 API Endpoints

| Endpoint          | Description              |
| ----------------- | ------------------------ |
| `/api/products`   | Fetch all products       |
| `/api/banners`    | Fetch homepage banners   |
| `/api/categories` | Fetch product categories |

## 📈 Features & Roadmap

**✅ Completed**
 React + Vite Frontend Setup
 Tailwind CSS UI Architecture
 GSAP Hero Banner Animations
 Laravel 11 Backend Setup
 MySQL Database Integration
 Filament Admin Dashboard
 Headless API Structure
 Product & Banner API Integration
 Monorepo Project Structure

## 🚧 In Progress
 Laravel Sanctum Authentication
 Shopping Cart System
 Wishlist Functionality
 Checkout Flow
 Stripe / PayPal Payment Gateway
 Order Management
 Product Search & Filtering
 Responsive Admin Analytics

## 🎯 Project Goals
Build a scalable headless ecommerce platform
Practice real-world Laravel + React architecture
Implement modern API-driven development
Create a production-ready portfolio project

## 📄 License

This project is licensed under the MIT License.

**👨‍💻 Author**
**Jibin Thomas**
Full Stack Developer
React • Laravel • Tailwind CSS
Passionate about modern web applications

Also add this `.gitignore` in the root project:

```gitignore
/node_modules
/vendor
/.env
/public/storage
/storage/*.key
/backend/vendor
/backend/node_modules
/frontend/node_modules
```
**Then upload using:**

git initgit add .git commit -m "Initial full-stack ecommerce setup"git branch -M maingit remote add origin https://github.com/Jibinthomas0007/laravel-react-ecommerce.gitgit push -u origin main