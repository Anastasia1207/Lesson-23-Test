// // 6. Write a JavaScript function that accept row, column, (to identify a particular cell) and a string to update the content of that cell.
// // Table + form with 3 elements: input field and 2x select fields to pick the row and column



function submitForm(submitEvent) {
    submitEvent.preventDefault();
    const textInput = document.getElementById('write-text').value;
    const cellOption = document.getElementById('selectCell').value;
    const rowOption = document.getElementById('selectRow').value;
// console.log(cellOption);
// console.log(rowOption);
}
var selectTable = document.getElementById('sampleTable'), rIndex, cIndex;
for (var i = 0; i < selectTable.rows.length; i++) {
    for (var j = 0; j < selectTable.rows[i].cells.length; j++)
{
    selectTable.rows[i].cells[j].onclick = function()
    {
        rIndex = this.parentElement.rowIndex;
        cIndex = this.cellIndex;
        console.log(rIndex, cIndex);
    }
}
}

function selectCell() {
    var cellSelector = document.getElementById('selectCell');
    var chose
}


