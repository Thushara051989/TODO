function loadajax() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var response=JSON.parse(this.responseText);
        var output="";
        for(var i=0;i<response.length;i++){
            if(response[i].completed==true){
          output+= '<input type="checkbox" id="check" checked name="title" value=" <br>+  response[i].title  ; +" >' + response[i].title + '<br></input>';
            }
            else{
                output+= '<input type="checkbox" id="check"  name="checkbox" value=" <br>+  response[i].title  ; +" >' + response[i].title + '<br></input>';  
            }
        }
        document.getElementById("demo").innerHTML=output;

      }
    };
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    
    xhttp.send();
    
    
  }
  

  // var promise=new Promise(function(resolve,reject){
  //   window.onload=function(){
  //     setTimeout(loadAfterTime,300);
  //   };
  //   function loadAfterTime(){
  //     var inputElems=document.querySelectorAll("#checkbox");
  //     // console.log(elem);
  //     if(inputElems)
  //       {
  //          console.log(inputElems);

  //       }
  //       else{
  //           console.log("empty");
  //       }     
  //       var count = 0;
  //           inputElems.forEach(function(checkbox) {
  //               checkbox.addEventListener('click', function() {
  //                   if (this.checked) {
  //                       console.log("Checkbox is checked..");
  //                       count++;
  //                   } else {
  //                       count--;
  //                       console.log("Checkbox is not checked..");
  //                   }
  //                   console.log(count);
  //                   if(count==5)
  //                   {
  //                       resolve("Congrats. 5 Tasks have been Successfully Completed");
  //                   }


  //               });
  //           });

  //           promise.then(
  //               function(result) { alert(result);},
  //             );




    
  //   }
  // })
//   function validate(){
//     var checked=0;
//     var chks=document.getElementsByTagName("input");
//      console.log(chks.length);
//     for (var k = 0; k < 200; k++) {
//         if (chks[k].checked) {
//             checked++;
//         }
//     }
//     console.log(checked);
//     if (checked==5){
//         alert(checked + " CheckBoxe(s) are checked.");
//     }
// }
// validate();
// //     new Promise(function(resolve,reject){
// //         if (checked ==5){
// //             resolve(" 5 checkboxes are selected ");
//         }
//     })

// Promise
// .then(function(s){
//    alert(s);
// })