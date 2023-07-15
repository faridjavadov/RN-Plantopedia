import { createSlice } from "@reduxjs/toolkit"

interface AlarmState {
    data: Date[],
    status: 'pending' | 'fulfilled' | 'rejected' | null,
    error: any
}

const InitialState: AlarmState = {
    data: [],
    status: null,
    error: null
}

const AlarmSlice = createSlice({
    name: 'AlarmSlice',
    initialState: InitialState,
    reducers: {
        handleAlarm: (state, action) => {
            console.log(state.data);
            
            state.data.push(action.payload)
        }
    }
})

export default AlarmSlice.reducer

export const { handleAlarm } = AlarmSlice.actions

