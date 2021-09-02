// TOOOGLING SEARCH INPUT 
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInp');

searchBtn.addEventListener('click',()=>{
    searchInput.classList.toggle('activeSearchInp')
})


function  burger(){
    const item1 = document.getElementsByClassName('item')[0];
    const item2 = document.getElementsByClassName('item')[1];
    const item3 = document.getElementsByClassName('item')[2];
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle("activeNavlinks")
    item1.classList.toggle("activeItem1")
    item2.classList.toggle("activeItem2")
    item3.classList.toggle("activeItem3")
}