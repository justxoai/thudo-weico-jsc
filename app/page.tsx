"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useTranslation } from "@/components/use-translation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Building2, Phone, Mail, Clock, MapPin, Calendar } from "lucide-react"
import { getProjectsByLanguage } from "@/lib/projects-data"
import { useLanguage } from "@/lib/language-context"
import { getRandomImageForProject } from "@/lib/image-utils"

export default function Home() {
  const t = useTranslation()
  const { language } = useLanguage()

  // Get recent projects (3 most recent with dates)
  const projectsByLang = getProjectsByLanguage(language as "vi" | "en" | "lo")
  const recentProjects = projectsByLang.filter((p) => p.startDate).slice(0, 3)

  const getDisplayImage = (project: any) => {
    if (project.image && !project.image.includes("/placeholder")) {
      return project.image
    }
    return getRandomImageForProject(project.id)
  }

  // Get first 3 services
  const services = [
    {
      title: t("services.consulting"),
      desc: t("services.consultingDesc"),
    },
    {
      title: t("services.planning"),
      desc: t("services.planningDesc"),
    },
    {
      title: t("services.construction"),
      desc: t("services.constructionDesc"),
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary to-secondary py-20 md:py-32 text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">{t("home.title")}</h1>
              <p className="text-lg md:text-xl opacity-90 mb-8 text-balance">{t("home.subtitle")}</p>
              <p className="text-base md:text-lg opacity-75 mb-8 italic text-balance">
                {t("home.slogan")}
              </p>
              <Link href="/services">
                <Button size="lg" variant="secondary" className="gap-2">
                  {t("home.cta")}
                  <ArrowRight size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 md:py-24 bg-secondary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("home.aboutSection")}</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">{t("home.aboutSectionDesc")}</p>
                <Link href="/about">
                  <Button className="gap-2">
                    {t("home.learnMore")}
                    <ArrowRight size={20} />
                  </Button>
                </Link>
              </div>
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg p-8 border border-border">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-primary mb-1">18+</p>
                    <p className="font-bold">{t("services.experience")}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary mb-1">30+</p>
                    <p className="font-bold">{t("services.staff")}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary mb-1">18+</p>
                    <p className="font-bold">{t("services.projects")}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary mb-1">23/34</p>
                    <p className="font-bold">{t("services.provinces")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Projects Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("home.recentProjects")}</h2>
              <p className="text-muted-foreground text-lg">{t("home.recentProjectsDesc")}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {recentProjects.map((project) => (
                <Card
                  key={project.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
                >
                  <div className="relative overflow-hidden h-48 bg-muted">
                    <img
                      src={getDisplayImage(project) || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground mb-3">
                      <MapPin size={16} />
                      <span>{project.location}</span>
                    </div>

                    {project.year && (
                      <div className="flex items-center gap-2 text-muted-foreground mb-3">
                        <Calendar size={16} />
                        <span>{project.year}</span>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Link href="/projects">
                <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                  {t("home.viewAllProjects")}
                  <ArrowRight size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 bg-secondary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("home.ourServices")}</h2>
              <p className="text-muted-foreground text-lg">{t("home.ourServicesDesc")}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {services.map((service, idx) => (
                <Card key={idx} className="p-6 hover:shadow-lg transition-shadow group cursor-pointer">
                  <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{service.desc}</p>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Link href="/services">
                <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                  {t("home.viewAllServices")}
                  <ArrowRight size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24 bg-background border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("contact.title")}</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">{t("contact.sendMessage")}</p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building2 className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">{t("contact.office")}</p>
                      <p className="text-sm text-muted-foreground">{t("contact.locationOffice")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">{t("contact.phone")}</p>
                      <p className="text-sm text-muted-foreground">024. 37. 555. 766</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">{t("contact.email")}</p>
                      <p className="text-sm text-muted-foreground">thudoweico.jsc@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">{t("contact.workingHours")}</p>
                      <p className="text-sm text-muted-foreground">{t("contact.workingOffice")}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-secondary/5 rounded-lg p-8 border border-border">
                <h3 className="font-bold text-lg mb-4">{t("contact.faq")}</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-sm mb-2">{t("contact.responseTime")}</p>
                    <p className="text-sm text-muted-foreground">{t("contact.responseTimeAnswer")}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-2">{t("contact.onlineConsulting")}</p>
                    <p className="text-sm text-muted-foreground">{t("contact.onlineConsultingAnswer")}</p>
                  </div>
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
