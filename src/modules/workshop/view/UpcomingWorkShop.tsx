"use client";
import Navbar from "@/component/Navbar";
import { useTRPC } from "@/trpc/client";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import React from "react";
import WorkshopContainer from "../component/WorkshopContainer";
import ClassDetails from "@/modules/home/component/ClassDetails";
import { useWorkshopFilters } from "../useWorkshop";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

function UpcomingWorkShop() {
  const trpc = useTRPC();
  const { data: user } = useQuery(trpc.user.profile.queryOptions());
  const [filters, setFilters] = useWorkshopFilters();
  const { data: workshops } = useSuspenseQuery(
    trpc.workshop.upcomingWorkshop.queryOptions({ ...filters }),
  );

  const { data: locations } = useSuspenseQuery(
    trpc.workshop.getAllLocation.queryOptions(),
  );

  console.log(locations, "hii i am from the client");

  let isUserExist = user ? true : false;

  return (
    <div className=" min-h-screen relative bg-hero">
      <div className=" absolute  z-53 w-full top-5">
        <Navbar isUserExist={isUserExist} locations={locations} />
      </div>
      <WorkshopContainer workshops={workshops} locations={locations} />
      {filters.limit < workshops.pagination.totalCount && (
        <div className="w-full my-10">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>

              {Array.from({ length: workshops.pagination.totalPages }).map(
                (_, i) => (
                  <PaginationItem key={i}>
                    <PaginationLink
                      onClick={() => setFilters({ page: i + 1 })}
                      className={`${
                        filters.page === i + 1 && "bg-primary text-white"
                      } cursor-pointer transition-all duration-300`}
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ),
              )}

              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
      <ClassDetails className={` mt-18 w-full  mx-auto  hidden md:block`} />
    </div>
  );
}

export default UpcomingWorkShop;
