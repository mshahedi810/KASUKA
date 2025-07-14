import team from "../Team/member"
import { Linkedin, Instagram, Facebook, Twitter } from "lucide-react"

export default function Introducing() {
    const teamMember = team
  return (
    <div className='w-10/12 flex flex-col mx-auto my-10'>
        <div className='flex flex-col text-right mr-24 mb-11'>
            <div className='flex items-center mb-4'>
                <span className='flex items-center gap-4 px-2 font-bold text-gray-600'>تیم</span>
                <span className='w-40 h-[1px] bg-kasuka inline-block'></span>
            </div>
            <h1 className='text-3xl font-bold'>تیم ما را بررسی کنید.</h1>
        </div>
        <div className="flex w-full justify-around items-center flex-wrap">
            {teamMember.map(team => (
                <div key={team.id} className="w-full group relative sm:w-full md:w-1/2 lg:w-1/4 xl:w-1/6 
                 text-right shadow-lg hover:shadow-2xl transition duration-300 pb-7 rounded-lg overflow-hidden">
                    <img className="w-full mb-6" src={`${process.env.PUBLIC_URL}/photos/${team.image}`} alt="" />
                    <div className="flex group-hover:opacity-100 opacity-0 transition duration-300 absolute justify-center gap-4
                    sm:bottom-36 md:bottom-36 xs:bottom-36 left-0 right-0">
                        <Linkedin className="bg-neutral-300 cursor-pointer rounded-lg hover:bg-kasuka hover:text-white text-black
                        w-9 h-9 p-2" />
                        <Instagram className="bg-neutral-300 cursor-pointer rounded-lg hover:bg-kasuka hover:text-white text-black
                        w-9 h-9 p-2" />
                        <Facebook className="bg-neutral-300 cursor-pointer rounded-lg hover:bg-kasuka hover:text-white text-black
                        w-9 h-9 p-2" />
                        <Twitter className="bg-neutral-300 cursor-pointer rounded-lg hover:bg-kasuka hover:text-white text-black
                        w-9 h-9 p-2" />
                    </div>
                    <h2 className="font-bold mb-3 mt-10 text-center">{team.name}</h2>
                    <span className="text-zinc-500 text-[15px] block text-center">{team.role}</span>
                </div>
            ))}
        </div>
    </div>
  )
}
