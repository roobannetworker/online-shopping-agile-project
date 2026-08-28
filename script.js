document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (name && email && password) {
        message.textContent = "Registration successful!";
        message.style.color = "green";

        document.getElementById("registrationForm").reset();
    }
});