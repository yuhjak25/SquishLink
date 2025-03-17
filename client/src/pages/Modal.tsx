import { useState } from 'react'
import { Links } from '../types'
import useActionLinks from '../hooks/useActionLinks'

type ModalProps = {
  link: Links
}

function Modal({ link }: ModalProps) {
  const { updatedLink } = useActionLinks()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [updateLink, setUpdatedLink] = useState(link.createdLink ?? '')

  const onUpdateLinkSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    console.log('Form data update:', updateLink)

    try {
      if (updateLink === link.createdLink) {
        console.warn('Nothing changed')
        setIsOpen(false)
        return
      }

      await updatedLink(link._id, updateLink)
      setUpdatedLink('')
      setIsOpen(false)
    } catch (e) {
      console.error('Error updating your link:', e)
    }
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
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
      {isOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-black/50 z-50'>
          <form
            onSubmit={onUpdateLinkSubmit}
            className='relative bg-eerie-black p-4 rounded-lg  flex flex-col gap-2'
          >
            <button
              type='button'
              onClick={() => setIsOpen(false)}
              className='absolute top-[-10px] right-[-10px] transition delay-150 ease-in-out cursor-pointer hover:text-persian hover:scale-105'
              title='Close Modal'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                />
              </svg>
            </button>

            <input
              type='text'
              placeholder={updateLink}
              onChange={(e) => {
                setUpdatedLink(e.target.value)
              }}
              autoFocus
              className='border border-gray-500 rounded-md bg-eerie-black text-white placeholder-gray-400 px-0.5 py-0.75 transition delay-150 duration-300 ease-in-out focus:border-transparent focus:outline-none focus:ring-1.5 focus:ring-vista'
            />
            <button
              type='submit'
              className='text-white font-semibold border border-gray-500 rounded-md bg-eerie-black transition duration-300 ease-in-out cursor-pointer p-0.75 hover:text-white hover:-translate-y-1 hover:bg-vista hover:scale-105 hover:border-transparent'
            >
              Save
            </button>
          </form>
        </div>
      )}
    </>
  )
}

export default Modal
