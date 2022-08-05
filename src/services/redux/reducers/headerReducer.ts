import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const headerSlice = createSlice({
    name: 'header',
    initialState: {
        fullName: '',
        emailAddress: '',
        jobTitle: '',
        location: '',
        phoneNumber: '',
        portfolioUrl: ''
    },
    reducers: {
        setFullNane(state, action: PayloadAction<string>) {
            state.fullName = action.payload
        },
        setEmailAddress(state, action: PayloadAction<string>) {
            state.emailAddress = action.payload
        },
        setJobTitle(state, action: PayloadAction<string>) {
            state.jobTitle = action.payload
        },
        setLocation(state, action: PayloadAction<string>) {
            state.location = action.payload
        },
        setPhoneNumber(state, action: PayloadAction<string>) {
            state.phoneNumber = action.payload
        },
        setPortfolioUrl(state, action: PayloadAction<string>) {
            state.portfolioUrl = action.payload
        },
    }
})

export const {
    setFullNane,
    setEmailAddress,
    setJobTitle,
    setLocation,
    setPhoneNumber,
    setPortfolioUrl
} = headerSlice.actions

export default headerSlice.reducer