var allproduct = document.getElementsByClassName("ct1");
var featured = document.getElementsByClassName("ct2");
p1 = document.getElementById("p1")

p2 = document.getElementById("p2")


function colorchanger() {

    if (event.target.className == 'ct1') {

        allproduct[0].style.color = "red";
        featured[0].style.color = "black";
        p1.style.display = 'flex'
    } else {

        allproduct[0].style.color = "black";
        featured[0].style.color = "red";
        p1.style.display = 'none';


    }

}


var ind = document.getElementById("indicator");
ind.style.color="red";


