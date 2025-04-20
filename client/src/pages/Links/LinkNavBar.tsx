import useActionLinks from '../../hooks/links/useActionLinks'
import { Links } from '../../types'
import EditLink from '../Forms/EditLinkForm'
import CopyButton from '../shared/CopyButton'
type LinkNavrBarProps = {
  link: Links
}

function LinkNavBar({ link }: LinkNavrBarProps) {
  const { addCount, delLink } = useActionLinks()

  const handleCount = () => {
    if (link._id) {
      addCount(link._id)
    }
  }

  const onDelete = () => {
    delLink(link._id)
  }

  return (
    <div className='flex flex-wrap justify-between items-start sm:items-center'>
      <a
        rel='noopener noreferrer'
        target='_blank'
        href={link.userLink}
        onClick={handleCount}
        className='flex flex-row justify-center items-center gap-1 text-2xl font-bold transition-all delay-250 ease-in-out break-words mr-2 hover:underline hover:underline-offset-4 hover:underline-vista/80 hover:decoration-dotted hover:text-vista truncate max-w-[80%] sm:max-w-full'
      >
        {link.createdLink?.replace(/^http?:\/\/localhost:3000/, '')}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='size-4'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25'
          />
        </svg>
      </a>
      <div className='flex items-center gap-2'>
        <EditLink link={link} />
        <button
          onClick={onDelete}
          className='transition-all delay-250 ease-in-out cursor-pointer hover:scale-110 hover:text-persian'
          title='Delete Link'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-5.25'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0'
            />
          </svg>
        </button>

        <CopyButton link={link} />
      </div>
    </div>
  )
}

export default LinkNavBar
