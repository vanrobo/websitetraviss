"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"

const ticketTypes = [
  {
    id: "early-bird",
    name: "Early Bird",
    price: 2999,
    originalPrice: 3999,
    description: "Limited Time - General Standing",
  },
  { id: "general", name: "General", price: 3999, description: "General Standing Area" },
  { id: "vip", name: "VIP", price: 8999, description: "VIP Area + Premium Experience" },
]

export default function SleekBookingPage({ params }: { params: { eventId: string } }) {
  const router = useRouter()
  const [selectedTicket, setSelectedTicket] = useState("early-bird")
  const [quantity, setQuantity] = useState(2)

  const selectedTicketType = ticketTypes.find((t) => t.id === selectedTicket)
  const totalPrice = selectedTicketType ? selectedTicketType.price * quantity : 0

  const handleContinue = () => {
    router.push(`/booking/${params.eventId}/seats?ticket=${selectedTicket}&quantity=${quantity}`)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm">
        <div className="flex items-center justify-between p-4">
          <Link href="/events">
            <Button variant="ghost" size="sm" className="text-white hover:text-[#59FFA0]">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </Link>
          <div className="text-center">
            <div className="text-sm text-gray-400">Payment Details</div>
          </div>
          <div className="w-16" />
        </div>
      </div>

      <div className="px-4 py-6">
        <div className="max-w-md mx-auto">
          {/* Event Header Card */}
          <Card className="bg-gray-900/30 border-gray-800/50 backdrop-blur-sm mb-6 overflow-hidden">
            <CardContent className="p-0">
              <div className="relative">
                <div className="absolute top-4 left-4 z-10">
                  <Image src="/images/maha-logo.png" alt="MAHA" width={32} height={32} />
                </div>
                <div className="absolute top-4 right-4 z-10">
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">${Math.round(totalPrice / 83)}</div>
                    <div className="text-sm text-gray-400 flex items-center gap-1">
                      <span>{quantity} Persons</span>
                      <ChevronDown className="h-3 w-3" />
                    </div>
                    <div className="text-xs text-gray-500">2-Day Event</div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#454ADE]/20 to-[#59FFA0]/10 p-6 pt-16">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-gray-600 border-2 border-black" />
                      <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-black" />
                      <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-black" />
                    </div>
                    <span className="text-sm text-gray-400">54k+ Have registered</span>
                  </div>

                  <h1 className="text-3xl font-bold text-[#454ADE] mb-1">Delhi</h1>
                  <p className="text-gray-400 text-sm mb-4">The Maha-Rage</p>

                  <div className="space-y-1 text-sm">
                    <div className="text-white font-medium">30 October 2025 - 31 October 2025</div>
                    <div className="text-gray-400">Gates open: 6:00 PM IST</div>
                    <div className="text-gray-400">Jawaharlal Nehru Stadium, Delhi, NCR</div>
                  </div>

                  <Button variant="ghost" className="text-[#59FFA0] hover:text-[#59FFA0]/80 p-0 h-auto mt-2 text-sm">
                    Read Event Description →
                  </Button>
                </div>

                <div className="absolute bottom-4 right-4">
                  <div className="text-right">
                    <div className="text-sm text-gray-400">
                      ${Math.round(selectedTicketType?.price || 0 / 83)} per person
                    </div>
                    <div className="text-lg font-bold text-[#59FFA0]">{selectedTicketType?.name} Pass</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Ticket Selection */}
          <div className="space-y-4 mb-6">
            <h3 className="text-lg font-semibold">Ticket Selection</h3>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Persons</label>
                <Select value={quantity.toString()} onValueChange={(value) => setQuantity(Number(value))}>
                  <SelectTrigger className="bg-gray-900/50 border-gray-700 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm text-gray-400 mb-2 block">Ticket Type</label>
                <Select value={selectedTicket} onValueChange={setSelectedTicket}>
                  <SelectTrigger className="bg-gray-900/50 border-gray-700 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {ticketTypes.map((ticket) => (
                      <SelectItem key={ticket.id} value={ticket.id}>
                        {ticket.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Ticket Types */}
          <div className="space-y-3 mb-8">
            {ticketTypes.map((ticket) => (
              <Card
                key={ticket.id}
                className={`cursor-pointer transition-all duration-300 ${
                  selectedTicket === ticket.id
                    ? "bg-[#454ADE]/20 border-[#454ADE] ring-1 ring-[#454ADE]/50"
                    : "bg-gray-900/30 border-gray-800/50 hover:border-gray-600"
                }`}
                onClick={() => setSelectedTicket(ticket.id)}
              >
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold">{ticket.name}</h3>
                        {ticket.id === "early-bird" && (
                          <Badge className="bg-[#59FFA0]/20 text-[#59FFA0] text-xs px-2 py-0">Limited</Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-400 mb-2">{ticket.description}</p>
                      {ticket.originalPrice && (
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-500 line-through">
                            ₹{ticket.originalPrice.toLocaleString()}
                          </span>
                          <span className="text-xs text-[#59FFA0]">
                            Save ₹{(ticket.originalPrice - ticket.price).toLocaleString()}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-[#59FFA0]">₹{ticket.price.toLocaleString()}</div>
                      <div className="text-xs text-gray-400">per person</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Total */}
          <Card className="bg-gradient-to-r from-[#454ADE]/10 to-[#59FFA0]/10 border-gray-800/50 mb-6">
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm text-gray-400">
                    Total for {quantity} person{quantity > 1 ? "s" : ""}
                  </div>
                  <div className="text-xs text-gray-500">{selectedTicketType?.name} Pass</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-[#59FFA0]">₹{totalPrice.toLocaleString()}</div>
                  <div className="text-xs text-gray-400">${Math.round(totalPrice / 83)}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Continue Button */}
          <Button
            size="lg"
            className="w-full bg-[#454ADE] hover:bg-[#454ADE]/80 text-white font-semibold py-4 rounded-xl"
            onClick={handleContinue}
          >
            Continue to Seat Selection
          </Button>

          <div className="text-center mt-4">
            <Button variant="ghost" className="text-gray-400 hover:text-[#59FFA0] text-sm">
              VIEW DETAILS
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
