var k = 0;
var interval;

function play() {

    if (document.getElementById("seconds").value == 0) {
        document.getElementById("seconds").innerHTML = "Enter seconds!"
        clearTimeout(animation);
    }
    document.getElementById("text").style.display = "none";
    var i = document.getElementById("seconds").value;
    interval = setInterval(decrement, 1000);
    function decrement() {
        if (i == 0) {
            document.getElementById("done").style.display = "";
            document.getElementById("seconds").style.display = "none";
            clearInterval(interval);
        }
        i = i - 1;
        document.getElementById("seconds").value = i;
    }

}

function stop() {
    clearInterval(interval);
    document.getElementById("done").innerHTML = "Stopped!"
    document.getElementById("done").style.display = "";
    document.getElementById("seconds").style.display = "none";
}



function lap() {
    k++;
    var tag = document.createElement("p");
    var j = document.getElementById("seconds").value;
    console.log(j);
    var text = document.createTextNode("#" + k + " " + j);
    tag.appendChild(text);
    var element = document.getElementById("new");
    element.appendChild(tag);
}