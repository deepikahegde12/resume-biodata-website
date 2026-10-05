// Display welcome message when the website loads
window.onload = function () {
    alert("Welcome to my Resume and Bio-data Website!");
};

// Contact form validation
function showMessage() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name == "" || email == "" || message == "") {
        alert("Please fill all the fields.");
        return false;
    }

    alert("Thank you, " + name + "! Your message has been submitted.");
    return false;
};

// Display current year automatically
document.getElementById("year").innerHTML = new Date().getFullYear();