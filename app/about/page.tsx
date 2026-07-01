"use client"

import React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useTranslation } from "@/components/use-translation"
import { useLanguage } from "@/lib/language-context"
import {
  Calendar,
  Play,
  Building2,
  UserCheck,
  Award,
  ShieldCheck,
  Sprout,
  FileText,
  Compass,
  CheckCircle2
} from "lucide-react"

export default function AboutPage() {
  const t = useTranslation()
  const { language } = useLanguage()

  const headingParts = t("about.introductionHeading").split(" Thudo Weico")
  const mainHeadingPre = headingParts[0] || ""
  const hasThudoWeico = t("about.introductionHeading").includes("Thudo Weico")

  const values = [
    {
      icon: ShieldCheck,
      title: t("about.professionalism"),
      desc: t("about.professionalismDesc"),
    },
    {
      icon: Award,
      title: t("about.qualityExcellence"),
      desc: t("about.qualityExcellenceDesc"),
    },
    {
      icon: Sprout,
      title: t("about.innovationSustainability"),
      desc: t("about.innovationSustainabilityDesc"),
    },
  ]

  const handleScrollToOverview = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.getElementById("overview")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-background antialiased font-sans">
      <Header />

      <main className="flex-1">
        {/* Hero Section with Diagonal Cut */}
        <section className="relative min-h-[520px] md:min-h-[620px] flex items-center justify-start text-white overflow-hidden bg-[#031d1c]">
          <div className="absolute inset-0 z-0">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUdhv1oBUhSEmlnIulgFZ266Q8iU-iexv-tir5TdVZ_qFN13q6_l-4b_cmjMmIz7Z1hY58PGm-0jiWu5tR3DWylOHQye4qELH4no_dt58XtDfZqcTNCQ5-tiiY5CmWs5wMYbeEkAPWWc-rp_yecZ39s4LNvR8Gq7ZAbK-XJqbQqv7HesOHOsIE8U1nh39Jvl_Ui1MFO3WOW1t31r3Ft3hK3wMevIcabJiN-Ctw7aZtCd_U7mIdMjvOTeLJr29FmI68LNyCDsS-R94"
              alt="Thudo Weico Banner"
              className="w-full h-full object-cover opacity-60 scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#031d1c]/95 via-[#072d2b]/85 to-transparent z-10" />
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-background z-20" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)" }} />
          </div>

          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 pb-36">
            {/* Established Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-sm animate-fade-in">
              <Calendar size={14} className="flex-shrink-0" />
              <span>{t("about.establishedBadge")}</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 max-w-3xl leading-[1.15]">
              <span className="block text-slate-100/95">{mainHeadingPre}</span>
              {hasThudoWeico && (
                <span className="block mt-1 text-emerald-400 drop-shadow-sm font-black">Thudo Weico</span>
              )}
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed mb-10 font-normal">
              {t("about.bannerDesc")}
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#overview"
                onClick={handleScrollToOverview}
                className="px-6 py-3.5 rounded-lg bg-emerald-400 hover:bg-emerald-500 text-[#031d1c] font-bold shadow-lg hover:shadow-emerald-400/20 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2 text-sm"
              >
                <span>{t("about.exploreNow")}</span>
              </a>
            </div>
          </div>
        </section>

        {/* Company Info Overview Section */}
        <section id="overview" className="py-16 md:py-24 bg-background relative z-10 -mt-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column - Overview Content */}
              <div className="lg:col-span-7 space-y-6">
                <span className="text-emerald-600 font-bold uppercase tracking-wider text-xs block">
                  {t("about.companyInfo")}
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  {t("about.overviewHeading")}
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed font-normal text-[15px]">
                  <p>{t("about.introductionDescription")}</p>
                  <p>{t("about.introductionExperience")}</p>
                </div>

                {/* Office & CEO Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {/* Office detail card */}
                  <div className="flex items-start gap-4 p-4 bg-slate-50/70 border border-slate-100 rounded-xl hover:shadow-sm transition-all duration-300">
                    <div className="p-3 bg-[#0B3534] text-white rounded-lg flex-shrink-0 shadow-sm shadow-[#0B3534]/20">
                      <Building2 size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm mb-1">{t("about.leaderOfficeLabel")}</h4>
                      <p className="text-[12px] text-slate-600 leading-normal">{t("about.leaderOfficeValue")}</p>
                    </div>
                  </div>

                  {/* Leader detail card */}
                  <div className="flex items-start gap-4 p-4 bg-slate-50/70 border border-slate-100 rounded-xl hover:shadow-sm transition-all duration-300">
                    <div className="p-3 bg-sky-500 text-white rounded-lg flex-shrink-0 shadow-sm shadow-sky-500/20">
                      <UserCheck size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm mb-1">{t("about.leaderLabel")}</h4>
                      <p className="text-[12px] text-slate-600 leading-normal">{t("about.leaderValue")}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Mission & Stats / Certificates Badge */}
              <div className="lg:col-span-5 space-y-6 lg:pl-4">
                {/* Mission Dark Teal Card */}
                <div className="bg-[#0B3534] text-white p-8 rounded-2xl relative overflow-hidden shadow-xl border border-teal-950 flex flex-col justify-between min-h-[320px]">
                  <Award size={180} className="absolute right-[-30px] bottom-[-30px] text-teal-800/10 pointer-events-none" />
                  
                  <div className="relative z-10">
                    <span className="text-emerald-400 font-bold uppercase tracking-wider text-[11px] block mb-3">
                      {t("about.mission")}
                    </span>
                    <p className="text-teal-50 text-lg md:text-xl leading-relaxed font-semibold">
                      {t("about.visionValue")}
                    </p>
                  </div>

                  <div className="relative z-10 pt-6 mt-6 border-t border-teal-800/60">
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div>
                        <div className="text-2xl font-black text-emerald-400 tracking-tight">2006</div>
                        <div className="text-[10px] text-teal-200/80 uppercase font-bold tracking-wider mt-1">
                          {t("about.established")}
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-black text-emerald-400 tracking-tight">ISO 9001</div>
                        <div className="text-[10px] text-teal-200/80 uppercase font-bold tracking-wider mt-1">
                          Tiêu chuẩn
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-black text-emerald-400 tracking-tight">500+</div>
                        <div className="text-[10px] text-teal-200/80 uppercase font-bold tracking-wider mt-1">
                          {t("about.projectsLabel")}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Rank 1 Certification Card */}
                <div className="bg-gradient-to-br from-[#EBF1FF] to-[#E2EBFC] text-slate-800 p-8 rounded-2xl border border-blue-100 shadow-sm relative overflow-hidden flex items-start gap-5 hover:shadow-md transition-shadow duration-300">
                  <div className="p-3 bg-blue-500/10 text-blue-600 rounded-xl flex-shrink-0 shadow-sm">
                    <Award size={24} />
                  </div>
                  <div className="space-y-1">
                    <span className="text-blue-600 font-bold uppercase tracking-wider text-[10px] block">
                      {t("about.certificateLabel")}
                    </span>
                    <h3 className="text-lg font-extrabold text-slate-900 leading-tight">
                      {t("about.nationalRank1")}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal pt-1">
                      {t("about.nationalRank1Desc")}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-16 md:py-24 bg-slate-50/60 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-center block text-emerald-600 font-bold uppercase tracking-wider text-xs mb-3">
              {t("about.valuesSubtitle")}
            </span>
            <h2 className="text-center text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              {t("about.coreValues")}
            </h2>
            <p className="text-center text-slate-500 max-w-2xl mx-auto mb-16 text-sm md:text-[15px] leading-relaxed">
              {t("about.valuesIntro")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, idx) => {
                const IconComponent = value.icon
                return (
                  <div
                    key={idx}
                    className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-start"
                  >
                    <div className="p-3.5 bg-slate-50 text-emerald-600 rounded-xl mb-6 border border-slate-100 flex-shrink-0">
                      <IconComponent size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">{value.title}</h3>
                    <p className="text-[14px] text-slate-600 leading-relaxed font-normal">{value.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Certificates & Licenses Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column - Titles & List Items */}
              <div className="lg:col-span-6 space-y-6">
                <span className="text-emerald-600 font-bold uppercase tracking-wider text-xs block">
                  {t("about.certSectionSubtitle")}
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  {t("about.certificatesLicenses")}
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm md:text-[15px] font-normal mb-8">
                  {t("about.certSectionDesc")}
                </p>

                <div className="space-y-4">
                  {/* Item 1 */}
                  <div className="flex items-start gap-4 p-5 bg-[#EEF2F6]/60 border border-slate-100 rounded-xl hover:shadow-sm transition-all duration-300">
                    <div className="p-3 bg-blue-500/10 text-blue-600 rounded-lg flex-shrink-0">
                      <FileText size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 text-sm mb-1">{t("about.certItem1Title")}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">{t("about.certItem1Desc")}</p>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="flex items-start gap-4 p-5 bg-[#EEF2F6]/60 border border-slate-100 rounded-xl hover:shadow-sm transition-all duration-300">
                    <div className="p-3 bg-emerald-500/10 text-emerald-600 rounded-lg flex-shrink-0">
                      <Compass size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 text-sm mb-1">{t("about.certItem2Title")}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">{t("about.certItem2Desc")}</p>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="flex items-start gap-4 p-5 bg-[#EEF2F6]/60 border border-slate-100 rounded-xl hover:shadow-sm transition-all duration-300">
                    <div className="p-3 bg-teal-500/10 text-teal-600 rounded-lg flex-shrink-0">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 text-sm mb-1">{t("about.certItem3Title")}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">{t("about.certItem3Desc")}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Image & Floating Badge */}
              <div className="lg:col-span-6 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 max-w-full lg:max-w-xl mx-auto group">
                  <img
                    src="/green-office-building.jpg"
                    alt="Thudo Weico Office Building"
                    className="w-full h-full object-cover aspect-4/3 group-hover:scale-102 transition-transform duration-500"
                  />
                  
                  {/* Floating Glass Badge */}
                  <div className="absolute bottom-6 left-6 right-6 sm:left-8 bg-white/85 backdrop-blur-md p-4 rounded-xl border border-white/40 shadow-lg flex items-center gap-4 max-w-sm">
                    <div className="h-10 w-10 bg-[#0B3534] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md shadow-[#0B3534]/30 flex-shrink-0">
                      8+
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                        {t("about.recentChange")}
                      </div>
                      <div className="text-xs text-slate-800 font-black truncate mt-0.5">
                        {t("about.updateYear")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Call To Action Banner Section */}
        <section className="relative bg-[#0B3534] text-white py-16 md:py-20 overflow-hidden">
          <Award size={280} className="absolute left-[-60px] top-[-60px] text-teal-800/10 pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              {t("about.ctaHeading")}
            </h2>
            <p className="text-teal-100 max-w-2xl mx-auto text-sm md:text-[15px] leading-relaxed font-normal">
              {t("about.ctaDesc")}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a
                href="/contact"
                className="px-6 py-3.5 rounded-lg bg-emerald-400 hover:bg-emerald-500 text-[#031d1c] font-bold shadow-lg hover:shadow-emerald-400/20 transition-all duration-300 hover:-translate-y-0.5 text-sm"
              >
                {t("about.ctaButtonContact")}
              </a>
              <a
                href="/services"
                className="px-6 py-3.5 rounded-lg border border-teal-600 hover:border-white text-teal-100 hover:text-white font-bold transition-all duration-300 text-sm hover:bg-white/5"
              >
                {t("about.ctaButtonServices")}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
