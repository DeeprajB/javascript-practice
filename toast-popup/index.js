function myFunction() {
    var toast = document.getElementById("toast");

    var xAxis = document.getElementById('x-axis').value
    var yAxis = document.getElementById('y-axis').value

    switch(document.getElementById('type').value){
        case 'success':
            toast.style.backgroundColor = 'green';
            toast.style.color = 'white';
            break;
        case 'error':
            toast.style.backgroundColor = 'red';
            toast.style.color = 'white';
            break;
        case 'alert':
            toast.style.backgroundColor = 'yellow';
            toast.style.color = 'black';
            break;
        case 'info':
            toast.style.backgroundColor = 'blue';
            toast.style.color = 'white';
            break;
        default:{
             console.log("Error");
         }
    }

    toast.style[xAxis] = '2%';
    toast.style[yAxis] = '2%';

    document.getElementById('t-message').innerHTML = document.getElementById('message').value

    toast.className = "show";

    var closed = false;

    document.getElementById("close-button").addEventListener("click", function(){
        toast.className = toast.className.replace("show", "");
        toast.style.removeProperty(xAxis)
        toast.style.removeProperty(yAxis)
        closed = true
    });

    setTimeout(function(){
        if (!closed){
            toast.className = toast.className.replace("show", "");
            toast.style.removeProperty(xAxis)
            toast.style.removeProperty(yAxis)
        }
    }, document.getElementById('duration').value*1000);
  }

