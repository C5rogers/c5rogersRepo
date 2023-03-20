<template>
    <div class="form-container">
        <div class="form">
            <Title title="Log in" message="or use your account"/>
            <form action="" class="loginForm">
                <div class="form-cont">
                    <input type="email" name="email" placeholder="Email" class="input">
                </div>
                <div class="form-cont">
                    <input type="password" name="password" placeholder="Password" class="input">
                </div>
                <div class="form-cont">
                    <a href="#">Forgot Your Password?</a>
                </div>
                <div class="form-cont">
                    <Button name="LOG IN" class="button"/>
                </div>
            </form>  
        </div>
        
    <LoginSignupHero @toogle-form="$emit('toogle-login')" greeting="Hellow, Friend!" message="Enter your personal details and start journey with us" buttonName="SIGN UP" class="hero"/>
    </div>
</template>

<script>
import Title from "./SignupAndLoginTitle.vue"
import LoginSignupHero from './LoginAndSignupHero.vue'
import Button from './Button.vue';
export default{
    name:'Login',
    components:{
        Button,
        Title,
        LoginSignupHero,
    },
    data(){
        
    }
}
</script>

<style scoped>
#app{
    display: flex;
    place-items: center;
    justify-content: center;
}
.form-container{
    margin: auto;
    margin-top: 4em;
    grid-template-areas: "form hero";
}
.form{
    width: 100%;
    grid-area: form;
}
.hero{
    grid-area: hero;
}
.button{
    background-color:var(--orange);
   width: 10em;
}
</style>