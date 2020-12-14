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
var theBanner2 = 0;
var secondImages = new
Array("handmade/myrtle_back.jpg","handmade/myrtle_flat.jpg","handmade/myrtle_close.jpg"
);
function rotate() {
theBanner2++;
if (theBanner2 == secondImages.length) {
theBanner2 = 0;
}
document.getElementById("shawl").src = secondImages[theBanner2];
setTimeout(rotate, 3 * 1000);
}

//punchpop waffle scarf
window.onload = rotate;
var theBanner3 = 0;
var thirdImages = new
Array("handmade/punchpop_waffle.jpg","handmade/punchpop_styled.jpg","handmade/punchpop_close.jpg"
);
function rotate() {
theBanner3++;
if (theBanner3 == thirdImages.length) {
theBanner3 = 0;
}
document.getElementById("waffle").src = thirdImages[theBanner3];
setTimeout(rotate, 3 * 1000);
}