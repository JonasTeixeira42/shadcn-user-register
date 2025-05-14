import { ListFilter } from 'lucide-react'

import { InputSearch } from './InputSearch'
import { Button } from './ui/button'

function Search() {
  return (
    <div className="mt-11 flex items-center">
      <div className="mr-3 flex-1">
        <InputSearch />
      </div>
      <Button variant="outline" size="icon">
        <ListFilter />
      </Button>
    </div>
  )
}

export { Search }
