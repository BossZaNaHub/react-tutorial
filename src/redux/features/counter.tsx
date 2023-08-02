import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type CounterState = {
    value: number
}

const initialState = {
    value: 0,
    status: 'init',
    error: null,
} as CounterState

export const counter = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increase: (state) => {
            state.value += 1
        },
        decrease: (state) => {
            state.value -= 1
        },
        increaseByValue: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
        reset: () => initialState,
    }
})

export const { increase, decrease, increaseByValue, reset } = counter.actions

export default counter.reducer