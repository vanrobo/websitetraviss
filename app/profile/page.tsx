"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, Calendar, MapPin, Download, Settings, LogOut } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const mockBookings = [
  {
    id: "MR20251001ABCD",
    event: "THE MAHA-RAGE",
    artist: "Travis Scott",
    date: "30 October 2025",
    venue: "Jawaharlal Nehru Stadium",
    seats: ["A5-12", "A5-13"],
    status: "Confirmed",
    total: 5998,
  },
  {
    id: "MR20251102EFGH",
    event: "THE MAHA-RAGE",
    artist: "Travis Scott",
    date: "2 November 2025",
    venue: "Jawaharlal Nehru Stadium",
    seats: ["B3-8"],
    status: "Confirmed",
    total: 4999,
  },
]

export default function ProfilePage() {
  const [user] = useState({
    name: "Arjun Sharma",
    email: "arjun.sharma@email.com",
    phone: "+91 98765 43210",
    avatar: "/placeholder.svg?height=100&width=100",
  })

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="flex items-center justify-between p-4">
          <Link href="/">
            <Button variant="ghost" size="sm" className="text-white hover:text-[#59FFA0]">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Home
            </Button>
          </Link>
          <Image src="/images/maha-logo.png" alt="MAHA" width={40} height={40} />
          <Button variant="ghost" size="sm" className="text-white hover:text-[#59FFA0]">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="px-6 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <Card className="bg-gray-900/50 border-gray-800 mb-8">
            <CardContent className="p-6">
              <div className="flex items-center gap-6">
                <Avatar className="w-20 h-20">
                  <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                  <AvatarFallback className="bg-[#454ADE] text-white text-2xl">
                    {user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h1 className="text-2xl font-bold mb-2">{user.name}</h1>
                  <p className="text-gray-400 mb-1">{user.email}</p>
                  <p className="text-gray-400">{user.phone}</p>
                </div>
                <Button
                  variant="outline"
                  className="border-[#59FFA0] text-[#59FFA0] hover:bg-[#59FFA0] hover:text-black bg-transparent"
                >
                  Edit Profile
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Tabs */}
          <Tabs defaultValue="tickets" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-gray-900/50 border border-gray-800">
              <TabsTrigger value="tickets" className="data-[state=active]:bg-[#454ADE] data-[state=active]:text-white">
                My Tickets
              </TabsTrigger>
              <TabsTrigger value="history" className="data-[state=active]:bg-[#454ADE] data-[state=active]:text-white">
                Booking History
              </TabsTrigger>
              <TabsTrigger value="settings" className="data-[state=active]:bg-[#454ADE] data-[state=active]:text-white">
                Settings
              </TabsTrigger>
            </TabsList>

            <TabsContent value="tickets" className="space-y-6">
              <h2 className="text-2xl font-bold text-[#59FFA0]">Upcoming Events</h2>

              {mockBookings.map((booking) => (
                <Card
                  key={booking.id}
                  className="bg-gray-900/50 border-gray-800 hover:border-[#454ADE]/50 transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl text-[#59FFA0]">{booking.event}</CardTitle>
                        <p className="text-gray-400">{booking.artist}</p>
                      </div>
                      <Badge className="bg-[#59FFA0]/20 text-[#59FFA0]">{booking.status}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-[#59FFA0]" />
                        <span>{booking.date}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-[#59FFA0]" />
                        <span>{booking.venue}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-400">Booking ID: {booking.id}</p>
                        <p className="text-sm text-gray-400">Seats: {booking.seats.join(", ")}</p>
                        <p className="font-bold text-[#59FFA0]">₹{booking.total.toLocaleString()}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-[#59FFA0] text-[#59FFA0] hover:bg-[#59FFA0] hover:text-black bg-transparent"
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                        <Button size="sm" className="bg-[#454ADE] hover:bg-[#454ADE]/80 text-white">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="history" className="space-y-6">
              <h2 className="text-2xl font-bold text-[#59FFA0]">Booking History</h2>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-8 text-center">
                  <div className="text-gray-400 mb-4">
                    <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Your booking history will appear here</p>
                    <p className="text-sm">Complete your first booking to see your history</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="space-y-6">
              <h2 className="text-2xl font-bold text-[#59FFA0]">Account Settings</h2>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle>Preferences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Email Notifications</span>
                    <Button variant="outline" size="sm" className="border-[#59FFA0] text-[#59FFA0] bg-transparent">
                      Enabled
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>SMS Notifications</span>
                    <Button variant="outline" size="sm" className="border-gray-600 text-gray-400 bg-transparent">
                      Disabled
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Marketing Updates</span>
                    <Button variant="outline" size="sm" className="border-[#59FFA0] text-[#59FFA0] bg-transparent">
                      Enabled
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle>Account Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button
                    variant="outline"
                    className="w-full border-gray-600 text-gray-400 hover:border-gray-500 bg-transparent"
                  >
                    Change Password
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-gray-600 text-gray-400 hover:border-gray-500 bg-transparent"
                  >
                    Download My Data
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-red-600 text-red-400 hover:bg-red-600 hover:text-white bg-transparent"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
