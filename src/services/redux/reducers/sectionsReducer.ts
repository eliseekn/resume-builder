import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const sectionsSlice = createSlice({
    name: 'section',
    initialState: [],
    reducers: {
        addSection(state: string[], action: PayloadAction<string>) {
            state.push(action.payload)
        },
        removeSection(state, action: PayloadAction<string>) {
            return state.filter((state: string) => state !== action.payload)
        }
    }
})

export const {addSection, removeSection,} = sectionsSlice.actions
export default sectionsSlice.reducer
