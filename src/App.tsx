import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'
import { AppSidebar } from './components/AppSidebar'

import { Header } from './components/Header'
import { Summary } from './components/Summary'
import { Search } from './components/Search'
import { UserList } from './components/UserList'
import { AppPagination } from './components/AppPagination'
import { Heading } from './components/Heading'
import { Button } from './components/ui/button'
import { Plus } from 'lucide-react'
import { ModalRegisterUser } from './components/ModalRegisterUser'

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
      <SidebarInset className="pb-10">
        <Header avatarUrl="https://github.com/shadcn.png" />
        <div className="flex flex-col px-5 pt-11 md:px-10">
          <div className="flex flex-col items-start justify-between md:flex-row">
            <Heading as="h1">Usuário</Heading>
            <ModalRegisterUser />
          </div>
          <Summary />
          <Search />
        </div>
        <section className="flex-1 px-5 md:px-10">
          <UserList users={users} />
        </section>
        <section className="px-5 md:px-10">
          <AppPagination
            page={2}
            pageSize={15}
            totalCount={19}
            pageSizeSelectOptions={[5, 10, 15]}
          />
        </section>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default App
