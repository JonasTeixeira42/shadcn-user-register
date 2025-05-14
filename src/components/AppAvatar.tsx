import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

interface AvatarProps {
  url?: string
  alt?: string
  fallback?: string
  className?: string
}

function AppAvatar({ url, alt, fallback, className }: AvatarProps) {
  return (
    <Avatar className={className}>
      <AvatarImage src={url} alt={alt} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  )
}

export { AppAvatar }
