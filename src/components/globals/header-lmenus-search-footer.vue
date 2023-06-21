<script setup lang="ts">
import Header from "@/components/globals/header.vue"
import ThreeHeader from "@/components/globals/header-menus.vue"
import Footer from "@/components/globals/footer.vue"

</script>
<template lang="pug">
Header
ThreeHeader
.container.p-0
    slot
Footer
</template>