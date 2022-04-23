function loadajax() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var response=JSON.parse(this.responseText);
        var output="";
        for(var i=0;i<response.length;i++){
            if(response[i].completed==true){
          output+= '<input type="checkbox" class="check" checked name="title" value=" <br>+  response[i].title  ; +" >' + response[i].title + '<br></input>';
            }
            else{
                output+= '<input type="checkbox" class="check"  name="checkbox" value=" <br>+  response[i].title  ; +" >' + response[i].title + '<br></input>';  
            }
            
        }
        
        document.getElementById("demo").innerHTML=output;
        
        
      
        
        
        

      }
          };
    
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    
    xhttp.send();
    
    
  }

  
  

    // Alert for 5 check boxes
    var demo=document.getElementById("demo");
    var promise = new Promise(function(resolve,reject){
       setTimeout(loadAfterTime, 3000);
      
       function loadAfterTime(){
        var demo=document.getElementById("demo");
        
        demo.addEventListener('change', function() {
      if(document.querySelectorAll('input[type="checkbox"]:checked').length==95){
        resolve("Congrats. 5 Tasks have been Successfully Completed");
        
      }
    }
        )
       };
      
      }
        
      ) ; 
    promise.then(
      function(result) { alert(result);},
    );
    
    
   
 

  