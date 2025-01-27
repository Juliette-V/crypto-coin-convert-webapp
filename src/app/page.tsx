import Image from "next/image";

export default function Home() {
  return (
      <>
        <div className="flex justify-center w-full px-8 py-14 bg-[#022136] text-white">
          <div className="container flex justify-between gap-5">
            <div className="flex flex-col">          
              <h1 className="text-4xl max-w-[28rem] mb-6 font-semibold">Online P2P platform for virtual assets trading</h1>
              <p className="max-w-[24rem] font-light">Crypto Coin Convert provides exchange of fiat currencies for cryptocurrencies and vice versa via partners virtual assets exchange platform (i.e. Binance, OKX, Bybit etc.)</p>
            </div>
            <div className=" relative w-64 h-64">
              <Image alt='' objectFit="contain" fill src={'/Designer.jpeg'}/>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-[#0d284a] w-full text-white items-center py-14  px-6">
            <h3 className=" text-2xl mb-6">Have Questions?</h3>
            <p className=" mb-6 text-slate-300" >Contact our specialists for move comprehensive advice.</p>
            <p className=" mb-4 text-slate-300">Phone: <a href="tel:+380731636640">+380 (73) 163 66 40</a></p>
            <p className="text-slate-300">Email: <a href= "cybercoinconvert@gmail.com">cybercoinconvert@gmail.com</a></p>
        </div>
      </>
  );
}
