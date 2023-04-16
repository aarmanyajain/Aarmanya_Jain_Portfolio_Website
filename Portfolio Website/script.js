// Header Toggle

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

//toggle button

var icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src ="moonn.png";
        } else{
        icon.src ="sunn.png";
    }
}

// document.querySelectorAll('.fa-brands').forEach((i)=>i.style.color='white');

// var icon =document.querySelector("#icon");
// // icon.setAttribute('src','sunn.png');

// icon.addEventListener('click',function(){
//     // document.querySelector('.header').classList.add('whiteHoja');
//     console.log('hiiiii')
// });



// Typing effect

let typed = new Typed('.auto-input',{
     strings: ['Full Stack Developer!', 'Freelancer!', 'Designer!', 'Video Editor!'],
     typeSpeed: 50,
     backSpeed: 50,
     backDelay: 2000,
     loop: true,
})

//Active link State on scroll

//Get all Links
let navlinks = document.querySelectorAll('nav ul li a')
//Get all sections
let sections = document.querySelectorAll('section')

window.addEventListener('scroll', function (){
    const scrollPos = window.scrollY + 20
    sections.forEach(section => {
        if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)){
            navlinks.forEach(link => {
               link.classList.remove('active');
                  if(section.getAttribute('id') === link.getAttribute('href').substring(0)){
                    link.classList.add('active')
                  }
            });
        }
    });
});