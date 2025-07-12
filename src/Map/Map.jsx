
import Registr from "./Registr"
export default function Map() {
    
    return (
        <div className="mb-8 w-10/12 scontainer mx-auto">
            <div className='flex flex-col text-right mr-24 mb-11'>
                <div className='flex items-center mb-4'>
                    <span className='flex gap-4 lg:px-6 xs:px-2 sm:px-3 md:px-4 items-center font-bold text-gray-600'>تیم</span>
                    <span className='w-40 h-[1px] bg-kasuka inline-block'></span>
                </div>
                <h1 className="font-bold text-3xl">با ما تماس بگیرید</h1>
            </div>
            <div className="mx-auto mt-10 rounded-xl overflow-hidden shadow-lg mb-10">
                
                    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d6555.725990324833!2d47.9002868626228!3d34.75904388650764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2s!4v1752004360576!5m2!1sen!2s"
                 className="w-full h-[450px] border-0 rounded-lg" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe>
                
                 
            </div>
            
                <Registr/>
            
            
        </div>
    )
}
