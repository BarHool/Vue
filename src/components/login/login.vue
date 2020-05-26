<template>
  <div class="login">
    <input id="login-username" type="text" placeholder="username" >
    <input id="login-password" type="password" placeholder="password">
    <button onclick="check1()">login</button>
    <button>register</button>
  </div>
</template>

<script>
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
</script>

<style>
  #login-username,
  #login-password {
    width: 250px;
    height: 40px;
    display: block;
    margin: 10px;
    border: solid 1px darkslateblue;
    border-radius: 20px;
    outline: none;
    text-align: center;
    font-size: 1.2em;
    box-sizing: border-box;
  }
  button {
    display: inline-block;
    width: 80px;
    height: 40px;
    margin: 10px 20px;
    border: solid 1px deeppink;
    border-radius: 20px;
    background: mediumpurple;
    color: white;
  }
</style>
