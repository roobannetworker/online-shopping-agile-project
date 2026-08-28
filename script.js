const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (email === "" || password === "") {
        message.textContent = "Please enter email and password.";
        message.style.color = "red";
        return;
    }

    if (email === "user@example.com" && password === "123456") {
        message.textContent = "Login successful!";
        message.style.color = "green";
    } else {
        message.textContent = "Invalid email or password.";
        message.style.color = "red";
    }
});