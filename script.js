// Obtén todos los elementos con la clase "dropdown"
var dropdowns = document.querySelectorAll('.dropdown');

// Agrega un evento de clic a los enlaces con la clase "dropdown"
dropdowns.forEach(function (dropdown) {
    var dropdownContent = dropdown.querySelector('.dropdown-content');
    var isOpen = false; // Variable para rastrear si el dropdown está abierto
    var closeTimeout; // Variable para rastrear el temporizador de cierre

    // Función para abrir el dropdown
    function openDropdown() {
        clearTimeout(closeTimeout); // Limpia el temporizador de cierre
        dropdownContent.style.display = 'block';
        isOpen = true;
    }

    // Función para cerrar el dropdown
    function closeDropdown() {
        closeTimeout = setTimeout(function () {
            dropdownContent.style.display = 'none';
            isOpen = false;
        }, 150); // Agrega un pequeño retraso en el cierre (300ms)
    }

    // Muestra u oculta el dropdown al hacer clic en el enlace correspondiente
    dropdown.addEventListener('click', function (event) {
        event.preventDefault();
        if (isOpen) {
            closeDropdown();
        } else {
            openDropdown();
        }
    });

    // Evita el cierre del dropdown al mover el ratón sobre el contenido del dropdown
    dropdown.addEventListener('mouseenter', function (event) {
        openDropdown();
    });

    // Cierra el dropdown al mover el ratón fuera de él
    dropdown.addEventListener('mouseleave', function (event) {
        closeDropdown();
    });

    // Evita el cierre del dropdown al mover el ratón sobre las opciones
    dropdownContent.addEventListener('mouseenter', function (event) {
        openDropdown();
    });

    // Cierra el dropdown al mover el ratón fuera de las opciones
    dropdownContent.addEventListener('mouseleave', function (event) {
        closeDropdown();
    });
});
