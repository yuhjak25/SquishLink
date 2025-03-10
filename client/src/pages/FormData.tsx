import { useState } from 'react'
import { Links } from '../types'
import useActionLinks from '../hooks/useActionLinks'

function FormData() {
  const { createLinks } = useActionLinks()
  const [formData, setFormData] = useState<Links>({ _id: '', userLink: '' })

  const onLinkSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    try {
      await createLinks(formData)

      setFormData({
        _id: '',
        userLink: '',
      })
    } catch (e) {
      console.error('Error creating your link:', e)
    }
  }
  return (
    <>
      <form onSubmit={onLinkSubmit} className='flex gap-2 p-4'>
        <input
          type='text'
          required
          value={formData.userLink}
          placeholder='Insert your link'
          onChange={(e) =>
            setFormData({ ...formData, userLink: e.target.value })
          }
          className='border border-gray-500 rounded-md bg-eerie-black text-white placeholder-gray-400 px-0.5
          transition duration-300 ease-in-out focus:border-transparent focus:outline-none focus:ring-1.5
          focus:ring-persian'
        />
        <button
          className='text-gray-400 font-semibold border border-gray-500 rounded-md bg-eerie-black transition duration-300 ease-in-out cursor-pointer p-0.75 hover:text-white hover:-translate-y-1 hover:bg-persian hover:scale-105 hover:border-transparent'
          type='submit'
        >
          Submit
        </button>
      </form>
    </>
  )
}

export default FormData
