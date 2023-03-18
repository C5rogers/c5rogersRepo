<template>
  <div class="container">
    <Header @toogle-add-task="toogleAddTask" title="Task Tracker" :showAddTask="showAddTask"/>
   
    <router-view :showAddTask="showAddTask"></router-view> 
    <!-- the above will show the router view if the clicked link is redirected and the defined route is working correctly -->
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue' //this will import the component from the componenet folder
import Footer from './components/Footer.vue' //this will import the footer as a component
export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data(){
    return{
      showAddTask:false
    }
  },
  methods:{
    toogleAddTask(){
      this.showAddTask=!this.showAddTask
    }

  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
body{
  width:100%;
  min-height:100vh;
  display: flex;
  flex-direction: column;
  place-items: center;
  /* padding: 2em 0; */
}

h1{
  font-size: 2em;
  font-weight: lighter;

}
h3{
  font-weight: lighter;
}
 .button{
  padding:8px 7px;
  background-color:rgba(0,0,0,.8);
  outline: none;
  color:aliceblue;
  font-size: 1em;
  cursor:pointer;
  display:flex;
  justify-content:center;
  place-items:center;
  transition:all ease-in-out .15s;
  border: none;
  border-radius: 4px;
 }
 .button:hover{
  box-shadow:0 0 15px 1px rgba(0,0,0,.5);
 }
 #app{
  width:98%;
  margin: 1em 1em;
  display: flex;
  place-items: center;
  justify-content: center;
 }
 .container{
  width: 95%;
  min-height: 15em;
  padding: 1em 1em;
  border:1px solid gray;
 }

</style>
