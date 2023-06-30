window.onload = function(){
    document.getElementById('counter-value').innerHTML = 0;
    const input = document.querySelector("input");
    input.addEventListener("keyup", valueChange);
};

function Increment(){
    var incValue = Number(document.getElementById('value').value)
    var counter = Number(document.getElementById('counter-value').innerHTML)
    counter += incValue
    document.getElementById('counter-value').innerHTML = counter;
}

function Decrement(){
    var decValue = Number(document.getElementById('value').value)
    var counter = Number(document.getElementById('counter-value').innerHTML)
    counter -= decValue
    document.getElementById('counter-value').innerHTML = counter;
}

function valueChange(e){
    console.log(e.target.value)
    document.getElementById('display-value-inc').innerHTML = e.target.value;
    document.getElementById('display-value-dec').innerHTML = e.target.value;
}