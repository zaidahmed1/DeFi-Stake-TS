import react from 'react'
import Home from './pages/Home'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { config } from './components/Config'


const queryClient = new QueryClient()



const App = () => {
  return (
    <>
    <QueryClientProvider client={queryClient}>
    <WagmiProvider config={config}>
          <Home />
    </WagmiProvider>
    </QueryClientProvider>
    </>
  )
}

export default App
