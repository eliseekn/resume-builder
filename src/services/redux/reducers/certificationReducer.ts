import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {Props} from "../../../components/Main/Section/Certification/Organization"

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
