<template lang="pug">
#contenedor-charge
    #body-charge
    .info-charge.text-center
        slot
    .modal-backdrop.show      
</template>
<style lang="stylus" scoped>

#body-charge
    display: flex;
    width: 100vw;
    height: 30vh;
    justify-content: center;
    align-items: center;
    z-index: 999
    .info-charge
    span,
    svg
        color white
#contenedor-charge
    position absolute
    -webkit-animation: flip-scale-2-hor-top 0.5s linear both;
    animation: flip-scale-2-hor-top 0.5s linear both;

</style>
    