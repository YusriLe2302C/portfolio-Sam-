// Add interactivity if needed later
console.log("Portfolio loaded successfully.");
// script.js

// Add fade-out class before the page fully loads
document.body.classList.add("fade-out");

// Wait until the DOM is ready
window.addEventListener("DOMContentLoaded", () => {
  // Remove fade-out, add fade-in to trigger transition
  document.body.classList.remove("fade-out");
  document.body.classList.add("fade-in");
});

