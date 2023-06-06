<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

onMounted(() => {
    const route = useRoute()
    const params = route.params 
    
    const profileRegister = ref('') 
    // To constats are is comparador y/o vendedor
    console.log("iiii2")
    let parametro = params.toString() 
    console.log(parametro)
    console.log(parametro.length)
    console.log("iiii2")
    if (params){
        console.log("miiiii")
        profileRegister.value = 'comprador'
    }else{
        console.log("oeeeee")
    }

})

</script>
<template lang="pug">
h1 seguirrrrr {{profileRegister}}
</template>
