import { Toaster } from '@/components/ui/sonner'
import { SidebarProvider } from '@/components/ui/sidebar'

import { UserProvider } from './providers/UserProvider'
import { Users } from './pages/Users'

function App() {
  return (
    <UserProvider>
      <SidebarProvider>
        <Users />
        <Toaster />
      </SidebarProvider>
    </UserProvider>
  )
}

export default App
