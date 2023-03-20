<template>
  <h1>Natty Reaction Timer</h1>
  <button @click="start" :disabled="isPlaying">Play</button>
  <Block v-if="isPlaying" :delay="delay" @reaction-time="endGame" />
  <Results :result="score" v-if="showResults" />
</template>

<script>
import Block from './components/Block.vue'
import Results from './components/Results.vue'
export default {
  name: 'App',
  components: {
    Block,
    Results,
  },
  data(){
    return {
      isPlaying:false,
      delay:null,
      score:null,
      showResults:false,
    }
  },
  methods:{
    start(){
      this.delay=2000+Math.random()*5000
      this.isPlaying=true
      this.showResults=false
    },
    endGame(reactionTime){
      this.score=reactionTime
      this.isPlaying=false
      this.showResults=true
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
button{
  padding: .5em .6em;
  color: aliceblue;
  background-color:  #144116;
  border: none;
  width: 5em;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
}
button[desabled]{
  opacity: 10%;
  cursor: not-allowed;
}
</style>
