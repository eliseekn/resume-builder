import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {Props} from "../../../components/Main/Section/Education/School"

export const educationSlice = createSlice({
    name: 'education',
    initialState: [],
    reducers: {
        addEducation(state, action: PayloadAction<Props>) {
            state.push(action.payload)
        },
        removeEducation(state, action: PayloadAction<number>) {
            return state.filter((state) => state.id !== action.payload)
        }
    }
})

export const {addEducation, removeEducation,} = educationSlice.actions
export default educationSlice.reducer
