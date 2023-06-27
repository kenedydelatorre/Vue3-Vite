<script setup lang="ts">

</script>
<template lang="pug">
.card.card-products.my-3
    img(src="@/assets/products/bonito.svg").card-img-top
    .stock_product Disponible
    h5.card-title.text-center.bg-institucional.text-white.py-1  Bonito
    .card-body
        p.card-text 
            img(src="@/assets/icons/balance.svg" alt="balance")
            | Hasta 1000 Kilo
        p.card-text 
            img(src="@/assets/icons/location.svg" alt="location")
            | Callao - callao
        p.card-text 
            img(src="@/assets/icons/price.svg" alt="price")
            | S/.3.00 por Kilo
        p.card-text 
            img(src="@/assets/icons/calification.svg" alt="calification")                    
            | 5 Certificaciones
    .btn-products.text-center.mb-3
        a.btn.bg-orange-institucional.px-5 Ver oferta
</template>

<style lang="stylus" scoped>
.card-products
    box-shadow: 2px 5px 4px #c2c2c2
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
.card-text
    img 
        margin 0 10px 0 0
        width 20px 
.btn-products
    a 
        font-size 14px
        color #fff
</style>