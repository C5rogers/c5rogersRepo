<template>
    <div class="form-container">
    <LoginSignupHero greeting="Welcome Back!" message="To keepconnected with us pelase login wit your personal info" buttonName="LOG IN" class="hero" @toogle-form="$emit('toogle-singup')" />
        <div class="form">
           <Title title="Create Account"   message="or use email for registration"/>
            <form action="#">
                <div class="form-cont">
                    <input type="text" name="name" placeholder="Name" class="input">
                </div>
                <div class="form-cont">
                    <input type="email" name="email" placeholder="Email" class="input">
                </div>
                <div class="form-cont">
                    <input type="password" name="password" placeholder="Password" class="input">
                </div>
                <div class="form-cont">
                    <Button name="SING UP" class="button" />
                </div>
            </form> 
        </div>
    </div>
</template>

<script>
import Title from "./SignupAndLoginTitle.vue"
import Button from './Button.vue'
import LoginSignupHero from './LoginAndSignupHero.vue'
    export default {
        name:'Signup',
        components:{
            Button,
            Title,
            LoginSignupHero,
        },
        data(){
        
        },
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
    grid-template-areas: "hero form";
    border-radius: 0 1em 1em 0;
}
.form{
    width: 100%;
    grid-area: form;
    margin: auto;
    
}
.input{
    width: 70%;
}
.hero{
    grid-area: hero;
    padding: 0 .5em;
    border-radius: 1em 0 0 1em;
  
}
.button{
    background-color:var(--orange);
   width: 10em;
}
</style>