const form = document.getElementById("loginForm");
const usernameField = document.getElementById("username");
const passwordField = document.getElementById("password");
const usernameError = document.getElementById("usernameError");
const passwordError = document.getElementById("passwordError");
const loginMsg = document.getElementById("loginMsg");

// Typing animation for title
const title = document.getElementById("title");
const text = "WIPERZERO SECURE TERMINAL";
let i = 0;
function typeTitle() {
  if (i < text.length) {
    title.textContent = text.substring(0, i + 1);
    i++;
    setTimeout(typeTitle, 80);
  }
}
typeTitle();

// Form validation
form.addEventListener("submit", e => {
  e.preventDefault();
  usernameError.textContent = "";
  passwordError.textContent = "";
  loginMsg.textContent = "";

  let username = usernameField.value.trim();
  let password = passwordField.value.trim();
  let valid = true;

  if (!username) {
    usernameError.textContent = "Username required";
    valid = false;
  }
  if (!password) {
    passwordError.textContent = "Password required";
    valid = false;
  }

  if (valid) {
    if (username === "admin" && password === "12345") {
      loginMsg.style.color = "#00ff88";
      loginMsg.textContent = "[ACCESS GRANTED]";
      document.body.style.background = "#001100";
      setTimeout(() => {
        window.location.href = "landing.html"; // redirect
      }, 1200);
    } else {
      loginMsg.style.color = "#ff0033";
      loginMsg.textContent = "[ACCESS DENIED]";
      document.body.classList.add("shake");
      setTimeout(() => document.body.classList.remove("shake"), 500);
    }
  }
});
