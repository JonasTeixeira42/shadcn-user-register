import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'
import { AppSidebar } from './components/AppSidebar'

import { Header } from './components/Header'
import { Summary } from './components/Summary'
import { Search } from './components/Search'
import { UserList } from './components/UserList'

const users = [
  {
    id: 'string',
    name: 'string string a',
    age: 42,
    gender: 'Homem',
    date: new Date().toISOString(),
    onlineTime: '38m29s',
    type: 'padrão',
    isActive: true,
  },
]

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header avatarUrl="https://github.com/shadcn.png" />
        <div className="flex flex-col px-5 pt-11 md:px-10">
          <Summary />
          <Search />
        </div>
        <section className="flex-1 px-5 md:px-10">
          <UserList users={users} />
        </section>
        a
      </SidebarInset>
    </SidebarProvider>
  )
}

export default App
