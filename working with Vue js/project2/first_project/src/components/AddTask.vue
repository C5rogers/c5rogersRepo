<template>
    <form @submit="onSubmit" action="#" class="add-form">
        <div class="form-control">
            <label for="">Task</label>
            <input type="text" v-model="text" name="text" placeholder="Add Task">
        </div>
        <div class="form-control">
            <label for="">Day & Time</label>
            <input type="text" v-model="day" name="day" placeholder="Add Day & Time">
        </div>
        <div class="form-control checkbox">
            <label for="">Set Reminder</label>
            <input type="checkbox" v-model="reminder" name="reminder">
        </div>
        <input type="submit" value="Save Task" class="button btn-block">
    </form>
</template>

<script>
    export default{
        name:'AddTask',
        data(){
            return {
                text:'',
                day:'',
                reminder:false
            }
        },
        methods:{
            onSubmit(e){
            e.preventDefault();

            if(!this.text){
                alert('please add a task')
                return
            }

            const newTask={ //this is constracting new task to be emited to the root component where the data is stored
                // id:Math.floor(Math.random()*100000),
                text:this.text,
                day:this.day,
                reminder:this.reminder
            }

            this.$emit('add-task',newTask)

            this.text=''
            this.day=''
            this.reminder=false
            }
        }
    }
</script>
<style scoped>
    .add-form{
        width: 70%;
        height: fit-content;
        padding: 1em;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 1em;
        margin: auto;
        border: 1px solid rgba(128, 128, 128, 0.247);
        background-color: aliceblue;
        margin-bottom: 15px;
        box-shadow: 0 0 15px 1px rgba(0,0,0,.2);
    }
    .form-control{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: .2em;
    }
    .form-control label{
        font-size: 1em;
        font-weight: lighter;
        color: rgb(68, 67, 67);
    }
    .form-control input{
        padding: .5em .4em;
        letter-spacing:1px;
        outline: transparent;
        font-size: 1em;
    }
    input[name='text']{
        text-transform: capitalize;
    }
    .checkbox{
        flex-direction: row;
        justify-content: space-evenly;
    }
</style>