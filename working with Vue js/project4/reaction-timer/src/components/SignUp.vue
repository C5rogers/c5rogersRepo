<template>
    <FormModel title="Sign Up" @disapear-form="$emit('disapear-singup')">
        <template v-slot:logo>
            <img src="../assets/image/1.png" alt="">
        </template>
        <template v-slot:form>
            <form enctype="multipart/form-data" @submit.prevent="submitHandler">
                <div class="form-cont">
                    <input type="text" name="name" placeholder="User Name" v-model="name" class="input">
                </div>
                <div class="form-cont">
                    <input type="email" name="email" placeholder="Email" v-model="email" class="input">
                </div>
                <div class="form-cont">
                    <input type="number" name="phoneNumber" placeholder="Phone Number" v-model="phoneNumber" class="input">
                </div>
                <div class="form-cont">
                    <input type="password" name="password" placeholder="Password" v-model="password" class="input">
                </div>
                <div class="form-cont">
                    <input type="password" name="password_confirmation" v-model="confirmPassword" placeholder="Confirm Password" class="input">
                </div>
                <div class="form-cont">
                    <i><img src="../assets/image/image.png" alt=""></i>
                    <input type="file" v-on:change="image" name="profile" class="input">
                </div>
                <div class="form-cont">
                    <div class="terms">
                        <input type="checkbox" name="terms" class="checkbox" v-model="terms"> 
                        <label>Accept Terms And Policys!</label>
                    </div>
                </div>
                <div class="form-cont">
                    <div class="button">
                        <button>Sign Up</button>
                    </div>
                </div>
            </form>
            <div class="redirect" @click="changeTheForm"><span>I Have Account!</span></div>
        </template>
    </FormModel>
</template>

<script>
import FormModel from './FormModel.vue';
export default{
    name:'SignUpForm',
    components:{
        FormModel,
    },
    data(){
        return{
            name:'',
            email:'',
            phoneNumber:'',
            password:'',
            confirmPassword:'',
            image:'',
            terms:false,
        }
    },
    methods:{
        submitHandler(){
            console.log(this.image)
        },
        changeTheForm(){
            this.$emit("change-to-login")
        }
    }
}
</script>

<style>

</style>