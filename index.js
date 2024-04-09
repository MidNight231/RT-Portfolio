/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */

const handleFirstTab = (e) => {
  if(e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing')

    window.removeEventListener('keydown', handleFirstTab)
    window.addEventListener('mousedown', handleMouseDownOnce)
  }

}

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing')

  window.removeEventListener('mousedown', handleMouseDownOnce)
  window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});

/* -----------------------------------------
               Image gallery 
 ---------------------------------------- */

var slideIndex = 1;

var z = document.getElementsByClassName("slideshow__images-box");

for (i = 0; i < z.length; i++)
{
    z[i].setAttribute("data-currentslide", 1);
    showSlides(z[i].getAttribute("data-currentslide"), i);
}

function plusSlides(n, j)
{
    slideIndex = parseInt(z[j].getAttribute("data-currentslide")[0]);
    showSlides(slideIndex += n, j);
}

function currentSlide(n, j)
{
    showSlides(slideIndex = n, j);
}

function showSlides(n, j)
{
    var i;
    var z = document.getElementsByClassName("slideshow__images-box")[j];
    var slides = z.getElementsByClassName("mySlides");
    var dots = z.getElementsByClassName("dot");

    if (n > slides.length) {slideIndex = 1}

    if (n < 1) {slideIndex = slides.length}

    z.setAttribute("data-currentslide", slideIndex);

    for (i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++)
    {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var images = document.getElementsByClassName("modal_image");

for (var i = 0; i < images.length; i++)
{
    images[i].addEventListener("click", openModal);
}

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

function openModal(e)
{
    var image = e.currentTarget;

    modal.style.display = "block";
    modalImg.src = image.src;
    captionText.innerHTML = image.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function ()
{
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event)
{
    if (event.target == modal)
    {
        modal.style.display = "none";
    }
}

