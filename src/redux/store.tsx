'use cliient'

import { configureStore } from '@reduxjs/toolkit'
import Reactotron from '@/src/ReactotronConfig'
import thunkMiddleware from 'redux-thunk'

import counterReducer from './features/counter'
import pokedexReducer from './features/pokemon'

export const store = configureStore({
    reducer: {
        counterReducer,
        pokedexReducer
    },
    middleware: (getDefaultMiddleware) => {
        const middleware = [thunkMiddleware];
        // const loggerMiddleware = createLogg
        // Use Reactotron middleware in development mode
        if (process.env.NODE_ENV === 'development') {
            // const reactotronEnchancer: any = Reactotron.createEnhancer
            // console.log(reactotronEnchancer)
            // middleware.push(reactotronEnchancer); // Add Reactotron middleware to the stack
        }
    
        return middleware;
    },
    devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch