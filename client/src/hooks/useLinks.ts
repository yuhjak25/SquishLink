import { setLinks } from "../libs/links"
import { getLinks } from "../services/fetchLinks"
import { useAppDispatch } from "./useStore"

const useLinks = () => {
    const dispatch = useAppDispatch()

    const getFetchedLinks = async () => {
        try {
            const links = await getLinks()
            dispatch(setLinks(links))
        } catch (error) {
            console.error("Error fetching links:", error)
        }
    }

    return { getFetchedLinks }
}

export default useLinks
