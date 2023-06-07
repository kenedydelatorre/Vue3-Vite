<script setup lang="ts">
import Header from "@/components/globals/header.vue"

import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const profileRegister = ref('') 

//For content
const actionConten = ref('nacional')

onMounted(() => {
    const route = useRoute()
    const params = route.params 
    
    
    // To constats are is comparador y/o vendedor
    if (Object.keys(params).length === 0)
        profileRegister.value = 'comprador'
    else
        profileRegister.value = 'vendedor'


})

</script>
<template lang="pug">
Header
section.container
    <!-- Section to profile register -->
    p.text-danger {{profileRegister}}
    template(v-if="profileRegister === 'comprador'")
        h3.py-5.text-center.text-institucional Brindanos tus datos personales 
        .d-flex.justify-content-center
            .contenedor
                .container.titles-actions
                    .row
                        a.col-6.btn.text-center.bg-warning Soy comprador nacional 
                        a.col-6.btn.text-center Soy comprador internacional
                .conten-actions
                    #buyer-national(v-if="actionConten === 'nacional'")
                        .container
                            .row
                                .col-6 
                                    select.my-2.form-select(placeholder="MIX" value="2") 
                                        option(value="" disabled selected) Documento de identidad
                                            span.text-danger (*)
                                .col-6 
                                    input.my-2.form-control(placeholder="MIX" value="2") 
                                .col-6 
                                    input.my-2.form-control(placeholder="MIX" value="2") 
                                .col-6 
                                    input.my-2.form-control(placeholder="MIX" value="2") 
                                .col-6 
                                    input.my-2.form-control(placeholder="MIX" value="2") 
                                .col-6 
                                    input.my-2.form-control(placeholder="MIX" value="2") 
                                .col-6 
                                    input.my-2.form-control(placeholder="MIX" value="2") 
                                .col-6 
                                    input.my-2.form-control(placeholder="MIX" value="2") 
                                .col-6 
                                    input.my-2.form-control(placeholder="MIX" value="2") 
                                .col-6 
                                    input.my-2.form-control(placeholder="MIX" value="2") 
                                .col-6 
                                    input.my-2.form-control(placeholder="MIX" value="2") 
                                .col-6 
                                    input.my-2.form-control(placeholder="MIX" value="2")
                    #buyer-inter-national(v-else)
                        h1 Content inter nido nacional     

    template(v-else)
        h1 aqui vendedor
</template>
<style lang="stylus" scoped>
.contenedor
    background blue
    width 60%
    .titles-actions
        a 
            background red
            border-radius unset 
//     display flex 
//     justify-content center
//     .tabs
//         width 42rem
//         background red 

</style>