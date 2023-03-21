<template>
    <footer>
        <ul>
            <li>
                <a href="#"><img src="../assets/image/facebook.png" alt=""></a>
            </li>
            <li>
                <a href="#"><img src="../assets/image/google.png" alt=""></a>
            </li>
            <li>
                <a href="#"><img src="../assets/image/linkidin.png" alt=""></a>
            </li>
        </ul>
    </footer>
</template>
<script>
export default{
    name:'Footer'
}

</script>
<style scoped>
footer{
    position:fixed;
    right: .5em;
    top: 40%;
}
footer ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 1em;
}
footer ul li{
    width: 2.5em;
    height: 2.5em;
    display: flex;
    place-items: center;
    justify-content: center;
    background-color: aliceblue;
    border: 1px solid rgb(161, 167, 172);
    background-size: 200px;
    border-radius: 50%;
}
ul li img{
    width: 2em;
    filter: invert(30%);
}
</style>