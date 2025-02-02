import Image from "next/image";

import nextjsIcon from "@lib/assets/nextjs_icon.svg";

import "./style.scss";

export default function Footer() {
  return (
    <footer className="">
      <p className="text-white text-sm m-1 antialiased">Built with Next.js</p>
      <Image src={nextjsIcon} width={40} height={40} alt="nextjs icon" />
    </footer>
  );
}
