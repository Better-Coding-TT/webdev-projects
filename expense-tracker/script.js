let balance = 0;

document.getElementById("category").addEventListener("change", function () {
  const expenseCategories = document.getElementById("expense-categories");
  if (this.value === "expense") {
    expenseCategories.style.display = "block";
  } else {
    expenseCategories.style.display = "none";
  }
});

document.getElementById("transaction-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const description = document.getElementById("description").value;
  const amount = parseFloat(document.getElementById("amount").value);
  const category = document.getElementById("category").value;
  const expenseCategory = document.getElementById("expense-category").value;

  if (!description || isNaN(amount)) {
    alert("Please fill in all fields correctly.");
    return;
  }

  balance += amount;
  document.getElementById("balance-display").innerText = `$${balance.toFixed(2)}`;

  const logEntries = document.getElementById("log-entries");
  const logEntry = document.createElement("div");
  logEntry.classList.add("transaction-entry", amount > 0 ? "income" : "expense");
  logEntry.innerHTML = `
    <strong>${category.toUpperCase()}:</strong> $${amount.toFixed(2)}
    <br><small>${description}</small>
    ${category === "expense" ? `<br><small>Category: ${expenseCategory}</small>` : ""}
  `;
  logEntries.prepend(logEntry);

  document.getElementById("description").value = "";
  document.getElementById("amount").value = "";
  document.getElementById("category").value = "income";
  document.getElementById("expense-category").value = "food";  
});

document.getElementById("clear-all").addEventListener("click", function () {
  balance = 0;
  document.getElementById("balance-display").innerText = `$${balance.toFixed(2)}`;
  document.getElementById("log-entries").innerHTML = ""; 
});
