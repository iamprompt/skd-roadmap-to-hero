import { Icon } from '@iconify/react'
import FacebookF from '@iconify/icons-fa6-brands/facebook-f'
import FacebookMessenger from '@iconify/icons-fa6-brands/facebook-messenger'
import MediumM from '@iconify/icons-fa-brands/medium-m'
import Instagram from '@iconify/icons-fa6-brands/instagram'
import LinkedInIn from '@iconify/icons-fa6-brands/linkedin-in'
import TikTok from '@iconify/icons-fa6-brands/tiktok'
import YouTube from '@iconify/icons-fa6-brands/youtube'
import Line from '@iconify/icons-fa6-brands/line'

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white">
      <div className="mx-auto max-w-screen-lg px-5 py-8">
        <div className="grid grid-cols-4 gap-5">
          <div>
            <p className="mb-4 text-2xl font-medium">คอร์สของเรา</p>
            <ul className="space-y-3 font-light">
              <li>คอร์สออนไลน์</li>
              <li>เวิร์กชอป</li>
              <li>Bootcamp</li>
              <li>สำหรับองค์กร</li>
              <li>บทความ</li>
              <li>คำถามที่พบบ่อย (FAQs)</li>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-2xl font-medium">ร่วมงานกับเรา</p>
            <ul className="space-y-3 font-light">
              <li>ร่วมงานกับ Skooldio</li>
              <li>สอนกับเรา</li>
              <li>เกี่ยวกับเรา</li>
              <li>ติดต่อสอบถามเพิ่มเติม</li>
              <li>แจ้งปัญหาเกี่ยวกับระบบ</li>
              <li>ช่องทางการร้องเรียน</li>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-2xl font-medium">ติดต่อเรา</p>
            <div className="mb-8 inline-grid grid-cols-4 gap-x-6 gap-y-4">
              <a href="#">
                <Icon icon={FacebookF} className="h-[18px] w-[18px]" />
              </a>
              <a href="#">
                <Icon icon={FacebookMessenger} className="h-[18px] w-[18px]" />
              </a>
              <a href="#">
                <Icon icon={MediumM} className="h-[18px] w-[18px]" />
              </a>
              <a href="#">
                <Icon icon={Instagram} className="h-[18px] w-[18px]" />
              </a>
              <a href="#">
                <Icon icon={Line} className="h-[18px] w-[18px]" />
              </a>
              <a href="#">
                <Icon icon={LinkedInIn} className="h-[18px] w-[18px]" />
              </a>
              <a href="#">
                <Icon icon={TikTok} className="h-[18px] w-[18px]" />
              </a>
              <a href="#">
                <Icon icon={YouTube} className="h-[18px] w-[18px]" />
              </a>
            </div>
            <div>
              <p className="mb-3 text-sm font-light text-stone-400">
                ได้รับการรับรองจาก
              </p>
              <div className="flex justify-center rounded-md border bg-white">
                <div id="Certificate-banners">
                  <a
                    title="กรมพัฒนาธุรกิจการค้า Trustmarkthai"
                    href="https://www.trustmarkthai.com/callbackData/popup.php?data=0-32-5-0614112b47cef2ab943b1c9c371b83480019ad434ec7&amp;markID=firstmar"
                  >
                    <img
                      alt="กรมพัฒนาธุรกิจการค้า Trustmarkthai"
                      src="https://www.trustmarkthai.com/trust_banners/bns_registered.png"
                      className="h-12"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="mb-4 text-2xl font-medium">สำหรับการศึกษา</p>
            <ul className="space-y-3 font-light">
              <li>Skooldio App</li>
              <li>Tutorials</li>
              <li>Skillscore</li>
              <li>Shop</li>
            </ul>
          </div>
        </div>

        <ul className="mt-10 flex justify-center divide-x">
          <li className="px-5">Skooldio 2022</li>
          <li className="px-5">Privacy Policy</li>
          <li className="px-5">Terms and Conditions</li>
          <li className="px-5">Data Protection Policy</li>
          <li className="px-5">Cookie Policy</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
