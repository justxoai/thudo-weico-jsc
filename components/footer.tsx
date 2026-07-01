"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { Facebook, Youtube, Phone, Mail } from "lucide-react"

const footerDict = {
  vi: {
    desc: "Tiên phong cung cấp giải pháp công nghệ môi trường và hạ tầng nước tại Việt Nam từ năm 2006.",
    coreServices: "DỊCH VỤ CỐT LÕI",
    service1: "Giải pháp Hạ tầng",
    service2: "Thoát nước Đô thị",
    service3: "Quản lý Nước",
    service4: "Tiêu chuẩn Chất lượng",
    company: "CÔNG TY",
    about: "Về chúng tôi",
    projects: "Dự án tiêu biểu",
    careers: "Tuyển dụng",
    library: "Thư viện điện tử",
    quickContact: "LIÊN HỆ NHANH",
    rights: "© 2025 Thudo Water & Infrastructure Engineering. Bảo lưu mọi quyền.",
    terms: "Điều khoản Dịch vụ",
    privacy: "Chính sách Bảo mật",
    cookies: "Cài đặt Cookie"
  },
  en: {
    desc: "Pioneering environmental technology and water infrastructure solutions in Vietnam since 2006.",
    coreServices: "CORE SERVICES",
    service1: "Infrastructure Solutions",
    service2: "Urban Drainage",
    service3: "Water Management",
    service4: "Quality Standards",
    company: "COMPANY",
    about: "About Us",
    projects: "Featured Projects",
    careers: "Careers",
    library: "E-Library Entry",
    quickContact: "QUICK CONTACT",
    rights: "© 2025 Thudo Water & Infrastructure Engineering. All rights reserved.",
    terms: "Terms of Service",
    privacy: "Privacy Policy",
    cookies: "Cookie Settings"
  },
  lo: {
    desc: "ຜູ້ບຸກເບີກເຕັກໂນໂລຊີສິ່ງແວດລ້ອມ ແລະ ວິທີແກ້ໄຂພື້ນຖານໂຄງລ່າງນ້ຳໃນຫວຽດນາມ ຕັ້ງແຕ່ປີ 2006.",
    coreServices: "ບໍລິການຫຼັກ",
    service1: "ວິທີແກ້ໄຂພື້ນຖານໂຄງລ່າງ",
    service2: "精度ການລະບາຍນ້ຳໃນຕົວເມືອງ", // Wait, in Lao "urban drainage" is "ການລະບາຍນ້ຳໃນຕົວເມືອງ"
    service3: "ການຄຸ້ມຄອງນ້ຳ",
    service4: "ມາດຕະຖານຄຸນນະພາບ",
    company: "ບໍລິສັດ",
    about: "ກ່ຽວກັບພວກເຮົາ",
    projects: "ໂຄງການທີ່ໂດດເດັ່ນ",
    careers: "ຮັບສະໝັກງານ",
    library: "ຫໍສະໝຸດເອເລັກໂຕຣນິກ",
    quickContact: "ຕິດຕໍ່ດ່ວນ",
    rights: "© 2025 Thudo Water & Infrastructure Engineering. ສະຫງວນລິຂະສິດ.",
    terms: "ເງື່ອນໄຂການບໍລິການ",
    privacy: "ນະໂຍບາຍຄວາມເປັນສ່ວນຕົວ",
    cookies: "ການຕັ້ງຄ່າຄຸກກີ້"
  }
}

export function Footer() {
  const { language } = useLanguage()
  const d = footerDict[language as keyof typeof footerDict] || footerDict.vi

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo & Description */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3 w-fit">
              <div className="bg-white p-1 rounded-full flex items-center justify-center">
                <img src="/logo.png" alt="Thudo Weico Logo" className="h-10 w-10 object-contain" />
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                Thudo Weico
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {d.desc}
            </p>
          </div>

          {/* Core Services Links */}
          <div>
            <h3 className="font-bold text-sm tracking-wider text-white uppercase mb-5">
              {d.coreServices}
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  {d.service1}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  {d.service2.replace("精度", "")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  {d.service3}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  {d.service4}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-sm tracking-wider text-white uppercase mb-5">
              {d.company}
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  {d.about}
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  {d.projects}
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Contact & Social */}
          <div>
            <h3 className="font-bold text-sm tracking-wider text-white uppercase mb-5">
              {d.quickContact}
            </h3>
            <ul className="space-y-3 text-sm mb-6">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <span>024. 37. 555. 766</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <a href="mailto:thudoweico.jsc@gmail.com" className="hover:text-white transition-colors break-all">
                  thudoweico.jsc@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
      </div>
    </footer>
  )
}
