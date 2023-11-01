function generateTable(){
    var num = Number (document.getElementById("number").value);
    var clear = document.getElementById("clear");
    var multiplicationTable = "";
    for(var i =1; i<11; i++){
        multiplicationTable += + num + "  " + "x" + "  " + i + "  " + "=" +"  " + (num*i) + "  " + "<br/>";
    }
    
    var result = document.getElementById("result").innerHTML = multiplicationTable;
    clear.style.display="block";
    result.style.display="block";
    

}
function clearTheTable(){
    var clear = document.getElementById("clear");
    clear.style.display="none";
    result.style.display="none";
    
}