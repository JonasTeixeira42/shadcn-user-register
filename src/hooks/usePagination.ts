import { useState } from 'react'

const PAGINATION_SIZE_OPTIONS = [5, 10, 15]

function usePagination(totalCount: number) {
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(PAGINATION_SIZE_OPTIONS[0])

  const totalPageCount = Math.ceil(totalCount / pageSize)
  const currentItemsCount =
    totalPageCount === page ? totalCount : page * pageSize

  return {
    page,
    setPage,
    pageSize,
    setPageSize,
    totalPageCount,
    currentItemsCount,
    pageSizeSelectOptions: PAGINATION_SIZE_OPTIONS,
  }
}

export { usePagination }
