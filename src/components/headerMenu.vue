<script setup lang="ts">
import { ref } from 'vue'
import { cart } from '../store/store'
import { storeToRefs } from 'pinia'


const { items } = storeToRefs(cart())
const categoryMenu = ref(false)
const basketMenu = ref(false)


const categoryClass = ref({ transform: 'rotate(180deg)' })

const categoryReloat = () => {
    categoryMenu.value = !categoryMenu.value
    const categoryIcon = document.querySelector('.categoryIcon');
    categoryIcon.classList.toggle('rotate');
}

const basketReloat = () => {
    basketMenu.value = !basketMenu.value
}

</script>

<template>
    <div class="headerRes flex m-auto justify-between items-center px-[30px] py-[15px] font-medium">
        <div>
            <router-link to="/"><img src="../public/63e86ab4c21faa7bc0bd90dd_Logo.svg" alt="LOGO"></router-link>
        </div>

        <div class="headerNav flex items-center justify-center">
            <span class="flex items-center justify-center relative" @click="categoryReloat">
                <router-link class="categoryNav" to="">Category</router-link>
                <img :categoryClass="{ 'categoryIcon': 'true' }" class="categoryIcon w-[15px] h-[15px] ml-[5px]"
                    src="../public/Arrow - Down 2.svg">

                <div v-if="categoryMenu == true"
                    class="z-50 categoryDetails w-[695px] absolute p-[20px] px-[30px] left-0 bg-white bg- top-[47px] border-gray-100 border-[1px] rounded-[20px]">
                    <h1 class="pb-5 font-semibold">Popular Categories</h1>
                    <div class="bg-gray-300 h-[1px] w-full"></div>
                    <div class="pt-6 flex flex-wrap gap-[25px] items-center justify-center">
                        <div
                            class="categoryItems w-[300px] h-[70px] rounded-[5px] p-2 bg-[rgb(245,246,246)] flex items-center">
                            <img src="../public/Arrow - Down 2.svg" class="h-[60px] w-[60px] mr-[15px] bg-black rounded-sm">
                            <div>
                                <h1 class="categoryTitle">Furniture</h1>
                                <p class="font-light">240 Item Available</p>
                            </div>
                        </div>

                        <div
                            class="categoryItems w-[300px] h-[70px] rounded-[5px] p-2 bg-[rgb(245,246,246)] flex items-center">
                            <img src="../public/Arrow - Down 2.svg" class="h-[60px] w-[60px] mr-[15px] bg-black rounded-sm">
                            <div>
                                <h1 class="categoryTitle">Furniture</h1>
                                <p class="font-light">240 Item Available</p>
                            </div>
                        </div>

                        <div
                            class="categoryItems w-[300px] h-[70px] rounded-[5px] p-2 bg-[rgb(245,246,246)] flex items-center">
                            <img src="../public/Arrow - Down 2.svg" class="h-[60px] w-[60px] mr-[15px] bg-black rounded-sm">
                            <div>
                                <h1 class="categoryTitle">Furniture</h1>
                                <p class="font-light">240 Item Available</p>
                            </div>
                        </div>

                        <div
                            class="categoryItems w-[300px] h-[70px] rounded-[5px] p-2 bg-[rgb(245,246,246)] flex items-center">
                            <img src="../public/Arrow - Down 2.svg" class="h-[60px] w-[60px] mr-[15px] bg-black rounded-sm">
                            <div>
                                <h1 class="categoryTitle">Furniture</h1>
                                <p class="font-light">240 Item Available</p>
                            </div>
                        </div>
                    </div>

                </div>
            </span>
            <router-link class="ml-5" to="">Deals</router-link>
            <router-link class="ml-5" to="">What's New</router-link>
            <router-link class="ml-5" to="">Delivery</router-link>
        </div>

        <div class="headerSearch">
            <input class="SearchInput" placeholder="Search Product" type="text">
            <img class="searchIcon" src="../public/Search.svg" alt="Search">
        </div>

        <div class="flex items-center justify-center gap-[25px]">
            <span class="flex headerAccount">
                <img class="mr-[10px]" src="../public/63eb3dec9d6ee83660ebe1de_user.png" alt="Account">
                <router-link to="">Account</router-link>
            </span>

            <span>
                <span @click="basketReloat" class="flex">
                    <img class="mr-[10px]" src="../public/63eb3dec9b865e78d4ff6b8d_shopping-cart-add.png" alt="Cart">
                    <router-link to="">Basket
                    </router-link>
                </span>
                <div v-if="basketMenu == true"
                    class="z-[999] categoryDetails mr-[20px] w-[450px] mt-[25px] absolute p-[20px] px-[30px] right-0 bg-white bg- top-[47px] border-gray-100 border-[1px] rounded-[20px]">
                    <h1 class="pb-5 font-semibold">Products in Basket</h1>
                    <div class="bg-gray-300 h-[1px] w-full"></div>
                    <div>
                        <div class="pt-2 flex flex-wrap gap-[5px] items-center justify-center" :key="item.id"
                            v-for="item in items">
                            <div class="relative w-full h-[70px] rounded-[5px] p-2 bg-[rgb(245,246,246)] flex items-center">
                                <img :src="item.image" class="h-[60px] w-[60px] mr-[15px] rounded-sm">
                                <div class="flex items-center mx-[15px] w-[150px]">
                                    <h1 class="categoryTitle">{{ item.name }}</h1>
                                </div>
                                <div class="mr-[10px] absolute right-0 flex items-center">
                                    <p class="font-light mr-[20px]">{{ item.price }}</p>
                                    <div class="flex flex-col items-center mr-[15px] w-[30px]">
                                        <button @click="countPlus = item.quantitiy++">+</button>
                                        <p>{{ item.quantitiy }}</p>
                                        <button @click="countMinus = item.quantitiy--">-</button>
                                    </div>
                                    <img class="w-[19px]" src="../public/Delete.svg" alt="Delete">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </span>

            <span class="menu">
                <img src="../public/menu.svg" alt="menu">
            </span>
        </div>
    </div>
    <RouterView />
</template>

<style scoped>
.categoryItems:hover .categoryTitle {
    color: rgb(37, 99, 235);
}

.categoryIcon {
    transform: rotate(180deg);
    transition: all ease 250ms;
}

.rotate {
    transform: rotate(0deg);
    transition: all ease 250ms;
}

.SearchInput {
    border: 1px solid rgb(219, 219, 219);
    border-radius: 30px;
    width: 280px;
    height: 40px;
    padding: 10px 15px 10px 15px;
    overflow: none;
    outline: none;
}

.headerSearch {
    position: relative;
    display: flex;
}

.searchIcon {
    position: absolute;
    right: 15px;
    top: 7px;
    opacity: 0.6;
}

.menu {
    display: none;
}

@media screen and (max-width: 992px) {
    .menu {
        display: block;
    }

    .headerSearch {
        display: none;
    }

    .headerNav {
        display: none;
    }
}

@media screen and (max-width: 475px) {
    .headerAccount {
        display: none;
    }

    .headerCart {
        display: none;
    }
}
</style>