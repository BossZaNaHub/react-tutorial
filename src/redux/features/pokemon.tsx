import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type PokeMonsterState = {
    data: Array<any>,
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: string | null,
}

const initialState: PokeMonsterState = {
    data: [],
    status: 'idle',
    error: null,
}

export const pokedex = createSlice({
    name: 'pokedex',
    initialState,
    reducers: {
        find: (state) => {
            
        },
        all: () => {

        }
    }
})

export const { find, all } = pokedex.actions

export default pokedex.reducer