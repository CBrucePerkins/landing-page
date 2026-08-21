import Image from "next/image";
import Logo from "@/public/assets/logo.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="flex flex-col items-center gap-6 bg-black text-white px-8 py-12 md:flex-row md:justify-between md:px-20 xl:px-44">
      <Image src={Logo} alt="MusiOS" className="cursor-pointer" />
      <div className="text-sm text-gray-300/85">
        © {year} MusiOS. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
