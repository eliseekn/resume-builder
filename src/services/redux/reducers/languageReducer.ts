import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const languageSlice = createSlice({
    name: 'language',
    initialState: 'en',
    reducers: {
        setLanguage(state, action: PayloadAction<string>) {
            return action.payload
        }
    }
})

export const {setLanguage} = languageSlice.actions
export default languageSlice.reducer