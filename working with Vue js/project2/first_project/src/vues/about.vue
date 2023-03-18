<template>
    <div class="about-container">
        <h1>Version 2.3</h1>
    <router-link to="/" 
    class="link">Go Back</router-link>
    </div>
</template>
<script>
export default{
    name:"About",
}
</script>

<style>
.about-container{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1em;
    place-items: center;
}
.link{
    color: rgb(90, 78, 8);
    text-decoration: none;
}
.link:hover{
    color: black;
}
</style>
