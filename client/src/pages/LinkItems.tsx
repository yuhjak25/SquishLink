import { Links } from '../types'

type LinkItemsProps = {
  link: Links
  onDelete: (id: string) => void
}

function LinkItems({ link, onDelete }: LinkItemsProps) {
  return (
    <li className='text-black'>
      {link.userLink} - {link.createdLink}
      <button className='text-black' onClick={() => onDelete(link._id)}>
        Delete
      </button>
    </li>
  )
}

export default LinkItems
