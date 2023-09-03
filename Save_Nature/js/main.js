// work on button 
let my_btn = document.querySelector('.up-btn')  ;



window.onscroll = function(){
    if(window.scrollY >= 400){
        my_btn.style.display ='block'
    }
    else if(window.scrollY <= 399){
        my_btn.style.display ='none'
        

    }
}
my_btn.onclick = function(){
    window.scrollTo({
        top:0 , 
        behavior:'smooth'
        
    })
}



