import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function HeaderTop() {
    const [open, setOpen] = useState(false)
  return (
    <div className='bg-black_overlay flex py-3 justify-evenly fixed top-0 w-full z-50 left-0'>
        <div className='flex items-center'>
            <img className='w-[45px] h-[45px]' src="../logo1.png" alt="" />
            <h1 className='text-white text-3xl font-bold'>KASUKA</h1>
        </div>
        <div className='flex items-center text-[19px] cursor-pointer'>
            <ul className='lg:flex hidden space-x-reverse space-x-6 font-bold font-iran text-white'>
                <li className='hover:text-kasuka'>خانه</li>
                <li className='hover:text-kasuka'>درباره ما</li>
                <li className='hover:text-kasuka'>خدمات</li>
                <li className='hover:text-kasuka'>نمونه کارها</li>
                <li className='hover:text-kasuka'>تیم</li>
                <li className='relative group'>
                    <span className='cursor-pointer hover:text-kasuka'>لیست کشویی ></span>
                    <ul className='absolute right-0 hidden group-hover:block bg-white
                     text-black mt-0 w-40 shadow-lg text-right rounded'>
                        <li className='py-2 px-4 cursor-pointer hover:bg-gray-200'>لیست کشویی1</li>
                        <li className='py-2 px-4 cursor-pointer hover:bg-gray-200'>لیست کشویی2</li>
                        <li className='py-2 px-4 cursor-pointer hover:bg-gray-200 relative group/submenu'>
                            <span className='hover:bg-gray-200'>لیست عمیق></span>
                            <ul className='absolute group-hover/submenu:block top-0 right-full hidden
                            w-52 bg-white text-black shadow-lg z-50 rounded-lg'>
                                <li className='px-4 py-2 hover:bg-gray-200'>لیست کشویی عمیق1</li>
                                <li className='px-4 py-2 hover:bg-gray-200'>لیست کشویی عمیق2</li>
                                <li className='px-4 py-2 hover:bg-gray-200'>لیست کشویی عمیق3</li>
                                <li className='px-4 py-2 hover:bg-gray-200'>لیست کشویی عمیق4</li>
                                <li className='px-4 py-2 hover:bg-gray-200'>لیست کشویی عمیق5</li>
                            </ul>
                        </li>
                        <li className='py-2 px-4 cursor-pointer hover:bg-gray-200'>لیست کشویی3</li>
                        <li className='py-2 px-4 cursor-pointer hover:bg-gray-200'>لیست کشویی4</li>
                    </ul>
                </li>
                <li className='hover:bg-gray-200'>تماس با ما</li>
            </ul>

            <div className="lg:hidden">
                <button onClick={() => setOpen(!open)}>
                    {open ? <X size={28} /> : <Menu className="text-white" size={28} />}
                </button>
            </div>
        </div>

        {open && (
            <>
            <div onClick={() => setOpen(false)} className="bg-black bg-opacity-40 fixed inset-0 z-40 backdrop-blur-sm">
            </div>

            <div className="h-full flex flex-col top-0 right-0 w-64 z-50 shadow-lg fixed bg-white p-5">
                <button onClick={() => {setOpen(false)}} className="text-gray-700 absolute top-4 right-4 mb-6 hover:text-black">
                    <X size={28}/>
                </button>

            <ul className='right-5 mt-12 lg:hidden text-right font-bold font-iran w-full text-black space-y-4'>
                <li className='hover:text-kasuka'>خانه</li>
                <li className='hover:text-kasuka'>درباره ما</li>
                <li className='hover:text-kasuka'>خدمات</li>
                <li className='hover:text-kasuka'>نمونه کارها</li>
                <li className='hover:text-kasuka'>تیم</li>
                <li className='relative group'>
                    <span className='cursor-pointer hover:text-kasuka'>لیست کشویی ></span>
                    <ul className='absolute right-0 hidden group-hover:block bg-white
                     text-black mt-0 w-40 shadow-lg text-right rounded'>
                        <li className='py-2 px-4 cursor-pointer hover:bg-gray-200'>لیست کشویی1</li>
                        <li className='py-2 px-4 cursor-pointer hover:bg-gray-200'>لیست کشویی2</li>
                        <li className='py-2 px-4 cursor-pointer hover:bg-gray-200 relative group/submenu'>
                            <span className='hover:bg-gray-200'>لیست عمیق></span>
                            <ul className='absolute group-hover/submenu:block top-0 right-full hidden
                            w-52 bg-white text-black shadow-lg z-50 rounded-lg'>
                                <li className='px-4 py-2 hover:bg-gray-200'>لیست کشویی عمیق1</li>
                                <li className='px-4 py-2 hover:bg-gray-200'>لیست کشویی عمیق2</li>
                                <li className='px-4 py-2 hover:bg-gray-200'>لیست کشویی عمیق3</li>
                                <li className='px-4 py-2 hover:bg-gray-200'>لیست کشویی عمیق4</li>
                                <li className='px-4 py-2 hover:bg-gray-200'>لیست کشویی عمیق5</li>
                            </ul>
                        </li>
                        <li className='py-2 px-4 cursor-pointer hover:bg-gray-200'>لیست کشویی3</li>
                        <li className='py-2 px-4 cursor-pointer hover:bg-gray-200'>لیست کشویی4</li>
                    </ul>
                </li>
                <li className='hover:bg-gray-200'>تماس با ما</li>
            </ul>

            </div>
            
            </>
        )}

        <div className='flex items-center'>
            <a className='py-2 px-6 rounded-lg 
            border-solid cursor-pointer hover:bg-kasuka border-kasuka text-white
            font-iran duration-500 transition-colors font-bold border-[2px]' href="#">شروع</a>
        </div>
    </div>
  )
}
