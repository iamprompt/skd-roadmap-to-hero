export interface ICourse {
  id: string
  title: string
  SKUCategory: string
  duration: string
  coverImageUrl: string
  ratings?: number
  SKUCode: string
  cardImageUrl: string
  subTitle: string
  courseCode: string
  permalink: string
  categories: {
    category3?: string
    package?: string
    level?: string
    topic: string
  }
  instructors: {
    name: string
    profileImageUrl: string
  }[]
}

export const Courses: ICourse[] = [
  {
    id: 'acb7e75a-1c8e-45df-a9e7-75f3c1414910',
    title: 'Agile Essentials',
    SKUCategory: 'ONLINE_COURSE',
    duration: '2.5 - 3 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2Facb7e75a-1c8e-45df-a9e7-75f3c1414910%2FAgile.png',
    ratings: 4.357142857142857,
    SKUCode: 'O41201',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2Facb7e75a-1c8e-45df-a9e7-75f3c1414910%2FAgile.png',
    subTitle: 'ตอบโจทย์ทันความต้องการลูกค้า ด้วยการทำงานแบบ Agile',
    courseCode: 'agile-essentials',
    permalink: 'agile-essentials',
    categories: {
      category3: 'Recommended Courses',
      package: 'Digital Citizens',
      level: 'Beginner',
      topic: 'Business',
    },
    instructors: [
      {
        name: 'ดร. วิโรจน์ จิรพัฒนกุล',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2Fbef4fd8f-9a43-4b9b-8a40-f96d701e5136%2Fvirot2020.jpeg',
      },
    ],
  },
  {
    id: '35b35dbf-2b21-4d80-8c79-ff54344e45f4',
    title: 'AppSheet: Building Your No-Code Apps',
    SKUCategory: 'ONLINE_COURSE',
    duration: '3 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F35b35dbf-2b21-4d80-8c79-ff54344e45f4%2FOnline%2520Course-AppSheet%2520Fundamentals.png',
    ratings: 4.333333333333333,
    SKUCode: 'O44111',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F35b35dbf-2b21-4d80-8c79-ff54344e45f4%2FOnline%2520Course-AppSheet%2520Fundamentals.png',
    subTitle: 'สร้าง Application เพิ่มประสิทธิภาพการทำงานแบบไม่เขียน Code',
    courseCode: 'appsheet-01',
    permalink: 'appsheet-building-your-no-code-apps',
    categories: {
      package: 'Digital Citizens',
      topic: 'Business',
      level: 'Beginner',
    },
    instructors: [
      {
        name: 'ชวรณ ธีระกุลชัย',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2F755ab563-d174-4630-bb09-37d15b31ad9e%2Fpete.jpeg',
      },
    ],
  },
  {
    id: 'be542e6f-00ad-4514-bdc3-73feb8d0ef0f',
    title: 'Behavioural Science for Business',
    SKUCategory: 'ONLINE_COURSE',
    duration: '3 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2Fbe542e6f-00ad-4514-bdc3-73feb8d0ef0f%2FBehavioural%2520Science_Course%2520Card.jpg',
    ratings: 4.333333333333333,
    SKUCode: 'O41401',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2Fbe542e6f-00ad-4514-bdc3-73feb8d0ef0f%2FBehavioural%2520Science_Course%2520Card.jpg',
    subTitle: 'พลิกไอเดียธุรกิจให้ตอบโจทย์ด้วยศาสตร์แห่งพฤติกรรม',
    courseCode: 'behavioural-science-for-business',
    permalink: 'behavioural-science-for-business',
    categories: {
      topic: 'Business',
      package: 'Digital Champions',
      level: 'Beginner',
    },
    instructors: [
      {
        name: 'Nudge Thailand',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2Fdb9eb531-1d85-4d8d-97a5-730ecb1f9cac%2FScreen%2520Shot%25202565-03-25%2520at%252016.45.31.png',
      },
    ],
  },
  {
    id: 'd4367201-4c84-4fa9-89c7-ef6c4908a529',
    title: 'How to Become a Top Performer',
    SKUCategory: 'ONLINE_COURSE',
    duration: '1 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2Fd4367201-4c84-4fa9-89c7-ef6c4908a529%2FHow%2520to%2520Become%2520a%2520Top%2520Performer.png',
    ratings: 4.426829268292683,
    SKUCode: 'virtual-online-course-how-to-become-a-top-performer',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2Fd4367201-4c84-4fa9-89c7-ef6c4908a529%2FHow%2520to%2520Become%2520a%2520Top%2520Performer.png',
    subTitle: 'ถอดเคล็ดลับเป็น “คนเก่งระดับท็อป” ในองค์กร',
    courseCode: 'how-to-become-a-top-performer',
    permalink: 'how-to-become-a-top-performer',
    categories: {
      topic: 'Business',
      level: 'Beginner',
    },
    instructors: [
      {
        name: 'อานนทวงศ์ มฤคพิทักษ์',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2F17000d4d-425c-4545-8155-e2d9b7a5d735%2Fprut.png',
      },
    ],
  },
  {
    id: '032dd4dc-1ccb-4783-95a6-ef25753ea9a8',
    title: 'Effective Go: Architecture and Design Patterns',
    SKUCategory: 'ONLINE_COURSE',
    duration: '2-3 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F032dd4dc-1ccb-4783-95a6-ef25753ea9a8%2FEffective%2520Go.jpeg',
    ratings: 4.448979591836735,
    SKUCode: 'O21613',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F032dd4dc-1ccb-4783-95a6-ef25753ea9a8%2FEffective%2520Go.jpeg',
    subTitle: 'เรียนรู้การเขียนภาษา Go แบบมืออาชีพ',
    courseCode: 'effective-go',
    permalink: 'effective-go',
    categories: {
      level: 'Advanced',
      topic: 'Technology',
      package: 'Tech Talents',
    },
    instructors: [
      {
        name: 'พลัฏฐ์ อัญชลีชไมกร',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2Fadbcf23b-cbdc-4141-9783-c853f2268130%2Fyod.jpg',
      },
    ],
  },
  {
    id: '25d9052e-6bb8-468c-80f9-c8470ef620a7',
    title: 'Webflow for Designers',
    SKUCategory: 'ONLINE_COURSE',
    duration: '8-10 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F25d9052e-6bb8-468c-80f9-c8470ef620a7%2FWebflow%2520for%2520Designers%25202.png',
    ratings: 4.538461538461538,
    SKUCode: 'O31231',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F25d9052e-6bb8-468c-80f9-c8470ef620a7%2FWebflow%2520for%2520Designers%25202.png',
    subTitle: 'ปลดล็อกข้อจำกัด สร้างเว็บแบบไม่ต้องเขียนโค้ด ด้วย Webflow',
    courseCode: 'webflow-for-designers',
    permalink: 'webflow-for-designers',
    categories: {
      level: 'Beginner',
      topic: 'Design',
      package: 'Tech Talents',
    },
    instructors: [
      {
        name: 'กวิน เมศร์ศิริตระกูล',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2Fa7892cfc-95e0-4a25-9405-e3d2cd9d3e47%2FDSC09646%25202%2520copy.JPG',
      },
    ],
  },
  {
    id: '487cfd10-5c46-4272-bef3-7d41bafb6833',
    title: 'Go-to-Market Strategies',
    SKUCategory: 'ONLINE_COURSE',
    duration: '3-4 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F487cfd10-5c46-4272-bef3-7d41bafb6833%2Fcourse%2520card.jpg',
    ratings: 4.5,
    SKUCode: 'O42001',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F487cfd10-5c46-4272-bef3-7d41bafb6833%2Fcourse%2520card.jpg',
    subTitle: 'วางแผนกลยุทธ์พร้อมบุกตลาด',
    courseCode: 'go-to-market-strategies',
    permalink: 'go-to-market-strategies',
    categories: {
      topic: 'Business',
      package: 'Digital Citizens',
      level: 'Beginner',
    },
    instructors: [
      {
        name: 'ปารณีย์ ปินโฑละ',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2F244f669f-fe91-400f-8075-86d064568a9f%2FJa.JPG',
      },
    ],
  },
  {
    id: '4cce5ec9-c498-47e0-8b65-57b3ed1e31e6',
    title: 'Getting Started with Kotlin',
    SKUCategory: 'ONLINE_COURSE',
    duration: '3-4 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F4cce5ec9-c498-47e0-8b65-57b3ed1e31e6%2F01%2520-Course%2520Card%2520_%2520Getting%2520Started%2520with%2520Kotlin.jpg',
    ratings: 4.651115618661257,
    SKUCode: 'O21121',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F4cce5ec9-c498-47e0-8b65-57b3ed1e31e6%2F01%2520-Course%2520Card%2520_%2520Getting%2520Started%2520with%2520Kotlin.jpg',
    subTitle: 'เตรียมพื้นฐาน Kotlin ให้พร้อมต่อยอดสู่ Android Developer',
    courseCode: 'getting-started-with-kotlin',
    permalink: 'getting-started-with-kotlin',
    categories: {
      topic: 'Technology',
      level: 'Beginner',
      package: 'Tech Talents',
    },
    instructors: [
      {
        name: 'Android Developers',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2F9b70bc9a-7173-4fef-9e05-ffe3f3f01444%2F88D4AC89-FF8A-4D32-B13C-BDBD9DB6D6F5.jpeg',
      },
    ],
  },
  {
    id: '4d949e01-832c-4b6a-8de0-ad3765a9cfad',
    title: 'Go: The Fundamentals',
    SKUCategory: 'ONLINE_COURSE',
    duration: '2-3 ชั่วโมง ',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F4d949e01-832c-4b6a-8de0-ad3765a9cfad%2FGo%2520The%2520Fundamentals%2520x1.png',
    ratings: 4.371621621621622,
    SKUCode: 'O21611',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F4d949e01-832c-4b6a-8de0-ad3765a9cfad%2FGo%2520The%2520Fundamentals%2520x1.png',
    subTitle: 'เรียนรู้พื้นฐานสำคัญของภาษา Go',
    courseCode: 'go-the-fundamentals',
    permalink: 'go-the-fundamentals',
    categories: {
      topic: 'Technology',
      package: 'Tech Talents',
      level: 'Beginner',
    },
    instructors: [
      {
        name: 'พลัฏฐ์ อัญชลีชไมกร',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2Fadbcf23b-cbdc-4141-9783-c853f2268130%2Fyod.jpg',
      },
    ],
  },
  {
    id: '57bf3133-2426-43ac-9dcc-3b47e4cf7c17',
    title: 'OOP The Right Way',
    SKUCategory: 'ONLINE_COURSE',
    duration: '3-4 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F57bf3133-2426-43ac-9dcc-3b47e4cf7c17%2FOOP%2520The%2520Right%2520Way.jpeg',
    ratings: 4.767441860465116,
    SKUCode: 'O21025',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F57bf3133-2426-43ac-9dcc-3b47e4cf7c17%2FOOP%2520The%2520Right%2520Way.jpeg',
    subTitle: 'เขียนโค้ดให้เป็นระบบด้วย OOP Concept',
    courseCode: 'oop-the-right-way',
    permalink: 'oop-the-right-way',
    categories: {
      level: 'Beginner',
      package: 'Tech Talents',
      topic: 'Technology',
    },
    instructors: [
      {
        name: 'ชาคริต ลิขิตขจร',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2Fee58ba74-ebb5-45c3-afb4-96f413cbe441%2FScreen%2520Shot%25202564-07-23%2520at%252010.57.00.png',
      },
    ],
  },
  {
    id: '6c90bcf9-98b0-4850-9c92-f4b09ec2455d',
    title: 'Exploratory Data Analysis with Excel',
    SKUCategory: 'ONLINE_COURSE',
    duration: '10 - 12 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F6c90bcf9-98b0-4850-9c92-f4b09ec2455d%2Feda-excel.jpeg',
    ratings: 4.67175572519084,
    SKUCode: 'O11222',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F6c90bcf9-98b0-4850-9c92-f4b09ec2455d%2Feda-excel.jpeg',
    subTitle:
      'ฝึกวิเคราะห์ข้อมูลด้วย Excel แล้วหา Insights เพื่อต่อยอดธุรกิจให้ปัง',
    courseCode: 'eda-excel',
    permalink: 'eda-excel',
    categories: {
      package: 'Digital Champions',
      level: 'Beginner',
      category3: 'Recommended Courses',
      topic: 'Data',
    },
    instructors: [
      {
        name: 'ดร. วิโรจน์ จิรพัฒนกุล',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2Fbef4fd8f-9a43-4b9b-8a40-f96d701e5136%2Fvirot2020.jpeg',
      },
    ],
  },
  {
    id: '6d2d0f1b-9c7e-4f5d-8731-553ee88f62d7',
    title: 'Essential pandas for Data Science',
    SKUCategory: 'ONLINE_COURSE',
    duration: '16 - 18 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F6d2d0f1b-9c7e-4f5d-8731-553ee88f62d7%2Fpandas-fixed.png',
    ratings: 4.8076923076923075,
    SKUCode: 'O11231',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F6d2d0f1b-9c7e-4f5d-8731-553ee88f62d7%2Fpandas-fixed.png',
    subTitle: 'วิเคราะห์ข้อมูลแบบครบสูตรด้วย pandas',
    courseCode: 'essential-pandas-for-data-science',
    permalink: 'essential-pandas-for-data-science',
    categories: {
      level: 'Intermediate',
      package: 'Digital Champions',
      topic: 'Data',
    },
    instructors: [
      {
        name: 'สรณภพ เทวปฏิคม',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2F5f4f5188-833a-4189-9631-675121d74a84%2F262879282_275315034567279_2190973091887787255_n.jpg',
      },
    ],
  },
  {
    id: '77d3894a-9f83-4f86-a94a-b72bd5cab340',
    title: 'Improving UX with Motion',
    SKUCategory: 'ONLINE_COURSE',
    duration: '4-6 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F77d3894a-9f83-4f86-a94a-b72bd5cab340%2FCourse%2520Card%2520_%2520Improving%2520UX%2520%2520with%2520Motion.png',
    ratings: 4.655172413793103,
    SKUCode: 'O31221',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F77d3894a-9f83-4f86-a94a-b72bd5cab340%2FCourse%2520Card%2520_%2520Improving%2520UX%2520%2520with%2520Motion.png',
    subTitle: 'ยกระดับ UX ให้ลื่นไหลด้วย Motion Design ',
    courseCode: 'improving-ux-with-motion',
    permalink: 'improving-ux-with-motion',
    categories: {
      package: 'Digital Champions',
      topic: 'Design',
      level: 'Beginner',
    },
    instructors: [
      {
        name: 'ธนาภรณ์ กุศลมโนมัย',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2Fe141c53b-e0e7-43a6-b327-fbeeeaf08326%2Fk.mymint.png',
      },
    ],
  },
  {
    id: '7b082b0b-b774-4452-8bf1-ba75386aa1f7',
    title: 'Airtable: From Zero to Hero',
    SKUCategory: 'ONLINE_COURSE',
    duration: '4-6 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F7b082b0b-b774-4452-8bf1-ba75386aa1f7%2FAirtable.png',
    ratings: 4.363636363636363,
    SKUCode: 'O44101',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F7b082b0b-b774-4452-8bf1-ba75386aa1f7%2FAirtable.png',
    subTitle: 'เพิ่ม Productivity ในการทำงาน ด้วย No-code Platform',
    courseCode: 'airtable-from-zero-to-hero',
    permalink: 'airtable-from-zero-to-hero',
    categories: {
      package: 'Digital Champions',
      level: 'Beginner',
      topic: 'Business',
    },
    instructors: [
      {
        name: 'จาตุรงค์ ตั้งธนวิชญ์',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2Fb2d54453-4417-44eb-93fc-b80173de3e1f%2Fyok_jaturong.jpeg',
      },
      {
        name: 'วรพล รัตนพันธ์',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2Ff4b77aef-6598-444a-a0d8-2f3351c952e8%2Fptong.jpeg',
      },
    ],
  },
  {
    id: '87147444-8032-411e-8ba2-c2ca9f80b020',
    title: 'Developing Robust API Services with Go',
    SKUCategory: 'ONLINE_COURSE',
    duration: '4-6 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F87147444-8032-411e-8ba2-c2ca9f80b020%2FDeveloping%2520Robust%2520API%2520Services%2520with%2520Go1.png',
    ratings: 4.544303797468355,
    SKUCode: 'O21612',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F87147444-8032-411e-8ba2-c2ca9f80b020%2FDeveloping%2520Robust%2520API%2520Services%2520with%2520Go1.png',
    subTitle: 'สร้าง API Service แบบใช้ในชีวิตจริง ด้วยภาษา Go',
    courseCode: 'go-api',
    permalink: 'developing-robust-api-services-with-go',
    categories: {
      topic: 'Technology',
      level: 'Intermediate',
      package: 'Tech Talents',
    },
    instructors: [
      {
        name: 'พลัฏฐ์ อัญชลีชไมกร',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2Fadbcf23b-cbdc-4141-9783-c853f2268130%2Fyod.jpg',
      },
    ],
  },
  {
    id: '87ed6d56-5524-4f98-8183-6002b8a6160c',
    title: 'Hands-On Power BI',
    SKUCategory: 'ONLINE_COURSE',
    duration: '10-12 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F87ed6d56-5524-4f98-8183-6002b8a6160c%2FHands-on-Power-BI.jpg',
    ratings: 4.8478260869565215,
    SKUCode: 'O11022',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F87ed6d56-5524-4f98-8183-6002b8a6160c%2FHands-on-Power-BI.jpg',
    subTitle: 'ตอบทุกโจทย์ธุรกิจด้วย Dashboard ระดับ Advanced',
    courseCode: 'hands-on-power-bi',
    permalink: 'hands-on-power-bi',
    categories: {
      topic: 'Data',
      package: 'Digital Champions',
      level: 'Intermediate',
    },
    instructors: [
      {
        name: 'ดร. วิโรจน์ จิรพัฒนกุล',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2Fbef4fd8f-9a43-4b9b-8a40-f96d701e5136%2Fvirot2020.jpeg',
      },
    ],
  },
  {
    id: '9e1fcdd3-091c-4edd-8faf-b1fd9b19e3ec',
    title: 'Service Design Essentials ',
    SKUCategory: 'ONLINE_COURSE',
    duration: '5 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F9e1fcdd3-091c-4edd-8faf-b1fd9b19e3ec%2FService%2520Design%2520Essentials.png',
    ratings: 4.65625,
    SKUCode: 'O31041',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F9e1fcdd3-091c-4edd-8faf-b1fd9b19e3ec%2FService%2520Design%2520Essentials.png',
    subTitle: 'ออกแบบธุรกิจยุคใหม่ให้โดนใจลูกค้า',
    courseCode: 'service-design-essentials',
    permalink: 'service-design-essentials',
    categories: {
      package: 'Digital Champions',
      category3: 'Recommended Courses',
      topic: 'Business',
      level: 'Beginner',
    },
    instructors: [
      {
        name: 'ขวัญ พงษ์หาญยุทธ',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2Fd05c234b-d78d-4d7e-aa25-42f9c810d4d8%2Fkwan-phonghanyudh.jpeg',
      },
    ],
  },
  {
    id: '9e69f550-633b-4d58-b55b-7b817e664bf6',
    title: 'Building Microservices with Go',
    SKUCategory: 'ONLINE_COURSE',
    duration: '1-2 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F9e69f550-633b-4d58-b55b-7b817e664bf6%2F253068340_1011969519377577_6228675839028996950_n.jpg',
    ratings: 4.28,
    SKUCode: 'O21614',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F9e69f550-633b-4d58-b55b-7b817e664bf6%2FGuided%2520Project%2520Building%2520Microservices%2520with%2520Go.png',
    subTitle: 'เรียนรู้การสร้าง Microservices ด้วยภาษา Go ',
    courseCode: 'building-microservices-with-go',
    permalink: 'building-microservices-with-go',
    categories: {
      level: 'Intermediate',
      topic: 'Technology',
      package: 'Tech Talents',
    },
    instructors: [
      {
        name: 'พลัฏฐ์ อัญชลีชไมกร',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2Fadbcf23b-cbdc-4141-9783-c853f2268130%2Fyod.jpg',
      },
    ],
  },
  {
    id: '3637e888-e65f-4b47-84fd-b8b96697eb8a',
    title: 'React Hooks in Action',
    SKUCategory: 'ONLINE_COURSE',
    duration: '2-3 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F3637e888-e65f-4b47-84fd-b8b96697eb8a%2Freact-hooks.jpeg',
    ratings: 4.379310344827586,
    SKUCode: 'O21003',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F3637e888-e65f-4b47-84fd-b8b96697eb8a%2Freact-hooks.jpeg',
    subTitle: 'พัฒนาแอปพลิเคชันอย่างมีประสิทธิภาพด้วย React hook',
    courseCode: 'react-hooks',
    permalink: 'react-hooks',
    categories: {
      level: 'Intermediate',
      package: 'Tech Talents',
      topic: 'Technology',
    },
    instructors: [
      {
        name: 'ปัญจมพงศ์ เสริมสวัสดิ์ศรี',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2Ff41bc743-718f-4ccb-a4c2-5283caa32fdd%2Fpanj.jpg',
      },
    ],
  },
  {
    id: '60be9cde-b192-4fd9-bec7-31398e0bf736',
    title: 'Intro to User Experience Design (UX)',
    SKUCategory: 'ONLINE_COURSE',
    duration: '6 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F60be9cde-b192-4fd9-bec7-31398e0bf736%2Fux.jpeg',
    ratings: 4.662650602409639,
    SKUCode: 'O31021',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F60be9cde-b192-4fd9-bec7-31398e0bf736%2Fux.jpeg',
    subTitle: 'เริ่มต้นออกแบบประสบการณ์ผู้ใช้งานเพื่อความสำเร็จทางธุรกิจ',
    courseCode: 'intro-to-ux-design',
    permalink: 'intro-to-ux-design',
    categories: {
      package: 'Tech Talents',
      category3: 'Recommended Courses',
      level: 'Beginner',
      topic: 'Design',
    },
    instructors: [
      {
        name: 'อภิรักษ์ ปนาทกูล',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2F78689285-39da-4129-9ddd-e54c0a14ca31%2Fapirak-panatkool.jpeg',
      },
    ],
  },
  {
    id: '6421df11-437c-4137-80d1-c0ca1a4d11d1',
    title: 'Intro to Programming with Python',
    SKUCategory: 'ONLINE_COURSE',
    duration: '3-4 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F6421df11-437c-4137-80d1-c0ca1a4d11d1%2Fpython-new.jpeg',
    ratings: 4.568627450980392,
    SKUCode: 'O21601',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F6421df11-437c-4137-80d1-c0ca1a4d11d1%2Fpython-new.jpeg',
    subTitle: 'เริ่มเขียนโปรแกรมตั้งแต่พื้นฐาน ผ่านโปรเจคจริงภาษา Python',
    courseCode: 'intro-python',
    permalink: 'intro-python',
    categories: {
      package: 'Digital Champions',
      level: 'Beginner',
      topic: 'Technology',
    },
    instructors: [
      {
        name: ' ก้องภพ รุ่งเดช',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2F4dcaa907-e906-4044-877a-ae7b5eeef4ed%2Fkong.png',
      },
    ],
  },
  {
    id: '6e160e1c-f467-4790-b29f-e148c2cae389',
    title: 'PageSpeed Score Boost Up',
    SKUCategory: 'ONLINE_COURSE',
    duration: '2 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F6e160e1c-f467-4790-b29f-e148c2cae389%2F197764010_1397238170658650_6643262487637602121_n.jpg',
    ratings: 4.636363636363637,
    SKUCode: 'O21201',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F6e160e1c-f467-4790-b29f-e148c2cae389%2F1F08AB42-6F18-47B7-B05F-E2F02F90031C_1_105_c.jpeg',
    subTitle: 'ลดระยะเวลาการโหลด website ฉบับผู้เชี่ยวชาญตัวจริง',
    courseCode: 'boosting-pagespeed',
    permalink: 'boosting-pagespeed',
    categories: {
      level: 'Intermediate',
      topic: 'Technology',
      package: 'Tech Talents',
    },
    instructors: [
      {
        name: 'วรัทธน์ วงศ์มณีกิจ',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2F78085d72-4397-4362-924a-dc970c3b9768%2Fptung-white.png',
      },
    ],
  },
  {
    id: 'a61ff171-1d93-4c21-a408-c5010d70d5e8',
    title: 'Bitcoin, Blockchain, and Beyond',
    SKUCategory: 'ONLINE_COURSE',
    duration: '2-3 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2Fa61ff171-1d93-4c21-a408-c5010d70d5e8%2Fbbb.jpg',
    ratings: 4.666666666666667,
    SKUCode: 'O44001',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2Fa61ff171-1d93-4c21-a408-c5010d70d5e8%2Fbbb.jpg',
    subTitle: 'เปิดโลก Blockchain เทคโนโลยีแห่งอนาคต',
    courseCode: 'bitcoin-blockchain-beyond',
    permalink: 'bitcoin-blockchain-beyond',
    categories: {
      package: 'Digital Champions',
      level: 'Beginner',
      category3: 'Recommended Courses',
      topic: 'Technology',
    },
    instructors: [
      {
        name: 'อรรณวุฒิ ลีไพศาลสุวรรณา',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2F3b2a309c-6f80-4094-a78e-3da29008d38c%2Fo.jpeg',
      },
    ],
  },
  {
    id: '3aefaed0-540b-4468-83f5-f993233feae5',
    title: 'Advanced SQL for Data Analytics with BigQuery',
    SKUCategory: 'ONLINE_COURSE',
    duration: '6-8 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F3aefaed0-540b-4468-83f5-f993233feae5%2Fsql-advanced.png',
    ratings: 4.466666666666667,
    SKUCode: 'O16211',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F3aefaed0-540b-4468-83f5-f993233feae5%2Fsql-advanced.png',
    subTitle: 'เขียน SQL อย่างเต็มประสิทธิภาพเพื่อวิเคราะห์ข้อมูลทางธุรกิจ',
    courseCode: 'advanced-sql-for-data-analytics',
    permalink: 'advanced-sql-for-data-analytics',
    categories: {
      topic: 'Data',
      package: 'Digital Champions',
      level: 'Advanced',
    },
    instructors: [
      {
        name: 'ดร. วิโรจน์ จิรพัฒนกุล',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2Fbef4fd8f-9a43-4b9b-8a40-f96d701e5136%2Fvirot2020.jpeg',
      },
    ],
  },
  {
    id: '3c1c1b67-b6fb-4783-b232-7d84dee73fe8',
    title: 'Microservices Essentials',
    SKUCategory: 'ONLINE_COURSE',
    duration: ' 2-3 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F3c1c1b67-b6fb-4783-b232-7d84dee73fe8%2Fmicroservices.jpeg',
    ratings: 4.711538461538462,
    SKUCode: 'O26602',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F3c1c1b67-b6fb-4783-b232-7d84dee73fe8%2Fmicroservices.jpeg',
    subTitle: 'เริ่มต้น Microservices อย่างมีประสิทธิภาพ',
    courseCode: 'microservices-essentials',
    permalink: 'microservices-essentials',
    categories: {
      level: 'Beginner',
      topic: 'Technology',
      package: 'Tech Talents',
    },
    instructors: [
      {
        name: 'สมเกียรติ ปุ๋ยสูงเนิน',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2F14666ec8-9a79-44be-9d4c-651fb4f409bb%2Fpui-somkiat.jpeg',
      },
    ],
  },
  {
    id: 'c31472b1-c9c4-417e-984d-cd0cd13bf3ea',
    title: 'Power BI Essentials',
    SKUCategory: 'ONLINE_COURSE',
    duration: '4-6 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2Fc31472b1-c9c4-417e-984d-cd0cd13bf3ea%2Fpowerbi.png',
    ratings: 4.4298245614035086,
    SKUCode: 'O11021',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2Fc31472b1-c9c4-417e-984d-cd0cd13bf3ea%2Fpowerbi.png',
    subTitle: 'วิเคราะห์ข้อมูลพร้อมทำ Visualization ด้วย Power BI',
    courseCode: 'power-bi-essentials',
    permalink: 'power-bi-essentials',
    categories: {
      level: 'Beginner',
      package: 'Tech Talents',
      topic: 'Data',
    },
    instructors: [
      {
        name: 'ระพีพรรณ เหล่าจำรูญวรพงศ์',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2F138e8eef-2d85-423b-8e3f-b0c84a83c8ed%2Frapheephan-laochamroon.png',
      },
    ],
  },
  {
    id: 'd95a31d4-7caa-42c8-95e4-0abe4564365f',
    title: 'Mastering Google Data Studio',
    SKUCategory: 'ONLINE_COURSE',
    duration: '10-12 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2Fd95a31d4-7caa-42c8-95e4-0abe4564365f%2Fgoogle-data-studio.png',
    ratings: 4.626373626373627,
    SKUCode: 'O11031',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2Fd95a31d4-7caa-42c8-95e4-0abe4564365f%2Fgoogle-data-studio.png',
    subTitle:
      'วิเคราะห์ข้อมูลพร้อมทำ Data Visualization ด้วย Google Data Studio',
    courseCode: 'mastering-google-data-studio',
    permalink: 'mastering-google-data-studio',
    categories: {
      package: 'Digital Champions',
      level: 'Beginner',
      topic: 'Data',
    },
    instructors: [
      {
        name: 'ดร. วิโรจน์ จิรพัฒนกุล',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2Fbef4fd8f-9a43-4b9b-8a40-f96d701e5136%2Fvirot2020.jpeg',
      },
    ],
  },
  {
    id: '17ee0ae3-eca7-44a2-880e-8cde1c30c08f',
    title: 'Data Storytelling with Infographics',
    SKUCategory: 'ONLINE_COURSE',
    duration: '2-3 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F17ee0ae3-eca7-44a2-880e-8cde1c30c08f%2Fdata-storytelling.jpeg',
    ratings: 4.395833333333333,
    SKUCode: 'O11101',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F17ee0ae3-eca7-44a2-880e-8cde1c30c08f%2Fdata-storytelling.jpeg',
    subTitle: 'เล่าเรื่องด้วยข้อมูลให้ง่ายและสวยงามด้วย Infographics',
    courseCode: 'data-storytelling-with-infographics',
    permalink: 'data-storytelling-with-infographics',
    categories: {
      package: 'Tech Talents',
      level: 'Beginner',
      topic: 'Data',
    },
    instructors: [
      {
        name: 'ธนิสรา เรืองเดช',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2F15e978c8-ec06-4256-969b-d5e37e86bebd%2FThanisa.r.png',
      },
    ],
  },
  {
    id: '3266594b-df07-4f3b-ab9d-7f83a5f77a4b',
    title: 'Introduction to Docker',
    SKUCategory: 'ONLINE_COURSE',
    duration: '2-3 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F3266594b-df07-4f3b-ab9d-7f83a5f77a4b%2Fdocker.png',
    ratings: 4.533333333333333,
    SKUCode: 'O26621',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F3266594b-df07-4f3b-ab9d-7f83a5f77a4b%2Fdocker.png',
    subTitle: 'Deploy Application ง่ายขึ้น เร็วขึ้นด้วย Docker',
    courseCode: 'introduction-to-docker',
    permalink: 'introduction-to-docker',
    categories: {
      level: 'Beginner',
      topic: 'Technology',
      package: 'Tech Talents',
    },
    instructors: [
      {
        name: 'จิรายุส นิ่มแสง',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2F47ee1c7d-99e1-4a38-a4f2-56c8b1b7e792%2Fjirayut-nim.jpeg',
      },
    ],
  },
  {
    id: '39c40c6a-0810-4e67-8cb7-ac2b9e9e0656',
    title: 'SQL for Data Analytics',
    SKUCategory: 'ONLINE_COURSE',
    duration: '6-8 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F39c40c6a-0810-4e67-8cb7-ac2b9e9e0656%2Fsql-with-logo.png',
    ratings: 4.464285714285714,
    SKUCode: 'O11211',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F39c40c6a-0810-4e67-8cb7-ac2b9e9e0656%2Fsql-with-logo.png',
    subTitle: 'เขียน SQL เพื่อวิเคราะห์ข้อมูลทางธุรกิจ',
    courseCode: 'sql-data-analytics',
    permalink: 'sql-data-analytics',
    categories: {
      topic: 'Technology',
      package: 'Digital Champions',
      level: 'Beginner',
    },
    instructors: [
      {
        name: 'ดร. วิโรจน์ จิรพัฒนกุล',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2Fbef4fd8f-9a43-4b9b-8a40-f96d701e5136%2Fvirot2020.jpeg',
      },
    ],
  },
  {
    id: '53163ada-cca0-44cd-a631-446161ad2e04',
    title: 'Dashboard Design Principles',
    SKUCategory: 'ONLINE_COURSE',
    duration: '3-4 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F53163ada-cca0-44cd-a631-446161ad2e04%2Fdashboard-cover.png',
    ratings: 4.479194630872483,
    SKUCode: 'O11011',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F53163ada-cca0-44cd-a631-446161ad2e04%2Fdashboard-cover.png',
    subTitle: 'ออกแบบ Dashboard อย่างมีประสิทธิภาพ',
    courseCode: 'dashboard-design-principles',
    permalink: 'dashboard-design-principles',
    categories: {
      level: 'Beginner',
      package: 'Digital Champions',
      category3: 'Recommended Courses',
      topic: 'Data',
    },
    instructors: [
      {
        name: 'ดร. ธนชาตย์ ฤทธิ์บำรุง',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2Fb60361c8-7ff4-41a8-bf5f-672a418e021e%2FCheck2020.jpeg',
      },
      {
        name: 'ดร. วิโรจน์ จิรพัฒนกุล',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2Fbef4fd8f-9a43-4b9b-8a40-f96d701e5136%2Fvirot2020.jpeg',
      },
    ],
  },
  {
    id: '5c6a9d4e-d1c8-48fd-9571-578645ead59d',
    title: 'Exploratory Data Analysis with Google Sheets',
    SKUCategory: 'ONLINE_COURSE',
    duration: '8-10 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F5c6a9d4e-d1c8-48fd-9571-578645ead59d%2Feda.png',
    ratings: 4.52020202020202,
    SKUCode: 'O11221',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F5c6a9d4e-d1c8-48fd-9571-578645ead59d%2Feda.png',
    subTitle: 'ฝึกวิเคราะห์ข้อมูลหา Insights ไปต่อยอดธุรกิจ ด้วย Google Sheets',
    courseCode: 'eda-google-sheets',
    permalink: 'eda-google-sheets',
    categories: {
      topic: 'Data',
      level: 'Beginner',
      package: 'Digital Champions',
    },
    instructors: [
      {
        name: 'ดร. วิโรจน์ จิรพัฒนกุล',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2Fbef4fd8f-9a43-4b9b-8a40-f96d701e5136%2Fvirot2020.jpeg',
      },
    ],
  },
  {
    id: '71a9d35d-3bbf-4eb8-add4-cf9c4c9b3a06',
    title: 'Boosting Sales & Managing Stores with Kaojao',
    SKUCategory: 'ONLINE_COURSE',
    duration: '1-2 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F71a9d35d-3bbf-4eb8-add4-cf9c4c9b3a06%2FBoosting%2520Sales%2520%2526%2520Managing%2520Your%2520Store%2520in%2520One%2520Place.jpg',
    ratings: 4.857142857142857,
    SKUCode:
      'virtual-online-course-boosting-sales-and-managing-stores-with-kaojao',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F71a9d35d-3bbf-4eb8-add4-cf9c4c9b3a06%2FBoosting%2520Sales%2520%2526%2520Managing%2520Your%2520Store%2520in%2520One%2520Place.jpg',
    subTitle: 'เพิ่มยอดขายและจัดการออเดอร์ ด้วยระบบอัตโนมัติ',
    courseCode: 'boosting-sales-and-managing-stores-in-one-place',
    permalink: 'boosting-sales-and-managing-stores-with-kaojao',
    categories: {
      topic: 'Business',
      level: 'Beginner',
    },
    instructors: [
      {
        name: 'Kaojao',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2Fa8df6eae-e614-4585-989c-bbf6c53364a5%2F274382502_3085781658376048_5774241809608205449_n.png',
      },
    ],
  },
  {
    id: 'a09d4aa9-464b-4dbf-be0c-6cc4a6f6bbd7',
    title: 'Intro to Data Science',
    SKUCategory: 'ONLINE_COURSE',
    duration: '2-3 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2Fa09d4aa9-464b-4dbf-be0c-6cc4a6f6bbd7%2Fintro-ds-big.png',
    ratings: 4.396788990825688,
    SKUCode: 'O11001',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2Fa09d4aa9-464b-4dbf-be0c-6cc4a6f6bbd7%2Fintro-ds-big.png',
    subTitle: 'สร้างมูลค่าทางธุรกิจด้วยข้อมูล',
    courseCode: 'data-science-01',
    permalink: 'data-science-01',
    categories: {
      level: 'Beginner',
      package: 'Digital Citizens',
      topic: 'Data',
      category3: 'Recommended Courses',
    },
    instructors: [
      {
        name: 'ดร. วิโรจน์ จิรพัฒนกุล',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2Fbef4fd8f-9a43-4b9b-8a40-f96d701e5136%2Fvirot2020.jpeg',
      },
    ],
  },
  {
    id: 'ccff986d-a376-4aae-9e59-ae96aa06aba1',
    title: 'DevSecOps Transformation & Technologies',
    SKUCategory: 'ONLINE_COURSE',
    duration: '6-7 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2Fccff986d-a376-4aae-9e59-ae96aa06aba1%2Fdevsecops.png',
    ratings: 4.662790697674419,
    SKUCode: 'O26620',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2Fccff986d-a376-4aae-9e59-ae96aa06aba1%2Fdevsecops.png',
    subTitle: 'พัฒนา Software อย่างมีประสิทธิภาพ ด้วย DevSecOps',
    courseCode: 'dev-sec-ops-transformation-technologies',
    permalink: 'dev-sec-ops-transformation-technologies',
    categories: {
      package: 'Tech Talents',
      topic: 'Technology',
      level: 'Intermediate',
    },
    instructors: [
      {
        name: 'จิรายุส นิ่มแสง',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2F47ee1c7d-99e1-4a38-a4f2-56c8b1b7e792%2Fjirayut-nim.jpeg',
      },
    ],
  },
  {
    id: 'd4fc232e-e990-4d77-a691-323d7abebc54',
    title: 'Kubernetes Mastery',
    SKUCategory: 'ONLINE_COURSE',
    duration: '6-7 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2Fd4fc232e-e990-4d77-a691-323d7abebc54%2Fkubernetes.jpeg',
    ratings: 4.568627450980392,
    SKUCode: 'O26622',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2Fd4fc232e-e990-4d77-a691-323d7abebc54%2Fkubernetes.jpeg',
    subTitle: 'นำ Application ขึ้น Kubernetes ฉบับผู้เชี่ยวชาญตัวจริง',
    courseCode: 'kubernetes-mastery',
    permalink: 'kubernetes-mastery',
    categories: {
      package: 'Tech Talents',
      level: 'Beginner',
      topic: 'Technology',
    },
    instructors: [
      {
        name: 'จิรายุส นิ่มแสง',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2F47ee1c7d-99e1-4a38-a4f2-56c8b1b7e792%2Fjirayut-nim.jpeg',
      },
    ],
  },
  {
    id: '49c114c6-3bf5-4221-bba5-12638000ed71',
    title: 'Web Scraping Fundamentals with Python',
    SKUCategory: 'ONLINE_COURSE',
    duration: '6-8 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F49c114c6-3bf5-4221-bba5-12638000ed71%2Fweb-scraping.png',
    ratings: 4.458333333333333,
    SKUCode: 'O11301',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F49c114c6-3bf5-4221-bba5-12638000ed71%2Fweb-scraping.png',
    subTitle: 'เข้าถึงข้อมูลเว็บไซต์ง่ายๆ ด้วยมือคุณ',
    courseCode: 'web-scraping',
    permalink: 'web-scraping-with-python',
    categories: {
      package: 'Tech Talents',
      level: 'Intermediate',
      topic: 'Data',
    },
    instructors: [
      {
        name: 'ดร. วิโรจน์ จิรพัฒนกุล',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2Fbef4fd8f-9a43-4b9b-8a40-f96d701e5136%2Fvirot2020.jpeg',
      },
    ],
  },
  {
    id: '7ee71840-7bd0-4027-aea1-c14baaf82499',
    title: 'Cybersecurity Awareness',
    SKUCategory: 'ONLINE_COURSE',
    duration: ' 3-4 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F7ee71840-7bd0-4027-aea1-c14baaf82499%2Fcyber-security.jpeg',
    ratings: 4.538461538461538,
    SKUCode: 'O21901',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F7ee71840-7bd0-4027-aea1-c14baaf82499%2Fcyber-security.jpeg',
    subTitle: 'ปกป้องข้อมูลสำคัญให้ปลอดภัยบนโลกออนไลน์ แบบมืออาชีพ',
    courseCode: 'cybersecurity-awareness',
    permalink: 'cybersecurity-awareness',
    categories: {
      level: 'Beginner',
      category3: 'Recommended Courses',
      package: 'Digital Champions',
      topic: 'Technology',
    },
    instructors: [
      {
        name: 'พรสุข กรกิตติชัย',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2F888daaf4-0801-4e98-bfe7-5c0f3f87c5ee%2Fpornsook-kornkitichai.png',
      },
      {
        name: 'วิศรุต ลิ่มสุวรรณ',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2Fc05911a5-8627-4d5a-8858-b97e6e24f6fa%2Fwitsarut-limsuwan.png',
      },
      {
        name: 'ณัฐกรณ์ ธีระประยุติ',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2F06c6fe8a-8b4c-40a9-97b9-7963e52d3d56%2Fnuttakorn-dhiraprayudti.png',
      },
    ],
  },
  {
    id: '879e2aa8-5389-4c03-b93d-b04c75162eac',
    title: 'Design Thinking for Innovation',
    SKUCategory: 'ONLINE_COURSE',
    duration: '3 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F879e2aa8-5389-4c03-b93d-b04c75162eac%2Fdesignthinking.jpg',
    ratings: 4.320388349514563,
    SKUCode: 'O41001',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F879e2aa8-5389-4c03-b93d-b04c75162eac%2Fdesignthinking.jpg',
    subTitle: 'สร้างสรรค์นวัตกรรมด้วยกระบวนการคิดเชิงออกแบบ',
    courseCode: 'design-thinking-01',
    permalink: 'design-thinking',
    categories: {
      topic: 'Design',
      package: 'Tech Talents',
      level: 'Beginner',
    },
    instructors: [
      {
        name: 'วิริยา วิจิตรวาทการ',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2F18f94f44-fe48-4ceb-b4b2-cce74735f6a0%2FTaew_pic.jpeg',
      },
    ],
  },
  {
    id: 'caca4ffe-2c5a-41e5-9829-a93d36668fdc',
    title: 'Money Wellness The Series',
    SKUCategory: 'ONLINE_COURSE',
    duration: '7-8 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2Fcaca4ffe-2c5a-41e5-9829-a93d36668fdc%2Fmoney-wellness.png',
    ratings: 4.734265734265734,
    SKUCode: 'O50001',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2Fcaca4ffe-2c5a-41e5-9829-a93d36668fdc%2Fmoney-wellness.png',
    subTitle: 'สร้างพื้นฐานการเงินที่ดี ชีวิตสบาย',
    courseCode: 'money-wellness',
    permalink: 'money-wellness',
    categories: {
      level: 'Beginner',
      topic: 'Business',
    },
    instructors: [
      {
        name: 'จักรพงษ์ เมษพันธุ์',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2F24977ece-ae6f-48f6-ba08-bec2d5828805%2Fthemoneycoach.png',
      },
    ],
  },
  {
    id: '1f3ec9f3-9b2b-4ec2-873e-41e4a2101440',
    title: 'UI Design with Figma',
    SKUCategory: 'ONLINE_COURSE',
    duration: '6-8 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F1f3ec9f3-9b2b-4ec2-873e-41e4a2101440%2Ffigma.png',
    ratings: 4.463414634146342,
    SKUCode: 'O31211',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F1f3ec9f3-9b2b-4ec2-873e-41e4a2101440%2Ffigma.png',
    subTitle: 'ออกแบบ UI ไปจนถึงการทำ Prototype ด้วย Figma',
    courseCode: 'design-with-figma',
    permalink: 'design-with-figma',
    categories: {
      level: 'Beginner',
      package: 'Digital Champions',
      topic: 'Design',
    },
    instructors: [
      {
        name: 'ธนนท์ วงษ์ประยูร',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2F141f219a-3681-4aa6-b05d-a41284ea1727%2Fthanon.png',
      },
    ],
  },
  {
    id: '46ed9105-ed3f-4676-9444-3a27b8b002f5',
    title: 'Storytelling for Project Pitching',
    SKUCategory: 'ONLINE_COURSE',
    duration: '4-6 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F46ed9105-ed3f-4676-9444-3a27b8b002f5%2Fstorytelling-project-pitching.jpeg',
    ratings: 4.377777777777778,
    SKUCode: 'O43001',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F46ed9105-ed3f-4676-9444-3a27b8b002f5%2Fstorytelling-project-pitching.jpeg',
    subTitle: 'Pitch งานเข้าเป้า แค่เล่าเรื่องเป็น',
    courseCode: 'storytelling-for-project-pitching',
    permalink: 'storytelling-for-project-pitching',
    categories: {
      topic: 'Business',
      level: 'Beginner',
    },
    instructors: [
      {
        name: 'พิริยะ กุลกาญจนาชีวิน',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2F6040a5cf-9dfe-416c-8ff2-557e26242098%2Fpiriya-sq.jpeg',
      },
    ],
  },
  {
    id: 'b14a037f-2c98-4bae-b216-1cb383ffd634',
    title: 'Web Basics with HTML and CSS',
    SKUCategory: 'ONLINE_COURSE',
    duration: '6-8 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2Fb14a037f-2c98-4bae-b216-1cb383ffd634%2Fbasics-web.png',
    ratings: 4.622222222222222,
    SKUCode: 'O21011',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2Fb14a037f-2c98-4bae-b216-1cb383ffd634%2Fbasics-web.png',
    subTitle: 'ก้าวแรกสู่การพัฒนาเว็บไซต์ด้วย HTML และ CSS',
    courseCode: 'basic-web-html-css',
    permalink: 'web-basics-html-css',
    categories: {
      level: 'Beginner',
      package: 'Tech Talents',
      topic: 'Technology',
    },
    instructors: [
      {
        name: 'ทัศน์พล รัชตะสัมฤทธิ์',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2Ffbe4cd4b-ec0a-4b2c-9c7e-a119cf28cf39%2Ftadpol-rachatasumrit.jpeg',
      },
    ],
  },
  {
    id: 'bc16ec81-283a-4dc3-b763-7e0421401281',
    title: 'Essential CSS for Web Developers',
    SKUCategory: 'ONLINE_COURSE',
    duration: ' 8-10 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2Fbc16ec81-283a-4dc3-b763-7e0421401281%2Fessential-css.png',
    ratings: 4.679245283018868,
    SKUCode: 'O21012',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2Fbc16ec81-283a-4dc3-b763-7e0421401281%2Fessential-css.png',
    subTitle: 'ปรับแต่งและเพิ่มลูกเล่นให้เว็บไซต์ด้วย CSS',
    courseCode: 'essential-css',
    permalink: 'essential-css',
    categories: {
      topic: 'Technology',
      package: 'Tech Talents',
      level: 'Intermediate',
    },
    instructors: [
      {
        name: 'ทัศน์พล รัชตะสัมฤทธิ์',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2Ffbe4cd4b-ec0a-4b2c-9c7e-a119cf28cf39%2Ftadpol-rachatasumrit.jpeg',
      },
    ],
  },
  {
    id: '0f74ea90-6781-4fb7-8ffb-0effe99e8b30',
    title: 'Modern JavaScript (ES6)',
    SKUCategory: 'ONLINE_COURSE',
    duration: '2-3 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F0f74ea90-6781-4fb7-8ffb-0effe99e8b30%2Fmodern-javascript-es6.png',
    ratings: 4.390243902439025,
    SKUCode: 'O21022',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F0f74ea90-6781-4fb7-8ffb-0effe99e8b30%2Fmodern-javascript-es6.png',
    subTitle: 'พื้นฐาน ES6 ที่จำเป็นสำหรับการเขียน JavaScript',
    courseCode: 'es-6',
    permalink: 'modern-javascript-es6',
    categories: {
      level: 'Beginner',
      topic: 'Technology',
      package: 'Tech Talents',
    },
    instructors: [
      {
        name: 'Skooldio Team',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2F6bae3f47-a202-42ec-883f-1b5c459d401a%2FSkooldio_logo_crop.jpeg',
      },
    ],
  },
  {
    id: 'c3f1b0b0-df54-4538-beea-31f298fbc0ee',
    title: 'Mastering Web Development with React',
    SKUCategory: 'ONLINE_COURSE',
    duration: '4-6 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2Fc3f1b0b0-df54-4538-beea-31f298fbc0ee%2Freact-cover.png',
    ratings: 4.054054054054054,
    SKUCode: 'O21001',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2Fc3f1b0b0-df54-4538-beea-31f298fbc0ee%2Freact-cover.png',
    subTitle: 'เริ่มพัฒนาเว็บแอปพลิเคชันด้วย React อย่างถูกวิธี',
    courseCode: 'mastering-react',
    permalink: 'mastering-react',
    categories: {
      package: 'Tech Talents',
      topic: 'Technology',
      level: 'Beginner',
    },
    instructors: [
      {
        name: 'ปัญจมพงศ์ เสริมสวัสดิ์ศรี',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2Ff41bc743-718f-4ccb-a4c2-5283caa32fdd%2Fpanj.jpg',
      },
    ],
  },
  {
    id: 'd6a1f25b-c159-4f30-aefc-b83bdcd3904c',
    title: 'Getting Started with Vue.js',
    SKUCategory: 'ONLINE_COURSE',
    duration: '4-6 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2Fd6a1f25b-c159-4f30-aefc-b83bdcd3904c%2Fvue-cover.png',
    ratings: 3.96,
    SKUCode: 'O21002',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2Fd6a1f25b-c159-4f30-aefc-b83bdcd3904c%2Fvue-cover.png',
    subTitle: 'เริ่มพัฒนาเว็บแอปพลิเคชันด้วย Vue.js อย่างถูกวิธี',
    courseCode: 'getting-started-vuejs',
    permalink: 'getting-started-vuejs',
    categories: {
      topic: 'Technology',
      level: 'Beginner',
      package: 'Tech Talents',
    },
    instructors: [
      {
        name: 'วรัทธน์ วงศ์มณีกิจ',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2F78085d72-4397-4362-924a-dc970c3b9768%2Fptung-white.png',
      },
    ],
  },
  {
    id: '5891a008-84dc-4ec5-b2d5-2938f557d853',
    title: 'Android UI Design with XML',
    SKUCategory: 'ONLINE_COURSE',
    duration: '4-6 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F5891a008-84dc-4ec5-b2d5-2938f557d853%2Fandroid-ui.png',
    ratings: 4.5,
    SKUCode: 'O21111',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F5891a008-84dc-4ec5-b2d5-2938f557d853%2Fandroid-ui.png',
    subTitle: 'พื้นฐานสำคัญในการออกแบบ Android UI ด้วยภาษา XML',
    courseCode: 'android-ui-design-with-xml',
    permalink: 'android-ui-design-with-xml',
    categories: {
      package: 'Tech Talents',
      topic: 'Technology',
      level: 'Intermediate',
    },
    instructors: [
      {
        name: 'สมเกียรติ กิจวงศ์วัฒนะ',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2F1a5935a3-3a4d-4b93-a925-1799a59daec7%2Fsomkiat.png',
      },
    ],
  },
  {
    id: '09daf2e7-b1dc-4c15-a677-a2d2443e16ad',
    title: 'Lazada Sponsored Solutions',
    SKUCategory: 'ONLINE_COURSE',
    duration: '1 - 2 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F09daf2e7-b1dc-4c15-a677-a2d2443e16ad%2FLazada%2520Sponsored%2520Solutions1.png',
    ratings: 4.555555555555555,
    SKUCode: 'lazada-sponsored-solutions',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F09daf2e7-b1dc-4c15-a677-a2d2443e16ad%2FLazada%2520Sponsored%2520Solutions1.png',
    subTitle: 'วิธีโปรโมทสินค้าให้ขายดีบนลาซาด้า',
    courseCode: 'lazada-sponsored-solutions',
    permalink: 'lazada-sponsored-solutions',
    categories: {
      topic: 'Business',
      level: 'Beginner',
    },
    instructors: [
      {
        name: 'Lazada University',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2F2143dc40-6da6-4554-ba0a-f211adc4e8b1%2FScreen%2520Shot%25202564-07-05%2520at%252016.00.08.png',
      },
    ],
  },
  {
    id: '2ca21055-81be-4711-b0c8-e90e365ebb66',
    title: 'Node.js Crash Course',
    SKUCategory: 'ONLINE_COURSE',
    duration: '1-2 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F2ca21055-81be-4711-b0c8-e90e365ebb66%2Fnodejs.png',
    ratings: 4.619631901840491,
    SKUCode: 'O21023',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F2ca21055-81be-4711-b0c8-e90e365ebb66%2Fnodejs.png',
    subTitle: 'เริ่มเขียน Node.js ง่ายๆ ใน 1 ชั่วโมง',
    courseCode: 'nodejs-crash-course',
    permalink: 'nodejs-crash-course',
    categories: {
      level: 'Beginner',
      topic: 'Technology',
      package: 'Tech Talents',
    },
    instructors: [
      {
        name: 'วรายุทธ เลิศกัลยาณวัตร',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2F7f13147c-2e2d-446a-b927-e235c7c14a92%2Fboy.jpeg',
      },
    ],
  },
  {
    id: '5bc76b37-6f8c-4278-975f-c046736931c5',
    title: 'Express.js Crash Course',
    SKUCategory: 'ONLINE_COURSE',
    duration: '1-2 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F5bc76b37-6f8c-4278-975f-c046736931c5%2Fexpress.png',
    ratings: 4.688311688311688,
    SKUCode: 'O21024',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F5bc76b37-6f8c-4278-975f-c046736931c5%2Fexpress.png',
    subTitle: 'เริ่มต้น Express.js ง่ายๆ ใน 1 ชั่วโมง',
    courseCode: 'expressjs-crash-course',
    permalink: 'expressjs-crash-course',
    categories: {
      topic: 'Technology',
      level: 'Beginner',
      package: 'Tech Talents',
    },
    instructors: [
      {
        name: 'วรายุทธ เลิศกัลยาณวัตร',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2F7f13147c-2e2d-446a-b927-e235c7c14a92%2Fboy.jpeg',
      },
    ],
  },
  {
    id: '591d47d3-4979-409e-ba46-5896d2fce191',
    title: 'Getting Started with LIFF Development',
    SKUCategory: 'ONLINE_COURSE',
    duration: '2 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F591d47d3-4979-409e-ba46-5896d2fce191%2Fliff-cover.jpeg',
    ratings: 4.815068493150685,
    SKUCode: 'line-frontend-framework',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F591d47d3-4979-409e-ba46-5896d2fce191%2Fliff-cover.jpeg',
    subTitle: 'เรียนรู้การพัฒนาแอปพลิเคชันด้วย LINE Front-end Framework',
    courseCode: 'line-frontend-framework',
    permalink: 'line-frontend-framework',
    categories: {
      level: 'Beginner',
      topic: 'Technology',
    },
    instructors: [
      {
        name: 'LINE Developers Thailand',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2Fac171c91-33d5-4267-a104-246a7dd38fce%2Fline-developers-thailand.jpeg',
      },
    ],
  },
  {
    id: 'cb2fb00a-7646-4070-815d-e062c3038075',
    title: 'Building LINE Chatbot Using Dialogflow',
    SKUCategory: 'ONLINE_COURSE',
    duration: '1 ชั่วโมง 15 นาที',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2Fcb2fb00a-7646-4070-815d-e062c3038075%2Fline-banner.png',
    ratings: 4.682310469314079,
    SKUCode: 'line-chatbot',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2Fcb2fb00a-7646-4070-815d-e062c3038075%2Fline-banner.png',
    subTitle: 'สร้าง Chatbot ให้ตอบโต้ภาษาไทยโดยไม่ต้องเขียนโปรแกรม',
    courseCode: 'line-chatbot',
    permalink: 'line-chatbot',
    categories: {
      topic: 'Technology',
      level: 'Beginner',
    },
    instructors: [
      {
        name: 'LINE Developers Thailand',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2Fac171c91-33d5-4267-a104-246a7dd38fce%2Fline-developers-thailand.jpeg',
      },
    ],
  },
  {
    id: 'f187e94a-06f8-4080-91fc-bf852dd05657',
    title: 'How to Find Customer Insight with Social Media Data Analytics',
    SKUCategory: 'ONLINE_COURSE',
    duration: '1 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2Ff187e94a-06f8-4080-91fc-bf852dd05657%2Fsocial-media.jpeg',
    ratings: 4.401993355481728,
    SKUCode: 'social-media-data-analytics',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2Ff187e94a-06f8-4080-91fc-bf852dd05657%2Fsocial-media.jpeg',
    subTitle: 'รู้จักลูกค้าได้มากกว่า ด้วยข้อมูลจาก Social Media',
    courseCode: 'social-media-data-analytics',
    permalink: 'social-media-data-analytics',
    categories: {
      topic: 'Technology',
      level: 'Beginner',
    },
    instructors: [
      {
        name: 'WISESIGHT',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2F6b57087a-4176-4bb7-acd5-f26b0f03952e%2Fwisesight.png',
      },
    ],
  },
  {
    id: '0edbd0e1-aabf-439a-a5f7-d19c43718665',
    title: 'Git Essentials for Developers',
    SKUCategory: 'ONLINE_COURSE',
    duration: '3 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F0edbd0e1-aabf-439a-a5f7-d19c43718665%2FGit%2520Essentials.png',
    ratings: 4.733333333333333,
    SKUCode: 'O21026',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F0edbd0e1-aabf-439a-a5f7-d19c43718665%2FGit%2520Essentials.png',
    subTitle: 'พื้นฐานแน่น แม่นคำสั่ง เรียนรู้การใช้ Git อย่างมืออาชีพ',
    courseCode: 'git-essentials-for-developers',
    permalink: 'git-essentials-for-developers',
    categories: {
      level: 'Beginner',
      package: 'Tech Talents',
      topic: 'Technology',
    },
    instructors: [
      {
        name: 'ตรัยรัตน์ ปัญญาวัฒนานุกูล',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2Fa23f4cc7-b9db-4caf-b4e7-e7908a47c35e%2FScreen%2520Shot%25202565-06-11%2520at%252021.33.19.png',
      },
    ],
  },
  {
    id: '029b4e4b-ae6a-4d6e-969a-98d75397455f',
    title: 'Purpose-built Database',
    SKUCategory: 'ONLINE_COURSE',
    duration: '3 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F029b4e4b-ae6a-4d6e-969a-98d75397455f%2FPurpose-Built%2520Database.png',
    ratings: 4.823529411764706,
    SKUCode: 'O16221',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F029b4e4b-ae6a-4d6e-969a-98d75397455f%2FPurpose-Built%2520Database.png',
    subTitle: 'เลือกฐานข้อมูลให้เป็น นำไปใช้ได้ตรงจุด',
    courseCode: 'purpose-built-database',
    permalink: 'purpose-built-database',
    categories: {
      package: 'Tech Talents',
      topic: 'Data',
      level: 'Beginner',
    },
    instructors: [
      {
        name: 'พงศกร ธีรภาพวงศ์',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2F44635e6b-11b5-47b9-9c74-bbbb62314c1f%2Fpongsakorn.jpeg',
      },
    ],
  },
  {
    id: '373cca1f-8df0-4ac9-a147-335043769025',
    title: 'How to Become a Better Programmer',
    SKUCategory: 'ONLINE_COURSE',
    duration: '3-4 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F373cca1f-8df0-4ac9-a147-335043769025%2FHow%2520to%2520.png',
    ratings: 4.639240506329114,
    SKUCode: 'O21021',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F373cca1f-8df0-4ac9-a147-335043769025%2FHow%2520to%2520.png',
    subTitle: 'สูตรลัดนอกตำรา พัฒนาเป็นโปรแกรมเมอร์มือโปร ',
    courseCode: 'how-to-become-a-better-programmer',
    permalink: 'how-to-become-a-better-programmer',
    categories: {
      package: 'Tech Talents',
      level: 'Beginner',
      topic: 'Technology',
    },
    instructors: [
      {
        name: 'วรายุทธ เลิศกัลยาณวัตร',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2F7f13147c-2e2d-446a-b927-e235c7c14a92%2Fboy.jpeg',
      },
    ],
  },
  {
    id: '963c217b-bdef-4421-990a-1bdaa983fbe8',
    title: 'UX Writing',
    SKUCategory: 'ONLINE_COURSE',
    duration: '3-4 ชั่วโมง (Coming Soon)',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F963c217b-bdef-4421-990a-1bdaa983fbe8%2FUX%2520Writing.png',
    SKUCode: 'virtual-online-course-ux-writing-mock',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F963c217b-bdef-4421-990a-1bdaa983fbe8%2FUX%2520Writing.png',
    subTitle: 'ปลดล็อคศักยภาพ Product ด้วยพลังของถ้อยคำ',
    courseCode: 'ux-writing-mock',
    permalink: 'ux-writing',
    categories: {
      package: 'Digital Champions',
      level: 'Beginner',
      topic: 'Design',
    },
    instructors: [
      {
        name: 'ธิชาวดี มีสมพืช',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2F1a8000fb-30b2-4b33-8c0e-ca608fde0eb1%2Fpkoi.jpg',
      },
    ],
  },
  {
    id: '9cac718c-4b53-4a98-9a13-22fe1d9ed3c6',
    title: 'Software Architecture Design',
    SKUCategory: 'ONLINE_COURSE',
    duration: '4 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F9cac718c-4b53-4a98-9a13-22fe1d9ed3c6%2Fsoftarch.png',
    ratings: 4.575,
    SKUCode: 'O21027',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F9cac718c-4b53-4a98-9a13-22fe1d9ed3c6%2Fsoftarch.png',
    subTitle: 'เข้าใจหลักการออกแบบ Software อย่างเป็นระบบ',
    courseCode: 'software-architecture-design',
    permalink: 'software-architecture-design',
    categories: {
      level: 'Intermediate',
      package: 'Tech Talents',
      topic: 'Technology',
    },
    instructors: [
      {
        name: 'ชาคริต ลิขิตขจร',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2Fee58ba74-ebb5-45c3-afb4-96f413cbe441%2FScreen%2520Shot%25202564-07-23%2520at%252010.57.00.png',
      },
    ],
  },
  {
    id: 'c0e8b7aa-5b62-42f4-836a-5cdba306246c',
    title: 'Debugging and Publishing Your Android Apps',
    SKUCategory: 'ONLINE_COURSE',
    duration: '2-3 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2Fc0e8b7aa-5b62-42f4-836a-5cdba306246c%2FDebugging%2520and%2520Publishing%2520Your%2520Android%2520App.png',
    ratings: 5,
    SKUCode: 'O21112',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2Fc0e8b7aa-5b62-42f4-836a-5cdba306246c%2FDebugging%2520and%2520Publishing%2520Your%2520Android%2520App.png',
    subTitle:
      'เรียนรู้การทดสอบและวิเคราะห์แอปฯอย่างถูกต้อง และนำขึ้น Google Play ได้ ',
    courseCode: 'debugging-and-publishing-your-android-app',
    permalink: 'debugging-and-publishing-your-android-apps',
    categories: {
      package: 'Tech Talents',
      level: 'Intermediate',
      topic: 'Technology',
    },
    instructors: [
      {
        name: 'สมเกียรติ กิจวงศ์วัฒนะ',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2F1a5935a3-3a4d-4b93-a925-1799a59daec7%2Fsomkiat.png',
      },
    ],
  },
  {
    id: 'e4d2cf70-929e-489d-8bd3-ef93b31a7728',
    title: 'เจาะลึกเบื้องหลัง MAKE by KBank แอปจัดการเงินสุดฮอตแห่งยุค',
    SKUCategory: 'ONLINE_COURSE',
    duration: '1 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2Fe4d2cf70-929e-489d-8bd3-ef93b31a7728%2F282683331_541880414155900_8457165621218001760_n.jpg',
    ratings: 4.75,
    SKUCode: 'becoming-ep2-make-by-kbank',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2Fe4d2cf70-929e-489d-8bd3-ef93b31a7728%2F282683331_541880414155900_8457165621218001760_n.jpg',
    subTitle: 'เจาะลึกเบื้องหลัง MAKE by KBank แอปจัดการเงินสุดฮอตแห่งยุค',
    courseCode: 'becoming-ep2-make-by-kbank',
    permalink: 'becoming-ep2-make-by-kbank',
    categories: {
      topic: 'Technology',
      package: 'Digital Champions',
      level: 'Beginner',
    },
    instructors: [
      {
        name: 'Skooldio Team',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2F6bae3f47-a202-42ec-883f-1b5c459d401a%2FSkooldio_logo_crop.jpeg',
      },
    ],
  },
  {
    id: '9fa959ed-60ea-48bd-954a-8407d5e3d6d6',
    title: 'Android Fundamentals for Basic App Development',
    SKUCategory: 'ONLINE_COURSE',
    duration: '4-6 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F9fa959ed-60ea-48bd-954a-8407d5e3d6d6%2Fbasic.jpeg',
    ratings: 3.8,
    SKUCode: 'O21122',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F9fa959ed-60ea-48bd-954a-8407d5e3d6d6%2Fbasic.jpeg',
    subTitle: 'เริ่มต้นพัฒนา Android ด้วยโปรแกรม Android Studio',
    courseCode: 'android-fundamentals-for-basic-app-development',
    permalink: 'android-fundamentals-for-basic-app-development',
    categories: {
      package: 'Tech Talents',
      topic: 'Technology',
      level: 'Beginner',
    },
    instructors: [
      {
        name: 'สมเกียรติ กิจวงศ์วัฒนะ',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2F1a5935a3-3a4d-4b93-a925-1799a59daec7%2Fsomkiat.png',
      },
    ],
  },
  {
    id: '80014b7d-1e39-4085-a2f7-f493bf302097',
    title: 'What it takes to become a Senior Developer?',
    SKUCategory: 'ONLINE_COURSE',
    duration: '1 ชั่วโมงครึ่ง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F80014b7d-1e39-4085-a2f7-f493bf302097%2F272650712_1656033051407410_5630681926764725260_n.jpeg',
    ratings: 4.5,
    SKUCode: 'what-it-takes-to-become-a-senior-developer-live',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F80014b7d-1e39-4085-a2f7-f493bf302097%2F272650712_1656033051407410_5630681926764725260_n.jpeg',
    subTitle: 'อยากเป็น Senior Developer ต้องทำยังไง',
    courseCode: 'what-it-takes-to-become-a-senior-developer-live',
    permalink: 'what-it-takes-to-become-a-senior-developer-live',
    categories: {
      level: 'Beginner',
      topic: 'Technology',
    },
    instructors: [
      {
        name: 'Skooldio Team',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2F6bae3f47-a202-42ec-883f-1b5c459d401a%2FSkooldio_logo_crop.jpeg',
      },
    ],
  },
  {
    id: 'c079cf19-f89a-451e-9631-b24390bbaa85',
    title: 'DesignOps คืออะไร? ทักษะใหม่ของงาน UX/UI',
    SKUCategory: 'ONLINE_COURSE',
    duration: '1 ชั่วโมงครึ่ง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2Fc079cf19-f89a-451e-9631-b24390bbaa85%2Fdesignops.jpeg',
    ratings: 4.380952380952381,
    SKUCode: 'virtual-online-course-designops-live',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2Fc079cf19-f89a-451e-9631-b24390bbaa85%2Fdesignops.jpeg',
    subTitle: 'งานของ Designer แค่ออกแบบให้เสร็จแล้วก็จบจริงไหม?',
    courseCode: 'designops-live',
    permalink: 'designops-live',
    categories: {
      level: 'Beginner',
      topic: 'Design',
    },
    instructors: [
      {
        name: 'Skooldio Team',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2F6bae3f47-a202-42ec-883f-1b5c459d401a%2FSkooldio_logo_crop.jpeg',
      },
    ],
  },
  {
    id: '1f3dd34f-bc6f-4854-bc91-d9da45d44928',
    title: 'Behavioural Science in the Digital World',
    SKUCategory: 'ONLINE_COURSE',
    duration: '1 ชั่วโมงครึ่ง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F1f3dd34f-bc6f-4854-bc91-d9da45d44928%2Fbehavioural-sci.jpeg',
    ratings: 4.529411764705882,
    SKUCode: 'behavioural-science-in-digital-world-live',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F1f3dd34f-bc6f-4854-bc91-d9da45d44928%2Fbehavioural-sci.jpeg',
    subTitle:
      'วิดีโอบันทึกงาน Trick Me If You Can: Behavioural Science in the Digital World',
    courseCode: 'behavioural-science-in-digital-world-live',
    permalink: 'behavioural-science-in-digital-world-live',
    categories: {
      topic: 'Business',
    },
    instructors: [
      {
        name: 'Skooldio Team',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2F6bae3f47-a202-42ec-883f-1b5c459d401a%2FSkooldio_logo_crop.jpeg',
      },
    ],
  },
  {
    id: '1f42e778-c3a1-48fe-a6a4-c566c61a71ad',
    title: 'Product Managers: The Mutants Among Us',
    SKUCategory: 'ONLINE_COURSE',
    duration: '1 ชั่วโมงครึ่ง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F1f42e778-c3a1-48fe-a6a4-c566c61a71ad%2Fbecoming-pm.jpeg',
    ratings: 4.4,
    SKUCode: 'product-managers-mutants-among-us-live',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F1f42e778-c3a1-48fe-a6a4-c566c61a71ad%2Fbecoming-pm.jpeg',
    subTitle: 'วิดีโอบันทึกงาน Product Managers: The Mutants Among Us',
    courseCode: 'product-managers-mutants-among-us-live',
    permalink: 'product-managers-mutants-among-us-live',
    categories: {
      topic: 'Design',
    },
    instructors: [
      {
        name: 'Skooldio Team',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2F6bae3f47-a202-42ec-883f-1b5c459d401a%2FSkooldio_logo_crop.jpeg',
      },
    ],
  },
  {
    id: '2df5220a-2ec4-4bee-96b4-7f736f68bcf7',
    title: 'Skills of the New Workforce',
    SKUCategory: 'ONLINE_COURSE',
    duration: '1 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F2df5220a-2ec4-4bee-96b4-7f736f68bcf7%2Fnew-workforce.jpeg',
    ratings: 4.3428571428571425,
    SKUCode: 'skills-of-the-new-workforce-live',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F2df5220a-2ec4-4bee-96b4-7f736f68bcf7%2Fnew-workforce.jpeg',
    subTitle: 'ทักษะพนักงานยุคใหม่ ที่องค์กรไหนก็อยากได้',
    courseCode: 'skills-of-the-new-workforce-live',
    permalink: 'skills-of-the-new-workforce-live',
    categories: {
      topic: 'Skooldio Live!',
    },
    instructors: [
      {
        name: 'Skooldio Team',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2F6bae3f47-a202-42ec-883f-1b5c459d401a%2FSkooldio_logo_crop.jpeg',
      },
    ],
  },
  {
    id: '2e25b7d9-739a-4740-9f63-d949302cea96',
    title: 'Psychology in Marketing and UX',
    SKUCategory: 'ONLINE_COURSE',
    duration: '1 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F2e25b7d9-739a-4740-9f63-d949302cea96%2Fpsycho-marketing-ux-live-cover.png',
    ratings: 4.379310344827586,
    SKUCode: 'psycho-ux-marketing-live',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F2e25b7d9-739a-4740-9f63-d949302cea96%2Fpsycho-marketing-ux-live-cover.png',
    subTitle: 'วิดีโอบันทึกงาน Psychology in Marketing and UX',
    courseCode: 'psycho-ux-marketing-live',
    permalink: 'psycho-ux-marketing-live',
    categories: {
      topic: 'Skooldio Live!',
    },
    instructors: [
      {
        name: 'Skooldio Team',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2F6bae3f47-a202-42ec-883f-1b5c459d401a%2FSkooldio_logo_crop.jpeg',
      },
    ],
  },
  {
    id: '302032ad-9fd6-4bc4-9a71-9d4ac329b06e',
    title: 'Data-Driven Service Design',
    SKUCategory: 'ONLINE_COURSE',
    duration: '1 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F302032ad-9fd6-4bc4-9a71-9d4ac329b06e%2Fdata-driven-service.jpeg',
    ratings: 4.533333333333333,
    SKUCode: 'data-driven-service-design-live',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F302032ad-9fd6-4bc4-9a71-9d4ac329b06e%2Fdata-driven-service.jpeg',
    subTitle: 'ออกแบบ Service ให้โดนใจ แค่ใช้ข้อมูลให้เป็น',
    courseCode: 'data-driven-service-design-live',
    permalink: 'data-driven-service-design-live',
    categories: {
      topic: 'Data',
    },
    instructors: [
      {
        name: 'Skooldio Team',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2F6bae3f47-a202-42ec-883f-1b5c459d401a%2FSkooldio_logo_crop.jpeg',
      },
    ],
  },
  {
    id: '47fd3e67-fbe6-4b77-b7bb-b2a9f816b737',
    title: 'Skooldio x KBTG - Design Workflow',
    SKUCategory: 'ONLINE_COURSE',
    duration: '1.5 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F47fd3e67-fbe6-4b77-b7bb-b2a9f816b737%2Fdesign-workflow-live-cover.png',
    ratings: 4.25,
    SKUCode: 'design-workflow-meetup',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F47fd3e67-fbe6-4b77-b7bb-b2a9f816b737%2Fdesign-workflow-live-cover.png',
    subTitle: 'วิดีโอบันทึกงาน Skooldio x KBTG - Design Workflow meetup',
    courseCode: 'design-workflow-meetup',
    permalink: 'design-workflow-meetup',
    categories: {
      topic: 'Design',
    },
    instructors: [
      {
        name: 'Skooldio Team',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2F6bae3f47-a202-42ec-883f-1b5c459d401a%2FSkooldio_logo_crop.jpeg',
      },
    ],
  },
  {
    id: '6af30dae-9a76-4895-831b-9c7fe9ea4760',
    title: 'Beyond UI: Designing for Emotions',
    SKUCategory: 'ONLINE_COURSE',
    duration: '1 ชั่วโมงครึ่ง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F6af30dae-9a76-4895-831b-9c7fe9ea4760%2FBeyond-UI.jpeg',
    ratings: 4.354838709677419,
    SKUCode: 'designing-for-emotions-live',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F6af30dae-9a76-4895-831b-9c7fe9ea4760%2FBeyond-UI.jpeg',
    subTitle: 'วิดีโอบันทึกงาน Beyond UI: Designing for Emotions',
    courseCode: 'designing-for-emotions-live',
    permalink: 'designing-for-emotions-live',
    categories: {
      topic: 'Design',
    },
    instructors: [
      {
        name: 'Skooldio Team',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2F6bae3f47-a202-42ec-883f-1b5c459d401a%2FSkooldio_logo_crop.jpeg',
      },
    ],
  },
  {
    id: '6e128860-475f-43b1-943e-bcd431d49bc9',
    title: 'Are You an Infinite Learner?',
    SKUCategory: 'ONLINE_COURSE',
    duration: '1 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F6e128860-475f-43b1-943e-bcd431d49bc9%2Fare-you.jpeg',
    ratings: 4.6,
    SKUCode: 'are-you-an-infinite-learner-live',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F6e128860-475f-43b1-943e-bcd431d49bc9%2Fare-you.jpeg',
    subTitle: 'ผู้นำที่ดี ต้องไม่มีวันหยุดเรียนรู้',
    courseCode: 'are-you-an-infinite-learner-live',
    permalink: 'are-you-an-infinite-learner-live',
    categories: {
      topic: 'Business',
    },
    instructors: [
      {
        name: 'Skooldio Team',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2F6bae3f47-a202-42ec-883f-1b5c459d401a%2FSkooldio_logo_crop.jpeg',
      },
    ],
  },
  {
    id: '79faa1f0-556c-49d7-9646-fcc100b583ce',
    title: 'Tech Giants: How Culture Shapes The Way They Do Things',
    SKUCategory: 'ONLINE_COURSE',
    duration: '1 ชั่วโมงครึ่ง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F79faa1f0-556c-49d7-9646-fcc100b583ce%2Ftech-giant.jpeg',
    ratings: 4.7,
    SKUCode: 'how-culture-shape-live',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F79faa1f0-556c-49d7-9646-fcc100b583ce%2Ftech-giant.jpeg',
    subTitle:
      'วิดีโอบันทึกงาน Tech Giants: How Culture Shapes The Way They Do Things',
    courseCode: 'how-culture-shape-live',
    permalink: 'how-culture-shape-live',
    categories: {
      topic: 'Business',
    },
    instructors: [
      {
        name: 'Skooldio Team',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2F6bae3f47-a202-42ec-883f-1b5c459d401a%2FSkooldio_logo_crop.jpeg',
      },
    ],
  },
  {
    id: 'd5c5ffc3-79ed-4fac-ab17-9b821a28ef27',
    title: 'Product Management 101: Prioritization Under Uncertainty',
    SKUCategory: 'ONLINE_COURSE',
    duration: '1 ชั่วโมงครึ่ง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2Fd5c5ffc3-79ed-4fac-ab17-9b821a28ef27%2Fpm-prioritization.jpeg',
    ratings: 4.6,
    SKUCode: 'product-management-prioritization',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2Fd5c5ffc3-79ed-4fac-ab17-9b821a28ef27%2Fpm-prioritization.jpeg',
    subTitle: 'เรียงฟีเจอร์ตามความสำคัญ ในวันที่อะไรก็ไม่แน่นอน',
    courseCode: 'product-management-prioritization',
    permalink: 'product-management-prioritization',
    categories: {
      topic: 'Skooldio Live!',
    },
    instructors: [
      {
        name: 'Skooldio Team',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2F6bae3f47-a202-42ec-883f-1b5c459d401a%2FSkooldio_logo_crop.jpeg',
      },
    ],
  },
  {
    id: 'e34cca5b-6854-46e3-a580-8494c9a2caab',
    title: 'Marketing Communication in the post Covid-19 era',
    SKUCategory: 'ONLINE_COURSE',
    duration: '1 ชั่วโมงครึ่ง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2Fe34cca5b-6854-46e3-a580-8494c9a2caab%2Fafter-covid.jpeg',
    ratings: 4.444444444444445,
    SKUCode: 'marketing-communication-after-covid19-live',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2Fe34cca5b-6854-46e3-a580-8494c9a2caab%2Fafter-covid.jpeg',
    subTitle:
      'วิดีโอบันทึกงาน Marketing Communication in the post Covid-19 era',
    courseCode: 'marketing-communication-after-covid19-live',
    permalink: 'marketing-communication-after-covid19-live',
    categories: {
      topic: 'Skooldio Live!',
    },
    instructors: [
      {
        name: 'Skooldio Team',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2F6bae3f47-a202-42ec-883f-1b5c459d401a%2FSkooldio_logo_crop.jpeg',
      },
    ],
  },
  {
    id: 'b7382ecd-fe4c-46a6-870e-49e0674f6007',
    title: 'Beta Conference 2019',
    SKUCategory: 'ONLINE_COURSE',
    duration: '4 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2Fb7382ecd-fe4c-46a6-870e-49e0674f6007%2Fbeta-conf.png',
    ratings: 4.7,
    SKUCode: 'beta-conference-2019',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2Fb7382ecd-fe4c-46a6-870e-49e0674f6007%2Fbeta-conf.png',
    subTitle: 'วิดีโอบันทึกงาน Beta Conference 2019 by Skooldio',
    courseCode: 'beta-conference-2019',
    permalink: 'beta-conference-2019',
    categories: {
      topic: 'Technology',
      level: 'Beginner',
    },
    instructors: [
      {
        name: 'Skooldio Team',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2F6bae3f47-a202-42ec-883f-1b5c459d401a%2FSkooldio_logo_crop.jpeg',
      },
    ],
  },
  {
    id: '7f71e80a-0103-41fa-9664-d34298e90a4b',
    title: 'Data-Informed Design',
    SKUCategory: 'ONLINE_COURSE',
    duration: '1 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F7f71e80a-0103-41fa-9664-d34298e90a4b%2Fdata-informed-design.png',
    ratings: 4.456375838926174,
    SKUCode: 'data-informed-design',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F7f71e80a-0103-41fa-9664-d34298e90a4b%2Fdata-informed-design.png',
    subTitle: 'ออกแบบประสบการณ์ที่ดีสำหรับผู้ใช้งานโดยใช้ข้อมูล',
    courseCode: 'data-informed-design',
    permalink: 'data-informed-design',
    categories: {
      topic: 'Design',
      level: 'Beginner',
    },
    instructors: [
      {
        name: 'ดร. วิโรจน์ จิรพัฒนกุล',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2Fbef4fd8f-9a43-4b9b-8a40-f96d701e5136%2Fvirot2020.jpeg',
      },
    ],
  },
  {
    id: '572de1b8-791d-40d2-a84e-3b019420faa5',
    title: 'Intro to Deep Learning and TensorFlow',
    SKUCategory: 'ONLINE_COURSE',
    duration: '4 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F572de1b8-791d-40d2-a84e-3b019420faa5%2Ftensorflow-01-cover.png',
    ratings: 4.195121951219512,
    SKUCode: 'gde-tensorflow-01',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F572de1b8-791d-40d2-a84e-3b019420faa5%2Ftensorflow-01-cover.png',
    subTitle: 'Deep Learning with TensorFlow Workshop Series (Part 1 of 5)',
    courseCode: 'gde-tensorflow-01',
    permalink: 'gde-tensorflow-01',
    categories: {
      topic: 'Technology',
    },
    instructors: [
      {
        name: 'Google Developers Experts',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2F1017745b-43c8-49cf-bd59-7cefb2aab209%2Fgoogle-experts-logo.png',
      },
    ],
  },
  {
    id: '66928249-ba53-42fa-942f-4419862d5816',
    title: 'Deep Learning For Images',
    SKUCategory: 'ONLINE_COURSE',
    duration: '2 ชั่วโมง 45 นาที',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F66928249-ba53-42fa-942f-4419862d5816%2Ftensorflow-02-cover.png',
    ratings: 4.285714285714286,
    SKUCode: 'gde-tensorflow-02',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F66928249-ba53-42fa-942f-4419862d5816%2Ftensorflow-02-cover.png',
    subTitle: 'Deep Learning with TensorFlow Workshop Series (Part 2 of 5)',
    courseCode: 'gde-tensorflow-02',
    permalink: 'gde-tensorflow-02',
    categories: {
      topic: 'Technology',
    },
    instructors: [
      {
        name: 'Google Developers Experts',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2F1017745b-43c8-49cf-bd59-7cefb2aab209%2Fgoogle-experts-logo.png',
      },
    ],
  },
  {
    id: '104f6de1-19a6-4e90-8465-60415843a56b',
    title: 'Deep Learning For Text',
    SKUCategory: 'ONLINE_COURSE',
    duration: '3 ชั่วโมง 15 นาที',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F104f6de1-19a6-4e90-8465-60415843a56b%2Ftensorflow-03-cover.png',
    ratings: 4,
    SKUCode: 'gde-tensorflow-03',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F104f6de1-19a6-4e90-8465-60415843a56b%2Ftensorflow-03-cover.png',
    subTitle: 'Deep Learning with TensorFlow Workshop Series (Part 3 of 5)',
    courseCode: 'gde-tensorflow-03',
    permalink: 'gde-tensorflow-03',
    categories: {
      topic: 'Technology',
    },
    instructors: [
      {
        name: 'Google Developers Experts',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2F1017745b-43c8-49cf-bd59-7cefb2aab209%2Fgoogle-experts-logo.png',
      },
    ],
  },
  {
    id: '3641b7ae-8d18-400a-9038-14ed59f88ea3',
    title: 'Reinforcement Learning',
    SKUCategory: 'ONLINE_COURSE',
    duration: '2 ชั่วโมง 30 นาที',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F3641b7ae-8d18-400a-9038-14ed59f88ea3%2Ftensorflow-04-cover.png',
    ratings: 4.5,
    SKUCode: 'gde-tensorflow-04',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F3641b7ae-8d18-400a-9038-14ed59f88ea3%2Ftensorflow-04-cover.png',
    subTitle: 'Deep Learning with TensorFlow Workshop Series (Part 4 of 5)',
    courseCode: 'gde-tensorflow-04',
    permalink: 'gde-tensorflow-04',
    categories: {
      topic: 'Technology',
    },
    instructors: [
      {
        name: 'Google Developers Experts',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2F1017745b-43c8-49cf-bd59-7cefb2aab209%2Fgoogle-experts-logo.png',
      },
    ],
  },
  {
    id: '2977f606-cca9-4926-bb30-2db744117e88',
    title: 'Generative Models',
    SKUCategory: 'ONLINE_COURSE',
    duration: '2 ชั่วโมง',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F2977f606-cca9-4926-bb30-2db744117e88%2Ftensorflow-05-cover.png',
    ratings: 5,
    SKUCode: 'gde-tensorflow-05',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F2977f606-cca9-4926-bb30-2db744117e88%2Ftensorflow-05-cover.png',
    subTitle: 'Deep Learning with TensorFlow Workshop Series (Part 5 of 5)',
    courseCode: 'gde-tensorflow-05',
    permalink: 'gde-tensorflow-05',
    categories: {
      topic: 'Technology',
    },
    instructors: [
      {
        name: 'Google Developers Experts',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2F1017745b-43c8-49cf-bd59-7cefb2aab209%2Fgoogle-experts-logo.png',
      },
    ],
  },
  {
    id: '43ec41f3-f20e-4479-a42c-c8d1919e85e3',
    title: 'Data Scientist Career Roundtable',
    SKUCategory: 'ONLINE_COURSE',
    duration: '45 นาที',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F43ec41f3-f20e-4479-a42c-c8d1919e85e3%2Fdata-scientist-career.png',
    ratings: 4.271739130434782,
    SKUCode: 'data-scientist-career-roundtable',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2F43ec41f3-f20e-4479-a42c-c8d1919e85e3%2Fdata-scientist-career.png',
    subTitle: 'จับเข่าคุยกับสอง Data Scientist ในงาน Apollo Career Roundtable',
    courseCode: 'data-scientist-career-roundtable',
    permalink: 'data-scientist-career-roundtable',
    categories: {
      topic: 'Data',
      level: 'Beginner',
    },
    instructors: [
      {
        name: 'Apollo',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2F960fb68e-6b37-4df0-8e24-ae84f7fe9a9b%2Fapollo.png',
      },
    ],
  },
  {
    id: 'bcd937d1-8c2a-4653-8697-97547c636141',
    title: 'Introduction to Samsung Knox',
    SKUCategory: 'ONLINE_COURSE',
    duration: '1 ชั่วโมง 15 นาที',
    coverImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2Fbcd937d1-8c2a-4653-8697-97547c636141%2Fknox.jpeg',
    ratings: 4.666666666666667,
    SKUCode: 'samsung-knox',
    cardImageUrl:
      'https://public-assets.skooldio.com/storefront-sku%2Fbcd937d1-8c2a-4653-8697-97547c636141%2Fknox.jpeg',
    subTitle: 'เรียนรู้หลักการพัฒนาแอปพลิเคชันอย่างง่ายบน Samsung ให้ปลอดภัย',
    courseCode: 'samsung-knox',
    permalink: 'samsung-knox',
    categories: {
      topic: 'Technology',
      level: 'Intermediate',
    },
    instructors: [
      {
        name: 'สมเกียรติ กิจวงศ์วัฒนะ',
        profileImageUrl:
          'https://public-assets.skooldio.com/storefront-category%2F1a5935a3-3a4d-4b93-a925-1799a59daec7%2Fsomkiat.png',
      },
    ],
  },
]
