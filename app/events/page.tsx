"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Users, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const events = [
  {
    id: 1,
    date: "30 October 2025",
    time: "8:00 PM",
    venue: "Jawaharlal Nehru Stadium",
    location: "New Delhi, India",
    price: "₹2,999",
    status: "Available",
    capacity: "60,000",
  },
  {
    id: 2,
    date: "31 October 2025",
    time: "8:00 PM",
    venue: "Jawaharlal Nehru Stadium",
    location: "New Delhi, India",
    price: "₹2,999",
    status: "Available",
    capacity: "60,000",
  },
  {
    id: 3,
    date: "2 November 2025",
    time: "8:00 PM",
    venue: "Jawaharlal Nehru Stadium",
    location: "New Delhi, India",
    price: "₹2,999",
    status: "Selling Fast",
    capacity: "60,000",
  },
]

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="flex items-center justify-between p-4">
          <Link href="/">
            <Button variant="ghost" size="sm" className="text-white hover:text-[#59FFA0]">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </Link>
          <Image src="/images/maha-logo.png" alt="MAHA" width={40} height={40} />
          <div className="w-16" />
        </div>
      </div>

      <div className="px-6 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-[#454ADE] to-[#59FFA0] bg-clip-text text-transparent">
              THE MAHA-RAGE
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-[#59FFA0] mb-4">TRAVIS SCOTT INDIA TOUR</h2>
            <p className="text-gray-400 text-lg">
              Select your preferred date and secure your spot at India's most anticipated concert
            </p>
          </div>

          {/* Event Cards */}
          <div className="space-y-6">
            {events.map((event) => (
              <Card
                key={event.id}
                className="bg-gray-900/50 border-gray-800 hover:border-[#454ADE]/50 transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl font-bold text-white mb-2">{event.date}</CardTitle>
                      <div className="flex flex-wrap gap-4 text-gray-400">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          {event.time}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {event.venue}
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          {event.capacity} capacity
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-[#59FFA0] mb-2">{event.price}</div>
                      <Badge
                        className={`${
                          event.status === "Available"
                            ? "bg-[#59FFA0]/20 text-[#59FFA0]"
                            : "bg-orange-500/20 text-orange-400"
                        }`}
                      >
                        {event.status}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <p className="text-gray-400 mb-4">
                        Experience Travis Scott's Utopia world with cutting-edge stage design, immersive visuals, and
                        the fusion of global hip-hop with Indian culture at India's capital.
                      </p>
                      <div className="text-sm text-gray-500">
                        📍 {event.location} • 🎫 Multiple ticket categories available
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Link href={`/booking/`}>
                        <Button
                          size="lg"
                          className="w-full bg-[#454ADE] hover:bg-[#454ADE]/80 text-white font-semibold"
                        >
                          Select Tickets
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-[#59FFA0] text-[#59FFA0] hover:bg-[#59FFA0] hover:text-black bg-transparent"
                      >
                        Event Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 p-6 bg-gradient-to-r from-[#454ADE]/10 to-[#59FFA0]/10 rounded-lg border border-gray-800">
            <h3 className="text-xl font-bold mb-4 text-[#59FFA0]">Important Information</h3>
            <ul className="space-y-2 text-gray-400">
              <li>• Age restriction: 16+ (ID required)</li>
              <li>• Doors open 2 hours before showtime</li>
              <li>• No outside food, drinks, or professional cameras allowed</li>
              <li>• Parking available on-site (additional charges apply)</li>
              <li>• All tickets are non-refundable and non-transferable</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
