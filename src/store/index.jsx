import { configureStore } from '@reduxjs/toolkit'
import  isLoadingSlice  from './slices/isLoading.slice'
import  purchaseSlice  from './slices/purchase.slice'
import  cartSlice  from './slices/cart.slice'
import  productSlice  from './slices/products.slice'


export default configureStore({
    reducer: {
        isLoading: isLoadingSlice,
        products: productSlice,
        purchases: purchaseSlice,
        cart: cartSlice
    }
})
