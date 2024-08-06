import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import { PageProps } from './layout'
import { LocaleSwitcher } from '@/components/locale-switcher'

export default function Home({ params }: PageProps) {
  const { locale } = params
  unstable_setRequestLocale(locale)
  const t = useTranslations('Index')

  return (
    <main className="">
      <h1>{t('title')}</h1>
      <LocaleSwitcher />
    </main>
  )
}
