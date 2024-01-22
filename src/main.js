let number = document.querySelectorAll(`.number, .operation`)
let ope = document.querySelectorAll(`.opreation`)
let sceen = document.querySelector(`input`)
let egal = document.querySelector(`#egal`)
let num =``
let calc = ""
let clear = document.querySelector(`#clear`)


number.forEach(element => {
    element.addEventListener(`click`,()=>{
        if (num == "" && ["+", "*", "/",".","-"].includes(element.value)) { //verfie for the first tap 
            return}
    
           
        if (["+", "-", "*", "/","."].includes(num.slice(-1)) && ["+", "-", "*", "/","."].includes(element.value)) { //verifie if we have a operator 
            return;}
            else{
       //else do a normal calcul
        num += element.value
        sceen.value = num
    }
    })
});

egal.addEventListener(`click`,()=>{
    if (sceen.value == `` && ["+", "*", "/",".","-","="].includes(element.value)) { // verify if we have string in screen
        sceen.value = ``
    }

    else{   //do a calcul
    calc =  Function("return " + num)();
    sceen.value = calc
    num = ``}
    
})

clear.addEventListener('click', ()=>{    // clear screen
    sceen.value = ``
    num = ``

})

