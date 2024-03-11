const adminButton = document.getElementById("adminButton");
const studentButton = document.getElementById("studentButton");
const adminLoginContainer = document.getElementById("adminLoginContainer");
const studentLoginContainer = document.getElementById("studentLoginContainer");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const studentUsernameInput = document.getElementById("studentUsername");
const studentPasswordInput = document.getElementById("studentPassword");

function toggleLoginContainer(loginContainer) {
    loginContainer.classList.toggle("show");
}

adminButton.addEventListener("click", function() {
    toggleLoginContainer(adminLoginContainer);
});

studentButton.addEventListener("click", function() {
    toggleLoginContainer(studentLoginContainer);
});

function adminLogin() {
    const enteredUsername = usernameInput.value.trim();
    const enteredPassword = passwordInput.value.trim();
    
    if (enteredUsername === "admin" && enteredPassword === "admin@123") {
        alert("Admin login successful!");
        usernameInput.value = "";
        passwordInput.value = "";
        adminLoginContainer.classList.remove("show");
    
        window.location.href = "admin-dashboard.html";
    } else {
        alert("Invalid admin username or password. Please try again.");
        usernameInput.value = "";
        passwordInput.value = "";
    }
}

function studentLogin() {
    const enteredUsername = studentUsernameInput.value.trim();
    const enteredPassword = studentPasswordInput.value.trim();
    
    if (enteredUsername === "student" && enteredPassword === "student@123") {
        alert("Student login successful!");
        studentUsernameInput.value = "";
        studentPasswordInput.value = "";
        studentLoginContainer.classList.remove("show");
    
        window.location.href = "student-dashboard.html";
    } else {
        alert("Invalid student username or password. Please try again.");
        studentUsernameInput.value = "";
        studentPasswordInput.value = "";
    }
}

const loginButton = document.getElementById("loginButton");
const studentLoginButton = document.getElementById("studentLoginButton");

loginButton.addEventListener("click", adminLogin);
studentLoginButton.addEventListener("click", studentLogin);
