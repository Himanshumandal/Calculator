
document.addEventListener("DOMContentLoaded",function(){
let buttons=document.querySelectorAll('button')
let i=document.getElementById('input')
let string=""
buttons.forEach(button=>{
    button.addEventListener('click',function(){
        handleclick(button.textContent);
    });
});

 function handleclick(val){
        switch(val){
            case "=":
             i.value=evaluate(i.value);
             break;
            case "AC":
             i.value="";
             break;
            case "DE":
             i.value=i.value.slice(0,-1);
             break;
            default:
             i.value+=val;  
        }
 }
 function evaluate(expression){
    try{
        return eval(expression);
    }
    catch(error){
        return "Error";
    }
 }
});