import { UserCard, type User } from './UserCard'

interface UserListProps {
  users: User[]
}

function UserList({ users }: UserListProps) {
  return (
    <section className="mt-5 grid flex-1 gap-2">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </section>
  )
}

export { UserList }
