import { useEffect } from 'react'
import { fetchLinks } from './services/fetch'

function App() {
  useEffect(() => {
    fetchLinks().then((data) => {
      if (data) {
        console.log('Fetch data', data)
      }
    })
  }, [])

  return (
    <div>
      <h1 className="text-zinc-100 text-3xl font-bold p-4">SquishLink</h1>
    </div>
  )
}

export default App
