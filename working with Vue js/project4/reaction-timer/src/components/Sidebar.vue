<template>
    <div class="side">
        <div class="admin-profile">
            <div class="admin-image">
                <slot name="image">

                </slot>
            </div>
            <div class="admin-name">
                {{ adminName }}
            </div>
        </div>
        <div class="lists">
            <ul>
                <li>
                    <a href="#">
                        <img src="../assets/image/dashbord1.png" alt="">
                        <span>Dashbord</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="../assets/image/components.png" alt="">
                        <span>Components</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="../assets/image/car1.png" alt="">
                        <span>Cars</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="../assets/image/about2.png" alt="">
                        <span>About</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="../assets/image/settings4.png" alt="">
                        <span>Settings</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="copy">
            &copy; 2015E.C
        </div>
    </div>
</template>

<script>
export default{
    name:'Side',
    props:["adminName"],
}
</script>

<style scoped>
.side{
    position: fixed;
    left: 0;
    /* top: 14.7%; */
    top: 6em;
    bottom: 0;
    width: 20%;
    background-color: var(--color1);
    background-image: linear-gradient(45deg,rgba(0,0,0,.7),transparent);
    display: flex;
    flex-direction: column;
    place-items: center;
    box-shadow:3px 0 15px 1px rgba(0,0,0,.4);
    transition: all ease-in-out .30s;
}
.admin-profile{
    width: 100%;
    display: flex;
    flex-direction: column;
    place-items: center;
    justify-content: center;
}
.admin-name{
    width: 100%;
    margin-top: .3em;
    padding: .5em;
    display: flex;
    place-items: center;
    justify-content: center;
    font-size: 1em;
    font-family: var(--font3);
    color:aliceblue;
}
.lists{
    margin-top:2em ;
    width: 100%;
    background: rgba(19, 18, 18, 0.253)
}
.lists ul{
    min-height: 20em;
    width:100% ;
    display: flex;
    flex-direction: column;
    justify-content: center;
    place-items: center;
    gap: .5em;
    list-style-type: none;
}
.lists ul li{
    width: 80%;
    margin: auto;
    padding: 3px 0;
    display: flex;
    place-items: center;
    border-radius: 3em;
    transition: all ease-in-out .22s;
}
.lists ul li a{
    width: 50%;
    margin:auto;
    display: flex;
    justify-content: space-between;
    place-items: center;
    gap: 1em;
    text-decoration: none;
    font-size: .8em;
}
.lists ul li:hover{
    background-color: rgb(44, 43, 43);
    border:1px solid var(--color2);
    
}
.lists ul li a span{
    min-width: 7em;
    margin-left: 1em;
    font-size: 1em;
    font-family: var(--font3);
    color: aliceblue;
 
}
img{
    width: 3em;
    filter: invert(50%);
}
.copy{
    position: absolute;
    bottom: .5em;
    right: 1em;
    font-size: .7em;
    color: gold;
}
@media(max-width:1100px){
    .side{
        width: 40%;
    }
}
@media(max-width:800px){
    .side{
        width: 50%;
        z-index: 10;
    }
}

.openSide {
    left: -100%;
    transition: all ease-in-out .33s;
}
.closeSide{
    left: 0;
    transition: all ease-in-out .33s;
}
</style>