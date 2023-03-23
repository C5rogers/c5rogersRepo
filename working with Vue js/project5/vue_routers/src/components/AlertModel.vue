<template>
    <div class="backdrop">
        <div class="form"  
    :class="them=='alert' ? 'alert' : ''"
    >
            <form @submit="giveTheResult">
                <div class="alert-cont">
                    <p>{{ message }}</p>
                </div>
                <div class="alert-cont">
                    <input type="submit" name="yes"  value='Yes!'>
                    <input type="submit" name="no" value="No!">
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default{
    name:'Alert',
    props:['message','them','id'],
    
    methods:{
        giveTheResult(e){
            e.preventDefault();
            const SubmitterName=e.submitter.name;
            if(SubmitterName=='yes'){
                const finalResult={
                    status:1,
                    id:this.id
                }
                this.$emit('clear-alert',finalResult)
            }else{
                const finalResult={
                    status:0,
                    id:this.id
                }
                this.$emit('clear-alert',finalResult)
            }

        }
    }
}
</script>

<style scoped>
    .backdrop{
        position:fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0,0,0,.5);
        z-index: 10;
        padding-top: 10em;
        display: flex;
        flex-direction: column;
        place-items: center;
    }
    .form{
        width: 50%;
        background-color: aliceblue;
        padding: 2em 1em;
        border-radius: 3em;
        display: flex;
        justify-content: center;
        place-items: center;
    }
    .form form{
        widows: 100%;
        display: flex;
        flex-direction: column;
        gap: 1em;
    }
    .alert-cont{
        width: 100%;
        display: flex;
        justify-content: center;
        place-items: center;
        gap: 1em;
    }
    .alert-cont input{
        margin-bottom: -1em;
        padding: 10px;
        width:6em;
        border-radius: 4px;
        border: none;
        color: aliceblue;
        font-weight: bold;
        cursor: pointer;
    }
    .alert-cont input:hover{
        box-shadow: 0 2px 10px 1px rgba(0,0,0,.3);
    }
    .alert-cont input[name='yes']{
        background-color: green;
    }
    .alert-cont input[name='no']{
        background-color: crimson;
    }
    .alert{
        background-color: crimson;
    }
    .alert .alert-cont input[name='no']{
        background-color: black;
    }
    .alert .alert-cont p{
        color: aliceblue;
    }
    
</style>