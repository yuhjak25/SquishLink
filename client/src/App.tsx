import LinkList from './pages/LinkList'

function App() {
  return (
    <div className='h-screen flex flex-col items-center pt-50 bg-eerie'>
      <h1 className='text-white text-2xl font-semibold p-4'>SquishLink</h1>

      <LinkList />
    </div>
  )
}

export default App
