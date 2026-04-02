export const dynamic = "force-dynamic";
import React from "react";

async function CancellationPolicy() {
  const lastUpdated = "April 2026";

  const policies = [
    {
      id: "01",
      category: "Workshops",
      title: "Live Class Cancellations",
      description:
        "Cancellations made 48 hours or more before the scheduled workshop are eligible for a full refund (excluding processing fees). Cancellations within 24-48 hours will receive a credit note for future use.",
    },
    {
      id: "02",
      category: "Late Requests",
      title: "Short Notice Cancellations",
      description:
        "Cancellations made less than 24 hours before the scheduled session are not eligible for refunds or credits.",
    },
    {
      id: "03",
      category: "No Shows",
      title: "Missed Sessions",
      description:
        "If you fail to attend a booked session without prior cancellation, it will be considered a 'no-show' and no refund or credit will be issued.",
    },
    {
      id: "04",
      category: "Rescheduling",
      title: "Changing Your Booking",
      description:
        "Rescheduling may be allowed depending on availability and must be requested within the allowed cancellation window.",
    },
    {
      id: "05",
      category: "Platform Issues",
      title: "Technical Problems",
      description:
        "If a technical issue from our side prevents the session from taking place, we will offer rescheduling or a full refund.",
    },
    {
      id: "06",
      category: "Policy Updates",
      title: "Changes to Policy",
      description:
        "We reserve the right to modify this cancellation policy at any time. Continued use of our services implies acceptance of the updated terms.",
    },
  ];

  return (
    <div className="flex items-center flex-col min-h-screen pb-24">
      <div className="w-full flex flex-col items-center pt-6">
        <h1 className="font-passion-one py-4 max-w-xs md:max-w-full font-bold text-center text-[#C77F90] text-6xl md:text-8xl lg:text-9xl uppercase leading-none">
          Cancellation Policy
        </h1>
        <p className="text-slate-400 font-medium tracking-widest uppercase text-xs mb-12">
          Last Updated: {lastUpdated}
        </p>
      </div>

      <div className="mx-auto bg-white rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-[92%] max-w-6xl overflow-hidden">
        
        <div className="bg-[#C77F90]/5 p-8 md:p-12 border-b border-slate-50">
          <p className="text-slate-600 text-lg md:text-xl max-w-3xl leading-relaxed italic">
            "We understand that plans can change. Our cancellation policy is designed to balance flexibility for students while respecting instructors' time and effort."
          </p>
        </div>

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

        <div className="bg-slate-50 p-8 text-center border-t border-slate-100">
          <p className="text-slate-500 text-sm">
            Need help with cancellations? Contact us at:
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

export default CancellationPolicy;