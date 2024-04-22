import { ManageAccount } from "./FirebaseConfi.js";

document.getElementById("form-Recuperar").addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;

    // Verificar si el campo de correo electrónico está vacío antes de intentar restablecer la contraseña
    if (email.trim() !== "") {
        const account = new ManageAccount();

        try {
            await account.resetPassword(email);
            displayAlert("Correo electrónico enviado correctamente.", "success");
        } catch (error) {
            displayAlert(error.message, "error");
        }
    } else {
        // Mostrar alerta si el campo de correo electrónico está vacío
        displayAlert("Por favor ingrese su correo electrónico.", "error");
    }
});

function displayAlert(message, type) {
    const alertDiv = document.getElementById("alert-message");
    alertDiv.textContent = message;
    alertDiv.style.display = "block";

    if (type === "success") {
        alertDiv.style.color = "rgb(187, 251, 251)";
    } else if (type === "error") {
        alertDiv.style.color = "rgb(187, 251, 251)";
    }

    setTimeout(() => {
        alertDiv.style.display = "none";
    }, 5000); // Ocultar el mensaje después de 5 segundos
}
