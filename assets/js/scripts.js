var openMenuButton = document.getElementById('menu-open');
var closeMenuButton = document.getElementById('menu-close');

var menuOverlay = document.getElementById('header-bar');

// function to open the mobile nav overlay
function openMenu(){
  menuOverlay.style.height = "100%";
};


// Function to close the menu overlay on mobile
function closeMenu(){
  menuOverlay.style.height = "0%";
};

openMenuButton.addEventListener("click", openMenu);
closeMenuButton.addEventListener("click", closeMenu);
