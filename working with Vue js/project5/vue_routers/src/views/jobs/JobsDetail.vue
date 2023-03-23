<template>
    <h1>this is the detail for job {{ job.id }} </h1>
    <h3>{{ job.title }}</h3>
    <p>{{ job.description }}</p>
</template>

<script>
export default{
    name:'jobsDetail',
    props:['id'],
    data(){
        return{
            job:[],
        }
    },
    mounted(){
        this.fetchJob(this.id)
    },
    methods:{
        async fetchJob(id){
            const res= await fetch(`http://localhost:3000/jobs/${id}`)
            const data=await  res.json()
            this.job=data
        }
    }
}

</script>

<style>

</style>