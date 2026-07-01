"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useTranslation } from "@/components/use-translation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Phone, Mail, Clock, MapPin, Check, Droplet, Compass, Cog, ShieldCheck, Users, ChevronRight, X, Calendar, Briefcase } from "lucide-react"
import { getProjectsByLanguage, projectsData } from "@/lib/projects-data"
import { useLanguage } from "@/lib/language-context"
import { getRandomImageForProject } from "@/lib/image-utils"

const homeRedesignDict = {
  vi: {
    aboutTag: "VỀ CHÚNG TÔI",
    aboutTitle: "Chuyên gia hàng đầu về hạ tầng kỹ thuật và môi trường",
    bullet1Title: "Tự chủ hoàn toàn",
    bullet1Desc: "Hoàn toàn tự chủ về tài chính và hoạt động vận hành chuyên nghiệp.",
    bullet2Title: "Phạm vi hoạt động",
    bullet2Desc: "Phủ sóng cung cấp tại 23 tỉnh thành và mở rộng sang thị trường Lào.",
    badgeText: "TIÊU CHUẨN QUỐC TẾ",
    viewAllProjects: "Xem tất cả dự án",
    formTitle: "Gửi yêu cầu trực tiếp",
    formName: "Họ và tên",
    formPhone: "Số điện thoại",
    formEmail: "Email",
    formService: "Dịch vụ quan tâm",
    formMessage: "Lời nhắn",
    formSubmit: "Gửi yêu cầu ngay",
    formPlaceholderName: "Nguyen Van A",
    formPlaceholderPhone: "093.123.4567",
    formPlaceholderEmail: "email@example.com",
    formPlaceholderMessage: "Mô tả sơ lược về nhu cầu dự án của bạn...",
    formSuccess: "Gửi yêu cầu thành công! Chúng tôi sẽ phản hồi lại trong vòng 24 giờ.",
    formSelectDefault: "Chọn dịch vụ quan tâm",
    serviceOpt1: "Tổng thầu Cấp thoát nước",
    serviceOpt2: "Quy hoạch & Tư vấn Đô thị",
    serviceOpt3: "Thiết kế & Chế tạo Thiết bị",
    serviceOpt4: "Khác"
  },
  en: {
    aboutTag: "ABOUT US",
    aboutTitle: "Leading expert in technical infrastructure and environment",
    bullet1Title: "Full Autonomy",
    bullet1Desc: "Fully autonomous in financial operations and professional management.",
    bullet2Title: "Scope of Operation",
    bullet2Desc: "Providing services across 23 provinces and expanding into the Laos market.",
    badgeText: "INTERNATIONAL STANDARD",
    viewAllProjects: "View all projects",
    formTitle: "Send Request Directly",
    formName: "Full Name",
    formPhone: "Phone Number",
    formEmail: "Email",
    formService: "Service of Interest",
    formMessage: "Message",
    formSubmit: "Send Request Now",
    formPlaceholderName: "John Doe",
    formPlaceholderPhone: "093.123.4567",
    formPlaceholderEmail: "email@example.com",
    formPlaceholderMessage: "Briefly describe your project needs...",
    formSuccess: "Request sent successfully! We will respond within 24 hours.",
    formSelectDefault: "Select interested service",
    serviceOpt1: "Water Supply & Drainage EPC",
    serviceOpt2: "Urban Planning & Consulting",
    serviceOpt3: "Equipment Design & Manufacturing",
    serviceOpt4: "Other"
  },
  lo: {
    aboutTag: "ກ່ຽວກັບພວກເຮົາ",
    aboutTitle: "ຜູ້ຊ່ຽວຊານຊັ້ນນໍາດ້ານພື້ນຖານໂຄງລ່າງເຕັກນິກ ແລະ ສິ່ງແວດລ້ອມ",
    bullet1Title: "ການປົກຄອງຕົນເອງຢ່າງສົມບູນ",
    bullet1Desc: "ເປັນເອກະລາດຢ່າງສົມບູນທາງດ້ານການເງິນ ແລະ ການຈັດການທີ່ເປັນມືອາຊີບ.",
    bullet2Title: "ຂອບເຂດການດຳເນີນງານ",
    bullet2Desc: "ສະໜອງການບໍລິການໃນ 23 ແຂວງ ແລະ ຂະຫຍາຍໄປສູ່ຕະຫຼາດລາວ.",
    badgeText: "ມາດຕະຖານສາກົນ",
    viewAllProjects: "ເບິ່ງໂຄງການທັງໝົດ",
    formTitle: "ສົ່ງຄຳຮ້ອງຂໍໂດຍກົງ",
    formName: "ຊື່ ແລະ ນາມສະກຸນ",
    formPhone: "ເບີໂທລະສັບ",
    formEmail: "ອີເມວ",
    formService: "ບໍລິການທີ່ສົນໃຈ",
    formMessage: "ຂໍ້ຄວາມ",
    formSubmit: "ສົ່ງຄຳຮ້ອງຂໍດຽວນີ້",
    formPlaceholderName: "ທ້າວ ສົມພອນ",
    formPlaceholderPhone: "093.123.4567",
    formPlaceholderEmail: "email@example.com",
    formPlaceholderMessage: "ອະທິບາຍຄວາມຕ້ອງການໂຄງການຂອງທ່ານໂດຍຫຍໍ້...",
    formSuccess: "ສົ່ງຄຳຮ້ອງຂໍສຳເລັດແລ້ວ! ພວກເຮົາຈະຕອບກັບພາຍໃນ 24 ຊົ່ວໂມງ.",
    formSelectDefault: "ເລືອກບໍລິການທີ່ສົນໃຈ",
    serviceOpt1: "ຜູ້ຮັບເໝົາຫຼັກລະບົບນ້ຳປະປາ ແລະ ລະບາຍນ້ຳ",
    serviceOpt2: "ການວາງແຜນ ແລະ ໃຫ້ຄຳປຶກສາຕົວເມືອງ",
    serviceOpt3: "ການອອກແບບ ແລະ ຜະລິດອຸປະກອນ",
    serviceOpt4: "ອື່ນໆ"
  }
}

export default function Home() {
  const t = useTranslation()
  const { language } = useLanguage()
  const d = homeRedesignDict[language as keyof typeof homeRedesignDict] || homeRedesignDict.vi

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedProject, setSelectedProject] = useState<any>(null)

  // Get recent projects (3 most recent with dates)
  const projectsByLang = getProjectsByLanguage(language as "vi" | "en" | "lo")
  const recentProjects = projectsByLang.filter((p) => p.startDate).slice(0, 3)

  const getDisplayImage = (project: any) => {
    if (project.image && !project.image.includes("/placeholder")) {
      return project.image
    }
    return getRandomImageForProject(project.id)
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: ""
      })
      // Clear success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
    }, 1500)
  }

  return (
    <div className="min-h-screen flex flex-col bg-background antialiased selection:bg-primary selection:text-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-start text-white overflow-hidden bg-[#031d1c]">
          <div className="absolute inset-0 z-0">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAx5OuPXYnT47RGjYCEknSbC9UodXpChUNiCjrltYBbMLoGNAydQ0VXyZBTDHzBU_5Zk1fACgSoncK3Yeq2rmfeJh-a5_FHjCNifjhPSJ2_ehETL1Bs78jlVs7V6TbAST8pfQ20ZOyW_iPaUxLO2_5gX5DJwdij1gbZGYsIi1KnYU7kCVYZ9qgpdyer4dX3Y2u3DxB2gmZxODmqTunWHvfBRUTxy3wa8DEfthuRz4oov1V24pEpzD9g6Sm5UEfB9_9tRNBuIloAX_E"
              alt="Thudo Weico Banner"
              className="w-full h-full object-cover opacity-60 scale-102 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#031d1c]/95 via-[#072d2b]/80 to-transparent z-10" />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-background z-20" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)" }} />
          </div>

          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 pb-32 animate-fade-in">
            {/* Established Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-sm">
              <Calendar size={14} className="flex-shrink-0 animate-pulse" />
              <span>{t("about.establishedBadge")}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 max-w-3xl leading-[1.15] text-white">
              <span className="block text-slate-100/90">{t("home.title")}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed mb-6 font-normal">
              {t("home.subtitle")}
            </p>

            {/* Stylized Slogan Box */}
            <div className="border-l-4 border-emerald-500 pl-4 py-1.5 my-8 italic text-slate-300 text-base md:text-lg font-medium tracking-wide max-w-2xl">
              "{t("home.slogan")}"
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="/services">
                <Button size="lg" className="w-full sm:w-auto gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all duration-200 text-sm">
                  {t("home.cta")}
                  <ArrowRight size={16} />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border-white text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 text-sm">
                  {t("home.learnMore")}
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-white dark:bg-slate-900 py-12 border-b border-slate-100 dark:border-slate-800 shadow-sm relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-2">18+</p>
                <p className="text-xs sm:text-sm font-bold text-slate-500 tracking-wider uppercase">
                  {t("services.experience")}
                </p>
              </div>
              <div>
                <p className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-2">30+</p>
                <p className="text-xs sm:text-sm font-bold text-slate-500 tracking-wider uppercase">
                  {t("services.staff")}
                </p>
              </div>
              <div>
                <p className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-2">18+</p>
                <p className="text-xs sm:text-sm font-bold text-slate-500 tracking-wider uppercase">
                  {t("services.projects")}
                </p>
              </div>
              <div>
                <p className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-2">23/34</p>
                <p className="text-xs sm:text-sm font-bold text-slate-500 tracking-wider uppercase">
                  {t("services.provinces")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-slate-50/50 dark:bg-slate-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* About Text Left */}
              <div>
                <span className="text-xs font-extrabold tracking-widest text-emerald-600 dark:text-emerald-500 uppercase block mb-3">
                  {d.aboutTag}
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
                  {d.aboutTitle}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed text-base">
                  {t("home.aboutSectionDesc")}
                </p>

                {/* Bullets List */}
                <div className="space-y-5">
                  <div className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mt-1 flex-shrink-0">
                      <Check size={14} className="stroke-[3]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm mb-1">{d.bullet1Title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{d.bullet1Desc}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mt-1 flex-shrink-0">
                      <Check size={14} className="stroke-[3]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm mb-1">{d.bullet2Title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{d.bullet2Desc}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* About Image Collage Right */}
              <div className="relative grid grid-cols-12 gap-4">
                {/* Main Large Image */}
                <div className="col-span-12 rounded-xl overflow-hidden shadow-md border border-slate-100">
                  <img
                    src="/green-office-building.jpg"
                    alt="Engineers working"
                    className="w-full h-[280px] object-cover object-center"
                  />
                </div>
                {/* Small Image Bottom Left */}
                <div className="col-span-6 rounded-xl overflow-hidden shadow-md border border-slate-100">
                  <img
                    src="/water-infrastructure-system.jpg"
                    alt="Water infrastructure pipes"
                    className="w-full h-[150px] object-cover"
                  />
                </div>
                {/* Badge Card Bottom Right */}
                <div className="col-span-6 rounded-xl bg-teal-900 text-white p-6 shadow-md border border-teal-800 flex flex-col justify-center items-center text-center">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-3 text-emerald-300">
                    <ShieldCheck size={26} />
                  </div>
                  <span className="font-bold text-xs uppercase tracking-widest text-emerald-300 mb-1">
                    Thudo Weico
                  </span>
                  <p className="font-extrabold text-sm tracking-tight leading-snug">
                    {d.badgeText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
                {t("home.ourServices")}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-base">
                {t("home.ourServicesDesc")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1: Consulting */}
              <Card className="p-8 hover:shadow-lg transition-all duration-300 border border-slate-100 flex flex-col items-start gap-4">
                <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-950/50 rounded-lg flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <Droplet size={24} />
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                  {t("services.consulting")}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {t("services.consultingDesc")}
                </p>
              </Card>

              {/* Card 2: Planning */}
              <Card className="p-8 hover:shadow-lg transition-all duration-300 border border-slate-100 flex flex-col items-start gap-4">
                <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-950/50 rounded-lg flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <Compass size={24} />
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                  {t("services.planning")}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {t("services.planningDesc")}
                </p>
              </Card>

              {/* Card 3: Construction / Equipment */}
              <Card className="p-8 hover:shadow-lg transition-all duration-300 border border-slate-100 flex flex-col items-start gap-4">
                <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-950/50 rounded-lg flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <Cog size={24} />
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                  {t("services.construction")}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {t("services.constructionDesc")}
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Recent Projects Section */}
        <section className="py-20 bg-slate-50/50 dark:bg-slate-900/10 border-t border-slate-100 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-2 tracking-tight">
                  {t("home.recentProjects")}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {t("home.recentProjectsDesc")}
                </p>
              </div>
              <Link href="/projects" className="flex items-center gap-1.5 text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors flex-shrink-0 group">
                <span>{d.viewAllProjects}</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recentProjects.map((project) => {
                const isProjectInProgress = project.statusEn === "In Progress" || project.status === "Đang thực hiện"
                return (
                  <div
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    className="group bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 hover:border-emerald-500/10 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 rounded-2xl overflow-hidden flex flex-col cursor-pointer"
                  >
                    {/* Image & Badge Wrapper */}
                    <div className="relative h-52 overflow-hidden bg-slate-100 dark:bg-slate-900 flex-shrink-0">
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
                        <h3 className="font-extrabold text-slate-900 dark:text-white text-base mb-2 group-hover:text-emerald-600 transition-colors duration-205 line-clamp-2 min-h-[48px] leading-snug">
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
                          className="w-full py-5 border-slate-200 hover:border-slate-350 hover:bg-slate-50 rounded-xl text-slate-700 font-bold transition-all text-xs flex items-center justify-center gap-1"
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
          </div>
        </section>

        {/* Contact & Request Form Section */}
        <section className="py-20 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              {/* Contact Info Left */}
              <div className="lg:col-span-5">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
                  {t("contact.title")}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                  {t("contact.sendMessage")}
                </p>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 flex-shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm mb-1">{t("contact.office")}</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                        Tầng 5, Tòa nhà số 41, Đường Phạm Tuấn Tài, Phường Nghĩa Đô, Quận Cầu Giấy, Hà Nội
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 flex-shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm mb-1">{t("contact.phone")}</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">024. 37. 555. 766</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 flex-shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm mb-1">{t("contact.email")}</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">thudoweico.jsc@gmail.com</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 flex-shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm mb-1">{t("contact.workingHours")}</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{t("contact.workingOffice")}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Right */}
              <div className="lg:col-span-7 w-full">
                <Card className="p-8 sm:p-10 shadow-xl border border-slate-150/70 dark:border-slate-800 rounded-xl relative overflow-hidden bg-white dark:bg-slate-900">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-600"></div>
                  
                  <h3 className="font-black text-xl text-slate-900 dark:text-white mb-6">
                    {d.formTitle}
                  </h3>

                  {isSubmitted && (
                    <div className="mb-6 p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold flex items-center gap-2">
                      <Check size={18} className="stroke-[3]" />
                      <span>{d.formSuccess}</span>
                    </div>
                  )}

                  <form onSubmit={handleFormSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="name" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                          {d.formName}
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder={d.formPlaceholderName}
                          className="px-4 py-3 rounded-md border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none text-sm transition-all duration-200"
                        />
                      </div>

                      {/* Phone */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="phone" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                          {d.formPhone}
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder={d.formPlaceholderPhone}
                          className="px-4 py-3 rounded-md border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none text-sm transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        {d.formEmail}
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={d.formPlaceholderEmail}
                        className="px-4 py-3 rounded-md border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none text-sm transition-all duration-200"
                      />
                    </div>

                    {/* Service */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="service" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        {d.formService}
                      </label>
                      <select
                        id="service"
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="px-4 py-3 rounded-md border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none text-sm transition-all duration-200 text-slate-700 dark:text-slate-300"
                      >
                        <option value="" disabled>{d.formSelectDefault}</option>
                        <option value="EPC">{d.serviceOpt1}</option>
                        <option value="Planning">{d.serviceOpt2}</option>
                        <option value="Design">{d.serviceOpt3}</option>
                        <option value="Other">{d.serviceOpt4}</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        {d.formMessage}
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={d.formPlaceholderMessage}
                        className="px-4 py-3 rounded-md border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none text-sm transition-all duration-200 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 dark:text-slate-900 text-white font-bold py-4 rounded-md shadow-md transition-colors"
                    >
                      {isSubmitting ? "..." : d.formSubmit}
                    </Button>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Project Details Modal Frame (Project Form) */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-white dark:bg-slate-900 w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] border border-slate-100 dark:border-slate-800 animate-in fade-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Image Container */}
              <div className="relative h-64 sm:h-76 w-full overflow-hidden flex-shrink-0">
                <img
                  src={getDisplayImage(selectedProject) || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                {/* Bottom Gradient overlay */}
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
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-750 dark:text-slate-350">
                {/* Grid metadata */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Location Box */}
                  <div className="flex items-start gap-3.5 p-4 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-2xl">
                    <MapPin className="text-emerald-600 mt-0.5 flex-shrink-0" size={18} />
                    <div>
                      <div className="text-[10px] text-slate-450 dark:text-slate-400 font-bold uppercase tracking-wider">
                        {language === "vi" ? "Vị trí" : language === "en" ? "Location" : "ទីតាំង"}
                      </div>
                      <div className="text-xs text-slate-850 dark:text-white font-semibold mt-0.5">{selectedProject.location}</div>
                    </div>
                  </div>

                  {/* Timeline Box */}
                  <div className="flex items-start gap-3.5 p-4 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-2xl">
                    <Calendar className="text-emerald-600 mt-0.5 flex-shrink-0" size={18} />
                    <div>
                      <div className="text-[10px] text-slate-450 dark:text-slate-400 font-bold uppercase tracking-wider">
                        {language === "vi" ? "Thời gian" : language === "en" ? "Timeline" : "រយៈពេល"}
                      </div>
                      <div className="text-xs text-slate-855 dark:text-white font-semibold mt-0.5">{selectedProject.year || "N/A"}</div>
                    </div>
                  </div>

                  {/* Project Type Box */}
                  <div className="flex items-start gap-3.5 p-4 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-2xl">
                    <Briefcase className="text-emerald-600 mt-0.5 flex-shrink-0" size={18} />
                    <div>
                      <div className="text-[10px] text-slate-450 dark:text-slate-400 font-bold uppercase tracking-wider">
                        {language === "vi" ? "Loại dự án" : language === "en" ? "Project Type" : "ប្រភេទដំណើរការ"}
                      </div>
                      <div className="text-xs text-slate-855 dark:text-white font-semibold mt-0.5">{selectedProject.details.type}</div>
                    </div>
                  </div>

                  {/* Investor Box */}
                  <div className="flex items-start gap-3.5 p-4 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-2xl">
                    <Users className="text-emerald-600 mt-0.5 flex-shrink-0" size={18} />
                    <div>
                      <div className="text-[10px] text-slate-450 dark:text-slate-400 font-bold uppercase tracking-wider">
                        {language === "vi" ? "Nhà đầu tư" : language === "en" ? "Investor" : "ម្ចាស់ប្រាក់"}
                      </div>
                      <div className="text-xs text-slate-855 dark:text-white font-semibold mt-0.5">{selectedProject.details.investor || "N/A"}</div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <h4 className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider">
                    {language === "vi" ? "Mô tả dự án" : language === "en" ? "Project Description" : "ការពិពណ៌នាគម្រោង"}
                  </h4>
                  <p className="text-sm text-slate-650 dark:text-slate-400 leading-relaxed font-normal">{selectedProject.description}</p>
                </div>

                {/* Bidding & Contract value Highlight Box */}
                {(selectedProject.details.contractPrice || selectedProject.details.biddingEligibility) && (
                  <div className="p-5 bg-[#EBF1FF]/40 dark:bg-blue-950/20 border border-blue-100/50 dark:border-blue-900/50 rounded-2xl grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedProject.details.contractPrice && (
                      <div>
                        <div className="text-[10px] text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider">
                          {language === "vi" ? "Giá trị hợp đồng" : language === "en" ? "Contract Price" : "តម្លៃកិច្ចសន្យា"}
                        </div>
                        <div className="text-sm text-slate-850 dark:text-white font-extrabold mt-1">{selectedProject.details.contractPrice}</div>
                      </div>
                    )}
                    {selectedProject.details.biddingEligibility && (
                      <div>
                        <div className="text-[10px] text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider">
                          {language === "vi" ? "Tư cách đấu thầu" : language === "en" ? "Bidding Eligibility" : "សមត្ថភាពລົດ"}
                        </div>
                        <div className="text-sm text-slate-855 dark:text-white font-extrabold mt-1">{selectedProject.details.biddingEligibility}</div>
                      </div>
                    )}
                  </div>
                )}

                {/* Work Summary */}
                <div className="space-y-2 p-5 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-2xl">
                  <h4 className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider">
                    {language === "vi" ? "Công việc thực hiện" : language === "en" ? "Work Summary" : "សັງຂេບການງານ"}
                  </h4>
                  <p className="text-sm text-slate-650 dark:text-slate-400 leading-relaxed font-normal">{selectedProject.details.workSummary}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
