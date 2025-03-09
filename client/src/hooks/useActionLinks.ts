import { useAppDispatch } from "./useStore"
import { addLinks } from "../libs/links"
import { Links } from "../types"
import { url } from "../constants"

const useActionLinks = () => {
    const dispatch = useAppDispatch()

    const createLinks = async (links: Links) => {
        try {
            const res = await fetch(`${url}/create-link`, {
                method: 'POST',
                body: JSON.stringify(links),
                headers: {
                    "Content-Type": "application/json",
                }
            })
            const data = await res.json()
            dispatch(addLinks(data))
        } catch (e) {
            console.error("Error creating the links:", e)
        }
    }

    return { createLinks }
}

export default useActionLinks
