import LinkItems from './LinkItems'
import useActionLinks from '../hooks/useActionLinks'
import useLinks from '../hooks/useLinks'
import { useAppSelector } from '../hooks/useStore'

function LinkList() {
  const { links } = useLinks()
  const { delLink } = useActionLinks()
  const loading = useAppSelector((state) => state.handle.loading)

  if (loading)
    return (
      <p className='pl-4 text-white text-lg font-medium animate-[bounce_1.5s_infinite]'>
        ...
      </p>
    )

  if (!links.length)
    return (
      <div className='flex flex-col items-center justify-center h-40 text-center text-white transition-opacity delay-300 ease-in opacity-90'>
        <p className='text-lg font-medium'>No links available</p>
        <span className='text-sm text-vista'>Start by adding one!</span>
      </div>
    )

  return (
    <ul>
      {links.map((link) => (
        <LinkItems key={link._id} link={link} onDelete={delLink} />
      ))}
    </ul>
  )
}

export default LinkList
