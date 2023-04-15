<script setup lang="ts">
import headerMenu from "../components/headerMenu.vue"
import shopCategories from "../components/shopCategories.vue";
import shopBanner from "../components/shopBanner.vue"
import shopFooter from "../components/shopFooter.vue";
import todoBests from "../components/todoBest.vue";
</script>

<template>
    <div class="w-full max-w-[1310px] m-auto h-screen">
        <headerMenu></headerMenu>
        <shopBanner></shopBanner>
        <shopCategories></shopCategories>
        <todoBests/>
        <shopFooter></shopFooter>
    </div>
</template>