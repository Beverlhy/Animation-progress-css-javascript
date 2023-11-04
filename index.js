const span = document.querySelector('span');
const annimer = document.querySelector('#annimer div');
deb = 1;

log = setInterval(add, 50);

function add(){
   if(deb == 100){
      clearInterval(log);
      annimer.style.animationPlayState = 'paused';
   }
   else{
      deb++
      span.innerHTML = deb + '%';
   }
}