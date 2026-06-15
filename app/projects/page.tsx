"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useTranslation } from "@/components/use-translation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { MapPin, Calendar, X } from "lucide-react"
import { projectsData, getProjectsByLanguage } from "@/lib/projects-data"
import { useLanguage } from "@/lib/language-context"
import { getRandomImageForProject } from "@/lib/image-utils"

const PROJECTS_PER_PAGE = 6

export default function ProjectsPage() {
  const t = useTranslation()
  const { language } = useLanguage()
  const [displayCount, setDisplayCount] = useState(PROJECTS_PER_PAGE)
  const [selectedProject, setSelectedProject] = useState<(typeof projectsData)[0] | null>(null)

  const sortedProjects = [...projectsData].sort((a, b) => {
    if (a.startDate && b.startDate) {
      return b.startDate.getTime() - a.startDate.getTime()
    }
    if (a.startDate) return -1
    if (b.startDate) return 1
    return 0
  })

  const localizedProjects = getProjectsByLanguage(language as "vi" | "en" | "lo")
  const sortedLocalizedProjects = sortedProjects.map((p) => localizedProjects.find((lp) => lp.id === p.id)!)

  const displayedProjects = sortedLocalizedProjects.slice(0, displayCount)
  const hasMore = displayCount < sortedLocalizedProjects.length

  const handleShowMore = () => {
    setDisplayCount((prev) => prev + PROJECTS_PER_PAGE)
  }

  const getProjectDetail = (id: number) => {
    return sortedProjects.find((p) => p.id === id)
  }

  const getDisplayImage = (project: any) => {
    if (project.image && !project.image.includes("/placeholder")) {
      return project.image
    }
    return getRandomImageForProject(project.id)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-secondary py-16 md:py-24 text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("projects.title")}</h1>
            <p className="text-lg opacity-90 max-w-2xl">
              {language === "vi"
                ? "Khám phá danh mục các dự án hoàn thành và đang thực hiện của chúng tôi"
                : language === "en"
                  ? "Explore our portfolio of completed and ongoing projects"
                  : "ស្វាគមន៍ដល់ផលិតផលរបស់យើងដែលបានបញ្ចប់ និងកំពុងដំណើរការ"}
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedProjects.map((project) => (
                <Card
                  key={project.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer flex flex-col"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative overflow-hidden h-48 bg-muted">
                    <img
                      src={getDisplayImage(project) || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <Badge className="absolute top-3 right-3 bg-primary">{project.status}</Badge>
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="font-bold text-lg mb-2 line-clamp-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.shortDescription}</p>
                    <div className="space-y-2 text-sm mb-4 flex-1">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin size={16} />
                        <span>{project.location}</span>
                      </div>
                      {project.year && (
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar size={16} />
                          <span>{project.year}</span>
                        </div>
                      )}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full bg-transparent"
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedProject(project)
                      }}
                    >
                      {t("projects.viewProject")}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            {hasMore && (
              <div className="flex justify-center mt-12">
                <Button size="lg" onClick={handleShowMore} className="px-8">
                  {language === "vi" ? "Xem thêm" : language === "en" ? "Show More" : "បង្ហាញលម្អិត"}
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img
                src={getDisplayImage(selectedProject) || "/placeholder.svg"}
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
                  <Badge className="bg-primary">{selectedProject.status}</Badge>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="font-semibold text-sm text-muted-foreground mb-1">
                    {language === "vi" ? "Vị trí" : language === "en" ? "Location" : "ទីតាំង"}
                  </h3>
                  <p className="flex items-center gap-2">
                    <MapPin size={16} />
                    {selectedProject.location}
                  </p>
                </div>

                {selectedProject.year && (
                  <div>
                    <h3 className="font-semibold text-sm text-muted-foreground mb-1">
                      {language === "vi" ? "Thời gian" : language === "en" ? "Timeline" : "រយៈពេល"}
                    </h3>
                    <p className="flex items-center gap-2">
                      <Calendar size={16} />
                      {selectedProject.year}
                    </p>
                  </div>
                )}

                <div>
                  <h3 className="font-semibold text-sm text-muted-foreground mb-1">
                    {language === "vi" ? "Mô tả" : language === "en" ? "Description" : "ការពិពណ៌នា"}
                  </h3>
                  <p className="text-sm leading-relaxed">{selectedProject.description}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-sm text-muted-foreground mb-1">
                    {language === "vi" ? "Loại dự án" : language === "en" ? "Project Type" : "ប្រភេទដំណើរការ"}
                  </h3>
                  <p className="text-sm">{selectedProject.details.type}</p>
                </div>

                {selectedProject.details.investor && (
                  <div>
                    <h3 className="font-semibold text-sm text-muted-foreground mb-1">
                      {language === "vi" ? "Nhà đầu tư" : language === "en" ? "Investor" : "ម្ចាស់ប្រាក់"}
                    </h3>
                    <p className="text-sm">{selectedProject.details.investor}</p>
                  </div>
                )}

                {selectedProject.details.contractPrice && (
                  <div>
                    <h3 className="font-semibold text-sm text-muted-foreground mb-1">
                      {language === "vi" ? "Giá trị hợp đồng" : language === "en" ? "Contract Price" : "តម្លៃកិច្ចសន្យា"}
                    </h3>
                    <p className="text-sm">{selectedProject.details.contractPrice}</p>
                  </div>
                )}

                {selectedProject.details.biddingEligibility && (
                  <div>
                    <h3 className="font-semibold text-sm text-muted-foreground mb-1">
                      {language === "vi"
                        ? "Tư cách đấu thầu"
                        : language === "en"
                          ? "Bidding Eligibility"
                          : "សមត្ថភាពលក់ដូលលក់"}
                    </h3>
                    <p className="text-sm">{selectedProject.details.biddingEligibility}</p>
                  </div>
                )}

                <div>
                  <h3 className="font-semibold text-sm text-muted-foreground mb-1">
                    {language === "vi" ? "Công việc thực hiện" : language === "en" ? "Work Summary" : "សង្ខេបការងារ"}
                  </h3>
                  <p className="text-sm leading-relaxed">{selectedProject.details.workSummary}</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}

      <Footer />
    </div>
  )
}
