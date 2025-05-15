import { useCallback, type ReactNode } from 'react'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from './ui/pagination'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'

export interface PaginationWithLinksProps {
  pageSizeSelectOptions?: number[]
  totalCount: number
  pageSize: number
  page: number
  pageSearchParam?: string
}

function AppPagination({
  pageSizeSelectOptions,
  pageSize,
  totalCount,
  page,
}: PaginationWithLinksProps) {
  const totalPageCount = Math.ceil(totalCount / pageSize)
  const currentItemsCount =
    totalPageCount === page ? totalCount : page * pageSize

  const renderPageNumbers = useCallback(() => {
    const items: ReactNode[] = []
    const maxVisiblePages = 5

    if (totalPageCount <= maxVisiblePages) {
      for (let i = 1; i <= totalPageCount; i++) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink isActive={page === i}>{i}</PaginationLink>
          </PaginationItem>
        )
      }
    } else {
      items.push(
        <PaginationItem key={1}>
          <PaginationLink isActive={page === 1}>1</PaginationLink>
        </PaginationItem>
      )

      if (page > 3) {
        items.push(
          <PaginationItem key="ellipsis-start">
            <PaginationEllipsis />
          </PaginationItem>
        )
      }

      const start = Math.max(2, page - 1)
      const end = Math.min(totalPageCount - 1, page + 1)

      for (let i = start; i <= end; i++) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink isActive={page === i}>{i}</PaginationLink>
          </PaginationItem>
        )
      }

      if (page < totalPageCount - 2) {
        items.push(
          <PaginationItem key="ellipsis-end">
            <PaginationEllipsis />
          </PaginationItem>
        )
      }

      items.push(
        <PaginationItem key={totalPageCount}>
          <PaginationLink isActive={page === totalPageCount}>
            {totalPageCount}
          </PaginationLink>
        </PaginationItem>
      )
    }

    return items
  }, [page, totalPageCount])

  return (
    <div className="flex w-full flex-col items-center justify-between text-center text-sm md:flex-row">
      <div>
        {currentItemsCount} de {totalCount}
      </div>
      <Pagination>
        <PaginationContent className="max-sm:gap-0">
          <PaginationItem>
            <PaginationPrevious
              aria-disabled={page === 1}
              tabIndex={page === 1 ? -1 : undefined}
              className={
                page === 1 ? 'pointer-events-none opacity-50' : undefined
              }
            />
          </PaginationItem>
          {renderPageNumbers()}
          <PaginationItem>
            <PaginationNext
              aria-disabled={page === totalPageCount}
              tabIndex={page === totalPageCount ? -1 : undefined}
              className={
                page === totalPageCount
                  ? 'pointer-events-none opacity-50'
                  : undefined
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      {!!pageSizeSelectOptions && (
        <div className="flex flex-col gap-4">
          <SelectRowsPerPage
            options={pageSizeSelectOptions}
            setPageSize={(a) => {
              console.log('aaaaaa', a)
            }}
            pageSize={pageSize}
          />
        </div>
      )}
    </div>
  )
}

function SelectRowsPerPage({
  options,
  setPageSize,
  pageSize,
}: {
  options: number[]
  setPageSize: (newSize: number) => void
  pageSize: number
}) {
  return (
    <div className="text-light-black flex items-center gap-4">
      <span className="text-light-grey text-sm whitespace-nowrap">
        Itens por página
      </span>

      <Select
        value={String(pageSize)}
        onValueChange={(value) => setPageSize(Number(value))}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select page size">
            {String(pageSize)}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option} value={String(option)}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export { AppPagination }
