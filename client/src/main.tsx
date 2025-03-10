import { Provider } from 'react-redux'
import { store } from './store/index.ts'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from '@pheralb/toast'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <Toaster
        position='bottom-right'
        toastOptions={{
          animationOnClose: 'swipe',
        }}
      />
    </Provider>
  </StrictMode>
)
