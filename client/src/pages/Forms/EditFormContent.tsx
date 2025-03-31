import { useAppSelector } from '../../hooks/useStore'

type EditFormType = {
  setUpdatedLink: (e: string) => void
  onUpdateLinkSubmit: (e: React.SyntheticEvent) => void
}

function EditFormContent({ setUpdatedLink, onUpdateLinkSubmit }: EditFormType) {
  const error = useAppSelector((state) => state.handle.error)

  return (
    <form
      onSubmit={onUpdateLinkSubmit}
      className='flex flex-col gap-0.5 text-white relative p-1.5'
    >
      <p className='text-gray-300 text-lg'>Edit link:</p>
      {error.updLink && (
        <p className='text-persian transition-all ease-in-out delay-150'>
          {error.updLink}
        </p>
      )}

      <input
        type='text'
        autoFocus
        placeholder='custom-link'
        onChange={(e) => setUpdatedLink(e.target.value)}
        className='text-xl border-1 border-zinc-700 rounded-md py-2 px-2 mt-1 transition-all delay-200 ease-in-out focus:outline-none focus:ring-1 focus:ring-vista focus:border-transparent'
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

export default EditFormContent
