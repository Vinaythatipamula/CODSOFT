/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
    // easing: 'ease-in-out'
});

/*SCROLL NAV*/

sr.reveal('.l-header',{origin: 'top', interval: 200}); 

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button-1',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{origin: 'left'}); 
sr.reveal('.about__subtitle',{origin: 'left',delay: 400}); 
sr.reveal('.about__text',{origin: 'left',delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

/*SCROLL EDUCATION*/
sr.reveal('.card-1',{origin: 'left',delay: 400});
sr.reveal('.card-2',{origin: 'right',delay: 400});
sr.reveal('.card-3',{origin: 'left',delay: 400});


/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200}); 


/*"Back to Top" Button*/
const backToTopButton = document.createElement("button");
backToTopButton.innerText = "↑";
backToTopButton.id = "back-to-top";
backToTopButton.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    display: none;
    padding: 10px 15px;
    font-size: 18px;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    transition: opacity 0.3s;
`;

// Append button to body
document.body.appendChild(backToTopButton);

// Show/hide "Back to Top" button based on scroll position
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

// Scroll to top on button click
backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});




