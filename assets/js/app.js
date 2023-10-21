const wordList = ['DEVELOPER','DESIGNER','FAST CODER']
const span = document.querySelector('span')

let wordIndex = 0
let charater = 0
let revereTyping = false

const inteId = setInterval(()=>{

if(!revereTyping){
    span.innerText =span.innerText +  wordList[wordIndex][charater]
    charater++
}else{
    span.innerText = span.innerText. slice(0, span.innerText.length-1)
}
if (charater === wordList[wordIndex].length ) {
    revereTyping = true
}
if(span.innerText.length === 0 && revereTyping){
revereTyping = false
charater = 0
wordIndex++
}


if(wordIndex === wordList.length){
wordIndex = 0
}

},200)

// =====================================

let menuIcon = document.querySelector('#menu-icons');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');

};
// =================================




/*scrol section */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll=() =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = set.offsetTop -150;
        let heigth = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset+ heigth){
        navLinks.forEach(links => {
        links.classList.remove('active');
    document.querySelector('header nav a[href*='+ id +']').classList.add('active');

      });
     }
 })

/*==============second=========== */

let header = document.querySelector('header')
header.classList.toggle('sticky',window.scrollY > 100)
// remove toggle icon=====================
menuIcon.classList.remove('fa-x');
navbar.classList.remove('active');
};
//==========================scroll reveal=================


ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration:2000,
    delay:200
 });

 ScrollReveal().reveal('.home-content, .heading', { origin:'top' });
 ScrollReveal().reveal('.home-img, .services-container,.portfolio-box,,contact form', { origin:'bottom' });
 ScrollReveal().reveal('.home-content h1,.about-img' ,{ origin:'left' });
// ======================================================
