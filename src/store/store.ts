import AirpodMax from '../public/todaysBest/63e8c4e4aed3c6720e446aa1_airpod max-min.png'
import FlowerLeptopSleeve from '../public/todaysBest/63e8c4e55cc9361a8ecce6d4_flower leptop sleeve-min.png'
import HomepadMini from '../public/todaysBest/63e8c4e563db5507951bbfbe_homepad-mini-min.png'
import LeptopSleeve from '../public/todaysBest/63e8c4e68b497e229146b818_leptop sleeve-min.png'
import LeptopSleeveMacbook from '../public/todaysBest/63e8c4e563db5560c31bbfce_leptop sleeve macbook-min.png'
import Macbook13 from '../public/todaysBest/63e8c4e61eb4ad4af6e75689_macbook 13-min.png'
import WaterPot from '../public/todaysBest/63e8c4e78b497e3a5646b82f_water pot-min.png'
import { defineStore } from 'pinia'
import iPadMini from '../public/todaysBest/63e8c4e64bd907adafd35b46_ipad mini-min.png'
import { reactive } from 'vue'

export interface ShopProduct {
    id: number,
    name: string,
    price: number,
    image: string,
    starRate: number,
    description: string,
    quantity: number
}

export interface products {
    id: number,
    name: string,
    price: number,
    isFav: boolean,
    image: string,
    starRate: number,
    description: string,
    quantity: number
}

export const products: products[] = [
    { id: 1, name: 'Airpods Max', price: 59.00, isFav: false, image: AirpodMax, starRate: 121, description: 'A perfect balance of high-fidelity audio', quantity: 1 },
    { id: 2, name: 'Laptop Sleeve MacBook', price: 59.00, isFav: false, image: LeptopSleeveMacbook, starRate: 121, description: 'Organic Cotton, fairtrade certified', quantity: 1 },
    { id: 3, name: 'MacBook Pro 13"', price: 1099.00, isFav: false, image: Macbook13, starRate: 121, description: '256, 8 core GPU, 8 GB', quantity: 1 },
    { id: 4, name: 'HomePod Mini', price: 59.00, isFav: false, image: HomepadMini, starRate: 121, description: '5 Colors Available', quantity: 1 },
    { id: 5, name: 'Ipad Mini', price: 532.00, isFav: false, image: iPadMini, starRate: 121, description: 'Table with air purifier, stained veneer/black', quantity: 1 },
    { id: 6, name: 'Supreme Water Bottle', price: 19.00, isFav: false, image: WaterPot, starRate: 121, description: 'Table with air purifier, stained veneer/black', quantity: 1 },
    { id: 7, name: 'Flower Laptop Sleeve', price: 39.00, isFav: false, image: FlowerLeptopSleeve, starRate: 121, description: '15 in. x 10 in. -Flap top closure', quantity: 1 },
    { id: 8, name: 'Laptop Sleeve MacBook', price: 59.00, isFav: false, image: LeptopSleeve, starRate: 121, description: 'Organic Cotton, fairtrade certified', quantity: 1 },
]


export const cart = defineStore({
    id: 'cart',
    state: () => ({
        items: [] as ShopProduct[],
        
    }),
    actions: {
        productToAdd(product: any) {
            const foundIndex = this.items.findIndex(item => item.id === product.id);
            console.log(foundIndex)
            if (foundIndex === -1) {
                this.items.push(product)
            } else {
                this.items[foundIndex].quantity++;
            }            
        },

        productDelete(item: any) {
            console.log(item)
            this.items = this.items.filter((e) => e.id !== item.id)
        }
    },
    persist: true
})