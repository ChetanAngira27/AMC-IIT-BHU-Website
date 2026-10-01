# Aero Modelling Club IIT (BHU) – Official Website 🚀

This repository contains the **official website of the Aero Modelling Club, IIT (BHU)**, designed and developed using modern web technologies.  
The website serves as a centralized platform for **club information, events, competitions, projects, and registrations**, eliminating the need for external Google Forms.

---

## ✨ Features

- ⚛️ Modern frontend built with **React + Vite**
- 🎞️ Smooth animations using **GSAP**
- 🧾 **Direct registration system** (no Google Forms required)
- 🗄️ Secure backend with **PostgreSQL + Prisma**
- 📱 Fully responsive design
- 🧩 Modular and scalable component architecture
- ⚡ Fast development experience with **Vite HMR**

---

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- GSAP
- CSS / Tailwind 

### Backend
- Node.js
- Express
- Prisma ORM
- PostgreSQL

---

## 📂 Project Structure

```text
src/
├── assets/
│   ├── images/           # All images used in the website
│   ├── videos/           # Background and promotional videos
│   └── data/             # JS files containing club, projects, and secretary info
│
├── components/
│   ├── Alumni/           # Card component for the Alumni
│   ├── Explore/          # Explore page of the competetions
│   └── ResourceComp/     # Have the card component for the Competetion,Project,Register and the resources 
│
├── pages/
│   ├── Alumni.jsx
│   ├── Authors.jsx
│   ├── Projects.jsx
│   ├── Competitions.jsx
│   ├── Navbar.jsx
│   └── Home.jsx
|   └── Victory.jsx
|   └── Members.jsx
|   └── Resources.jsx
|   
│
├── App.jsx               # Root component
├── main.jsx              # Entry point
└── index.css             # Global styles
