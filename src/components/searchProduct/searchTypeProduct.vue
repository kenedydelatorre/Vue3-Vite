<script setup lang="ts">
import Header from "@/components/globals/header.vue"
</script>

<template lang="pug">
.container-xxs.container-xs.container-md
    Header    
    section.container.content-produce
        h3.text-institucional.text-center.sub-title-search ¿Qué tipo de productos estas buscando?
        //- .d-flex
        //-     div 
        //-         i <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 1024 1024"><path fill="currentColor" d="M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z"/></svg>
        //-     div.item-list
        //-         img(src="@/assets/search-type-product/hidrobilogicos-intensidad.svg" alt="No alimentos")#image_no_alimentos            
        //-     div.item-list
        //-         img(src="@/assets/search-type-product/agricultura-organica-intensidad.svg" alt="No alimentos")#image_no_alimentos            
        //-     div.item-list
        //-         img(src="@/assets/search-type-product/ganadero.svg" alt="No alimentos")#image_no_alimentos            
        //-     div.item-list
        //-         img(src="@/assets/search-type-product/agroindustrial-intensidad.svg" alt="Alimentos procesaros")#image_no_alimentos            
        //-     div 
        //-         i <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 1024 1024"><path fill="currentColor" d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8l-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"/></svg>

        .row 
            .col-1.p-0.m-0.text-end.turn-right-left 
                .icon-right-left <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 1024 1024"><path fill="currentColor" d="M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z"/></svg>
            .col-10
                .row 
                    .col-3
                        .items-list.d-flex.flex-column.justify-content-center
                            .firts-content.flex-column
                                .img-absolute
                                    img(src="@/assets/search-type-product/hidrobilogicos-intensidad.svg" alt="No alimentos")#image_no_alimentos
                                p.content-title.text-center.text-white
                                    ins Hidrobiológicos
                            .second-content
                                p Estos productores cuentan con la Marca de Agricultura Familiar otorgada por MIDAGRI.

                    .col-3
                        .items-list.d-flex.flex-column.justify-content-center.text-center
                            .firts-content.flex-column
                                .img-absolute
                                    img(src="@/assets/search-type-product/agricultura-organica-intensidad.svg" alt="No alimentos")#image_no_alimentos
                                p.content-title.text-center.text-white
                                    ins Agricultura sostenible
                            .second-content
                                p Estos productores son validados por el Viceministerio de Pesca y Acuicultura.
                    .col-3
                        .items-list.d-flex.flex-column.justify-content-center.text-center
                            .firts-content.flex-column
                                .img-absolute
                                    img(src="@/assets/search-type-product/ganadero.svg" alt="No alimentos")#image_no_alimentos
                                p.content-title.text-center.text-white
                                    ins Ganadería
                            .second-content
                                p Los productores de Agricultura Orgánica cuentan con el certificado de producción orgánica de SENASA. Los productores de
                                | Agricultura Agroecológica pertenecen al programa de FAO.
                    .col-3
                        .items-list.d-flex.flex-column.justify-content-center.text-center
                            .firts-content.flex-column
                                .img-absolute
                                    img(src="@/assets/search-type-product/agroindustrial-intensidad.svg" alt="Alimentos procesaros")#image_no_alimentos
                                p.content-title.text-center.text-white
                                    ins Alimentos procesados
                            .second-content
                                p Estos productores son validados por la Dirección de Ganadería de MIDAGRI.


                                
            .col-1.p-0.m-0.text-start.turn-right-left
                .icon-right-left <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 1024 1024"><path fill="currentColor" d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8l-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"/></svg>
</template>
<style lang="stylus" scoped>
.sub-title-search
    padding 5rem 0

.turn-right-left
    .icon-right-left
        padding-top 6rem
        color #C4C4C4 

.firts-content
    .img-absolute
        position absolute
        img
            width 250px
        z-index 1
    p 
        z-index 2
        font-size 14px 
        color white
.content-title
    z-index 3 
    margin-top 230px 
    font-weight 700
.second-content
    position relative
    display none

// .item-list    
//     padding 0 10px    
// .items-list
//     height 300px
//     .firts-content
//         img
//             position absolute 
//             width 250px
//             z-index 1
//         .content-title
//             z-index 3 
//             margin-top 230px 
//             font-weight 700
//         .underline-imgs
//             position relative
//             border-top 2px solid red 
//             z-index 3
//             text-align center
//             p
//                 position absolute
//                 border-top 10px solid blue
//                 z-index 3
</style>