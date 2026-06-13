# 📝 Todo List App (Vanilla JavaScript)

A simple and clean Todo List application built using **HTML, CSS, and JavaScript (Vanilla JS)**.  
The app allows users to add, delete, and manage tasks with filtering options and local storage support.

---

## 🚀 Features

- ➕ Add new tasks
- 🗑️ Delete tasks
- ✅ Mark tasks as completed
- 🔄 Toggle task status
- 📂 Filter tasks (All / Active / Completed)
- 💾 Save data using Local Storage
- 🎯 Persist last selected filter tab

---

## 🧠 Tech Stack

- HTML5
- CSS3
- JavaScript (ES6)
- Local Storage API
- FontAwesome (icons)

---

## 📂 Project Structure

project/
│
├── index.html
├── style.css
├── app.js
└── README.md

---

## ⚙️ How It Works

### ➕ Adding Tasks

When the user types a task and clicks **Add**, a new task object is created and stored in an array.

### 🗑️ Deleting Tasks

Clicking the trash icon removes the task from the array and updates Local Storage.

### ✅ Completing Tasks

Checking the checkbox toggles the task's completion state.

### 📂 Filtering

You can switch between:

- All tasks
- Active tasks
- Completed tasks

The selected filter is saved in Local Storage.

---

## 💾 Local Storage

The app stores:

- `tasks` → all task data
- `currentSec` → current active filter tab

This ensures data persists after page refresh.

---

## 🖥️ UI Preview

> A modern dark-themed UI with responsive layout and clean design.

---

## 📌 Future Improvements

- Edit tasks
- Drag & drop reordering
- Search functionality
- Light/Dark mode toggle
- Task due dates & reminders

---

## 👨‍💻 Author

Built with ❤️ using Vanilla JavaScript.

---

## 📄 License

This project is open source and free to use.
