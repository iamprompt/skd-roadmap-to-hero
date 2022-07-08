export enum SARALY_TYPE {
  NEW_GRAD = 'จบใหม่',
  EXP_1_5 = 'ประสบการณ์ 1-5 ปี',
  EXP_5 = 'ประสบการณ์ 5 ปีขึ้นไป',
}

enum SKILL_TYPE {
  HARD_SKILL,
  SOFT_SKILL,
}

interface ISkill {
  heading: string
  content: string
}

interface ICareer {
  id: string
  name: string
  displayName: string
  youtubeIntroVideoId: string
  roadmapPath: string
  description: string
  salary: Record<keyof typeof SARALY_TYPE, string>
  jobDescription: string[]
  skills: Record<keyof typeof SKILL_TYPE, ISkill[]>
}

export const DataCareer: ICareer[] = [
  {
    id: 'data-analyst',
    name: 'นักวิเคราะห์ข้อมูล (Data Analyst หรือ DA)',
    displayName: 'Data Analyst',
    youtubeIntroVideoId: 'SUTfmhPMZQw',
    roadmapPath: '/images/data-job/Data-Analyst-Roadmap.svg',
    description:
      'คือ ผู้นำข้อมูลจากหลายแหล่งในรูปแบบ Structured Data มาผ่าน Data Analysis Tools เพื่อสรุปข้อมูลเชิงลึกหา Business Insight หรือแนวโน้มที่ช่วยในการตัดสินใจหาทางเลือกกำหนดกลยุทธทางด้านธุรกิจ เช่น การลงทุน การลดต้นทุน ราคาขาย การรับพนักงาน การวางแผนการผลิต เป็นต้น เพื่อช่วยสร้างข้อได้เปรียบทางธุรกิจอย่างมีประสิทธิภาพ',
    salary: {
      NEW_GRAD: '3 หมื่น',
      EXP_1_5: '4-6 หมื่น',
      EXP_5: '6-9 หมื่น',
    },
    jobDescription: [
      'หาหรือเลือก Data Sources ที่เหมาะสมเพื่อใช้ในการวิเคราะห์ข้อมูล',
      'รวบรวมข้อมูลที่จะใช้ในการวิเคราะห์',
      'การจัดหาข้อมูลที่ขาดหายไป',
      'สร้าง Insight จากข้อมูล และระบุแนวโน้มที่เกิดขึ้นได้',
      'สร้าง รายงาน สร้าง Dashboard / Automated Dashboard สำหรับผู้บริหาร และ ทีมงาน',
      'สร้าง Data Visualization จากข้อมูลได้',
      'มีความเข้าใจในธุรกิจ และวิเคราะห์ข้อมูลเพื่อตอบโจทย์ในทางธุรกิจได้',
    ],
    skills: {
      HARD_SKILL: [
        {
          heading: 'เข้าใจเครื่องมือการตลาดดิจิทอล',
          content: 'เช่น Google Analytics, Google Tag Manager',
        },
        {
          heading: 'เข้าใจฐานข้อมูล',
          content: 'เช่น SQL Server, Oracle และ SAP',
        },
        {
          heading: 'เข้าใจสคริปต์และเว็บไซต์',
          content: 'เช่น json, xml, java script, html5',
        },
        {
          heading: 'เข้าใจกระบวนการ ETL',
          content: 'การใช้เครื่องมืออย่าง SSIS, Power Query',
        },
      ],
      SOFT_SKILL: [
        {
          heading: 'ทักษะการนำเสนอ',
          content: 'นำความคิดที่ซับซ้อน มาทำให้เข้าใจง่าย',
        },
        {
          heading: 'ทักษะการสื่อสาร',
          content: 'ให้ผู้อื่นเข้าใจในสารที่ต้องการสื่อออกไป',
        },
        {
          heading: 'ทักษะการวิเคราห์',
          content: 'การเข้าใจข้อมูล และความเป็นไปได้ของแนวโน้มที่เกิดขึ้น',
        },
        {
          heading: 'ทักษะการแก้ปัญหา',
          content: 'การนำเสนอทางออก และการแก้ปัญหาเฉพาะหน้า',
        },
      ],
    },
  },
  {
    id: 'data-scientist',
    name: 'นักวิทยาศาสตร์ข้อมูล (Data Scientist หรือ DS)',
    displayName: 'Data Scientist',
    youtubeIntroVideoId: '_2LsnuxZiQ0',
    roadmapPath: '/images/data-job/Data-Scientist-Roadmap.svg',
    description:
      'เป็นผู้นำเทคนิคต่าง ๆ ทั้ง Data Mining, เทคนิคเชิงสถิติ, Algorithms และ Machine Learning มาสร้างโมเดล (Model) เพื่อระบุแนวโน้มหรือ Pattern การทำนาย (Predictive Analytics) และหา Insight จากข้อมูล โดย Data Scientist จะนำผลลัพธ์มาใช้เพื่อการตัดสินใจทางธุรกิจ กำหนดกลยุทธ์ที่เหมาะสมให้กับองค์กร',
    salary: {
      NEW_GRAD: '3.5 หมื่น',
      EXP_1_5: '4-8 หมื่น',
      EXP_5: '8-9 หมื่น',
    },
    jobDescription: [
      'การรวบรวมข้อมูลที่มีโครงสร้าง (Structured Data) และไม่มีโครงสร้าง (Unstructured Data)',
      'การจัดระเบียบข้อมูลให้อยู่ในรูปแบบที่ใช้งานได้',
      'การสร้างแบบจำลองการคาดการณ์ (Predictive Models)',
      'การประมวลผลข้อมูล การทำความสะอาดข้อมูล และการตรวจสอบข้อมูล',
      'วิเคราะห์ข้อมูลสำหรับแนวโน้มและรูปแบบและค้นหาคำตอบสำหรับคำถามที่เฉพาะเจาะจง',
      'การตั้งค่าโครงสร้างพื้นฐานข้อมูล',
      'การสรุปผลข้อมูลและวิเคราะห์ข้อมูลเชิงลึกจากชุดข้อมูลพร้อมระบุแนวโน้มและรูปแบบของข้อมูลนั้น ๆ ได้',
      'จัดทำรายงานในรูปแบบ Dashboard สำหรับผู้บริหารและทีมงาน',
      'สร้าง Visualization จากข้อมูลได้ สร้างการนำเสนอที่น่าสนใจ',
    ],
    skills: {
      HARD_SKILL: [
        {
          heading: 'ทักษะด้านคณิตศาสตร์',
          content: 'ทั้ง Algebra, Probability, Calculus และ Statistic',
        },
        {
          heading: 'เข้าใจฐานข้อมูล',
          content: 'เช่น SQL Server, Oracle และ SAP',
        },
        {
          heading: 'เข้าใจสคริปต์และเว็บไซต์',
          content: 'เช่น json, xml, java script, html5',
        },
        {
          heading: 'การเขียนโปรแกรม',
          content: 'เช่น R, Python และ SQL',
        },
      ],
      SOFT_SKILL: [
        {
          heading: 'ทักษะการนำเสนอ',
          content: 'นำความคิดที่ซับซ้อน มาทำให้เข้าใจง่าย',
        },
        {
          heading: 'ทักษะการสื่อสาร',
          content: 'เพื่อให้สามารถทำงานกับเพื่อนร่วมทีมได้อย่างมีประสิทธิภาพ',
        },
        {
          heading: 'ทักษะการวิเคราห์',
          content:
            'เข้าใจข้อมูลและการทำงานของ Machine Learning เพื่อให้สอดคล้องกับผลลัพธ์',
        },
        {
          heading: 'ทักษะการแก้ปัญหา',
          content: 'การนำเสนอทางออก และการแก้ปัญหาเฉพาะหน้า',
        },
      ],
    },
  },
  {
    id: 'data-engineer',
    name: 'วิศวกรข้อมูล (Data Engineer หรือ DE)',
    displayName: 'Data Engineer',
    youtubeIntroVideoId: 'i_GFPKq_X54',
    roadmapPath: '/images/data-job/Data-Engineer-Roadmap.svg',
    description:
      'ทำหน้าที่สร้างชุดข้อมูลที่ง่ายต่อการวิเคราะห์ โดยปรับปรุงข้อมูล (Transform Data) ทำความสะอาดข้อมูล (Data Cleansing) สร้างความน่าเชื่อถือและคุณภาพของข้อมูลด้วยวิธีการต่าง ๆ โดยทำการรวมข้อมูลดิบจากแหล่งข้อมูลต่าง ๆ (Data Source) เพื่อสร้างชุดข้อมูลตามรูปแบบที่ตอบโจทย์ทางธุรกิจ อีกทั้งยังพัฒนาสถาปัตยกรรมที่ใช้ดึงข้อมูลและการแปลงข้อมูลต่าง ๆ และทดสอบเพื่อการสร้างแบบจำลองในการนำไปใช้ทำนาย คาดการณ์ (Forecast) ตอบโจทย์กับทางธุรกิจให้กับองค์กร',
    salary: {
      NEW_GRAD: '4 หมื่น',
      EXP_1_5: '5-8 หมื่น',
      EXP_5: '8-9 หมื่น',
    },
    jobDescription: [
      'รวมข้อมูลดิบจากแหล่งข้อมูลต่าง ๆ ',
      'การรวบรวมข้อมูลที่มีโครงสร้าง (Structured Data) และไม่มีโครงสร้าง (Unstructured Data)',
      'หาวิธีการปรับปรุงคุณภาพของข้อมูล และสร้างความน่าเชื่อถือของข้อมูล',
      'สร้างระบบข้อมูล และ Pipelines ของข้อมูล',
      'จัดเตรียมข้อมูลสำหรับการสร้างแบบจำลอง',
      'สร้างอัลกอริทึมและสร้างต้นแบบ',
      'ประเมินความต้องการและวัตถุประสงค์ทางธุรกิจ',
      'สร้างเครื่องมือและโปรแกรมในการวิเคราะห์',
    ],
    skills: {
      HARD_SKILL: [
        {
          heading: 'เข้าใจเครื่องมือ การตลาดดิจิทอล',
          content: 'เช่น Google Analytics, Google Tag Manager',
        },
        {
          heading: 'เข้าใจการออกแบบฐานข้อมูล',
          content: 'เช่น SQL Server',
        },
        {
          heading: 'เข้าใจสคริปต์และเว็บไซต์',
          content: 'เช่น json, xml, java script, html5',
        },
        {
          heading: 'เข้าใจกระบวนการ ETL',
          content: 'การใช้เครื่องมืออย่าง SSIS, Power Query',
        },
      ],
      SOFT_SKILL: [
        {
          heading: 'ทักษะการนำเสนอ',
          content: 'นำความคิดที่ซับซ้อน มาทำให้เข้าใจง่าย',
        },
        {
          heading: 'ทักษะการสื่อสาร',
          content:
            'เพื่อให้ผู้อื่นเข้าใจรูปแบบ การทำงานที่จัดทำขึ้น และนำไปใช้ได้ถูกต้อง',
        },
        {
          heading: 'มีความละเอียดรอบคอบ',
          content: 'เพื่อให้ข้อมูลที่นำมามีความผิดพลาดน้อยที่สุด',
        },
        {
          heading: 'ทักษะการแก้ปัญหา',
          content: 'การนำเสนอทางออก และการแก้ปัญหาเฉพาะหน้า',
        },
      ],
    },
  },
]
