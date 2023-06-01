<template lang="pug">
.container
    .row.content-header
        .bg-header-start
        .col-4.transparent
        .col-4#main-logo.text-center
            img(src="@/assets/logos-header/logo-productor-digital.svg")#logo_mt_produccion
        .col-4#main-produce.text-end
            h2.p-0.m-0.text-danger-institucional
                strong PRODUCE 
            .hp.text-danger-institucional Ministerio de la Producción
    .row.bg-azul-institucional
        .col-6.py-2
            a.text-white.btn
                i <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 1024 1024"><path fill="currentColor" d="M529.408 149.376a29.12 29.12 0 0 1 41.728 0a30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264a29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0a30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264a29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z"/></svg>
                span.px-3 ir a Produce mas
                img(src="@/assets/logos-header/produce-mas-ico.svg")
        .col-6.text-end.py-2
            a
                img(src="@/assets/singIn/servicios-ex.svg")
                span.text-white.px-2 Servicios para tu negocio
                img(src="@/assets/singIn/sesion.svg")
</template>
<style lang="stylus" scoped>
.transparent
    z-index 1
.bg-header-start 
    position absolute 
    background-image: url(/src/assets/logos-header/fd-diagonal-azul.svg)
    background-repeat: no-repeat
    background-size: cover;
    width 1300px
    height 70px
    z-index 5
.content-header
    #main-logo
        margin-top: 40px    
#logo_mt_produccion
    height 70px
    z-index 2
#main-produce
    padding-right 2rem
    margin-top .5rem
.hp
    font-size 12px
    margin-top -5px


@media screen and (max-width: 575px)
    .img-size
        margin .2rem !important
    #logo_mt_produccion
        height 30px
    #logo_con_punche
    #logo_bicentenario
        height 40px
</style>