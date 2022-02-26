let div = document.createElement('div'); 
let textNode = document.createTextNode('1.Типа смешно.'); 
document.body.append(div); 
div.append(textNode); 
 


div.classList.add('g'); 
let goose = document.querySelector('.g'); 
goose.style.margin="50px"; 
 
div1.classList.add('g1'); 
let goose1 = document.querySelector('.g1'); 
goose1.style.margin="50px"; 
 
div2.classList.add('g2'); 
let goose2 = document.querySelector('.g2'); 
goose2.style.margin="50px"; 
 
function multi(){ 
    
    let inp1=document.getElementById('i1').value, 
    inp_2=document.getElementById('i2').value; 
    let  inp_3=document.getElementById('i3').value=inp1*inp_2; 
    message.textContent =inp1*inp2; 
}