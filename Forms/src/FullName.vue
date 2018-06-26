<template>
    <div class="container">
                    <input type="text" v-model="value.firstName" placeholder="Fitst Name" >
                    <input type="text" v-model="value.lastName" placeholder="Last Name" >
    </div>  
</template>

<script>
    export default {   
      props: ['value']
    }
</script>

<style>
</style>