let total = 0;

const addBtn = document.getElementById("addBtn");
const expenseList = document.getElementById("expenseList");
const totalAmount = document.getElementById("totalAmount");

addBtn.addEventListener("click", addExpense);

function addExpense() {
    const name = document.getElementById("expenseName").value.trim();
    const amount = parseFloat(document.getElementById("expenseAmount").value);
    const category = document.getElementById("expenseCategory").value;

    if (name === "" || isNaN(amount) || category === "") {
        alert("Please fill all fields correctly!");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span>${name} (${category}) - ₹${amount}</span>
        <button class="delete-btn">X</button>
    `;

    const deleteBtn = li.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", function() {
        total -= amount;
        updateTotal();
        li.remove();
    });

    expenseList.appendChild(li);

    total += amount;
    updateTotal();

    // Clear inputs
    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";
    document.getElementById("expenseCategory").value = "";
}

function updateTotal() {
    totalAmount.textContent = total.toFixed(2);
}
