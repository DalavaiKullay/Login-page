function valid(){
username=document.getElementById("username").value;
password=document.getElementById("password").value;
if(username=="kullay" && password=="root"){
    alert("login successfull")
    return false
}
else{
    alert("login fail")
}
}