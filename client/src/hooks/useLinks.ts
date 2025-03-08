import { setLinks } from "../libs/links"
import { getLinks } from "../services/fetchLinks"
import { useAppDispatch } from "./useStore"

const useLinks = () => {
    const dispatch = useAppDispatch()

    const getFetchedLinks = async () => {
        try {
            const res = await getLinks()
            dispatch(setLinks(res))
        } catch (error) {
            console.error("Error fetching links:", error)
        }
    }

    return { getFetchedLinks }
}

export default useLinks
