const card = document.querySelector('[data-testid="test-todo-card"]');
const titleEl = document.querySelector('[data-testid="test-todo-title"]');
const descEl = document.querySelector('[data-testid="test-todo-description"]');
const priorityEl = document.querySelector('[data-testid="test-todo-priority"]');
const priorityIndicator = document.querySelector('[data-testid="test-todo-priority-indicator"]');

const statusEl = document.querySelector('[data-testid="test-todo-status"]');
const statusControl = document.querySelector('[data-testid="test-todo-status-control"]');
const checkbox = document.querySelector('[data-testid="test-todo-complete-toggle"]');

const timeEl = document.querySelector('[data-testid="test-todo-time-remaining"]');
const overdueEl = document.querySelector('[data-testid="test-todo-overdue-indicator"]');

const editBtn = document.querySelector('[data-testid="test-todo-edit-button"]');
const deleteBtn = document.querySelector('[data-testid="test-todo-delete-button"]');

const form = document.querySelector('[data-testid="test-todo-edit-form"]');
const inputTitle = document.querySelector('[data-testid="test-todo-edit-title-input"]');
const inputDesc = document.querySelector('[data-testid="test-todo-edit-description-input"]');
const inputPriority = document.querySelector('[data-testid="test-todo-edit-priority-select"]');
const inputDate = document.querySelector('[data-testid="test-todo-edit-due-date-input"]');

const saveBtn = document.querySelector('[data-testid="test-todo-save-button"]');
const cancelBtn = document.querySelector('[data-testid="test-todo-cancel-button"]');

const expandBtn = document.querySelector('[data-testid="test-todo-expand-toggle"]');
const collapsible = document.querySelector('[data-testid="test-todo-collapsible-section"]');

let dueDate = new Date("2026-04-18T18:00");
let timer;

// FORMAT DATE FOR INPUT
function formatDate(date) {
  return date.toISOString().slice(0,16);
}

// TIME LOGIC
function updateTime() {
  if (statusEl.textContent === "Done") {
    timeEl.textContent = "Completed";
    clearInterval(timer);
    return;
  }

  const now = new Date();
  const diff = dueDate - now;

  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (diff <= 0) {
    overdueEl.classList.remove("hidden");
    timeEl.textContent = `Overdue by ${Math.abs(hours)} hours`;
  } else {
    overdueEl.classList.add("hidden");

    if (days > 0) timeEl.textContent = `Due in ${days} days`;
    else if (hours > 0) timeEl.textContent = `Due in ${hours} hours`;
    else timeEl.textContent = `Due in ${minutes} minutes`;
  }
}

timer = setInterval(updateTime, 60000);
updateTime();

// STATUS SYNC
checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    setStatus("Done");
  } else {
    setStatus("Pending");
  }
});

statusControl.addEventListener("change", () => {
  setStatus(statusControl.value);
});

function setStatus(status) {
  statusEl.textContent = status;
  statusControl.value = status;

  if (status === "Done") {
    checkbox.checked = true;
    card.classList.add("completed");
  } else {
    checkbox.checked = false;
    card.classList.remove("completed");
  }

  card.classList.toggle("in-progress", status === "In Progress");
}

// EDIT MODE
editBtn.addEventListener("click", () => {
  form.classList.remove("hidden");

  inputTitle.value = titleEl.textContent;
  inputDesc.value = descEl.textContent;
  inputPriority.value = priorityEl.textContent;
  inputDate.value = formatDate(dueDate);

  inputTitle.focus();
});

// SAVE
saveBtn.addEventListener("click", () => {
  titleEl.textContent = inputTitle.value;
  descEl.textContent = inputDesc.value;
  priorityEl.textContent = inputPriority.value;

  dueDate = new Date(inputDate.value);

  updatePriorityUI(inputPriority.value);

  form.classList.add("hidden");
  editBtn.focus();
});

// CANCEL
cancelBtn.addEventListener("click", () => {
  form.classList.add("hidden");
  editBtn.focus();
});

// PRIORITY UI
function updatePriorityUI(priority) {
  priorityIndicator.className = "priority-indicator " + priority.toLowerCase();
}

// EXPAND
expandBtn.addEventListener("click", () => {
  const expanded = expandBtn.getAttribute("aria-expanded") === "true";

  expandBtn.setAttribute("aria-expanded", !expanded);
  collapsible.classList.toggle("expanded");

  expandBtn.textContent = expanded ? "Show More" : "Show Less";
});

// DELETE
deleteBtn.addEventListener("click", () => {
  alert("Delete clicked");
});