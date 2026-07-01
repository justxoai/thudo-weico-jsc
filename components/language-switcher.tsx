"use client"

import { useLanguage } from "@/lib/language-context"
import type { Language } from "@/lib/i18n"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const languages: { code: Language; label: string }[] = [
    { code: "vi", label: "VN" },
    { code: "en", label: "EN" },
    { code: "lo", label: "LA" },
  ]

  return (
    <div className="flex items-center border border-slate-200 dark:border-slate-800 rounded-full p-0.5 bg-slate-50 dark:bg-slate-900/50 shadow-sm">
      {languages.map((lang) => {
        const isActive = language === lang.code
        return (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`cursor-pointer px-3 py-1 text-xs font-bold rounded-full transition-all duration-200 ${
              isActive
                ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm"
                : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
            }`}
          >
            {lang.label}
          </button>
        )
      })}
    </div>
  )
}
