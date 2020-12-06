window.onload = rotate;
var theBanner = 0;
var heroImages = new
Array("superhero_banners/superhero1.png","superhero_banners/superhero2.png","superhero_banners/superhero3.png","superhero_banners/superhero4.png","superhero_banners/superhero5.png","superhero_banners/superhero6.png"
);
function rotate() {
theBanner++;
if (theBanner == heroImages.length) {
theBanner = 0;
}
document.getElementById("image").src = heroImages[theBanner];
setTimeout(rotate, 3 * 1000);
}


// Attach start and pause event handlers
   // $("start").onclick = function() {
        
   // };
   // $("pause").onclick = function() {
        
   // };
};