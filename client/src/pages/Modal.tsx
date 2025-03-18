import { ReactNode } from 'react'

type ModalProps = {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  children: ReactNode
}

function Modal({ isOpen, setIsOpen, children }: ModalProps) {
  if (!isOpen) return null

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black/50 z-50'>
      <div className='relative bg-eerie-black p-4 rounded-lg flex flex-col gap-2'>
        <button
          type='button'
          onClick={() => setIsOpen(false)}
          className='text-gray-500 absolute top-[-15px] right-[-15px] transition delay-150 ease-in-out cursor-pointer hover:text-persian hover:scale-105'
          title='Close Modal'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-5'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
            />
          </svg>
        </button>

        {children}
      </div>
    </div>
  )
}

export default Modal
