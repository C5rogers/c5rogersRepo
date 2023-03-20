<template>
    <div class="block" v-if="showBlock" @click="stopTimer">
        click me
    </div>
</template>

<script>
export default{
    props:['delay'],
    data(){
        return{
            showBlock:false,
            timer:null,
            reactionTime:0,
        }
    },
    mounted(){
        setTimeout(() => {
            this.showBlock=true
            this.startTimer()
        }, this.delay);
    },
    methods:{
        startTimer(){
            this.timer=setInterval(()=>{
                this.reactionTime+=10 
            },10)
        },
        stopTimer(){
            clearInterval(this.timer)
            this.$emit('reaction-time',this.reactionTime)
        }
    }
}
</script>

<style>
.block{
    width: 400px;
    border-radius: 20px;
    color: aliceblue;
    text-align: center;
    padding: 100px 0;
    margin: 40px auto;
    background: #144116;
}
</style>