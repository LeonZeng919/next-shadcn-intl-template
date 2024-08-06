import React from 'react'
import { useLocale } from 'next-intl'
import { locales } from '@/i18n'
import { Link } from '@/navigation'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'

export const LocaleSwitcher = () => {
  const currentLocale = useLocale()

  return (
    <ul className="flex gap-4">
      {locales.map((locale) => (
        <li key={locale}>
          <Button
            asChild
            className={cn(locale === currentLocale && 'underline', 'uppercase')}
          >
            <Link href="/" locale={locale}>
              {locale}
            </Link>
          </Button>
        </li>
      ))}
    </ul>
  )
}
