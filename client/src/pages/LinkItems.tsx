import { Links } from '../types'
import LinkNavBar from './LinkNavBar'

type LinkItemsProps = {
  link: Links
}

function LinkItems({ link }: LinkItemsProps) {
  return (
    <div className='flex flex-col bg-eerie-black border border-zinc-700 shadow-lg shadow-black/70 text-white p-6 gap-1 rounded-lg w-full max-w-xs sm:max-w-full'>
      <LinkNavBar link={link} />
      <p
        className='text-zinc-300 break-words truncate text-[18.5px] max-w-[220px] pt-0.5'
        title={link.userLink}
      >
        {link.userLink}
      </p>

      <div className='flex justify-between items-center gap-3 pt-1.5'>
        <p className='text-base'>{link.count} clicks</p>
        <p className='text-zinc-300 text-base'>
          {link.createdAt
            ? new Date(link.createdAt).toLocaleDateString('es-ES')
            : 'No date'}
        </p>
      </div>
    </div>
  )
}

export default LinkItems
