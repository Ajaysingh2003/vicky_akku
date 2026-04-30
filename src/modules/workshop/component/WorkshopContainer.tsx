"use client";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import React, { useEffect, useTransition } from "react";
import WorkshopcardWrapper from "./WorkshopcardWrapper";
import { getLocation, getWorkshop } from "@/trpc/type";
import Image from "next/image";
import { useWorkshopFilters } from "../useWorkshop";
import { BookOpen } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

function WorkshopContainer({
  workshops,
  locations,
}: {
  workshops: getWorkshop;
  locations: getLocation;
}) {
  const [filters, setFilters] = useWorkshopFilters();

   const [isPending, startTransition] = useTransition();

  // Helper to handle filter changes safely
  const handleLocationChange = (value: string) => {
    startTransition(() => {
      setFilters({ 
        location: value, 
        page: 1 
      });
    });
  };
  return (
    <motion.div
      className="h-full pt-28"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-[85%] flex items-center gap-4 md:gap-12 flex-col mx-auto">
        {/* TITLE */}
        <motion.h1
          className="font-borscha font-medium lg:my-3 text-center text-[#977DAE] text-4xl lg:text-8xl capitalize"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Upcoming Workshops
        </motion.h1>

        {workshops.pagination.totalCount == 0 ? (
          /* EMPTY STATE */
          <motion.div
            className="bg-[#FFFBF4] h-92 w-full rounded-[30px] flex flex-col items-center justify-center text-center gap-3"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-sm">
              <BookOpen className="w-6 h-6 text-gray-500" />
            </div>

            <div>
              <p className="text-lg font-medium text-gray-800">
                No Workshops Yet
              </p>
              <p className="text-sm text-gray-500">
                Workshops will appear here when available.
              </p>
            </div>
          </motion.div>
        ) : (
          <>
            {/* LOCATION FILTERS */}
            {/* <ScrollArea className="rounded-md border p-4"> */}
            <motion.div
              className="overflow-scroll max-w-screen pl-28  md:pr-0 pt-3 lg:pt-6 overflow-y-hidden scroll-smooth hide-scrollbar px-4 md:pl-0  flex items-center flex-nowrap justify-center gap-1 md:gap-2"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.1 },
                },
              }}
            >
              {/* ALL BUTTON */}
              <motion.div
                className="rounded-2xl  md:min-w-[162px] md:h-[142px]   md:rounded-[39px] bg-[#FFFBF4] min-w-24 min-h-18  relative"
                style={{ border: "3px solid #D2D2D2" }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <input
                  className="hidden"
                  type="radio"
                  id={"all"}
                  onChange={(e) => handleLocationChange(e.target.value)}
                  checked={filters.location == "all"}
                  value={"all"}
                />

                <label
                  htmlFor={"all"}
                  className={`flex flex-col h-[67px] md:h-full rounded-2xl md:rounded-[39px] w-full cursor-pointer items-center px-4 transition-all duration-500 py-2 ${
                    "all" == filters.location ? "bg-[#977DAE] text-white" : ""
                  }`}
                >
                  <span
                    className={`capitalize line-clamp-1 overflow-hidden max-w-full text-[#777873] ${
                      "all" == filters.location && "text-white"
                    } text-xs md:text-[24px] tracking-wider`}
                  >
                    All
                  </span>

                  <Image
                    src={"/image/2.png"}
                    alt={"location"}
                    height={100}
                    className="max-w-18 object-cover lg:object-none md:max-w-24 max-h-[72px] absolute  md:bottom-[20%]"
                    width={100}
                  />
                </label>
              </motion.div>

              {/* LOCATIONS */}
              {locations.map((e) => (
                <motion.div
                  key={e.id}
                  className="rounded-2xl md:rounded-[39px] bg-[#FFFBF4] min-w-24 md:min-w-[162px]  h-18 md:w-35.5 md:h-[142px] relative"
                  style={{ border: "3px solid #D2D2D2" }}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                >
                  <input
                    className="hidden"
                    type="radio"
                    id={e.city}
                    onChange={(e) => handleLocationChange(e.target.value)}
                    checked={filters.location == e.city}
                    value={e.city}
                  />

                  <label
                    htmlFor={e.city}
                    className={`flex flex-col rounded-2xl md:rounded-[39px] w-full h-full cursor-pointer items-center px-4 transition-all duration-500 py-2 ${
                      e.city == filters.location
                        ? "bg-[#977DAE] text-white"
                        : ""
                    }`}
                  >
                    <span
                      className={`capitalize max-w-full wrap-break-word text-[#777873] ${
                        e.city == filters.location && "text-white"
                      } text-xs md:text-[24px] tracking-wider`}
                    >
                      {e.city}
                    </span>

                    <Image
                      src={e.image}
                      alt={e.city}
                      height={100}
                      className="max-w-18 object-cover lg:object-none md:max-w-24 object-contains max-h-[47px] md:max-h-[72px] absolute top-[28%] bottom-[20%]"
                      width={100}
                    />
                  </label>
                </motion.div>
              ))}
            </motion.div>
            {/* </ScrollArea> */}

            {/* WORKSHOP CARDS */}
            <div className="w-full h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${filters.page}-${filters.location}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <WorkshopcardWrapper workshops={workshops.workshops} />
                </motion.div>
              </AnimatePresence>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}

export default WorkshopContainer;
