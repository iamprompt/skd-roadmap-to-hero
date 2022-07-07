const Hero = () => {
  return (
    <section className="bg-[#F9F9F9] py-24">
      <div className="mx-auto flex max-w-screen-xl items-center px-6">
        <div className="w-3/4">
          <p className="mb-3 text-6xl font-semibold">Data</p>
          <p className="text-xl">
            พัฒนาทักษะการจัดการข้อมูล (Data Manipulation) การวิเคราะห์ข้อมูล
            (Data Analysis)
            <br /> การแสดงผลข้อมูลด้วยภาพ (Data Visualization) ไปจนถึงการใช้
            Machine Learning
            <br />
            เพื่อเตรียมพร้อมรับมือการเติบโตอย่างมหาศาลของข้อมูลในยุคดิจิทัล
          </p>
        </div>
        <div>
          <img src="/images/hero/data.svg" alt="Data" />
        </div>
      </div>
    </section>
  )
}
export default Hero
