<script setup lang="ts">
import Header from "@/components/globals/header.vue"
import ThreeHeader from "@/components/globals/header-menus.vue"
import Product from "@/components/product/product.vue"
import {alphabeth} from "./alfabeth.js"

const Lalphabeth = alphabeth

</script>
    
<template lang="pug">
.container-xxs.container-xs.container-md
    Header
    ThreeHeader
    section.container.content-produce.p-0
        .img-header
            img(src="@/assets/logos-header/hidrobiologico-header.svg", alt="")
        h3.fw-bolder.text-institucional.text-center.pt-5 Ofertas de productores
        h5.fw-light.text-center Productos temporales a buen precio
        .search-product
            b-input-group.mt-3#group-search-offers
                b-form-input(placeholder="Busca la oferta que necesitas")#search-offers
                b-input-group-append
                    a#btn-search-offers <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3l-1.4 1.4ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"/></svg>
        .d-flex.flex-row.justify-content-center.mt-3#btn-search-alphabeth
            template(v-for="alpha of Lalphabeth")
                a.btn.bg-white.mx-1 {{ alpha.content }}
                
        Product
        
</template>

<style lang="stylus" scoped>
.bg-header-three
    background #F8EFEB
    border-top 5px solid color-orange-institucional
.img-header 
    img 
        max-width: 100%

.search-product
    padding 0 20rem

#group-search-offers
    border-radius 10px
    box-shadow: 5px 5px 8px #c2c2c2
#search-offers
    border-radius 10px 0 0 10px 
    &:focus
        box-shadow none
        border 1px solid color-orange-institucional     
    &::placeholder
        color #e2e2e2
        font-size 18px
#btn-search-offers
    background color-orange-institucional
    color #fff
    border-radius 0 10px 10px 0
    padding 2px 10px

#btn-search-alphabeth
    padding-top 15px 
    a   
        border 2px solid "#000"
        font-size 12px
        box-shadow: 2px 5px 8px #c2c2c2
        &:hover 
            border 2px color-orange-institucional
</style>