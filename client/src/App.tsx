import LinkList from './pages/Links/LinkList'

function App() {
  return (
    <div className='h-screen flex flex-col items-center pt-50 bg-eerie'>
      <h1 className='text-white text-4xl font-semibold p-4'>SquishLink</h1>

      <LinkList />
    </div>
  )
}

export default App
