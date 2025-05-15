import { Activity, User, FileCheck, Settings } from 'lucide-react'
const mainMenu = [
  {
    title: 'Dashboard',
    url: '#',
    icon: Activity,
    isActive: false,
  },
  {
    title: 'Usuários',
    url: '#',
    icon: User,
    isActive: true,
  },
  {
    title: 'Documentos',
    url: '#',
    icon: FileCheck,
    isActive: false,
  },
]

const settingsMenu = [
  {
    title: 'Geral',
    url: '#',
    icon: Settings,
    isActive: false,
  },
]

const allMenus = {
  main: mainMenu,
  settings: settingsMenu,
}

export { allMenus }
