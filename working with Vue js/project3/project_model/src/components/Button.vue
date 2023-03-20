<template>
    <button @click="emitClickEvent">{{ name }}
        <slot name="image">

        </slot>
    </button>
</template>
<script>
    export default{
        name:'Button',
        props:['name','url'],
        methods:{
            emitClickEvent(){
                this.$emit('button-clicked')
            }
        }
    }
</script>
<style scoped>
button{
    padding: .8em 2em;
    border: none;
    background-color: rgba(0,0,0,.9);
    border-radius: 1.5em;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: bolder;
    color: aliceblue;
    cursor: pointer;
}

.button2{
    width: 4em;
    height: 4em;
  padding: 0;
  border-radius: 0;
  background-color: transparent;
  border-radius: 50%;
  transition: all ease-in-out .22s;
}
.button2:hover{
    background-color: rgb(223, 216, 217);
}
</style>