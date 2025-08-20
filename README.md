# SkillPocket – User & Skill Management System
Swap a skill, light a mind :)

> **Owner:** Ummay Maimona Chaman  
> **Note:** Do **not** use or copy this project without explicit permission from the owner.

A comprehensive skill exchange platform with full user management capabilities, built with **React frontend** and **Node.js backend** following **MVC architecture**. This system allows users to learn and teach skills, schedule sessions, give feedback, and manage requests efficiently.

---

## 🚀 Features

### 1. Authentication
**Functional Features:**
- User & Admin registration and login  
- JWT-based authentication  
- Role-based access control (Admin/User)  

**Non-Functional Features:**
- Secure password hashing (bcrypt)  
- Token expiration after 7 days  
- Input validation and XSS protection  

---

### 2. Users
**Functional Features:**
- View and update profile  
- Change password  
- Personal dashboard for quick actions  

**Non-Functional Features:**
- Responsive dashboard  
- Mobile-friendly layout  
- Minimal latency for profile updates  

---

### 3. Admin
**Functional Features:**
- CRUD operations on all users  
- Ban/unban users  
- Assign roles (Admin/User)  
- Admin dashboard with user statistics  

**Non-Functional Features:**
- Secure access control for admin routes  
- Real-time status updates  
- Data aggregation for dashboard metrics  

---

### 4. Skills
**Functional Features:**
- Create, view, update, delete skills  
- View all skills in the platform  
- Manage user’s own skills  

**Non-Functional Features:**
- Fast database queries  
- Validation of skill names  
- User-friendly skill management UI  

---

### 5. Requests
**Functional Features:**
- Send/receive skill learning requests  
- Accept or reject requests  
- Track request status  

**Non-Functional Features:**
- Real-time request updates  
- Clear status indicators  
- Notification on request status changes  

---

### 6. Sessions
**Functional Features:**
- Schedule sessions after request acceptance  
- Set session date, time, skill name, and message  
- Mark session as done  

**Non-Functional Features:**
- Calendar integration for date selection  
- Responsive session box UI  
- Secure session access for intended users only  

---

### 7. Reviews
**Functional Features:**
- Provide rating (1–5) after session completion  
- Add suggestions or feedback  
- View ratings summary  

**Non-Functional Features:**
- Real-time update of ratings  
- Aggregate ratings per user  
- Intuitive review interface  

---

### 8. Notifications
**Functional Features:**
- Alert users about request status  
- Notify session creation or changes  
- Inform users of review availability  

**Non-Functional Features:**
- Non-intrusive, clear alerts  
- Mobile-friendly notifications  
- Efficient real-time update system  

---

### 9. Ratings Summary
**Functional Features:**
- Dashboard to view given and received ratings  
- Sort by skill, user, or session  
- Display average rating per user  

**Non-Functional Features:**
- Fast aggregation of rating data  
- Secure access to ratings only for relevant users  
- Responsive chart and list views  

---

### 10. Navigation & UI Components
**Functional Features:**
- Dynamic navbar based on user role  
- Modals for CRUD operations  
- Session creation box, review box, and dashboards  

**Non-Functional Features:**
- Mobile-first design  
- Responsive layouts for all devices  
- Minimal latency, smooth interactions  

---

## 👥 User Accounts

**Admin Account:**  
- Email: `chamanmaimona@gmail.com`  
- Password: `Chaman@5204`  
- Name: Ummay Maimona Chaman  

**Regular Users:**  
1. Nazifa Prova – `nazifaprova@gmail.com` / `PROVAtoxic`  
2. Taznia Onon – `tazniaonon@gmail.com` / `ONONgoru`  
3. Rizve Ahmed – `rizveahmed@gmail.com` / `RIZVEgondar`  
4. Jubaida – `jubaida@gmail.com` / `JUBAIDAcat`  

---

## 🏗️ Architecture

# Project Structure

## Backend (Node.js + Express)

backend/
├── controllers/
│   ├── adminController.js
│   ├── adminAuthController.js
│   ├── authController.js
│   ├── userController.js
│   ├── skillController.js
│   ├── requestController.js
│   ├── sessionController.js
│   └── reviewController.js
├── middleware/
│   ├── auth.js
│   └── admin.js
├── models/
│   ├── User.js
│   ├── Skill.js
│   ├── Request.js
│   ├── Session.js
│   └── Review.js
├── routes/
│   ├── admin.js
│   ├── adminAuth.js
│   ├── auth.js
│   ├── user.js
│   ├── skill.js
│   ├── request.js
│   ├── session.js
│   └── review.js
└── scripts/
    ├── createAdminUser.js
    └── createUsers.js

## Frontend (React)

frontend/src/
├── pages/
│   ├── AdminDashboard.js
│   ├── AdminLogin.js
│   ├── UserDashboard.js
│   ├── Login.js
│   ├── Register.js
│   ├── SessionPage.js
│   └── ReviewPage.js
├── components/
│   ├── Navbar.js
│   ├── SkillBox.js
│   ├── RequestBox.js
│   └── SessionBox.js
└── App.js


## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14+)  
- MongoDB  
- npm or yarn  

### Backend Setup
```bash
cd backend
npm install
Create .env:

env
Copy
Edit
MONGO_URI=mongodb://localhost:27017/skillswap
JWT_SECRET=your_jwt_secret_key_here
PORT=5001
Frontend Setup
bash
Copy
Edit
cd frontend
npm install
Database Setup
bash
Copy
Edit
cd backend
node scripts/createAdminUser.js
node scripts/createUsers.js
Run Application
bash
Copy
Edit
# Backend
cd backend
npm start

# Frontend
cd frontend
npm start
🔐 Security Features
Password hashing (bcrypt)

JWT token authentication

Role-based authorization

Input validation & XSS protection

CORS configuration

📱 Responsive Design
Mobile-first approach

Touch-friendly interfaces

Adaptive navigation and dashboards

⚠️ Ownership
Owner: Ummay Maimona Chaman
This repository and code cannot be copied, shared, or used without explicit permission.
