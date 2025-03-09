import useLinks from './hooks/useLinks'

function App() {
  const { links } = useLinks()
  return (
    <div>
      <h1>SquishLink</h1>
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
