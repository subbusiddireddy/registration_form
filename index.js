
let generalSubmit = false;
function validate(isSubmit)
{
   if(isSubmit)
   {
       generalSubmit = true;
   }
   // console.log("hi");
   let firstName = document.getElementById("first-name").value;
   let lastName = document.getElementById("last-name").value;
   let email = document.getElementById("username-code").value;
   let cityName = document.getElementById("city-code").value;
   let zip = document.getElementById("zip-code").value;
   let state = document.getElementById("state").value;
   let checkAns = document.getElementById("t-and-c").checked;

   let error = true;
   
   // console.log(firstName, lastName, userName, cityName, zip, checkAns);
   if(firstName.length >=2 && generalSubmit)
   {
      //console.log("first-name is valid");
      document.getElementById("first-name-valid").style.display='block';
      document.getElementById("first-name-invalid").style.display='none';
   }
   else
   {
    //  console.log("first-name is not valid");
    document.getElementById("first-name-invalid").style.display='block';
      document.getElementById("first-name-valid").style.display='none';
      error=false;
   }
   if(lastName.length >=2 && generalSubmit)
   {
      //console.log("first-name is valid");
      document.getElementById("last-name-valid").style.display='block';
      document.getElementById("last-name-invalid").style.display='none';
   }
   else
   {
    //  console.log("first-name is not valid");
    document.getElementById("last-name-invalid").style.display='block';
      document.getElementById("last-name-valid").style.display='none';
      error=false;
   }
   if(email.includes('@')  && email.includes('.') && email.indexOf('@') > 0 & email.indexOf('.') >1 && email.lastIndexOf('.') < (email.length-2) && generalSubmit)
   {
      document.getElementById("email-valid").style.display='block';
      document.getElementById("email-invalid").style.display='none';
   }
   else{
      document.getElementById("email-valid").style.display='none';
      document.getElementById("email-invalid").style.display='block';
      error=false;
   }
   if(cityName.length >=3 && generalSubmit)
   {
      
     document.getElementById("city-valid").style.display='block';
     document.getElementById("city-invalid").style.display='none';
   }
     
   else
   {
     document.getElementById("city-valid").style.display='none';
     document.getElementById("city-invalid").style.display='block';
     error=false;
   }
   if(zip.length ===6 && generalSubmit)
   {
      document.getElementById("zip-valid").style.display='block';
      document.getElementById("zip-invalid").style.display='none';

   }
   else
   {
      document.getElementById("zip-valid").style.display='none';
      document.getElementById("zip-invalid").style.display='block';
      error=false;
   }   
   if(state != "None")
   {
      document.getElementById("state-valid").style.display='block';
      document.getElementById("state-invalid").style.display='none';

   }
   else
   {
      document.getElementById("state-valid").style.display='none';
      document.getElementById("state-invalid").style.display='block';
   }

   if(error)
   {
      alert("The details are all correct");
   }

}