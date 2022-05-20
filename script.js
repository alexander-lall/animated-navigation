// Elements
const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const navItems = [
    document.getElementById('nav-1'),
    document.getElementById('nav-2'),
    document.getElementById('nav-3'),
    document.getElementById('nav-4'),
    document.getElementById('nav-5'),
];

function navAnimation(direction1, direction2) {
    navItems.forEach((nav, i) => {
        nav.classList.replace(`slide-${direction1}-${i + 1}`, `slide-${direction2}-${i + 1}`);
    });
}

function toggleNav() {
    // Toggle menu bar: open/closed
    menuBars.classList.toggle('change');
    // Toogle overlay active
    overlay.classList.toggle('overlay-active');

    // If overlay active, animate in
    if(overlay.classList.contains('overlay-active')) {
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
        navAnimation('out', 'in');
    } 
    // Otherwise, animate out
    else {
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
        navAnimation('in', 'out');
    }
}

// Event Listeners
menuBars.addEventListener('click', toggleNav);
navItems.forEach(navItem => navItem.addEventListener('click', toggleNav));