import { useEffect } from "react"
import { setLinks } from "../libs/links"
import { useAppDispatch } from "./useStore"
import { url } from "../constants"

const useLinks = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        const fetchLinks = async () => {
            try {
                const res = await fetch(`${url}`)
                if (!res.ok) {
                    throw new Error("Error fetching the links.")
                }
                const data = await res.json()
                dispatch(setLinks(data))
                console.log(data)
                return data
            } catch (e) {
                console.error("Error fetching the links:", e)
                return []
            }
        }

        fetchLinks()
    }, [dispatch])

    return {}
}

export default useLinks
