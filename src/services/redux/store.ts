import {configureStore} from "@reduxjs/toolkit"
import headerReducer from "./reducers/headerReducer"
import skillsReducer from "./reducers/skillsReducer"
import experienceReducer from "./reducers/experienceReducer"
import educationReducer from "./reducers/educationReducer"
import aboutReducer from "./reducers/aboutReducer"
import certificationReducer from "./reducers/certificationReducer"
import sectionsReducer from "./reducers/sectionsReducer"
import languageReducer from "./reducers/languageReducer";

export const store = configureStore({
    reducer: {
        header: headerReducer,
        skills: skillsReducer,
        experience: experienceReducer,
        education: educationReducer,
        about: aboutReducer,
        certification: certificationReducer,
        sections: sectionsReducer,
        language: languageReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
