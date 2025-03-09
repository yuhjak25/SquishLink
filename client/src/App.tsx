import { useState } from 'react'
import useActionLinks from './hooks/useActionLinks'
import useLinks from './hooks/useLinks'
import { Links } from './types'

function App() {
  const { links } = useLinks()
  const { createLinks } = useActionLinks()

  const [formData, setFormData] = useState<Links>({
    _id: '',
    userLink: '',
  })

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
    <div>
      <h1>SquishLink</h1>
      <form onSubmit={onLinkSubmit}>
        <input
          type='text'
          required
          value={formData.userLink}
          onChange={(e) =>
            setFormData({ ...formData, userLink: e.target.value })
          }
        />
      </form>
      {links.length === 0 ? (
        <p>There are no links existing.</p>
      ) : (
        <ul>
          {links.map((link) => (
            <li className='text-black' key={link._id}>
              {link.userLink} - {link.createdLink}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
