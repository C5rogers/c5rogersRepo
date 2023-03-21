<template>
    <button @click="emitClicked">
        <slot name="image"></slot>
    </button>
</template>
<script>

    export default{
        name:'ButtonWithEmage',
        methods:{
            emitClicked(){
                this.$emit('button-clicked')
            },
        },
    }
</script>

<style scoped>
button{
    margin-left: 1em;
    padding: 4px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    place-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all ease-in-out .22s;
}
button:hover{
    background-color: var(--color2);
    translate: 0 -5%;
    border-radius: 0 0 15px 3px rgba(0,0,0,.3);
}
</style>