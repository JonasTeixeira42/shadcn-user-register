import { useMemo, useState } from 'react'
import { Plus } from 'lucide-react'
import { SidebarInset } from '@/components/ui/sidebar'

import { Header } from '@/components/Header'
import { Search } from '@/components/Search'
import { Summary } from '@/components/Summary'
import { Heading } from '@/components/Heading'
import { UserList } from '@/components/UserList'
import { AppSidebar } from '@/components/AppSidebar'
import { AppPagination } from '@/components/AppPagination'
import { ModalRegisterUser } from '@/components/ModalRegisterUser'

import { useUser } from '@/hooks/useUser'
import { Button } from '@/components/ui/button'
import { usePagination } from '@/hooks/usePagination'

function Users() {
  const [open, setOpen] = useState(false)

  const { users } = useUser()
  const {
    page,
    setPage,
    pageSize,
    setPageSize,
    totalPageCount,
    currentItemsCount,
    pageSizeSelectOptions,
  } = usePagination(users.length)

  const paginationUsers = useMemo(() => {
    const initialPosition = (page - 1) * pageSize
    const finalPosition = page * pageSize

    return users.slice(initialPosition, finalPosition)
  }, [users, page, pageSize])

  return (
    <>
      <AppSidebar />
      <SidebarInset className="pb-10">
        <Header avatarUrl="https://github.com/shadcn.png" />
        <div className="flex flex-col px-5 pt-11 md:px-10">
          <div className="flex flex-col items-start justify-between md:flex-row">
            <Heading as="h1">Usuário</Heading>
            <Button
              size="lg"
              rounded="circle"
              className="w-full md:w-auto"
              onClick={() => setOpen(true)}
            >
              <Plus />
              <span>Adicionar</span>
            </Button>
            <ModalRegisterUser
              open={open}
              toggleOpen={(value) => setOpen(value)}
            />
          </div>
          <Summary />
          <Search />
        </div>
        <section className="flex-1 px-5 md:px-10">
          <UserList users={paginationUsers} />
        </section>
        <section className="px-5 md:px-10">
          <AppPagination
            page={page}
            setPage={setPage}
            pageSize={pageSize}
            setPageSize={setPageSize}
            totalCount={users.length}
            totalPageCount={totalPageCount}
            currentItemsCount={currentItemsCount}
            pageSizeSelectOptions={pageSizeSelectOptions}
          />
        </section>
      </SidebarInset>
    </>
  )
}

export { Users }
