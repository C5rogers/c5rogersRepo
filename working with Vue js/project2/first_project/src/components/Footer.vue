<template>
    <footer>
        <p>&copy; 2015 c5rogers task tracker</p>
        <router-link to="/about">About</router-link>
    </footer>
</template>
<script>
export default{
    name:"Footer",
}
</script>

<style scoped>
footer{
    width: 100%;
    margin-top: 3em;
    display: flex;
    justify-content: space-between;
    place-items: center;
    flex-direction: column;
    background-color: rgba(36, 35, 35, 0.8);
    color: gold;
    padding: 10px;
    gap: 3px;
}
a{
    color: aliceblue;
    text-align: center;
    text-decoration: none;
}
 a:hover{
    color: gold;
 }
</style>