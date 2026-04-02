export const dynamic = "force-dynamic";
import React from "react";

async function Page() {
  const lastUpdated = "April 2026";

  const policies = [
    {
      id: "01",
      category: "Digital Tutorials",
      title: "Video Streaming & Downloads",
      description:
        "Due to the nature of digital products, all sales of online dance tutorials and recorded workshops are final. Once access is granted to your account dashboard, we cannot provide a refund as the content is deemed 'consumed'.",
    },
    {
      id: "02",
      category: "Workshops",
      title: "Live City-Wise Classes",
      description:
        "Cancellations made 48 hours or more in advance of the workshop start time will receive a 100% refund (minus a 5% processing fee). Cancellations made between 24-48 hours will receive a credit note for future classes. No refunds are issued for 'no-shows' or cancellations within 24 hours.",
    },
    {
      id: "03",
      category: "Technical Issues",
      title: "Access & Playback Errors",
      description:
        "If a technical glitch on our platform prevents you from viewing your purchased content for more than 48 hours, and our support team cannot resolve it, you are eligible for a pro-rata refund for that specific content piece.",
    },
    {
      id: "04",
      category: "Subscriptions",
      title: "Monthly & Yearly Plans",
      description:
        "You may cancel your subscription at any time. Your access will continue until the end of your current billing cycle. We do not offer partial refunds for the remaining days in a month once the billing has occurred.",
    },
  ];

  return (
    <div className="flex items-center flex-col min-h-screen  pb-24">
      {/* Header Section */}
      <div className="w-full flex flex-col items-center pt-6">
        <h1 className="font-passion-one py-4 max-w-xs md:max-w-full font-bold text-center text-[#C77F90] text-6xl md:text-8xl lg:text-9xl uppercase leading-none">
          Refund Policy
        </h1>
        <p className="text-slate-400 font-medium tracking-widest uppercase text-xs mb-12">
          Last Updated: {lastUpdated}
        </p>
      </div>

      {/* Policy Container */}
      <div className="mx-auto bg-white bg-white rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-[92%] max-w-6xl overflow-hidden">
        {/* Intro Banner */}
        <div className="bg-[#C77F90]/5 p-8 md:p-12 border-b border-slate-50">
          <p className="text-slate-600 text-lg md:text-xl max-w-3xl leading-relaxed italic">
            "At Vicky Akku Dance Classes, we strive to provide the highest
            quality dance education. Our refund policy is designed to be fair to
            both our hard-working instructors and our dedicated students."
          </p>
        </div>

        {/* Policy Grid */}
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

        {/* Support Footer */}
        <div className="bg-slate-50 p-8 text-center border-t border-slate-100">
          <p className="text-slate-500 text-sm">
            Have a specific concern regarding a payment? Contact our support
            team at:
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
