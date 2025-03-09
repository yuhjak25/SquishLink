import useLinks from './hooks/useLinks'
import { useAppSelector } from './hooks/useStore'

function App() {
  const links = useAppSelector((state) => state.links)

  useLinks()

  return (
    <div>
      <h1>SquishLink</h1>
      {links.length === 0 ? (
        <p>There are no links existing.</p>
      ) : (
        <ul>
          {links.map((link) => (
            <li key={link._id}>{link.linkData}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
