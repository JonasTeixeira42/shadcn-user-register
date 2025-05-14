import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'
import { AppSidebar } from './components/AppSidebar'

import { Header } from './components/Header'
import { Summary } from './components/Summary'

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header avatarUrl="https://github.com/shadcn.png" />
        <section className="px-5 pt-11 pb-10 md:px-10">
          <Summary />
        </section>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default App
