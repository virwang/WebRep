// this is login page js
var request;
function sendInfo()
{
  var account =document.vinform.account.value;
  var email = document.vinform.email.value;
  var password1 =document.vinform.password1.value;
  var password2 =document.vinform.password2.value;
  var name =document.vinform.name.value;
  var url="login_page.jsp?val="+account+ "&email="+ "&password1="+ "&password2="+ "&name=";

  // check if password1 == password2?
  var n = password1.locaLCompare(password2);
  if(n !==0)
  {
    alert("PLEASE INPUT THE SAME PASSWORD!")
    return;
  }


  if(window.XMLHttpRequest) {
    request=new XMLHttpRequest();
  }
  else if (window.ActiveXObject) {
    request=new ActiveXObject("Microsoft.XMLHTTP");
  }

  try {
    request.open("GET",url,true);
    request.send();
  } catch (e) {alert("Unale to connect to server");}
}

function getInfo(){
  if(request.readyState==4){
    var val=request.responseText;
    document.getElementById('amit').innerHTML=val;
  }
}
