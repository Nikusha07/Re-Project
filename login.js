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
});
function loginModalFunction() {
    var signUp = document.getElementById("Sign_up_box")
    var signIn = document.getElementById("sign_in_box")
    if (signIn.style.display === "none") {
      signIn.style.display = "flex"
      signUp.style.display = "none"
    } else {
      signUp.style.display = "flex" ; 
      signIn.style.display = "none"
    }
  }

  fetch('https://cdn.shopify.com/s/files/1/0024/0684/2441/files/REDMAGIC-8-Pro-Gaming-Smartphone-Banner-Pad_2x_6fcda3e6-e0f9-4788-9414-4be494c5ccd4_x540@3x.jpg?v=1680765797')
  .then(response => {
    if (response.ok) {
      return response.blob();
    }
    throw new Error('Network response was not ok.');
  })
  .then(blobData => {
    const fileInfo = {
      fileName: 'TK3tWkYFABsmjsphPho.woff2',
      fileSize: blobData.size,
      fileType: blobData.type,
    };
    console.log('File Information:', fileInfo);
  })
  .catch(error => {
    console.error('Error:', error);
  });
