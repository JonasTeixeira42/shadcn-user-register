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

interface AppPaginationProps {
  page: number
  setPage: (currentPage: number) => void
  pageSize: number
  setPageSize: (size: number) => void
  totalCount: number
  pageSizeSelectOptions: number[]
  totalPageCount: number
  currentItemsCount: number
}

function AppPagination({
  page,
  setPage,
  pageSize,
  setPageSize,
  totalCount,
  totalPageCount,
  currentItemsCount,
  pageSizeSelectOptions,
}: AppPaginationProps) {
  const handlePageChange = useCallback(
    (currentPage: number) => {
      setPage(currentPage)
    },
    [setPage]
  )

  const handleSizeChange = (size: number) => {
    setPage(1)
    setPageSize(size)
  }

  const renderPageNumbers = useCallback(() => {
    const items: ReactNode[] = []
    const maxVisiblePages = 5

    if (totalPageCount <= maxVisiblePages) {
      for (let i = 1; i <= totalPageCount; i++) {
        items.push(
          <PaginationItem key={i} onClick={() => handlePageChange(i)}>
            <PaginationLink isActive={page === i}>{i}</PaginationLink>
          </PaginationItem>
        )
      }
    } else {
      items.push(
        <PaginationItem key={1} onClick={() => handlePageChange(1)}>
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
          <PaginationItem key={i} onClick={() => handlePageChange(i)}>
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
        <PaginationItem
          key={totalPageCount}
          onClick={() => handlePageChange(totalPageCount)}
        >
          <PaginationLink isActive={page === totalPageCount}>
            {totalPageCount}
          </PaginationLink>
        </PaginationItem>
      )
    }

    return items
  }, [page, totalPageCount, handlePageChange])

  return (
    <div className="flex w-full flex-col items-center justify-between text-center text-sm md:flex-row">
      <div>
        {currentItemsCount} de {totalCount}
      </div>
      <Pagination>
        <PaginationContent className="max-sm:gap-0">
          <PaginationItem>
            <PaginationPrevious
              onClick={() => setPage(page - 1)}
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
              onClick={() => setPage(page + 1)}
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
            pageSize={pageSize}
            options={pageSizeSelectOptions}
            setPageSize={handleSizeChange}
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
