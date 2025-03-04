import { setLinks } from "../libs/links"
import { fetchLinks } from "../services/fetch"
import { useAppDispatch } from "./useStore"

const useLinks = () => {
    const dispatch = useAppDispatch()

    const getFetchLinks = async () => {
        const res = await fetchLinks()
        dispatch(setLinks(res))
        return res
    }

    return { getFetchLinks }
}

export default useLinks