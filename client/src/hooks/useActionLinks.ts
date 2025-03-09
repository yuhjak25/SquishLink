import { useAppDispatch } from "./useStore"
import { addLink, deleteLink } from "../libs/links"
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

            if (!res.ok) {
                throw new Error("Error creating the link.")
            }

            const data = await res.json()
            dispatch(addLink(data))
        } catch (e) {
            console.error("Error creating the links:", e)
        }
    }

    const delLink = async (id: string) => {
        try {
            const res = await fetch(`${url}/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': "application/json"
                }
            })

            if (!res.ok) {
                throw new Error("Error deleting the link.")
            }

            dispatch(deleteLink({ id }))
        } catch (e) {
            console.error("Error deleting the links:", e)
        }
    }

    return { createLinks, delLink }
}

export default useActionLinks
