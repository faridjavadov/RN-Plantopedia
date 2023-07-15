import { createStore } from "redux";
import {configureStore, } from "@reduxjs/toolkit";
import PlantsSlicer from "../slicers/PlantsSlicer";
import alarmSlicer from "../slicers/alarmSlicer";

export const store = configureStore({
    reducer:{
        PlantsSlicer:PlantsSlicer,
        AlarmSlice:alarmSlicer
    }
})
export type AppDispatch = typeof store.dispatch
export type StateType = ReturnType<typeof store.getState>