<script setup lang="ts">
import Header from "@/components/globals/header.vue"
</script>

<template lang="pug">
.container-xxs.container-xs.container-md
    Header    
    section.container.content-produce
        h3.text-institucional.text-center.sub-title-search ¿Qué productos estas buscando?
        .d-flex.justify-content-center
            .bd-highlight.py-3.px-5.me-2.btn.rounded
                h3.text-center.fw-bolder.m-0 Alimentos 
                img(src="@/assets/search-products/alimentos.svg" alt="Alimentos")#image_alimentos
            .bd-highlight.p-3.px-5.ms-2.btn.rounded
                h3.text-center.fw-bolder.m-0 No alimentos 
                img(src="@/assets/search-products/no-alimentos.svg" alt="No alimentos")#image_no_alimentos

</template>
<style lang="stylus" scoped>
.sub-title-search
    padding 5rem 0
.bd-highlight 
    background #F7F8FA
    h3 
        opacity .5
    img
        opacity .5
    &:hover 
        background #E4BDAF
        border 2px solid color-institucional
        img
        h3 
            opacity 1
            color color-institucional
        
</style>