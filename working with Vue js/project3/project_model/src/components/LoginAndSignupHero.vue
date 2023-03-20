<template>
    <div class="hero-container">
        <h1>{{ greeting }}</h1>
        <p>{{ message }}</p>
        <Button @button-clicked="$emit('toogle-form')" :name="buttonName" class="button"/>
    </div>
</template>
<script>
import Button from "./Button.vue"
export default{
    name:'LoginSignupHero',
    props:{
        greeting:String,
        message:String,
        buttonName:String,
    },
    components:{
        Button,
    },
    methods:{
        
    }
}
</script>

<style scoped>
.hero-container{
    width: 100%;
    height: 100%;
    background-image: linear-gradient(45deg,rgb(187, 102, 116),red);
    display: flex;
    flex-direction: column;
    justify-content: center;
    place-items: center;
    gap: 1em;
    padding: 0 1em;
    border-radius: 0 1em 1em 0;
}
h1{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: bolder;
    color: aliceblue;
}
p{
    text-align: center;
    color: aliceblue;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 10;
}
.button{
    width: 10em;
    background-color: transparent;
    border: 1px solid aliceblue;
}
</style>
