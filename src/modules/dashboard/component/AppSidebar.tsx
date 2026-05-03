"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";

import {
  LayoutDashboard,
  Users,
  CalendarDays,
  GraduationCap,
  Video,
  ChevronDown,
  FileVideo,
} from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export function AppSidebar() {

  const router = useRouter();
const handleLogout = async () => {
  try {
    const res = await fetch("/api/logout", {
      method: "POST",
      credentials: "include", // important for cookies
    });

    // ✅ Check response status
    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      throw new Error(errorData?.message || "Logout failed");
    }

    const data = await res.json();

    // ✅ Optional: check backend response
    if (!data?.success) {
      throw new Error("Logout not successful");
    }

    // ✅ Success → redirect + refresh
    router.push("/");
    router.refresh();

  } catch (error: any) {
    console.error("Logout failed:", error.message);

    // ⚠️ Fallback: force client-side cleanup if needed
    // (only works if cookie is NOT httpOnly)
    document.cookie =
      "access_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";

    // Still redirect to avoid stuck UI
   window.location.href = "/";

    router.refresh();
  }
};

  const pathname = usePathname();
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (section: string) => {
    setOpen(open === section ? null : section);
  };

  const submenuClass =
    "relative flex items-center gap-3 text-sm transition-all duration-300 hover:translate-x-1";

  return (
    <Sidebar>
      {/* HEADER */}
      <SidebarHeader className="pl-6 py-2  md:py-2 border-b">
        <h3 className="text-xl text-primary italic font-open-sauce">
         <Link href={"/"}>
           Vicky Akku Admin
         </Link>
        </h3>
      </SidebarHeader>

      {/* CONTENT */}
      <SidebarContent className="px-4 mt-6 space-y-2">
        {/* HOME */}
        <Link
          href="/dashboard"
          className={`flex items-center gap-3 p-2 rounded-md transition ${
            pathname === "/dashboard"
              ? "bg-muted font-medium"
              : "hover:bg-muted"
          }`}
        >
          <LayoutDashboard size={18} />
          Home
        </Link>

        {/* USERS */}
        <Link
          href="/dashboard/users"
          className={`flex items-center gap-3 p-2 rounded-md transition ${
            pathname === "/users" ? "bg-muted font-medium" : "hover:bg-muted"
          }`}
        >
          <Users size={18} />
          Users
        </Link>

        {/* WORKSHOPS */}
        <Collapsible open={open === "workshops"}>
          <CollapsibleTrigger
            onClick={() => toggle("workshops")}
            className="flex items-center justify-between w-full p-2 rounded-md hover:bg-muted transition"
          >
            <div className="flex items-center gap-3">
              <CalendarDays size={18} />
              Workshops
            </div>
            <ChevronDown
              size={16}
              className={`transition-transform duration-500 ${
                open === "workshops" ? "rotate-180" : ""
              }`}
            />
          </CollapsibleTrigger>

          <CollapsibleContent className="relative transition-all duration-500 pl-10 pt-3 pb-2 space-y-3">
            {/* Vertical Line */}
            <div className="absolute left-[7%] bg-primary top-0 h-full w-px" />

            {[
              { name: "All Workshops", href: "/dashboard/workshops" },
              { name: "Students", href: "/dashboard/workshops/students" },
              { name: "Registrations", href: "/dashboard/workshops/registrations" },
              { name: "Create Location", href: "/dashboard/workshops/create-location"},
            ].map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${submenuClass} ${
                    isActive
                      ? "text-primary font-medium"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </CollapsibleContent>
        </Collapsible>

        {/* REGULAR CLASSES */}
        <Collapsible open={open === "regular"}>
          <CollapsibleTrigger
            onClick={() => toggle("regular")}
            className="flex items-center justify-between w-full p-2 rounded-md hover:bg-muted transition"
          >
            <div className="flex items-center gap-3">
              <GraduationCap size={18} />
              Regular Classes
            </div>
            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${
                open === "regular" ? "rotate-180" : ""
              }`}
            />
          </CollapsibleTrigger>

          <CollapsibleContent className="relative pl-10 pt-3 pb-2 space-y-3">
            <div className="absolute left-[7%] bg-primary top-0 h-full w-px  " />

            {[
              { name: "All Classes", href: "/dashboard/regular-classes" },
              { name: "Subscribers", href: "/dashboard/regular-classes/subscribers" },
              { name: "Registrations", href: "/dashboard/regular-classes/registrations" },
              
            ].map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${submenuClass} ${
                    isActive
                      ? "text-primary font-medium"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </CollapsibleContent>
        </Collapsible>

        {/* ONLINE TUTORIALS */}
        <Collapsible open={open === "tutorials"}>
          <CollapsibleTrigger
            onClick={() => toggle("tutorials")}
            className="flex items-center justify-between w-full p-2 rounded-md hover:bg-muted transition"
          >
            <div className="flex items-center gap-3">
              <Video size={18} />
              Online Tutorials
            </div>
            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${
                open === "tutorials" ? "rotate-180" : ""
              }`}
            />
          </CollapsibleTrigger>

          <CollapsibleContent className="relative pl-10 pt-3 pb-2 space-y-3">
            <div className="absolute left-[7%] bg-primary top-0 h-full w-px" />

            {[
              { name: "All Tutorials", href: "/dashboard/online-tutorials" },
              { name: "Enrollments", href: "/dashboard/online-tutorials/enrollments"},

{ name: "Create", href: "/dashboard/online-tutorials/create"},
            ].map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${submenuClass} ${
                    isActive
                      ? "text-primary font-medium"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </CollapsibleContent>
        </Collapsible>

        

      </SidebarContent>

      {/* FOOTER */}
      <SidebarFooter className="border-t p-4 text-xs text-muted-foreground">
        <button
    onClick={handleLogout}
    className="flex items-center gap-2 w-full text-sm text-red-500 hover:text-red-600 transition"
  >
    <LogOut size={16} />
    Logout
  </button>
       <div>
         © 2026 Vicky Akku
       </div>
      </SidebarFooter>
    </Sidebar>
  );
}
