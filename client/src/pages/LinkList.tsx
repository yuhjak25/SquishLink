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
      <p
        className='pl-4 text-white text-lg font-medium animate-[bounce_1.5s_infinite]'
        aria-live='polite'
      >
        ...
      </p>
    )

  if (!links || !links.length)
    return (
      <div className='flex flex-col items-center justify-center p-4 text-center text-white transition-opacity delay-300 ease-in opacity-90'>
        <p className='text-lg font-medium'>No links available</p>
        <span className='text-sm text-vista'>Start by adding one!</span>
      </div>
    )

  return (
    <div className='relative'>
      <p className='absolute top-0 right-0 text-sm bg-vista/15 text-vista px-1 py-0.5 rounded-full'>
        {links.length}/15
      </p>

      <ul className='mt-6'>
        {links.map((link) => (
          <LinkItems key={link._id} link={link} onDelete={delLink} />
        ))}
      </ul>
    </div>
  )
}

export default LinkList
