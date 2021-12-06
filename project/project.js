 let stateselect=document.getElementById("stateselect")
 let statesel=document.getElementById("stateselect")
let personinfo=document.querySelectorAll(".personinfo")
let inp=document.querySelector("#inp");
let tp=document.querySelectorAll(".tp")
 let state1=document.getElementById("state1");
let stateselect1=document.getElementById("stateselect1")
let first=document.getElementById("first");
let filterstate=document.querySelectorAll(".filterstate");
let pid=document.querySelector("#pid")
// stateselect.addEventListener("change",validateno);

function showOptions(s){
   stateselect1.removeAttribute('disabled');
   console.log(s[s.selectedIndex].value); // get value
     var a= s[s.selectedIndex].id;
     console.log(a); 
     let url="info.json";
   fetch(url).then((response)=>{
      return response.json();
   }).then((data)=>{
     console.log(data);
 let array=data.map(val=>{
 return `${val.first} `;
       });
  data .forEach(function(f){
   console.log(f.id);
      if(f.id===a){
         const newOption = document.createElement('option');
const optionText = document.createTextNode(f.city);
newOption.appendChild(optionText);
stateselect1.appendChild(newOption);


      }})
   })
   stateselect1.innerHTML="";
   }



function myfun(){
   window.location.href="http://127.0.0.1:5501/tp.html"
}



function validateno(){
   
//       output = stateselect.value;
//  console.log(output);

   let url="info1.json";
   fetch(url).then((response)=>{
      return response.json();
   }).then((data)=>{
     console.log(data);
     for(let i=0;i<data.length;i++){
         if(data[i].code===inp.value){
           pid.innerHTML="<span style='color:#00FF00'>You Entered Correct RTO Code</span>"; 
            break;
         }
         else{
           pid.innerHTML="<span style='color:red';>You Entered Invalid RTO Code</span>";
            
         }
         
       }  
    }) 
}
function displayblock(){
   document.querySelector(".d").style.display="block";
   
}
(function() {
   var input = document.getElementById('mobval');
   var pattern = /^[7-9][0-9]{0,8}$/;
   var value = input.value;
   !pattern.test(value) && (input.value = value = '');
   input.addEventListener('input', function() {
       var currentValue = this.value;
       if(currentValue && !pattern.test(currentValue)) this.value = value;
       else value = currentValue;
   });
})();
function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    
let emailval=document.getElementById("emailval");
validateEmail('anystring@anystring.anystring');








// let kup=document.querySelector("#kup");
// kup.addEventListener("click",person);
// function person(){
//    if(tp.value!==""){
//       personinfo.style.display="block"
//    }
   
// }




     
 // data.forEach(function (h){
   //    if(h.code===inp.value){
   //       alert("vbnm")
   //       // document.querySelector("#pid").innerHTML="You are entered correct RTO code"
   //    }else{
   //       alert("eeeeee")
   //       // document.querySelector("#pid").innerHTML="You are entered  Invalid RTO code"
   //    }
   // })