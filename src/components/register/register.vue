<script setup lang="ts">
import Header from "@/components/globals/header.vue"
import SectionSeller from "./seller/seller.vue"

import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

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

</script>
<template lang="pug">
Header
section.container
    <!-- Section to profile register -->
    template(v-if="profileRegister === 'comprador'")
        SectionSeller
    template(v-else)
        h1 aqui vendedor
</template>
