<template> 
<div class="login">
  <div class="flex justify-content-center pt-3">
  <img  src="../assets/logo.png" width="100" />
</div>  
  <input type="text" placeholder="اسم المستخدم" v-model="username" id="username">  
  <input type="password" placeholder="كلمه المرور" v-model="password" id="password">  
 
  <input @click.prevent="loginFunc" type="submit" value="تسجيل الدخول">
</div>
<div class="shadow"></div>


</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore} from 'vuex';
const router = useRouter();


const store = useStore();

const username = ref(null);
const password = ref(null);

const loginFunc = ()=>{
    store.dispatch("_login",{
      userName:username.value,
      Password:password.value
    }).then((res)=>{
      if(res.data.StatusCode==200){
          alert("Succesfully Login");
      }
      else{
          alert("error Login");
      }

    }).catch(err=>{
      alert(err);
    })
    router.push('./MainPage');
}

</script>

<style scoped>
html { height: 100% }
::-moz-selection { background: #fe57a1; color: #fff; text-shadow: none; }
::selection { background: #fe57a1; color: #fff; text-shadow: none; }
.login {
  background: #eceeee;
  border: 1px solid #42464b;
  border-radius: 6px;
  height: 360px;
  margin: 20px auto 0;
  width: 298px;
}

input[type="password"], input[type="text"]{
  background: url('http://i.minus.com/ibhqW9Buanohx2.png') center left no-repeat, linear-gradient(top, #d6d7d7, #dee0e0);
  border: 1px solid #a1a3a3;
  border-radius: 4px;
  box-shadow: 0 1px #fff;
  box-sizing: border-box;
  color: #696969;
  height: 39px;
  margin: 31px 29px 0 0;
  padding-right: 37px;
  transition: box-shadow 0.3s;
  width: 240px;
}
input[type="password"]:focus, input[type="text"]:focus {
  box-shadow: 0 0 4px 1px rgba(55, 166, 155, 0.3);
  outline: 0;
}
.show-password {
  display: block;
  height: 16px;
  margin: 28px 0 0 26px;
  width: 87px;
}

input[type="submit"] {
  width:240px;
  height:35px;
  display:block;
  font-family:Arial, "Helvetica", sans-serif;
  font-size:16px;
  font-weight:bold;
  color:#fff;
  text-decoration:none;
  text-transform:uppercase;
  text-align:center;
  text-shadow:1px 1px 0px #37a69b;
  padding-top:6px;
  margin: 31px 29px 0 0;
  position:relative;
  cursor:pointer;
  border: none;  
  background-color: #37a69b;
  background-image: linear-gradient(top,#3db0a6,#3111);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius:5px;
  box-shadow: inset 0px 1px 0px #2ab7ec, 0px 5px 0px 0px #497a78, 0px 10px 5px #999;
}

.shadow {
  background: #000;
  border-radius: 12px 12px 4px 4px;
  box-shadow: 0 0 20px 10px #000;
  height: 12px;
  margin: 30px auto;
  opacity: 0.2;
  width: 270px;
}


input[type="submit"]:active {
  top:3px;
  box-shadow: inset 0px 1px 0px #2ab7ec, 0px 2px 0px 0px #31524d, 0px 5px 3px #999;
}
</style>