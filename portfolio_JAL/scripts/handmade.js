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