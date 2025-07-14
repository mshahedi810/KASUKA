import { useEffect, useState } from "react"
import team from "./member"

export default function Team() {

    const [currentPage, setCurrentPage] = useState(1)
    const totalPage = team.length
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentPage((prevPage) => 
                prevPage === totalPage ? 1 : prevPage + 1
            );
        }, 3000);

        return() =>
            clearInterval(timer)
    })
    const member = team[currentPage - 1]

  return (
    <div className="bg-cover bg-center w-full py-20" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/photos/dark2.jpg)`}}>
        <div className="flex flex-col justify-center items-center">
            <img className="w-40 border-4 border-blue-500 object-cover h-40 rounded-full mb-5" src={`${process.env.PUBLIC_URL}/photos/${member.image}`} alt={member.name} />
            <h1 className="text-white font-bold text-[30px] mb-5">{member.name}</h1>
            <h2 className="text-white text-[25px] mb-5">{member.role}</h2>
            <p className="text-white text-[20px]">{member.bio}</p>
           <div className="flex justify-center w-full gap-4 mt-6">
            {team.map((_, index) => (
                
                    <span className={`w-8 h-8 rounded-full border ${currentPage === index + 1 ? 'bg-blue-500' : 'bg-white' }`}
                    onClick={() => setCurrentPage(index + 1)}></span>
                
                
            ))}
           </div>
        </div>
    </div>
  )
}
