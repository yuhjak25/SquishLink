import { url } from "../constants"

export const getLinks = async () => {
    try {
        const res = await fetch(`${url}/`)
        if (!res.ok) {
            throw new Error("Error fetching the links.")
        }
        const data = await res.json()
        return data
    } catch (e) {
        console.error("Error fetching the links:", e)
        return []
    }
}
