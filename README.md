# 📚 Book Library App

A modern React application where users can explore books, view details, and track reading progress with charts.

---

## 🚀 Live Demo

🔗 Live Site: https://book-vibe-mdantormia.netlify.app/
🔗 GitHub Repo: https://github.com/mdantormia1779-dev/book-vibe.git

---

## 🎯 Project Overview

This project is a React-based Book Library application built with React Router. Users can:

* Browse books
* View detailed information of each book
* Navigate between pages using routing
* See reading progress using charts

---

## ✨ Features

* 🔹 Multi-page routing using React Router
* 🔹 Dynamic route (`/books/:id`) for book details
* 🔹 Data fetching with loader
* 🔹 Loading spinner using Suspense
* 🔹 Chart visualization (Pages to Read)
* 🔹 Clean UI and structured components

---

## 📌 Pages Included

* 🏠 Home Page
* 📖 Books Page
* 📄 Book Details Page
* 📊 Pages to Read (Chart)
* ❌ Error Page (404)

---

## 🧠 Core Concepts Used

* React Router (`createBrowserRouter`)
* Dynamic Routing
* Loader API (data fetching)
* Suspense & fallback loading UI
* Component-based architecture
* Chart integration

---

## 📂 Project Structure

```
src/
│── Layout/
│── Pages/
│   ├── HomePage/
│   ├── BooksPage/
│   ├── BookDetails/
│   ├── ErrorPage/
│
│── Component/
│   ├── Chart/
│
│── Routes/
│   ├── router.jsx
│
│── booksData.json
```

---

## 🛠️ Tech Stack

* React.js
* React Router
* JavaScript (ES6)
* Recharts
* Tailwind CSS / DaisyUI

---

## 🧑‍💻 How to Use

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run the Project

```bash
npm run dev
```

### 4️⃣ Open in Browser

```
http://localhost:5173
```

---

## 📖 How to Use the App

### 🏠 Home Page

* Landing page of the application
* Navigate using the navbar

### 📚 Books Page

* Shows all available books
* Click any book to see details

### 📄 Book Details Page

* Dynamic route: `/books/:id`
* Displays detailed information about selected book

### 📊 Pages to Read (Chart)

* Shows reading progress using chart
* Visualizes pages data

### ❌ Error Page

* Shows when route is not found

---

## 🔄 Data Source

* All book data comes from:

```
/public/booksData.json
```

---

## ⚠️ Important Notes

* Make sure `booksData.json` is inside **public folder**
* Do not change route paths unless needed
* Internet not required (local JSON used)

---

## 🧪 Example Flow

1. Open app
2. Go to Books Page
3. Click any book
4. See details page
5. Go to Pages to Read
6. View chart 📊

---

## 👨‍💻 Author

**Md Antor Mia**

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
