import { Activity, User, FileCheck, Settings } from 'lucide-react'

const menus = [
  {
    title: 'Menu',
    items: [
      {
        title: 'Dashboard',
        url: '#',
        icon: Activity,
      },
      {
        title: 'Usuários',
        url: '#',
        icon: User,
      },
      {
        title: 'Documentos',
        url: '#',
        icon: FileCheck,
      },
    ],
  },
  {
    title: 'Configurações',
    items: [
      {
        title: 'Geral',
        url: '#',
        icon: Settings,
      },
    ],
  },
]

export { menus }
