import { ManageAccount } from "./FirebaseConfi.js";


document.getElementById("formulario-sesion").addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Verifica si ambos campos están completados
    if (email.trim() !== "" && password.trim() !== "") {
        const account = new ManageAccount();
        account.authenticate(email, password);
    } else {
        alert("Por favor ingrese su correo electrónico y contraseña.");
    }
});
