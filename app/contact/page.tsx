"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useTranslation } from "@/components/use-translation"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  const t = useTranslation()

  const contactInfo = [
    {
      icon: MapPin,
      title: t("contact.office"),
      content: t("contact.locationOffice"),
    },
    {
      icon: Phone,
      title: t("contact.phone"),
      content: "024. 37. 555. 766",
    },
    {
      icon: Mail,
      title: t("contact.email"),
      content: "thudoweico2006@gmail.com",
    },
    {
      icon: Clock,
      title: t("contact.workingHours"),
      content: t("contact.workingOffice"),
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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-secondary py-16 md:py-24 text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("contact.title")}</h1>
            <p className="text-lg opacity-90 max-w-2xl">{t("contact.sendMessage")}</p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon
                return (
                  <Card key={idx} className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <h3 className="font-bold mb-2">{info.title}</h3>
                    <p className="text-sm text-muted-foreground">{info.content}</p>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-secondary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">{t("contact.faq")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {faqItems.map((item, idx) => (
                <Card key={idx} className="p-6">
                  <h3 className="font-bold mb-1">{item.question}</h3>
                  <p className="text-sm text-muted-foreground">{item.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
