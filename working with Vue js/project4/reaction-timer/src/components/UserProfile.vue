<template>
    <div class="image">
        <div class="img" @click="displayMenu">
            <slot name="image">

            </slot>
        </div>
        <div class="dropdown dropdown1">
            <button @click="ButtonOneClicked">{{ ForButton1 }}</button>
            <button @click="ButttonTwoClicked">{{ ForButton2 }}</button>
        </div>
    </div>
</template>

<script>
export default{
    name:'UserMenu',
    props:['ForButton1',"ForButton2"],
    
    methods:{
        displayMenu(){
            document.querySelector(".dropdown1").classList.toggle('block')
        },
        ButtonOneClicked(){
            this.$emit('button-one-clicked')
        },
        ButttonTwoClicked(){
            this.$emit('button-two-clicked')
        }
    }
}
</script>

<style>
.image{
    position: relative;
}
.img{
    width: 3em;
    height: 3em;
    display: flex;
    place-items: center;
    margin: 1em;
    border-radius: 50%;
    overflow:hidden;
    transition: all ease-in-out .33s;
    cursor: pointer;
    
}
.img:hover{
    border:1px solid var(--color2) ;
}
.dropdown{
    width: 6em;
    height: 6em;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    place-items: center;
    top: 4em;
    right: .5em;
    z-index: -100;
    opacity: 0;
    transition: all ease-in-out .33s;
    transform: -50% 0;
}
.dropdown button{
    width: 100%;
    height: 40%;
    border: none;
    font-family: var(--font3);
    color: var(--color1);
    cursor: pointer;
    font-weight: lighter;
    background-color: var(--color2);
    transition: all ease-in-out .22s;
}
.dropdown button:hover{
    background-color: rgb(204, 202, 202);
    color: var(--color3);
}
</style>