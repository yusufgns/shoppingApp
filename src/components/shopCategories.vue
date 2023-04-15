<template>
    <h1 class="categoryTitle font-bold text-[28px] mb-[5px] mt-[100px] px-[30px]">Shop Our Top Categories</h1>
    <div
        class="categoriesHover justify-center categoryList flex-wrap w-full mt-[30px] mb-[45px] flex max-w-[1310px] px-[30px] py-[15px] gap-[10px]">

        <div class="categoriesMenu flex gap-[10px]">
            <div class="imageCont overflow-hidden relative rounded-lg">
                <h1 class="absolute z-20 w-full text-center top-2 font-medium text-[24px] text-white">Travel</h1>
                <img class="imgS rounded-lg" src="../public/categories/categori-01.png">
            </div>

            <div class="imageCont overflow-hidden relative rounded-lg">
                <h1 class="absolute z-20 w-full text-center top-2 font-medium text-[24px] text-white">Sneakers</h1>
                <img class="imgS rounded-lg" src="../public/categories/categori-02.png">
            </div>

            <div class="imageCont overflow-hidden relative rounded-lg">
                <h1 class="absolute z-20 w-full text-center top-2 font-medium text-[24px] text-white">Tech</h1>
                <img class="imgS rounded-lg" src="../public/categories/categori-03.png">
            </div>

            <div class="imageCont overflow-hidden relative rounded-lg">
                <h1 class="absolute z-20 w-full text-center top-2 font-medium text-[24px] text-white">Books</h1>
                <img class="imgS rounded-lg" src="../public/categories/categori-04.png">
            </div>

            <div class="imageCont overflow-hidden relative rounded-lg">
                <h1 class="absolute z-20 w-full text-center top-2 font-medium text-[24px] text-white">Hand Bag
                </h1>
                <img class="imgS rounded-lg" src="../public/categories/categori-05.png">
            </div>

            <div class="imageCont overflow-hidden relative rounded-lg">
                <h1 class="absolute z-20 w-full text-center top-2 font-medium text-[24px] text-white">Furniture</h1>
                <img class="imgS rounded-lg" src="../public/categories/categori-06.png">
            </div>
        </div>

    </div>
</template>

<style scoped>
.imageCont:hover img {
    transform: scale(1.2);
    transition: all 250ms ease-in-out;
}

.categoriesHover img,
h1 {
    transition: all 250ms ease-in-out;
}

@media screen and (max-width: 292px) {
    .categoryTitle {
        font-size: 16px;
    }
}

@media screen and (min-width: 855px) {

    .categoriesMenu {
        width: 788px;
        flex-wrap: wrap;
        transition: all 250ms ease-in-out;
    }

    .imageCont img,
    .imageCont,
    .imageCont h1,
    .imgS {
        width: 256px;
    }
}

@media screen and (min-width: 1286px) {
    .categoriesMenu {
        width: 1420px;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        transition: all 250ms ease-in-out;
    }

    .imageCont img,
    .imageCont,
    .imageCont h1,
    .imgS {
        width: 196px;
    }
}

@media screen and (max-width: 855px) {
    .categoryTitle {
        font-size: 20px;
        margin-bottom: -30px;
        transition: all 250ms ease-in-out;
    }

    .categoriesMenu {
        width: 788px;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        transition: all 250ms ease-in-out;
    }

    .imageCont img,
    .imageCont,
    .imageCont h1,
    .imgS {
        width: 196px;
    }
}</style>