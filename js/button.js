const btn12 = document.querySelector('.btn-1-2');
const btn21 = document.querySelector('.btn-2-1');

const nScreen1 = document.getElementById('nested-screen-1');
const nScreen2 = document.getElementById('nested-screen-2');

btn12.addEventListener('click', ()=>{
    nScreen1.style.display = 'none'
    nScreen2.style.display = 'flex'
})

btn21.addEventListener('click', ()=>{
    nScreen1.style.display = 'flex'
    nScreen2.style.display = 'none'
})

const btn1122 = document.querySelector('.btn-11-22');
const btn2211 = document.querySelector('.btn-22-11');
const btn2233 = document.querySelector('.btn-22-33');
const btn3322 = document.querySelector('.btn-33-22');

const nScreen11 = document.getElementById('nested-screen-11');
const nScreen22 = document.getElementById('nested-screen-22');
const nScreen33= document.getElementById('nested-screen-33');


btn1122.addEventListener('click', ()=>{
    nScreen11.style.display = 'none'
    nScreen22.style.display = 'flex'
})

btn2233.addEventListener('click', ()=>{
    nScreen22.style.display = 'none'
    nScreen33.style.display = 'flex'
})

btn2211.addEventListener('click', ()=>{
    nScreen11.style.display = 'flex'
    nScreen22.style.display = 'none'
})

btn3322.addEventListener('click', ()=>{
    nScreen33.style.display = 'none'
    nScreen22.style.display = 'flex'
})

