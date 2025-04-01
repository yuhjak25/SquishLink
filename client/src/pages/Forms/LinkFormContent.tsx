import { useAppSelector } from '../../hooks/useStore'
import { Links } from '../../types'

type LinkFormProps = {
  formData: Links
  setFormData: (formData: Links) => void
  onLinkSubmit: (e: React.SyntheticEvent) => void
}

function LinkFormContent({
  formData,
  setFormData,
  onLinkSubmit,
}: LinkFormProps) {
  const error = useAppSelector((state) => state.handle.error)
  return (
    <form
      onSubmit={onLinkSubmit}
      className='flex flex-col gap-0.5 text-white relative p-1.5'
    >
      <p className='text-gray-300 text-lg'>Destination link:</p>
      {error.userLink && (
        <p className='text-persian transition-all ease-in-out delay-150'>
          {error.userLink}{' '}
        </p>
      )}
      {error && (
        <p className='text-persian transition-all ease-in-out delay-150'>
          {error.general}
        </p>
      )}
      <input
        type='text'
        autoFocus
        placeholder='https://'
        required
        value={formData.userLink}
        onChange={(e) => setFormData({ ...formData, userLink: e.target.value })}
        className='text-xl border-1 border-zinc-700 rounded-md py-2 px-2 mt-1 transition-all delay-200 ease-in-out focus:outline-none focus:ring-1 focus:ring-vista focus:border-transparent'
      />

      <p className='text-gray-300 text-lg mt-2.5'>Custom link:</p>
      {error.createdLink && (
        <p className='text-persian transition-all ease-in-out delay-150'>
          {error.createdLink}
        </p>
      )}
      <input
        type='text'
        placeholder='custom-link'
        value={formData.createdLink}
        onChange={(e) =>
          setFormData({ ...formData, createdLink: e.target.value })
        }
        className='text-xl border-1 border-zinc-700 rounded-md  py-2 px-2 mt-1 transition-all delay-200 ease-in-out focus:outline-none focus:ring-1 focus:ring-vista focus:border-transparent'
      />

      <button
        type='submit'
        className='self-end text-white font-semibold border border-zinc-700 rounded-md bg-eerie-black transition duration-300 ease-in-out cursor-pointer px-1 py-1 mt-4 text-lg hover:text-white hover:-translate-y-1 hover:bg-vista hover:scale-105 hover:border-transparent'
      >
        Submit
      </button>
    </form>
  )
}

export default LinkFormContent
