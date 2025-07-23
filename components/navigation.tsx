"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Home, Calendar, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-t border-gray-800 md:hidden">
        <div className="flex items-center justify-around py-2">
          <Link href="/">
            <Button variant="ghost" size="sm" className="flex-col gap-1 h-auto py-2 text-white hover:text-[#59FFA0]">
              <Home className="h-5 w-5" />
              <span className="text-xs">Home</span>
            </Button>
          </Link>
          <Link href="/events">
            <Button variant="ghost" size="sm" className="flex-col gap-1 h-auto py-2 text-white hover:text-[#59FFA0]">
              <Calendar className="h-5 w-5" />
              <span className="text-xs">Events</span>
            </Button>
          </Link>
          <Link href="/profile">
            <Button variant="ghost" size="sm" className="flex-col gap-1 h-auto py-2 text-white hover:text-[#59FFA0]">
              <User className="h-5 w-5" />
              <span className="text-xs">Profile</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:fixed md:top-0 md:left-0 md:right-0 md:z-50 md:bg-black/90 md:backdrop-blur-sm md:border-b md:border-gray-800">
        <div className="flex items-center justify-between px-6 py-4">
          <Link href="/">
            <div className="flex items-center gap-3">
              <Image src="/images/maha-logo.png" alt="MAHA" width={40} height={40} />
              <span className="text-xl font-bold bg-gradient-to-r from-[#454ADE] to-[#59FFA0] bg-clip-text text-transparent">
                MAHA-RAGE
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-6">
            <Link href="/">
              <Button variant="ghost" className="text-white hover:text-[#59FFA0]">
                Home
              </Button>
            </Link>
            <Link href="/events">
              <Button variant="ghost" className="text-white hover:text-[#59FFA0]">
                Events
              </Button>
            </Link>
            <Link href="/profile">
              <Button variant="ghost" className="text-white hover:text-[#59FFA0]">
                Profile
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
