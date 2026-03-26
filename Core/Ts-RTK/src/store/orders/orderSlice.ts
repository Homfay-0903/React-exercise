import { createSlice } from "@reduxjs/toolkit";

interface OrderState {
    orderCount: number
}

const initialState: OrderState = {
    orderCount: 0
}

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        increment: (state) => { state.orderCount += 1 }
    }
})

export const { increment } = orderSlice.actions
export default orderSlice