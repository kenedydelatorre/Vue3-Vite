<script setup lang="ts">
import {Lproducts} from "./product.js"

</script>
<template lang="pug">
.list-products
    h1 maaaaxxx
    .row 
        template(v-for="prod of Lproducts")
            .col-3 
                .card
                    img(src="@/assets/products/bonito.svg").card-img-top
                    h5.card-title.text-center.bg-institucional.text-white.py-2  {{prod.nombre}}
                    .card-body
                        p.card-text {{ prod }}
        .col-3
            .card
                img(src="@/assets/products/bonito.svg").card-img-top
                .card-body
                    h5.card-title  Card title
                    p.card-text This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.        
        .col-3 
        .col-3 
    .list-card-item
        .card-group





</template>