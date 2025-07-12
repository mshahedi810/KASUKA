
export default function Options({count, icon: Icon, desc}) {
   
  return (
    <div className="mb-10 flex flex-col ">
        <h1 className="flex justify-start mb-3 font-bold text-[20px]"><Icon className="w-8 h-8 text-kasuka ml-2" />{count}</h1>
        <p className="text-justify">{desc}</p>
    </div>
  )
}
