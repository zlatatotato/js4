'use strict'

let a = +prompt('Введите первое число');
let b = +prompt('Введите второе число');
function showMessage(){
    for(let c = a; c<b; c++){
        if(c%2==0){
            alert(c)
        }
    }
}
showMessage()

let i = +prompt('Введите число');
while(i<3){
    alert(i);
    i++;
}

while(true){
    let num = +prompt('Введите число больше 10');
    if(!num) break;
    if(num>10) break;
}

let d = +prompt('Введите первое число');
let e = +prompt('Введите второе число');
function min(d, e){
    if(d<e) {
        alert(d);
    } 
    else if(e<d){
        alert(e);
    }
}
min(d, e)