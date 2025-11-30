![React](https://img.shields.io/badge/React-000000?style=flat&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-000000?style=flat&logo=tailwindcss&logoColor=06B6D4)

## 📑 Contents

- [Overview](#-overview)
- [Architecture](#-application-architecture)
- [Technologies](#-technologies-used)
- [Features](#features)
- [API Endpoints](#-api-endpoints)
- [How to Use](#-how-to-use)

# Adopt a Paw – Pet Adoption

React Single-Page Application

## 📌 Overview

Adopt a Paw is a React application that allows users to browse, like, and manage pet adoption listings.  
The project is built as part of learning modern React, SPA architecture, data flow, authentication, and integration with an external API.

> ⚠️ Note: The current UI is desktop-only and may not display correctly on mobile devices.

---

## 🧱 Application Architecture

The app follows a clean and modular SPA structure using:

- **Component-based structure** – reusable UI components
- **Context API** – for authentication and shared user data
- **Service layer** – separate modules for API communication
- **Custom hooks** – reusable logic for forms, fetching, and etc
- **React Router + route guards** – protected, guest-only and owner-only routes

---

## 🛠 Technologies Used

### **Frontend**

- **React**
- **React Router** (client-side routing)
- **Context API** (global auth state)
- **React Hooks** (useContext, useOptimistic, useRef, useTransition and etc)
- **Custom Hooks** (forms, API, auth)
- **Other**
  - Fetch API
  - Tailwind CSS
  - Bound Forms (controlled components)
  - Client-Side Validation
  - Error Handling
  - Route Guards (user, guest, owner restrictions)

### **Backend**

- **SoftUni Practice Server**
  - Query support for filtering
  - Authentication (login, register, logout)
  - CRUD operations for `pets`
  - `likes` collection for like functionality

---

<a id="features"></a>

## ⚙️ Features

### 📄 CRUD Operations

- Create pet listings
- Edit own listings
- Delete own listings
- View personal listings

### 👤 Authentication

- Register
- Login
- Logout
- Persistent user session

### 🛡 Validation & Error Handling

- Client-side form validation
- API-level error handling
- UI error messages

### 🔐 Route Protections

- Guest routes: login, register
- User routes: create, like
- Owner routes: edit, delete
- Automatic redirects for unauthorized access

### 🐶 Pet Listings

- View all pets
- Detailed pet page
- Filtering options
- Like (❤️) pets — available only for logged-in users
- View total likes

### ⚡ Optimistic UI

- Likes update instantly and sync with the server in the background

---

## 🌐 API Endpoints

The full list of used API endpoints can be found in the official SoftUni Practice Server documentation:  
https://github.com/softuni-practice-server/softuni-practice-server/blob/master/README.md

## 📦 How to Use

### Client

```
git clone <repo-url>
cd <path-to-local-repo>
npm install
npm start
```

- Next open the application in your browser:
  http://localhost:5173

### Server

- For how to start server read this
  https://github.com/softuni-practice-server/softuni-practice-server/blob/master/README.md#usage

---
