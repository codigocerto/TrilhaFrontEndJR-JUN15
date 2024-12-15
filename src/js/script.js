
const myObserver = new IntersectionObserver( (evento) => {
    // console.log(evento)
    evento.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    })
});
const elementos = document.querySelectorAll('.hidden');

elementos.forEach( (element) => {
    myObserver.observe(element)
});

const isidBar = document.querySelector('#isida-bar');
const menuMobile = document.querySelector('.menu-mobile');
const hamburger = document.querySelector('#menu-hamburger');
const inputCheck = document.querySelector('#click');
menuMobile.addEventListener('click', () => {
    if(inputCheck.checked){
        hamburger.classList.add('fa-x');
        hamburger.classList.remove('fa-bars');
        isidBar.style.display='block';
    }
    else{
        hamburger.classList.remove('fa-x');
        // isidBar.classList.add('comprimir');
        hamburger.classList.add('fa-bars');
        isidBar.style.display='none';
    }
})