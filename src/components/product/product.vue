<script setup lang="ts">
import {Lproducts} from "./product.js"

</script>
<template lang="pug">
.list-products
    .container.pt-5.bg-bage-institucional
        .row.row-list-products
            template(v-for="prod of Lproducts")
                .col-3
                    .card.card-products.my-3
                        img(src="@/assets/products/bonito.svg").card-img-top
                        .stock_product Disponible
                        h5.card-title.text-center.bg-institucional.text-white.py-1  {{prod.nombre}}
                        .card-body
                            p.card-text 
                                img(src="@/assets/icons/balance.svg" alt="balance")
                                | Hasta {{ prod.peso }} {{ prod.unidad_medida }}
                            p.card-text 
                                img(src="@/assets/icons/location.svg" alt="balance")
                                | {{ prod.direccion }}
                            p.card-text 
                                img(src="@/assets/icons/price.svg" alt="balance")
                                | S/.{{ prod.precio }} por {{ prod.unidad_medida }}
                            p.card-text 
                                img(src="@/assets/icons/calification.svg" alt="balance")                    
                                | {{ prod.certificaciones }} Certificaciones
                        .btn-products.text-center.mb-3
                            a.btn.bg-orange-institucional.px-5 Ver oferta
        .acctions-paginate.text-center.py-5
            a(href="").btn Primera
            a(href="").btn.border-start-0.border-end-0 Anterior
            a(href="").btn Pagina 1 de 3
            a(href="").btn.border-start-0.border-end-0 Siguiente
            a(href="").btn Última 
</template>

<style lang="stylus" scoped>
.stock_product
    position absolute
    background white
    color color-orange-institucional
    right 0 
    top 80px
    margin 0 10px 0 0
    padding 1px 10px 
    border-radius 8px
    font-size 14px 
.card-products
    box-shadow: 2px 5px 4px #c2c2c2
.card-text
    img 
        margin 0 10px 0 0
        width 20px 
.row-list-products
    padding 0px 40px
    .col-3
        padding 0 40px 
.btn-products
    a 
        font-size 14px
        color #fff

.acctions-paginate
    a 
        background #fff 
        padding 5px 10px
        border-radius 0px
        border 1px solid #909090
        color color-institucional
</style>