 
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
function scrollToPc() {
  window.scrollTo({
    top: 2000,
    behavior: 'smooth'
  });
}
function openCloseFunction() {
  var x = document.getElementById("burger")
  if (x.style.display === "none") {
    x.style.display = "flex";
    
  } else {
    x.style.display = "none" ;   
  }
}

function    burgerFunction() {
  var search = document.getElementById("search")
  var burger = document.getElementById("burger")
  if (search.style.display === "none") {
    search.style.display = "flex"
    search.style.height = "250px"
    
  } else {
    search.style.display = "none"
  }
}

function scrollToMobile() {
  window.scrollTo({
    top: 400,
    behavior: 'smooth'
  });
}

let productsImgArray = [
  {
    Id : 1 ,
    url : "https:cdn.shopify.com/s/files/1/0024/0684/2441/files/REDMAGIC-8-Pro-Gaming-Smartphone-Banner-PC_2x_827d7263-2aeb-4645-a34b-854ad4147c6a_x670.jpg?v=1680840925",
  },
  {
    Id :2 , 
    url : "https://cdn.shopify.com/s/files/1/0024/0684/2441/files/REDMAGIC-7s-Pro-Gaming-Smartphone-Banner-PC_2x_d8243cae-5857-4ad2-8309-f99a264dcd3d_x670.jpg?v=1680840926"
  },
  {
    Id : 3 , 
    url : "https://cdn.shopify.com/s/files/1/0024/0684/2441/files/REDMAGIC-PC-Gaming-Banner-PC_2x_52b1188b-5939-40af-b20e-183137d74067_x670.jpg?v=1680840925"
  }
]
let responsiveImgArray = [
  {
    Id : 1 ,
    url : "https://cdn.shopify.com/s/files/1/0024/0684/2441/files/REDMAGIC-8-Pro-Gaming-Smartphone-Banner-MOB_2x_0704264c-37fd-4f18-a47a-acb524fe1dca_x625.jpg?v=1680765791",
  },
  {
    Id :2 , 
    url : "https://cdn.shopify.com/s/files/1/0024/0684/2441/files/banner_redmagic-7s-pro_phone_2x_07c06b18-970c-410e-b461-c80deb391085_x680.jpg?v=1672929646"
  },
  {
    Id : 3 , 
    url : "https://cdn.shopify.com/s/files/1/0024/0684/2441/files/REDMAGIC-PC-Gaming-Banner-MOB_2x_6d5ff8a6-d592-44e3-9899-0d4743a4410d_x680@3x.jpg?v=1680754489"
  }
]
function setBackground(sectionId, imageUrl) {
  const section = document.getElementById(sectionId);
  section.style.backgroundImage = `url(${imageUrl})`;
}
for (let i = 0; i < productsImgArray.length; i++) {
  const product = productsImgArray[i];
  setBackground(product.Id, product.url);
}
function setBackground(sectionId, imageUrl) {
  const section = document.getElementById(sectionId);
  section.style.backgroundImage = `url(${imageUrl})`;
}

function setResponsiveBackground() {
  const screenWidth = window.innerWidth;
  const responsiveArray = screenWidth < 768 ? responsiveImgArray : productsImgArray;
  
  for (let i = 0; i < responsiveArray.length; i++) {
    const product = responsiveArray[i];
    setBackground(product.Id, product.url);
  }
}

// Initial background image setup
setResponsiveBackground();

// Add event listener for screen resize
window.addEventListener('resize', setResponsiveBackground);
