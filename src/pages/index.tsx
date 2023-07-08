import Image from 'next/image'

export default function Home() {
  return (
    <div className='h-screen w-full'>
      <div className="pb-8 px-[5px] relative bg-[#f6f6f6]">
        <div className="laptop:max-w-[1128px] px-[15px] pr-[15px] m-auto tablet:max-w-[720px]">
          <div className="flex mr-auto ml-auto flex-col-reverse items-center justify-between relative top-0 left-0 laptop:flex-row tablet:flex-row ">
            <div className="flex-1 mr-3 max-w-md">
              <a className="font-bold uppercase text-xs text-[#454f59] tracking-[1px]">
                <i></i>
                <span>TRANG CHỦ</span>
              </a>
              <h2 className="text-[24px] font-medium text-[#454f59] tracking-[1px] laptop:text-[48px] leading-tight uppercase mt-5 mb-5 tablet:text-[40px]">
                <span>
                  60S HIỂU
                  <br />
                  BẢO HIỂM
                </span>
              </h2>
              <span className="text-[#454f59] font-normal text-[16px] tablet:font-thin laptop:font-thin tracking-[1px]">
                <p className="mb-2">Nơi tổng hợp tất cả những câu hỏi thường gặp và các thuật
                  ngữ liên quan đến Bảo hiểm.
                </p>
                <p>
                  Chỉ <b>TRONG VÒNG 60 GIÂY</b> , bạn sẽ tìm được đáp
                  án cho vấn đề của mình. Khám phá ngay nhé!
                </p>
              </span>
            </div>
            <div className="relative flex-1 w-full h-f">
              <Image src='https://generali.vn/-/media/Images/Corpsite/60s/60s-hieu-bao-hiem-banner1.ashx' alt="panel" width={800} height={800} />
            </div>
          </div>
        </div>
      </div>
      <div className='py-8'>
        <div className=' desktop:max-w-3xl desktop:m-auto laptop:max-w-3xl laptop:m-auto tablet:max-w-2xl tablet:m-auto'>
          <div className='px-1 m-auto relative left-0 right-0 top-0 bottom-0 max-w-3xl'>
            <i className='absolute left-5 top-5 text-2xlbefore:content-["hello"] bg-slate-700' />
            <input className='h-14 text-slate-950 text-lg font-normal py-[10px] pr-[185px] pl-[60px] w-full 
            shadow-[inset 1px 1px 1px rgba(0,0,0,.05)] bg-[#f6f6f6] rounded border-none leading-3 focus:border-none focus:outline-none'
              placeholder='Bạn có thắc mắc về Bảo hiểm? Tìm ở đây nhé.' />
            <button className='bg-red-700 uppercase text-white py-2 px-10 h-10 whitespace-nowrap rounded absolute right-6 top-2'>Tìm kiếm</button>
          </div>
        </div>
      </div>
      <div className='py-10'>
        <div className='max-w-6xl px-3 m-auto'>
          <div className='px-4'>
            <div className='text-[#454f59] font-medium text-[14px] leading-8 m-0 laptop:text-[24px]'>Câu hỏi được quan tâm</div>
          </div>
        </div>
      </div>
    </div>
  )
}
