import {configureStore} from "@reduxjs/toolkit"
import HeaderReducer from "./reducers/headerReducer";
import SkillsReducer from "./reducers/skillsReducer";
import ExperienceReducer from "./reducers/experienceReducer";
import EducationReducer from "./reducers/educationReducer";
import AboutReducer from "./reducers/aboutReducer";

export const store = configureStore({
    reducer: {
        header: HeaderReducer,
        skills: SkillsReducer,
        experience: ExperienceReducer,
        education: EducationReducer,
        about: AboutReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
