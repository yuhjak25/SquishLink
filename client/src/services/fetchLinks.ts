import { url } from "../constants"

const getLinks = () => {
    try {
        fetch(`${url}/`).then((res) => {
            if (!res.ok) {
                console.log('Error fetching the links.')
            } else {
                console.log(res)
            }
        })
    } catch (e) {
        console.log('Error fetching the links.', e)
    }
}

export default {
    getLinks
}