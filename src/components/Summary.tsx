import { Plus } from 'lucide-react'

import { Heading } from './Heading'
import { Button } from './ui/button'

function Summary() {
  return (
    <section>
      <div className="flex flex-col items-start justify-between md:flex-row">
        <Heading as="h1">Usuário</Heading>
        <Button rounded="circle" size="lg" className="w-full md:w-auto">
          <Plus />
          <span>Adicionar</span>
        </Button>
      </div>
      <section className="mt-16 grid grid-cols-2 px-0 md:grid-cols-4 md:px-6">
        <SummaryCard title="Usuários" description="294" />
        <SummaryCard title="Tempo de sessão" description="31m20s" />
        <SummaryCard title="Ativos" description="203" />
        <SummaryCard title="Inativos" description="127" />
      </section>
    </section>
  )
}

interface SummaryCardProps {
  title: string
  description: string
}

function SummaryCard({ title, description }: SummaryCardProps) {
  return (
    <article>
      <Heading size="tiny">{title}</Heading>
      <strong className="font-noto text-3xl font-normal">{description}</strong>
    </article>
  )
}

export { Summary }
