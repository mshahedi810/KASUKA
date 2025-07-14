import {Store, ChartColumnBig, CalendarMinus2, PaintRoller, Database} from "lucide-react"
export default function HeaderMiddle() {
  return (
    <div style={{backgroundImage:`url(${process.env.PUBLIC_URL}/photos/dark.jpg)`}} className="h-full bg-cover overflow-hidden">
        <h1 className="text-white text-[clamp(2rem,5vw,4rem)] font-extrabold mt-32">
            راه حل های قدرتمند دیجیتال با
        </h1>
        <h1 className="text-kasuka text-[clamp(2rem,5vw,4rem)] font-bold">
            KASUKA
        </h1>
        <span style={{wordSpacing:'5px'}} className="text-white font-bold text-[clamp(1rem,5vw,2rem)]">
            ما تیمی از بازاریابان با استعداد دیجیتال هستیم
        </span>
        <div className="lg:flex w-full lg:flex-nowrap mb-6 justify-center space-y-4 items-center mt-16">
            <div className="lg:w-[170px] sm:w-11/12 h-40 md:w-5/6 border border-solid-2 mx-10 border-gray-700 shadow-lg bor flex flex-col
             justify-center items-center py-5 px-3">
                <Store className="text-kasuka w-8 h-8 mb-3"/>
                <h3 className="text-white text-[20px] font-bold">متن نمایشی</h3>
            </div>
            <div className="lg:w-[170px] sm:w-11/12 h-40 md:w-5/6 border border-solid-2 mx-10 border-gray-700 shadow-lg bor flex flex-col
             justify-center items-center py-5 px-3">
                <ChartColumnBig className="text-kasuka w-8 h-8 mb-3"/>
                <h3 className="text-white text-[20px] font-bold">نمودار کیفی</h3>
            </div>
            <div className="lg:w-[170px] sm:w-11/12 h-40 md:w-5/6 border border-solid-2 mx-10 border-gray-700 shadow-lg bor flex flex-col
             justify-center items-center py-5 px-3">
                <CalendarMinus2 className="text-kasuka w-8 h-8 mb-3"/>
                <h3 className="text-white text-[20px] font-bold">نمونه کارها</h3>
            </div>
            <div className="lg:w-[170px] sm:w-11/12 h-40 md:w-5/6 border border-solid-2 mx-10 border-gray-700 shadow-lg bor flex flex-col
             justify-center items-center py-5 px-3">
                <PaintRoller className="text-kasuka w-8 h-8 mb-3"/>
                <h3 className="text-white text-[20px] font-bold">عملکردهای پایانی</h3>
            </div>
            <div className="lg:w-[170px] sm:w-11/12 h-40 md:w-5/6 border border-solid-2 mx-10 border-gray-700 shadow-lg bor flex flex-col
             justify-center items-center py-5 px-3">
                <Database className="text-kasuka w-8 h-8 mb-3"/>
                <h3 className="text-white text-[20px] font-bold">اطلاعات ذخیره شده</h3>
            </div>
        </div>
    </div>
  )
}
