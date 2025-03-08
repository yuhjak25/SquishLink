import { useEffect } from 'react'
import useLinks from './hooks/useLinks'

function App() {
  const { getFetchedLinks } = useLinks()

  useEffect(() => {
    const fetchLinks = () => {
      const res = getFetchedLinks()

      if (Array.isArray(res) && res.length > 0) {
        console.log('Links fetched:', res)
      } else {
        console.log('Error fetching links or empty array')
      }
    }

    fetchLinks()
  }, [getFetchedLinks])

  return (
    <div>
      <h1>SquishLink</h1>
    </div>
  )
}

export default App
