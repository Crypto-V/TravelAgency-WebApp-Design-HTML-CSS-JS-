let x = document.getElementsByClassName("contentFilter");
let plus = document.getElementsByClassName("plus");
let minus = document.getElementsByClassName("minus");


function collapse(number){
    x[number].style.display = 'none';
    minus[number].style.display = 'none';
    plus[number].style.display = 'initial';

}

function extend(number){
    x[number].style.display = 'initial';
    minus[number].style.display = 'initial';
    plus[number].style.display = 'none';
}