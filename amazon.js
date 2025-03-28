
let btns = document.querySelector('.icon');
let search = document.querySelector('.search')
let search_cont = document.querySelector('.search_cont');

function toggleBtn() {
    btns.classList.toggle('active');
    search_cont.classList.toggle('active');
    search.classList.toggle('active');
}

btns.addEventListener('click', () => {
    toggleBtn();
})