<template>
  <Header @menu-clicked="toogleMenu" />
  <Sidebar class="sidebar"  adminName="natiman">
    <template v-slot:image>
      <img src="./assets/image/2.png" alt="">
    </template>
  </Sidebar>
  <Footer />
</template>

<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Sidebar,
  },
  data(){
    return {
    }
  },
  methods:{
    toogleMenu(){
      document.querySelector(".side").classList.toggle('openSide')
    }
  },
}
</script>

<style>
.admin-image{
  width: 7em;
  height: 7em;
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
