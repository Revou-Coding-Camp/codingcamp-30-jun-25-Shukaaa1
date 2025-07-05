document.getElementById('learningForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById('message').value;

    const tableBody = document.getElementById('table-body');
    const newRow = tableBody.insertRow();

    newRow.innerHTML = `
        <td>${name}</td>
        <td>${dob}</td>
        <td>${gender}</td>
        <td>${message}</td>
        <td><a href="#">Klik Disini</a></td>
        <td><button onclick="deleteRow(this)">🗑️</button></td>
    `;

    this.reset(); // Reset form after submission
});

function deleteRow(btn) {
    const row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
