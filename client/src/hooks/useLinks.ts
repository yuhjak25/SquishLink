import fetchLinks from "../services/fetchLinks"

const useLinks = () => {
    const getFetchedLinks = () => {
        const res = fetchLinks
        return res
    }

    return { getFetchedLinks }
}

export default useLinks