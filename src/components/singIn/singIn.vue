<script setup lang="ts">
import Header from "@/components/globals/header.vue"

import { ref } from "vue"
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const bgInstitucional = ref({
    url : 'url(/src/assets/singIn/list-images-login/agricultura.svg)'
})

onMounted(() => {
    const route = useRoute()
    const params = route.params 
    console.log(params.id)
    if (params.id === '1')
        bgInstitucional.value.url = 'url(/src/assets/singIn/list-images-login/agricultura.svg)'
    else if(params.id === '2')
        bgInstitucional.value.url = 'url(/src/assets/singIn/list-images-login/pesca.svg)'
    else if(params.id === '3')
        bgInstitucional.value.url = 'url(/src/assets/singIn/list-images-login/tuberculos.svg)'
    else if(params.id === '4')
        bgInstitucional.value.url = 'url(/src/assets/singIn/list-images-login/ganaderia.svg)'
    else if(params.id === '5')
        bgInstitucional.value.url = 'url(/src/assets/singIn/list-images-login/frutas.svg)'
    else if(params.id === '6')
        bgInstitucional.value.url = 'url(/src/assets/singIn/list-images-login/manufactura.svg)'
    else if(params.id === '7')
        bgInstitucional.value.url = 'url(/src/assets/singIn/list-images-login/mano-obra.svg)'
    else
        bgInstitucional.value.url = 'url(/src/assets/singIn/list-images-login/agricultura.svg)'


    console.log('El componente se ha montado en el DOM');
});

</script>
<template lang="pug">
.container-xxs.container-xs.container-md
    Header
    section.container
        .row 
            .col-sm-8.d-none.d-sm-none.d-md-none.d-lg-none.d-xl-block.img-fondo.p-0.m-0
                .imagen_fondo
                    .svg-logo-produtor-digital
                    #bienvenido "Bienvenido a Productor Digital. Aquí encontrarás las mejores ofertas de productores a nivel nacional"
                    .row.footer-images
                        #apoyo.col-md-5.mt-5.pl-40.ps-5 Con el apoyo de:
                        #aliados.col-md-6.mt-5.ps-5 Aliados:
                    .row.pt-50
                        .col-2.ps-5
                            img.logo-fao-footer(src="@/assets/singIn/logo_fao.svg" alt="Logo FAO")#image_fao
                        .col-3
                            img(src="@/assets/singIn/logo_alternativa.png" alt="Logo Alternativa")#image_alternativa
                        .col-3.ps-4
                            img(src="@/assets/singIn/logo_ministerio_agricultura.png" alt="Logo Ministerio Agricultura")#imagen_ministerio_agricultura
                        .col-3.ps-4
                            img(src="@/assets/singIn/logo_ministerio_inclusion_social.png" alt="Logo Ministerio Inclusion Social")#imagen_ministerio_inclusion_social
            .col-sm-12.col-md-12.col-lg-12.col-xl-4.mt-5.pt-5.px-5.text-center
                h3.text-center.text-institucional.fw-bolder.my-5 INGRESAR COMO:
                .row.m-0.p-0
                    .col-6.my-5
                        .sesion-item.rounded.mx-1.pb-2
                            p.text-institucional.fw-bolder.fs-4 Comprador
                            img(src="@/assets/singIn/comprador.svg" alt height="90")
                    .col-6.my-5
                        .sesion-item.rounded.mx-1.pb-2
                            p.text-institucional.fw-bolder.fs-4 Productor
                            img(src="@/assets/singIn/productor.svg" alt height="90")
                a.btn.btn-sm.btn-invitado.d-block.mt-3 Ingresar como invitado
                p.text-center.mt-3 ¿No tienes una cuenta?  
                    a.text-blue-institucional.border-bottom   Crear una ahora

</template>

<style lang="stylus" scoped>
.img-fondo
    background-image: v-bind('bgInstitucional.url')
    // background-image: url(/src/assets/singIn/list-images-login/agricultura.svg)
.imagen_fondo 
    // background-image: v-bind('bgInstitucional.url')
    // background-image: url(/src/assets/singIn/bg-sesion.png)
    background-repeat: no-repeat
    background: #01010178
    background-size: cover
.svg-logo-produtor-digital 
    padding-top: 160px
    padding-left: 47px

#bienvenido
    width: 600px
    font-family: Montserrat
    font-size: 32px
    font-weight: bold
    text-align: center
    -ms-text-shadow: 1px 5px 4px rgba(0, 0, 0, 0.35)
    -o-text-shadow: 1px 5px 4px rgba(0, 0, 0, 0.35)
    -webkit-text-shadow: 1px 5px 4px rgba(0, 0, 0, 0.35)
    -moz-text-shadow: 1px 5px 4px rgba(0, 0, 0, 0.35)
    text-shadow: 1px 5px 4px rgb(0 0 0 / 35%)
    color: #FFFFFF
    margin-left: auto
    margin-right: auto
    margin-top: 150px
#apoyo
    height: 47.5px
    overflow: hidden
    font-family: Montserrat
    font-size: 21px
    font-weight: bold
    text-align: left
    color: #FFFFFF
#aliados
    overflow: hidden
    font-family: Montserrat
    font-size: 21px
    font-weight: bold
    text-align: left
    color: #FFFFFF
.footer-images
    margin-top 200px
#image_fao
    width: 100px
    height: 40px
    margin-left: 20px
    margin-bottom: 8px

#image_alternativa
    width: 174px
    height: 33px
    margin-left: 20px

#imagen_ministerio_agricultura
    width: 162px
    margin-left: 20px

#imagen_ministerio_inclusion_social
    width: 167px
    margin-left: 20px
.sesion-item
    border 10px
    text-align center
    background #F7F8FA
    &:hover
        background #F1E7E4
.btn-invitado
    background #ebebeb
    color #41414161 !important
    &:hover
        background color-institucional
        color #ffffffcf !important
.border-bottom
    cursor pointer

.text-blue-institucional
    color #3997DB

</style>