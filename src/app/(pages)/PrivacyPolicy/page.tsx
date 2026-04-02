export const dynamic = "force-dynamic";
import React from "react";

async function Page() {
  const lastUpdated = "April 2026";

  const policies = [
    {
      id: "01",
      category: "Collection",
      title: "Information We Collect",
      description:
        "We may collect personal information such as your name, phone number, email address, and usage data when you interact with our platform.",
    },
    {
      id: "02",
      category: "Usage",
      title: "How We Use Your Data",
      description:
        "Your information is used to provide services, improve user experience, process transactions, and communicate important updates.",
    },
    {
      id: "03",
      category: "Security",
      title: "Data Protection",
      description:
        "We implement industry-standard security measures to protect your data from unauthorized access, misuse, or disclosure.",
    },
    {
      id: "04",
      category: "Sharing",
      title: "Third-Party Services",
      description:
        "We do not sell your personal information. Data may be shared with trusted third-party services only when necessary to provide our services.",
    },
    {
      id: "05",
      category: "Cookies",
      title: "Cookies & Tracking",
      description:
        "We may use cookies and similar technologies to enhance your experience, analyze usage, and improve our platform.",
    },
    {
      id: "06",
      category: "Updates",
      title: "Policy Changes",
      description:
        "We may update this Privacy Policy from time to time. Continued use of our platform after updates means you accept the revised policy.",
    },
  ];

  return (
    <div className="flex items-center flex-col min-h-screen pb-24">
      {/* Header */}
      <div className="w-full flex flex-col items-center pt-6">
        <h1 className="font-passion-one py-4 max-w-xs md:max-w-full font-bold text-center text-[#C77F90] text-6xl md:text-8xl lg:text-9xl uppercase leading-none">
          Privacy Policy
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
            "We value your privacy and are committed to protecting your personal information. This policy explains how we handle your data responsibly."
          </p>
        </div>

        {/* Grid */}
        <div className="p-6 md:p-12 lg:p-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {policies.map((item) => (
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
            Have questions about your data? Contact us at:
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