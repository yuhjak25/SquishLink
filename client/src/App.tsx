import { useEffect, useState } from 'react'
import { Links } from './types'
import useLinks from './hooks/useLinks'

function App() {
  const [links, setLinks] = useState<Links[]>([])

  const { getFetchLinks } = useLinks()

  useEffect(() => {
    const fetchData = async () => {
      const res = await getFetchLinks()
      setLinks(res)
    }

    fetchData()
  }, [getFetchLinks])

  return (
    <div>
      <h1 className="text-zinc-100 text-3xl font-bold p-4">SquishLink</h1>
      {links.length > 0 ? (
        <ul className="p-4 space-y-4">
          {links.map((link) => (
            <li
              key={link.id}
              className="border border-zinc-700 p-4 ring-1 ring-yellow-300/30 shadow-lg shadow-yellow-300/40 rounded-lg">
              <p className="text-zinc-100">Original link - {link.oldUrl} </p>
              <p className="text-zinc-100">
                Link squish -{' '}
                <a
                  href={link.newUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-300 transition-all ease-linear duration-300 hover:text-amber-200 break-all">
                  {link.newUrl}
                </a>
              </p>
              <p className="text-zinc-100">Clicks - {link.clicks}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-zinc-100 p-4">No hay enlaces disponibles</p>
      )}
    </div>
  )
}

export default App
