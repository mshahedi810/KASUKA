import { LocationEdit, Mail, Smartphone } from 'lucide-react'

export default function Registr() {
  return (
    <div className='w-full flex flex-col lg:flex-row gap-10 px-4 justify-between mx-auto'>
        <div className='flex flex-col lg:w-1/3 md:w-5/6 w-full gap-y-8'>
            <div className='flex items-center gap-x-3'>
                    <LocationEdit width={40} height={40} className='bg-kasuka rounded-lg text-white'/>
                <div className='flex flex-col text-right'>
                    <span className='font-bold text-[23px]'>مکان:</span>
                    <span className='text-gray-600'>تهران خیابان آزادی</span>
                </div>
            </div>

             <div className='flex items-center gap-x-3'>
                    <Mail width={40} height={40} className='bg-kasuka rounded-lg text-white'/>
                <div className='flex flex-col text-right'>
                    <span className='font-bold text-[23px]'>ایمیل:</span>
                    <span className='text-gray-600'>mshahedi811@gmail.com</span>
                </div>
            </div>

             <div className='flex items-center gap-x-3'>
                    <Smartphone width={40} height={40} className='bg-kasuka rounded-lg text-white'/>
                <div className='flex flex-col text-right'>
                    <span className='font-bold text-[23px]'>شماره تماس:</span>
                    <span className='text-gray-600'>09184570732</span>
                </div>
            </div>
        </div>
        
          <form className='flex flex-col gap-4 flex-1 w-full lg:w-4/6 justify-center'>
            <div className='flex lg:flex-row flex-col gap-4 w-full'>
              <input id='name' className='w-full lg:w-1/2 border border-gray-900 p-2 focus:border-kasuka
              placeholder-shown:font-bold placeholder-shown:text-slate-950 rounded-md' placeholder='نام:' type="text" />

              <input id='email' className='w-full lg:w-1/2 border border-gray-900 p-2 focus:border-kasuka
              placeholder-shown:font-bold placeholder-shown:text-slate-950 rounded-md' type="text" placeholder='ایمیل:' />
            </div>


            <input className='w-full border border-gray-900 p-2 focus:border-kasuka
             placeholder-shown:font-bold placeholder-shown:text-slate-950 rounded-md' placeholder='عنوان:' id='title' type="text" />
             <div className='h-40 overflow-hidden'>
              <textarea className='w-full border border-gray-900 p-2 h-36 focus:border-kasuka
              placeholder-shown:font-bold placeholder-shown:text-slate-950 rounded-md' placeholder='پیام:' name="comment" id=""></textarea>
             </div>
            
            
          </form>
        
    </div>
  )
}
