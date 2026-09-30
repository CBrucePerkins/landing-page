"use client";

import { FaArrowRight } from "react-icons/fa";
import { useWaitlist } from "./WaitlistContext";

const AnnouncementBar = () => {
  const { openWaitlist } = useWaitlist();

  return (
    <div
      onClick={openWaitlist}
      className="bg-black text-white p-3 text-sm text-center cursor-pointer"
    >
      <span className="hidden sm:inline pr-2 opacity-80">
        The all-in-one platform for music teachers to manage students,
        lessons, practice, and payments — all in one place.
      </span>
      <span className="pr-1">
        Get started for free <FaArrowRight className="inline h-2 w-2" />
      </span>
    </div>
  );
};

export default AnnouncementBar;
