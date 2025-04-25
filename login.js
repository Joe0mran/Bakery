function themeToggle() {
  const body = document.body;
  const themeToggleButton = document.getElementById("theme-toggle-button");
  const isDarkMode = body.classList.toggle("dark-mode");

  if (isDarkMode) {
    themeToggleButton.innerHTML = '<img src="images/brightness.png" alt=""/>';
  } else {
    themeToggleButton.innerHTML = '<img src="images/moon-stars.png" alt="">';
  }
}
