import { getRandomImageForProject } from "./image-utils"

export interface Project {
  id: number
  title: string
  titleEn: string
  titleLo: string
  category: string
  categoryEn: string
  categoryLo: string
  location: string
  locationEn: string
  locationLo: string
  description: string
  descriptionEn: string
  descriptionLo: string
  shortDescription: string
  shortDescriptionEn: string
  shortDescriptionLo: string
  year?: string
  startDate?: Date
  status: string
  statusEn: string
  statusLo: string
  image: string
  details: {
    type: string
    typeEn: string
    typeLo: string
    investor?: string
    investorEn?: string
    investorLo?: string
    packageName?: string
    packageNameEn?: string
    packageNameLo?: string
    contractPrice?: string
    biddingEligibility?: string
    biddingEligibilityEn?: string
    biddingEligibilityLo?: string
    contractPeriod?: string
    actualPeriod?: string
    workSummary: string
    workSummaryEn: string
    workSummaryLo: string
  }
}

export const projectsData: Project[] = [
  // Projects with dates (sorted by most recent first)
  {
    id: 7,
    title: "Cung cấp và lắp đặt thiết bị xử lý nước sinh hoạt",
    titleEn: "Supply and Installation of Domestic Water Treatment Equipment",
    titleLo: "ផ្គត់ផ្គង់ និងការដំឡើងឧបករណ៍ព្យាបាលទឹកក្នុងផ្ទះ",
    category: "Thiết bị & Lắp đặt",
    categoryEn: "Equipment & Installation",
    categoryLo: "ឧបករណ៍ & ការដំឡើង",
    location: "Tỉnh Huaphan, Lào",
    locationEn: "Huaphan Province, Laos",
    locationLo: "ແຂວງຫົວພັນ, ລາວ",
    description:
      "Cung cấp và lắp đặt hai hệ thống xử lý nước sinh hoạt (430 m³/ngày và 510 m³/ngày) bao gồm 4 bể lắng, 4 bể lọc, 4 bể chứa, máy bơm liều lượng, khuấy trộn và bể hóa chất.",
    descriptionEn:
      "Supply and installation of two domestic water treatment systems (430 m³/day and 510 m³/day) including 4 settling tanks, 4 filter tanks, 4 storage tanks, dosing pumps, stirrers, and chemical tanks.",
    descriptionLo:
      "ផ្គត់ផ្គង់ និងការដំឡើងប្រព័ន្ធព្យាបាលទឹកក្នុងផ្ទះពីរ (430 m³/ថ្ងៃ និង 510 m³/ថ្ងៃ) រួមទាំងបង្គន់ 4 ដែលលិច បង្គន់ 4 ដែលច្រាក បង្គន់ 4 ដែលផ្ទុក ម៉ាស៊ីនបូមដែលផ្តល់ឱ្យ កូរ និងបង្គន់គីមី។",
    shortDescription: "Cung cấp thiết bị xử lý nước 430-510 m³/ngày",
    shortDescriptionEn: "Supply of water treatment equipment 430-510 m³/day",
    shortDescriptionLo: "ផ្គត់ផ្គង់ឧបករណ៍ព្យាបាលទឹក 430-510 m³/ថ្ងៃ",
    startDate: new Date("2025-04-01"),
    year: "04/2025 – 05/2025",
    status: "Đang thực hiện",
    statusEn: "In Progress",
    statusLo: "កំពុងដំណើរការ",
    image: "/water-infrastructure-system.jpg",
    details: {
      type: "Cung cấp và lắp đặt thiết bị",
      typeEn: "Supply and Installation of Equipment",
      typeLo: "ផ្គត់ផ្គង់ និងការដំឡើងឧបករណ៍",
      investor: "THE UNIQTEK CO., LTD",
      investorEn: "THE UNIQTEK CO., LTD",
      investorLo: "THE UNIQTEK CO., LTD",
      contractPrice: "4.829 tỷ VND (~185,570 USD)",
      biddingEligibility: "Nhà thầu độc lập",
      biddingEligibilityEn: "Independent Contractor",
      biddingEligibilityLo: "អ្នកសាងសង់ឯករាជ្យ",
      contractPeriod: "04/2025 – 05/2025",
      actualPeriod: "04/2025 – Đang thực hiện",
      workSummary:
        "Cung cấp và lắp đặt hai hệ thống xử lý nước sinh hoạt với công suất 430 m³/ngày và 510 m³/ngày, bao gồm các bể lắng, bể lọc, bể chứa, máy bơm liều lượng, khuấy trộn và bể hóa chất cho 2 nhà máy nước.",
      workSummaryEn:
        "Supply and installation of two domestic water treatment systems with capacity of 430 m³/day and 510 m³/day, including settling tanks, filter tanks, storage tanks, dosing pumps, stirrers, and chemical tanks for 2 water treatment plants.",
      workSummaryLo:
        "ផ្គត់ផ្គង់ និងការដំឡើងប្រព័ន្ធព្យាបាលទឹកក្នុងផ្ទះពីរដែលមានសមត្ថភាព 430 m³/ថ្ងៃ និង 510 m³/ថ្ងៃ រួមទាំងបង្គន់ដែលលិច បង្គន់ច្រាក បង្គន់ផ្ទុក ម៉ាស៊ីនបូមដែលផ្តល់ឱ្យ កូរ និងបង្គន់គីមីសម្រាប់ប្រព័ន្ធផ្គត់ផ្គង់ទឹក 2 ។",
    },
  },
  {
    id: 12,
    title: "Mở rộng nhà máy xử lý nước sạch (20.000 m³/ngày)",
    titleEn: "Expansion of Clean Water Plant (20,000 m³/day)",
    titleLo: "ការពង្រីករោងចក្រទឹកស្អាត (20,000 m³/ថ្ងៃ)",
    category: "Nhà máy nước",
    categoryEn: "Water Treatment Plant",
    categoryLo: "រោងចក្រព្យាបាលទឹក",
    location: "Tỉnh Kon Tum, Việt Nam",
    locationEn: "Kon Tum Province, Vietnam",
    locationLo: "ແຂວງກອນຕູມ, ຫວຽດນາມ",
    description:
      "Mở rộng nhà máy xử lý nước sạch với công suất 20.000 m³/ngày tại địa chỉ 182 Trần Phú, thành phố Kon Tum, bao gồm các hệ thống lắng, lọc, bơm, hóa chất và xử lý bùn.",
    descriptionEn:
      "Expansion of clean water treatment plant with capacity of 20,000 m³/day at 182 Tran Phu Street, Kon Tum City, including sedimentation, filtration, pumping, chemical, and sludge treatment systems.",
    descriptionLo:
      "ការពង្រីករោងចក្រព្យាបាលទឹកស្អាតដែលមានសមត្ថភាព 20,000 m³/ថ្ងៃនៅលេខ 182 ផ្លូវ Tran Phu ក្រុងKon Tum រួមទាំងប្រព័ន្ធលិច ច្រាក បូម គីមី និងព្យាបាលលាក់។",
    shortDescription: "Mở rộng nhà máy nước 20.000 m³/ngày",
    shortDescriptionEn: "Water plant expansion 20,000 m³/day",
    shortDescriptionLo: "ការពង្រីករោងចក្រទឹក 20,000 m³/ថ្ងៃ",
    startDate: new Date("2024-12-01"),
    year: "12/2024 – 05/2025",
    status: "Đang thực hiện",
    statusEn: "In Progress",
    statusLo: "កំពុងដំណើរការ",
    image: "/water-infrastructure-system.jpg",
    details: {
      type: "Mở rộng nhà máy xử lý nước",
      typeEn: "Expansion of Clean Water Plant",
      typeLo: "ការពង្រីករោងចក្រព្យាបាលទឹក",
      investor: "Công ty Cổ phần Cấp nước Kon Tum",
      investorEn: "Kon Tum Water Supply Joint Stock Company",
      investorLo: "ក្រុមហ៊ុនផ្គត់ផ្គង់ទឹក Kon Tum",
      contractPrice: "2.4 tỷ VND (~100,000 USD)",
      biddingEligibility: "Nhà thầu độc lập",
      biddingEligibilityEn: "Independent Contractor",
      biddingEligibilityLo: "អ្នកសាងសង់ឯករាជ្យ",
      contractPeriod: "12/2024 – 05/2025",
      actualPeriod: "12/2024 – 05/2025",
      workSummary:
        "Khảo sát địa hình và địa chất, báo cáo đánh giá tác động môi trường, nghiên cứu khả thi, thiết kế cơ sở, bản vẽ thi công và dự toán chi tiết.",
      workSummaryEn:
        "Topographic and geological survey, environmental impact assessment report, feasibility study, basic design, construction drawings and detailed estimates.",
      workSummaryLo:
        "ការស្ទង់ស្ទែងផ្ទៃដីនិងភូមិសាស្ត្រ របាយការណ៍វាយតម្លៃផលប៉ះពាល់ដល់បរិស្ថាន ការសិក្សាលម្អិត ការរចនាមូលដ្ឋាន ផ្នែកគំនូរសាងសង់ និងការប៉ាន់ប្រមាណលម្អិត។",
    },
  },
  {
    id: 13,
    title: "Xây dựng nhà máy nước sạch An Sinh (9.000 m³/ngày)",
    titleEn: "Construction of An Sinh Commune Clean Water Plant (9,000 m³/day)",
    titleLo: "ការសាងសង់រោងចក្រទឹកស្អាតសង្រ្គាម An Sinh (9,000 m³/ថ្ងៃ)",
    category: "Nhà máy nước",
    categoryEn: "Water Treatment Plant",
    categoryLo: "រោងចក្រព្យាបាលទឹក",
    location: "Tỉnh Quảng Ninh, Việt Nam",
    locationEn: "Quang Ninh Province, Vietnam",
    locationLo: "ແຂວງກວາງນິງ, ຫວຽດນາມ",
    description:
      "Xây dựng nhà máy nước sạch mới với công suất 9.000 m³/ngày tại xã An Sinh, huyện Tân Triều, bao gồm bể phản ứng, bể lắng, bể lọc, bể chứa nước sạch 1.000 m³, trạm bơm, nhà hóa chất và hệ thống xử lý bùn.",
    descriptionEn:
      "Construction of new clean water plant with capacity of 9,000 m³/day in An Sinh Commune, Tan Trieu District, including reaction tanks, settling tanks, filter tanks, 1,000 m³ clean water tank, pumping station, chemical house, and sludge treatment system.",
    descriptionLo:
      "ការសាងសង់រោងចក្រទឹកស្អាតថ្មីដែលមានសមត្ថភាព 9,000 m³/ថ្ងៃនៅសង្រ្គាម An Sinh ស្រុក Tan Trieu រួមទាំងបង្គន់ប្រតិកម្ម បង្គន់លិច បង្គន់ច្រាក បង្គន់ផ្ទុកទឹកស្អាត 1,000 m³ ស្ថានីយ៍បូម ផ្ទះគីមី និងប្រព័ន្ធព្យាបាលលាក់។",
    shortDescription: "Nhà máy nước sạch 9.000 m³/ngày",
    shortDescriptionEn: "Clean water plant 9,000 m³/day",
    shortDescriptionLo: "រោងចក្រទឹកស្អាត 9,000 m³/ថ្ងៃ",
    startDate: new Date("2024-12-01"),
    year: "12/2024 – 02/2025",
    status: "Hoàn thành",
    statusEn: "Completed",
    statusLo: "បានបញ្ចប់",
    image: "/wastewater-treatment-plant.jpg",
    details: {
      type: "Xây dựng nhà máy nước sạch",
      typeEn: "Construction of Clean Water Plant",
      typeLo: "ការសាងសង់រោងចក្រទឹកស្អាត",
      investor: "Công ty Cổ phần Cấp nước Quảng Ninh",
      investorEn: "Quang Ninh Water Supply Joint Stock Company",
      investorLo: "ក្រុមហ៊ុនផ្គត់ផ្គង់ទឹក Quang Ninh",
      contractPrice: "930 triệu VND (~40,000 USD)",
      biddingEligibility: "Nhà thầu độc lập",
      biddingEligibilityEn: "Independent Contractor",
      biddingEligibilityLo: "អ្នកសាងសង់ឯករាជ្យ",
      contractPeriod: "12/2024 – 02/2025",
      actualPeriod: "12/2024 – 02/2025",
      workSummary: "Lập bản vẽ thi công và dự toán chi tiết cho nhà máy nước sạch mới với công suất 9.000 m³/ngày.",
      workSummaryEn:
        "Preparation of construction drawings and detailed estimates for new clean water plant with capacity of 9,000 m³/day.",
      workSummaryLo: "ការរៀបចំផ្នែកគំនូរសាងសង់ និងការប៉ាន់ប្រមាណលម្អិតសម្រាប់រោងចក្រទឹកស្អាតថ្មីដែលមានសមត្ថភាព 9,000 m³/ថ្ងៃ។",
    },
  },
  {
    id: 8,
    title: "Xây dựng hệ thống cấp nước thô dọc Quốc lộ 47, Thanh Hóa",
    titleEn: "Construction of Raw Water Supply System along National Highway 47, Thanh Hoa",
    titleLo: "ការសាងសង់ប្រព័ន្ធផ្គត់ផ្គង់ទឹកឆៅតាមផ្លូវលេខ 47 Thanh Hoa",
    category: "Hạ tầng nước",
    categoryEn: "Water Infrastructure",
    categoryLo: "ហេតុការណ៍ទឹក",
    location: "Tỉnh Thanh Hóa, Việt Nam",
    locationEn: "Thanh Hoa Province, Vietnam",
    locationLo: "ແຂວງແທງຮວາ, ຫວຽດນາມ",
    description:
      "Xây dựng hệ thống cấp nước thô cho chuỗi đô thị dọc Quốc lộ 47, Thanh Hóa, bao gồm khảo sát thủy văn, lập báo cáo nghiên cứu khả thi, thiết kế cơ sở và bản vẽ thi công.",
    descriptionEn:
      "Construction of raw water supply system for urban chain along National Highway 47, Thanh Hoa, including hydrological survey, feasibility study report, basic design, and construction drawing design.",
    descriptionLo:
      "ការសាងសង់ប្រព័ន្ធផ្គត់ផ្គង់ទឹកឆៅសម្រាប់ខ្សែសង្វាក់ក្រុងតាមផ្លូវលេខ 47 Thanh Hoa រួមទាំងការស្ទង់ស្ទែងលំហូរទឹក របាយការណ៍ការសិក្សាលម្អិត ការរចនាមូលដ្ឋាន និងការរចនាផ្នែកគំនូរសាងសង់។",
    shortDescription: "Hệ thống cấp nước thô Quốc lộ 47",
    shortDescriptionEn: "Raw water supply system National Highway 47",
    shortDescriptionLo: "ប្រព័ន្ធផ្គត់ផ្គង់ទឹកឆៅផ្លូវលេខ 47",
    startDate: new Date("2024-09-01"),
    year: "09/2024 – 12/2024",
    status: "Hoàn thành",
    statusEn: "Completed",
    statusLo: "បានបញ្ចប់",
    image: "/urban-planning-development.jpg",
    details: {
      type: "Xây dựng hệ thống cấp nước thô",
      typeEn: "Construction of Raw Water Supply System",
      typeLo: "ការសាងសង់ប្រព័ន្ធផ្គត់ផ្គង់ទឹកឆៅ",
      investor: "Công ty Cổ phần Đầu tư Xây dựng và Thương mại Anh Phát",
      investorEn: "Anh Phat Construction Investment and Trading Corporation – JSC",
      investorLo: "ក្រុមហ៊ុនលក់ដូលលក់ និងលក់ដូលលក់ Anh Phat",
      contractPrice: "5.966 tỷ VND (~240,000 USD)",
      biddingEligibility: "Nhà thầu độc lập",
      biddingEligibilityEn: "Independent Contractor",
      biddingEligibilityLo: "អ្នកសាងសង់ឯករាជ្យ",
      contractPeriod: "09/2024 – 12/2024",
      actualPeriod: "09/2024 – 12/2024",
      workSummary:
        "Khảo sát thủy văn, lập báo cáo nghiên cứu khả thi, thiết kế cơ sở, tính toán tổng đầu tư, lập bản vẽ thi công và dự toán chi tiết.",
      workSummaryEn:
        "Hydrological survey, preparation of feasibility study report, basic design, and total investment calculation, preparation of construction drawings and detailed estimates.",
      workSummaryLo:
        "ការស្ទង់ស្ទែងលំហូរទឹក ការរៀបចំរបាយការណ៍ការសិក្សាលម្អិត ការរចនាមូលដ្ឋាន និងការគណនាការលក់ដូលលក់សរុប ការរៀបចំផ្នែកគំនូរសាងសង់ និងការប៉ាន់ប្រមាណលម្អិត។",
    },
  },
  {
    id: 9,
    title: "Xây dựng hệ thống cấp nước thô Bim Sơn, Thanh Hóa",
    titleEn: "Construction of Bim Son Raw Water Supply System, Thanh Hoa Province",
    titleLo: "ការសាងសង់ប្រព័ន្ធផ្គត់ផ្គង់ទឹកឆៅ Bim Son ខេត្ត Thanh Hoa",
    category: "Hạ tầng nước",
    categoryEn: "Water Infrastructure",
    categoryLo: "ហេតុការណ៍ទឹក",
    location: "Tỉnh Thanh Hóa, Việt Nam",
    locationEn: "Thanh Hoa Province, Vietnam",
    locationLo: "ແຂວງແທງຮວາ, ຫວຽດນາມ",
    description:
      "Xây dựng hệ thống cấp nước thô Bim Sơn tại huyện Hà Trung và thị xã Bim Sơn, Thanh Hóa, bao gồm khảo sát địa hình, địa chất, thủy văn, quy hoạch chi tiết, nghiên cứu khả thi, báo cáo đánh giá tác động môi trường, bản vẽ thi công và dự toán.",
    descriptionEn:
      "Construction of Bim Son raw water supply system in Ha Trung District and Bim Son Town, Thanh Hoa, including topographic, geological, and hydrological surveys, detailed planning, feasibility study, environmental impact assessment report, construction drawings and detailed estimates.",
    descriptionLo:
      "ការសាងសង់ប្រព័ន្ធផ្គត់ផ្គង់ទឹកឆៅ Bim Son នៅស្រុក Ha Trung និងក្រុង Bim Son ខេត្ត Thanh Hoa រួមទាំងការស្ទង់ស្ទែងផ្ទៃដី ភូមិសាស្ត្រ និងលំហូរទឹក ការរៀបចំផែនការលម្អិត ការសិក្សាលម្អិត របាយការណ៍វាយតម្លៃផលប៉ះពាល់ដល់បរិស្ថាន ផ្នែកគំនូរសាងសង់ និងការប៉ាន់ប្រមាណលម្អិត។",
    shortDescription: "Hệ thống cấp nước Bim Sơn",
    shortDescriptionEn: "Bim Son Water Supply System",
    shortDescriptionLo: "ប្រព័ន្ធផ្គត់ផ្គង់ទឹក Bim Son",
    startDate: new Date("2021-05-01"),
    year: "05/2021 – 01/2022",
    status: "Hoàn thành",
    statusEn: "Completed",
    statusLo: "បានបញ្ចប់",
    image: "/bridge-infrastructure.jpg",
    details: {
      type: "Xây dựng hệ thống cấp nước thô",
      typeEn: "Construction of Raw Water Supply System",
      typeLo: "ការសាងសង់ប្រព័ន្ធផ្គត់ផ្គង់ទឹកឆៅ",
      investor: "Công ty Cổ phần Đầu tư Xây dựng và Thương mại Anh Phát",
      investorEn: "Anh Phat Construction Investment and Trading Corporation – JSC",
      investorLo: "ក្រុមហ៊ុនលក់ដូលលក់ និងលក់ដូលលក់ Anh Phat",
      contractPrice: "6.748 tỷ VND (~293,000 USD)",
      biddingEligibility: "Nhà thầu độc lập",
      biddingEligibilityEn: "Independent Contractor",
      biddingEligibilityLo: "អ្នកសាងសង់ឯករាជ្យ",
      contractPeriod: "05/2021 – 01/2022",
      actualPeriod: "05/2021 – 12/2024 (Chậm tiến độ do nhà đầu tư thay đổi vị trí xây dựng)",
      workSummary:
        "Khảo sát địa hình, địa chất, thủy văn, quy hoạch chi tiết 1/500, nghiên cứu khả thi, thiết kế cơ sở, tính toán tổng đầu tư, báo cáo đánh giá tác động môi trường, bản vẽ thi công và dự toán chi tiết.",
      workSummaryEn:
        "Topographic, geological, and hydrological surveys, detailed planning 1/500, feasibility study, basic design, total investment calculation, environmental impact assessment report, construction drawings and detailed estimates.",
      workSummaryLo:
        "ការស្ទង់ស្ទែងផ្ទៃដី ភូមិសាស្ត្រ និងលំហូរទឹក ការរៀបចំផែនការលម្អិត 1/500 ការសិក្សាលម្អិត ការរចនាមូលដ្ឋាន ការគណនាការលក់ដូលលក់សរុប របាយការណ៍វាយតម្លៃផលប៉ះពាល់ដល់បរិស្ថាន ផ្នែកគំនូរសាងសង់ និងការប៉ាន់ប្រមាណលម្អិត។",
    },
  },
  {
    id: 10,
    title: "Mở rộng hệ thống phòng chống xâm nhập mặn An Trạch (210.000 → 420.000 m³/ngày)",
    titleEn: "Expansion and Capacity Increase of An Trach Saltwater Prevention System (210,000 → 420,000 m³/day)",
    titleLo: "ការពង្រីក និងការបង្កើនសមត្ថភាពនៃប្រព័ន្ធការពារទឹកប្រៃ An Trach (210,000 → 420,000 m³/ថ្ងៃ)",
    category: "Hạ tầng nước",
    categoryEn: "Water Infrastructure",
    categoryLo: "ហេតុការណ៍ទឹក",
    location: "Thành phố Đà Nẵng, Việt Nam",
    locationEn: "Da Nang City, Vietnam",
    locationLo: "ນະຄອນດາໜັງ, ຫວຽດນາມ",
    description:
      "Mở rộng và tăng công suất hệ thống phòng chống xâm nhập mặn An Trạch từ 210.000 lên 420.000 m³/ngày tại Đà Nẵng, bao gồm thiết kế bản vẽ thi công và tính toán tổng dự toán xây dựng.",
    descriptionEn:
      "Expansion and capacity increase of An Trach saltwater prevention system from 210,000 to 420,000 m³/day in Da Nang City, including construction drawing design and preparation of total construction investment estimate.",
    descriptionLo:
      "ការពង្រីក និងការបង្កើនសមត្ថភាពនៃប្រព័ន្ធការពារទឹកប្រៃ An Trach ពី 210,000 ដល់ 420,000 m³/ថ្ងៃនៅក្រុង Da Nang រួមទាំងការរចនាផ្នែកគំនូរសាងសង់ និងការរៀបចំការប៉ាន់ប្រមាណការលក់ដូលលក់សាងសង់សរុប។",
    shortDescription: "Mở rộng hệ thống phòng chống xâm nhập mặn",
    shortDescriptionEn: "Saltwater prevention system expansion",
    shortDescriptionLo: "ការពង្រីកប្រព័ន្ធការពារទឹកប្រៃ",
    startDate: new Date("2020-09-01"),
    year: "09/2020 – 11/2020",
    status: "Hoàn thành",
    statusEn: "Completed",
    statusLo: "បានបញ្ចប់",
    image: "/ecological-park.jpg",
    details: {
      type: "Mở rộng hệ thống cấp nước",
      typeEn: "Expansion of Water Supply System",
      typeLo: "ការពង្រីកប្រព័ន្ធផ្គត់ផ្គង់ទឹក",
      investor: "Công ty Cổ phần Cấp nước Đà Nẵng",
      investorEn: "Danang Water Supply Joint Stock Company",
      investorLo: "ក្រុមហ៊ុនផ្គត់ផ្គង់ទឹក Da Nang",
      contractPrice: "3.157 tỷ VND (~137,000 USD)",
      biddingEligibility: "Nhà thầu độc lập",
      biddingEligibilityEn: "Independent Contractor",
      biddingEligibilityLo: "អ្នកសាងសង់ឯករាជ្យ",
      contractPeriod: "09/2020 – 11/2020",
      actualPeriod: "09/2020 – 11/2020",
      workSummary:
        "Thiết kế bản vẽ thi công và tính toán tổng dự toán xây dựng cho dự án mở rộng hệ thống phòng chống xâm nhập mặn.",
      workSummaryEn:
        "Design of construction drawings and preparation of total construction investment estimate for the saltwater prevention system expansion project.",
      workSummaryLo: "ការរចនាផ្នែកគំនូរសាងសង់ និងការរៀបចំការប៉ាន់ប្រមាណការលក់ដូលលក់សាងសង់សរុបសម្រាប់ដំណើរការពង្រីកប្រព័ន្ធការពារទឹកប្រៃ។",
    },
  },
  {
    id: 11,
    title: "Dự án nhà máy nước Quảng Ngãi",
    titleEn: "Quang Ngai Water Plant Project",
    titleLo: "ដំណើរការរោងចក្រទឹក Quang Ngai",
    category: "Hạ tầng nước",
    categoryEn: "Water Infrastructure",
    categoryLo: "ហេតុការណ៍ទឹក",
    location: "Tỉnh Quảng Ngãi, Việt Nam",
    locationEn: "Quang Ngai Province, Vietnam",
    locationLo: "ແຂວງກວາງຫງາຍ, ຫວຽດນາມ",
    description:
      "Thiết kế bản vẽ thi công và dự toán chi tiết cho đường ống truyền tải nước sạch HDPE PE100 D710 PN10 dài khoảng 6,7 km kết nối từ nhà máy xử lý nước đến mạng phân phối nước của thành phố Quảng Ngãi.",
    descriptionEn:
      "Design of construction drawings and detailed estimates for HDPE PE100 D710 PN10 clean water transmission pipeline approximately 6.7 km long connecting the Water Treatment Plant to Quang Ngai City's water distribution network.",
    descriptionLo:
      "ការរចនាផ្នែកគំនូរសាងសង់ និងការប៉ាន់ប្រមាណលម្អិតសម្រាប់បំពង់ផ្ទុកទឹកស្អាត HDPE PE100 D710 PN10 ប្រវែងប្រហែល 6.7 គីឡូម៉ែត្រដែលតភ្ជាប់ពីរោងចក្រព្យាបាលទឹកទៅបណ្តាញចែកចាយទឹកក្រុង Quang Ngai ។",
    shortDescription: "Đường ống truyền tải nước Quảng Ngãi",
    shortDescriptionEn: "Quang Ngai Water Transmission Pipeline",
    shortDescriptionLo: "បំពង់ផ្ទុកទឹក Quang Ngai",
    startDate: new Date("2022-07-01"),
    year: "07/2022 – 12/2022",
    status: "Đang thực hiện",
    statusEn: "In Progress",
    statusLo: "កំពុងដំណើរការ",
    image: "/green-office-building.jpg",
    details: {
      type: "Xây dựng hệ thống phân phối nước",
      typeEn: "Construction of Water Distribution System",
      typeLo: "ការសាងសង់ប្រព័ន្ធចែកចាយទឹក",
      investor: "Công ty Cổ phần Hoàng Thịnh Đạt",
      investorEn: "Hoang Thinh Dat Joint Stock Company",
      investorLo: "ក្រុមហ៊ុនលក់ដូលលក់ Hoang Thinh Dat",
      contractPrice: "500 triệu VND (~20,800 USD)",
      biddingEligibility: "Nhà thầu độc lập",
      biddingEligibilityEn: "Independent Contractor",
      biddingEligibilityLo: "អ្នកសាងសង់ឯករាជ្យ",
      contractPeriod: "07/2022 – 12/2022",
      actualPeriod: "07/2022 – Đang thực hiện",
      workSummary:
        "Thiết kế bản vẽ thi công và dự toán chi tiết cho đường ống truyền tải nước sạch HDPE PE100 D710 PN10 dài khoảng 6,7 km.",
      workSummaryEn:
        "Design of construction drawings and detailed estimates for HDPE PE100 D710 PN10 clean water transmission pipeline approximately 6.7 km long.",
      workSummaryLo:
        "ការរចនាផ្នែកគំនូរសាងសង់ និងការប៉ាន់ប្រមាណលម្អិតសម្រាប់បំពង់ផ្ទុកទឹកស្អាត HDPE PE100 D710 PN10 ប្រវែងប្រហែល 6.7 គីឡូម៉ែត្រ។",
    },
  },
  {
    id: 14,
    title: "Dự án đầu tư xây dựng nhà máy nước Phú Bình (30.000 m³/ngày)",
    titleEn: "Phu Binh Water Plant Construction Investment Project (30,000 m³/day)",
    titleLo: "ដំណើរការលក់ដូលលក់សាងសង់រោងចក្រទឹក Phu Binh (30,000 m³/ថ្ងៃ)",
    category: "Nhà máy nước",
    categoryEn: "Water Treatment Plant",
    categoryLo: "រោងចក្រព្យាបាលទឹក",
    location: "Tỉnh Thái Nguyên, Việt Nam",
    locationEn: "Thai Nguyen Province, Vietnam",
    locationLo: "ແຂວງໄທງວຽນ, ຫວຽດນາມ",
    description:
      "Dự án đầu tư xây dựng nhà máy nước Phú Bình với công suất 30.000 m³/ngày (2 đơn vị 15.000 m³/ngày mỗi đơn vị), bao gồm các hệ thống lắng, lọc, bể chứa nước sạch, bơm, hóa chất và xử lý bùn.",
    descriptionEn:
      "Phu Binh Water Plant construction investment project with capacity of 30,000 m³/day (2 units of 15,000 m³/day each), including sedimentation, filtration, clean water tanks, pumping, chemical, and sludge treatment facilities.",
    descriptionLo:
      "ដំណើរការលក់ដូលលក់សាងសង់រោងចក្រទឹក Phu Binh ដែលមានសមត្ថភាព 30,000 m³/ថ្ងៃ (ឯកតា 2 នៃ 15,000 m³/ថ្ងៃ ឯកតាម្នាក់ៗ) រួមទាំងប្រព័ន្ធលិច ច្រាក បង្គន់ផ្ទុកទឹកស្អាត បូម គីមី និងព្យាបាលលាក់។",
    shortDescription: "Nhà máy nước Phú Bình 30.000 m³/ngày",
    shortDescriptionEn: "Phu Binh Water Plant 30,000 m³/day",
    shortDescriptionLo: "រោងចក្រទឹក Phu Binh 30,000 m³/ថ្ងៃ",
    startDate: new Date("2023-02-01"),
    year: "02/2023 – 02/2024",
    status: "Hoàn thành",
    statusEn: "Completed",
    statusLo: "បានបញ្ចប់",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NMN%20Ph%C3%BA%20B%C3%ACnh-S8nqSbfcqcWCGGetIH79mypcDhZLQi.jpg",
    details: {
      type: "Xây dựng nhà máy nước",
      typeEn: "Construction of Water Treatment Plant",
      typeLo: "ការសាងសង់រោងចក្របង្គោលពិសេស",
      investor: "Công ty Cổ phần Cấp nước Phú Bình",
      investorEn: "Phu Binh Water Supply Company Limited",
      investorLo: "ក្រុមហ៊ុនផ្គត់ផ្គង់ទឹក Phu Binh",
      contractPrice: "2.267 tỷ VND (~90,000 USD)",
      biddingEligibility: "Nhà thầu độc lập",
      biddingEligibilityEn: "Independent Contractor",
      biddingEligibilityLo: "អ្នកសាងសង់ឯករាជ្យ",
      contractPeriod: "02/2023 – 02/2024",
      actualPeriod: "02/2023 – 02/2024",
      workSummary:
        "Báo cáo nghiên cứu khả thi, thiết kế cơ sở, tính toán tổng đầu tư, lập hồ sơ mời thầu, kiểm tra mẫu nước.",
      workSummaryEn:
        "Feasibility study report, basic design, total investment calculation, preparation of bidding documents, water sample testing.",
      workSummaryLo: "របាយការណ៍ការសិក្សាលម្អិត ការរចនាមូលដ្ឋាន ការគណនាការលក់ដូលលក់សរុប ការរៀបចំឯកសារលក់ដូលលក់ ការធ្វើតេស្តគំរូទឹក។",
    },
  },
  {
    id: 15,
    title: "Mở rộng nhà máy nước sạch (20.000 m³/ngày) – Đường ống nước thô",
    titleEn: "Expansion of Clean Water Plant (20,000 m³/day) – Raw Water Pipeline Item",
    titleLo: "ការពង្រីករោងចក្រទឹកស្អាត (20,000 m³/ថ្ងៃ) – ធាតុបំពង់ទឹកឆៅ",
    category: "Hạ tầng nước",
    categoryEn: "Water Infrastructure",
    categoryLo: "ហេតុការណ៍ទឹក",
    location: "Tỉnh Kon Tum, Việt Nam",
    locationEn: "Kon Tum Province, Vietnam",
    locationLo: "ແຂວງກອນຕູມ, ຫວຽດນາມ",
    description:
      "Xây dựng đường ống nước thô DN700-DI dài khoảng 2.611 mét cung cấp 17.000 m³/ngày cho nhà máy hiện có và 20.000 m³/ngày cho nhà máy mới gần kho dự trữ quốc gia.",
    descriptionEn:
      "Construction of DN700-DI raw water pipeline approximately 2,611 m long supplying 17,000 m³/day to existing plant and 20,000 m³/day to new plant near the national reserve warehouse.",
    descriptionLo:
      "ការសាងសង់បំពង់ទឹកឆៅ DN700-DI ប្រវែងប្រហែល 2,611 ម៉ែត្រដែលផ្គត់ផ្គង់ 17,000 m³/ថ្ងៃទៅរោងចក្របង្គោលដែលមាន និង 20,000 m³/ថ្ងៃទៅរោងចក្របង្គោលថ្មីនៅក្បែរឃ្លាំងសម្រាក់ជាតិ។",
    shortDescription: "ដូងឆៅ Kon Tum 2.611 ម",
    shortDescriptionEn: "Kon Tum Raw Water Pipeline 2,611 m",
    shortDescriptionLo: "បំពង់ទឹកឆៅ Kon Tum 2,611 ម",
    startDate: new Date("2022-04-01"),
    year: "04/2022 – 09/2022",
    status: "Hoàn thành",
    statusEn: "Completed",
    statusLo: "បានបញ្ចប់",
    image: "/industrial-park.jpg",
    details: {
      type: "Xây dựng đường ống nước thô",
      typeEn: "Construction of Raw Water Pipeline",
      typeLo: "ការសាងសង់បំពង់ទឹកឆៅ",
      investor: "Công ty Cổ phần Cấp nước Kon Tum",
      investorEn: "Kon Tum Water Supply Joint Stock Company",
      investorLo: "ក្រុមហ៊ុនផ្គត់ផ្គង់ទឹក Kon Tum",
      contractPrice: "631 triệu VND (~25,000 USD)",
      biddingEligibility: "Nhà thầu độc lập",
      biddingEligibilityEn: "Independent Contractor",
      biddingEligibilityLo: "អ្នកសាងសង់ឯករាជ្យ",
      contractPeriod: "04/2022 – 09/2022",
      actualPeriod: "04/2022 – 09/2022",
      workSummary:
        "Khảo sát địa hình, báo cáo nghiên cứu kỹ thuật, thiết kế cơ sở, tính toán tổng đầu tư, bản vẽ thi công và dự toán chi tiết.",
      workSummaryEn:
        "Topographic survey, technical research report, basic design, total investment calculation, construction drawings and detailed estimates.",
      workSummaryLo:
        "ការស្ទង់ស្ទែងផ្ទៃដី របាយការណ៍ការស្រាវស្រាវបច្ចេកទេស ការរចនាមូលដ្ឋាន ការគណនាការលក់ដូលលក់សរុប ផ្នែកគំនូរសាងសង់ និងការប៉ាន់ប្រមាណលម្អិត។",
    },
  },
  {
    id: 16,
    title: "Nhà máy nước Đông Hà Sông",
    titleEn: "Dong Ha Song Water Plant",
    titleLo: "រោងចក្របង្គោល Dong Ha Song",
    category: "Nhà máy nước",
    categoryEn: "Water Treatment Plant",
    categoryLo: "រោងចក្របង្គោល",
    location: "Tỉnh Quảng Nam, Việt Nam",
    locationEn: "Quang Nam Province, Vietnam",
    locationLo: "ແຂວງກວາງນາມ, ຫວຽດນາມ",
    description:
      "Dự án nhà máy nước Đông Hà Sông giai đoạn 1 công suất 50.000 m³/ngày bao gồm hệ thống trộn, phản ứng, lọc siêu âm, trạm bơm, mạng truyền tải HDPE DN110-900 (144 km) và DN50-63 (294 km), 19.650 kết nối hộ gia đình.",
    descriptionEn:
      "Dong Ha Song Water Plant project Phase 1 with capacity of 50,000 m³/day including mixing, reaction, UF filtration, and pumping stations, transmission network HDPE pipelines DN110-900 (144 km) and DN50-63 (294 km), 19,650 household connections.",
    descriptionLo:
      "ដំណើរការរោងចក្របង្គោល Dong Ha Song ដំណាក់កាលទី 1 ដែលមានសមត្ថភាព 50,000 m³/ថ្ងៃ រួមទាំងប្រព័ន្ធលាយ ប្រតិកម្ម ច្រាក UF និងស្ថានីយ៍បូម បណ្តាញផ្ទុក បំពង់ HDPE DN110-900 (144 គីឡូម៉ែត្រ) និង DN50-63 (294 គីឡូម៉ែត្រ) ការតភ្ជាប់គ្រួសារ 19,650 ។",
    shortDescription: "Nhà máy nước Đông Hà Sông 50.000 m³/ngày",
    shortDescriptionEn: "Dong Ha Song Water Plant 50,000 m³/day",
    shortDescriptionLo: "រោងចក្របង្គោល Dong Ha Song 50,000 m³/ថ្ងៃ",
    startDate: new Date("2021-04-01"),
    year: "04/2021 – 07/2021",
    status: "Hoàn thành",
    statusEn: "Completed",
    statusLo: "បានបញ្ចប់",
    image: "/water-infrastructure-system.jpg",
    details: {
      type: "Xây dựng nhà máy nước",
      typeEn: "Construction of Water Treatment Plant",
      typeLo: "ការសាងសង់រោងចក្របង្គោល",
      investor: "Công ty Thương mại Châu Âu Hạn chế",
      investorEn: "European Trading Company Limited",
      investorLo: "ក្រុមហ៊ុនលក់ដូលលក់អឺរ៉ុប",
      contractPrice: "2.1 tỷ VND (~93,000 USD)",
      biddingEligibility: "Nhà thầu độc lập",
      biddingEligibilityEn: "Independent Contractor",
      biddingEligibilityLo: "អ្នកសាងសង់ឯករាជ្យ",
      contractPeriod: "04/2021 – 07/2021",
      actualPeriod: "04/2021 – 07/2021",
      workSummary:
        "Khảo sát địa hình 1/500 khu vực nhà máy, thu thập bản đồ địa hình 1/10.000 mạng cấp nước, lập báo cáo chính sách đầu tư và thiết kế sơ bộ.",
      workSummaryEn:
        "1/500 topographic survey of plant area, collection of 1/10,000 topographic maps of water supply network, preparation of investment policy report and preliminary design.",
      workSummaryLo:
        "ការស្ទង់ស្ទែងផ្ទៃដី 1/500 នៃតំបន់រោងចក្របង្គោល ការប្រមូលផ្តុំផែនទីផ្ទៃដី 1/10,000 នៃបណ្តាញផ្គត់ផ្គង់ទឹក ការរៀបចំរបាយការណ៍នយោបាយលក់ដូលលក់ និងការរចនាលម្អិត។",
    },
  },
  {
    id: 17,
    title: "Đường ống truyền tải nước vùng phía Bắc tỉnh Hưng Yên",
    titleEn: "Water Transmission Pipeline for Northern Region of Hung Yen Province",
    titleLo: "បំពង់ផ្ទុកទឹកសម្រាប់តំបន់ខាងជើងខេត្ត Hung Yen",
    category: "Hạ tầng nước",
    categoryEn: "Water Infrastructure",
    categoryLo: "ហេតុការណ៍ទឹក",
    location: "Tỉnh Hưng Yên. Việt Nam",
    locationEn: "Hung Yen Province, Vietnam",
    locationLo: "ແຂວງ ຮຶງອຽນ, ຫວຽດນາມ",
    description: "Lập báo cáo nghiên cứu khả thi cho dự án đường ống truyền tải nước vùng phía Bắc tỉnh Hưng Yên.",
    descriptionEn:
      "Preparation of feasibility study report for the water transmission pipeline project in the northern region of Hung Yen Province.",
    descriptionLo: "ការរៀបចំរបាយការណ៍ការសិក្សាលម្អិតសម្រាប់ដំណើរការបំពង់ផ្ទុកទឹកនៅតំបន់ខាងជើងខេត្ត Hung Yen ។",
    shortDescription: "ដូងផ្ទុកទឹក Hưng Yên",
    shortDescriptionEn: "Hung Yen Water Transmission Pipeline",
    shortDescriptionLo: "បំពង់ផ្ទុកទឹក Hung Yen",
    startDate: new Date("2021-04-01"),
    year: "04/2021 – 07/2021",
    status: "Hoàn thành",
    statusEn: "Completed",
    statusLo: "បានបញ្ចប់",
    image: "/wastewater-treatment-plant.jpg",
    details: {
      type: "Xây dựng đường ống truyền tải nước",
      typeEn: "Construction of Water Transmission Pipeline",
      typeLo: "ការសាងសង់បំពង់ផ្ទុកទឹក",
      investor: "Công ty Cổ phần Nước sạch Phố Hiến",
      investorEn: "Pho Hien Clean Water Joint Stock Company",
      investorLo: "ក្រុមហ៊ុនទឹកស្អាត Pho Hien",
      contractPrice: "880 triệu VND (~36,600 USD)",
      biddingEligibility: "Đại diện liên danh",
      biddingEligibilityEn: "Joint Venture Representative",
      biddingEligibilityLo: "ប្រតិនិធិលក់ដូលលក់រួមគ្នា",
      contractPeriod: "04/2021 – 07/2021",
      actualPeriod: "04/2021 – 07/2021",
      workSummary: "Lập báo cáo nghiên cứu khả thi cho dự án đường ống truyền tải nước.",
      workSummaryEn: "Preparation of feasibility study report for the water transmission pipeline project.",
      workSummaryLo: "ការរៀបចំរបាយការណ៍ការសិក្សាលម្អិតសម្រាប់ដំណើរការបំពង់ផ្ទុកទឹក។",
    },
  },
  {
    id: 18,
    title: "Dự án chuyển nước từ đập Trăng Vinh đến Khu công nghiệp TEXHONG–Hải Hà (200.000 m³/ngày)",
    titleEn: "Trang Vinh Dam Water Diversion Project to TEXHONG–Hai Ha Industrial Park (200,000 m³/day)",
    titleLo: "ដំណើរការផ្លាស់ប្តូរទឹកពីឧបករណ៍ Trang Vinh ទៅឧដ្ឋានកម្មន្តីរ TEXHONG–Hai Ha (200,000 m³/ថ្ងៃ)",
    category: "Hạ tầng nước",
    categoryEn: "Water Infrastructure",
    categoryLo: "ហេតុការណ៍ទឹក",
    location: "Tỉnh Quảng Ninh, Việt Nam",
    locationEn: "Quang Ninh Province, Vietnam",
    locationLo: "ແຂວງກວາງນິງ, ຫວຽດນາມ",
    description:
      "Dự án chuyển nước từ đập Trăng Vinh đến Khu công nghiệp TEXHONG–Hải Hà với công suất 200.000 m³/ngày, bao gồm trạm bơm nước thô và đường ống dẫn DN1400–DN1200 dài 25 km.",
    descriptionEn:
      "Trang Vinh Dam water diversion project to TEXHONG–Hai Ha Industrial Park with capacity of 200,000 m³/day, including raw water pumping station and 25 km DN1400–DN1200 ductile iron pipeline.",
    descriptionLo:
      "ដំណើរការផ្លាស់ប្តូរទឹកពីឧបករណ៍ Trang Vinh ទៅឧដ្ឋានកម្មន្តីរ TEXHONG–Hai Ha ដែលមានសមត្ថភាព 200,000 m³/ថ្ងៃ រួមទាំងស្ថានីយ៍បូមទឹកឆៅ និងបំពង់ដឹកនាំ DN1400–DN1200 ដែលមានប្រវែង 25 គីឡូម៉ែត្រ។",
    shortDescription: "ដូងផ្លាស់ប្តូរទឹក Trang Vinh 200.000 m³/ngày",
    shortDescriptionEn: "Trang Vinh Water Diversion 200,000 m³/day",
    shortDescriptionLo: "ផ្លាស់ប្តូរទឹក Trang Vinh 200,000 m³/ថ្ងៃ",
    startDate: new Date("2020-07-01"),
    year: "07/2020 – 10/2020",
    status: "Hoàn thành",
    statusEn: "Completed",
    statusLo: "បានបញ្ចប់",
    image: "/bridge-infrastructure.jpg",
    details: {
      type: "Hệ thống chuyển nước và truyền tải",
      typeEn: "Water Diversion and Transmission System",
      typeLo: "ប្រព័ន្ធផ្លាស់ប្តូរទឹក និងផ្ទុក",
      investor: "Công ty Khu công nghiệp TEXHONG Việt Nam",
      investorEn: "TEXHONG Vietnam Industrial Park Co., Ltd.",
      investorLo: "ក្រុមហ៊ុនឧដ្ឋានកម្មន្តីរ TEXHONG វៀតណាម",
      contractPrice: "1.946 tỷ VND (~90,000 USD)",
      biddingEligibility: "Nhà thầu độc lập",
      biddingEligibilityEn: "Independent Contractor",
      biddingEligibilityLo: "អ្នកសាងសង់ឯករាជ្យ",
      contractPeriod: "07/2020 – 10/2020",
      actualPeriod: "07/2020 – 10/2020",
      workSummary: "Báo cáo nghiên cứu và thiết kế cơ sở, tính toán tổng đầu tư, khảo sát địa hình và địa chất.",
      workSummaryEn:
        "Research report and basic design, total investment estimation, topographic and geological surveys.",
      workSummaryLo: "របាយការណ៍ស្រាវស្រាវ និងការរចនាមូលដ្ឋាន ការប៉ាន់ប្រមាណការលក់ដូលលក់សរុប ការស្ទង់ស្ទែងផ្ទៃដី និងភូមិសាស្ត្រ។",
    },
  },
  {
    id: 19,
    title: "Mở rộng nhà máy nước Cầu Đỏ (230.000 → 290.000 m³/ngày)",
    titleEn: "Expansion of Cau Do Water Plant (230,000 → 290,000 m³/day)",
    titleLo: "ការពង្រីករោងចក្របង្គោល Cau Do (230,000 → 290,000 m³/ថ្ងៃ)",
    category: "Nhà máy nước",
    categoryEn: "Water Treatment Plant",
    categoryLo: "របង្គោល",
    location: "Thành phố Đà Nẵng, Việt Nam",
    locationEn: "Da Nang City, Vietnam",
    locationLo: " នะຄອນດາໜັງ, ຫວຽດນາມ",
    description:
      "Mở rộng nhà máy nước Cầu Đỏ từ 230.000 lên 290.000 m³/ngày, bao gồm lắp đặt trạm bơm nước thô (120.000 m³/ngày), đường ống DN1000-ST, nhà máy xử lý (60.000 m³/ngày) với bể lắng, bể lọc, bể chứa nước sạch 10.000 m³ và trạm bơm.",
    descriptionEn:
      "Expansion of Cau Do Water Plant from 230,000 to 290,000 m³/day, including installation of raw water pumping station (120,000 m³/day), DN1000-ST pipeline, treatment plant (60,000 m³/day) with lamella tank, filter tank, 10,000 m³ clean water tank, and pumping station.",
    descriptionLo:
      "ការពង្រីករោងចក្របង្គោល Cau Do ពី 230,000 ដល់ 290,000 m³/ថ្ងៃ រួមទាំងការដំឡើងស្ថានីយ៍បូមទឹកឆៅ (120,000 m³/ថ្ងៃ) បំពង់ DN1000-ST របង្គោល (60,000 m³/ថ្ងៃ) ដែលមានបង្គន់ lamella បង្គន់ច្រាក បង្គន់ផ្ទុកទឹកស្អាត 10,000 m³ និងស្ថានីយ៍បូម។",
    shortDescription: "Mở rộng nhà máy Cầu Đỏ 290.000 m³/ngày",
    shortDescriptionEn: "Cau Do Plant Expansion 290,000 m³/day",
    shortDescriptionLo: "ការពង្រីករោងចក្របង្គោល Cau Do 290,000 m³/ថ្ងៃ",
    startDate: new Date("2019-01-01"),
    year: "01/2019 – 04/2019",
    status: "Hoàn thành",
    statusEn: "Completed",
    statusLo: "បានបញ្ចប់",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/D%E1%BB%B1%20%C3%A1n%20X%C3%A2y%20d%E1%BB%A5ng%20NMN%20C%E1%BA%A7u%20%C4%90%E1%BB%8F-m4waVrYJU0imTZUEWOX2AcKzYoc4xk.jpg",
    details: {
      type: "Mở rộng nhà máy nước",
      typeEn: "Capacity Upgrade of Water Treatment Plant",
      typeLo: "ការលើកកម្ពស់សមត្ថភាពរោងចក្របង្គោល",
      investor: "Công ty Cổ phần Cấp nước Đà Nẵng",
      investorEn: "Danang Water Supply Joint Stock Company",
      investorLo: "ក្រុមហ៊ុនផ្គត់ផ្គង់ទឹក Da Nang",
      contractPrice: "1.2 tỷ VND (~55,000 USD)",
      biddingEligibility: "Nhà thầu độc lập",
      biddingEligibilityEn: "Independent Contractor",
      biddingEligibilityLo: "អ្នកសាងសង់ឯករាជ្យ",
      contractPeriod: "01/2019 – 04/2019",
      actualPeriod: "01/2019 – 04/2019",
      workSummary: "Nghiên cứu và thiết kế cơ sở, bản vẽ thi công chi tiết, dự toán chi tiết và tổng dự toán.",
      workSummaryEn: "Research and basic design, detailed design construction drawings, detailed and total estimates.",
      workSummaryLo: "ស្រាវស្រាវ និងការរចនាមូលដ្ឋាន ផ្នែកគំនូរសាងសង់ការរចនាលម្អិត ការប៉ាន់ប្រមាណលម្អិត និងសរុប។",
    },
  },
  {
    id: 20,
    title: "Dự án xây dựng trạm bơm điều tiết Tây Mỗ (300.000 m³/ngày)",
    titleEn: "Tay Mo Regulating Pumping Station Construction Project (300,000 m³/day)",
    titleLo: "ដំណើរការសាងសង់ស្ថានីយ៍បូមលម្អិត Tay Mo (300,000 m³/ថ្ងៃ)",
    category: "Hạ tầng nước",
    categoryEn: "Water Infrastructure",
    categoryLo: "ហេតុការណ៍ទឹក",
    location: "Thành phố Hà Nội, Việt Nam",
    locationEn: "Hanoi City, Vietnam",
    locationLo: "ນະຄອນຫຼວງຮ່າໂນ້ຍ, ຫວຽດນາມ",
    description:
      "Dự án xây dựng trạm bơm điều tiết Tây Mỗ với công suất 300.000 m³/ngày, bao gồm 5 máy bơm (Q=100.000 m³/ngày, H=45m), 2 bể chứa nước sạch (30.000 m³ mỗi bể) và 6,4 km đường ống DN1600-DI.",
    descriptionEn:
      "Tay Mo Regulating Pumping Station construction project with capacity of 300,000 m³/day, including 5 pumps (Q=100,000 m³/day, H=45m), 2 clean water tanks (30,000 m³ each), and 6.4 km DN1600-DI pipeline.",
    descriptionLo:
      "ដំណើរការសាងសង់ស្ថានីយ៍បូមលម្អិត Tay Mo ដែលមានសមត្ថភាព 300,000 m³/ថ្ងៃ រួមទាំងម៉ាស៊ីនបូម 5 (Q=100,000 m³/ថ្ងៃ H=45m) បង្គន់ផ្ទុកទឹកស្អាត 2 (30,000 m³ ម្នាក់ៗ) និងបំពង់ DN1600-DI 6.4 គីឡូម៉ែត្រ។",
    shortDescription: "ស្ថានីយ៍បូម Tây Mỗ 300.000 m³/ngày",
    shortDescriptionEn: "Tay Mo Pumping Station 300,000 m³/day",
    shortDescriptionLo: "ស្ថានីយ៍បូម Tay Mo 300,000 m³/ថ្ងៃ",
    startDate: new Date("2017-09-01"),
    year: "09/2017 – 03/2018",
    status: "Hoàn thành",
    statusEn: "Completed",
    statusLo: "បានបញ្ចប់",
    image: "/green-office-building.jpg",
    details: {
      type: "Xây dựng trạm bơm điều tiết",
      typeEn: "EPC Water Infrastructure Construction",
      typeLo: "ការសាងសង់ហេតុការណ៍ទឹក EPC",
      investor: "Công ty Cổ phần Cấp nước VINACONEX (VINASUPCO)",
      investorEn: "VINACONEX Water Supply JSC (VINASUPCO)",
      investorLo: "ក្រុមហ៊ុនផ្គត់ផ្គង់ទឹក VINACONEX (VINASUPCO)",
      contractPrice: "500 tỷ VND (~24,000,000 USD)",
      biddingEligibility: "Nhà thầu phụ",
      biddingEligibilityEn: "Subcontractor",
      biddingEligibilityLo: "អ្នកសាងសង់រង",
      contractPeriod: "09/2017 – 03/2018",
      actualPeriod: "09/2017 – 03/2018",
      workSummary:
        "Thiết kế bản vẽ thi công, lập dự toán chi tiết và tổng dự toán cho trạm bơm điều tiết với công suất 300.000 m³/ngày.",
      workSummaryEn:
        "Construction drawing design, preparation of detailed and total estimates for regulating pumping station with capacity of 300,000 m³/day.",
      workSummaryLo: "ការរចនាផ្នែកគំនូរសាងសង់ ការរៀបចំការប៉ាន់ប្រមាណលម្អិត និងសរុបសម្រាប់ស្ថានីយ៍បូមលម្អិតដែលមានសមត្ថភាព 300,000 m³/ថ្ងៃ។",
    },
  },
  {
    id: 21,
    title: "Tăng công suất nhà máy nước Cầu Đỏ 120.000 m³/ngày (Giai đoạn 1: +60.000 m³/ngày)",
    titleEn: "Cau Do Water Plant Capacity Increase by 120,000 m³/day (Phase 1: +60,000 m³/day)",
    titleLo: "ការបង្កើនសមត្ថភាពរោងចក្របង្គោល Cau Do 120,000 m³/ថ្ងៃ (ដំណាក់កាលទី 1: +60,000 m³/ថ្ងៃ)",
    category: "Nhà máy nước",
    categoryEn: "Water Treatment Plant",
    categoryLo: "របង្គោល",
    location: "Thành phố Đà Nẵng, Việt Nam",
    locationEn: "Da Nang City, Vietnam",
    locationLo: " នะຄອນດານັງ, ຫວຽດນາມ",
    description:
      "Tăng công suất nhà máy nước Cầu Đỏ 120.000 m³/ngày (Giai đoạn 1: +60.000 m³/ngày), bao gồm trạm bơm nước thô (xây dựng cho 120.000 m³/ngày, trang bị cho 60.000 m³/ngày), đường ống DN1000-ST, nhà máy xử lý (60.000 m³/ngày) với bể lắng, bể lọc, bể chứa nước sạch, bơm và hệ thống xử lý nước thải (300.000 m³/ngày).",
    descriptionEn:
      "Cau Do Water Plant capacity increase by 120,000 m³/day (Phase 1: +60,000 m³/day), including raw water pumping station (constructed for 120,000 m³/day, equipped for 60,000 m³/day), DN1000-ST pipeline, treatment plant (60,000 m³/day) with sedimentation, filtration, clean water tanks, pumping, and wastewater system (300,000 m³/day total).",
    descriptionLo:
      "ការបង្កើនសមត្ថភាពរោងចក្របង្គោល Cau Do 120,000 m³/ថ្ងៃ (ដំណាក់កាលទី 1: +60,000 m³/ថ្ងៃ) រួមទាំងស្ថានីយ៍បូមទឹកឆៅ (សាងសង់សម្រាប់ 120,000 m³/ថ្ងៃ ឧបករណ៍សម្រាប់ 60,000 m³/ថ្ងៃ) បំពង់ DN1000-ST របង្គោល (60,000 m³/ថ្ងៃ) ដែលមានលិច ច្រាក បង្គន់ផ្ទុកទឹកស្អាត បូម និងប្រព័ន្ធព្យាបាលលាក់ (300,000 m³/ថ្ងៃ សរុប)។",
    shortDescription: "Tăng công suất Cầu Đỏ 120.000 m³/ngày",
    shortDescriptionEn: "Cau Do Capacity Increase 120,000 m³/day",
    shortDescriptionLo: "ការបង្កើនសមត្ថភាព Cau Do 120,000 m³/ថ្ងៃ",
    startDate: new Date("2017-09-01"),
    year: "09/2017 – 10/2017",
    status: "Hoàn thành",
    statusEn: "Completed",
    statusLo: "បានបញ្ចប់",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/T%C4%83ng%20c%C3%B4ng%20su%E1%BA%A5t%20nh%C3%A0%20m%C3%A1y%20n%C6%B0%E1%BB%9Bc%20C%E1%BA%A7u%20%C4%91%E1%BB%8F-G9t8YXr5VaQ70FCGTj2mXBIgWmldP2.jpg",
    details: {
      type: "Tăng công suất nhà máy nước",
      typeEn: "Capacity Expansion of Water Treatment Plant",
      typeLo: "ការពង្រីកសមត្ថភាពរោងចក្របង្គោល",
      investor: "Công ty Cổ phần Cấp nước Đà Nẵng",
      investorEn: "Danang Water Supply Joint Stock Company",
      investorLo: "ក្រុមហ៊ុនផ្គត់ផ្គង់ទឹក Da Nang",
      contractPrice: "2.4 tỷ VND (~120,000 USD)",
      biddingEligibility: "Nhà thầu độc lập",
      biddingEligibilityEn: "Independent Contractor",
      biddingEligibilityLo: "អ្នកសាងសង់ឯករាជ្យ",
      contractPeriod: "09/2017 – 10/2017",
      actualPeriod: "09/2017 – 10/2017",
      workSummary: "Bản vẽ thi công chi tiết, dự toán chi tiết và tổng dự toán cho dự án tăng công suất nhà máy nước.",
      workSummaryEn:
        "Detailed design drawings, detailed and total estimates for water plant capacity expansion project.",
      workSummaryLo: "ផ្នែកគំនូរសាងសង់ការរចនាលម្អិត ការប៉ាន់ប្រមាណលម្អិត និងសរុបសម្រាប់ដំណើរការពង្រីកសមត្ថភាពរោងចក្របង្គោល។",
    },
  },
  {
    id: 22,
    title: "Nhà máy nước Hòa Liên (120.000 m³/ngày)",
    titleEn: "Hoa Lien Water Treatment Plant (120,000 m³/day)",
    titleLo: "របង្គោល Hoa Lien (120,000 m³/ថ្ងៃ)",
    category: "Nhà máy nước",
    categoryEn: "Water Treatment Plant",
    categoryLo: "របង្គោល",
    location: "Thành phố Đà Nẵng, Việt Nam",
    locationEn: "Da Nang City, Vietnam",
    locationLo: "ក្រុង Da Nang",
    description:
      "Dự án nhà máy nước Hòa Liên với công suất 120.000 m³/ngày, bao gồm trạm bơm nước thô từ sông Cư Đế (264.000 m³/ngày), 11 km đường ống DN1400-ST, nhà máy nước (Giai đoạn 1: 132.000 m³/ngày; Giai đoạn 2: 264.000 m³/ngày) với bể lắng, bể lọc, bể chứa nước sạch 20.000 m³ và trạm bơm 240.000 m³/ngày.",
    descriptionEn:
      "Hoa Lien Water Treatment Plant project with capacity of 120,000 m³/day, including raw water pumping station from Cu De River (264,000 m³/day), 11 km DN1400-ST pipeline, clean water plant (Phase 1: 132,000 m³/day; Phase 2: 264,000 m³/day) with settling tanks, filters, 20,000 m³ clean water tank, and 240,000 m³/day pumping station.",
    descriptionLo:
      "ដំណើរការរោងចក្របង្គោល Hoa Lien ដែលមានសមត្ថភាព 120,000 m³/ថ្ងៃ រួមទាំងស្ថានីយ៍បូមទឹកឆៅពីទន្លេ Cu De (264,000 m³/ថ្ងៃ) បំពង់ DN1400-ST 11 គីឡូម៉ែត្រ របង្គោល (ដំណាក់កាលទី 1: 132,000 m³/ថ្ងៃ; ដំណាក់កាលទី 2: 264,000 m³/ថ្ងៃ) ដែលមានលិច ច្រាក បង្គន់ផ្ទុកទឹកស្អាត 20,000 m³ និងស្ថានីយ៍បូម 240,000 m³/ថ្ងៃ។",
    shortDescription: "Nhà máy nước Hòa Liên 120.000 m³/ngày",
    shortDescriptionEn: "Hoa Lien Water Plant 120,000 m³/day",
    shortDescriptionLo: "របង្គោល Hoa Lien 120,000 m³/ថ្ងៃ",
    startDate: new Date("2017-06-01"),
    year: "06/2017 – 12/2017",
    status: "Hoàn thành",
    statusEn: "Completed",
    statusLo: "បានបញ្ចប់",
    image: "/industrial-park.jpg",
    details: {
      type: "Xây dựng nhà máy nước",
      typeEn: "Construction of New Water Treatment Plant",
      typeLo: "ការសាងសង់របង្គោលថ្មី",
      investor: "Công ty Cổ phần Cấp nước Đà Nẵng",
      investorEn: "Danang Water Supply Joint Stock Company",
      investorLo: "ក្រុមហ៊ុនផ្គត់ផ្គង់ទឹក Da Nang",
      contractPrice: "1.1 tỷ VND (~55,000 USD)",
      biddingEligibility: "Thành viên liên danh",
      biddingEligibilityEn: "Joint Venture Member",
      biddingEligibilityLo: "សមាជិកលក់ដូលលក់រួមគ្នា",
      contractPeriod: "06/2017 – 12/2017",
      actualPeriod: "06/2017 – 12/2017",
      workSummary:
        "Khảo sát địa hình và địa chất, báo cáo nghiên cứu khả thi, tính toán tổng đầu tư, phân tích tài chính và kinh tế, quy hoạch tái định cư.",
      workSummaryEn:
        "Topographic and geological survey, feasibility study report, total investment, financial and economic analysis, resettlement planning.",
      workSummaryLo:
        "ការស្ទង់ស្ទែងផ្ទៃដី និងភូមិសាស្ត្រ របាយការណ៍ការសិក្សាលម្អិត ការលក់ដូលលក់សរុប ការវិភាគហិរញ្ញវត្ថុ និងសេដ្ឋកិច្ច ការរៀបចំផែនការផ្លាស់ប្តូរលំនៅដ្ឋាន។",
    },
  },
  // Projects without dates (go last)
  {
    id: 1,
    title: "Dự án xây dựng NMN Cáo Đỉnh – Hà Nội",
    titleEn: "Construction of Cao Dinh WTP",
    titleLo: "ការសាងសង់ Cao Dinh WTP",
    category: "Nhà máy nước",
    categoryEn: "Water Treatment Plant",
    categoryLo: "របង្គោល",
    location: "Thành phố Hà Nội, Việt Nam",
    locationEn: "Hanoi City, Vietnam",
    locationLo: "ក្រុងហាណូយ, វៀតណាម",
    description:
      "Công suất 60.000 m³/ngày. Vốn WB. Nhân sự của Thudo Weico tham gia công tác thiết kế cùng tư vấn Soil & Water (Phần Lan) và giám sát thi công công trình cùng tư vấn GKW (Đức)",
    descriptionEn:
      "Capacity 60,000 m³/day. World Bank funded. Thudo Weico's staff was in charge of designing with Soil & Water Consultant (Finland) and provided construction supervision together with GKW supervision (Germany).",
    descriptionLo:
      "សមត្ថភាព 60,000 m³/ថ្ងៃ។ ផ្ដល់មូលនិធិដោយធនាគារពិភពលោក។ បុគ្គលិកនៃ Thudo Weico បានទទួលបន្ទុកក្នុងការរចនាជាមួយ Soil & Water Consultant (ហ្វាលង់ឌ) និងផ្តល់ការគ្រប់គ្រងការសាងសង់ជាមួយ GKW supervision (អាល្លឺម៉ង់)។",
    shortDescription: "Nhà máy nước Cáo Đỉnh 60.000 m³/ngày",
    shortDescriptionEn: "Cao Dinh Water Plant 60,000 m³/day",
    shortDescriptionLo: "របង្គោល Cao Dinh 60,000 m³/ថ្ងៃ",
    status: "Hoàn thành",
    statusEn: "Completed",
    statusLo: "បានបញ្ចប់",
    image: "/water-infrastructure-system.jpg",
    details: {
      type: "Xây dựng nhà máy nước",
      typeEn: "Construction of Water Treatment Plant",
      typeLo: "ការសាងសង់របង្គោល",
      investor: "Quỹ WB",
      investorEn: "WB Fund",
      investorLo: "មូលនិធិ WB",
      biddingEligibility: "Tư vấn độc lập",
      biddingEligibilityEn: "Independent Consultant",
      biddingEligibilityLo: "ប្រឹក្សាយោបល់ឯករាជ្យ",
      workSummary:
        "Nhân sự của Thudo Weico tham gia công tác thiết kế cùng tư vấn Soil & Water (Phần Lan) và giám sát thi công công trình cùng tư vấn GKW (Đức).",
      workSummaryEn:
        "Thudo Weico's staff was in charge of designing with Soil & Water Consultant (Finland) and provided construction supervision together with GKW supervision (Germany).",
      workSummaryLo:
        "បុគ្គលិកនៃ Thudo Weico បានទទួលបន្ទុកក្នុងការរចនាជាមួយ Soil & Water Consultant (ហ្វាលង់ឌ) និងផ្តល់ការគ្រប់គ្រងការសាងសង់ជាមួយ GKW supervision (អាល្លឺម៉ង់)។",
    },
  },
  {
    id: 2,
    title: "Dự án Nâng cấp đô thị vùng đồng bằng sông Cửu Long",
    titleEn: "Urban Upgrade Project of Cuu Long River Plain Area",
    titleLo: "ដំណើរការលើកកម្ពស់ក្រុងនៃតំបន់ដែនដីរាបស្មើ Cuu Long",
    category: "Phát triển đô thị",
    categoryEn: "Urban Infrastructure Upgrade",
    categoryLo: "ការលើកកម្ពស់ហេតុការណ៍ក្រុង",
    location: "Đồng bằng sông Cửu Long, Việt Nam",
    locationEn: "Cuu Long River Plain Area, Vietnam",
    locationLo: "ເຂດທົ່ງພຽງແມ່ນ້ຳຂອງ, ຫວຽດນາມ",
    description:
      "Vốn WB. Nâng cấp cơ sở hạ tầng cho các khu thu nhập thấp (LIAs). Thudo Weico thực hiện dịch vụ tư vấn hỗ trợ kỹ thuật (TA) cho dự án thông qua hợp đồng tư vấn với Ban QLDA Phát triển Đô thị - Cục Phát Triển Đô thị – Bộ Xây Dựng.",
    descriptionEn:
      "World Bank funded. Infrastructure upgrade for low-income areas (LIAs). Thudo Weico was Consultant and Technical Assistant (TA) for the project through a consultancy contract with the Urban Development Project Management Board – Ministry of Construction.",
    descriptionLo:
      "ផ្ដល់មូលនិធិដោយធនាគារពិភពលោក។ ការលើកកម្ពស់ហេតុការណ៍សម្រាប់តំបន់ដែលមានប្រាក់ចំណូលទាប (LIAs)។ Thudo Weico គឺជាប្រឹក្សាយោបល់ និងជំនួយការបច្ចេកទេស (TA) សម្រាប់ដំណើរការតាមរយៈកិច្ចសន្យាប្រឹក្សាយោបល់ជាមួយក្រុមប្រឹក្សាគ្រប់គ្រងដំណើរការលើកកម្ពស់ក្រុង។",
    shortDescription: "Nâng cấp đô thị Cửu Long",
    shortDescriptionEn: "Urban Upgrade Cuu Long",
    shortDescriptionLo: "លើកកម្ពស់ក្រុង Cuu Long",
    status: "Hoàn thành",
    statusEn: "Completed",
    statusLo: "បានបញ្ចប់",
    image: "/wastewater-treatment-plant.jpg",
    details: {
      type: "Nâng cấp hạ tầng đô thị",
      typeEn: "Urban Infrastructure Upgrade",
      typeLo: "ការលើកកម្ពស់ហេតុការណ៍ក្រុង",
      investor: "Quỹ WB",
      investorEn: "WB Fund",
      investorLo: "មូលនិធិ WB",
      biddingEligibility: "Tư vấn độc lập (thông qua hợp đồng TA với MOC)",
      biddingEligibilityEn: "Independent Consultant (through TA contract with MOC)",
      biddingEligibilityLo: "ប្រឹក្សាយោបល់ឯករាជ្យ (តាមរយៈកិច្ចសន្យា TA ជាមួយ MOC)",
      workSummary:
        "Thudo Weico thực hiện dịch vụ tư vấn hỗ trợ kỹ thuật (TA) cho dự án thông qua hợp đồng tư vấn với Ban QLDA Phát triển Đô thị - Cục Phát Triển Đô thị – Bộ Xây Dựng.",
      workSummaryEn:
        "Thudo Weico was Consultant and Technical Assistant (TA) for the project through a consultancy contract with the Urban Development Project Management Board – Ministry of Construction.",
      workSummaryLo:
        "Thudo Weico គឺជាប្រឹក្សាយោបល់ និងជំនួយការបច្ចេកទេស (TA) សម្រាប់ដំណើរការតាមរយៈកិច្ចសន្យាប្រឹក្សាយោបល់ជាមួយក្រុមប្រឹក្សាគ្រប់គ្រងដំណើរការលើកកម្ពស់ក្រុង។",
    },
  },
  {
    id: 3,
    title: "Dự án xây dựng NMN Tam Kỳ tỉnh Quảng Nam",
    titleEn: "Construction of Tam Ky WTP",
    titleLo: "ការសាងសង់ Tam Ky WTP",
    category: "Nhà máy nước",
    categoryEn: "Water Treatment Plant",
    categoryLo: "របង្គោល",
    location: "Tỉnh Quảng Nam, Việt Nam",
    locationEn: "Quang Nam Province, Vietnam",
    locationLo: "ែຂວງກວາງນາມ, ຫວຽດນາມ",
    description:
      "Công suất 30.000 m³/ngày. Vốn WB. Liên danh với tư vấn GHD (Úc) trong công tác lập FS, thiết kế cơ sở, thiết kế bản vẽ thi công cho dự án. Hợp đồng ký với Ban QLDA Phát triển Hạ tầng Kỹ thuật (MABUTIP) – Bộ Xây Dựng",
    descriptionEn:
      "Capacity 30,000 m³/day. World Bank funded. Thudo Weico and GHD conducted feasibility study, basic design, and detail design for the project. Contract signed with Project Management Board Urban Technical Infrastructure Development (MABUTIP) – Ministry of Construction.",
    descriptionLo:
      "សមត្ថភាព 30,000 m³/ថ្ងៃ។ ផ្ដល់មូលនិធិដោយធនាគារពិភពលោក។ Thudo Weico និង GHD បានធ្វើការសិក្សាលម្អិត ការរចនាមូលដ្ឋាន និងការរចនាលម្អិតសម្រាប់ដំណើរការ។ កិច្ចសន្យាលេខហត្ថលេខាជាមួយក្រុមប្រឹក្សាគ្រប់គ្រងដំណើរការលើកកម្ពស់ហេតុការណ៍បច្ចេកទេស (MABUTIP) – ក្រសួងសាងសង់។",
    shortDescription: "Nhà máy nước Tam Kỳ 30.000 m³/ngày",
    shortDescriptionEn: "Tam Ky Water Plant 30,000 m³/day",
    shortDescriptionLo: "របង្គោល Tam Ky 30,000 m³/ថ្ងៃ",
    status: "Hoàn thành",
    statusEn: "Completed",
    statusLo: "បានបញ្ចប់",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NMN%20Tam%20K%E1%BB%B3-7piYojJG0y01D575wENhu0SMNTjJ56.jpg",
    details: {
      type: "Xây dựng nhà máy nước",
      typeEn: "Construction of Water Treatment Plant",
      typeLo: "ការសាងសង់របង្គោល",
      investor: "Quỹ WB",
      investorEn: "WB Fund",
      investorLo: "មូលនិធិ WB",
      biddingEligibility: "Liên danh với GHD (Úc)",
      biddingEligibilityEn: "Joint Venture with GHD (Australia)",
      biddingEligibilityLo: "លក់ដូលលក់រួមគ្នាជាមួយ GHD (អូស្ត្រាលី)",
      workSummary:
        "Thudo Weico liên danh với tư vấn GHD (Úc) trong công tác lập FS, thiết kế cơ sở, thiết kế bản vẽ thi công cho dự án.",
      workSummaryEn:
        "Thudo Weico and GHD conducted feasibility study, basic design, and detail design for the project.",
      workSummaryLo: "Thudo Weico និង GHD បានធ្វើការសិក្សាលម្អិត ការរចនាមូលដ្ឋាន និងការរចនាលម្អិតសម្រាប់ដំណើរការ។",
    },
  },
  {
    id: 4,
    title: "Quy hoạch tổng thể hệ thống thu gom chất thải rắn tỉnh Hà Tĩnh đến năm 2030",
    titleEn: "General Planning for Solid Waste System of Ha Tinh Province until 2030",
    titleLo: "ផែនការលម្អិតសម្រាប់ប្រព័ន្ធកាកសំណល់រឹងនៃខេត្ត Ha Tinh រហូតដល់ឆ្នាំ 2030",
    category: "Quy hoạch",
    categoryEn: "General Planning",
    categoryLo: "ផែនការលម្អិត",
    location: "Hà Tĩnh",
    locationEn: "Ha Tinh Province",
    locationLo: "ខេត្ត Ha Tinh",
    description:
      "Thudo Weico là tư vấn chính thực thi dự án. Dự án thực thi với quy mô toàn tỉnh Hà Tĩnh. Song song với dự án này, Thudo Weico còn triển khai dự án quy hoạch tổng thể Hệ thống cấp nước vùng tỉnh Hà Tĩnh đến năm 2030 và tầm nhìn đến năm 2050",
    descriptionEn:
      "Thudo Weico was the main consultant. Project covered the entire Ha Tinh province. Also included general planning of the water supply system until 2030 with a vision to 2050.",
    descriptionLo:
      "Thudo Weico គឺជាប្រឹក្សាយោបល់ចម្បង។ ដំណើរការគ្របដណ្តប់ខេត្ត Ha Tinh ទាំងមូល។ ក៏រួមបញ្ចូលផែនការលម្អិតនៃប្រព័ន្ធផ្គត់ផ្គង់ទឹករហូតដល់ឆ្នាំ 2030 ដែលមានចក្ខុវិស័យរហូតដល់ឆ្នាំ 2050។",
    shortDescription: "Quy hoạch chất thải Hà Tĩnh 2030",
    shortDescriptionEn: "Ha Tinh Waste Planning 2030",
    shortDescriptionLo: "ផែនការកាកសំណល់ Ha Tinh 2030",
    status: "Hoàn thành",
    statusEn: "Completed",
    statusLo: "បានបញ្ចប់",
    image: "/bridge-infrastructure.jpg",
    details: {
      type: "Quy hoạch tổng thể",
      typeEn: "General Planning",
      typeLo: "ផែនការលម្អិត",
      biddingEligibility: "Tư vấn độc lập",
      biddingEligibilityEn: "Independent Consultant",
      biddingEligibilityLo: "ប្រឹក្សាយោបល់ឯករាជ្យ",
      workSummary:
        "Thudo Weico là tư vấn chính thực thi dự án quy hoạch tổng thể hệ thống thu gom chất thải rắn tỉnh Hà Tĩnh đến năm 2030 và quy hoạch hệ thống cấp nước vùng tỉnh Hà Tĩnh đến năm 2030 với tầm nhìn đến năm 2050.",
      workSummaryEn:
        "Thudo Weico was the main consultant for the general planning of solid waste system and water supply system of Ha Tinh Province until 2030 with a vision to 2050.",
      workSummaryLo:
        "Thudo Weico គឺជាប្រឹក្សាយោបល់ចម្បងសម្រាប់ផែនការលម្អិតនៃប្រព័ន្ធកាកសំណល់រឹង និងប្រព័ន្ធផ្គត់ផ្គង់ទឹកនៃខេត្ត Ha Tinh រហូតដល់ឆ្នាំ 2030 ដែលមានចក្ខុវិស័យរហូតដល់ឆ្នាំ 2050។",
    },
  },
  {
    id: 5,
    title: "Dự án xây dựng NMN liên xã Nguyễn Huệ - Bình Dương huyện Đông Triều tỉnh Quảng Ninh",
    titleEn: "Construction of Nguyen Hue Village WTP",
    titleLo: "ការសាងសង់ Nguyen Hue Village WTP",
    category: "Nhà máy nước",
    categoryEn: "Water Treatment Plant",
    categoryLo: "របង្គោល",
    location: "Quảng Ninh",
    locationEn: "Quang Ninh Province",
    locationLo: "ខេត្ត Quang Ninh",
    description:
      "Vốn WB. Là một trong số hàng chục công trình cấp nước và VSMT nông thôn mà Thudo Weico đã thực hiện tại khu vực đồng bằng sông Hồng. Thudo Weico thực hiện công tác lập FS, thiết kế cơ sở, khảo sát Kinh tế Xã hội, lập Kế hoạch quản lý môi trường, Tái định cư, Thiết kế chi tiết, lập Hồ sơ mời thầu cho dự án.",
    descriptionEn:
      "World Bank funded. One of dozens of rural water supply and sanitation projects implemented by Thudo Weico in the Red River Delta region. Prepared feasibility study, basic design, socioeconomic appraisal, environmental management plan, resettlement plan, detailed design, and tender documents.",
    descriptionLo:
      "ផ្ដល់មូលនិធិដោយធនាគារពិភពលោក។ មួយក្នុងចំណោមដំណើរការផ្គត់ផ្គង់ទឹក និងលាក់ក្រុងតាមលំដាប់ដែលបានអនុវត្តដោយ Thudo Weico នៅតំបន់ដែនដីរាបស្មើទន្លេក្រហម។ រៀបចំការសិក្សាលម្អិត ការរចនាមូលដ្ឋាន ការវាយតម្លៃសេដ្ឋកិច្ច ផែនការគ្រប់គ្រងបរិស្ថាន ផែនការផ្លាស់ប្តូរលំនៅដ្ឋាន ការរចនាលម្អិត និងឯកសារលក់ដូលលក់។",
    shortDescription: "Nhà máy nước Nguyễn Huệ",
    shortDescriptionEn: "Nguyen Hue Water Plant",
    shortDescriptionLo: "របង្គោល Nguyen Hue",
    status: "Hoàn thành",
    statusEn: "Completed",
    statusLo: "បានបញ្ចប់",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NMN%20Nguy%E1%BB%85n%20Hu%E1%BB%87%20B%C3%ACnh%20D%C6%B0%C6%A1ng-RMEsNEKdArTdnGHJ1AZFoNCxW64PR7.jpg",
    details: {
      type: "Xây dựng nhà máy nước nông thôn",
      typeEn: "Construction of Rural Water Treatment Plant",
      typeLo: "ការសាងសង់របង្គោលក្រុង",
      investor: "Quỹ WB",
      investorEn: "WB Fund",
      investorLo: "មូលនិធិ WB",
      biddingEligibility: "Tư vấn độc lập",
      biddingEligibilityEn: "Independent Consultant",
      biddingEligibilityLo: "ប្រឹក្សាយោបល់ឯករាជ្យ",
      workSummary:
        "Thudo Weico thực hiện công tác lập FS, thiết kế cơ sở, khảo sát Kinh tế Xã hội, lập Kế hoạch quản lý môi trường, Tái định cư, Thiết kế chi tiết, lập Hồ sơ mời thầu cho dự án.",
      workSummaryEn:
        "Prepared feasibility study, basic design, socioeconomic appraisal, environmental management plan, resettlement plan, detailed design, and tender documents.",
      workSummaryLo:
        "រៀបចំការសិក្សាលម្អិត ការរចនាមូលដ្ឋាន ការវាយតម្លៃសេដ្ឋកិច្ច ផែនការគ្រប់គ្រងបរិស្ថាន ផែនការផ្លាស់ប្តូរលំនៅដ្ឋាន ការរចនាលម្អិត និងឯកសារលក់ដូលលក់។",
    },
  },
  {
    id: 6,
    title: "Dự án xây dựng NMN Cầu Đỏ - Đà Nẵng",
    titleEn: "Construction of Cau Do WTP",
    titleLo: "ការសាងសង់ Cau Do WTP",
    category: "Nhà máy nước",
    categoryEn: "Water Treatment Plant",
    categoryLo: "របង្គោល",
    location: "Đà Nẵng",
    locationEn: "Da Nang City",
    locationLo: "ក្រុង Da Nang",
    description:
      "Công suất 170.000 m³/ngày. Vốn WB. Nhà máy cấp nước có công suất lớn nhất khu vực Nam Trung Bộ. Thudo Weico thực hiện công tác thiết kế cải tạo, nâng công suất nhà máy, lập tổng dự toán và dự toán chi tiết cho dự án.",
    descriptionEn:
      "Capacity 170,000 m³/day. World Bank funded. The largest water supply plant in the South-Central region. Designed the rehabilitation and capacity upgrade of the plant; conducted general and detailed cost estimation.",
    descriptionLo:
      "សមត្ថភាព 170,000 m³/ថ្ងៃ។ ផ្ដល់មូលនិធិដោយធនាគារពិភពលោក។ របង្គោលដ៏ធំបំផុតនៅតំបន់កណ្តាលខាងត្បូង។ រចនាការស្ដារឡើងវិញ និងលើកកម្ពស់សមត្ថភាពរបង្គោល; ធ្វើការប៉ាន់ប្រមាណថ្លៃដើមលម្អិត និងលម្អិត។",
    shortDescription: "Nhà máy nước Cầu Đỏ 170.000 m³/ngày",
    shortDescriptionEn: "Cau Do Water Plant 170,000 m³/day",
    shortDescriptionLo: "របង្គោល Cau Do 170,000 m³/ថ្ងៃ",
    status: "Hoàn thành",
    statusEn: "Completed",
    statusLo: "បានបញ្ចប់",
    image: "/green-office-building.jpg",
    details: {
      type: "Xây dựng nhà máy nước",
      typeEn: "Construction and Rehabilitation of Water Treatment Plant",
      typeLo: "ការសាងសង់ និងស្ដារឡើងវិញរបង្គោល",
      investor: "Quỹ WB",
      investorEn: "WB Fund",
      investorLo: "មូលនិធិ WB",
      biddingEligibility: "Tư vấn độc lập",
      biddingEligibilityEn: "Independent Consultant",
      biddingEligibilityLo: "ប្រឹក្សាយោបល់ឯករាជ្យ",
      workSummary:
        "Thudo Weico thực hiện công tác thiết kế cải tạo, nâng công suất nhà máy, lập tổng dự toán và dự toán chi tiết cho dự án.",
      workSummaryEn:
        "Designed the rehabilitation and capacity upgrade of the plant; conducted general and detailed cost estimation.",
      workSummaryLo: "រចនាការស្ដារឡើងវិញ និងលើកកម្ពស់សមត្ថភាពរបង្គោល; ធ្វើការប៉ាន់ប្រមាណថ្លៃដើមលម្អិត និងលម្អិត។",
    },
  },
]

export const getProjectsByLanguage = (lang: "vi" | "en" | "lo") => {
  return projectsData.map((project) => ({
    ...project,
    image:
      project.image && !project.image.includes("/placeholder") ? project.image : getRandomImageForProject(project.id),
    title: lang === "vi" ? project.title : lang === "en" ? project.titleEn : project.titleLo,
    category: lang === "vi" ? project.category : lang === "en" ? project.categoryEn : project.categoryLo,
    location: lang === "vi" ? project.location : lang === "en" ? project.locationEn : project.locationLo,
    description: lang === "vi" ? project.description : lang === "en" ? project.descriptionEn : project.descriptionLo,
    shortDescription:
      lang === "vi"
        ? project.shortDescription
        : lang === "en"
          ? project.shortDescriptionEn
          : project.shortDescriptionLo,
    status: lang === "vi" ? project.status : lang === "en" ? project.statusEn : project.statusLo,
    details: {
      ...project.details,
      type: lang === "vi" ? project.details.type : lang === "en" ? project.details.typeEn : project.details.typeLo,
      investor: project.details.investor
        ? lang === "vi"
          ? project.details.investor
          : lang === "en"
            ? project.details.investorEn
            : project.details.investorLo
        : undefined,
      biddingEligibility: project.details.biddingEligibility
        ? lang === "vi"
          ? project.details.biddingEligibility
          : lang === "en"
            ? project.details.biddingEligibilityEn
            : project.details.biddingEligibilityLo
        : undefined,
      workSummary:
        lang === "vi"
          ? project.details.workSummary
          : lang === "en"
            ? project.details.workSummaryEn
            : project.details.workSummaryLo,
    },
  }))
}
