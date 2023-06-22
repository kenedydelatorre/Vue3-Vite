<script setup lang="ts">
import { ref, defineEmits  } from 'vue';

//For emit msg success save form
const emits = defineEmits(['saveSuccess']);

const isActive = ref(1)

//For content
const actionConten = ref('nacional');

const sendRegisterPersonNational  = () => {
    try {
        emits('saveSuccess', isActive);
    } catch (error) {
        console.error('Error al emitir el evento:', error);
    }
}

const tabBuy = (value:number) =>{
    isActive.value = value
    if(value === 1)
        actionConten.value = 'nacional' 
    else
        actionConten.value = 'internacional'
}

</script>
<template lang="pug">
h3.py-5.text-center.text-institucional Bríndanos tus datos personales 
.d-flex.justify-content-center
    .contenedor
        .container.titles-actions
            .row
                a.col-6.btn.text-center.bg-gray-institucional(@click="tabBuy(1)" v-bind:class="[isActive === 1 ? 'active-section' : '']") Soy comprador nacional 
                a.col-6.btn.text-center.bg-gray-institucional(@click="tabBuy(2)" v-bind:class="[isActive === 2 ? 'active-section' : '']")  Soy comprador internacional
        .conten-actions.bg-gray-institucional.pt-4
            #buyer-national(v-if="actionConten === 'nacional'")
                .container
                    .row.bg-gray-institucional.px-4.mb-5 
                        .col-6 
                            select.my-2.form-select
                                option(value="" disabled selected) Documento de identidad (*)
                        .col-6 
                            .input-group.my-2
                                input.form-control.input-register.input-group-register(placeholder="N° de documento (*)" ) 
                                span.input-group-text.input-group-register <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"/></svg>
                        .col-6 
                            input.my-2.form-control.input-register(placeholder="Nombres (*)") 
                        .col-6 
                            input.my-2.form-control.input-register(placeholder="Apellidos (*)") 
                        .col-6 
                            input.my-2.form-control.input-register(placeholder="Correo (*)") 
                        .col-6 
                            input.my-2.form-control.input-register(placeholder="Telefono (*)") 
                        .col-6 
                            select.my-2.form-select
                                option(value="" disabled selected) Región de procedencia
                                    span.text-danger (*)
                        .col-6 
                            select.my-2.form-select
                                option(value="" disabled selected) Provincia
                                    span.text-danger (*)
                        .col-6
                            .row 
                                .col-10
                                    .input-group.my-2
                                        input.form-control.input-register.input-group-register(placeholder="RUC (*)")
                                        span.input-group-text.input-group-register.bg-white.border-start-0 <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"/></svg>
                                .col-1.pt-2
                                    i.icon-bg-register <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2S2 6.5 2 12s4.5 10 10 10M11 7h2v2h-2V7m3 10h-4v-2h1v-2h-1v-2h3v4h1v2Z"/></svg>
                        .col-6 
                            input.my-2.form-control.input-register(placeholder="Razón Social") 
                        .col-6 
                            input.my-2.form-control.input-register(placeholder="Nombre comercial (*)") 
                        .col-6 
                            .row 
                                .col-10                        
                                    input.my-2.form-control.input-register(placeholder="CIIU / Actividad económica (*)")
                                .col-1.pt-2
                                    i.icon-bg-register  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2S2 6.5 2 12s4.5 10 10 10M11 7h2v2h-2V7m3 10h-4v-2h1v-2h-1v-2h3v4h1v2Z"/></svg>                            
                        .col-6 
                            input.my-2.form-control.input-register(placeholder="¿Tiene deuda coactiva? (*)")

            #buyer-inter-national(v-else)
                .container
                    .row.bg-gray-institucional.px-4.mb-5 
                        .col-6 
                            .row 
                                .col-10                        
                                    select.my-2.form-select
                                        option(value="" disabled selected) Tipo de documento
                                            span.text-danger (*)
                                .col-1.pt-2
                                    i.icon-bg-register  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2S2 6.5 2 12s4.5 10 10 10M11 7h2v2h-2V7m3 10h-4v-2h1v-2h-1v-2h3v4h1v2Z"/></svg>                
                        .col-6
                            input.my-2.form-control.input-register(placeholder="N° de documento (*)" ) 
                        .col-6
                            input.my-2.form-control.input-register(placeholder="Nombres (*)" )  
                        .col-6
                            input.my-2.form-control.input-register(placeholder="Apellidos (*)" )
                        .col-6
                            select.my-2.form-select
                                option(value="" disabled selected) Pais
                                    span.text-danger (*)  
                        .col-6
                            input.my-2.form-control.input-register(placeholder="Razón Social (*)" )
                        .col-6
                            input.my-2.form-control.input-register(placeholder="Nombre Comercial (*)" )
                        .col-6
                            input.my-2.form-control.input-register(placeholder="Acticidad economica (*)" )  
            .col-12.mt-3
                .row.justify-content-center
                    .col-5
                        .form-check
                            input(type="checkbox").form-check-input#politica-proteccion-datos
                            label(for="politica-proteccion-datos").form-check-label.text-gray-condition Acepto la 
                                span.text-blue-condition política de protección de datos
                        .form-check
                            input(type="checkbox").form-check-input#terminos-condiciones
                            label(for="terminos-condiciones").form-check-label.text-gray-condition Acepto los 
                                span.text-blue-condition términos y condiciones
                        .d-grid.gap-2.my-3
                            .btn.btn-secondary-register(@click="sendRegisterPersonNational") Enviar solicitud            
            aa                                                                                                                                                            
  
</template>
<style lang="stylus" scoped>
.contenedor
    width 70%
    .titles-actions
        a 
            border-radius unset 

.active-section
    background color-orange-institucional
    color white
    font-weight 500 
.ruc-witch-percent
    width 80%

.input-register
    &::placeholder
        color: #858585
        font-size: 1em
.icon-bg-register > svg
    color #3997DB
.input-group-register
    height 40px
.text-gray-condition
    color #858585
.text-blue-condition
    color #3997DB
.btn-secondary-register
    background #D9D9D9
    color #928383
</style>