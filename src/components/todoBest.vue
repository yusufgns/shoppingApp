<script setup lang="ts">
import { products, cart } from '../store/store'
import { ref } from 'vue'
import { storeToRefs } from 'pinia'

const store = cart()
const sotreActions = storeToRefs(store)
const storeToBasket = (product: object) => {
    store.productToAdd(product)
}
</script>

<template>
    <h1 class="categoryTitle font-bold text-[28px] mb-[5px] mt-[100px] px-[30px]">Shop Our Top Categories</h1>
    <div class="flex flex-wrap gap-[15px] justify-center mt-[50px] mb-[150px]">
        <div class="productList" :key="product.id" v-for="product in products">
            <div class="w-[300px]">
                <div class="flex items-center justify-center bg-[#F5F6F6] rounded-2xl">
                    <img :src="product.image" :alt="product.name">
                </div>
                <div class="mt-[10px] w-[300px]">
                    <div class="flex w-full justify-between font-bold px-[5px] text-[18px]">
                        <p>{{ product.name }}</p>
                        <p>{{ product.price }}</p>
                    </div>

                    <div class="my-[5px] px-[5px] opacity-80 text-[14px] break-words">
                        <p>{{ product.description }}</p>
                    </div>

                    <div class="flex gap-[2px] mt-[10px] px-[5px] items-center">
                        <img src="../public/63e9d9ee08987e0ffb064bca_Star.svg">
                        <img src="../public/63e9d9ee08987e0ffb064bca_Star.svg">
                        <img src="../public/63e9d9ee08987e0ffb064bca_Star.svg">
                        <img src="../public/63e9d9ee08987e0ffb064bca_Star.svg">
                        <img src="../public/63e9d9ee08987e0ffb064bca_Star.svg">

                        <p class="ml-[10px]">({{ product.starRate }})</p>
                    </div>
                </div>
                <div class="mt-[10px]" @click="storeToBasket(product)">
                    <p class="border border-black font-semibold w-fit py-[5px] px-[18px] rounded-2xl">Add to Cart</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.productList:hover img {
    transform: scale(1.06);
    transition: ease-in-out 180ms;
}

.productList img {
    transition: ease-out 180ms;
}
</style>