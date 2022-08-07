import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {Props} from "../../../components/Main/Section/Experience/Company"

export const experienceSlice = createSlice({
    name: 'experience',
    initialState: [],
    reducers: {
        addExperience(state: Props[], action: PayloadAction<Props>) {
            state.push(action.payload)
        },
        removeExperience(state, action: PayloadAction<number>) {
            return state.filter((state: Props) => state.id !== action.payload)
        }
    }
})

export const {addExperience, removeExperience,} = experienceSlice.actions
export default experienceSlice.reducer
