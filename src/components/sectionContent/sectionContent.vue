<script setup lang="ts">
import HeaderComple from "@/components/globals/header-lmenus-search-footer.vue"
import imgContent from "@/components/globals/image-content.vue"

</script>
<template lang="pug">
HeaderComple
    imgContent
    .container
        .row
            .col-6.p-0#sectionLeft.bg-bage-institucional  
                .section-title.text-center.bg-orange-institucional.px-5.py-3
                    h4 Haz tu pedido
                    p Indicanos mayor información de tu pedido para que recibas respuestas de productores a nivel nacional
                .section-body.mx-5.my-2
                    form 
                        .row
                            .col-6
                                .content-form.mb-2
                                    label(for="product").form-label Producto
                                    input(type="email" placeholder="Nombre del producto").form-control.form-control-sm#product
                            .col-6
                                .content-form.mb-2
                                    label(for="type-product").form-label Tipo de prodcuto
                                    select.form-select.form-select-sm(aria-label="Default select example")
                                        option(select)
                                        option(value="1") One
                                        option(value="2") Two
                                        option(value="3") Three
                            .col-6
                                .content-form.mb-2
                                    label(for="type-product").form-label Región de procedencia
                                    select.form-select.form-select-sm(aria-label="Default select example")
                                        option(select)
                                        option(value="1") One
                                        option(value="2") Two
                                        option(value="3") Three
                            .col-6
                                .content-form.mb-2
                                    label(for="type-product").form-label Tipo de unidad
                                    select.form-select.form-select-sm(aria-label="Default select example")
                                        option(select)
                                        option(value="1") One
                                        option(value="2") Two
                                        option(value="3") Three
                            .col-6 
                                .content-form.mb-2
                                    label(for="product").form-label Cantidad
                                    input(type="number").form-control.form-control-sm
                            .col-6 
                                .content-form.mb-2
                                    label(for="product").form-label Foto del tipo de producto
                                    input(type="file").form-control.form-control-sm#refProducto
                            .col-12
                                .content-form.mb-2
                                    label(for="detail-product").form-label Detalle del pedido
                                    textarea(rows="3", placeholder="Por ejemplo: requiero papa de tamaño regular, calidad extra, ideal para pollerias").form-control.form-control-sm#detail-product
                            .col-12
                                .row.mb-3
                                    .col-7
                                        label.form-check-label.text-institucional ¿Registrar a mi grupo de compra?
                                    .col-5
                                        .d-flex.justify-content-around
                                            .form-check.form-check-inline
                                                input.form-check-input(type="radio" name="register-to-my-group-Options"  value="option1")#register-to-my-group-1
                                                label.form-check-label(for="register-to-my-group-1") SI
                                            .form-check.form-check-inline
                                                input.form-check-input(type="radio" name="register-to-my-group-Options"  value="option2")#register-to-my-group-2
                                                label.form-check-label(for="register-to-my-group-2") NO
                            .col-12
                                .row.mb-3
                                    .col-7
                                        label.form-check-label.text-institucional ¿Desea agregar otro producto?
                                    .col-5
                                        .d-flex.justify-content-around
                                            .form-check.form-check-inline
                                                input.form-check-input(type="radio" name="des-adering-other-product-Options"  value="option1")#des-adering-other-product1
                                                label.form-check-label(for="des-adering-other-product1") SI
                                            .form-check.form-check-inline
                                                input.form-check-input(type="radio" name="des-adering-other-product-Options"  value="option1")#des-adering-other-product2
                                                label.form-check-label(for="des-adering-other-product2") NO  
                            .col-12
                                .row.mb-3
                                    .col-7
                                        label.form-check-label.text-institucional ¿Desea que se incluya el envío?
                                    .col-5
                                        .d-flex.justify-content-around
                                            .form-check.form-check-inline
                                                input.form-check-input(type="radio" name="des-addering-delivery-Options"  value="option1")#des-addering-delivery1
                                                label.form-check-label(for="des-addering-delivery1") SI
                                            .form-check.form-check-inline
                                                input.form-check-input(type="radio" name="des-addering-delivery-Options"  value="option1")#des-addering-delivery2
                                                label.form-check-label(for="des-addering-delivery2") NO  
                            .col-12.text-center.my-3
                                a.btn.bg-orange-institucional.text-white.px-5 Publicar pedido
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M5 22q-.825 0-1.413-.588T3 20V6q0-.825.588-1.413T5 4h1V3q0-.425.288-.713T7 2q.425 0 .713.288T8 3v1h8V3q0-.425.288-.713T17 2q.425 0 .713.288T18 3v1h1q.825 0 1.413.588T21 6v14q0 .825-.588 1.413T19 22H5Zm0-2h14V10H5v10Zm7-6q-.425 0-.713-.288T11 13q0-.425.288-.713T12 12q.425 0 .713.288T13 13q0 .425-.288.713T12 14Zm-4 0q-.425 0-.713-.288T7 13q0-.425.288-.713T8 12q.425 0 .713.288T9 13q0 .425-.288.713T8 14Zm8 0q-.425 0-.713-.288T15 13q0-.425.288-.713T16 12q.425 0 .713.288T17 13q0 .425-.288.713T16 14Zm-4 4q-.425 0-.713-.288T11 17q0-.425.288-.713T12 16q.425 0 .713.288T13 17q0 .425-.288.713T12 18Zm-4 0q-.425 0-.713-.288T7 17q0-.425.288-.713T8 16q.425 0 .713.288T9 17q0 .425-.288.713T8 18Zm8 0q-.425 0-.713-.288T15 17q0-.425.288-.713T16 16q.425 0 .713.288T17 17q0 .425-.288.713T16 18Z"/></svg>
            .col-6.p-0#sectionRight.bg-white
                .section-title.text-center.bg-institucional.py-3
                    h4 Oferta de productores
                    p Encuentra ofertas y contacta directamente con los productores.
                .section-body
                    p  Aqui contenido

</template>
<style lang="stylus" scoped>
.section-body
    color #858585

::placeholder {
  color: #858585
}

// #sectionLeft
//     background red 
// #sectionRight
//     background #FFF 
.section-title
    height 8rem
    color #fff


.form-check-input:checked {
    background-color: #656565;
    border-color: #656565;
}


</style>