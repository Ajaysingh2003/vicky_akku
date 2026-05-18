"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import WorkshopCard from "@/modules/workshop/component/WorkshopCard";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { getWorkshopType } from "@/trpc/type";

// export type Workshop = {
//   id: string;
//   thumbnail: string;
//   title: string;
//   place: string;
//   description: string;
//   date: string;
//   price: number;
//   isOnline: boolean;
// };

function WorkshopsHome({ data }: { data:getWorkshopType }) {
  return (
    <motion.div
      className="w-full h-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      <Tabs defaultValue="offline" className="w-full gap-5 flex ">
      <TabsList className="mb-4 flex gap-3 bg-transparent">
  <TabsTrigger
    value="offline"
    className="
      px-4 py-2 rounded-xl
      bg-stone-600 text-stone-200
      transition-all duration-200 ease-out

      hover:bg-stone-700 hover:text-white hover:scale-[1.02]

      data-[state=active]:bg-stone-500
      data-[state=active]:text-white
      data-[state=active]:shadow-md
      data-[state=active]:scale-[1.04]
      data-[state=active]:ring-1 data-[state=active]:ring-stone-700
    "
  >
    Offline
  </TabsTrigger>

  <TabsTrigger
    value="online"
    className="
      px-4 py-2 rounded-xl
      bg-stone-600 text-stone-200
      transition-all duration-200 ease-out

      hover:bg-stone-700 hover:text-white hover:scale-[1.02]

      data-[state=active]:bg-stone-900
      data-[state=active]:text-white
      data-[state=active]:shadow-md
      data-[state=active]:scale-[1.04]
      data-[state=active]:ring-1 data-[state=active]:ring-stone-700
    "
  >
    Online
  </TabsTrigger>
</TabsList>

        <TabsContent value="offline">
          <SwiperFunc data={data} isOnline={false} />
        </TabsContent>

        <TabsContent value="online">
          <SwiperFunc data={data} isOnline={true} />
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}

export default WorkshopsHome;

const SwiperFunc = ({
  data,
  isOnline,
}: {
  data: getWorkshopType;
  isOnline: boolean;
}) => {
  const filteredData = data.filter((e) => e.isOnline === isOnline);

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {filteredData.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full flex items-center justify-center py-20 text-gray-400 text-lg"
          >
            🚫 No {isOnline ? "online" : "offline"} workshops available
          </motion.div>
        ) : (
          <motion.div
            key="swiper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              navigation={true}
              modules={[Navigation]}
              className="w-full"
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {[...filteredData,...filteredData].map((e) => (
                <SwiperSlide key={e.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <WorkshopCard workshop={e} />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};