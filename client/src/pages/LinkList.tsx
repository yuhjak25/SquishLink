import LinkItems from './LinkItems'
import useActionLinks from '../hooks/useActionLinks'
import useLinks from '../hooks/useLinks'
import { useAppSelector } from '../hooks/useStore'

function LinkList() {
  const { links } = useLinks()
  const { delLink } = useActionLinks()
  const loading = useAppSelector((state) => state.handle.loading)

  if (loading) return <p>LOADING...</p>

  if (!links.length) return <p>There are no links existing.</p>

  return (
    <ul>
      {links.map((link) => (
        <LinkItems key={link._id} link={link} onDelete={delLink} />
      ))}
    </ul>
  )
}

export default LinkList
