import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { CASE_STUDIES } from '@/lib/constants'
import { CaseDetail } from '@/components/CaseDetail'

// ============================================================
// STATIC PARAMS — pre-render all case study routes
// ============================================================

export function generateStaticParams() {
  return CASE_STUDIES.map((caso) => ({ id: caso.id }))
}

// ============================================================
// DYNAMIC METADATA — per-case SEO
// ============================================================

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const caso = CASE_STUDIES.find((c) => c.id === id)
  if (!caso) return {}

  return {
    title: caso.title,
    description: caso.impact,
    openGraph: {
      title: `${caso.title} | NETRIX`,
      description: caso.impact,
      type: 'article',
    },
  }
}

// ============================================================
// PAGE
// ============================================================

export default async function CasoPage({ params }: Props) {
  const { id } = await params
  const caso = CASE_STUDIES.find((c) => c.id === id)
  if (!caso) notFound()

  return <CaseDetail caso={caso} />
}
