"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "./util/cn";
import Link from "next/link";
function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  
  return (
    
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
       <Menu setActive={setActive}>
<Link href="/">
        <MenuItem setActive={setActive} active={active} item="Home">        
        
        </MenuItem>
        </Link>  
        <MenuItem setActive={setActive} active={active} item="Projects">
        <div className="flex flex-col space-y-4 text-sm">
        <HoveredLink href="/allcourses">All Courses</HoveredLink>
        <HoveredLink href="/basiccourse">Basic Music Course</HoveredLink>
        <HoveredLink href="/advanced">Advanced Compassion</HoveredLink>
        <HoveredLink href="/songwriting">Song Writing</HoveredLink>
        <HoveredLink href="/musicproduction">Music Production</HoveredLink>
        </div>
        </MenuItem>
        <Link href="/contactus">
        <MenuItem setActive={setActive} active={active} item="Contact Me">
        
        </MenuItem></Link>
        </Menu>
        </div>
  )
}

export default Navbar