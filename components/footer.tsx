"use client"

import Link from "next/link"
import { useTranslation } from "@/components/use-translation"

export function Footer() {
  const t = useTranslation()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t("footer.company")}</h3>
            <p className="text-sm opacity-90">Thudo Weico., JSC</p>
            <p className="text-sm opacity-90 mt-2">
              Số 6, ngõ 347/16, đường Cổ Nhuế, phường Đông Ngạc, thành phố Hà Nội, Việt Nam
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t("footer.services")}</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <Link href="/services" className="hover:opacity-100 transition-opacity">
                  {t("services.consulting")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:opacity-100 transition-opacity">
                  {t("services.planning")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:opacity-100 transition-opacity">
                  {t("services.construction")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t("footer.projects")}</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <Link href="/projects" className="hover:opacity-100 transition-opacity">
                  {t("projects.title")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t("footer.contact")}</h3>
            <p className="text-sm opacity-90">
              <strong>Email:</strong> thudoweico.jsc@gmail.com
            </p>
            <p className="text-sm opacity-90 mt-2">
              <strong>Phone:</strong> 024 37 555 766
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-90">
          <p>{t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  )
}
