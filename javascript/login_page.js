var request;
function sendInfo()
{
  var v =document.vinform.account.value;
  var url="login_page.jsp?val="+v;

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
