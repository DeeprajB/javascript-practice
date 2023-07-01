window.onload = function() {
    const input = document.querySelector('input')
    input.addEventListener('keyup', function(e){
        let number = e.target.value;
        if (number.length > 3){
            document.getElementById('output').innerHTML = "("+ number.charAt(0)+number.charAt(1)+number.charAt(2)+")-"+number.substr(3)
        }else{
            document.getElementById('output').innerHTML = number
        }
    })
}