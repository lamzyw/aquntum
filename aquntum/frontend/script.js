document.getElementById("registerBtn").addEventListener("click", () => {
    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: "user@example.com",
            password: "password123",
        }),
    })
    .then(response => response.json())
    .then(data => alert(data.message))
    .catch(error => console.error("Ошибка:", error));
});

document.getElementById("loginBtn").addEventListener("click", () => {
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: "user@example.com",
            password: "password123",
        }),
    })
    .then(response => response.json())
    .then(data => alert(data.message))
    .catch(error => console.error("Ошибка:", error));
});