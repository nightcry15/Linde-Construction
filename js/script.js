// /*Togle Icon Navbar*/
// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// }

// /*Scroll section active link*/
// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.oddsetHeight;
//         let id = sec.getAttribute('id');

//         if(top >= offset && top < offset + height) {
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
//             });
//         };
//     });

//     /*Sticky Navbar*/
//     let header = document.querySelector('header');

//     header.classList.toggle('sticky', window.scrollY > 100);

//     /*Remove Toggle Icon and Navbar when click  on Navbar Link (scroll)*/
//     menuIcon.classList.remove('bx-x');
//     navbar.classList.remove('active');
// };

/*Scroll reveal*/
ScrollReveal({
    reset: true,
    distance: '100px',
    duration: 2000,
    delay: 250
 });

 ScrollReveal().reveal('.heading', { origin: 'top'});
 ScrollReveal().reveal('#bottom-origin, .contact, .services', { origin: 'bottom'});
 ScrollReveal().reveal('#left-origin', { origin: 'left'});
 ScrollReveal().reveal('#right-origin', { origin: 'right'});

/*Typed js*/
// const typed = new Typed('.multiple-text', {
//     strings: ['Photographer', 'Gamer', '....Help'],
//     typeSpeed: 100,
//     backSpeed: 100,
//     backDelay: 1000,
//     loop: true
// });


//Menu toggle-button
$(document).ready(function() {
  $(".menu-icon").on("click", function () {
    $("nav ul").toggleClass("showing");
  })
})

//scrolling Effect
$(window).on("scroll",function() {
  if($(window).scrollTop()) {
    $("nav").addClass("black");
  }
  else {
    $("nav").removeClass("black");
  }
})

window.onscroll = function() {scrollFunction()};

