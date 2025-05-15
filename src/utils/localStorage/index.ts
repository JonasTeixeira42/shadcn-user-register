import { User } from '@/domain/user/types/user'

const APP_KEY = 'FRONT_END_TEST'

export function getStorageItem<T>(key: string): T | null {
  const data = window.localStorage.getItem(`${APP_KEY}_${key}`)
  if (!data) {
    return null
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return JSON.parse(data)
}

export function setStorageItem(key: string, value: User[]) {
  const data = JSON.stringify(value)
  return window.localStorage.setItem(`${APP_KEY}_${key}`, data)
}
