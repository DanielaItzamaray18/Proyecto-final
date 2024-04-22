//Importa las funciones necesarias del SDK de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyA_VTiwIUHIIWaU1sXPyIRjQE9l4xRI0zU",
    authDomain: "ejemplo-fd408.firebaseapp.com",
    projectId: "ejemplo-fd408",
    storageBucket: "ejemplo-fd408.appspot.com",
    messagingSenderId: "166741447527",
    appId: "1:166741447527:web:a9e7b6e53705d83b8f15c2",
    measurementId: "G-DETGM6FEKT"
  };


// Inicializa la aplicación de Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Clase para manejar la cuenta de usuario
export class ManageAccount {

    // Método para restablecer la contraseña de un usuario
    resetPassword(email) {
        // Verifica si el correo electrónico no está vacío
        if (email.trim() !== "") {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    // Mostrar alerta de correo electrónico enviado con éxito
                    alert("Se ha enviado un correo electrónico para restablecer tu contraseña.");
                })
                .catch((error) => {
                    console.error(error.message);
                    // Mostrar alerta de error
                    alert("Error al enviar el correo electrónico para restablecer la contraseña: " + error.message);
                });
        } else {
            // Mostrar alerta si el campo de correo electrónico está vacío
            alert("Por favor ingrese su correo electrónico.");
        }
    }

    // Método para autenticar a un usuario existente con correo electrónico y contraseña
    authenticate(email, password) {
        // Verifica si ambos campos están completados
        if (email.trim() !== "" && password.trim() !== "") {
            signInWithEmailAndPassword(auth, email, password)
                .then(() => {
                    // Mostrar alerta de inicio de sesión exitoso
                    alert("Has iniciado sesión correctamente. Serás redirigido a la página principal.");
                    // Redirigir solo si los campos no están vacíos
                    window.location.replace("inde.html");
                })
                .catch((error) => {
                    console.error(error.message);
                    // Mostrar alerta de error de inicio de sesión
                    alert("Error al iniciar sesión: " + error.message);
                });
        } else {
            // Mostrar alerta si los campos están vacíos
            alert("Por favor ingrese su correo electrónico y contraseña.");
        }
    }
}
// Clase para manejar la cuenta de usuario
export class ManageAccount {

    // Método para restablecer la contraseña de un usuario
    resetPassword(email) {
        // Tu código para restablecer la contraseña
    }

    // Método para autenticar a un usuario existente con correo electrónico y contraseña
    authenticate(email, password) {
        // Tu código para autenticar al usuario
    }
}

