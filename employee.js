// Dummy employee data (you can later connect this to a database)
const employees = [
  { id: "E101", name: "Vani", password: "1234" },
  { id: "E102", name: "Ravi", password: "abcd" },
  { id: "E103", name: "Kiran", password: "pass" }
];

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const empName = document.getElementById("empName").value.trim();
  const empId = document.getElementById("empId").value.trim();
  const empPass = document.getElementById("empPass").value.trim();

  const employee = employees.find(
    emp => emp.id === empId && emp.name.toLowerCase() === empName.toLowerCase() && emp.password === empPass
  );

  if (employee) {
    localStorage.setItem("currentEmployee", JSON.stringify(employee));
    window.location.href = "order.html"; // redirect to order page
  } else {
    document.getElementById("loginError").textContent = "Invalid login details!";
  }
});