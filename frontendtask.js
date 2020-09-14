var newele = document.getElementById("new");
var togg = document.getElementById("togg");
newele.style.display = "none";

function addCode(){
	togg.classList.toggle("change")
	  if (newele.style.display == "none") {
             newele.style.display = "block";
      } else {
            newele.style.display = "none";      
  }
}

function changeid(){
	if(togg.id=="togg")
	     togg.id="change";
	 else
	 	togg.id="togg";
}

var error = document.getElementById("error");


function check(){
	var ipVal = document.getElementById("ip").value;
	var x = testForEmail();
	 if(x==false)
       {
        error.innerHTML+="<p id='email'>Please insert a valid email</p>"
       }
        

     function testForEmail(){
	
     var atSymbol = ipVal.indexOf("@");
    if(atSymbol < 1)
      return false;

    var dot = ipVal.indexOf(".");
    if(dot <= atSymbol + 2)
       return false;

   
    if (dot === ipVal.length - 1)
       return false;  
} 
}