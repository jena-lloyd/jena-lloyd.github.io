//cherry cola scarf
window.onload = rotate;
var theBanner = 0;
var firstImages = new
Array("handmade/cherrycola_first2012.jpg","handmade/cherrycola_rosettes.jpg"
);
function rotate() {
theBanner++;
if (theBanner == firstImages.length) {
theBanner = 0;
}
document.getElementById("cherry").src = firstImages[theBanner];
setTimeout(rotate, 3 * 1000);
}

//virus shawl
window.onload = rotate;
var theBanner = 0;
var firstImages = new
Array("handmade/myrtle_back.jpg","handmade/myrtle_flat.jpg","handmade/myrtle_close.jpg"
);
function rotate() {
theBanner++;
if (theBanner == firstImages.length) {
theBanner = 0;
}
document.getElementById("shawl").src = firstImages[theBanner];
setTimeout(rotate, 3 * 1000);
}

//punchpop waffle scarf
window.onload = rotate;
var theBanner = 0;
var firstImages = new
Array("handmade/punchpop_waffle.jpg","handmade/punchpop_styled.jpg","handmade/punchpop_close.jpg"
);
function rotate() {
theBanner++;
if (theBanner == firstImages.length) {
theBanner = 0;
}
document.getElementById("waffle").src = firstImages[theBanner];
setTimeout(rotate, 3 * 1000);
}