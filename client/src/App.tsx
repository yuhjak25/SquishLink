import { useAppSelector } from './hooks/useStore'

function App() {
  const shortLinks = useAppSelector((state) => state.links)

  return (
    <div>
      <h1>SquishLink</h1>
      {shortLinks.length === 0 ? (
        <p>There are no links existing.</p>
      ) : (
        <ul>
          {shortLinks.map((link) => (
            <li key={link._id}>{link.linkData}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
