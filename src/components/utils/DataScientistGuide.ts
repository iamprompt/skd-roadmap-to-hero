import type { IGuide } from './DataAnalystGuide'
import { PROGRESS_STATUS } from './DataAnalystGuide'

export const DataScientistGuide: IGuide = {
  title: 'My Data Scientist Guide',
  certificatePath: '/static/pdf/certificate.pdf',
  courses: [
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
  ],
  progress: [
    {
      courseId: 'a09d4aa9-464b-4dbf-be0c-6cc4a6f6bbd7',
      percentComplete: 100,
      status: PROGRESS_STATUS.COMPLETED,
    },
    {
      courseId: '49c114c6-3bf5-4221-bba5-12638000ed71',
      percentComplete: 100,
      status: PROGRESS_STATUS.COMPLETED,
    },
    {
      courseId: '6d2d0f1b-9c7e-4f5d-8731-553ee88f62d7',
      percentComplete: 100,
      status: PROGRESS_STATUS.COMPLETED,
    },
    {
      courseId: '39c40c6a-0810-4e67-8cb7-ac2b9e9e0656',
      percentComplete: 100,
      status: PROGRESS_STATUS.COMPLETED,
    },
    {
      courseId: '3aefaed0-540b-4468-83f5-f993233feae5',
      percentComplete: 100,
      status: PROGRESS_STATUS.COMPLETED,
    },
  ],
  freeOutSources: [
    {
      title: 'SQL for Data Science',
      description:
        'เรียนรู้คำสั่งพื้นฐานของ SQL เพื่อใช้วิเคราะห์และจัดระเบียบข้อมูล',
      source: {
        displayName: 'Coursera',
        url: 'https://www.coursera.org/learn/sql-for-data-science',
      },
    },
    {
      title: 'Managing Big Data with MySQL',
      description: 'เรียนรู้วิธีการจัดการข้อมูลขนาดใหญ่โดยใช้ MySQL',
      source: {
        displayName: 'Coursera',
        url: 'https://www.coursera.org/learn/analytics-mysql',
      },
    },
    {
      title: 'Methods and Statistics in Social Sciences Specialization',
      description:
        'เรียนรู้การวิเคราะห์ข้อมูลแบบเข้มข้นด้วยภาษา R เพื่อการวิจัย',
      source: {
        displayName: 'Coursera',
        url: 'https://www.coursera.org/specializations/social-science',
      },
    },
  ],
  stepGuide: [
    {
      title: 'ทำความรู้จัก Data Scientist',
      steps: ['ดูรายละเอียดของสายอาชีพ', 'ฟังประสบการณ์ทำงานจริง'],
    },
    {
      title: 'ตาม Content Data Scientist',
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
