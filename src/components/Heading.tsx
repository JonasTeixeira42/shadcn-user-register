import { ReactNode } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

type Headings = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type HeadingVariants = VariantProps<typeof headingVariants>

interface HeadingProps extends HeadingVariants {
  children: ReactNode
  as?: Headings
}

const headingVariants = cva('text-heading', {
  variants: {
    size: {
      default: 'font-noto text-3xl',
      tiny: 'text-xs text-heading-tiny font-normal',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})

function Heading({ children, as = 'h2', size }: HeadingProps) {
  const Component = as

  return <Component className={headingVariants({ size })}>{children}</Component>
}

export { Heading }
