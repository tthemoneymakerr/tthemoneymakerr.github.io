import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-primary">
      {/* Header */}
      <div className="px-8 pt-5 pb-1 flex justify-between items-center">
        <div className="font-bold text-3xl text-white">TheMoneyMaker</div>

        <div className="inline-block w-8 hover:opacity-70 hover:w-9">
          <div className=" h-1 bg-white mb-1" />
          <div className=" h-1 bg-white mb-1" />
          <div className=" h-1 bg-white mb-1" />
        </div>
      </div>

      {/* Content */}
      <div className="py-32 flex flex-col items-center">
        <div className="flex flex-col items-center mb-32 px-9">
          <div className="mb-9 text-6xl font-extrabold text-white text-center">Let's Work</div>
          <div className="text-3xl font-medium text-white text-center">We are Group of Amazing Developer in Viet Nam.</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-16 px-8 mb-32">
          <div className="w-full bg-red-500">
            <Image
              src='/imgs/avatar/avatar_kiet.jpg'
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className="w-full bg-red-500">
            <Image
              src='/imgs/avatar/avatar_kiet.jpg'
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className="w-full bg-red-500">
            <Image
              src='/imgs/avatar/avatar_kiet.jpg'
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className="w-full bg-red-500">
            <Image
              src='/imgs/avatar/avatar_kiet.jpg'
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>

        <div className="flex flex-col items-center mb-12 px-9">
          <div className="text-3xl font-medium text-white text-center">We will work together for your creative project.</div>
        </div>

        <div className="inline-block bg-white py-6 px-12 rounded cursor-pointer hover:bg-[#484747] hover:text-white text-2xl font-bold text-[#666666]">
          Portfolio
        </div>
      </div>

      {/* Footer */}
      <div></div>
    </div>
  );
}