<template>
    <header>
        <div class="left-most">
            <ButtonImage @button-clicked="$emit('menu-clicked')">
                <template v-slot:image>
                <img src="../assets/image/menu.png" alt="">
                </template>
            </ButtonImage>
            <Logo>
                <template v-slot:image>
                <img src="../assets/image/1.png" alt="">
                </template>
            </Logo>
        </div>
        <div class="right-most">
            <UserProfile ForButton1="Sign Up" ForButton2="Log In" @button-one-clicked="$emit('button-one-clicked')" @button-two-clicked="$emit('button-two-clicked')">
                <template v-slot:image>
                    <img src="../assets/image/28.jpg" class="userImage" alt="">
                </template>
            </UserProfile>
        </div>
    </header>
</template>
<script>
import ButtonImage from './ButtonImage.vue';
import Logo from './Logo.vue';
import UserProfile from './UserProfile.vue';
export default{
    name:'Header',
    data(){
    },
    components:{
        Logo,
        ButtonImage,
        UserProfile,
    },
    data(){
        return {
        }
    }
}
</script>

<style scoped>
header{
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 6em;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 1px 15px 1px rgba(0,0,0,.4);
}
header .left-most{
    display: flex;
    gap: 1em;
    place-items: center;
    justify-content: center;
}
.userImage{
    margin: auto;
    width: 100%;
    height: 100%;
}
</style>