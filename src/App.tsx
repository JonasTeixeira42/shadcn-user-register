import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'
import { AppSidebar } from './components/AppSidebar'

import { Header } from './components/Header'

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header avatarUrl="https://github.com/shadcn.png" />
      </SidebarInset>
    </SidebarProvider>
  )
}

export default App
