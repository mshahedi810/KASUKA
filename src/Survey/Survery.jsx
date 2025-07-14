import React from 'react'
import {Smile, ClipboardMinus, Clock4, ShieldCheck, Key} from 'lucide-react'
import Options from './Options'


export default function Survery() {
   const datas = [
        {id:1, count:65, icon:Smile, desc:'مشتریان خوشحال خوشحالیم که از معمار چیزی دریافت کنیم.'},
        {id:2, count:34, icon:ClipboardMinus, desc:'پروژه ها برای بدست آوردن و زمانی که او کل کسانی را که از او تعریف می کنند رد می کند و آنها را حقیر می شمارد'},
        {id:3, count:98, icon:Clock4, desc:'سال ها تجربه یا اجازه دهید به دنبال نوعی مزیت باشد'},
        {id:4, count:58, icon:ShieldCheck, desc:'جوایز درد دردناک تر است در زمانی دیگر که هیچکس او را متهم نمی کند و هیچ وقت او را متهم نمی کند'}
    ]
  return (
    <div className='lg:flex w-10/12 justify-between mx-auto items-stretch mb-12'>
        <div className='lg:w-[48%] lg:flex w-full'>
          <div className='h-full w-full'>
            <img className='w-full object-cover' src={`${process.env.PUBLIC_URL}/photos/lap.jpg`} alt="" />
          </div>
          
        </div>
        <div className='lg:w-[48%] lg:flex w-full flex-col justify-between'>
        <div className='lg:flex lg:flex-col w-full justify-start text-justify mb-4'>
          <h1 className='font-bold text-2xl'>شایسته ترین لذت را به هر حال ارائه می دهد</h1>
          <p>خود درد ممکن است درد زیادی باشد ، اما دلیل اصلی آن درد است ، اما من به آن زمان می دهم تا مانند یک درد و درد بزرگ در آن فرو برود. درد مقصر است</p>

        </div>
        <div className='w-full flex flex-wrap gap-6'>
          {datas.map(({id, count, icon, desc}) => (
            <div className='lg:w-[48%] w-full'>
              <Options key={id} count={count} icon={icon} desc={desc} />
            </div>

          ))}
        </div>

        </div>
    </div>
  )
}
