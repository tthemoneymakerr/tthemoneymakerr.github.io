"use client"

import { Raleway } from "next/font/google";
import './globals.css';
import { SOCIAL_NETWORKS, ROUTES } from "./constans";
import {  useState } from "react";
import Link from 'next/link';
import { usePathname } from "next/navigation";

const raleway = Raleway({
  subsets: ['latin'],
  display: "swap"
});

export default function RootLayout({ children }) {
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();

  const onShowMenu = () => {
    setShowMenu(true);
  }

  const onCloseMenu = () => {
    setShowMenu(false);
  }

  return (
    <html lang="en" className={raleway.className}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </head>
      <body style={styles.body} className="bg-primary">
        <div>
          <div>
            {/* Header */}
            <div className="px-8 pt-5 pb-1 flex justify-between items-center">
              <div className="font-bold text-3xl text-white">TheMoneyMaker</div>

              <div className="inline-block w-8 hover:opacity-70 hover:w-9" onClick={onShowMenu}>
                <div className=" h-1 bg-white mb-1" />
                <div className=" h-1 bg-white mb-1" />
                <div className=" h-1 bg-white mb-1" />
              </div>
            </div>

            {/* Content */}
            {children}

            {/* Footer */}
            <div className="flex justify-center py-9">
              {SOCIAL_NETWORKS.map(item => {
                return (
                  <div className={`text-3xl text-white ${!item.isLastIndex && 'mr-11'}`} key={item.id}>
                    <i className={item.iconClassName} />
                  </div>
                )
              })}
            </div>
          </div>
          <div className={`fixed ${showMenu ? 'left-0 opacity-100' : 'left-full opacity-0'} top-0 w-screen h-screen bg-primary duration-1000 flex flex-col justify-center items-center`}>
            <div onClick={onCloseMenu} className={`${showMenu ? 'block' : 'hidden'} fixed top-6 right-10 text-4xl text-white hover:rotate-90 duration-200 cursor-pointer hover:opacity-80`}>
              <i className="fa fa-close" />
            </div>

            <div className="text-6xl font-extrabold text-white mb-16">Menu</div>
            {ROUTES.map(item => {
              return (
                <Link onClick={onCloseMenu} key={item.id} href={item.route} className={`mb-9 text-white font text-3xl font-medium ${pathname === item.route ? 'underline text-opacity-50' : ''}`}>{item.name}</Link>
              )
            })}
          </div>
        </div>
      </body>
    </html >
  );
}

const styles = {
  body: {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
  }
}
