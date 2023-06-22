<script setup lang="ts">
import modalBase from "@/components/other/modalBase.vue"
</script>
<template lang="pug">
modalBase
    .d-flex.justify-content-center
        .body-msg
            .section-success
                img(src="@/assets/logos-header/logo-productor-digital.svg" allt="productor-digital" height="65") 
                h6.pt-2 ¡Se registraron tus datos correctamente!
                p  Pronto nuestro equipo validaráinformación y enviará al correo registrado la respuesta a tu solicitud.

</template>
<style lang="stylus" scoped>
.body-msg
    background #FFF !important
    width 30%
    z-index 1070
.section-success
    width 70%
    margin auto
    padding 80px 0
    >p 
        padding-top 5px
        font-size 13px 
</style>