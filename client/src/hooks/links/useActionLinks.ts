import { useAppDispatch } from '../useStore'
import { addLink, deleteLink, plusCount, updateLink } from '../../libs/links'
import { FormErrors, setError, setLoading } from '../../libs/handle'
import { Links } from '../../types'
import { url } from '../../constants'


const useActionLinks = () => {
    const dispatch = useAppDispatch()

    const createLinks = async (links: Links) => {
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
                const data = await res.json()
                if (data.error) {
                    const errors: FormErrors = {}
                    data.error.forEach((err: { path: string[], message: string }) => {
                        const field = err.path[0]
                        errors[field as keyof FormErrors] = err.message
                    })
                    dispatch(setError(errors))
                }
                return
            }

            dispatch(setLoading(true))
            const data = await res.json()
            console.log(data)
            dispatch(addLink(data))
        } catch (e) {
            console.error('Error creating the link:', e)
        } finally {
            dispatch(setLoading(false))
        }
    }

    const delLink = async (id: string) => {
        dispatch(setLoading(true))
        try {
            const res = await fetch(`${url}/${id}`, {
                method: 'DELETE',
            })

            if (!res.ok) {
                const data = await res.json()
                if (data.error) {
                    const errors: FormErrors = {}
                    data.error.forEach((err: { path: string[], message: string }) => {
                        const field = err.path[0]
                        errors[field as keyof FormErrors] = err.message
                    })
                    dispatch(setError(errors))
                }
                return
            }

            return dispatch(deleteLink({ id }))
        } catch (e) {
            console.error('Error deleting the link:', e)
        } finally {
            dispatch(setLoading(false))
        }
    }

    const updatedLink = async (id: string, updLink: string) => {
        try {
            const res = await fetch(`${url}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ updLink })
            })

            if (!res.ok) {
                const data = await res.json()
                console.log(data.error)
                if (data.error) {
                    const errors: FormErrors = {}
                    data.error.forEach((err: { path: string[], message: string }) => {
                        const field = err.path[0]
                        errors[field as keyof FormErrors] = err.message
                    })
                    dispatch(setError(errors))
                }
                return
            }
            dispatch(setLoading(true))
            const data = await res.json()
            dispatch(updateLink({ id, createdLink: data.createdLink }))
        } catch (e) {
            console.error('Error updating the link:', e)
        } finally {
            dispatch(setLoading(false))
        }
    }

    const addCount = async (id: string) => {
        dispatch(setLoading(true))
        try {

            const res = await fetch(`${url}/add-count/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }
            })

            if (!res.ok) {
                const data = await res.json()
                if (data.error) {
                    const errors: FormErrors = {}
                    data.error.forEach((err: { path: string[], message: string }) => {
                        const field = err.path[0]
                        errors[field as keyof FormErrors] = err.message
                    })
                    dispatch(setError(errors))
                }
                return
            }

            const data = await res.json()
            dispatch(plusCount(data))
        } catch (e) {
            console.error('Error adding count:', e)
        } finally {
            dispatch(setLoading(false))
        }

    }

    return { createLinks, delLink, updatedLink, addCount }
}

export default useActionLinks
