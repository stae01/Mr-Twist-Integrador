let currentRow; 
document.getElementById('product-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const price = parseFloat(document.getElementById('price').value);
    const quantity = parseInt(document.getElementById('quantity').value);
    const description = document.getElementById('description').value;

    const total = price * quantity;

    const table = document.getElementById('product-table').getElementsByTagName('tbody')[0];

    if (currentRow) {
        currentRow.cells[0].textContent = name;
        currentRow.cells[1].textContent = `${price.toFixed(2)}`;
        currentRow.cells[2].textContent = quantity;
        currentRow.cells[3].textContent = description;
        currentRow.cells[4].textContent = `${total.toFixed(2)}`;
        currentRow = null; 
    } else {
        const row = table.insertRow();
        row.insertCell(0).textContent = name;
        row.insertCell(1).textContent = `${price.toFixed(2)}`;
        row.insertCell(2).textContent = quantity;
        row.insertCell(3).textContent = description;
        row.insertCell(4).textContent = `${total.toFixed(2)}`;

        const actionsCell = row.insertCell(5);
        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.className = 'edit-btn';
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.className = 'delete-btn';
        actionsCell.appendChild(editButton);
        actionsCell.appendChild(deleteButton);

        editButton.addEventListener('click', function() {
            currentRow = row; 
            document.getElementById('name').value = row.cells[0].textContent;
            document.getElementById('price').value = parseFloat(row.cells[1].textContent);
            document.getElementById('quantity').value = parseInt(row.cells[2].textContent);
            document.getElementById('description').value = row.cells[3].textContent;
        });

        deleteButton.addEventListener('click', function() {
            row.remove();
            updateTotal();
        });
    }

    updateTotal();
    document.getElementById('product-form').reset();
});

function updateTotal() {
    const table = document.getElementById('product-table').getElementsByTagName('tbody')[0];
    let totalQuantity = 0;
    let totalPrice = 0;

    for (let i = 0; i < table.rows.length; i++) {
        const row = table.rows[i];
        const quantity = parseInt(row.cells[2].textContent);
        const price = parseFloat(row.cells[1].textContent);
        const productTotal = parseFloat(row.cells[4].textContent);

        totalQuantity += quantity;
        totalPrice += productTotal;
    }

    document.getElementById('total-quantity').textContent = totalQuantity;
    document.getElementById('total-price').textContent = `${totalPrice.toFixed(2)}`;
}
