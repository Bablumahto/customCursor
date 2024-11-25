let crsr=document.querySelector(".cursor");
let main=document.querySelector("#main");
main.addEventListener("mousemove", (dets)=>{
crsr.style.left=dets.x+"px";
crsr.style.top=dets.y+"px";

})
