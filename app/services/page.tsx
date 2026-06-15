"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useTranslation } from "@/components/use-translation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Compass, Building2, Pencil, Briefcase, Eye, DollarSign, Leaf, FileText } from "lucide-react"

export default function ServicesPage() {
  const t = useTranslation()
  const [showAll, setShowAll] = useState(false)

  const services = [
    {
      icon: Compass,
      title: t("services.consulting"),
      desc: t("services.consultingDesc"),
      details: t("services.consultingDetails"),
    },
    {
      icon: Building2,
      title: t("services.planning"),
      desc: t("services.planningDesc"),
      details: t("services.planningDetails"),
    },
    {
      icon: Pencil,
      title: t("services.construction"),
      desc: t("services.constructionDesc"),
      details: t("services.constructionDetails"),
    },
    {
      icon: Briefcase,
      title: t("services.installation"),
      desc: t("services.installationDesc"),
      details: t("services.installationDetails"),
    },
    {
      icon: Eye,
      title: t("services.bidding"),
      desc: t("services.biddingDesc"),
      details: t("services.biddingDetails"),
    },
    {
      icon: DollarSign,
      title: t("services.equipment"),
      desc: t("services.equipmentDesc"),
      details: t("services.equipmentDetails"),
    },
    {
      icon: Leaf,
      title: t("services.research"),
      desc: t("services.researchDesc"),
      details: t("services.researchDetails"),
    },
    {
      icon: FileText,
      title: t("services.technology"),
      desc: t("services.technologyDesc"),
      details: t("services.technologyDetails"),
    },
  ]

  const displayedServices = showAll ? services : services.slice(0, 4)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-secondary py-16 md:py-24 text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("services.title")}</h1>
            <p className="text-lg opacity-90 max-w-2xl">{t("services.consultingDesc")}</p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {displayedServices.map((service, idx) => {
                const Icon = service.icon
                return (
                  <Card key={idx} className="p-6 hover:shadow-lg transition-shadow group cursor-pointer">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{service.desc}</p>
                    <ul className="space-y-1">
                      {service.details.map((detail: string, didx: number) => (
                        <li key={didx} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                )
              })}
            </div>

            {services.length > 4 && (
              <div className="flex justify-center mt-8">
                <Button onClick={() => setShowAll(!showAll)} variant="outline" className="px-8 py-2">
                  {showAll ? "Show Less" : "Show More"}
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 bg-secondary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">{t("services.whyChooseUs")}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">18+</div>
                <p className="font-semibold text-foreground mb-2">{t("services.experience")}</p>
                <p className="text-sm text-muted-foreground">{t("services.experienceDesc")}</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">30+</div>
                <p className="font-semibold text-foreground mb-2">{t("services.staff")}</p>
                <p className="text-sm text-muted-foreground">{t("services.staffDesc")}</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">18+</div>
                <p className="font-semibold text-foreground mb-2">{t("services.projects")}</p>
                <p className="text-sm text-muted-foreground">{t("services.projectsDesc")}</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">23/34</div>
                <p className="font-semibold text-foreground mb-2">{t("services.provinces")}</p>
                <p className="text-sm text-muted-foreground">{t("services.provincesDesc")}</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-border">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-bold text-lg text-primary mb-2">{t("services.commitment")}</h3>
                  <p className="text-sm text-muted-foreground">{t("services.international")}</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary mb-2">{t("services.internationalStandards")}</h3>
                  <p className="text-sm text-muted-foreground">{t("services.internationalStandardsDesc")}</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary mb-2">{t("services.trustProfessional")}</h3>
                  <p className="text-sm text-muted-foreground">{t("services.trustProfessionalDesc")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
