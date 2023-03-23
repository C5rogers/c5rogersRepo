<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="{name:'about'}">About</router-link> |
    <router-link :to="{name:'jobs'}">Jobs</router-link>
  </nav>

  <button @click="redirect">Redirect</button>
  <button @click="back">Back</button>
  <button @click="forward">Forward</button>
  <router-view/>
</template>
<script>
export default{
  methods:{
    redirect(){
      this.$router.push({name:'home'})
    },
    back(){
      this.$router.go(-1)
    },
    forward(){
      this.$router.go(1)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 10px;
  border-radius: 4px;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: aliceblue;
  background-color: crimson;
}
button{
  margin: 5px;
  padding: 4px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
</style>
