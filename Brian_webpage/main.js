let mybtn = document.querySelector("[selector='btn']");
let mydiv = document.querySelector(".contact-us")
mybtn.onclick =function(el){
    
    mybtn.style.display='none'  
    mydiv.style.visibility="visible" 
    mydiv.style.transition = "all 1s ease-in-out"
    mydiv.style.top='10%' 
    
    
}

let btn_2 = document.getElementById("start-btn")

btn_2.onclick = function(){
    window.scrollTo({
        'top':1400,
        'behavior':'smooth'
    })
        
    
}

