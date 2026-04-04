import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  const items = [
    { label: "Workshops", url: "/workshop" },
    { label: "Online Tutorials", url: "/online-tutorials" },
    { 
  label: "Contact Us", 
  url: "https://wa.me/9653251228?text=Hi%20I%20Have%20a%20query" 
},
    { label: "Regular Classes", url: "/regular-classes" },
    { label: "Cancellation Policy", url: "/CancellationPolicy" },
    { label: "Privacy Policy", url: "/PrivacyPolicy" },
    { label: "Refund Policy", url: "/RefundPolicy" },
    { label: "Terms Of Service", url: "/TermsOfService" },
  ];
  return (
    <div className="bg-[#977DAE]">
      <div className="w-[90%] px-12 py-8 md:p-6 mx-auto grid gap-12 grid-cols-1 md:grid-cols-2">
        <div className="flex items-center justify-between">
          <h2 className="text-4xl font-open-sauce max-w-24 text-white uppercase">
            Vicky akku
          </h2>
          
          <div className="flex items-center gap-4">
            <div className="bg-white/80 size-7 rounded-full flex items-center justify-center">
             <Link href={"https://www.youtube.com/@VickyandAakankshaofficial/videos"}>
               <Image
                src="/image/youtube.png"
                height={100}
                width={100}
                className="size-4"
                alt="social"
              />
             </Link>
            </div>
            <div className="bg-white/80 size-7 rounded-full flex items-center justify-center">
            <Link href={"https://www.instagram.com/vickyakku/"}>
              <Image
                src="/image/svg/insta.svg"
                height={100}
                width={100}
                className="size-4"
                alt="social"
              />
                </Link>
            </div>
          </div>
        </div>
        <div className="">
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {items.map((e,i) => (
              <li key={i}>
                <Link className="text-white" href={e.url}>
                  {e.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
