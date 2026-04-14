const dueDate = new Date("2026-03-01T18:00:00Z");
const timeEl = document.querySelector('[data-testid="test-todo-time-remaining"]');
const checkbox = document.querySelector('[data-testid="test-todo-complete-toggle"]');
const statusEl = document.querySelector('[data-testid="test-todo-status"]');
const card = document.querySelector('[data-testid="test-todo-card"]');

// TIME REMAINING FUNCTION
function updateTime() {
  const now = new Date();
  const diff = dueDate - now;

  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (diff <= 0) {
    const overdueHours = Math.abs(hours);
    if (overdueHours < 1) {
      timeEl.textContent = "Due now!";
    } else {
      timeEl.textContent = `Overdue by ${overdueHours} hours`;
    }
  } else if (days > 0) {
    timeEl.textContent = `Due in ${days} days`;
  } else if (hours > 0) {
    timeEl.textContent = `Due in ${hours} hours`;
  } else {
    timeEl.textContent = `Due in ${minutes} minutes`;
  }
}

// INITIAL CALL
updateTime();

// OPTIONAL AUTO UPDATE EVERY 60s
setInterval(updateTime, 60000);

// CHECKBOX TOGGLE
checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    card.classList.add("completed");
    statusEl.textContent = "Done";
  } else {
    card.classList.remove("completed");
    statusEl.textContent = "Pending";
  }
});

// BUTTONS
document.querySelector('[data-testid="test-todo-edit-button"]')
  .addEventListener("click", () => {
    console.log("edit clicked");
  });

document.querySelector('[data-testid="test-todo-delete-button"]')
  .addEventListener("click", () => {
    alert("Delete clicked");
  });