<template>
    <div class="w-full px-[15px]">
        <hr>
        <div class="footerUpper flex gap-[50px] mb-[50px] mt-[80px] items-center justify-center w-full">
            <div class="LogoFooter w-[450px]">
                <div class="mb-[12px]"><img src="../public/63e86ab4c21faa7bc0bd90dd_Logo.svg" alt="Logo"></div>
                <div>
                    <h3 class="font-light flex-wrap flex">Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                        amet sint. Velit
                        officia consequat
                        duis enim velit mollit.</h3>
                </div>
            </div>

            <div class="flex gap-[50px] footerList">
                <div class="gap-y-10 font-light text-gray-700 min-w-[100px]">
                    <h1 class="font-bold mb-[30px]">Department</h1>
                    <div class="flex flex-col gap-[5px]">
                        <a href="">Fashion</a>
                        <a href="">Education Product</a>
                        <a href="">Frozen Food</a>
                        <a href="">Beverages</a>
                        <a href="">Organic Grocery</a>
                        <a href="">Office Supplies</a>
                        <a href="">Beauty Products</a>
                        <a href="">Books</a>
                        <a href="">Electronics & Gadget</a>
                        <a href="">Fitness</a>
                        <a href="">Sneakers</a>
                        <a href="">Toys</a>
                        <a href="">Furniture</a>
                    </div>
                </div>

                <div class="gap-y-10 font-light text-gray-700 min-w-[100px]">
                    <h1 class="font-bold mb-[30px]">About Us</h1>
                    <div class="flex flex-col gap-[5px]">
                        <a href="">About Shopcart</a>
                        <a href="">Careers</a>
                        <a href="">News & Blog</a>
                        <a href="">Help</a>
                        <a href="">Press Center</a>
                        <a href="">Shop By Location</a>
                        <a href="">Shopcart Brands</a>
                        <a href="">Affiliate & Partners</a>
                        <a href="">Ideas & Guides</a>
                    </div>
                </div>

                <div class="gap-y-10 font-light text-gray-700 min-w-[100px]">
                    <h1 class="font-bold mb-[30px]">Services</h1>
                    <div class="flex flex-col gap-[5px]">
                        <a href="">Gift Card</a>
                        <a href="">Mobile App</a>
                        <a href="">Shipping & Delivery</a>
                        <a href="">Order Pickup</a>
                        <a href="">Organic Grocery</a>
                        <a href="">Account Signup</a>
                    </div>
                </div>

                <div class="gap-y-10 font-light text-gray-700 min-w-[100px]">
                    <h1 class="font-bold mb-[30px]">Help</h1>
                    <div class="flex flex-col gap-[5px]">
                        <a href="">Shopcart Help</a>
                        <a href="">Returns</a>
                        <a href="">Track Orders</a>
                        <a href="">Contact Us</a>
                        <a href="">Feedback</a>
                        <a href="">Security & Fraud</a>
                    </div>
                </div>
            </div>
        </div>

        <hr>

        <div class="footerUnder flex items-center justify-between mt-[50px]">
            <div class="flex items-center justify-center gap-[20px]">
                <div class="footerUnderIcon flex items-center gap-[10px]">
                    <img src="../public/63eb0ed6e927bdf5bc4309e0_briefcase.svg" alt="becomeSeller">
                    <a href="">
                        <h1>Become Seller</h1>
                    </a>
                </div>

                <div class="footerUnderIcon flex items-center gap-[10px]">
                    <img src="../public/63eb0ed6c4510c256356f4cd_gift.svg" alt="becomeSeller">
                    <a href="">
                        <h1>Gift Cards</h1>
                    </a>
                </div>

                <div class="footerUnderIcon flex items-center gap-[10px]">
                    <img src="../public/63eb0ed6ae57fd74e0402aa4_help-circle.svg" alt="becomeSeller">
                    <a href="">
                        <h1>Help Center</h1>
                    </a>
                </div>
            </div>

            <div>
                <a class="mr-[30px]" href="">Terms of Service</a>
                <a href="">Privacy & Policy</a>
            </div>
        </div>
        <div class="text-center pb-[30px] mt-[30px]">
            <h1>All Right reserved by Musemind | 2022</h1>
        </div>
    </div>
</template>

<style scoped>
@media screen and (max-width: 992px) {
    .footerUpper {
        flex-wrap: wrap;
        flex-direction: column;
    }

    .footerList {
        flex-wrap: wrap;
        display: flex;
    }

    .footerUnder {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .footerUnderIcon {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
}

@media screen and (max-width: 475px) {
    .LogoFooter {
        display: none;
    }

    .footerUnder {
        display: none;
    }
}
</style>