function myFunction() {
    var x = document.getElementById("Sign_up_box")
    var y = document.getElementById("sign_in_box")
    if (x.style.display == "none") {
      x.style.display = "flex"
      y.style.display = "flex"
      y.style.display = "none"
    
    } else {
      x.style.display = "flex" ; 
      y.style.display = "none"
    }
  }
  function myFunctiontwo() {
    var x = document.getElementById("Sign_up_box")
    var y = document.getElementById("sign_in_box")
    if (x.style.display == "flex") {
      x.style.display = "none"
      y.style.display = "none"
      y.style.display = "flex"
    
    } else {
      x.style.display = "flex" ; 
      y.style.display = "none"
    }
  }