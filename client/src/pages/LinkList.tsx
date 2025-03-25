import LinkItems from './LinkItems'
import useLinks from '../hooks/useLinks'
import { useAppSelector } from '../hooks/useStore'

function LinkList() {
  const { links } = useLinks()
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
    <div className='relative flex flex-col'>
      <p className='text-vista bg-vista/50 rounded p-1 text-sm font-medium self-end mt-4'>
        {links.length}/15
      </p>
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4'>
        {links.map((link) => (
          <LinkItems key={link._id} link={link} />
        ))}
      </ul>
    </div>
  )
}

export default LinkList
