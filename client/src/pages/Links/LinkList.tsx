import LinkItems from './LinkItems'
import useLinks from '../../hooks/links/useLinks'
import { useAppSelector } from '../../hooks/useStore'
import LinkForm from '../Forms/LinkForm'

function LinkList() {
  const { links } = useLinks()
  const loading = useAppSelector((state) => state.handle.loading)

  if (loading) {
    return (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 mb-4'>
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className='bg-eerie-black border border-zinc-700 shadow-lg shadow-black/70 text-white p-4 rounded-lg animate-pulse space-y-3'
          >
            <div className='h-4 bg-zinc-700 rounded w-3/4'></div>
            <div className='h-3 bg-zinc-700 rounded w-1/2'></div>
            <div className='h-3 bg-zinc-700 rounded w-full'></div>
            <div className='h-3 bg-zinc-700 rounded w-5/6'></div>
            <div className='flex justify-end gap-2 pt-2'>
              <div className='h-6 w-12 bg-zinc-700 rounded'></div>
              <div className='h-6 w-12 bg-zinc-700 rounded'></div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (!links || !links.length)
    return (
      <>
        <div className='relative flex flex-col'>
          <div className='flex justify-between items-center mt-4 gap-4'>
            <LinkForm />
          </div>
        </div>
        <div className='flex flex-col items-center justify-center p-4 text-center text-white transition-opacity delay-300 ease-in opacity-90'>
          <p className='text-2xl font-medium'>No links available</p>
          <span className='text-lg text-vista'>Start by adding one!</span>
        </div>
      </>
    )

  return (
    <>
      <div className='relative flex flex-col'>
        <div className='flex justify-between items-center mt-4'>
          <LinkForm />
          <p className='text-vista bg-vista/50 rounded px-2 py-1 text-[15px] font-medium'>
            {links.length}/15
          </p>
        </div>
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 mb-4'>
          {links.map((link) => (
            <LinkItems key={link._id} link={link} />
          ))}
        </ul>
      </div>
    </>
  )
}

export default LinkList
