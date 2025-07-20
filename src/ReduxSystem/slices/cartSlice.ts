import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, Product } from "../../models/models";
interface CartState {
    totalPrice: number;
    carts: CartItem[];
}

const initialState: CartState = {
    totalPrice: 0,
    carts: [],
}


export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            const existingItem = state.carts.find(item => item.id === action.payload.id)
            if (existingItem) {
                existingItem.adet += 1
            } else {
                state.carts.push({ ...action.payload, adet: 1 })
            }
            state.totalPrice = state.carts.reduce((total, item) => {
                const validPrice = item.fiyatIndirimli ?? item.fiyat
                return total += validPrice * item.adet
            }, 0)
        },
        increaseItem: (state, action: PayloadAction<string>) => {
            const currentItem = state.carts.find(item => item.id === action.payload)
            if (currentItem) {
                currentItem.adet += 1
            }
            state.totalPrice = state.carts.reduce((total, item) => {
                const validPrice = item.fiyatIndirimli ?? item.fiyat
                return total += validPrice * item.adet
            }, 0)
        },
        decreaseItem: (state, action: PayloadAction<string>) => {
            const currentItem = state.carts.find(item => item.id === action.payload)
            if (currentItem) {
                currentItem.adet -= 1
            }
            state.totalPrice = state.carts.reduce((total, item) => {
                const validPrice = item.fiyatIndirimli ?? item.fiyat
                return total += validPrice * item.adet
            }, 0)
        },
        clearCart: (state) => {
            state.carts = []
            state.totalPrice = 0
        },
        removeItem: (state, action: PayloadAction<Product>) => {
            const currentItem = state.carts.find(item => item.id === action.payload.id)
            if (currentItem) {
                state.carts.splice(state.carts.indexOf(currentItem), 1)
            }
            state.totalPrice = state.carts.reduce((total, item) => {
                const validPrice = item.fiyatIndirimli ?? item.fiyat
                return total += validPrice * item.adet
            }, 0)
        }
    }
})
export const { addToCart, increaseItem, decreaseItem, clearCart, removeItem } = cartSlice.actions
export default cartSlice.reducer