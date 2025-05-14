import { useState } from 'react'
import { Search } from 'lucide-react'

import { Input } from './ui/input'

function InputSearch() {
  const [value, setValue] = useState('')

  return (
    <h1>
      <Input
        icon={<Search />}
        placeholder="Buscar..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </h1>
  )
}

export { InputSearch }
