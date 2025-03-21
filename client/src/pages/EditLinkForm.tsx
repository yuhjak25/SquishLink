import { useState } from 'react'
import { Links } from '../types'
import useActionLinks from '../hooks/useActionLinks'
import Modal from './Modal'

type EditLinks = {
  link: Links
}

function EditLinkForm({ link }: EditLinks) {
  const { updatedLink } = useActionLinks()
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [updateLink, setUpdatedLink] = useState(link.createdLink ?? '')

  const onUpdateLinkSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    console.log('Form data update:', updateLink)

    try {
      if (updateLink === link.createdLink) {
        console.warn('Nothing changed')
        setIsModalOpen(false)
        return
      }

      await updatedLink(link._id, updateLink)
      setUpdatedLink('')
      setIsModalOpen(false)
    } catch (e) {
      console.error('Error updating your link:', e)
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
          className='size-4'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
          />
        </svg>
      </button>
      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        <form
          onSubmit={onUpdateLinkSubmit}
          className='flex flex-col gap-0.5 text-white relative p-1.5'
        >
          <p className='text-gray-300 pb-0.5'>Edit link:</p>
          <input
            type='text'
            autoFocus
            placeholder='custom-link'
            onChange={(e) => setUpdatedLink(e.target.value)}
            className='border-1 border-zinc-700 rounded-md p-0.5 py-1 px-1 transition-all delay-200 ease-in-out focus:outline-none focus:ring-1 focus:ring-vista focus:border-transparent'
          />

          <button
            type='submit'
            className='self-end gap-1  text-white font-semibold border border-zinc-700 rounded-md bg-eerie-black transition duration-300 ease-in-out cursor-pointer px-1 py-1 mt-2 text-sm hover:text-white hover:-translate-y-1 hover:bg-vista hover:scale-105 hover:border-transparent'
          >
            Submit
          </button>
        </form>
      </Modal>
    </>
  )
}

export default EditLinkForm
