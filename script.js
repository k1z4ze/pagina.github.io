// Muestra un mensaje de confirmación cuando se realiza una reserva
document.querySelectorAll('.reservar-btn').forEach(button => {
    button.addEventListener('click', () => {
        const modal = new bootstrap.Modal(document.getElementById('reservaModal'));
        modal.show();
    });
});

// Lógica del formulario de reserva
document.getElementById('reservaForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('¡Reserva realizada con éxito!');
});
