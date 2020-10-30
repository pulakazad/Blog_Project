function printErr(element, msg) {
    document.getElementById(element).innerHTML = msg;
}


function validateForm() {
    
    var name = document.contactForm.nameInput.value;
    var email = document.contactForm.emailInput.value;
    var contact = document.contactForm.contactInput.value;
    var message = document.contactForm.textInput.value;
    var nameErr = emailErr = contactErr = messageErr =true;

    // Validate name
    if (name == "") {
        printErr("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printErr("nameErr", "Please enter a valid name");
        } else {
            printErr("nameErr", "");
            nameErr = false;
        }
    }

    // Validate email address
    if (email == "") {
        printErr("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printErr("emailErr", "Please enter a valid email address");
        } else {
            printErr("emailErr", "");
            emailErr = false;
        }
    }

    // Validate mobile number
    if (contact == "") {
        printErr("contactErr", "Please enter your mobile number");
    } else {
        // Regular expression for phone number validation
        var regex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
        if (regex.test(contact) === false) {
            printErr("contactErr", "Please enter a valid mobile number");
        } else {
            printErr("contactErr", "");
            contactErr = false;
        }
    }

    // Validate message
    if (message == "") {
        printErr("messageErr", "Please enter a message");
    } else {
        printErr("messageErr", "");
        messageErr = false;
    }

    if (nameErr || emailErr || contactErr || messageErr == true) {
        return false;
    } else {
        alert('You have submitted the form..')
    }

}