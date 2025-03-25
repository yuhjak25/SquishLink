import { useState } from 'react'
import { Links } from '../types'
import useActionLinks from '../hooks/useActionLinks'
import Modal from './Modal'

function LinkForm() {
  const { createLinks } = useActionLinks()
  const [formData, setFormData] = useState<Links>({
    _id: '',
    userLink: '',
    createdLink: '',
  })
  const [isModalOpen, setIsModalOpen] = useState(false)

  const onLinkSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    console.log('Form data before sending:', formData)

    try {
      await createLinks(formData)

      setFormData({
        _id: '',
        userLink: '',
        createdLink: '',
      })
      setIsModalOpen(false)
    } catch (e) {
      console.error('Error creating your link:', e)
    }
  }

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className='flex flex-row items-center gap-1 text-white font-semibold border border-zinc-700 rounded-md bg-eerie-black transition duration-300 ease-in-out cursor-pointer py-2 px-1.75 text-xl shadow-lg shadow-black/70  hover:text-white hover:-translate-y-1 hover:bg-vista hover:scale-105 hover:border-transparent'
      >
        Add link
      </button>
      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        <form
          onSubmit={onLinkSubmit}
          className='flex flex-col gap-0.5 text-white relative p-1.5'
        >
          <p className='text-gray-300 pb-0.5'>Destination link:</p>
          <input
            type='text'
            autoFocus
            placeholder='https://'
            required
            onChange={(e) =>
              setFormData({ ...formData, userLink: e.target.value })
            }
            className='border-1 border-zinc-700 rounded-md p-0.5 py-1 px-1 transition-all delay-200 ease-in-out focus:outline-none focus:ring-1 focus:ring-vista focus:border-transparent'
          />
          <p className='text-gray-300 pb-0.5'>Custom link:</p>
          <input
            type='text'
            placeholder='custom-link'
            onChange={(e) =>
              setFormData({ ...formData, createdLink: e.target.value })
            }
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

export default LinkForm
