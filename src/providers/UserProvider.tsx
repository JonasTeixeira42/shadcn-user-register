import {
  createContext,
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from 'react'
import uuid from 'react-uuid'

import { User } from '@/domain/user/types/user'
import { UserSchema } from '@/components/FormUser'
import { getStorageItem, setStorageItem } from '@/utils/localStorage'

interface UserContextProps {
  users: User[]
  addUser: (user: UserSchema) => void
  filterByName: (name: string) => void
  updateUser: (id: string, user: UserSchema) => void
}

const LOCAL_STORAGE_KEY = 'USER_KEY'

const UserContext = createContext<UserContextProps | null>(null)

function UserProvider({ children }: PropsWithChildren) {
  const [users, setUsers] = useState<User[]>(
    () => getStorageItem(LOCAL_STORAGE_KEY) ?? []
  )
  const [filteredUsers, setFilteredUsers] = useState<User[] | null>(null)

  const addUser = useCallback(
    (user: UserSchema) => {
      const newUser: User = {
        id: uuid(),
        age: 42,
        gender: 'Homem',
        date: new Date().toISOString(),
        onlineTime: '42m29s',
        type: 'padrão',
        ...user,
      }

      const allUsers = [...users, newUser]

      setUsers(allUsers)
      setStorageItem(LOCAL_STORAGE_KEY, allUsers)
    },
    [users]
  )

  const updateUser = useCallback(
    (id: string, user: UserSchema) => {
      const updateUsers = users.map((currentUser) => {
        if (id === currentUser.id) {
          return { ...currentUser, ...user }
        }
        return currentUser
      })

      setUsers(updateUsers)
      setStorageItem(LOCAL_STORAGE_KEY, updateUsers)
    },
    [users]
  )

  const filterByName = useCallback(
    (name: string) => {
      if (name) {
        const filter = users.filter((user) =>
          user.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
        )

        setFilteredUsers([...filter])
        return
      }
      setFilteredUsers(null)
    },
    [users]
  )

  const value = useMemo(
    (): UserContextProps => ({
      users: filteredUsers ?? users,
      addUser,
      updateUser,
      filterByName,
    }),
    [users, addUser, updateUser, filterByName, filteredUsers]
  )

  return <UserContext value={value}>{children}</UserContext>
}

export { UserProvider, UserContext }
