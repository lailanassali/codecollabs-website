var menuIcon = document.querySelector('.hamburger-menu');
var line1 = document.querySelector('.line-1');
var line2 = document.querySelector('.line-2');
var line3 = document.querySelector('.line-3');
var navList = document.querySelector('.nav-list');
menuIcon.addEventListener('click', () => {
  // navbar.classList.toggle('change');
    console.log('hey');

    if (navList.style.display === 'block') {
        navList.style.display = 'none';
        line1.style.backgroundColor = 'white';
        line2.style.backgroundColor = 'white';
        line3.style.backgroundColor = 'white';
    } else {
        line1.style.background = 'black';
        line2.style.background = 'black';
        line3.style.background = 'black';
        navList.style.display = 'block';
    }

   
});
