<template>
<p>Reaction time - {{ result }} ms</p>
<p class="rank">{{ rank }}</p>
</template>
<script>
export default{
    name:'Results',
    props:['result'],
    data(){
        return{
            rank:null,
        }
    },
    mounted(){
        if(this.result<250){
            this.rank='Ninja Fingers'
        }else if(this.result<400){
            this.rank='rapid Reflexes'
        }else{
            this.rank='Snall pace...'
        }
    }
}
</script>

<style scoped>
.rank{
    font-size: 1.4em;
    color:  #144116;
    font-weight: bolder;
}
</style>