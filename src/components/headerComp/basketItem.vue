<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { } from 'vue'
import { products, cart } from '../../store/store'


const store = cart()
const basket = storeToRefs(store)

</script>

<template>
    <div>
        <div
            class="z-[999] categoryDetails mr-[20px] w-[450px] mt-[25px] absolute p-[20px] px-[30px] right-0 bg-white bg- top-[47px] border-gray-100 border-[1px] rounded-[20px]">
            <h1 class="pb-5 font-semibold">Products in Basket</h1>
            <div class="bg-gray-300 h-[1px] w-full"></div>
            {{ store.items }}
            <div>
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
                                <button @click="item.quantitiy++">+</button>
                                <p>{{ item.quantitiy }}</p>
                                <button @click="item.quantitiy--">-</button>
                            </div>
                            <img class="w-[19px]" src="../public/Delete.svg" alt="Delete">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>