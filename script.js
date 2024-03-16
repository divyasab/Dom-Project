document.getElementById("red").addEventListener("click",changeBackground)
    function changeBackground(){
        const box=document.getElementById("box")
        box.style.background="red";
    }
document.getElementById("green").addEventListener("click",Background)
    function Background(){
        const box=document.getElementById("box")
        box.style.backgroundColor = "green";
       
    }
document.getElementById("blue").addEventListener("click",changeBackColor)
    function changeBackColor(){
        const box=document.getElementById("box")
        box.style.background="blue";
    }

