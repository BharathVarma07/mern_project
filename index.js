document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // TO DO: implement login logic here
    // For example, you can use AJAX to send a request to a server-side script
    // to verify the username and password
    alert("Login successful!");
    // Redirect to dashboard or profile page
    window.location.href = "dashboard.html";
});
