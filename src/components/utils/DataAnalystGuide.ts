import type { ICourse } from './Courses'
import type { IStepGuide } from './DataCareer'

export enum PROGRESS_STATUS {
  NOT_PURCHASED = 'NOT_PURCHASED',
  PURCHASED = 'PURCHASED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
}

export interface IProgress {
  courseId: string
  percentComplete: number
  status: PROGRESS_STATUS
}

export interface ISource {
  title: string
  description: string
  source: {
    displayName: string
    url: string
  }
}

export interface IGuide {
  title: string
  courses: ICourse[]
  progress: IProgress[]
  freeOutSources: ISource[]
  certificatePath?: string
  stepGuide: IStepGuide[]
}

export const DataAnalystGuide: IGuide = {
  title: 'My Data Analyst Guide',
  certificatePath: '/static/pdf/certificate.pdf',
  courses: [
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
      subTitle:
        'ฝึกวิเคราะห์ข้อมูลหา Insights ไปต่อยอดธุรกิจ ด้วย Google Sheets',
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
  ],
  progress: [
    {
      courseId: '49c114c6-3bf5-4221-bba5-12638000ed71',
      percentComplete: 100,
      status: PROGRESS_STATUS.COMPLETED,
    },
    {
      courseId: '39c40c6a-0810-4e67-8cb7-ac2b9e9e0656',
      percentComplete: 76,
      status: PROGRESS_STATUS.IN_PROGRESS,
    },
    {
      courseId: '5c6a9d4e-d1c8-48fd-9571-578645ead59d',
      percentComplete: 0,
      status: PROGRESS_STATUS.NOT_PURCHASED,
    },
    {
      courseId: 'c31472b1-c9c4-417e-984d-cd0cd13bf3ea',
      percentComplete: 0,
      status: PROGRESS_STATUS.NOT_PURCHASED,
    },
    {
      courseId: '87ed6d56-5524-4f98-8183-6002b8a6160c',
      percentComplete: 100,
      status: PROGRESS_STATUS.COMPLETED,
    },
  ],
  freeOutSources: [
    {
      title: 'Intro to Programming 2021',
      description: 'เหมาะสำหรับผู้ไม่มีพื้นฐานการเขียนโปรแกรมมาก่อน',
      source: {
        displayName: 'DataRockie',
        url: 'https://datarockie.com/intro-programming/',
      },
    },
    {
      title: 'Python for Everybody',
      description:
        'เรียนรู้พื้นฐานภาษา Python เพื่อใช้ต่อยอดในการวิเคราะห์ข้อมูล',
      source: {
        displayName: 'Coursera',
        url: 'https://www.coursera.org/specializations/python',
      },
    },
    {
      title: 'Data Analysis with Python',
      description:
        'เรียนรู้ Jupyter Notebook และ Modules ต่าง ๆ  ใน Python ที่สามารถนำมาใช้วิเคราะห์ข้อมูล',
      source: {
        displayName: 'freeCodeCamp',
        url: 'https://www.freecodecamp.org/learn/data-analysis-with-python/',
      },
    },
  ],
  stepGuide: [
    {
      title: 'ทำความรู้จัก Data Analyst',
      steps: ['ดูรายละเอียดของสายอาชีพ', 'ฟังประสบการณ์ทำงานจริง'],
    },
    {
      title: 'ตาม Content Data Analyst',
      steps: ['ดู Video / ฟัง Podcast', 'อ่านบทความ', 'ติดตามเพจ/กลุ่ม'],
    },
    {
      title: 'อัปสกิลให้พร้อม',
      steps: [
        'จัดเวลาในการเรียนอย่างมีวินัย',
        'หาข้อมูลจาก Outsources อื่น ๆ',
        'เรียนตามลำดับ Roadmap',
      ],
    },
    {
      title: 'เตรียมสมัครงาน',
      steps: [
        'ทำ Skill testing หลังเรียนจบ',
        'รวบรวม Certificate',
        'เตรียม Portfolio / Resume',
        'ฝึกซ้อมสัมภาษณ์',
      ],
    },
  ],
}
