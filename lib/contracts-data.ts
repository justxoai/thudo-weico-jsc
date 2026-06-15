export interface Contract {
  id: number
  name: string
  nameEn: string
  nameLo: string
  totalValue: string
  thudoValue: string
  startDate: string
  completionDate: string
  status: string
  statusEn: string
  statusLo: string
}

export const contractsData: Contract[] = [
  {
    id: 1,
    name: "Cung cấp và lắp đặt thiết bị xử lý nước sinh hoạt (430 m³/ngày & 510 m³/ngày)",
    nameEn: "Supply and Installation of Domestic Water Treatment Equipment (430 m³/day & 510 m³/day)",
    nameLo: "ផ្គត់ផ្គង់ និងការដំឡើងឧបករណ៍ព្យាបាលទឹក (430 m³/ថ្ងៃ & 510 m³/ថ្ងៃ)",
    totalValue: "4.829 tỷ VND (~185,570 USD)",
    thudoValue: "4.829 tỷ VND (~185,570 USD)",
    startDate: "04/2025",
    completionDate: "Ongoing",
    status: "Đang thực hiện",
    statusEn: "In Progress",
    statusLo: "កំពុងដំណើរការ",
  },
  {
    id: 2,
    name: "Tư vấn báo cáo nghiên cứu khả thi, thiết kế cơ sở, báo cáo thủy văn, thiết kế bản vẽ thi công – Dự án: Hệ thống cấp nước thô cho chuỗi đô thị dọc Quốc lộ 47, Thanh Hóa",
    nameEn:
      "Consulting on Feasibility Study Report, Basic Design, Hydrological Report, and Construction Drawing Design – Project: Raw Water Supply System for Urban Chain along National Highway 47, Thanh Hoa City",
    nameLo:
      "ការពិគ្រោះយោបល់លើរបាយការណ៍ការសិក្សាលម្អិត ការរចនាមូលដ្ឋាន របាយការណ៍លំហូរទឹក និងការរចនាផ្នែកគំនូរសាងសង់ – ដំណើរការ៖ ប្រព័ន្ធផ្គត់ផ្គង់ទឹកឆៅសម្រាប់ខ្សែសង្វាក់ក្រុងតាមផ្លូវលេខ 47 ក្រុង Thanh Hoa",
    totalValue: "5.966 tỷ VND (~240,000 USD)",
    thudoValue: "5.966 tỷ VND (~240,000 USD)",
    startDate: "09/2024",
    completionDate: "Ongoing",
    status: "Đang thực hiện",
    statusEn: "In Progress",
    statusLo: "កំពុងដំណើរការ",
  },
  {
    id: 3,
    name: "Tư vấn khảo sát, báo cáo nghiên cứu khả thi, thiết kế bản vẽ thi công – Dự án: Hệ thống cấp nước thô Bim Sơn, Thanh Hóa",
    nameEn:
      "Consulting on Survey, Feasibility Study Report, and Construction Drawing Design – Project: Raw Water Supply System in Bim Son, Thanh Hoa Province",
    nameLo:
      "ការពិគ្រោះយោបល់លើការស្ទង់ស្ទែង របាយការណ៍ការសិក្សាលម្អិត និងការរចនាផ្នែកគំនូរសាងសង់ – ដំណើរការ៖ ប្រព័ន្ធផ្គត់ផ្គង់ទឹកឆៅ Bim Son ខេត្ត Thanh Hoa",
    totalValue: "6.748 tỷ VND (~293,000 USD)",
    thudoValue: "6.748 tỷ VND (~293,000 USD)",
    startDate: "05/2021",
    completionDate: "Ongoing",
    status: "Đang thực hiện",
    statusEn: "In Progress",
    statusLo: "កំពុងដំណើរការ",
  },
  {
    id: 4,
    name: "Tư vấn thiết kế bản vẽ thi công và dự toán chi tiết – Nâng cấp hệ thống phòng chống xâm nhập mặn An Trạch (210.000 → 420.000 m³/ngày)",
    nameEn:
      "Consulting on Construction Drawing Design and Detailed Cost Estimate – Upgrading An Trach Raw Water System (210,000 → 420,000 m³/day)",
    nameLo:
      "ការពិគ្រោះយោបល់លើការរចនាផ្នែកគំនូរសាងសង់ និងការប៉ាន់ប្រមាណថ្លៃដើមលម្អិត – ការលើកកម្ពស់ប្រព័ន្ធការពារទឹកប្រៃ An Trach (210,000 → 420,000 m³/ថ្ងៃ)",
    totalValue: "3.157 tỷ VND (~137,000 USD)",
    thudoValue: "3.157 tỷ VND (~137,000 USD)",
    startDate: "09/2020",
    completionDate: "11/2020",
    status: "Hoàn thành",
    statusEn: "Completed",
    statusLo: "បានបញ្ចប់",
  },
  {
    id: 5,
    name: "Tư vấn thiết kế, bản vẽ thi công và dự toán – Dự án nhà máy nước Quảng Ngãi",
    nameEn: "Consulting on Design, Construction Drawings and Estimates – Quang Ngai Water Plant Project",
    nameLo: "ការពិគ្រោះយោបល់លើការរចនា ផ្នែកគំនូរសាងសង់ និងការប៉ាន់ប្រមាណ – ដំណើរការរោងចក្របង្គោល Quang Ngai",
    totalValue: "500 triệu VND (~20,800 USD)",
    thudoValue: "500 triệu VND (~20,800 USD)",
    startDate: "07/2022",
    completionDate: "12/2022",
    status: "Hoàn thành",
    statusEn: "Completed",
    statusLo: "បានបញ្ចប់",
  },
  {
    id: 6,
    name: "Tư vấn khảo sát địa hình và địa chất, thiết kế – Nhà máy nước sạch (20.000 m³/ngày), Kon Tum",
    nameEn: "Consulting on Topographic Survey and Design – Clean Water Plant (20,000 m³/day), Kon Tum Province",
    nameLo: "ការពិគ្រោះយោបល់លើការស្ទង់ស្ទែងផ្ទៃដី និងការរចនា – រោងចក្របង្គោល (20,000 m³/ថ្ងៃ) ខេត្ត Kon Tum",
    totalValue: "2.400 tỷ VND (~100,000 USD)",
    thudoValue: "2.400 tỷ VND (~100,000 USD)",
    startDate: "12/2024",
    completionDate: "In progress",
    status: "Đang thực hiện",
    statusEn: "In Progress",
    statusLo: "កំពុងដំណើរការ",
  },
  {
    id: 7,
    name: "Thiết kế, dự toán – Nhà máy nước sạch An Sinh (9.000 m³/ngày)",
    nameEn: "Design and Estimate – Clean Water Plant in An Sinh Commune (9,000 m³/day)",
    nameLo: "ការរចនា និងការប៉ាន់ប្រមាណ – រោងចក្របង្គោលក្នុងសង្រ្គាម An Sinh (9,000 m³/ថ្ងៃ)",
    totalValue: "930 triệu VND (~40,000 USD)",
    thudoValue: "930 triệu VND (~40,000 USD)",
    startDate: "12/2024",
    completionDate: "In progress",
    status: "Đang thực hiện",
    statusEn: "In Progress",
    statusLo: "កំពុងដំណើរការ",
  },
  {
    id: 8,
    name: "Khảo sát địa chất, thủy văn, báo cáo nghiên cứu khả thi, thiết kế – Nhà máy nước Phú Bình (30.000 m³/ngày)",
    nameEn: "Geological and Hydrological Survey, Feasibility Study, and Design – Phu Binh Water Plant (30,000 m³/day)",
    nameLo: "ការស្ទង់ស្ទែងភូមិសាស្ត្រ និងលំហូរទឹក ការសិក្សាលម្អិត និងការរចនា – រោងចក្របង្គោល Phu Binh (30,000 m³/ថ្ងៃ)",
    totalValue: "2.267 tỷ VND (~90,000 USD)",
    thudoValue: "2.267 tỷ VND (~90,000 USD)",
    startDate: "02/2023",
    completionDate: "02/2024",
    status: "Hoàn thành",
    statusEn: "Completed",
    statusLo: "បានបញ្ចប់",
  },
  {
    id: 9,
    name: "Khảo sát và thiết kế đường ống nước thô – Mở rộng nhà máy nước sạch (20.000 m³/ngày), Kon Tum",
    nameEn:
      "Survey and Design for Raw Water Pipelines – Expansion of Clean Water Plant (20,000 m³/day), Kon Tum Province",
    nameLo: "ការស្ទង់ស្ទែង និងការរចនាសម្រាប់បំពង់ទឹកឆៅ – ការពង្រីករោងចក្របង្គោល (20,000 m³/ថ្ងៃ) ខេត្ត Kon Tum",
    totalValue: "631 triệu VND (~25,000 USD)",
    thudoValue: "631 triệu VND (~25,000 USD)",
    startDate: "04/2022",
    completionDate: "09/2022",
    status: "Hoàn thành",
    statusEn: "Completed",
    statusLo: "បានបញ្ចប់",
  },
  {
    id: 10,
    name: "Tư vấn chính sách đầu tư và thiết kế sơ bộ – Dự án nhà máy nước Đông Hà Sông (100.000 m³/ngày), Quảng Nam",
    nameEn:
      "Investment Policy Advisory and Preliminary Design – Dong Ha Song Water Plant Project (100,000 m³/day), Quang Nam Province",
    nameLo: "ការពិគ្រោះយោបល់នយោបាយលក់ដូលលក់ និងការរចនាលម្អិត – ដំណើរការរោងចក្របង្គោល Dong Ha Song (100,000 m³/ថ្ងៃ) ខេត្ត Quang Nam",
    totalValue: "2.147 tỷ VND (~93,126 USD)",
    thudoValue: "2.147 tỷ VND (~93,126 USD)",
    startDate: "04/2021",
    completionDate: "07/2021",
    status: "Hoàn thành",
    statusEn: "Completed",
    statusLo: "បានបញ្ចប់",
  },
  {
    id: 11,
    name: "Báo cáo nghiên cứu khả thi – Đường ống truyền tải nước vùng phía Bắc tỉnh Hưng Yên",
    nameEn: "Feasibility Study – Water Transmission Pipeline for Northern Hung Yen Province",
    nameLo: "ការសិក្សាលម្អិត – បំពង់ផ្ទុកទឹកសម្រាប់ខេត្ត Hung Yen ខាងជើង",
    totalValue: "1.100 tỷ VND (~45,800 USD)",
    thudoValue: "880 triệu VND (~36,600 USD)",
    startDate: "03/2021",
    completionDate: "06/2021",
    status: "Hoàn thành",
    statusEn: "Completed",
    statusLo: "បានបញ្ចប់",
  },
  {
    id: 12,
    name: "Báo cáo nghiên cứu khả thi và tổng đầu tư – Nâng cấp hệ thống cấp nước thô An Trạch (210.000 → 420.000 m³/ngày)",
    nameEn: "Feasibility Study and Total Investment – Upgrading An Trach Raw Water System (210,000 → 420,000 m³/day)",
    nameLo: "ការសិក្សាលម្អិត និងការលក់ដូលលក់សរុប – ការលើកកម្ពស់ប្រព័ន្ធផ្គត់ផ្គង់ទឹកឆៅ An Trach (210,000 → 420,000 m³/ថ្ងៃ)",
    totalValue: "500 triệu VND (~25,000 USD)",
    thudoValue: "500 triệu VND (~25,000 USD)",
    startDate: "09/2019",
    completionDate: "12/2019",
    status: "Hoàn thành",
    statusEn: "Completed",
    statusLo: "បានបញ្ចប់",
  },
  {
    id: 13,
    name: "Báo cáo kỹ thuật và thiết kế bản vẽ thi công – Tăng công suất nhà máy nước Cầu Đỏ (210.000 → 290.000 m³/ngày)",
    nameEn:
      "Technical Report and Construction Drawing Design – Increasing Capacity of Cau Do Water Plant (210,000 → 290,000 m³/day)",
    nameLo: "របាយការណ៍បច្ចេកទេស និងការរចនាផ្នែកគំនូរសាងសង់ – ការបង្កើនសមត្ថភាពរោងចក្របង្គោល Cau Do (210,000 → 290,000 m³/ថ្ងៃ)",
    totalValue: "1.2 tỷ VND (~55,000 USD)",
    thudoValue: "1.2 tỷ VND (~55,000 USD)",
    startDate: "01/2019",
    completionDate: "04/2019",
    status: "Hoàn thành",
    statusEn: "Completed",
    statusLo: "បានបញ្ចប់",
  },
  {
    id: 14,
    name: "Thiết kế, dự toán – Tăng công suất nhà máy nước Cầu Đỏ (Giai đoạn 1: 60.000 m³/ngày)",
    nameEn: "Design and Estimate – Increasing Capacity of Cau Do Water Treatment Plant (Phase 1: 60,000 m³/day)",
    nameLo: "ការរចនា និងការប៉ាន់ប្រមាណ – ការបង្កើនសមត្ថភាពរោងចក្របង្គោល Cau Do (ដំណាក់កាលទី 1: 60,000 m³/ថ្ងៃ)",
    totalValue: "2.4 tỷ VND (~120,000 USD)",
    thudoValue: "2.4 tỷ VND (~120,000 USD)",
    startDate: "09/2017",
    completionDate: "10/2017",
    status: "Hoàn thành",
    statusEn: "Completed",
    statusLo: "បានបញ្ចប់",
  },
  {
    id: 15,
    name: "Thiết kế trạm bơm điều tiết Tây Mỗ (300.000 m³/ngày)",
    nameEn: "Design of Tay Mo Regulating Station (300,000 m³/day)",
    nameLo: "ការរចនាស្ថានីយ៍លម្អិត Tay Mo (300,000 m³/ថ្ងៃ)",
    totalValue: "5.23 tỷ VND (~240,000 USD)",
    thudoValue: "540 triệu VND (~25,000 USD)",
    startDate: "01/2018",
    completionDate: "05/2018",
    status: "Hoàn thành",
    statusEn: "Completed",
    statusLo: "បានបញ្ចប់",
  },
  {
    id: 16,
    name: "Báo cáo dự án đầu tư – Xây dựng nhà máy nước Hòa Liên (120.000 m³/ngày)",
    nameEn: "Investment Project Report – Construction of Hoa Lien Water Plant (120,000 m³/day)",
    nameLo: "របាយការណ៍ដំណើរការលក់ដូលលក់ – ការសាងសង់រោងចក្របង្គោល Hoa Lien (120,000 m³/ថ្ងៃ)",
    totalValue: "1.1 tỷ VND (~55,000 USD)",
    thudoValue: "0.45 tỷ VND (~22,000 USD)",
    startDate: "06/2017",
    completionDate: "12/2017",
    status: "Hoàn thành",
    statusEn: "Completed",
    statusLo: "បានបញ្ចប់",
  },
]

export const getContractsByLanguage = (lang: "vi" | "en" | "lo") => {
  return contractsData
    .sort((a, b) => {
      const dateA = new Date(a.startDate.replace(/(\d{2})\/(\d{4})/, "$2-$1-01"))
      const dateB = new Date(b.startDate.replace(/(\d{2})\/(\d{4})/, "$2-$1-01"))
      return dateB.getTime() - dateA.getTime()
    })
    .map((contract) => ({
      ...contract,
      name: lang === "vi" ? contract.name : lang === "en" ? contract.nameEn : contract.nameLo,
      status: lang === "vi" ? contract.status : lang === "en" ? contract.statusEn : contract.statusLo,
    }))
}
