const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1')
const nav2 = document.getElementById('nav-2')
const nav3 = document.getElementById('nav-3')
const nav4 = document.getElementById('nav-4')
const nav5 = document.getElementById('nav-5')
const navItem = [nav1,nav2,nav3,nav4,nav5];


// Control Navigation animation

function navAnimation(direction1 , direction2){
    navItem.forEach((nav,i) => {
        nav.classList.replace(`slide-${direction1}-${i+1}`,`slide-${direction2}-${i+1}`)
    });
}

// function toggleNav

function toggleNav() {
    menuBars.classList.toggle('change');
    // Toggle: Menu Active
    overlay.classList.toggle('overlay-active')
    if (overlay.classList.contains('overlay-active')) {
        // Animate in overlay
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
        // Animate In - nav item
        navAnimation('out','in');
    } else {
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
        // Animate Out - nav item
        navAnimation('in','out');
    }
}

// Event listener

menuBars.addEventListener('click', toggleNav);
navItem.forEach((nav) => {
    nav.addEventListener('click',toggleNav);
});
