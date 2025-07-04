document.getElementById("form").addEventListener("submit", submitFun);

function submitFun(e) {
    e.preventDefault();
     username = document.getElementById("name").value;
     password = document.getElementById("password").value;

    if (username === "admin" && password === "deep") {
        window.location.href = "student.html";
    } else {
        alert("Invalid username or password");
        document.getElementById("form").reset();
    }
}
