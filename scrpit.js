/*================For Menu===========*/
const bar = document.getElementById('menu');
const nav = document.querySelector('.navbar');
const close = document.getElementById('close');


if (bar) {
    bar.addEventListener('click', function () {
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click', function () {
        nav.classList.remove('active');
    })
}

/*================Counter Section===========*/

let valueDisplays=document.querySelectorAll(".count");
let interval=5000;

valueDisplays.forEach((valueDisplay)=>{
    let startValue=0;
    let endValue=parseInt(valueDisplay.getAttribute("data-val"));
    let duration=Math.floor(interval/endValue);
    let counter=setInterval(function(){
        startValue+=1;
        valueDisplay.textContent=startValue;
        if(startValue===endValue){
            clearInterval(counter);
        }
    }, duration)
});

/*================Scroll Section===========*/


const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements=document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=>observer.observe(el));

