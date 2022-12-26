import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Props {
    id: number,
    company: string,
    startDate: string,
    endDate: string,
    jobTitle: string,
    jobDescription: string
}

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

export const {addExperience, removeExperience} = experienceSlice.actions
export default experienceSlice.reducer
