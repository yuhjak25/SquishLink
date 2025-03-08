import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "./useStore"
import { setLinks } from "../libs/links"
import { url } from "../constants"

const useLinks = () => {
    const dispatch = useAppDispatch()
    const links = useAppSelector((state) => state.links)

    useEffect(() => {
        const fetchLinks = async () => {
            try {
                const res = await fetch(`${url}`)
                if (!res.ok) {
                    throw new Error("Error fetching the links.")
                }
                const data = await res.json()
                dispatch(setLinks(data))
            } catch (e) {
                console.error("Error fetching the links:", e)
            }
        }

        fetchLinks()
    }, [dispatch])


    return { links }
}

export default useLinks
