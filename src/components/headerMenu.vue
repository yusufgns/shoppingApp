<script setup lang="ts">
import { ref } from 'vue'
import { cart, products } from '../store/store'
import { storeToRefs } from 'pinia'

//component
import basketItem from './headerComp/basketItem.vue'
import popularCategories from './headerComp/popularCategories.vue'
const store = cart()

const popularCategoryList = ref(false)
const basketItemOn = ref(false)

const basketItemOnOff = () => {
    basketItemOn.value = !basketItemOn.value
}
const popularCategoriesOnOff = () => {
    popularCategoryList.value = !popularCategoryList.value
}
</script>

<template>
    <div class="headerRes flex m-auto justify-between items-center px-[30px] py-[15px] font-medium">
        <div>
            <router-link to="/"><img src="../public/63e86ab4c21faa7bc0bd90dd_Logo.svg" alt="LOGO"></router-link>
        </div>

        <div class="headerNav flex items-center justify-center">
            <span class="flex items-center justify-center relative" @click="popularCategoriesOnOff">
                <router-link class="categoryNav" to="">Category</router-link>
                <img class="w-[15px] h-[15px] ml-[5px]"
                    src="../public/Arrow - Down 2.svg">
                <popular-categories v-if="popularCategoryList == true"></popular-categories>
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

            <div class="relative headerCart">
                <span class="flex" @click="basketItemOnOff">
                    <img class="mr-[10px]" src="../public/63eb3dec9b865e78d4ff6b8d_shopping-cart-add.png" alt="Cart">
                    <router-link to="">Basket</router-link>
                </span>
                <basketItem v-if="basketItemOn == true"></basketItem>
            </div>

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