<template>
    <div class="logo">
        <slot name="image">
            
        </slot>
    </div>
</template>
<script>

export default{
    name:'Logo',
}

</script>

<style scoped>
.logo{
    width: 6em;
    height: 6em;
    display: flex;
    justify-content: center;
    place-items: center;
}
</style>