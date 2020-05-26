function check1() {
  let str = document.getElementById("login-username").value;
  console.log(str.toString());
  if (str.toString().length > 0){
    alert("success");
  }
  else {
    alert("fail");
  }
}
