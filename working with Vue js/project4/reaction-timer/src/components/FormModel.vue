<template>
    <div class="backdrop" @click.self="disappear">
        <div class="content">
            <div class="logo">
                <slot name="logo">

                </slot>
            </div>
            <div class="title">
              <h1>{{ title }}</h1>
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
    name:'FormLayout',
    props:['title'],
    methods:{
        disappear(){
            this.$emit('disapear-form')
        }
    }
}
</script>


<style scoped>
.backdrop{
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    padding-top: 3em;
    background-color: rgba(0,0,0,.5);
    display: flex;
    flex-direction: column;
    place-items: center;
    z-index: 11;
}
.content{
    min-width: 400px;
    padding: 1em ;
    display: flex;
    place-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: var(--color1);
    border-radius: 3em;
    border: 1px solid var(--color3);
    box-shadow: 0 0 15px 3px rgba(0,0,0,.4);
}
.logo{
    width: 5em;
    height: 5em;
    display: flex;
    justify-content: center;
    place-items: center;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: .5em;
}
.title{
    width: 100%;
    display: flex;
    place-items: center;
    justify-content: center;
    margin-bottom: .5em;
}
.title h1{
    font-size: 2.4em;
    color: aliceblue;
    font-family: var(--font3);
    font-weight: lighter;
}
</style>