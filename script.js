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



var rotatingDiv = document.getElementById('rootbox');
var rotation = 0;
function rotateDiv() {
  rotation += 90;

  // Apply the rotation using CSS transform property
  rotatingDiv.style.transform = 'rotate(' + rotation + 'deg)';
}
window.addEventListener('scroll', e => {
  var el = document.getElementById('jsScroll');
  if(window.scrollY > 200) {
    el.classList.add('visible');
  } else {
    el.classList.remove('visible');
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
function openCloseFunction() {
  var x = document.getElementById("burger")
  if (x.style.display == "block") {
    x.style.display = "none";
    
  } else {
    x.style.display = "flex" ;   
  }
}

function myFunction() {
  var x = document.getElementById("search")
  var z = document.getElementById("burger")
  if (x.style.display == "flex") {
    x.style.display = "none"
    x.style.height= "0px"
    z.style.display="none"
  } else {
    x.style.display = "flex" ; 
    x.style.height = "400px";
    z.style.display="none"
  }
}
