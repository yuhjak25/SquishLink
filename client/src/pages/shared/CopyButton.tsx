import { useState } from 'react'
import { Links } from '../../types'

type CopyButtonProps = {
  link: Links
}
function CopyButton({ link }: CopyButtonProps) {
  const [copy, setCopy] = useState(false)

  const onCopy = () => {
    if (link.createdLink) {
      navigator.clipboard.writeText(link.createdLink).then(() => {
        console.log('Copied to clipboard')
      })
      setCopy(true)

      setTimeout(() => {
        setCopy(false)
      }, 1500)
    } else {
      console.error('Link is undefined, cannot copy to clipboard')
    }
  }
  return (
    <button
      type='button'
      onClick={onCopy}
      className='transition-all delay-250 ease-in-out cursor-pointer hover:scale-110 hover:text-viridian'
      title='Copy Link'
    >
      {copy ? (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='size-5.25 text-viridian animate-pulse '
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
          />
        </svg>
      ) : (
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
            d='M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75'
          />
        </svg>
      )}
    </button>
  )
}

export default CopyButton
