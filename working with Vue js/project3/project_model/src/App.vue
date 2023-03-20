<template>
<Login v-show="showLogin" @toogle-login="togleLoginFrom" class="loginform" />
<Signup v-show="showSignup" @toogle-singup="toogleSignUpForm" ref="signupform"/>
<h1>hellow there :)</h1>
<Model theme="sele" v-if="showModel" @close-model="toogleModelShow" >
  <template v-slot:links>
    <a href="#">Sing Up</a>
    <a href="#">More Info</a>
  </template>
  <h2>{{ header }}</h2>
  <p>{{ text }}</p>
</Model>

<FormModel v-show="showFormModel" @toogle-form="toogleFormModel" theme="formThem" >
  
  <template v-slot:title>
    <h1>Log In</h1>
  </template>
  <template v-slot:logo>
      <img src="./assets/locked.png" alt="">
  </template>
  <template v-slot:form>
    <form action="#">
      <div class="form-cont">
        <input type="email" name="email" placeholder="Email">
      </div>
      <div class="form-cont">
        <input type="password" name="password" placeholder="Password">
      </div>
      <div class="form-cont">
        <a href="#">I dont have account!</a>
      </div>
      <div class="form-cont">
        <div class="button">
          <input type="reset" name="reset" value="Reset">
          <input type="submit" name="submit" value="Log In" class="action-button">
        </div>
      </div>
      <div class="form-cont">
        <div class="forgot-password">
          <a href="#">Forgot Password?</a>
        </div>
      </div>
    </form>
  </template>
</FormModel>
<FormModel v-show="showSignupForm" @toogle-form="toogleSingupForm" theme="formThem">
  <template v-slot:title>
    <h1>Sign Up</h1>
  </template>
  <template v-slot:logo>
    <img src="./assets/adduser.png" alt="">
  </template>

  <template v-slot:form>
    <form action="#">
      <div class="form-cont">
        <input type="text" name="name" placeholder="User Name">
      </div>
      <div class="form-cont">
        <input type="email" name="email" placeholder="Email">
      </div>
      <div class="form-cont">
        <input type="number" name="phoneNumber" placeholder="Phone Number">
      </div>
      <div class="form-cont">
        <input type="password" name="password" placeholder="Password">
      </div>
      <div class="form-cont">
        <input type="password" name="password_confirmation" placeholder="Confirm Password">
      </div>
      <div class="form-cont">
        <a href="#">I have account!</a>
      </div>
      <div class="form-cont">
        <div class="button">
          <input type="reset" name="reset" value="Reset">
          <input type="submit" name="signup" value="Sign Up">
        </div>
      </div>
    </form>
  </template>
</FormModel>

<button @click="toogleModelShow">open model</button>
<button @click="toogleFormModel">Show Form</button>
<button @click="toogleSignUpForm2">Show Signup Form</button>
<Button class="button2">
  <template v-slot:image>
    <img src="./assets/menu.png" alt="">
  </template>
</Button>
</template>

<script>
import Model from './components/Modele.vue'
import FormModel from './components/FormModel.vue'
import Login from './components/Login.vue'
import Signup from "./components/Signup.vue"
import Button from './components/Button.vue'
export default { //this is the defnetion of the root component that will call the whole component to be used
  name: 'App',
  components:{
    Login,
    Signup,
    Model,
    FormModel,
    Button,
  },
  data(){
    return{
      showLogin:false,//one of them must be true
      showSignup:false,   
      header:'sing up for more details',
      text:'this is the text you want to see when something happen',
      showModel:false,
      showFormModel:false,
      showSignupForm:false,
    }
  },
  methods:{
    togleLoginFrom(){
      this.showLogin=!this.showLogin
      this.showSignup=!this.showSignup
    },
    toogleSignUpForm(){
      this.showLogin=!this.showLogin
      this.showSignup=!this.showSignup
    },
    toogleModelShow(){
      this.showModel=!this.showModel
    },
    toogleFormModel(){
      this.showFormModel=!this.showFormModel
    },
    toogleSignUpForm2(){
      this.showSignupForm=!this.showSignupForm
    },
    toogleSingupForm(){
      this.showSignupForm=!this.showSignupForm
    }
  }
  
  
}
</script>

<style>

.actions{
    text-align: center;
    margin: 30px 0 10px 0;
    display: flex;
    gap: .6em;
}
.actions a{
  border: 1px solid;
    padding: .5em .6em;
    text-decoration: none;
}
.sele  .actions a{
  color: aliceblue;
  border: 1px solid aliceblue;
}
.form form{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    place-items: center;
}
.form form .form-cont{
  width: 90%;
  display: flex;
  justify-content: center;
  place-items: center;
}
.form form .form-cont input{
  padding: .7em .5em;
  width: 80%;
  background-color: rgb(219, 216, 216);
  border: none;
  outline: .1px solid rgb(228, 185, 104);
  color: rgb(104, 90, 13);
  font-size: 1em;
  letter-spacing: 1px;
}
.form form .form-cont .button{
  width: 80%;
  display:flex;
  justify-content: space-evenly;
  gap: 10px;
}
.form form .form-cont .button input{
  padding: .8em .5em;
  width: 50%;
  border-radius: 1.5em;
  border: none;
  background-color: rgba(0,0,0,.8);
  color:aliceblue;
  font-weight: bolder;
  font-size: .8em;
  letter-spacing: 0;
  cursor: pointer;
}
.forgot-password{
  width: 100%;
  text-align: right;
}
.forgot-password a{
  color:gold;
}
.title h1{
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
margin-bottom: 10px;
}
.formThem .form form .form-cont a{
    color: aliceblue;
}
.logo img{
  width: 5em;
  filter: invert(100%);
}
input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{
  -webkit-appearance: none;
  margin: 0;
}
.button2 img{
  width: 3em;
}


</style>
