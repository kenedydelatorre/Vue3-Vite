<script setup lang="ts">
import { ref } from 'vue'

//For content
const actionConten = ref('nacional')

</script>
<template lang="pug">
h3.py-5.text-center.text-institucional Bríndanos tus datos personales 
.d-flex.justify-content-center
    .contenedor
        .container.titles-actions
            .row
                a.col-6.btn.text-center.active-section Soy comprador nacional 
                a.col-6.btn.text-center Soy comprador internacional
        .conten-actions
            #buyer-national(v-if="actionConten === 'nacional'")
                .container
                    .row.bg-gray-institucional 
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
</template>
<style lang="stylus" scoped>
.contenedor
    background blue
    width 60%
    .titles-actions
        a 
            border-radius unset 
//     display flex 
//     justify-content center
//     .tabs
//         width 42rem
//         background red 


</style>