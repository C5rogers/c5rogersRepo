<template>
    <div @dblclick="$emit('toogle-reminder',task.id)" :class="[task.reminder==true ? 'reminder' : '','task']">
        <h3>{{ task.text }} 
            <i @click="$emit('delete-task',task.id)" class="fas fa-times"></i>
        </h3>
        <p>{{ task.day }}</p>
    </div>
</template>
<script>
export default{
    name:'Task',
    props:{
        task:Object,
    }
    
    // methods:{
    //     onDelete(id){
    //         this.$emit('delete-task',id)
    //     }
    // }
}
</script>
<style scoped>

    .fas{
        color: red;
    }
    .task{
        margin: 7px 4px;
        width: 100%;
        background-color: aliceblue;
        font-weight: lighter;
        color: rgb(105, 103, 103);
        padding: .4em;
        display: flex;
        flex-direction: column;
        gap: .4em;
        cursor: pointer;
        box-shadow: 0 0 15px .5px rgba(0,0,0,.1);
        border: 1px solid rgba(160, 158, 158, 0.267);
    }
    .task h3{
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-weight: bold;
        font-size: 1em;
    }
    .task p{
        font-size: .9em;
        color: rgb(141, 101, 49);
    }
    .reminder{
        border-left: 4px solid green;
    }
</style>