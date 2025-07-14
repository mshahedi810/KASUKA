import {BookText, Box, photos, ShieldHalf} from 'lucide-react'

export default function Services() {
  return (
    <div className='lg:flex-row flex-col w-10/12 mx-auto flex space-y-6 items-center my-24'>
        <div className='lg:w-1/2 w-5/6 space-y-6 px-4'>
            <img src={`${process.env.PUBLIC_URL}/photos/service.jpg`} alt="" />
        </div>
        <div className='lg:w-1/2 w-5/6 space-y-6 px-4'>
            <div className='flex'>
                <div ><BookText className='ml-3 text-kasuka' size={45}/></div>
                <div>
                    <h1 className='text-right font-bold text-gray-900 mb-3 mt-0'>تبلیغات</h1>
                    <p className='text-justify'>
                        تبلیغات روش و تکنیک‌هایی است که برای جلب توجه به یک محصول یا خدمات به کار می‌رود.
                    </p>
                </div>
            </div>

            <div className='flex'>
                <div className='ml-3'><Box className='ml-3 text-kasuka' size={45}/></div>
                <div>
                    <h1 className='text-right font-bold text-gray-900 mb-3'>آموزش</h1>
                    <p className='text-justify'>
                        سازمان علمی و آموزشی کاسوکا، بزرگ‌ترین پلتفرم آموزش آنلاین ایران است که بیش از یک دهه فعالیت دارد.
                    </p>
                </div> 
            </div>

            <div className='flex'>
                <div className='ml-3'><photos className='ml-3 text-kasuka' size={45}/></div>
                <div>
                    <h1 className='text-right font-bold text-gray-900 mb-3'>پشتیبانی</h1>
                    <p className='text-justify'>
                        با پشتیبانی لحظه ای از مشتریان و پاسخگویی هوشمندانه، برای فروش بیشتر محصولات و خدمات خود ، از رقبا جلو بزنید.
                    </p>
                </div>
            </div>

            <div className='flex'>
                <div className='ml-3'><ShieldHalf className='ml-3 text-kasuka' size={45}/></div>
                <div>
                    <h1 className='text-right font-bold text-gray-900 mb-3'>طراحی</h1>
                    <p className='text-justify'>
                        طراحی به دانش ایجاد یک طرح از تصویری ذهنی، خیالی یا واقع‌گرایانه گفته می‌شود.
                    </p>  
                </div>
            </div>
        </div>
    </div>
  )
}
