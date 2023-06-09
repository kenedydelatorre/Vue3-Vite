<script setup lang="ts">
import HeaderLmenusSearchFooter from "@/components/globals/header-lmenus-search-footer.vue"
import Product from "@/components/product/product.vue"
import SearchOfert from "@/components/searchProduct/searchOffert.vue"

import {alphabeth} from "./alfabeth.js"

const Lalphabeth = alphabeth

</script>
    
<template lang="pug">
.container-xxs.container-xs.container-md
    HeaderLmenusSearchFooter
        section.container.content-produce.bg-bage-institucional.p-0
            SearchOfert
            .d-flex.flex-row.justify-content-center.mt-3#btn-search-alphabeth
                template(v-for="alpha of Lalphabeth")
                    a.btn.bg-white.mx-1 {{ alpha.content }} 
            Product
        
</template>

<style lang="stylus" scoped>



</style>