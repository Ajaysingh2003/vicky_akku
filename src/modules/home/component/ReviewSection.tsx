"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

type Review = {
  rating: number;
  review: string;
  user: {
    name: string;
    image: string;
    place: string;
  };
};

function ReviewSection() {
  const review :Review[] = [
    {
      rating: 5,
      review:
        "They are literally the best choreographers ever I enjoy dancing with them alotttttt they are so energetic sooo beautiful at their work their moves and steps are so perfect so clear they even made me perfect and they are so friendly they are my personal fav people thank you so much Aakansha Mam and Vicky sir for making me perfect in every moves….. They always pay personal attention on every single person ❤️👀I lovers you guysss alottttt🫶🏻🤍👀🙈",
      user: {
        name: "Pratiksha",
        image: "https://randomuser.me/api/portraits/women/32.jpg",
        place: "Delhi, India",
      },
    },
    {
      rating: 5,
      review:
        "I have gone to various different dance classes, but their classes is one of the best according to me. They work on the basic and foundation of Dance .The moves , the  flexibility, technique & take you from non-dancer to a dancer.The charges are also decentand its value for money.4.5 star for sure .",
      user: {
        name: "Sonali",
        image: "https://randomuser.me/api/portraits/women/45.jpg",
        place: "Delhi, India",
      },
    },
    {
      rating: 5,
      review:
        "Aakansha maam and Vickey sir have the perfect swag, they will transfer all their energy to you and teach dance technics to make you enjoy every style. It's all about music, expressions and being in the character with them. Love the classes MWF are the best days of the week for me 😍 ",
      user: {
        name: "Devika",
        image: "https://randomuser.me/api/portraits/women/67.jpg",
        place: "Pune, India",
      },
    },
    {
      rating: 5,
      review:
        "One of the great place to learn dancing! The place itself has a vibe. Vicky Sir and Aakansha Ma’am is the best. They pays attention to each and every student and can make you learn any dance form. And it’s not just dancing but they help you focus on ur expressions as well. The best part about the class is the positive vibe they creates",
      user: {
        name: "Rahul Hazra",
        image: "https://randomuser.me/api/portraits/men/67.jpg",
        place: "Pune, India",
      },
    },
    {
      rating: 5,
      review:
        "I always used to see videos of Vicky Sir and Aakansha Ma’am on Instagram and their choreography on different songs and dance styles just made me join the class . The way they teach and are patient with all their students throughout the process is commendable !! The overall atmosphere of the class is so good and positive! The best part is they shoot videos for all their students once the choreography is done.There's so much to learn from both of them ! I highly recommend their class :♥️",
      user: {
        name: "Neetu Upadhaya",
        image: "https://randomuser.me/api/portraits/women/21.jpg",
        place: "Mumbai, India",
      },
    },
    {
      rating: 5,
      review:
        "This dance class has my heart. Have been attending this class since 2022 and can clearly see the improvement. All thanks to the great teachers Vicky Sir and Aakanksha Ma’am for being so encouraging and kind with all the students. Dance class is definitely my favourite part of the day ♥️",
      user: {
        name: "Tara",
        image: "https://randomuser.me/api/portraits/women/89.jpg",
        place: "Mumbai, India",
      },
    },
    {
      rating: 5,
      review:
        "I've been loving my time at Boombox Dance Classes! The instructors are really good at breaking things down, which makes it a lot easier to pick up choreography—even if it’s a new style. They also teach a mix of styles, so it never gets boring. Plus, the end-of-class shoots are such a cool way to see your progress and get comfortable in front of the camera. It’s a really fun, encouraging space to grow as a dancer.",
      user: {
        name: "Sriyal",
        image: "https://randomuser.me/api/portraits/women/8.jpg",
        place: "Mumbai, India",
      },
    },
    {
      rating: 5,
      review:
        "Highly recommend. Akanksha Maam and Vicky sir are the best at breaking down complex choreographies into simple learnable steps. I was someone who hated dancing all my life and now I really enjoy it because of them. Definitely book a session if you want to go beyond the limits of your body. ✅",
      user: {
        name: "Aditi",
        image: "https://randomuser.me/api/portraits/women/18.jpg",
        place: "Mumbai, India",
      },
    },
  ];
  const sliderRef = React.useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 304,
      behavior: "smooth",
    });
  };

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -304,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      className="w-full bg-[#DFF2EE] mb-6 mt-48 md:mt-18 h-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 h-full">
        {/* LEFT TEXT */}
        <motion.div
          className="col-span-5 py-4 -pb-128 flex items-start md:items-end md:justify-end w-full h-full"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="space-y-3">
            <h2 className="font-borscha text-4xl md:text-6xl text-center md:text-start max-w-136 uppercase text-[#7B9691]">
              Loved by Dancers Everywhere
            </h2>

            <p className="font-normal text-center md:text-start lg:pb-8 text-lg md:text-xl md:max-w-84 text-regular capitalize">
              What students and professionals say about dancing with us.
            </p>
          </div>
        </motion.div>

        {/* REVIEWS */}
        <div className="col-span-7 p-6 overflow-hidden">
          <div className="w-full relative">
            <Button
              onClick={scrollLeft}
              className="absolute -left-5 top-1/2 -translate-y-1/2 rounded-full bg-[#595959] size-10 md:size-10 z-20"
            >
              <ChevronLeft className="size-5 text-white" />
            </Button>
            <div
              className="h-full w-14 md:w-24 bg-review
              absolute right-0 z-50 flex items-center justify-right"
            >
              <Button
                onClick={scrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-[#595959] size-10 md:size-10 z-20"
              >
                <ChevronRight className="size-5 text-white" />
              </Button>
            </div>
            <motion.div
              ref={sliderRef}
              className="flex gap-4 overflow-auto scrollbar-none"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.15 },
                },
              }}
            >
              {review.map((e, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.35 }}
                  className="bg-[#F5FAFF] h-auto rounded-2xl min-w-72 w-72 p-6 border border-[#C2DDD8] flex justify-between flex-col gap-8 shadow-sm"
                >
                  <div className="flex flex-col gap-3">
                    <p>{e.rating}/5</p>

                    <p className="capitalize text-sm md:text-md text-regular leading-a5">
                      {e.review}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="size-10">
                      <Image
                        className="rounded-full object-cover"
                        src={e.user.image}
                        height={100}
                        width={100}
                        alt={e.user.name}
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <h3 className="text-sm text-[#7B9691]">{e.user.name}</h3>
                      <p className="text-xs text-[#7B9691]">{e.user.place}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ReviewSection;
