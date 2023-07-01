window.onload = function(){
    let array = []
    let number = Math.floor(Math.random() * 101);
    document.getElementById('submit').addEventListener("click", function(){
        let x = Number(document.getElementById('input').value)
        array.push(x)
        document.getElementById('array').innerHTML = array
        if (x>number){
            document.getElementById('answer').innerHTML = 'Too High!'
        }
        else if (x<number){
            document.getElementById('answer').innerHTML = 'Too Low!'
        }
        else if (x===number){
            document.getElementById('answer').innerHTML = 'Congrats you guessed right!'
        }
        else{
            console.log('Error')
        }
    });
    document.getElementById('reset').addEventListener("click",function(){
        document.location.reload();
    })
};