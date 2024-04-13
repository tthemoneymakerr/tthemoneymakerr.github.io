import Image from 'next/image';
import { TEAM_MEMBERS } from './constans';
import Link from 'next/link';

// http://preview.themeforest.net/item/bleurant-creative-team-and-portfolio-html-template/full_screen_preview/20904237?_ga=2.195309800.557983375.1712743228-1431022156.1712743228

export default function Home() {
  return (
    <div className="py-32 flex flex-col items-center">
      <div className="flex flex-col items-center mb-32 px-9">
        <div className="mb-9 text-6xl font-extrabold text-white text-center">Let's Work</div>
        <div className="text-3xl font-medium text-white text-center">We are Group of Amazing Developer in Viet Nam.</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-16 px-8 mb-32">
        {TEAM_MEMBERS.map(item => {
          return (
            <div className="group w-full bg-red-500 relative" key={item.id}>
              <Image
                src={item.imagePath}
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
              <div className="group-hover:flex hidden absolute top-0 bottom-0 left-0 right-0 bg-primary border-4 border-white/50 flex-col justify-center items-center">
                <div className="text-3xl font-bold text-white mb-4">{item.name}</div>
                <div className="text-2xl font-medium text-white">{item.position}</div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="flex flex-col items-center mb-12 px-9">
        <div className="text-3xl font-medium text-white text-center">We will work together for your creative project.</div>
      </div>

      <Link href='/portfolio' className="inline-block bg-white py-6 px-12 rounded cursor-pointer hover:bg-[#484747] hover:text-white text-2xl font-bold text-[#666666]">
        Portfolio
      </Link>
    </div>
  );
}