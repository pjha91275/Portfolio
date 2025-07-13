alert("Portfolio is still under construction!");

//toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active'); 
}


//scroll section 
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec =>{
      let top = window.scrollY;
      let offset = sec.offsetTop -100;  
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if(top >= offset && top < offset + height){
        navLinks.forEach(links =>{
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');  
        });
        sec.classList.add('show-animate');
      }
        else{
          sec.classList.remove('show-animate');
      }
});

    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    let footer = document.querySelector('footer');
    const buffer = 5; // tolerance for rounding errors
    const scrolledBottom = window.innerHeight + window.scrollY;
    const fullHeight = document.documentElement.scrollHeight;

    footer.classList.toggle('show-animate', scrolledBottom >= fullHeight - buffer);
}

const roles = ["Computer Engineering Student", "Aspiring Web Developer"];
let currentRole = 0;
const roleElement = document.getElementById("animated-role");

function changeRole() {
    roleElement.classList.remove("typing");
    setTimeout(() => {
        currentRole = (currentRole + 1) % roles.length;
        roleElement.textContent = roles[currentRole];
        roleElement.classList.add("typing");
    }, 300); 
}


roleElement.classList.add("typing");
setInterval(changeRole, 4000);

