import { ManageAccount } from "../../../../../../../Downloads/Login/Login/js/FirebaseConfi.js";

document.getElementById("formulario-crear").addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const account = new ManageAccount();

    // Llama al método authenticate en lugar de register
    account.authenticate(email, password);
});
