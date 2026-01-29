"use client";

import { IoMdCheckmark } from "react-icons/io";

const Pricing = () => {
  return (
    <div className="mb-8">
      {/* === Product Summary Section === */}
      <div className="flex flex-col items-center font-medium mt-16 mb-12 px-12 mx-auto max-w-[700px]">
        <div className="border-2 w-fit p-0.5 px-3 text-sm rounded-xl border-slate-300/80">
          Simple pricing, powerful results
        </div>

        <div className="text-3xl md:text-4xl lg:text-5xl py-6 font-bold tracking-tighter text-center bg-gradient-to-b from-black to-[#002499] text-transparent bg-clip-text">
          Built for music teachers — from solo tutors to full schools
        </div>

        <div className="text-center text-lg mb-8 md:text-xl text-gray-700">
          Whether you’re managing a few students or running a full studio,
          MusiOS helps you organize lessons, track practice, and get paid — all
          in one easy-to-use platform. Start free and scale as your studio grows.
        </div>
      </div>

      {/* === Pricing Cards === */}
      <div className="flex flex-col lg:flex-row items-center lg:items-end justify-center pb-20 gap-8">
        {/* === Free Tier === */}
        <div className="shadow-xl border-gray-100 border-2 rounded-2xl p-8 bg-white">
          <div className="font-bold text-gray-500">Free</div>
          <div className="py-8">
            <span className="font-extrabold text-5xl">$0</span>
            <span className="font-semibold text-gray-600">/month</span>
          </div>
          <button className="text-white mb-8 bg-black py-1.5 w-full rounded-lg cursor-pointer">
            Get started for free
          </button>
          <div className="flex flex-col gap-4 text-gray-800">
            <div>
              <IoMdCheckmark className="inline mr-2" /> Up to 4 students
            </div>
            <div>
              <IoMdCheckmark className="inline mr-2" /> 100 MB of file storage
            </div>
            <div>
              <IoMdCheckmark className="inline mr-2" /> Student & class scheduler
            </div>
            <div>
              <IoMdCheckmark className="inline mr-2" /> Practice sheets for students
            </div>
            <div>
              <IoMdCheckmark className="inline mr-2" /> Unlimited free trial
            </div>
          </div>
        </div>

        {/* === Standard Tier === */}
        <div className="shadow-2xl border-2 rounded-2xl p-8 bg-black text-white">
          <div className="flex justify-between items-center">
            <div className="font-bold text-gray-400">Standard</div>
            <div className="border-2 w-fit p-0.5 px-3 text-xs rounded-xl border-slate-300/20 bg-gradient-to-r from-pink-500 via-lime-600 to-sky-400 text-transparent bg-clip-text font-bold tracking-tighter">
              Most Popular
            </div>
          </div>
          <div className="py-8">
            <span className="font-extrabold text-5xl">$12</span>
            <span className="font-semibold text-gray-400">/month</span>
          </div>
          <div className="text-gray-400 mb-4 text-sm">or $100 billed yearly</div>
          <button className="text-black font-medium mb-8 bg-white py-1.5 w-full rounded-lg cursor-pointer">
            Start Standard Plan
          </button>
          <div className="flex flex-col gap-4">
            <div>
              <IoMdCheckmark className="inline mr-2" /> Up to 30 students
            </div>
            <div>
              <IoMdCheckmark className="inline mr-2" /> 10 GB of file storage
            </div>
            <div>
              <IoMdCheckmark className="inline mr-2" /> Student & class scheduler
            </div>
            <div>
              <IoMdCheckmark className="inline mr-2" /> Practice sheets & tracking
            </div>
            <div>
              <IoMdCheckmark className="inline mr-2" /> Integrated student payments (Stripe)
            </div>
            <div>
              <IoMdCheckmark className="inline mr-2" /> E-mail and SMS message engine
            </div>
          </div>
        </div>

        {/* === Pro Tier === */}
        <div className="shadow-xl border-gray-100 border-2 rounded-2xl p-8 bg-white">
          <div className="font-bold text-gray-500">Pro</div>
          <div className="py-8">
            <span className="font-extrabold text-5xl">$19</span>
            <span className="font-semibold text-gray-600">/month</span>
          </div>
          <div className="text-gray-600 mb-4 text-sm">or $175 billed yearly</div>
          <button className="text-white mb-8 bg-black py-1.5 w-full rounded-lg cursor-pointer">
            Go Pro
          </button>
          <div className="flex flex-col gap-4 text-gray-800">
            <div>
              <IoMdCheckmark className="inline mr-2" /> Up to 100 students
            </div>
            <div>
              <IoMdCheckmark className="inline mr-2" /> 50 GB of file storage
            </div>
            <div>
              <IoMdCheckmark className="inline mr-2" /> Student & class scheduler
            </div>
            <div>
              <IoMdCheckmark className="inline mr-2" /> Practice sheets & tracking
            </div>
            <div>
              <IoMdCheckmark className="inline mr-2" /> Integrated student payments (Stripe)
            </div>
            <div>
              <IoMdCheckmark className="inline mr-2" /> E-mail and SMS message engine
            </div>
            <div>
              <IoMdCheckmark className="inline mr-2" /> Priority support
            </div>
          </div>
        </div>

        {/* === School Administrator Tier === */}
        <div className="shadow-xl border-gray-100 border-2 rounded-2xl p-8 bg-gray-100 opacity-70">
          <div className="font-bold text-gray-500">School Administrator</div>
          <div className="py-8">
            <span className="font-extrabold text-3xl text-gray-400">Coming soon</span>
          </div>
          <button
            disabled
            className="text-white mb-8 bg-gray-400 py-1.5 w-full rounded-lg cursor-not-allowed"
          >
            Coming Soon
          </button>
          <div className="flex flex-col gap-4 text-gray-500">
            <div>
              <IoMdCheckmark className="inline mr-2" /> Manage multiple teachers
            </div>
            <div>
              <IoMdCheckmark className="inline mr-2" /> Multi-classroom support
            </div>
            <div>
              <IoMdCheckmark className="inline mr-2" /> Centralized billing
            </div>
            <div>
              <IoMdCheckmark className="inline mr-2" /> Advanced analytics
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
