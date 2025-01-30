import Image from "next/image";

import nextjsLogo from "@lib/assets/nextjs_logo.svg";

import "./Header.scss";

export default function Header() {
  return (
    <header className="font-serif">
      <Image src={nextjsLogo} width={300} height={300} alt="nextjs logo" />
    </header>
  );
}
