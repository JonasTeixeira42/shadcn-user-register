import { Heading } from './Heading'

function Summary() {
  return (
    <section className="mt-16 grid grid-cols-2 px-0 md:grid-cols-4 md:px-6">
      <SummaryCard title="Usuários" description="294" />
      <SummaryCard title="Tempo de sessão" description="31m20s" />
      <SummaryCard title="Ativos" description="203" />
      <SummaryCard title="Inativos" description="127" />
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
      <strong className="font-noto text-light-black mt-2 inline-block text-3xl font-normal">
        {description}
      </strong>
    </article>
  )
}

export { Summary }
