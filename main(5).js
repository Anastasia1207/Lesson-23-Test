// <!-- 5. Write a JavaScript function to add rows to a table.
// Sample HTML file : -->


const tableElement = document.getElementById('sampleTable');
const changeInput = document.getElementById('button');

function insert_Row() {
    
const newRow =
    `
    <tr><td>Row cell</td>

    <td>Row cell</td></tr>
   `;

   tableElement.innerHTML +=newRow;

};
