<template>
<FormModel title="Log In" @disapear-form="$emit('desapear-login')">
    <template v-slot:logo>
       <img src="../assets/image/locked.png" alt="" class="loginLogo">
    </template>
    <template v-slot:form>
        <form @submit.prevent="handleLogin">
            <div class="form-cont">
                <input type="email" name="email" placeholder="Email" class="input" v-model="email">
            </div>
            <div class="form-cont">
                <input type="password" name="password" placeholder="Password" class="input" v-model="password">
            </div>
            <div class="form-cont">
                <div class="button">
                    <button>Log In</button>
                </div>
            </div>
        </form>
        <div class="redirect" @click="changeForm"><span>I Don't Have Account!</span></div>
    </template>
</FormModel>

</template>

<script>
import FormModel from './FormModel.vue';
export default{
    name:'Login',
    components:{
        FormModel,
    },
    methods:{
        changeForm(){
            this.$emit('change-to-signup')
        },
        handleLogin(){
            console.log(this.email)
            console.log(this.password)

            //this is where the login request should done
        }
    },
    data(){
        return {
            email:'',
            password:''
        }
    }
}

</script>
<style scoped>
.loginLogo{
    filter: invert(100%);
}
</style>