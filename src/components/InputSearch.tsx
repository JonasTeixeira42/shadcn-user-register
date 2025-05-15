import { ChangeEvent, useState } from 'react'
import { Search } from 'lucide-react'

import { Input } from './ui/input'
import { useUser } from '@/hooks/useUser'

function InputSearch() {
  const [value, setValue] = useState('')

  const { filterByName } = useUser()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    filterByName(value)
    setValue(value)
  }

  return (
    <h1>
      <Input
        icon={<Search />}
        placeholder="Buscar..."
        value={value}
        onChange={handleChange}
      />
    </h1>
  )
}

export { InputSearch }
