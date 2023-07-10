function signIn() {
    const username = document.querySelector('#sign_in_box input[type="text"]').value;
    const password = document.querySelector('#sign_in_box input[type="password"]').value;
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && username === user.username && password === user.password) {
        window.location.href = 'main.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }

    document.querySelector('#sign_in_box form').reset();
}

const signInForm = document.querySelector('#sign_in_box form');
signInForm.addEventListener('submit', function(event) {
    event.preventDefault();
    signIn();
});

const signUpForm = document.querySelector('.sign_up_lable');
signUpForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.querySelector('.sign_up_lable input[type="text"]').value;
    const email = document.querySelector('.sign_up_lable input[type="email"]').value;
    const password = document.querySelector('.sign_up_lable input[type="password"]').value;
    const user = {
        username: username,
        email: email,
        password: password
    };
    localStorage.setItem('user', JSON.stringify(user));

    signUpForm.reset();
    loginModalFunction(); // Open sign-in modal after registration
});

function loginModalFunction() {
    var signUp = document.getElementById("Sign_up_box");
    var signIn = document.getElementById("sign_in_box");
    if (signIn.style.display === "none") {
        signIn.style.display = "flex";
        signUp.style.display = "none";
    } else {
        signUp.style.display = "flex";
        signIn.style.display = "none";
    }
}

// Call loginModalFunction() after user registration
// Assuming you have a registration process elsewhere in your code
// where you handle successful registration.
registerUser(); // Call your registration function

function registerUser() {
    // Your registration logic here
    // After successfully registering the user, call loginModalFunction()
    loginModalFunction();
}
