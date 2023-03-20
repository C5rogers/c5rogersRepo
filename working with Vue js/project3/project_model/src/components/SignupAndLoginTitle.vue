<template>
    <div class="cont">
        <h2>{{ title }}</h2>
    <ul>
        <li><a href="#"><img src="../assets/facebook.png" alt=""></a></li>
        <li><a href="#"><img src="../assets/google.png" alt=""></a></li>
        <li><a href="#"><img src="../assets/linkidin.png" alt=""></a></li>
    </ul>
    <p>{{ message }}</p>
    </div>
</template>
<script>
export default{
    name:'Title',
    props:{
        title:String,
        message:String,
    }
}
</script>

<style scoped>
.cont{
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    place-items: center;
    justify-content: center;
    gap: 1em;
}
h2{
    margin: 0;
    margin-top: 1em;
    font-weight: bolder;
    font-size: 2em;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    letter-spacing: -1px;
    color: rgb(27, 27, 27);
}
ul{
    width: 100%;
    display: flex;
    place-items: center;
    justify-content: center;
    gap: 1em;
    list-style-type: none;
    padding: 0;
}
ul li{
    width: 3em;
    height: 3em;
    display: flex;
    justify-content: center;
    place-items: center;
    border: 1px solid rgba(128, 128, 128, 0.418);
    border-radius: 50%;
}
ul li img{
    width: 1.4em;
}
p{ 
    margin: auto;
    width: 100%;
    color: var(--gold);
    text-align: center;
}
</style>
