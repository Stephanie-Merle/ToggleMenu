
// Open the drawer when the menu is clicked.
  
const menu = document.querySelector('#menu');
const main = document.querySelector('main');
const folded = document.querySelector('#foldedMenu');
const table = document.querySelector('table');

menu.addEventListener('click', function(e) {
    folded.classList.toggle('open');
    table.classList.toggle('hidden');
    e.stopPropagation();
    
});

main.addEventListener('click', function() {
    folded.classList.remove('open');
    table.classList.remove('hidden');
});

folded.addEventListener('click', function() {
    folded.classList.remove('open');
    table.classList.remove('hidden');
});
