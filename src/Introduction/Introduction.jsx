import { CheckCheck } from 'lucide-react'

export default function Introduction() {
    return (
        <div className='flex lg:items-stretch w-10/12 mx-auto mt-10 lg:flex-row flex-col-reverse min-h-[400px] mb-20'>
            <div className='w-full h-full px-14 lg:w-1/2'>
                <h1 className='font-bold text-gray-900 text-right text-[30px]'>شرکت دیجیتال کاسوکا</h1>
                <div className='flex justify-start align-middle flex-col h-full leading-9'>
                    <p className='bm-4 text-justify mb-4'>
                        شرکت دیجیتال مارکتینگ نوآد به عنوان شرکتی پیشرو در صنعت دیجیتال مارکتینگ ایران در تلاش است تا با بهره گیری از دانش فنی روز و ارایه راهکارهای نوین بازاریابی و برندینگ، با پیشرفت کسب و کارهای داخلی نقش مهمی در شکوفایی اقتصادی ایران ایفا نماید و با تثبیت نام نوآد به عنوان تخصصی ترین برند دیجیتال مارکتینگ در ایران و گسترش نام آن در بازارهای جهانی به صادرات خدمات مبتنی بر تکنولوژی های نوین گام بردارد. نوآد پیشرفت خود در طول یک دهه فعالیت را مرهون شفافیت، انسجام و پایبندی به نتایج پیش بینی شده مشتریان خود می داند. سرمایه گذاری روی تکنولوژی های نوین، کیفیت و نوآوری، پایبندی به تعهدات، رضایتمندی و وفاداری مشتریان، نیروی انسانی متمرکز و پویا از ارزش های ذاتی نوآد می باشند.
                    </p>
                    
                    <div className='flex items-center gap-3 mb-2 text-justify'><CheckCheck className='text-kasuka w-5 h-5'/><p className='text-right'>۱۰ سال تجربه ارایه خدمات تخصصی دیجیتال مارکتینگ و راهکارهای نوین بازاریابی</p></div>
                    <div className='flex items-center gap-3 mb-2 text-justify'><CheckCheck className='text-kasuka w-5 h-5 shrink-0 mt-1'/><p className='leading-relaxed text-right'>تمرکز ما در تمامی استراتژی های اجرایی معطوف به دیجیتال برندینگ و همسو کردن استراتژی های دیجیتال مارکتینگ با دیگر فعالیت های برندینگ و بازاریابی شما می باشد.</p></div>
                    <div className='flex items-center gap-3 mb-2 text-justify'><CheckCheck className='text-kasuka w-5 h-5'/><p className='text-right'>برای دریافت آخرین اخبار، گرایش ها و رویداد های دیجیتال مارکتینگ ثبت نام کنید</p></div>
                    <span className='mt-4 text-justify'>خدمات نوآد در جهت یکپارچه سازی تمامی فعالیت های یک کسب و کار از مرحله ورود به بازار، ساخت، گسترش و ایجاد تصویری یکپاچه از برند، دیجیتال مارکتینگ، افزایش مزیت رقابتی و سهم بازار تا مراحل پس از فروش و ایجاد وفاداری در مشتریان یک برند ارایه می گردد.</span>
                </div>
            </div>
            <div className='w-full flex lg:w-1/2'>
               <img className='w-full object-cover flex-1' src={`${process.env.PUBLIC_URL}/photos/introduction.jpg`}/> 
            </div>
        </div>
    )
}
