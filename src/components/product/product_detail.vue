<script setup lang="ts">
import HeaderLmenusSearchFooter from "@/components/globals/header-lmenus-search-footer.vue"
import SearchOfert from "@/components/searchProduct/searchOffert.vue"

import { mounth } from "./Lmounth.js"
const lmounth = mounth

</script>
<template lang="pug">
.container-xxs.container-xs.container-md    
    HeaderLmenusSearchFooter
        section.container.content-produce.bg-bage-institucional.p-0
            SearchOfert
            .content-detail-product.bg-white.mt-5
                .col-12
                    .row 
                        .col-6.p-0 
                            .img-detail 
                                img(src="@/assets/products/bonito.svg", alt="")
                        .col-6 
                            .content-detail.ps-5 
                                h4.text-institucional
                                    strong Bonito 
                                p
                                    strong.text-gray-institucional Unidad : 
                                    | Kilos
                                p 
                                    strong.text-gray-institucional Procedencia : 
                                    | Callao - callao 
                                p 
                                    strong.text-gray-institucional Precio por unidad : 
                                    | S/.3.00
                                p 
                                    strong.text-gray-institucional Pedido mínimo : 
                                    | 200 kilos
                                p 
                                    strong.text-gray-institucional Pedido máximo : 
                                    | 1000 kilos
                                p 
                                    strong.text-gray-institucional Productor : 
                                    | Renato Quispe
                                p
                                    strong.text-gray-institucional Disponibilidad : 
                                .Lmounth
                                    template(v-for="mounth of lmounth")
                                        template(v-if="(parseInt(mounth.value))/2===0")
                                            a.btn-mounth.mb-3.active {{ mounth.content }}
                                        template(v-else)
                                            a.btn-mounth.mb-3  {{ mounth.content }}
                                p
                                    strong.text-gray-institucional Descripción :  
                                    | is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                p 
                                    strong.text-gray-institucional Cantidad : 
                                    a.btn-dissmis -
                                    input.inp-detailproduct(value="200 Kilos")
                                    a.btn-adderin +
                                    a.btn-end-buy.bg-orange-institucional.ms-5 Finaliza tu compra
            h1 qqqqqqqq     
</template>
<style lang="stylus" scoped>
.btn-mounth
    background #FFF
    border 1px solid #999
    border-radius 3px
    box-shadow 2px 5px color-gray-institucional
    color #000
    font-size 13px
    padding 5px
    margin 0 3px
    text-decoration none
    cursor pointer
    &.active
        background color-orange-institucional
.inp-detailproduct
    width 4rem
    height 30px
    font-size 11px
    text-align center
    border-color #c6c6c6
.btn-dissmis
.btn-adderin
    border 1px solid #e1e1e1
    border-radius 5px
    color #000
    cursor pointer
    margin 0 3px
    padding 2px 10px
    text-decoration none
    text-align center 
    background #D9D9D9
.btn-end-buy
    border-radius 5px
    color #fff
    cursor pointer 
    padding 5px 10px
    text-decoration none
.Lmounth
    margin-bottom 15px     
.content-detail-product
    margin 0 5rem 
    padding 4rem 3rem    
.img-detail 
    img   
        border-radius 15px
        width: 100%
        height: 490px
        object-fit: cover
</style>