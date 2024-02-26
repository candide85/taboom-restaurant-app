// const home = document.querySelector('a');
// const active = home.setAttribute('class','active');
const menu = document.getElementById('menu');
const navmenu = document.getElementsByClassName('nav-menu');

const recipe_menu =document.getElementsByClassName('recipe-menu');

for(let i=0; i< recipe_menu.length; i++) {
    recipe_menu[i].addEventListener('click', () => {
        let curr = document.getElementsByClassName("active");
        curr[0].className = curr[0].className.replace(" active");
        this.className += " active";
    })
}

for(let i=0; i < navmenu.length; i++) {
    navmenu[i].addEventListener('click', () => {
        let curr = document.getElementsByClassName("active");
        curr[0].className = curr[0].className.replace(" active","");
        this.className += " active";
    })
}
