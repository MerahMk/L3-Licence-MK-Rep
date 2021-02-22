function calculMoyenne() {

var s1 = document.getElementById("s1moy").value;
var s2 = document.getElementById("s2moy").value;
var s3 = document.getElementById("s3moy").value;
var s4 = document.getElementById("s4moy").value;

var a = document.getElementById("ajourne").value;
var d = document.getElementById("dette").value;
var r = document.getElementById("rattrapage").value;

if (+s1>20||+s2>20||+s3>20||+s4>20||+a>3||+d>3||+r>4) {
    alert("Veillez verifier vos entrées");
}

else{
    document.getElementById("moyAnn");

    var x = (+s1 + +s2 + +s3 + +s4) / 4;
    moyAnn.innerHTML = x.toFixed(2);
    
        if (x < 10){
                moyAnn.style.backgroundColor = "red";
            }
            else{
                moyAnn.style.backgroundColor = "green";
            }


    document.getElementById("moyClass");
    var y = x * (1-0.04*(+a + +(d*0.5) + +(r*0.25)));
    moyClass.innerHTML = y.toFixed(2);
    
        if (y < 10){
            moyClass.style.backgroundColor = "red";
        }
        else{
            moyClass.style.backgroundColor = "green";
        }

}

}