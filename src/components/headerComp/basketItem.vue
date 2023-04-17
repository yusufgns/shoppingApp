<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { computed, inject, provide, reactive } from 'vue'
import { products, cart } from '../../store/store'


const store = cart()
const basket = storeToRefs(store)

const basketDelete = (item: object) => {
    store.productDelete(item)
}

</script>

<template>
    <div
        class="z-[999] mt-[24px] categoryDetails w-[450px] absolute right-[-30px] p-[20px] px-[30px] bg-white bg- top-[25px] border-gray-100 border-[1px] rounded-[20px]">
        <div class="flex justify-between">
            <h1 class="pb-5 font-semibold">Products in Basket</h1>
        </div>
        <div class="bg-gray-300 h-[1px] w-full"></div>
        <div>
            <div v-if="store.items.length == 0" class="mt-[15px] text-center">You haven't added any products yet</div>
            <div class="pt-2 flex flex-wrap gap-[5px] items-center justify-center" :key="item.id"
                v-for="item in store.items">
                <div class="relative w-full h-[70px] rounded-[5px] p-2 bg-[rgb(245,246,246)] flex items-center">
                    <img :src="item.image" class="h-[60px] w-[60px] mr-[15px] rounded-sm">
                    <div class="flex items-center mx-[15px] w-[150px]">
                        <h1 class="categoryTitle">{{ item.name }}</h1>
                    </div>
                    <div class="mr-[10px] absolute right-0 flex items-center">
                        <p class="font-semibold mr-[20px]">${{ item.price }}</p>
                        <div class="flex flex-col items-center mr-[15px] w-[30px]">
                            <button @click="item.quantity++">+</button>
                            <p>{{ item.quantity }}</p>
                            <button @click="item.quantity--">-</button>
                        </div>
                        <img class="w-[19px]" src="../../public/Delete.svg" alt="Delete" @click="basketDelete(item)">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>