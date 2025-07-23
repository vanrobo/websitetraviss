"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, ArrowRight, Music, Users, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#454ADE]/30 via-black to-[#59FFA0]/20" />
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-5 bg-cover bg-center" />

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#454ADE]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#59FFA0]/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div
          className={`relative z-10 text-center px-6 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="mb-8">
            <Image
              src="/images/maha-logo.png"
              alt="MAHA Logo"
              width={140}
              height={140}
              className="mx-auto mb-6 drop-shadow-2xl"
            />
          </div>

          <div className="space-y-6 mb-8">
            <h1 className="text-7xl md:text-9xl font-black bg-gradient-to-r from-[#454ADE] via-[#59FFA0] to-[#454ADE] bg-clip-text text-transparent animate-gradient bg-300% leading-tight">
              MAHARAGE
            </h1>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px bg-gradient-to-r from-transparent via-[#59FFA0] to-transparent w-24" />
              <h2 className="text-3xl md:text-5xl font-bold text-[#59FFA0] tracking-wider">TRAVIS SCOTT</h2>
              <div className="h-px bg-gradient-to-r from-transparent via-[#59FFA0] to-transparent w-24" />
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Experience the ultimate fusion of{" "}
              <span className="text-[#59FFA0] font-semibold">Travis Scott's Utopia</span> with
              <span className="text-[#454ADE] font-semibold"> Indian culture</span>. The most immersive concert
              experience comes to India's capital.
            </p>
          </div>

          {/* Event Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm md:text-base">
            <div className="flex items-center gap-2 bg-gray-900/50 px-4 py-2 rounded-full backdrop-blur-sm">
              <Calendar className="h-4 w-4 text-[#59FFA0]" />
              <span>Oct-Nov 2025</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-900/50 px-4 py-2 rounded-full backdrop-blur-sm">
              <MapPin className="h-4 w-4 text-[#454ADE]" />
              <span>New Delhi</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-900/50 px-4 py-2 rounded-full backdrop-blur-sm">
              <Users className="h-4 w-4 text-[#59FFA0]" />
              <span>60K+ Capacity</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/events">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#454ADE] to-[#59FFA0] hover:from-[#454ADE]/80 hover:to-[#59FFA0]/80 text-white px-10 py-4 text-xl font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Book Tickets <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-[#59FFA0] text-[#59FFA0] hover:bg-[#59FFA0] hover:text-black px-10 py-4 text-xl font-bold bg-transparent rounded-full backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
            >
              Explore Experience
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-[#454ADE] to-[#59FFA0] bg-clip-text text-transparent">
              THE INDIA TOUR
            </h3>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              An unprecedented fusion of global artistry and Indian culture
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border-gray-700 hover:border-[#454ADE]/50 transition-all duration-500 transform hover:scale-105 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#59FFA0]/20 to-[#59FFA0]/5 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="h-8 w-8 text-[#59FFA0]" />
                </div>
                <h4 className="text-2xl font-bold mb-4">Multiple Dates</h4>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Experience the rage across multiple nights in October and November 2025
                </p>
                <Badge className="bg-[#454ADE]/20 text-[#454ADE] px-4 py-1">Limited Shows</Badge>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border-gray-700 hover:border-[#59FFA0]/50 transition-all duration-500 transform hover:scale-105 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#454ADE]/20 to-[#454ADE]/5 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-8 w-8 text-[#454ADE]" />
                </div>
                <h4 className="text-2xl font-bold mb-4">New Delhi</h4>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Jawaharlal Nehru Stadium - India's premier venue for world-class events
                </p>
                <Badge className="bg-[#59FFA0]/20 text-[#59FFA0] px-4 py-1">India's Capital</Badge>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border-gray-700 hover:border-[#454ADE]/50 transition-all duration-500 transform hover:scale-105 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#59FFA0]/20 to-[#59FFA0]/5 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-[#59FFA0]" />
                </div>
                <h4 className="text-2xl font-bold mb-4">Immersive Experience</h4>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  360° stage design with cutting-edge visuals and mind-bending effects
                </p>
                <Badge className="bg-[#454ADE]/20 text-[#454ADE] px-4 py-1">Utopia World</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Experience Preview */}
      <div className="py-24 px-6 bg-gradient-to-r from-[#454ADE]/5 via-black to-[#59FFA0]/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                More Than a <span className="text-[#59FFA0]">Concert</span>
              </h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                MAHARAGE isn't just a performance—it's a cultural phenomenon. Witness Travis Scott's artistic vision
                merge with India's rich heritage in an unprecedented spectacle of sound, light, and energy.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-[#59FFA0] rounded-full" />
                  <span className="text-gray-300">Multi-sensory stage production</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-[#454ADE] rounded-full" />
                  <span className="text-gray-300">Indian cultural fusion elements</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-[#59FFA0] rounded-full" />
                  <span className="text-gray-300">Exclusive merchandise & experiences</span>
                </div>
              </div>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-[#454ADE] text-[#454ADE] hover:bg-[#454ADE] hover:text-white px-8 py-3 text-lg font-semibold bg-transparent rounded-full"
              >
                Learn More
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#454ADE]/20 to-[#59FFA0]/20 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-gray-800">
                <div className="text-center">
                  <Music className="h-24 w-24 text-[#59FFA0] mx-auto mb-4" />
                  <p className="text-gray-400">Experience Preview</p>
                  <p className="text-sm text-gray-500">Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#454ADE]/10 to-[#59FFA0]/10" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#454ADE]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#59FFA0]/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h3 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Ready for the{" "}
            <span className="bg-gradient-to-r from-[#454ADE] to-[#59FFA0] bg-clip-text text-transparent">MAHARAGE</span>
            ?
          </h3>
          <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join thousands of fans for an unforgettable night of music, culture, and pure energy. This is your chance to
            be part of history.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/events">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#454ADE] to-[#59FFA0] hover:from-[#454ADE]/80 hover:to-[#59FFA0]/80 text-white px-12 py-4 text-xl font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Get Your Tickets Now
              </Button>
            </Link>

            <div className="flex items-center gap-4 text-gray-400">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#454ADE] to-[#59FFA0] border-2 border-black" />
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#59FFA0] to-[#454ADE] border-2 border-black" />
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#454ADE] to-[#59FFA0] border-2 border-black" />
              </div>
              <span className="text-sm">54k+ already registered</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
