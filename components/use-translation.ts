"use client"

import { useLanguage } from "@/lib/language-context"
import { getTranslation } from "@/lib/i18n"

export function useTranslation() {
  const { language } = useLanguage()
  return (key: string) => getTranslation(language, key)
}
