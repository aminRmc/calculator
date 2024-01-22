let number = document.querySelectorAll(`.number, .operation`)
let ope = document.querySelectorAll(`.opreation`)
let sceen = document.querySelector(`input`)
let egal = document.querySelector(`#egal`)
let num =``
let calc = ""
let clear = document.querySelector(`#clear`)


number.forEach(element => {
    element.addEventListener(`click`,()=>{
        if (num == "" && ["+", "*", "/",".","-"].includes(element.value)) {
            return}
    
           
        if (["+", "-", "*", "/","."].includes(num.slice(-1)) && ["+", "-", "*", "/","."].includes(element.value)) {
            return;}
            else{
       
        num += element.value
        sceen.value = num
    }
    })
    if (num == sceen.value   && ["+", "*", "/",".","-"].includes(element.value)) {
         sceen.value = num 
    }
});

egal.addEventListener(`click`,()=>{
    if (sceen.value == `` && ["+", "*", "/",".","-","="].includes(element.value)) {
        sceen.value = ``
    }

    else{
    calc =  Function("return " + num)();
    sceen.value = calc
    num = ``}
    
})

clear.addEventListener('click', ()=>{   
    sceen.value = ``
    num = ``

})

