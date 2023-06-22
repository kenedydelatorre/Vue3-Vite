<script setup lang="ts">
import Header from "@/components/globals/header.vue"
import SectionSeller from "./seller/seller.vue"
import registerSuccess from "./registerSuccess.vue"

import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'


let actionSuccessRegister = ref(false) 
let profileRegister = ref('') 

onMounted(() => {
    const route = useRoute()
    const params = route.params 
    
    // To constats are is comparador y/o vendedor
    if (Object.keys(params).length === 0)
        profileRegister.value = 'comprador'
    else if(params.id === 'comprador')
        profileRegister.value = 'comprador'
    else
        profileRegister.value = 'vendedor'
})
const saveSuccess = (valueRegister) => {
    actionSuccessRegister.value = true

    setInterval(() => {
        actionSuccessRegister.value = false
    }, 5000);
};


</script>
<template lang="pug">
template(v-if="actionSuccessRegister")
    registerSuccess
Header
section.container
    <!-- Section to profile register -->    
    template(v-if="profileRegister === 'comprador'")
        SectionSeller(@saveSuccess="saveSuccess")
    template(v-else)
        h1 aqui vendedor
</template>
