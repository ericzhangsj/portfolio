const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active'); 
}





let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-intro-header');
let logoSpan = document.querySelectorAll('.logo-intro')

window.addEventListener('DOMContentLoaded', () => {
    
    setTimeout(() => {
        
        logoSpan.forEach((span, idx) => {
            setTimeout(()=> {
                span.classList.add('active');
                
            }, (idx + 1) * 400)  
        });
        

        setTimeout(()=> {
            logoSpan.forEach((span, idx)=>{

                setTimeout(() => {
                   span.classList.remove('active');
                   span.classList.add('fade');
                }, (idx+1) * 0)
            })
        },2000);

        setTimeout(() => {
           intro.classList.add('hidden');

        }, 2300);

    })
}


)