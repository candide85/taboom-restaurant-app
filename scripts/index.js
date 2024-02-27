// const home = document.querySelector('a');
// const active = home.setAttribute('class','active');
const menu = document.getElementById('menu');
const hambmenu = document.getElementById("hamb-menu");
const crossmenu = document.getElementById("cross-menu");
console.log(hambmenu)
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
menu.style.display = 'none';
crossmenu.style.display = 'none';


hambmenu.addEventListener('click', () => {

    if(menu.style.display === 'none') {

        menu.style.display = 'block';
        hambmenu.style.display = 'none'
        crossmenu.style.display = 'block'
    }else{
        crossmenu.style.display = 'none';
        hambmenu.style.display = 'block';
    }
})


crossmenu.addEventListener('click', () => {

    if(menu.style.display === 'block') {

        menu.style.display = 'none';
        crossmenu.style.display = 'none'
        hambmenu.style.display = 'block'
    }else{
        crossmenu.style.display = 'block'
        hambmenu.style.display = 'none';
    }
})