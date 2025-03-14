import LinkList from './pages/LinkList'
import LinkForm from './pages/LinkForm'

function App() {
  return (
    <div className='h-screen flex flex-col items-center pt-50 bg-eerie'>
      <h1 className='text-white text-2xl font-semibold '>SquishLink</h1>
      <LinkForm />
      <LinkList />
    </div>
  )
}

export default App
