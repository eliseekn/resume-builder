import {fr} from './fr'
import {en} from './en'
import {useAppSelector} from "../services/redux/hooks"
import {RootState} from "../services/redux/store"

export default function __(content: string) {
    const language = useAppSelector<string>((state: RootState) => state.language)

    if (language === 'fr') return fr[content]
    return en[content]
}
