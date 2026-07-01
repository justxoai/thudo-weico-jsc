"use client"

import React, { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useTranslation } from "@/components/use-translation"
import { useLanguage } from "@/lib/language-context"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  MapPin,
  Calendar,
  X,
  Search,
  Briefcase,
  Users,
  Award,
  ChevronRight
} from "lucide-react"
import { projectsData, getProjectsByLanguage } from "@/lib/projects-data"
import { getRandomImageForProject } from "@/lib/image-utils"

const PROJECTS_PER_PAGE = 6

export default function ProjectsPage() {
  const t = useTranslation()
  const { language } = useLanguage()
  const [displayCount, setDisplayCount] = useState(PROJECTS_PER_PAGE)
  const [selectedProject, setSelectedProject] = useState<(typeof projectsData)[0] | null>(null)
  
  // Filtering and Searching states
  const [filter, setFilter] = useState<"all" | "in_progress" | "completed">("all")
  const [searchTerm, setSearchTerm] = useState("")

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

  // Filter and search execution
  const filteredProjects = sortedLocalizedProjects.filter((project) => {
    const isProjectInProgress = project.statusEn === "In Progress" || project.status === "Đang thực hiện"
    const isProjectCompleted = project.statusEn === "Completed" || project.status === "Hoàn thành"

    const matchesFilter =
      filter === "all" ||
      (filter === "in_progress" && isProjectInProgress) ||
      (filter === "completed" && isProjectCompleted)

    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location.toLowerCase().includes(searchTerm.toLowerCase())

    return matchesFilter && matchesSearch
  })

  const displayedProjects = filteredProjects.slice(0, displayCount)
  const hasMore = displayCount < filteredProjects.length

  const handleShowMore = () => {
    setDisplayCount((prev) => prev + PROJECTS_PER_PAGE)
  }

  // Reset display count when filters change
  useEffect(() => {
    setDisplayCount(PROJECTS_PER_PAGE)
  }, [filter, searchTerm])

  const getDisplayImage = (project: any) => {
    if (project.image && !project.image.includes("/placeholder")) {
      return project.image
    }
    return getRandomImageForProject(project.id)
  }

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.getElementById("projects-section")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-background antialiased font-sans">
      <Header />

      <main className="flex-grow">
        {/* Hero Section with Diagonal Cut */}
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
              <span>{t("projects.badgeLabel")}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 max-w-3xl leading-[1.15]">
              <span className="block text-slate-100/90">{t("projects.title")}</span>
              <span className="block mt-1 text-emerald-400 font-black">Thudo Weico</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed mb-10 font-normal">
              {t("projects.subtitle")}
            </p>

            {/* Actions */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects-section"
                onClick={handleScrollToProjects}
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

        {/* Projects Main Section */}
        <section id="projects-section" className="py-16 md:py-24 bg-background relative z-10 -mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Search and Filters Layout */}
            <div className="flex flex-col md:flex-row gap-6 justify-between items-stretch md:items-center mb-12">
              {/* Tabs */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setFilter("all")}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold border transition-all duration-200 shadow-sm ${
                    filter === "all"
                      ? "bg-[#0B3534] border-[#0B3534] text-white"
                      : "bg-white hover:bg-slate-50 text-slate-600 border-slate-200"
                  }`}
                >
                  {t("projects.allFilter")}
                </button>
                <button
                  onClick={() => setFilter("in_progress")}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold border transition-all duration-200 shadow-sm ${
                    filter === "in_progress"
                      ? "bg-[#0B3534] border-[#0B3534] text-white"
                      : "bg-white hover:bg-slate-50 text-slate-600 border-slate-200"
                  }`}
                >
                  {t("projects.inProgressFilter")}
                </button>
                <button
                  onClick={() => setFilter("completed")}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold border transition-all duration-200 shadow-sm ${
                    filter === "completed"
                      ? "bg-[#0B3534] border-[#0B3534] text-white"
                      : "bg-white hover:bg-slate-50 text-slate-600 border-slate-200"
                  }`}
                >
                  {t("projects.completedFilter")}
                </button>
              </div>

              {/* Search Bar */}
              <div className="relative w-full md:max-w-md">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Search size={16} />
                </div>
                <input
                  type="text"
                  placeholder={t("projects.searchPlaceholder")}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500/25 focus:border-emerald-500 w-full bg-white shadow-sm transition-all"
                />
              </div>
            </div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-20 bg-slate-50 border border-slate-100 rounded-2xl">
                <Search size={40} className="mx-auto text-slate-300 mb-4" />
                <p className="text-slate-500 font-medium text-sm">
                  {language === "vi"
                    ? "Không tìm thấy dự án phù hợp."
                    : language === "en"
                      ? "No matching projects found."
                      : "ບໍ່ພົບໂຄງການທີ່ກົງກັນ."}
                </p>
              </div>
            )}

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedProjects.map((project) => {
                const isProjectInProgress = project.statusEn === "In Progress" || project.status === "Đang thực hiện"
                return (
                  <div
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    className="group bg-white border border-slate-100 hover:border-emerald-500/10 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 rounded-2xl overflow-hidden flex flex-col cursor-pointer"
                  >
                    {/* Image & Badge Wrapper */}
                    <div className="relative h-56 overflow-hidden bg-slate-100 flex-shrink-0">
                      <img
                        src={getDisplayImage(project) || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                      />
                      <div
                        className={`absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wide backdrop-blur-sm shadow-sm ${
                          isProjectInProgress ? "bg-sky-600/90 text-white" : "bg-emerald-600/90 text-white"
                        }`}
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                        <span>{project.status}</span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 flex flex-col flex-grow justify-between">
                      <div>
                        <h3 className="font-extrabold text-slate-900 text-base mb-2 group-hover:text-emerald-600 transition-colors duration-205 line-clamp-2 min-h-[48px] leading-snug">
                          {project.title}
                        </h3>
                        <p className="text-xs text-slate-500 mb-4 line-clamp-2 leading-relaxed font-normal">
                          {project.shortDescription}
                        </p>
                      </div>

                      <div>
                        {/* Meta Data */}
                        <div className="space-y-2 text-xs text-slate-500 mb-6 font-normal">
                          <div className="flex items-center gap-2">
                            <MapPin size={14} className="text-slate-400 flex-shrink-0" />
                            <span className="truncate">{project.location}</span>
                          </div>
                          {project.year && (
                            <div className="flex items-center gap-2">
                              <Calendar size={14} className="text-slate-400 flex-shrink-0" />
                              <span>{project.year}</span>
                            </div>
                          )}
                        </div>

                        {/* View Button */}
                        <Button
                          variant="outline"
                          className="w-full py-5 border-slate-200 hover:border-slate-300 hover:bg-slate-50 rounded-xl text-slate-700 font-bold transition-all text-xs flex items-center justify-center gap-1"
                          onClick={(e) => {
                            e.stopPropagation()
                            setSelectedProject(project)
                          }}
                        >
                          <span>{t("projects.viewProject")}</span>
                          <ChevronRight size={14} />
                        </Button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Pagination / Show More */}
            {hasMore && (
              <div className="flex justify-center mt-16">
                <Button
                  onClick={handleShowMore}
                  className="px-8 py-5 bg-[#0B3534] hover:bg-[#082a29] text-white font-bold rounded-xl shadow-md transition-all text-sm"
                >
                  {language === "vi" ? "Xem thêm dự án" : language === "en" ? "Show More Projects" : "ເບິ່ງໂຄງການເພີ່ມເຕີມ"}
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Call To Action Section */}
        <section className="relative bg-[#0B3534] text-white py-16 md:py-20 overflow-hidden">
          <Award size={280} className="absolute left-[-60px] top-[-60px] text-teal-800/10 pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              {t("projects.ctaHeading")}
            </h2>
            <p className="text-teal-100 max-w-2xl mx-auto text-sm md:text-[15px] leading-relaxed font-normal">
              {t("projects.ctaDesc")}
            </p>
            
            <div className="flex justify-center pt-4">
              <a
                href="/contact"
                className="px-6 py-3.5 rounded-lg bg-emerald-400 hover:bg-emerald-500 text-[#031d1c] font-bold shadow-lg hover:shadow-emerald-400/20 transition-all duration-300 hover:-translate-y-0.5 text-sm"
              >
                {t("projects.ctaButton")}
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Modern Redesigned Details Modal Frame (Project Form) */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] border border-slate-100 animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Image Container */}
            <div className="relative h-64 sm:h-76 w-full overflow-hidden flex-shrink-0">
              <img
                src={getDisplayImage(selectedProject) || "/placeholder.svg"}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              {/* Bottom Gradient overlay for title readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 bg-black/40 hover:bg-black/60 text-white rounded-full p-2.5 transition-colors backdrop-blur-sm shadow-md"
              >
                <X size={18} />
              </button>

              {/* Title & Badge Overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wide backdrop-blur-sm shadow-sm ${
                    selectedProject.statusEn === "In Progress" || selectedProject.status === "Đang thực hiện"
                      ? "bg-sky-600/90 text-white"
                      : "bg-emerald-600/90 text-white"
                  }`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                  <span>{selectedProject.status}</span>
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold leading-tight text-white drop-shadow-sm">
                  {selectedProject.title}
                </h2>
              </div>
            </div>

            {/* Modal Scrollable Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-700">
              {/* Grid metadata */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Location Box */}
                <div className="flex items-start gap-3.5 p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                  <MapPin className="text-emerald-600 mt-0.5 flex-shrink-0" size={18} />
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                      {language === "vi" ? "Vị trí" : language === "en" ? "Location" : "ទីតាំង"}
                    </div>
                    <div className="text-xs text-slate-800 font-semibold mt-0.5">{selectedProject.location}</div>
                  </div>
                </div>

                {/* Timeline Box */}
                <div className="flex items-start gap-3.5 p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                  <Calendar className="text-emerald-600 mt-0.5 flex-shrink-0" size={18} />
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                      {language === "vi" ? "Thời gian" : language === "en" ? "Timeline" : "រយៈពេល"}
                    </div>
                    <div className="text-xs text-slate-800 font-semibold mt-0.5">{selectedProject.year || "N/A"}</div>
                  </div>
                </div>

                {/* Project Type Box */}
                <div className="flex items-start gap-3.5 p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                  <Briefcase className="text-emerald-600 mt-0.5 flex-shrink-0" size={18} />
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                      {language === "vi" ? "Loại dự án" : language === "en" ? "Project Type" : "ប្រភេទដំណើរການ"}
                    </div>
                    <div className="text-xs text-slate-800 font-semibold mt-0.5">{selectedProject.details.type}</div>
                  </div>
                </div>

                {/* Investor Box */}
                <div className="flex items-start gap-3.5 p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                  <Users className="text-emerald-600 mt-0.5 flex-shrink-0" size={18} />
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                      {language === "vi" ? "Nhà đầu tư" : language === "en" ? "Investor" : "ម្ចាស់ប្រាក់"}
                    </div>
                    <div className="text-xs text-slate-800 font-semibold mt-0.5">{selectedProject.details.investor || "N/A"}</div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <h4 className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider">
                  {language === "vi" ? "Mô tả dự án" : language === "en" ? "Project Description" : "ការពិពណ៌ນາគម្រោង"}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">{selectedProject.description}</p>
              </div>

              {/* Bidding & Contract value Highlight Box */}
              {(selectedProject.details.contractPrice || selectedProject.details.biddingEligibility) && (
                <div className="p-5 bg-[#EBF1FF]/40 border border-blue-100/50 rounded-2xl grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedProject.details.contractPrice && (
                    <div>
                      <div className="text-[10px] text-blue-600 font-bold uppercase tracking-wider">
                        {language === "vi" ? "Giá trị hợp đồng" : language === "en" ? "Contract Price" : "តម្លៃកិច្ចសន្យា"}
                      </div>
                      <div className="text-sm text-slate-800 font-extrabold mt-1">{selectedProject.details.contractPrice}</div>
                    </div>
                  )}
                  {selectedProject.details.biddingEligibility && (
                    <div>
                      <div className="text-[10px] text-blue-600 font-bold uppercase tracking-wider">
                        {language === "vi" ? "Tư cách đấu thầu" : language === "en" ? "Bidding Eligibility" : "សមត្ថភាពລົດ"}
                      </div>
                      <div className="text-sm text-slate-800 font-extrabold mt-1">{selectedProject.details.biddingEligibility}</div>
                    </div>
                  )}
                </div>
              )}

              {/* Work Summary */}
              <div className="space-y-2 p-5 bg-slate-50 border border-slate-100 rounded-2xl">
                <h4 className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider">
                  {language === "vi" ? "Công việc thực hiện" : language === "en" ? "Work Summary" : "សັງຂេບການງານ"}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">{selectedProject.details.workSummary}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
