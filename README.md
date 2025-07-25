# 👥 Employee Management Dashboard

A fully type-safe, modular, and scalable employee management system built with **React + TypeScript + Tailwind CSS**.

This project allows admins and HR managers to manage employee records, track metadata, and view summaries through a clean, modern UI.

---

## 🚀 Project Goals

- ✅ Add, edit, delete, and view employee records
- ✅ Assign roles, departments, statuses, and supervisors
- ✅ Track metadata like hire date, contract type, and probation status
- ✅ Filter, sort, and search employee records
- ✅ Display summaries and statistics on a dashboard
- ✅ Ensure strong typing and modular architecture

---

## 🧱 Tech Stack

- **React**
- **TypeScript**
- **Tailwind CSS**
- **React Router** (for page routing)
- **LocalStorage / Mock API** (for data persistence)
- (Optional): Zustand or Redux Toolkit for global state

---

## 📁 Project Structure (Planned)

```
src/
├── components/ # Reusable UI components
├── features/ # Feature modules (e.g. employees)
├── pages/ # Route-based pages
├── layout/ # App layout components
├── services/ # Data logic (CRUD, localStorage)
├── store/ # State management (if needed)
├── types/ # Global TypeScript types
├── utils/ # Helper functions (e.g. date formatting)
└── App.tsx
```
---

## ✨ Features (Planned)

### 👤 Employee Management
- Add/edit/delete employee profiles
- Assign roles, departments, contract type, and supervisor
- Store contact info, hire date, and emergency contact

### 🔍 Filtering & Search
- Filter by department, role, contract type, and status
- Sort by name or hire date
- Search by name, ID, or email

### 📊 Dashboard Summary
- Total employee count
- Breakdown by department/status
- Highlight new hires and employees on probation

### 🧾 Data Handling
- LocalStorage or mock API for persistence
- (Optional) Export to JSON or CSV

### 🧠 Bonus Challenges (Stretch Goals)
- Admin vs Viewer roles (auth)
- Profile photo support
- Dark mode toggle

---

## 📌 Status

> Project setup is complete. Implementation of core features will be done incrementally, starting with employee CRUD functionality.

---

## 📄 License

This project is for learning and demonstration purposes. No official license yet.

---

## 🙋‍♂️ Author

Built by **Solomon Chuks** — [LinkedIn](https://www.linkedin.com/in/solomon-c-nwante-539986162/)
