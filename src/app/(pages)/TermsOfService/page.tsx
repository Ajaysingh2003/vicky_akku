export const dynamic = "force-dynamic";
import React from "react";

async function Page() {
  const lastUpdated = "April 2026";

  const terms = [
    {
      id: "01",
      category: "Usage",
      title: "Platform Usage Rules",
      description:
        "By accessing our platform, you agree to use our services only for lawful purposes. You must not misuse, copy, or distribute any content without permission.",
    },
    {
      id: "02",
      category: "Accounts",
      title: "User Responsibility",
      description:
        "You are responsible for maintaining the confidentiality of your account credentials. Any activity performed under your account is your responsibility.",
    },
    {
      id: "03",
      category: "Content",
      title: "Intellectual Property",
      description:
        "All tutorials, videos, and materials provided on this platform are owned by us and are protected by intellectual property laws. Unauthorized use is strictly prohibited.",
    },
    {
      id: "04",
      category: "Payments",
      title: "Fees & Transactions",
      description:
        "All payments made on the platform are final and must comply with our pricing and refund policies. We reserve the right to change pricing at any time.",
    },
    {
      id: "05",
      category: "Liability",
      title: "Limitation of Liability",
      description:
        "We are not responsible for any direct or indirect damages resulting from the use of our services, including technical issues or interruptions.",
    },
    {
      id: "06",
      category: "Updates",
      title: "Changes to Terms",
      description:
        "We may update these terms at any time. Continued use of the platform after updates constitutes your acceptance of the revised terms.",
    },
  ];

  return (
    <div className="flex items-center flex-col min-h-screen pb-24">
      {/* Header Section */}
      <div className="w-full flex flex-col items-center pt-6">
        <h1 className="font-passion-one py-4 max-w-xs md:max-w-full font-bold text-center text-[#C77F90] text-6xl md:text-8xl lg:text-9xl uppercase leading-none">
          Terms of Service
        </h1>
        <p className="text-slate-400 font-medium tracking-widest uppercase text-xs mb-12">
          Last Updated: {lastUpdated}
        </p>
      </div>

      {/* Container */}
      <div className="mx-auto bg-white rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-[92%] max-w-6xl overflow-hidden">
        
        {/* Intro */}
        <div className="bg-[#C77F90]/5 p-8 md:p-12 border-b border-slate-50">
          <p className="text-slate-600 text-lg md:text-xl max-w-3xl leading-relaxed italic">
            "By using Vicky Akku Dance Classes, you agree to follow our terms and conditions. These rules ensure a safe and fair experience for all users."
          </p>
        </div>

        {/* Terms Grid */}
        <div className="p-6 md:p-12 lg:p-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {terms.map((item) => (
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
        <div className="bg-slate-50 p-8 text-center border-t border-slate-100">
          <p className="text-slate-500 text-sm">
            Have questions about our terms? Contact us at:
          </p>
          <a
            href="mailto:support@vickyakku.com"
            className="text-[#C77F90] font-bold text-lg hover:underline transition-all mt-2 inline-block"
          >
            support@vickyakku.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default Page;