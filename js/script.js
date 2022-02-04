const BTN = document.querySelector('button');
const CONTENT = document.querySelector('#content');

BTN.addEventListener('click', function(){
    CONTENT.textContent = "Hello World";
});
function change(){
    const d=new Date();
    const heure=d.toLocaleTimeString("fr");
    const p=document.querySelector("p.heure");
    
    if (d.getSeconds()%3==0){
        p.classList.add("red-text");
    }else{
        p.classList.remove("red-text");
    }
    p.innerHTML=heure;
    // p.innerText=heure;
}
setInterval("change()",1000);