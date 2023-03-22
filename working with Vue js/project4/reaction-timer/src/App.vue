<template>
  <Header @menu-clicked="toogleMenu" @button-one-clicked="toggleSignUp" @button-two-clicked="toggleLogIn" />
  <Sidebar class="sidebar"  adminName="natiman">
    <template v-slot:image>
      <img src="./assets/image/2.png" alt="">
    </template>
  </Sidebar>
  <SignUp @disapear-singup="toggleSignUp" v-if="showSignUp" @change-to-login="openLogin" />
  <Login @desapear-login="toggleLogIn" v-if="showLogIn" @change-to-signup="openSingup"/>
  <Footer />
</template>

<script>
import SignUp from './components/SignUp.vue';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';
import Login from './components/Login.vue';
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Sidebar,
    SignUp,
    Login,
  },
  data(){
    return {
      showSignUp:false,
      showLogIn:false,
    }
  },
  methods:{
    toogleMenu(){
      document.querySelector(".side").classList.toggle("openSide")
    },
    toggleSignUp(){
      this.showSignUp=!this.showSignUp
      this.showLogIn=false
    },
    toggleLogIn(){
      this.showLogIn=!this.showLogIn
      this.showSignUp=false
    },
    openLogin(){
      this.showSignUp=false
      this.showLogIn=true
    },
    openSingup(){
      this.showLogIn=false
      this.showSignUp=true
    }
  },
}
</script>

<style>
.admin-image{
  width: 4em;
  height: 4em;
  margin-top: 1em;
  border-radius: 50%;
  display: flex;
  place-items: center;
  border: 1px solid var(--color2);
  overflow: hidden;
  justify-content: center;
}
.admin-image img{
  width: 100%;
  height: 100%;
  cursor: pointer;
}

</style>
