import { Linkedin, Instagram, Facebook, Twitter, ChevronLeft } from "lucide-react"
import Legal from "./Legal"

export default function Footer() {
  return (
    <>
    <div className='bg-neutral-800 flex flex-col lg:flex-row sm:pr-20 md:pr-16 xs:pr-14 justify-evenly mt-10 py-5'>
        <div className="mt-10 lg:flex lg:flex-col lg:pr-16">
            <div className='flex items-center'>
                <img className='h-24 w-24' src="/images/logo.png" alt="" />
                <h1 className='text-[25px] font-bold text-white'>KASUKA</h1>
            </div>
            <div className='flex flex-col gap-2 text-white text-right'>
                <span className='text-[15px] font-bold'>آدرس: تهران خیابان آزادی</span>
                <span className='text-[15px] font-bold'>تلفن: 09184570732</span>
                <span className='text-[15px] font-bold'>ایمیل: mshahedi811@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 transition duration-300 pt-5">
                <div className="w-10 h-10 transition-colors text-white cursor-pointer hover:text-black duration-300 bg-neutral-700 rounded-md flex items-center hover:bg-kasuka justify-center">
                    <Linkedin/>
                </div>
                <div className="w-10 h-10 transition-colors text-white cursor-pointer hover:text-black duration-300 bg-neutral-700 rounded-md flex items-center hover:bg-kasuka justify-center">
                    <Instagram/>
                </div>
                <div className="w-10 h-10 transition-colors text-white cursor-pointer hover:text-black duration-300 bg-neutral-700 rounded-md flex items-center hover:bg-kasuka justify-center">
                    <Facebook/>
                </div>
                <div className="w-10 h-10 transition-colors text-white cursor-pointer hover:text-black duration-300 bg-neutral-700 rounded-md flex items-center hover:bg-kasuka justify-center">
                    <Twitter/>
                </div>  
            </div>
        </div>
        <div className="flex flex-col text-white text-right gap-5 mt-10">
            <h1 className="font-bold">لینک های مفید</h1>
            <div className="flex text-[13px] font-bold items-center"><ChevronLeft className="text-kasuka w-5 h-5"/><span className="hover:text-kasuka cursor-pointer">خانه</span></div>
            <div className="flex text-[13px] font-bold items-center"><ChevronLeft className="text-kasuka w-5 h-5"/><span className="hover:text-kasuka cursor-pointer">درباره ما</span></div>
            <div className="flex text-[13px] font-bold items-center"><ChevronLeft className="text-kasuka w-5 h-5"/><span className="hover:text-kasuka cursor-pointer">خدمات</span></div>
            <div className="flex text-[13px] font-bold items-center"><ChevronLeft className="text-kasuka w-5 h-5"/><span className="hover:text-kasuka cursor-pointer">شرایط استفاده از خدمات</span></div>
            <div className="flex text-[13px] font-bold items-center"><ChevronLeft className="text-kasuka w-5 h-5"/><span className="hover:text-kasuka cursor-pointer">سیاست حفط حریم خصوصی</span></div>
        </div>
        <div>
        <div className="flex flex-col text-white text-right gap-5 mt-10">
            <h1 className="font-bold">خدمات ما</h1>
            <div className="flex text-[13px] font-bold items-center"><ChevronLeft className="text-kasuka w-5 h-5"/><span className="hover:text-kasuka cursor-pointer">طراحی وبسایت</span></div>
            <div className="flex text-[13px] font-bold items-center"><ChevronLeft className="text-kasuka w-5 h-5"/><span className="hover:text-kasuka cursor-pointer">توسعه وب</span></div>
            <div className="flex text-[13px] font-bold items-center"><ChevronLeft className="text-kasuka w-5 h-5"/><span className="hover:text-kasuka cursor-pointer">مدیریت تولید</span></div>
            <div className="flex text-[13px] font-bold items-center"><ChevronLeft className="text-kasuka w-5 h-5"/><span className="hover:text-kasuka cursor-pointer">بازاریابی</span></div>
            <div className="flex text-[13px] font-bold items-center"><ChevronLeft className="text-kasuka w-5 h-5"/><span className="hover:text-kasuka cursor-pointer">طراحی گرافیک</span></div>
        </div>
        </div>
        <div className="flex flex-col text-white text-right gap-7 mt-10">
            <h1 className="font-bold">خبرنامه ما</h1>
            <p className="text-[13px] font-bold">خبرنامه ما را دنبال کنید و از اخبار روز تکنولوژی با خبر باشید.</p>
            <div className="w-10/12 lg:w-96 h-10 rounded-lg bg-white relative flex">
                <div className="bg-kasuka h-full absolute left-0 w-24 rounded-l-lg flex items-center justify-center text-black">دنبال کردن</div>
                <div className="flex h-9 w-4/6 pr-4 justify-center items-center">
                    <input className="rounded-lg hover:border hover:border-black w-full pr-4 flex items-center justify-center" type="text" />
                </div>
            </div>
        </div>
       
    </div> 
<Legal/>
    </>
    
    
  )
}
