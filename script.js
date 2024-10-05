// Get elements from the DOM
const billForm = document.getElementById('billForm');
const billList = document.getElementById('billList');
const message = document.getElementById('message');

// Initialize an array to hold bill reminders
let bills = [];

// Function to render the bill list
function renderBills() {
    billList.innerHTML = ''; // Clear the current list
    bills.forEach((bill, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        listItem.innerHTML = `${bill.name} - $${bill.amount} (Due: ${new Date(bill.date).toLocaleDateString()})`;
        
        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-danger btn-sm';
        deleteButton.innerText = 'Delete';
        deleteButton.onclick = () => deleteBill(index);

        listItem.appendChild(deleteButton);
        billList.appendChild(listItem);
    });
}

// Function to delete a bill
function deleteBill(index) {
    bills.splice(index, 1);
    renderBills(); // Re-render the list
}

// Bill Form Submit Event
billForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    const billName = document.getElementById('billName').value;
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const billDate = document.getElementById('billDate').value;

    // Add new bill to the array
    bills.push({ name: billName, amount: billAmount, date: billDate });
    
    // Display success message
    message.style.display = 'block';
    message.className = 'alert alert-success';
    message.textContent = 'Bill added successfully!';

    // Reset the form and render bills
    billForm.reset();
    renderBills();
});
