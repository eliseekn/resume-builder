import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const aboutSlice = createSlice({
    name: 'about',
    initialState: '',
    reducers: {
        setAbout(state, action: PayloadAction<string>) {
            return action.payload
        }
    }
})

export const {setAbout} = aboutSlice.actions
export default aboutSlice.reducer