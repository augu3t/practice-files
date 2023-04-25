const year = document.querySelector('footer span');
const navItems = document.querySelector('.nav-items');
const menu = document.querySelector('.nav');
const container = document.querySelector('.nav-container');
const arrow = document.querySelector('.navigator');

menu.addEventListener('click', function(e){
    navItems.classList.toggle('show-nav');
})

window.addEventListener('scroll', function(e){
    let top = this.scrollY;
    let height = container.offsetHeight;
    if(top > height){
        container.classList.add('fixed');

        if(top > 580){
            arrow.classList.add('show-arrow');
        }
        else{
            arrow.classList.remove('show-arrow');
        }
    }
    else{
        container.classList.remove('fixed');
        arrow.classList.remove('show-arrow');
    }
})


const d = new Date;
let y = d.getFullYear();
year.textContent = y;