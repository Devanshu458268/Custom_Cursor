var crsr=document.querySelector(".cursor")
var body=document.querySelector("body")

body.addEventListener("mousemove",function(data){
    crsr.style.left=data.x+"px"
    crsr.style.top=data.y+"px"
    

})