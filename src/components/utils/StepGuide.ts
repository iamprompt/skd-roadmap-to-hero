interface IStepGuide {
  title: string
  steps: string[]
}

export const StepGuides: IStepGuide[] = [
  {
    title: 'ทำความรู้จักสายอาชีพ',
    steps: ['ดูรายละเอียดของสายอาชีพ', 'ฟังประสบการณ์ทำงานจริง'],
  },
  {
    title: 'ตาม Content',
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
]
