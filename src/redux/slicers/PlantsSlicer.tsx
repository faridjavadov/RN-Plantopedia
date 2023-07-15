import { createSlice } from "@reduxjs/toolkit"

interface PlantState {
    data: any,
    plant: any,
    favorites: any,
    category: String,
    status: 'pending' | 'fulfilled' | 'rejected' | null,
    error: any
}

const InitialState: PlantState = {
    data: [],
    category: 'default',
    plant: {},
    favorites: [],
    status: null,
    error: null
}

const PlantSlice = createSlice({
    name: 'PlantSlice',
    initialState: InitialState,
    reducers: {
        handleFavorite: (state, action) => {
            if (state.favorites.find((c: any) => c.id == action.payload.id)) {
                state.favorites = state.favorites.filter((c: any) => c.id != action.payload.id)
            }
            else {
                state.favorites.push(action.payload)
            }

        },
        handleCategory: (state, action) => {
            console.log(state.category);
            
            if(state.category=='default'){
                state.category = action.payload
            }
            else{
                state.category='default'
            }
        }
    }
})

export default PlantSlice.reducer

export const { handleFavorite,handleCategory } = PlantSlice.actions

