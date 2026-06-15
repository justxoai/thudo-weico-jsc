"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useTranslation } from "@/components/use-translation"
import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export default function AboutPage() {
  const t = useTranslation()
  const lang = typeof window !== "undefined" ? localStorage.getItem("language") || "vi" : "vi"

  const aboutContent = {
    vi: {
      title: "Giới thiệu về Thudo Weico",
      company: "CÔNG TY CỔ PHẦN NƯỚC MÔI TRƯỜNG VÀ HẠ TẦNG KỸ THUẬT THỦ ĐÔ",
      description: `Công ty Cổ phần Nước, Môi trường và Hạ tầng Thudo (Thudo Weico), được thành lập vào tháng 2 năm 2006, là công ty cổ phần 100% vốn tư nhân, hoàn toàn tự chủ về tài chính và hoạt động. Công ty chuyên tư vấn các dự án cấp thoát nước, vệ sinh môi trường, giao thông và hạ tầng kỹ thuật trên khắp Việt Nam.`,
      office:
        "Văn phòng của chúng tôi đặt tại Tầng 5, Tòa nhà số 41, Đường Phạm Tuấn Tài, Quận Bắc Từ Liêm, Hà Nội, Việt Nam.",
      experience: `Với đội ngũ chuyên gia được đào tạo bài bản, trình độ cao và sự lãnh đạo chiến lược của Hội đồng quản trị giàu kinh nghiệm, Thudo Weico đã phát triển năng lực mạnh mẽ trong tư vấn và khảo sát, thiết kế và giám sát thi công, quản lý hợp đồng và dự án cho các công trình cấp thoát nước, vệ sinh, giao thông và cơ sở hạ tầng trên khắp cả nước.`,
      ceo: "Tổng Giám đốc: Ông Nguyễn Mạnh Thắng - Thạc sĩ Kỹ thuật, Kỹ sư Xây dựng chuyên ngành Cấp thoát nước",
      vision:
        "Đưa thương hiệu Thudo Weico trở thành nhà cung cấp dịch vụ chuyên nghiệp nhất trong lĩnh vực hoạt động của mình",
      values: "Năng động – Sáng tạo – Chuyên nghiệp – Gắn kết",
      philosophy: "Giving is Receiving",
      management: "Capability – Pressure – Motivation",
      reputation:
        "Trong nhiều năm qua, Thudo Weico đã xây dựng được danh tiếng vững chắc về chất lượng kỹ thuật xuất sắc, độ tin cậy và dịch vụ chuyên nghiệp. Công ty hoạt động theo Hệ thống Quản lý Chất lượng ISO 9001:2008 do QUACERT cấp, đảm bảo mọi dự án đều đạt tiêu chuẩn cao nhất về chất lượng và hiệu quả.",
    },
    en: {
      title: "Introduction to Thudo Weico",
      company: "THUDO WATER ENVIRONMENT AND INFRASTRUCTURE JOINT STOCK COMPANY",
      description: `Thudo Water Environment and Infrastructure Joint Stock Company (Thudo Weico), established in February 2006, is a 100% privately owned joint stock company with full financial and operational independence. The company specializes in consulting services for water supply and sewerage, environmental sanitation, transportation, and technical infrastructure projects across Vietnam.`,
      office:
        "Our head office is located on the 5th Floor, No. 41 Building, Pham Tuan Tai Street, Bac Tu Liem District, Hanoi, Vietnam.",
      experience: `With a team of well-trained, highly qualified professionals and the strategic leadership of an experienced Board of Directors, Thudo Weico has developed strong capabilities in consulting and surveying, design and construction supervision, and contract and project management for water supply, sewerage, sanitation, transportation, and infrastructure works throughout the country.`,
      ceo: "General Director: Mr. Nguyen Manh Thang - Master of Engineering, Civil Engineer specializing in Water Supply and Drainage",
      vision: "To make Thudo Weico brand become the most professional service provider in its field of operation",
      values: "Dynamic – Creative – Professional – Cohesive",
      philosophy: "Giving is Receiving",
      management: "Capability – Pressure – Motivation",
      reputation:
        "Over the years, Thudo Weico has built a solid reputation for technical excellence, reliability, and professional service delivery. The company operates under a certified Quality Management System ISO 9001:2008 issued by QUACERT, ensuring that every project meets the highest standards of quality and efficiency.",
    },
    lo: {
      title: "ບົດແນະນໍາກ່ຽວກັບ Thudo Weico",
      company: "THUDO WATER ENVIRONMENT AND INFRASTRUCTURE JOINT STOCK COMPANY",
      description: `ບໍລິສັດ Thudo Water Environment and Infrastructure Joint Stock Company (Thudo Weico) ຖືກສ້າງຕັ້ງຂຶ້ນໃນເດືອນກຸມພາ ປີ 2006 ເປັນວິສາຫະກິດຮ່ວມທຶນທີ່ເປັນເຈົ້າຂອງ 100% ຂອງເອກະຊົນ ມີການບັນຊີທາງດ້ານການເງິນທີ່ເປັນອິດສະລະ.`,
      office: "ສຳນັກງານຕັ້ງຢູ່ຊັ້ນ 5, ອາຄານ 41 ຖະຫນົນ Pham Tuan Tai, ເມືອງ Bac Tu Liem, Hanoi.",
      experience: `ມີທີມງານທີ່ມີປະສົບການຫຼາຍ ມີຄວາມຊໍານາຍໃນຫຼາຍຂົງເຂດ ແລະ ການບໍລິຫານທີ່ຖືກຕ້ອງ ແລະ ມືອາຊີບ Thudo Weico ໄດ້ປະຕິບັດວຽກງານ ປຶກສາຫາລື ສໍາຫຼວດ ອອກແບບ ກວດກາການກໍ່ສ້າງ ແລະ ການຈັດການສັນຍາ.`,
      ceo: "ຜູ້ອໍານວຍການທົ່ວໄປ: ທ່ານ Nguyen Manh Thang - ປະລິນຍາໂທ ວິສະວະກໍາ ວິສະວະກອນໂຍນ",
      vision: "ເພື່ອເຮັດໃຫ້ຍີ່ຫໍ້ Thudo Weico ກາຍເປັນຜູ້ໃຫ້ບໍລິການທີ່ມືອາຊີບທີ່ສຸດ",
      values: "ຕົວະ – ສ້າງສັນ – ມືອາຊີບ – ສະຫຼວມ",
      philosophy: "ການໃຫ້ແມ່ນການຮັບ",
      management: "ຄວາມສາມາດ – ຄວາມກົດດັນ – ແຮງຈູງໃຈ",
      reputation: "ໃນໄລຍະຫຼາຍປີ Thudo Weico ໄດ້ສ້າງຊື່ສຽງທີ່ເຂັ້ມແຂງ ສໍາລັບຄວາມເປັນເລີດທາງເທັກນິກ ຄວາມເຊື່ອໄດ້ ແລະ ການສະໜອງບໍລິການທີ່ມືອາຊີບ.",
    },
  }

  const content = aboutContent[lang as keyof typeof aboutContent] || aboutContent.vi

  const values = [
    {
      title: t("about.professionalism"),
      desc: t("about.professionalismDesc"),
    },
    {
      title: t("about.qualityExcellence"),
      desc: t("about.qualityExcellenceDesc"),
    },
    {
      title: t("about.innovationSustainability"),
      desc: t("about.innovationSustainabilityDesc"),
    },
    {
      title: t("about.humanCentered"),
      desc: t("about.humanCenteredDesc"),
    },
    {
      title: t("about.collaboration"),
      desc: t("about.collaborationDesc"),
    },
    {
      title: t("about.environmentalCommitment"),
      desc: t("about.environmentalCommitmentDesc"),
    },
  ]

  const certifications = [
    "ISO 9001:2015 - Quản lý chất lượng",
    "Giấy phép tư vấn kiến trúc",
    "Giấy phép tư vấn kỹ thuật",
    "Chứng chỉ đánh giá tác động môi trường",
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-secondary py-16 md:py-24 text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("about.introductionHeading")}</h1>
            <p className="text-lg opacity-90 max-w-2xl">{t("about.introductionSubheading")}</p>
          </div>
        </section>

        {/* Company Info */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">{t("about.introductionHeading")}</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">{t("about.introductionDescription")}</p>
                <p className="text-muted-foreground mb-4 leading-relaxed">{t("about.introductionOffice")}</p>
                <p className="text-muted-foreground mb-4 leading-relaxed">{t("about.introductionExperience")}</p>
                <p className="text-muted-foreground mb-4 leading-relaxed">{t("about.introductionCeo")}</p>
                <p className="text-muted-foreground leading-relaxed">{t("about.introductionReputation")}</p>
              </div>

              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-2xl font-bold mb-6">{t("about.companyInfo")}</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">{t("about.companyName")}</p>
                    <p className="font-semibold">{t("about.companyNameValue")}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{t("about.address")}</p>
                    <p className="font-semibold">{t("about.addressValue")}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{t("about.ceo")}</p>
                    <p className="font-semibold">{t("about.ceoValue")}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{t("about.companyStatus")}</p>
                    <p className="font-semibold text-green-600">{t("about.statusValue")}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{t("about.visionLabel")}</p>
                    <p className="font-semibold text-sm">{t("about.visionValue")}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{t("about.coreValuesLabel")}</p>
                    <p className="font-semibold text-sm">{t("about.coreValuesValue")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-secondary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">{t("about.coreValues")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, idx) => (
                <Card key={idx} className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-bold mb-2">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.desc}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">{t("about.certificatesLicenses")}</h2>
            <div className="space-y-4 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">{t("about.certificateConstructionCapability")}</h3>
                  
                  <ul className="text-sm text-muted-foreground space-y-2 ml-4">
                    <li>• {t("about.certificateConstructionCapabilityBullet1")}</li>
                    <li>• {t("about.certificateConstructionCapabilityBullet2")}</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-start md:justify-between p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">{t("about.certificateBusinessRegistration")}</h3>
                  
                  <ul className="text-sm text-muted-foreground space-y-2 ml-4">
                    <li>• {t("about.certificateBusinessRegistrationBullet1")}</li>
                    <li>• {t("about.certificateBusinessRegistrationBullet2")}</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-start md:justify-between p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">{t("about.certificateISO")}</h3>
                  
                  <ul className="text-sm text-muted-foreground space-y-2 ml-4">
                    <li>• {t("about.certificateISOBullet1")}</li>
                    <li>• {t("about.certificateISOBullet2")}</li>
                  </ul>
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
