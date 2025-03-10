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
      <form onSubmit={onLinkSubmit}>
        <input
          type='text'
          required
          value={formData.userLink}
          onChange={(e) =>
            setFormData({ ...formData, userLink: e.target.value })
          }
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default FormData
