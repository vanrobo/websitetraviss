"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Download, Share2, Calendar, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

interface ConfirmationPageProps {
  params: {
    eventId: string;
  };
}

export default function ConfirmationPage({ params }: ConfirmationPageProps) {
  const searchParams = useSearchParams()
  const ticketType = searchParams.get("ticket") || "early-bird"
  const quantity = Number.parseInt(searchParams.get("quantity") || "1")
  const seats = searchParams.get("seats")?.split(",") || []
  const total = Number.parseInt(searchParams.get("total") || "0")

  const [bookingId] = useState(
    () => "MR" + Date.now().toString().slice(-8) + Math.random().toString(36).substr(2, 4).toUpperCase(),
  )

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="px-6 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-[#59FFA0] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-12 w-12 text-black" />
            </div>
            <h1 className="text-3xl font-bold mb-2 text-[#59FFA0]">Booking Confirmed!</h1>
            <p className="text-gray-400">Your tickets for THE MAHA-RAGE have been secured</p>
          </div>

          {/* Booking Details */}
          <Card className="bg-gray-900/50 border-gray-800 mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-[#59FFA0]">Booking Details</CardTitle>
                <Badge className="bg-[#59FFA0]/20 text-[#59FFA0]">Confirmed</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Booking ID</span>
                  <span className="font-mono font-bold">{bookingId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Event</span>
                  <span>THE MAHA-RAGE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Artist</span>
                  <span>Travis Scott</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Ticket Type</span>
                  <span className="capitalize">{ticketType.replace("-", " ")}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Quantity</span>
                  <span>
                    {quantity} ticket{quantity > 1 ? "s" : ""}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Seats</span>
                  <span className="text-sm">{seats.join(", ")}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Total Paid</span>
                  <span className="font-bold text-[#59FFA0]">₹{total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Venue</span>
                  <span>Jawaharlal Nehru Stadium, Delhi</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Event Information */}
          <Card className="bg-gradient-to-r from-[#454ADE]/10 to-[#59FFA0]/10 border-gray-800 mb-8">
            <CardHeader>
              <CardTitle>Event Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-[#59FFA0]" />
                  <div>
                    <div className="font-semibold">30 October 2025</div>
                    <div className="text-sm text-gray-400">Thursday</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-[#59FFA0]" />
                  <div>
                    <div className="font-semibold">8:00 PM</div>
                    <div className="text-sm text-gray-400">Doors open at 6:00 PM</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-[#59FFA0]" />
                  <div>
                    <div className="font-semibold">Jawaharlal Nehru Stadium</div>
                    <div className="text-sm text-gray-400">New Delhi, India</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* QR Code Ticket */}
          <Card className="bg-gray-900/50 border-gray-800 mb-8">
            <CardHeader>
              <CardTitle>Your Digital Ticket</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="w-48 h-48 bg-white rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <div className="text-black text-xs font-mono">
                    QR CODE
                    <br />
                    {bookingId}
                    <br />
                    SCAN AT VENUE
                  </div>
                </div>
                <p className="text-sm text-gray-400 mb-4">Present this QR code at the venue entrance</p>
                <div className="flex gap-4 justify-center">
                  <Button
                    variant="outline"
                    className="border-[#59FFA0] text-[#59FFA0] hover:bg-[#59FFA0] hover:text-black bg-transparent"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#454ADE] text-[#454ADE] hover:bg-[#454ADE] hover:text-white bg-transparent"
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Important Information */}
          <Card className="bg-gray-900/50 border-gray-800 mb-8">
            <CardHeader>
              <CardTitle>Important Information</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Arrive at least 1 hour before the show starts</li>
                <li>• Bring a valid government-issued photo ID</li>
                <li>• No outside food, drinks, or professional cameras allowed</li>
                <li>• Tickets are non-transferable and non-refundable</li>
                <li>• Check your email for detailed venue information</li>
              </ul>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="space-y-4">
            <Link href="/profile">
              <Button size="lg" className="w-full bg-[#454ADE] hover:bg-[#454ADE]/80 text-white font-semibold">
                View My Tickets
              </Button>
            </Link>
            <Link href="/">
              <Button
                variant="outline"
                size="lg"
                className="w-full border-[#59FFA0] text-[#59FFA0] hover:bg-[#59FFA0] hover:text-black bg-transparent"
              >
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
