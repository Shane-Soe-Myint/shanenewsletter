const email = document.forms['form']['email'];
const emailError = document.getElementsByClassName("emailError")[0];

email.addEventListener("textInput", emailTrue);

function emailTrue() {
    if (email.value.length > 8) {
        emailError.style.display = "none";
        email.style.backgroundColor = "hsl(0, 0%, 100%)";
        email.style.color = "#000";
        return true;
    }
}

function emailFalse() {
    if (email.value.length < 10) {
        emailError.style.display = "block";
        email.style.border = "1px solid orange";
        email.style.color = "#FF6A3A";
        email.style.backgroundColor = "hsla(4, 100%, 67%, 0.432)";
        return false;
    }
}