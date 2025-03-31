import { useState } from 'react'
import { Links } from '../types'
import useActionLinks from '../hooks/useActionLinks'
import Modal from './Modal'
import { useAppDispatch, useAppSelector } from '../hooks/useStore'
import { clearError } from '../libs/handle'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './ErrorBoundary'

type LinkFormProps = {
  formData: Links
  setFormData: (formData: Links) => void
  onLinkSubmit: (e: React.SyntheticEvent) => void
}

function LinkFormContent({
  formData,
  setFormData,
  onLinkSubmit,
}: LinkFormProps) {
  const error = useAppSelector((state) => state.handle.error)
  return (
    <form
      onSubmit={onLinkSubmit}
      className='flex flex-col gap-0.5 text-white relative p-1.5'
    >
      <p className='text-gray-300 text-lg'>Destination link:</p>
      {error && (
        <p className='text-persian transition-all ease-in-out delay-150'>
          {error.userLink}{' '}
        </p>
      )}
      <input
        type='text'
        autoFocus
        placeholder='https://'
        required
        value={formData.userLink}
        onChange={(e) => setFormData({ ...formData, userLink: e.target.value })}
        className='text-xl border-1 border-zinc-700 rounded-md py-2 px-2 mt-1 transition-all delay-200 ease-in-out focus:outline-none focus:ring-1 focus:ring-vista focus:border-transparent'
      />

      <p className='text-gray-300 text-lg mt-2.5'>Custom link:</p>
      {error && <p className='text-persian'>{error.createdLink} </p>}
      <input
        type='text'
        placeholder='custom-link'
        value={formData.createdLink}
        onChange={(e) =>
          setFormData({ ...formData, createdLink: e.target.value })
        }
        className='text-xl border-1 border-zinc-700 rounded-md  py-2 px-2 mt-1 transition-all delay-200 ease-in-out focus:outline-none focus:ring-1 focus:ring-vista focus:border-transparent'
      />

      <button
        type='submit'
        className='self-end text-white font-semibold border border-zinc-700 rounded-md bg-eerie-black transition duration-300 ease-in-out cursor-pointer px-1 py-1 mt-4 text-lg hover:text-white hover:-translate-y-1 hover:bg-vista hover:scale-105 hover:border-transparent'
      >
        Submit
      </button>
    </form>
  )
}

function LinkForm() {
  const { createLinks } = useActionLinks()
  const [formData, setFormData] = useState<Links>({
    _id: '',
    userLink: '',
    createdLink: '',
  })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const links = useAppSelector((state) => state.links)
  const dispatch = useAppDispatch()

  const onLinkSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    console.log('Form data before sending:', formData)

    try {
      setIsModalOpen(true)
      await createLinks(formData)

      console.log('✅ Created succesfully')
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
