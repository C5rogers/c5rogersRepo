<template>
 <div class="backdrop" @click.self="$emit('toogle-form')">
    <div class="model" :class="{
        formThem:theme==='formThem'
    }">
    <div class="logo">
        <slot name="logo">

        </slot>
    </div>
    <div class="title">
        <slot name="title">

        </slot>
    </div>
    <div class="form">
        <slot name="form">
            
        </slot>
    </div>
    </div>
 </div>
</template>
<script>
export default{
    name:'FormModel',
    props:['theme']
}
</script>

<style scoped>
.backdrop{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    padding: 5em;
    display: flex;
    flex-direction: column;
    place-items: center;
    background-color: rgba(0,0,0,.5);
}
.model{
    padding: 2em 1em;
    border-radius: 1em;
    background-color: aliceblue;
    min-width: 400px;
    display: flex;
    flex-direction: column;
    place-items: center;
}
.form{
    width: 100%;
    display: flex;
    justify-content: center;
    place-items: center;
}
.formThem{
    background-image: linear-gradient(45deg,orange,red);
}
.formThem .title{
    color: aliceblue;
}
</style>