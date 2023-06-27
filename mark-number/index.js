function colorNumber(){
    // console.log('Hi')
    for (var i=1; i<10; i++){
        document.getElementById(`num-${i}`).style.backgroundColor = "white";
        document.getElementById(`num-${i}`).style.color = "black";
    }
    var num = document.getElementById("numberValue").value
    // console.log(num)
    document.getElementById(`num-${num}`).style.backgroundColor = "green";
    document.getElementById(`num-${num}`).style.color = "white";
}