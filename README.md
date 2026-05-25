# 🛍️ Tryloom - Premium Headless E-Commerce Platform

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Laravel](https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)

Tryloom is a modern, high-performance fashion e-commerce platform built with a robust **Headless Architecture**. By decoupling the frontend from the backend, Tryloom delivers a lightning-fast, app-like user experience while maintaining a highly secure and scalable database structure.

## ✨ Project Overview

This repository uses a **monorepo structure**, housing both the frontend storefront and the backend API logic within a single unified workspace.

* **The Storefront (React):** A fully responsive, customer-facing UI featuring seamless Tailwind design and 3D card-stacking animations powered by GSAP.
* **The Engine (Laravel):** A headless PHP API handling data management, utilizing Filament v3 for a zero-code, highly customizable administrative dashboard.

---

## 📂 Repository Structure

```text
TRYLOOM-UP/
│
├── frontend/               # React (Vite) Storefront
│   ├── src/
│   │   ├── components/     # Reusable UI elements
│   │   ├── hooks/          # Custom API fetching logic
│   │   ├── pages/          # Main route views
│   │   └── data/           # Local state & assets
│   └── package.json        
│
├── backend/                # Laravel 11 API & Admin Panel
│   ├── app/                # Models & Controllers
│   ├── database/           # Migrations & Seeders
│   └── routes/api.php      # Headless API endpoints
│
├── .gitignore              # Master ignore file for full-stack
└── README.md               # Project documentation
```

## 🛠️ Tech Stack

Frontend (Storefront)
Framework: React.js (via Vite)

Styling: Tailwind CSS

Animations: GSAP (GreenSock Animation Platform)

Icons: React Icons

Backend (API & Admin Panel)
Core: Laravel 11 (PHP)

Database: MySQL

Admin Dashboard: Filament v3

Authentication: Laravel Sanctum (Token-based SPA auth)

## 🚀 Getting Started

1. Clone the Repository
Bash
git clone [https://github.com/Jibinthomas0007/laravel-react-ecommerce.git](https://github.com/Jibinthomas0007/laravel-react-ecommerce.git)
cd laravel-react-ecommerce
2. Backend Setup (Laravel API)
Open a terminal and navigate to the backend folder:

Bash
cd backend

# Install PHP dependencies
composer install

# Create the environment file (make sure to update DB credentials inside)
cp .env.example .env

# Generate application key
php artisan key:generate

# Run database migrations to build the tables
php artisan migrate

# Link the storage folder so uploaded images are publicly visible
php artisan storage:link

# Start the Laravel API Server
php artisan serve
The API will now be broadcasting at http://localhost:8000

🔐 Create an Admin Account
To access the dashboard to manage products and banners, run this in your backend terminal:

Bash
php artisan make:filament-user
Access the dashboard at http://localhost:8000/admin

3. Frontend Setup (React Storefront)
Open a new terminal and navigate to the frontend folder:

Bash
cd frontend

# Install Node dependencies
npm install

# Create the environment file and link it to the Laravel API
echo "VITE_API_BASE_URL=http://localhost:8000/api" > .env

# Start the Vite development server
npm run dev
The React storefront will now be running at http://localhost:5173

## 📈 Roadmap & Features

[x] Scaffold React UI architecture & Tailwind layout

[x] Integrate GSAP timeline animations for Hero Banners

[x] Establish Git monorepo structure

[x] Initialize Laravel 11 Backend & MySQL Database

[x] Generate Filament Admin Dashboard

[x] Connect React frontend to live Laravel API endpoints (/api/banners, /api/products)

[ ] Implement secure User Authentication via Laravel Sanctum

[ ] Build interactive Shopping Cart logic

[ ] Integrate Checkout & Payment Gateway (Stripe/PayPal)

## 🤝 License

This project is licensed under the MIT License - see the LICENSE file for details.