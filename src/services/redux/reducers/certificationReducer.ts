import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Props {
    id: number,
    name: string,
    organization: string
    issueDate: string,
}

export const certificationSlice = createSlice({
    name: 'certification',
    initialState: [],
    reducers: {
        addCertification(state: Props[], action: PayloadAction<Props>) {
            state.push(action.payload)
        },
        removeCertification(state, action: PayloadAction<number>) {
            return state.filter((state: Props) => state.id !== action.payload)
        }
    }
})

export const {addCertification, removeCertification,} = certificationSlice.actions
export default certificationSlice.reducer
