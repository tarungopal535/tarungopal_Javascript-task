
function Validation()
{
	var letters = /^[A-Za-z ]+$/;
	var name= document.["form"]["name"].value;
	var jntuno = document.["form"]["JNTUNo"].value;
	var phoneno = document.["form"]["phone"].value;
	var emailid  = document.["form"]["email"].value;
// name validation
if(name==""||name==null){
	alert("Name can't be blank");
}
if(name.match(letters)==null){
  	alert("Special Characters are not Allowed in Name ");
  	return false;
  }

// jntuNo validation

if(jntuno==""||jntuno==null){
	alert("JNTUNo can't be Blank");
}
if((jntuno.length > 10)||(jntuno.length < 10)){
	alert("Invalid JUNTUNo, should contain exactly 10 Characters.");
	return false;
}
var x = /^17501A0/
var y = /[A-Z0-9]$/
if(!((x.test(jntuno))&&(y.test(jntuno.substr(jntuno.length-3)))))
{
	alert("Invalid JNTUNo !!!");
	return false;
}

// phone number validation
if(phoneno=="")
{
alert("please Enter the Contact Number");
document.form.phone.focus();
return false;
}

if(isNaN(phoneno))
{
alert("Enter the valid Mobile Number(Like : 9566137117)");
document.form.phone.focus();
return false;
}

if((phoneno.length < 1) || (phoneno.length > 10)||(phoneno.length<10))
{
alert(" Your Mobile Number must be 10 Digits Long");
document.form.phone.select();
return false;
}

//email Id validation
if(!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailid))){
	alert("Please enter a valid e-mail address \n");  
  return false;
}

}
