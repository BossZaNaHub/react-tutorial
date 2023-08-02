import { createAsyncThunk } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import axios from "axios";

const pokeDexurl = process.env.POKEMON_API_URL

export const PokedexListApi = createAsyncThunk(
    'pokedex/fetchAll',
    async () => {
        const response = await axios.get(`${pokeDexurl}/pokemon`)
        return response.data
    }
)

export const PokedexFindPokemon = createApi({
    reducerPath: 'pokedex/find',
    baseQuery: fetchBaseQuery({baseUrl: `${pokeDexurl}/pokemon`}),
    endpoints: (builder) => ({
        findByName: builder.query<any, string>({
            query: (name: string) => `/${name}`
        }),
    }),
})

// export const { usePokedexFindPokemon } = PokedexFindPokemon
// export const { usePokedexListPokemon } = PokedexListApi