import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/useStore'
import useActionLinks from '../../hooks/links/useActionLinks'
import { clearError } from '../../libs/handle'
import { Links } from '../../types'
import Modal from '../shared/Modal'
import LinkFormContent from './LinkFormContent'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from '../Error/ErrorBoundary'

function LinkForm() {
  const dispatch = useAppDispatch()
  const links = useAppSelector((state) => state.links)
  const { createLinks } = useActionLinks()

  const [formData, setFormData] = useState<Links>({
    _id: '',
    userLink: '',
    createdLink: '',
  })
  const [isModalOpen, setIsModalOpen] = useState(false)

  const onLinkSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    try {
      await createLinks(formData)

      setFormData({
        _id: '',
        userLink: '',
        createdLink: '',
      })

      setTimeout(() => {
        dispatch(clearError())
      }, 3000)
    } catch (e) {
      console.error('Error creating your link:', e)
      setIsModalOpen(true)
    }
  }

  return (
    <>
      <button
        title='Create Link'
        onClick={() => setIsModalOpen(true)}
        className='gap-1 text-white font-semibold border border-zinc-700 rounded-md bg-eerie-black transition duration-300 ease-in-out cursor-pointer py-2 px-1.75 text-xl shadow-lg shadow-black/70 hover:text-white hover:-translate-y-1 hover:bg-vista hover:scale-105 hover:border-transparent'
      >
        {links.length === 0 ? (
          'Add your first link'
        ) : (
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
              d='M12 4.5v15m7.5-7.5h-15'
            />
          </svg>
        )}
      </button>

      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => dispatch(clearError())}
      >
        <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
          <LinkFormContent
            formData={formData}
            onLinkSubmit={onLinkSubmit}
            setFormData={setFormData}
          />
        </Modal>
      </ErrorBoundary>
    </>
  )
}

export default LinkForm
