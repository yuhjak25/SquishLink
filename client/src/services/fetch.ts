import { url } from "../constants"

export const fetchLinks = async () => {
    try {
        const res = await fetch(`${url}/api/links/`)
        if (!res.ok) throw new Error('Error fetching data')
        return await res.json()
    } catch (e) {
        console.error("Fetch error:", e)
        return null
    }
}