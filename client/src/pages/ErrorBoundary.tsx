import { useEffect } from 'react'
import { FallbackProps } from 'react-error-boundary'
import { clearError } from '../libs/handle'
import { useAppDispatch } from '../hooks/useStore'

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!error) return

    console.log('Error detected:', error.message)

    const timer = setTimeout(() => {
      console.log('Clearing error...')
      dispatch(clearError())
      resetErrorBoundary()
    }, 3000)

    return () => clearTimeout(timer)
  }, [error, dispatch, resetErrorBoundary])

  return (
    <div className='bg-red-500/20 text-red-500 p-2 rounded-md mb-2'>
      <p>Error: {error.message}</p>
    </div>
  )
}

export default ErrorFallback
