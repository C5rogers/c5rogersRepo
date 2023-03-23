<template>
    <h1>creating jobs</h1>
    <div class="form-container">
        <form @submit.prevent="handleSubmit">
            <div class="form-cont">
                <input type="text" name="title" placeholder="Job Title" v-model="title" class="input">
                <p v-if="titleError" class="error">{{ titleError }}</p>
            </div>
            <div class="form-cont">
                <input type="text" name="description" placeholder="Description" v-model="description" class="input">
                <p v-if="descriptionError" class="error">{{ descriptionError }}</p>
            </div>
            <div class="form-cont">
                <input type="reset" name="reset" value="Reset" class="reset">
            </div>
            <div class="form-cont">
                <button>Create</button>
            </div>
        </form>
    </div>
</template>

<script>
export default{
    name:'CreateJob',
    data(){
        return {
            title:'',
            description:'',
            titleError:'',
            descriptionError:'',
        }
    },
    methods:{
        handleSubmit(){
            if(this.title.length==0){
                this.titleError="please fill the title first"
                this.descriptionError=''
            }
            else if(this.description.length==0){
                this.descriptionError="please fill the description ser!"
                this.titleError=''
            }
            else{
                const newJob={
                    title:this.title,
                    description:this.description
                }
                this.$emit("add-jobs",newJob)
                this.clearVariables()
                console.log(newJob)
            }
        },
        clearVariables(){
            this.title=''
            this.description=''
            this.titleError=''
            this.descriptionError=''
        },
    }
}

</script>

<style>
.form-container{
    width: 50%;
    margin: auto;
    padding: 2em 0;
    display: flex;
    place-items: center;
    justify-content: center;
}
form{
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    place-items: center;
    gap: 1em;
}
.form-cont{
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    place-items: center;
    position: relative;
}
.form-cont .input{
    width: 100%;
    padding: .5em;
    border:none;
    background-color: rgba(212, 212, 212, 0.801);
    font-size: 1em;
    outline: 1px solid transparent;
    color: rgb(87, 85, 85);
    letter-spacing: 1px;
}
.reset,.form-cont button{
    width: 22.5em;
    padding: .7em 0;
    border: none;
    outline: 1px solid transparent;
    cursor:pointer;
    background-color: rgb(145, 178, 211);
    color: rgb(39, 41, 43);
    font-weight: bolder;
}
.reset:hover,.form-cont button:hover{
    box-shadow: 0 0 4px .1px rgba(0,0,0,.5);
}
.form-cont button{
    background-color: orange;
}
.error{
    width: 100%;
    text-align: left;
    font-size: .8em;
    position: absolute;
    bottom: -2em;
    left: 0;
    right: 0;
    color:crimson;
}
</style>