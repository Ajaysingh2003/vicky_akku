"use client";
export const dynamic = "force-dynamic";

import Link from "next/link";
import React from "react";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

async function Page() {
  const completedAt = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const details = [
    {
      id: "01",
      category: "Success",
      title: "Payment Confirmed",
      description:
        "Your payment has been processed successfully. Thank you for your purchase.",
    },
    {
      id: "02",
      category: "Access",
      title: "Purchase Available",
      description:
        "Your purchased content has been added to your account and is ready to access anytime.",
    },
    {
      id: "03",
      category: "Receipt",
      title: "Order Receipt",
      description:
        "A confirmation email and payment receipt will be sent to your registered email address shortly.",
    },
    {
      id: "04",
      category: "Security",
      title: "Secure Transaction",
      description:
        "Your payment was completed through our secure payment infrastructure with encrypted processing.",
    },
    {
      id: "05",
      category: "Support",
      title: "Need Help?",
      description:
        "If you experience any issues accessing your purchase, our support team is here to help.",
    },
    {
      id: "06",
      category: "Enjoy",
      title: "Start Learning",
      description:
        "Everything is ready. You can now explore your purchased books, courses, or digital content.",
    },
  ];



   const router = useRouter();

   const handleBrowsePurchase = () => {
     router.push("/profile");
   }

  return (
    <div className="flex flex-col items-center min-h-screen pb-24">
      {/* Header */}
      <div className="w-full flex flex-col items-center pt-8">
        <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mb-6">
          <CheckCircle2 className="w-14 h-14 text-green-600" />
        </div>

        <h1 className="font-borscha py-4 max-w-xs md:max-w-full font-bold text-center text-[#C77F90] text-6xl md:text-8xl lg:text-9xl capitalize leading-none">
          Payment Complete
        </h1>

        <p className="text-slate-400 font-medium tracking-widest uppercase text-xs mb-12">
          Completed on {completedAt}
        </p>
      </div>

      {/* Container */}
      <div className="mx-auto bg-white rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-[92%] max-w-6xl overflow-hidden">
        {/* Intro */}
        <div className="bg-[#C77F90]/5 p-8 md:p-12 border-b border-slate-50">
          <p className="text-slate-600 text-lg md:text-xl max-w-3xl leading-relaxed italic">
            "Your payment was successful. Thank you for choosing us. Your
            purchase is now available in your library."
          </p>
        </div>

        {/* Details */}
        <div className="p-6 md:p-12 lg:p-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {details.map((item) => (
            <div key={item.id} className="group relative">
              <span className="text-6xl font-bold text-slate-50 absolute -top-4 -left-2 z-0 group-hover:text-[#C77F90]/10 transition-colors">
                {item.id}
              </span>

              <div className="relative z-10">
                <span className="text-[#C77F90] font-bold text-xs uppercase tracking-widest mb-2 block">
                  {item.category}
                </span>

                <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-4 tracking-tight">
                  {item.title}
                </h3>

                <p className="text-slate-500 leading-relaxed font-light text-base md:text-lg">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 p-10 border-t border-slate-100 flex flex-col items-center justify-center">
          <Button onClick={handleBrowsePurchase} className=" rounded-full cursor-pointer py-6 text-md px-10 md:max-w-56 max-w-full">
            Browse Purchase
          </Button>

          <p className="mt-6 text-slate-500 text-sm text-center">
            Need assistance with your order?
          </p>

          <a
            href="mailto:support@vickyakku.com"
            className="text-[#C77F90] font-bold text-lg hover:underline mt-2"
          >
            support@vickyakku.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default Page;
