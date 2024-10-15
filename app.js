// Array de objetos para almacenar los datos
let dataArray = [];

// Función para agregar datos al array
function addData() {
    // Obtener los valores de los inputs
    let name = document.getElementById('name').value.trim();
    let age = document.getElementById('age').value;
    let area = document.getElementById('area').value.trim();

    // Limpiar alertas previas
    hideAlert();

  /*   if(name == '' || age == '' || area == ''){
        showAlert("Por favor rellena los campos que estan vacíos");
        return;
    } */
    // Validaciones
    if (!validateName(name)) {
        showAlert("El nombre solo debe contener letras y espacios.");
        return;
    }

    if (!age || age <= 0 || age> 99) {
        showAlert("Por favor ingrese una edad válida mayor a 0 y menor a 99");
        return;
    }
    if(!validateArea(area)){
        showAlert("El area solo debe contener letras y espacios.");
        return;
    }
    
   
    // Crear un objeto con los datos ingresados
    let newData = {
        nombre: name,
        edad: age,
        area: area,
    };

    // Agregar el objeto al array
    dataArray.push(newData);

    // Limpiar el formulario
    document.getElementById('dataForm').reset();

    // Mostrar los datos actualizados
    displayData();
}

// Función para mostrar los datos en pantalla
function displayData() {
    let dataDisplay = document.getElementById('dataDisplay');
    dataDisplay.innerHTML = ""; // Limpiar contenido anterior

    // Recorrer el array y mostrar los datos
    dataArray.forEach((item, index) => {
        dataDisplay.innerHTML += `<table border=""><strong>Registro ${index + 1}:</strong> Nombre: ${item.nombre},
                                 Edad: ${item.edad}, Area: ${item.area}</table`;
    });

    // Aplicar animación de entrada
    dataDisplay.classList.add('show');
}

// Función para validar el nombre (solo letras y espacios)
function validateName(name) {
    // Expresión regular para permitir solo letras y espacios (incluye letras con acentos)
    const nameRegex = /^[a-zA-ZÁ-ÿ\s]+$/;
    return nameRegex.test(name);
}
// Función para validar el nombre (solo letras y espacios)
function validateArea(area) {
    // Expresión regular para permitir solo letras y espacios (incluye letras con acentos)
    const nameRegex = /^[a-zA-ZÁ-ÿ\s]+$/;
    return nameRegex.test(area);
}
// Función para mostrar alertas estilizadas
function showAlert(message) {
    let alertContainer = document.getElementById('alertContainer');
    alertContainer.innerHTML = message;
    alertContainer.classList.remove('hidden');
    alertContainer.classList.add('show');
}

// Función para ocultar alertas
function hideAlert() {
    let alertContainer = document.getElementById('alertContainer');
    alertContainer.classList.remove('show');
    alertContainer.classList.add('hidden');
}
