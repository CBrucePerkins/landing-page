import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/logo.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="flex flex-col items-center gap-6 bg-black text-white px-8 py-12 md:flex-row md:justify-between md:px-20 xl:px-44">
      <Image src={Logo} alt="MusiOS" className="cursor-pointer" />
      <div className="flex items-center gap-6 text-sm text-gray-300/85">
        <Link href="/support" className="hover:text-white">
          Support
        </Link>
        <Link href="/privacy" className="hover:text-white">
          Privacy
        </Link>
        <Link href="/terms" className="hover:text-white">
          Terms
        </Link>
      </div>
      <div className="text-sm text-gray-300/85">
        © {year} Perkins Consult ApS. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
