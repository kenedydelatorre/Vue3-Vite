<template lang="pug">
footer.bg-institucional.text-white
    .firts-part
        .row 
            .col-7.pt-5 
                p.text-center Con el apoyo de:
                .d-flex.sponsor-footer 
                    img(src="@/assets/logos-header/con_punche_peru.svg", alt="ConPunche")
                    img(src="@/assets/logos-header/bicentenario.svg", alt="Bientenario")
                    img(src="@/assets/logos-header/onu_alimentacion_y_agricultura.svg", alt="onu-alimentacion-agricultura")
                    img(src="@/assets/logos-header/alternativa.svg", alt="alternativa")
                .d-flex.location
                    h6.fw-light.mt-4 Dirección: Calle Uno Oeste 060 - Urb. Córpac, San Isidro - Lima - Perú 
            .col-5.pt-5
                .d-flex.flex-wrap.social-media-institucional.mt-5
                    .social-media-item.d-flex.flex-row.mb-5
                        img(src="@/assets/social-media/facebook.svg" allt="bacebook")
                        p.p-0.m-0  minproduccion 
                    .social-media-item.d-flex.flex-row.mb-5
                        img(src="@/assets/social-media/twitter.svg" allt="twitter")
                        p.p-0.m-0  minproduccion 
                    .social-media-item.d-flex.flex-row.mb-5
                        img(src="@/assets/social-media/instagram.svg" allt="instagram")
                        p.p-0.m-0  minproduccion 
                    .social-media-item.d-flex.flex-row.mb-5                    
                        img(src="@/assets/social-media/youtube.svg" allt="youtube")
                        p.p-0.m-0  minproduccion 
                    .social-media-item.d-flex.flex-row.mb-5                    
                        img(src="@/assets/social-media/website.svg" allt="website")
                        p.p-0.m-0  minproduccion 
                    .social-media-item.d-flex.flex-row.mb-5
                        img(src="@/assets/social-media/whatsap.svg" allt="whatsap")
                        p.p-0.m-0  minproduccion  
    .second-part
        .row.text-center.py-2
            .col-6 
                p © 2022 Ministerio de la Producción. Todos los derechos reservados
            .col-6 
                p POLÍTICA DE PRIVACIDAD


</template>
<style scoped lang="stylus">
.sponsor-footer
    img 
        margin 0 20px
.social-media-institucional
    .social-media-item
        img 
            padding 0 5px
.location
    padding 10px 0 0 30px
        
.second-part
    border-top .5px solid #fff
</style>