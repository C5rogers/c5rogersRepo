<template>
<AddTask v-show="showAddTask" @add-task="addTask" />
<Tasks @toogle-reminder="toogleReminder" @delete-task="deleteTask" :tasks="tasks" />
</template>
<script>

import Tasks from '../components/tasks.vue' //this will import the task componenet from the component folder
import AddTask from '../components/AddTask.vue' //this will import the add task from from the component method
export default{
    name:'Home',
    props:{
        showAddTask:Boolean,
    },
    components:{
        Tasks,
        AddTask,
    },
    data(){
        return{
      tasks:[],
        }
    },
    methods:{
        async addTask(task){
    const res=await fetch('api/tasks',{
      method:'POST',
      headers:{
        'Content-type':'application/json',
      },
      body:JSON.stringify(task),
    }) //this will make request to the server in method called post and after saving it to the database it will return it to the front end to be seen
     const data= await res.json() //this will return the returned data to json and assing to this and the rust stayed to be seen
      this.tasks=[...this.tasks,data] //this will return the whole available results
    },
    async deleteTask(id){
      if(confirm('Are you sure to delete this?')){
        const res=await fetch(`api/tasks/${id}`,{
          method:'DELETE'
        }) //making delete request to the server 
        res.status===200 ? (this.tasks=this.tasks.filter((task)=>task.id!==id)) : alert('Error deleting the task!') //this will chake the status sended by the srver and filter the results to be seen by the user
        // this.tasks=this.tasks.filter((task)=>task.id!==id)//this is the filtering of every tasks that is not being used by the user any more 
      }
    },
    async toogleReminder(id){
    const taskToBeToogled=await this.fetchTAsk(id)
    const updTask={...taskToBeToogled,reminder:!taskToBeToogled.reminder} //this will update the result 

    const res= await fetch(`api/tasks/${id}`,{
      method:'PUT',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(updTask) //this will update the backend
    })


      const data= await res.json()


      this.tasks=this.tasks.map((task)=>
      task.id===id ? {...task, reminder:data.reminder} : task) //for each tasks we compare the boolean value and reuturn its negation value to the user and update the data to
    },
    async fetchTasks(){
      const res=await fetch('http://localhost:3000/tasks') //this will accept some data from the back end 

      const data=await res.json() //this is the re assignation of the elements using json method
      return data //this will return the data into json format
    },
    async fetchTAsk(id){
      const res=await fetch(`http://localhost:3000/tasks/${id}`) //this is just filtering specific task from the server

      const data=await res.json() //this will return the fetched result into json form

      return data //this is the returning of that specific data to
    }
  },
 async created(){
    this.tasks= await this.fetchTasks() //this is the actual usation or declaration of the data from the json file
    }
}
</script>