import { useState } from 'react'
import { Links } from '../types'
import useActionLinks from '../hooks/useActionLinks'
import Modal from './Modal'
import { useDispatch } from 'react-redux'
import { clearError } from '../libs/handle'
import ErrorFallback from './ErrorBoundary'
import { ErrorBoundary } from 'react-error-boundary'
import { useAppSelector } from '../hooks/useStore'

type EditLinks = {
  link: Links
}

function EditLink({ link }: EditLinks) {
  const { updatedLink } = useActionLinks()
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [updateLink, setUpdatedLink] = useState(link.createdLink ?? '')
  const error = useAppSelector((state) => state.handle.error)
  const dispatch = useDispatch()

  const onUpdateLinkSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    console.log('Form data update:', updateLink)

    try {
      await updatedLink(link._id, updateLink)

      setUpdatedLink('')
      setTimeout(() => {
        dispatch(clearError())
      }, 3000)
    } catch (e) {
      console.error('Error updating your link:', e)
      setIsModalOpen(true)
    }
  }

  return (
    <>
      <button
        title='Edit Link'
        onClick={() => setIsModalOpen(true)}
        className='text-white transition-all delay-150 ease-in-out cursor-pointer hover:text-vista hover:scale-105'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='size-5.25'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
          />
        </svg>
      </button>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => dispatch(clearError())}
      >
        <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
          <form
            onSubmit={onUpdateLinkSubmit}
            className='flex flex-col gap-0.5 text-white relative p-1.5'
          >
            <p className='text-gray-300 text-lg'>Edit link:</p>
            {error.updLink && (
              <p className='text-persian transition-all ease-in-out delay-150'>
                {error.updLink}
              </p>
            )}

            <input
              type='text'
              autoFocus
              placeholder='custom-link'
              onChange={(e) => setUpdatedLink(e.target.value)}
              className='text-xl border-1 border-zinc-700 rounded-md py-2 px-2 mt-1 transition-all delay-200 ease-in-out focus:outline-none focus:ring-1 focus:ring-vista focus:border-transparent'
            />

            <button
              type='submit'
              className='self-end text-white font-semibold border border-zinc-700 rounded-md bg-eerie-black transition duration-300 ease-in-out cursor-pointer px-1 py-1 mt-4 text-lg hover:text-white hover:-translate-y-1 hover:bg-vista hover:scale-105 hover:border-transparent'
            >
              Submit
            </button>
          </form>
        </Modal>
      </ErrorBoundary>
    </>
  )
}

export default EditLink
