import { ReactElement, ReactNode } from 'react'
import { Calendar, Clock3, EllipsisVertical, Tag, User } from 'lucide-react'

import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { AppAvatar } from './AppAvatar'
import { customFormat } from '@/utils/date/customFormat'
import { getInitialLetters } from '@/utils/formatters/getAvatarFallback'

interface User {
  id: string
  name: string
  age: number
  gender: string
  date: string
  onlineTime: string
  type: string
  isActive: boolean
}

interface UserCardProps {
  user: User
}

function UserCard({
  user: { name, age, gender, date, onlineTime, type, isActive },
}: UserCardProps) {
  return (
    <article className="text-light-black flex h-auto items-center rounded-xl border p-3">
      <AppAvatar className="mr-3 size-14" fallback={getInitialLetters(name)} />
      <div className="text-light-grey flex-1 text-xs [&_svg]:size-3">
        <div className="flex flex-col items-start md:flex-row md:items-center">
          <h2 className="text-light-black mr-3 text-sm">{name}</h2>
          <div className="flex items-center gap-1">
            <User className="size-3" />
            <span>
              {age} anos, {gender}
            </span>
          </div>
        </div>

        <div className="mt-2 flex flex-col gap-3 md:flex-row">
          <Statistic icon={<Calendar />}>
            <time dateTime={date}>
              {customFormat(date, 'dd/MM/yyyy - HH:mmaaa')}
            </time>
          </Statistic>
          <Statistic icon={<Clock3 />}>
            <time dateTime={onlineTime}>{onlineTime}</time>
          </Statistic>
          <Statistic icon={<Tag />}>
            <span>Usuário {type}</span>
          </Statistic>
        </div>
      </div>

      {isActive ? (
        <Badge variant="default">Ativo</Badge>
      ) : (
        <Badge variant="secondary">ativo</Badge>
      )}

      <Button variant="ghost" size="icon" className="ml-3">
        <EllipsisVertical />
      </Button>
    </article>
  )
}

interface StatisticProps {
  icon: ReactElement
  children: ReactNode
}

function Statistic({ icon, children }: StatisticProps) {
  return (
    <div className="inline-flex items-center">
      {icon}
      <div className="ml-1 inline-block">{children}</div>
    </div>
  )
}

export { UserCard, type User }
