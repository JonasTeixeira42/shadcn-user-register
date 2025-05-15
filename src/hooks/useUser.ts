import { UserContext } from '@/providers/UserProvider'
import { use } from 'react'

function useUser() {
  const users = use(UserContext)

  if (!users) {
    throw new Error('useUser was called without being nested in UserProvider')
  }

  return users
}

export { useUser }
