import { useAppDispatch } from './useStore'
import { addLink, deleteLink, updateLink } from '../libs/links'
import { setError, setLoading } from '../libs/handle'
import { Links } from '../types'
import { url } from '../constants'


const useActionLinks = () => {
    const dispatch = useAppDispatch()

    const createLinks = async (links: Links) => {
        dispatch(setLoading(true))
        dispatch(setError(null))

        console.log('Sending data:', links)

        try {
            const res = await fetch(`${url}/create-link`, {
                method: 'POST',
                body: JSON.stringify(links),
                headers: {
                    'Content-Type': 'application/json',
                }
            })

            if (!res.ok) {
                throw new Error('Error creating the link.')
            }

            const data = await res.json()
            console.log(data)
            dispatch(addLink(data))
        } catch (e) {
            console.error('Error creating the link:', e)
            dispatch(setError(e instanceof Error ? e.message : 'unknown error'))
        } finally {
            dispatch(setLoading(false))
        }
    }

    const delLink = async (id: string) => {
        dispatch(setLoading(true))
        dispatch(setError(null))


        try {
            const res = await fetch(`${url}/${id}`, {
                method: 'DELETE',
            })

            if (!res.ok) {
                throw new Error('Error deleting the link.')
            }

            return dispatch(deleteLink({ id }))
        } catch (e) {
            console.error('Error deleting the link:', e)
            dispatch(setError(e instanceof Error ? e.message : 'unknown error'))
        } finally {
            dispatch(setLoading(false))
        }
    }

    const updatedLink = async (id: string, createdLink: string) => {
        dispatch(setLoading(true))
        dispatch(setError(null))


        try {
            const res = await fetch(`${url}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ createdLink })
            })

            if (!res.ok) {
                throw new Error('Error updating the link.')
            }

            const data = await res.json()

            dispatch(updateLink({ id, createdLink: data.createdLink }))
        } catch (e) {
            console.error('Error updating the link:', e)
            dispatch(setError(e instanceof Error ? e.message : 'unknown error'))
        } finally {
            dispatch(setLoading(false))
        }
    }


    return { createLinks, delLink, updatedLink }
}

export default useActionLinks
