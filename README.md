# 🚀 Advanced Todo Card (Stage 1a)

## 📌 Overview

This project is an enhanced version of the Stage 0 Todo Card. It evolves a simple static component into a more **interactive, stateful, and accessible UI component** using only **HTML, CSS, and JavaScript** (no frameworks).

The goal of this stage was to introduce:

* Interactivity
* State synchronization
* Better accessibility
* Improved user experience

---

## ✨ What Changed from Stage 0

### 1. 📝 Edit Mode (NEW)

* Users can now edit:

  * Title
  * Description
  * Priority
  * Due date
* Added a full edit form with:

  * Save functionality (updates UI)
  * Cancel functionality (restores previous state)
* Focus is returned to the **Edit button** after closing the form

---

### 2. 🔄 Status Control (IMPROVED)

* Added a **status dropdown**
* Available states:

  * Pending
  * In Progress
  * Done
* Fully synchronized with:

  * Checkbox
  * Status label
  * Status control

---

### 3. 🎯 Priority Indicator (ENHANCED)

* Added a visual **priority indicator bar**
* Dynamically updates based on:

  * Low → Green
  * Medium → Orange
  * High → Red

---

### 4. 📖 Expand / Collapse Description (NEW)

* Long descriptions are **collapsed by default**
* Users can toggle visibility using:

  * Expand / Collapse button
* Includes accessibility support:

  * `aria-expanded`
  * `aria-controls`

---

### 5. ⏱️ Time Management (ENHANCED)

* Displays dynamic time states:

  * Due in X days/hours/minutes
  * Overdue by X hours
* Updates every 60 seconds
* When task is marked **Done**:

  * Timer stops
  * Displays: **"Completed"**

---

### 6. 🚨 Overdue Indicator (NEW)

* Visible red "Overdue" indicator appears when task deadline passes
* Adds visual urgency to tasks

---

## 🎨 New Design Decisions

### 1. Minimal & Clean UI

* Dark theme for better visual contrast
* Card-based layout for clarity and focus

### 2. Visual State Feedback

* Completed tasks:

  * Strikethrough title
  * Reduced opacity
* In Progress:

  * Blue border indicator
* High Priority:

  * Strong red accent

### 3. Responsive Layout

* Mobile-first design
* Works across:

  * 320px (mobile)
  * 768px (tablet)
  * 1024px+ (desktop)
* Tags wrap properly
* No horizontal overflow

---

## ♿ Accessibility Notes

This project includes several accessibility improvements:

### ✅ Semantic HTML

* `<article>` used for card
* `<time>` for date
* `<ul>` for tags
* `<button>` for actions

### ✅ Form Accessibility

* All inputs have associated `<label>` elements
* Status dropdown has an accessible name

### ✅ Keyboard Navigation

Tab order:

1. Checkbox
2. Status control
3. Expand toggle
4. Edit button
5. Delete button
6. Form inputs (in edit mode)

### ✅ ARIA Support

* Expand toggle uses:

  * `aria-expanded`
  * `aria-controls`
* Time updates use:

  * `aria-live="polite"`

### ✅ Focus Management

* Focus moves into edit form when opened
* Focus returns to Edit button when closed

---

## 🧪 Features Checklist

✔ All Stage 0 requirements preserved
✔ All Stage 1a `data-testid` attributes implemented
✔ Fully functional edit mode
✔ Status and checkbox synchronization
✔ Expand/collapse behavior accessible
✔ Time updates correctly
✔ Overdue logic works
✔ Responsive across screen sizes
✔ Keyboard accessible

---

## 🛠️ Technologies Used

* HTML5
* CSS3 (Flexbox)
* Vanilla JavaScript (DOM manipulation)

---

## 📦 Deployment

* Live URL: *(https://todo-card-git-main-joy-ezenwoke-s-projects.vercel.app/)*
* GitHub Repo: *(https://github.com/JoyEzenwoke/todo_card)*

