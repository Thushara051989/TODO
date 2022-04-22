var promise=new Promise(function(resolve,reject){
    window.onload=function(){
      setTimeout(loadAfterTime,300);
    };
    function loadAfterTime(){
      var inputElems=document.querySelectorAll("#checkbox");
      // console.log(elem);
      if(inputElems)
        {
           console.log(inputElems);

        }
        else{
            console.log("empty");
        }     
        var count = 0;
            inputElems.forEach(function(checkbox) {
                checkbox.addEventListener('change', function() {
                    if (this.checked) {
                        console.log("Checkbox is checked..");
                        count++;
                    } else {
                        count--;
                        console.log("Checkbox is not checked..");
                    }
                    console.log(count);
                    if(count==5)
                    {
                        resolve("Congrats. 5 Tasks have been Successfully Completed");
                    }


                });
            });

            promise.then(
                function(result) { alert(result);},
              );




    
    }
  })
   
}
};