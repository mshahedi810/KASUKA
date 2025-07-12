import { useState } from "react"
import { Plus } from "lucide-react"

export default function Products() {

    const products = [
        {name:'tablet1', price:45, category:'تبلت', img:'/images/tab1.jpg'},
        {name:'tablet2', price:54, category:'تبلت', img:'/images/tab3.png'},
        {name:'tablet3', price:61, category:'تبلت', img:'/images/tab4.jpg'},
        {name:'tablet4', price:32, category:'تبلت', img:'/images/tab5.jpg'},
        {name:'laptop1', price:120, category:'لبتاب', img:'/images/laptop1.jpeg'},
        {name:'laptop2', price:243, category:'لبتاب', img:'/images/laptop2.jpg'},
        {name:'laptop3', price:200, category:'لبتاب', img:'/images/laptop3.jpg'},
        {name:'laptop4', price:180, category:'لبتاب', img:'/images/laptop4.jpg'},
        {name:'mobile1', price:56, category:'موبایل', img:'/images/mobile1.png'},
        {name:'mobile2', price:76, category:'موبایل', img:'/images/mobile2.jpg'},
        {name:'mobile3', price:40, category:'موبایل', img:'/images/mobile3.jpg'},
        {name:'mobile4', price:90, category:'موبایل', img:'/images/mobile5.jpg'},
    ]
    const categories = ['همه', ...new
        Set(products.map(p => 
            p.category))]

    const [selectedCategory, setSelectedCategory] = useState('همه')

    const filteredProducts = 
    selectedCategory === 'همه' 
    ? products : 
    products.filter(p => p.category === selectedCategory)

    console.log(filteredProducts)
  return (
    <div className="mb-8 w-10/12 mx-auto">
      <div className='flex flex-col text-right mr-24 mb-11'>
        <div className='flex items-center mb-4'>
          <span className='flex items-center gap-4 px-2 font-bold text-gray-600'>
            محصولات
          </span>
          <span className='w-40 h-[1px] bg-kasuka inline-block'></span>
        </div>
        <h1 className='font-bold text-3xl'> محصولات ما را بررسی کنید.</h1>
      </div>
      <div>
        <ul className="flex justify-center">
          {categories.map(cat => 
            <li key={cat} onClick={() => setSelectedCategory(cat)} className={`py-3 px-4 mx-3 text-[17px] hover:bg-amber-700 rounded hover:cursor-pointer
          ${selectedCategory === cat ? 'bg-amber-700 text-white' : ''}`}>{cat}</li>
          )}
        </ul>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {filteredProducts.map(p =>
        <div className="relative group overflow-hidden rounded shadow">
           <img width={300} height={300} className="w-full h-64 object-cover transition duration-300
           group-hover:opacity-100 group-hover:scale-105 group-hover:brightness-75" alt={p.name} src={p.img} />
           <div className="flex justify-between items-end absolute text-white opacity-0 left-0 right-0
            bottom-0 p-3 h-3 group-hover:opacity-100 transition duration-300">
            <h2 className="font-bold">{p.name}</h2>
            <p>{p.price}$</p>
            <Plus className="bg-white text-black rounded-full p-1 w-7 h-7" />
           </div>
        </div>
           )}
      </div>
    </div>
  )
}
