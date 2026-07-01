"use client"

import React, { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useTranslation } from "@/components/use-translation"
import { useLanguage } from "@/lib/language-context"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  SendHorizontal,
  ChevronDown,
  Award,
  Calendar,
  ShieldCheck,
  CheckCircle2,
  FileText
} from "lucide-react"

export default function ContactPage() {
  const t = useTranslation()
  const { language } = useLanguage()

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // FAQ Accordion State (first item open by default)
  const [activeFaq, setActiveFaq] = useState<number | null>(0)

  const contactInfo = [
    {
      icon: MapPin,
      title: t("contact.office"),
      content: t("contact.locationOffice"),
      colorClass: "bg-[#0B3534] shadow-sm shadow-[#0B3534]/20",
    },
    {
      icon: Phone,
      title: t("contact.phone"),
      content: "024. 37. 555. 766",
      colorClass: "bg-emerald-600 shadow-sm shadow-emerald-600/20",
    },
    {
      icon: Mail,
      title: t("contact.email"),
      content: "thudoweico2006@gmail.com",
      colorClass: "bg-sky-500 shadow-sm shadow-sky-500/20",
    },
    {
      icon: Clock,
      title: t("contact.workingHours"),
      content: t("contact.workingOffice"),
      colorClass: "bg-teal-500 shadow-sm shadow-teal-500/20",
    },
  ]

  const faqItems = [
    {
      question: t("contact.responseTime"),
      answer: t("contact.responseTimeAnswer"),
    },
    {
      question: t("contact.onlineConsulting"),
      answer: t("contact.onlineConsultingAnswer"),
    },
    {
      question: t("contact.servicePrice"),
      answer: t("contact.servicePriceAnswer"),
    },
    {
      question: t("contact.internationalExperience"),
      answer: t("contact.internationalExperienceAnswer"),
    },
  ]

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      })
      // Clear success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
    }, 1500)
  }

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index)
  }

  const handleScrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.getElementById("contact-section")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-background antialiased font-sans">
      <Header />

      <main className="flex-1">
        {/* Hero Section with Sloped Cut */}
        <section className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-start text-white overflow-hidden bg-[#031d1c]">
          <div className="absolute inset-0 z-0">
            <img
              src="/wastewater-treatment-plant.jpg"
              alt="Wastewater Treatment Plant"
              className="w-full h-full object-cover opacity-50 scale-102 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#031d1c]/95 via-[#072d2b]/80 to-transparent z-10" />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-background z-20" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)" }} />
          </div>

          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 pb-32 animate-fade-in">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-sm">
              <Award size={14} className="flex-shrink-0 animate-pulse" />
              <span>{t("contact.heroBadge")}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 max-w-3xl leading-[1.15]">
              <span className="block text-slate-100/90">{t("contact.heroTitle")}</span>
              <span className="block mt-1 text-emerald-400 font-black">Thudo Weico</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed mb-10 font-normal">
              {t("contact.connectSubtitle")}
            </p>

            {/* Actions */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact-section"
                onClick={handleScrollToForm}
                className="px-6 py-3.5 rounded-lg bg-emerald-400 hover:bg-emerald-500 text-[#031d1c] font-bold shadow-lg hover:shadow-emerald-400/20 transition-all duration-300 hover:-translate-y-0.5 text-sm"
              >
                <span>{t("contact.sendMessage")}</span>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Info & Form Section */}
        <section id="contact-section" className="py-16 md:py-24 bg-background relative z-10 -mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column - Contact Info */}
              <div className="lg:col-span-5 space-y-6">
                <span className="text-emerald-600 font-bold uppercase tracking-wider text-xs block">
                  {t("contact.title")}
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  {language === "vi" ? "Thông tin liên lạc" : language === "en" ? "Contact Information" : "ຂໍ້ມູນຕິດຕໍ່"}
                </h2>
                <p className="text-slate-500 text-sm md:text-[15px] leading-relaxed font-normal pb-4">
                  {t("contact.connectSubtitle")}
                </p>

                {/* Detail boxes */}
                <div className="space-y-4">
                  {contactInfo.map((info, idx) => {
                    const IconComponent = info.icon
                    return (
                      <div
                        key={idx}
                        className="flex items-start gap-4 p-5 bg-slate-50/70 border border-slate-100 rounded-2xl hover:shadow-sm transition-all duration-300"
                      >
                        <div className={`p-3 text-white rounded-xl flex-shrink-0 ${info.colorClass}`}>
                          <IconComponent size={18} />
                        </div>
                        <div>
                          <h4 className="font-extrabold text-slate-800 text-xs uppercase tracking-wider mb-1">
                            {info.title}
                          </h4>
                          <p className="text-xs text-slate-650 leading-relaxed font-normal">{info.content}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div className="lg:col-span-7 lg:pl-6">
                <Card className="p-6 sm:p-8 rounded-2xl shadow-xl border border-slate-100 bg-white">
                  <div className="mb-8">
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">
                      {t("contact.sendMessage")}
                    </h3>
                  </div>

                  {isSubmitted && (
                    <div className="mb-6 p-4 bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm rounded-xl font-medium animate-fade-in">
                      {t("contact.successMessage")}
                    </div>
                  )}

                  <form onSubmit={handleFormSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          {t("contact.name")}
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder={t("contact.namePlaceholder")}
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500/25 focus:border-emerald-500 bg-slate-50/50 shadow-sm transition-all"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder={t("contact.emailPlaceholder")}
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500/25 focus:border-emerald-500 bg-slate-50/50 shadow-sm transition-all"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-1.5">
                      <label htmlFor="subject" className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        {t("contact.subject")}
                      </label>
                      <input
                        id="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder={t("contact.subjectPlaceholder")}
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500/25 focus:border-emerald-500 bg-slate-50/50 shadow-sm transition-all"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        {t("contact.message")}
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={t("contact.messagePlaceholder")}
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500/25 focus:border-emerald-500 bg-slate-50/50 shadow-sm transition-all resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-6 bg-[#0B3534] hover:bg-[#072a29] text-white font-extrabold rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-xs"
                    >
                      {isSubmitting ? (
                        <span>...</span>
                      ) : (
                        <>
                          <span>{t("contact.submit")}</span>
                          <SendHorizontal size={14} />
                        </>
                      )}
                    </Button>
                  </form>
                </Card>
              </div>

            </div>
          </div>
        </section>

        {/* Map Section */}
        <section id="contact-map" className="py-16 md:py-20 bg-slate-50/60 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center space-y-2">
              <span className="text-emerald-600 font-bold uppercase tracking-wider text-xs block">
                {t("contact.ourLocation")}
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                {language === "vi" ? "Vị trí của chúng tôi" : language === "en" ? "Our Headquarters" : "ຫ້ອງການໃຫຍ່ຂອງພວກເຮົາ"}
              </h2>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.7025055169906!2d105.78368851184607!3d21.04458628052788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab33b9b3f4a5%3A0x70d9c2efa2307497!2zNDEgUC4gUGjhuqFtIFR14bqlbiBUw6BpLCBOZ2jEqWEgxJDDtCwgSMOgIE7hu5lpIDEwMDAwLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1782920718368!5m2!1svi!2s"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />

              {/* Floating Address Badge */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-white/50 shadow-lg flex items-center gap-3 max-w-sm hidden sm:flex">
                <div className="h-9 w-9 bg-[#0B3534] text-white rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                  <MapPin size={16} />
                </div>
                <div className="min-w-0">
                  <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">
                    {t("contact.office")}
                  </div>
                  <div className="text-[11px] text-slate-800 font-bold truncate mt-0.5">
                    {t("contact.locationOffice")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Accordion Section */}
        <section className="py-16 md:py-24 bg-background border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column - FAQ Header & Urgency Box */}
              <div className="lg:col-span-5 space-y-6">
                <span className="text-emerald-600 font-bold uppercase tracking-wider text-xs block">
                  FAQs
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  {t("contact.faq")}
                </h2>
                <p className="text-slate-550 text-sm md:text-[15px] leading-relaxed font-normal">
                  {t("contact.faqIntro")}
                </p>

                {/* Urgency Box */}
                <div className="p-6 bg-[#0B3534] text-white rounded-2xl border border-teal-950 relative overflow-hidden shadow-lg space-y-4">
                  <Phone size={120} className="absolute right-[-20px] bottom-[-20px] text-teal-800/10 pointer-events-none" />
                  <div className="space-y-1 relative z-10">
                    <h3 className="font-extrabold text-emerald-400 text-sm">
                      {t("contact.urgencyTitle")}
                    </h3>
                    <p className="text-xs text-teal-100 leading-relaxed">
                      {t("contact.urgencyDesc")}
                    </p>
                  </div>
                  <div className="pt-2 relative z-10">
                    <a
                      href="tel:02437555766"
                      className="inline-flex items-center justify-center px-4 py-2.5 bg-white hover:bg-slate-50 text-[#0B3534] font-bold rounded-xl text-xs transition-colors shadow-md"
                    >
                      {t("contact.urgencyCall")} 024. 37. 555. 766
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column - Accordion */}
              <div className="lg:col-span-7 space-y-4">
                {faqItems.map((item, idx) => {
                  const isOpen = activeFaq === idx
                  return (
                    <div
                      key={idx}
                      className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      {/* Accordion Trigger */}
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full p-5 flex items-center justify-between text-left focus:outline-none"
                      >
                        <span className="font-extrabold text-slate-800 text-sm pr-4">
                          {item.question}
                        </span>
                        <ChevronDown
                          size={18}
                          className={`text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                            isOpen ? "transform rotate-180 text-emerald-600" : ""
                          }`}
                        />
                      </button>

                      {/* Accordion Content */}
                      <div
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="px-5 pb-5 pt-1 text-slate-600 text-xs leading-relaxed font-normal border-t border-slate-50">
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
