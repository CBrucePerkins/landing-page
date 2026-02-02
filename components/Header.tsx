import Image from "next/image";
import Logo from "@/public/assets/logo.png";
import { FaBars } from "react-icons/fa";
import Button from "./Button";

interface HeaderProps {
  onOpenWaitlist: () => void;
}

const Header = ({ onOpenWaitlist }: HeaderProps) => {
  return (
    <header className="flex justify-between items-center px-6 py-4 backdrop-blur-md sticky top-0 z-20 bg-gradient-to-r from-[#E0E7FD] to-[#FDFEFF] shadow-md">
      <Image src={Logo} alt="Logo" className="cursor-pointer" />
      <FaBars className="block md:hidden" />
      <nav className="hidden md:block">
        <ul className="flex gap-6 items-center">
          <li><a href="#hero">Home</a></li>
          <li><a href="#product-showcase">Features</a></li>
          <li><a href="#product-card">Getting Started</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <Button
            text="Sign Up For Waiting List"
            onClick={onOpenWaitlist}
          />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
