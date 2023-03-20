<template>
    <div class="backdrop" @click.self="sendEvent">
        <div class="modul" :class="{sele:theme==='sele'}">
            <slot>

            </slot>
            <div class="actions">
                <slot name="links"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    props:['theme'],
    methods:{
        sendEvent(){
            this.$emit('close-model')
        }
    },
}

</script>

<style scoped>

.backdrop{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;  
    right: 0;
    background-color: rgba(0,0,0,.5);
    width: 100%;
    height: 100%;
}
.modul{
    width: 400px ;
    padding: 20px;
    margin: 100px auto;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 10px;
    place-items: center;
}
.sele{
    background-color: crimson;
    color: aliceblue;
}
</style>