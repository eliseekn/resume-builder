import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const skillsSlice = createSlice({
    name: 'skills',
    initialState: [],
    reducers: {
        addSkill(state, action: PayloadAction<string>) {
            state.push(action.payload)
        },
        removeSkill(state, action: PayloadAction<string>) {
            return state.filter((state) => state !== action.payload)
        }
    }
})

export const {
    addSkill,
    removeSkill,
} = skillsSlice.actions

export default skillsSlice.reducer
