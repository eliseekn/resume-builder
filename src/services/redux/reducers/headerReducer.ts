import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Props {
    fullName: string,
    emailAddress: string,
    jobTitle: string,
    location: string,
    phoneNumber: string,
    portfolioUrl: string
}

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
        setHeader(state: Props, action: PayloadAction<{}>) {
            return Object.assign(state, action.payload)
        }
    }
})

export const {setHeader} = headerSlice.actions
export default headerSlice.reducer