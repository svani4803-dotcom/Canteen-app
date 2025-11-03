// --- Admin Credentials ---
const adminData = {
  username: "admin",
  password: "1234"
};

// --- Selectors ---
const loginForm = document.getElementById("adminLoginForm");
const loginContainer = document.getElementById("loginContainer");
const dashboardContainer = document.getElementById("dashboardContainer");
const errorMsg = document.getElementById("loginError");

// --- Login Functionality ---
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = document.getElementById("adminUser").value.trim();
  const pass = document.getElementById("adminPass").value.trim();

  if (user === adminData.username && pass === adminData.password) {
    // Successful Login
    loginContainer.classList.add("hidden");
    dashboardContainer.classList.remove("hidden");
    loadReport();
  } else {
    errorMsg.textContent = "Invalid username or password!";
  }
});

// --- Load Order Data ---
function loadReport() {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  const totalOrders = orders.length;
  const breakfastYes = orders.filter(o => o.breakfast === "Yes").length;
  const lunchYes = orders.filter(o => o.lunch === "Yes").length;
  const snacksYes = orders.filter(o => o.snacks === "Yes").length;

  document.getElementById("totalOrders").textContent = totalOrders;
  document.getElementById("breakfastCount").textContent = breakfastYes;
  document.getElementById("lunchCount").textContent = lunchYes;
  document.getElementById("snacksCount").textContent = snacksYes;
}

// --- Logout ---
document.getElementById("logoutBtn").addEventListener("click", () => {
  dashboardContainer.classList.add("hidden");
  loginContainer.classList.remove("hidden");
  document.getElementById("adminUser").value = "";
  document.getElementById("adminPass").value = "";
  errorMsg.textContent = "";
});