const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function(){
  menu.classList.toggle('is-active')
  menuLinks.classList.toggle('active')
})

var timer;
var ele = document.getElementById('timer');

(function () {
  var sec = 0;
  timer = setInterval(()=>{
    ele.innerHTML = '00: ' +sec;
    sec ++;
  }, 1000)
})()