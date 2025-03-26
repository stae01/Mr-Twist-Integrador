// Escuchar el evento de envío del formulario
document.getElementById('mantenimiento-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const machineName = document.getElementById('machine-name').value;
    const maintenanceDate = document.getElementById('maintenance-date').value;
    const description = document.getElementById('description').value;
    const status = document.getElementById('status').value;

    const table = document.getElementById('mantenimiento-table').getElementsByTagName('tbody')[0];
    const row = table.insertRow();

    row.insertCell(0).textContent = machineName;
    row.insertCell(1).textContent = maintenanceDate;
    row.insertCell(2).textContent = description;
    row.insertCell(3).textContent = status;

    const actionsCell = row.insertCell(4);
    const editButton = document.createElement('button');
    editButton.textContent = 'Editar';
    editButton.className = 'edit-btn';
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.className = 'delete-btn';
    actionsCell.appendChild(editButton);
    actionsCell.appendChild(deleteButton);

    // Limpiar el formulario después de agregar el mantenimiento
    document.getElementById('mantenimiento-form').reset();
});

document.getElementById('mantenimiento-table').addEventListener('click', function(e) {
    if (e.target && e.target.matches('button.delete-btn')) {
        const row = e.target.closest('tr');
        row.remove();
    }
});

// Función para editar un mantenimiento
document.getElementById('mantenimiento-table').addEventListener('click', function(e) {
    if (e.target && e.target.matches('button.edit-btn')) {
        const row = e.target.closest('tr');
        const cells = row.getElementsByTagName('td');

        // Rellenar el formulario con los datos actuales
        document.getElementById('machine-name').value = cells[0].textContent;
        document.getElementById('maintenance-date').value = cells[1].textContent;
        document.getElementById('description').value = cells[2].textContent;
        document.getElementById('status').value = cells[3].textContent;

        // Eliminar la fila original (para reemplazarla con los datos editados)
        row.remove();
    }
});
