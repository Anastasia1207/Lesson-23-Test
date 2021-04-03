
//5. Write a JavaScript function to add rows to a table.

function insert_Row() {
const table = document.getElementById('sampleTable');
const row = table.insertRow(2);
const cell1 = row.insertCell(0);
const cell2 = row.insertCell(1);
cell1.innerHTML = 'Row? cell1';
cell2.innerHTML = 'Row? cell2';
}
