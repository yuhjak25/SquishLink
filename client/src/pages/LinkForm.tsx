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
        className='text-white font-semibold border border-gray-500 rounded-md bg-eerie-black transition duration-300 ease-in-out cursor-pointer p-0.75 hover:text-white hover:-translate-y-1 hover:bg-vista hover:scale-105 hover:border-transparent'
      >
        Create Link
      </button>
      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        <form
          onSubmit={onLinkSubmit}
          className='flex items-center justify-center gap-2 p-4'
        >
          <input
            type='text'
            required
            value={formData.userLink}
            placeholder='Insert your link.'
            autoFocus
            onChange={(e) =>
              setFormData({ ...formData, userLink: e.target.value })
            }
            className='border border-gray-500 rounded-md bg-eerie-black text-white placeholder-gray-400 px-0.5 py-0.75
          transition delay-150 duration-300 ease-in-out focus:border-transparent focus:outline-none focus:ring-1.5
          focus:ring-vista'
          />
          <input
            type='text'
            value={formData.createdLink}
            placeholder='Custom end link.'
            onChange={(e) => {
              setFormData({
                ...formData,
                createdLink: e.target.value,
              })
            }}
            className='border border-gray-500 rounded-md bg-eerie-black text-white placeholder-gray-400 px-0.5 py-0.75
          transition delay-150 duration-300 ease-in-out focus:border-transparent focus:outline-none focus:ring-1.5
          focus:ring-vista'
          />
          <button
            className='text-white font-semibold border border-gray-500 rounded-md bg-eerie-black transition duration-300 ease-in-out cursor-pointer p-0.75 hover:text-white hover:-translate-y-1 hover:bg-vista hover:scale-105 hover:border-transparent'
            type='submit'
          >
            Submit
          </button>
        </form>
      </Modal>
    </>
  )
}

export default LinkForm
