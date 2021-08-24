const burger = document.getElementById('burger');
const burgermenu =document.getElementById('burgermenu');
const menu = document.getElementsByClassName('menu');

burger.addEventListener('click',()=>{
    if(burger.classList.contains('animate')){
        burger.classList.remove('animate');
        burgermenu.style.display='none';
    }
    else{
        burger.classList.add('animate');
        console.log('clicked');
        burgermenu.style.display='block';
    }
})

var mq = window.matchMedia( "(max-width: 700px)" );
if(mq.matches){

    for(let i=0;i<menu.length;i++)
{
    menu[i].addEventListener('click',function() {

        const arrow = document.getElementsByClassName('arrow');
        if(arrow[i].style.transform ==='rotate(-270deg)'){
            arrow[i].style.transform ='rotate(270deg)';
        }
        else {
            arrow[i].style.transform ='rotate(-270deg)';
        }

        const dropdown = document.getElementsByClassName('dropdown');
        dropdown[i].classList.toggle('active');
        
        const submenu = document.getElementsByClassName('submenu');
        
     if (submenu[i].style.display === "block") {
        submenu[i].style.display = "none";
     } 
     else{
        submenu[i].style.display = "block";
    }
    });
}
}
