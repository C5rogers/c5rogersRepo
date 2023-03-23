<template>

    <Alert v-if="showAlert" :message="alertMessage" :them="them" @clear-alert="finishDelete" :id="alertFor"/>

    <div class="add-job">
        <button class="add" @click="toggleCreateJobForm"><span v-if="showJobList">&maltese;</span><span v-if="showCreateJobs">&minus;</span></button>
    </div>
    <div class="job-list-container" v-if="showJobList">
        <div class="jobs" v-if="jobs.length">
            <h1>List of Jobs</h1>
            <div v-for="job in jobs" :key="job.id" class="job">
                <router-link :to="{name:'jobsDetail',params:{id:job.id}}">
                    <h2>{{ job.title }}</h2>
                </router-link>
                <button class="delete" @click="ConfrimDilation(job)">&times;</button>
            </div>        
        </div>
        <div class="jobs" v-else>
            <p>opps no result !</p>
        </div>
    </div>
    <div class="create-job" v-if="showCreateJobs">
        <CreateJob @add-jobs="createJobList" />
    </div>

</template>

<script>
import Alert from '@/components/AlertModel.vue'
import CreateJob from './CreateJob.vue'
export default{
    name:'Jobs',
    data(){
        return{
            jobs:[],
            showJobList:true,
            showCreateJobs:false,
            showAlert:false,
            alertMessage:"hellow there!",
            them:'alert',
            alertFor:'',
        }
    },
    mounted(){
            fetch("http://localhost:3000/jobs")
            .then(res=>res.json())
            .then(data=>this.jobs=data)
            .catch((err)=>{
                console.log(err)
            })
            //this is the method to fetch the data in mounted hoock for the data
    },
    methods:{
        async getJobs(){
            const res=await fetch("http://localhost:3000/jobs",{
                method:'GET',
                headers:{
                    'content-type':'application/json'
                }
            })
            const data= await res.json()
            return data
        },
       async createJobList(job){
            const res=await fetch('http://localhost:3000/jobs',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(job),
            })
            const data=await res.json()
            this.jobs=[...this.jobs,data]
        },
        toggleCreateJobForm(){
            this.showJobList=!this.showJobList
            this.showCreateJobs=!this.showCreateJobs
        },
        async deleteJob(id){
            const res=await fetch(`http://localhost:3000/jobs/${id}`,{
                    method:'DELETE'
                })
                res.status==200 ? this.jobs=this.jobs.filter((job)=>job.id!=id) : alert('unable to delete the job!')
        },
        ConfrimDilation(job){
            this.alertMessage="are you shure to delete '"+job.title+"'"
            this.alertFor=job.id
            this.them="alert"
            this.showAlert=true;
        },
        finishDelete(result){
            this.showAlert=false
            if(result.status==1){
                this.deleteJob(result.id)
            }
        }
    },
    components:{
        CreateJob,
        Alert,
    }
}
</script>
<style>
.job{
    height: 3em;
    padding:  0;
    background-color: rgb(233, 230, 230);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    margin: 1em;
    place-items: center;
    cursor: pointer;
}
.job:hover{
    background-color: rgb(194, 189, 189);
}
.job h2{
    color: #2c3e50;
}
.job a{
    text-decoration: none;
}
.add{
    padding: .6em;
    background-color: rgb(233, 225, 225);
    border-radius: 50%;
}
.add:hover{
    background-color: rgb(194, 189, 189);
}
 
.add-job{
    margin-top: 2em;
}
.delete{
    color: crimson;
    font-size: 1em;
    position: absolute;
    right: 2em;
    height: 2em;
    width: 2em;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    place-items: center;
}
.delete:hover{
    background-color: crimson;
    color: aliceblue;
}
</style>