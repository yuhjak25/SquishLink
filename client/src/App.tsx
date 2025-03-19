import LinkList from './pages/LinkList'
import LinkForm from './pages/LinkForm'
import Error from './pages/Error'

function App() {
  return (
    <div className='h-screen flex flex-col items-center pt-50 bg-eerie'>
      <h1 className='text-white text-2xl font-semibold p-4'>SquishLink</h1>
      <Error>
        <LinkForm />
        <LinkList />
      </Error>
    </div>
  )
}

export default App
