import { UserCard } from './UserCard'
import { User } from '@/domain/user/types/user'

interface UserListProps {
  users: User[]
}

function UserList({ users }: UserListProps) {
  return (
    <section className="mt-5 grid flex-1 gap-2 pb-5">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </section>
  )
}

export { UserList }
