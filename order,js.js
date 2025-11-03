const employee = JSON.parse(localStorage.getItem("currentEmployee"));
const welcome = document.getElementById("welcomeText");

if (employee) {
  welcome.textContent = Welcome, ${employee.name} (ID: ${employee.id});
} else {
  window.location.href = "employee.html"; // redirect if not logged in
}

document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const breakfast = document.querySelector("input[name='breakfast']:checked").value;
  const lunch = document.querySelector("input[name='lunch']:checked").value;
  const snacks = document.querySelector("input[name='snacks']:checked").value;

  const order = {
    employeeId: employee.id,
    name: employee.name,
    breakfast,
    lunch,
    snacks
  };

  let orders = JSON.parse(localStorage.getItem("orders")) || [];
  const existing = orders.find(o => o.employeeId === employee.id);

  if (existing) {
    // update existing order
    existing.breakfast = breakfast;
    existing.lunch = lunch;
    existing.snacks = snacks;
  } else {
    orders.push(order);
  }

  localStorage.setItem("orders", JSON.stringify(orders));
  document.getElementById("successMsg").textContent = "Your meal preferences are saved!";
  document.getElementById("orderForm").reset();
});