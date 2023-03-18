<template>
    <button @click="onClick" :style="{background: color}" class="button">{{ text }}</button>
</template>
<script>
export default{
    name:'Button',
    props:{
        text:String,
        color:String
    },
    methods:{
        onClick(){
            this.$emit('button-clicked')
        }
    }
}
</script>