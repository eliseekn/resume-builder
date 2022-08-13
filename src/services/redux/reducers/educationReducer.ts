import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Props {
    id: number,
    school: string,
    degree: string
    endDate: string,
    startDate: string,
}

export const educationSlice = createSlice({
    name: 'education',
    initialState: [],
    reducers: {
        addEducation(state: Props[], action: PayloadAction<Props>) {
            state.push(action.payload)
        },
        removeEducation(state, action: PayloadAction<number>) {
            return state.filter((state: Props) => state.id !== action.payload)
        }
    }
})

export const {addEducation, removeEducation,} = educationSlice.actions
export default educationSlice.reducer
