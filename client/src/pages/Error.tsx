import { useAppSelector } from '../hooks/useStore'

type ErrorProps = {
  children: React.ReactNode
}
function Error({ children }: ErrorProps) {
  const error = useAppSelector((state) => state.handle.error)
  return (
    <div>
      <h1 className='text-persian text-sm'>{error?.toString()}</h1>
      {children}
    </div>
  )
}

export default Error
