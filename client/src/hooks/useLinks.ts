import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "./useStore"
import { setLinks } from "../libs/links"
import { setLoading } from "../libs/handle"
import { url } from "../constants"

const useLinks = () => {
    const dispatch = useAppDispatch()
    const links = useAppSelector((state) => state.links)

    useEffect(() => {
        const fetchLinks = async () => {
            dispatch(setLoading(true))
            try {
                const res = await fetch(`${url}`)
                if (!res.ok) {
                    throw new Error("Error fetching the links.")
                }
                const data = await res.json()
                dispatch(setLinks(data))
                console.log(data)
            } catch (e) {
                console.error("Error fetching the links:", e)
            } finally {
                dispatch(setLoading(false))
            }
        }

        fetchLinks()
    }, [dispatch])


    return { links }
}

export default useLinks
