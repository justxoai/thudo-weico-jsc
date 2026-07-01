"use client"

import React, { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useTranslation } from "@/components/use-translation"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import {
  Compass,
  Building2,
  Pencil,
  Briefcase,
  Eye,
  DollarSign,
  Leaf,
  FileText,
  Play,
  Award,
  CheckCircle2,
  Users,
  ChevronDown,
  ChevronUp
} from "lucide-react"

export default function ServicesPage() {
  const t = useTranslation()
  const { language } = useLanguage()
  const [showAll, setShowAll] = useState(false)

  const getServiceDetails = (key: string): string[] => {
    const res = t(key)
    return Array.isArray(res) ? res : []
  }

  const services = [
    {
      icon: Compass,
      title: t("services.consulting"),
      desc: t("services.consultingDesc"),
      details: getServiceDetails("services.consultingDetails"),
    },
    {
      icon: Building2,
      title: t("services.planning"),
      desc: t("services.planningDesc"),
      details: getServiceDetails("services.planningDetails"),
    },
    {
      icon: Pencil,
      title: t("services.construction"),
      desc: t("services.constructionDesc"),
      details: getServiceDetails("services.constructionDetails"),
    },
    {
      icon: Briefcase,
      title: t("services.installation"),
      desc: t("services.installationDesc"),
      details: getServiceDetails("services.installationDetails"),
    },
    {
      icon: Eye,
      title: t("services.bidding"),
      desc: t("services.biddingDesc"),
      details: getServiceDetails("services.biddingDetails"),
    },
    {
      icon: DollarSign,
      title: t("services.equipment"),
      desc: t("services.equipmentDesc"),
      details: getServiceDetails("services.equipmentDetails"),
    },
    {
      icon: Leaf,
      title: t("services.research"),
      desc: t("services.researchDesc"),
      details: getServiceDetails("services.researchDetails"),
    },
    {
      icon: FileText,
      title: t("services.technology"),
      desc: t("services.technologyDesc"),
      details: getServiceDetails("services.technologyDetails"),
    },
  ]

  const displayedServices = showAll ? services : services.slice(0, 4)

  const handleScrollToGrid = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.getElementById("services-grid")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const stats = [
    {
      number: "18+",
      label: t("services.experience"),
      desc: t("services.experienceDesc"),
    },
    {
      number: "30+",
      label: t("services.staff"),
      desc: t("services.staffDesc"),
    },
    {
      number: "18+",
      label: t("services.projects"),
      desc: t("services.projectsDesc"),
    },
    {
      number: "23/34",
      label: t("services.provinces"),
      desc: t("services.provincesDesc"),
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background antialiased font-sans">
      <Header />

      <main className="flex-1">
        {/* Hero Section with Diagonal Cut */}
        <section className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-start text-white overflow-hidden bg-[#031d1c]">
          <div className="absolute inset-0 z-0">
            <img
              src="/water-infrastructure-system.jpg"
              alt="Water Infrastructure System"
              className="w-full h-full object-cover opacity-50 scale-102 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#031d1c]/95 via-[#072d2b]/80 to-transparent z-10" />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-background z-20" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)" }} />
          </div>

          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 pb-32 animate-fade-in">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-sm">
              <Award size={14} className="flex-shrink-0 animate-pulse" />
              <span>{t("services.badgeLabel")}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 max-w-3xl leading-[1.15]">
              <span className="block text-slate-100/90">{t("services.title")}</span>
              <span className="block mt-1 text-emerald-400 font-black">Thudo Weico</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed mb-10 font-normal">
              {t("services.consultingDesc")}
            </p>

            {/* Actions */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#services-grid"
                onClick={handleScrollToGrid}
                className="px-6 py-3.5 rounded-lg bg-emerald-400 hover:bg-emerald-500 text-[#031d1c] font-bold shadow-lg hover:shadow-emerald-400/20 transition-all duration-300 hover:-translate-y-0.5 text-sm"
              >
                <span>{t("services.ctaExplore")}</span>
              </a>
              <a
                href="/contact"
                className="px-6 py-3.5 rounded-lg border border-slate-400 hover:border-white text-slate-200 hover:text-white font-bold transition-all duration-300 flex items-center gap-2 text-sm hover:bg-white/5"
              >
                <span>{t("services.ctaContact")}</span>
              </a>
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section id="services-grid" className="py-16 md:py-24 bg-[#f8f9fa] relative z-10 -mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-emerald-600 font-bold uppercase tracking-wider text-xs block">
                {t("services.operationLabel")}
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                {t("services.sectionHeading")}
              </h2>
              <p className="text-slate-500 text-sm md:text-[15px] leading-relaxed">
                {t("services.sectionIntro")}
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {displayedServices.map((service, idx) => {
                const IconComponent = service.icon
                return (
                  <div
                    key={idx}
                    className="group bg-white p-6 rounded-2xl border border-slate-100 hover:border-emerald-500/20 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Icon */}
                      <div className="w-14 h-14 bg-emerald-500/10 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0B3534] group-hover:text-white transition-all duration-300 shadow-sm shadow-emerald-500/10">
                        <IconComponent size={24} />
                      </div>

                      {/* Header */}
                      <h3 className="font-extrabold text-slate-900 text-lg mb-3 group-hover:text-emerald-600 transition-colors duration-200">
                        {service.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed mb-6">
                        {service.desc}
                      </p>
                    </div>

                    <div>
                      {/* Divider */}
                      <div className="border-t border-slate-100 my-4" />

                      {/* Details list */}
                      <ul className="space-y-2.5">
                        {service.details.map((detail: string, didx: number) => (
                          <li key={didx} className="text-[11px] text-slate-600 flex items-start gap-2 leading-relaxed">
                            <CheckCircle2 size={13} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Toggle Button */}
            {services.length > 4 && (
              <div className="flex justify-center mt-12">
                <Button
                  onClick={() => setShowAll(!showAll)}
                  variant="outline"
                  className="px-8 py-5 border-slate-200 hover:border-slate-350 hover:bg-slate-50 rounded-xl text-slate-700 font-bold transition-all duration-200 flex items-center gap-2 shadow-sm text-sm"
                >
                  {showAll ? (
                    <>
                      <span>{t("services.showLess")}</span>
                      <ChevronUp size={16} />
                    </>
                  ) : (
                    <>
                      <span>{t("services.showMore")}</span>
                      <ChevronDown size={16} />
                    </>
                  )}
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-emerald-600 font-bold uppercase tracking-wider text-xs block">
                {t("about.valuesSubtitle")}
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                {t("services.whyChooseUs")}
              </h2>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-[#f8f9fa] p-8 rounded-2xl border border-slate-100 shadow-sm text-center hover:shadow-md transition-all duration-300 group hover:-translate-y-0.5"
                >
                  <div className="text-4xl md:text-5xl font-black text-emerald-600 mb-3 tracking-tight group-hover:scale-103 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <h4 className="font-bold text-slate-800 text-sm mb-2">{stat.label}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
