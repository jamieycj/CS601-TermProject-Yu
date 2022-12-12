// wait for DOM
window.addEventListener("DOMContentLoaded", function () {
    console.log("DOM is ready");
    // add click event to button
    var button = document.getElementById("myButton");
    button.addEventListener("click", function () {
        validateForm();
    });
});

function validateForm() {
    let isValid = true;
    console.log("validating form");
    //use RegEx to validate first name and last name
    //only alpha characters are used, min length of 2 characters
    const regName = /^[a-zA-Z ]{2,30}$/;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const firstNameError = document.getElementById("firstNameError");
    const lastNameError = document.getElementById("lastNameError");
    let firstNameValid = true;
    let lastNameValid = true;
    //validate first name
    if (!regName.test(firstName)) {
        isValid = false;
        firstNameError.innerText = "Must be at least 2 characters length and all letters";
        firstNameValid = false;
    } else {
        firstNameError.innerText = "";
    }
    //validate last name
    if (!regName.test(lastName)) {
        isValid = false;
        lastNameError.innerText = "Must be at least 2 characters length and all letters";
        lastNameValid = false;
    } else {
        lastNameError.innerText = "";
    }

    //validate email
    const regEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const email = document.getElementById("email").value;
    const emailError = document.getElementById("emailError");
    let emailValid = true;

    if (!regEmail.test(email)) {
        isValid = false;
        emailError.innerText = "Invalid email format";
        emailValid = false;
    } else {
        emailError.innerText = "";
    }

    return isValid;
}




