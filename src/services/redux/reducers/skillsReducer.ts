import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const skillsSlice = createSlice({
    name: 'skill',
    initialState: [],
    reducers: {
        addSkill(state: string[], action: PayloadAction<string>) {
            state.push(action.payload)
        },
        removeSkill(state, action: PayloadAction<string>) {
            return state.filter((state: string) => state !== action.payload)
        }
    }
})

export const {addSkill, removeSkill,} = skillsSlice.actions
export default skillsSlice.reducer
