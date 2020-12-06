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

window.onload = initBannerLink;
var theBanner = 0;
var banURL = new Array("https://thechildcenter.com/calling-all-superheroes-and-sidekicks/","https://www.cbr.com/best-comic-duos/","https://www.cbr.com/marvel-best-worst-superhero-teams/","https://fashionista.com/2019/02/superhero-costume-design-awards-black-panther-oscars","https://www.cbr.com/marvel-vs-dc-who-really-has-the-strongest-heroes/","https://nationaltoday.com/national-superhero-day/");
var heroImages = new
Array("superhero_banners/superhero1.png","superhero_banners/superhero2.png","superhero_banners/superhero3.png","superhero_banners/superhero4.png","superhero_banners/superhero5.png","superhero_banners/superhero6.png"
);

function initBannerLink() {
if (document.getElementById("image").parentNode.tagName == "A")
{
document.getElementById("image").parentNode.onclick =
newLocation;
}
rotate();
}
function newLocation() {
document.location.href = "http://www." + banURL[theBanner];
return false;
}
function rotate() {
theAd++;
if (theBanner == heroImages.length) {
theBanner = 0;
}
document.getElementById("image").src = heroImages[theBanner];
setTimeout(rotate, 3 * 1000);
};

// Attach start and pause event handlers
   // $("start").onclick = function() {
        
   // };
   // $("pause").onclick = function() {
        
   // };