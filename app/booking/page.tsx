"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Minus, Plus } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
// CORRECT: Only the useRouter hook is needed for this page.
import { useRouter } from "next/navigation"

const ticketTypes = [
  {
    id: "early-bird",
    name: "Early Bird",
    price: 2999,
    available: 200,
    description: "Limited Time Offer - General Standing",
  },
  { id: "general", name: "General", price: 3999, available: 500, description: "General Standing Area" },
  { id: "vip", name: "VIP", price: 8999, available: 50, description: "VIP Area + Premium Experience" },
]

// CORRECT: The incorrect props interface has been deleted.

// CORRECT: Renamed the component to BookingPage and removed the props.
export default function BookingPage() {
  const router = useRouter()
  const [selectedTicket, setSelectedTicket] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [step, setStep] = useState(1)

  const selectedTicketType = ticketTypes.find((t) => t.id === selectedTicket)
  const totalPrice = selectedTicketType ? selectedTicketType.price * quantity : 0

  const handleContinue = () => {
    // CORRECT: Hardcode the eventId because this is a static page.
    const eventId = "maha-rage-delhi-2025";
    if (step === 1 && selectedTicket) {
      setStep(2)
    } else if (step === 2) {
      router.push(`/booking/${eventId}/seats?ticket=${selectedTicket}&quantity=${quantity}`)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="flex items-center justify-between p-4">
          <Link href="/events">
            <Button variant="ghost" size="sm" className="text-white hover:text-[#59FFA0]">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </Link>
          <div className="text-center">
            <div className="text-sm text-gray-400">Checkout</div>
            <div className="flex items-center gap-2 mt-1">
              <div className={`w-2 h-2 rounded-full ${step >= 1 ? "bg-[#59FFA0]" : "bg-gray-600"}`} />
              <div className={`w-8 h-0.5 ${step >= 2 ? "bg-[#59FFA0]" : "bg-gray-600"}`} />
              <div className={`w-2 h-2 rounded-full ${step >= 2 ? "bg-[#59FFA0]" : "bg-gray-600"}`} />
              <div className={`w-8 h-0.5 ${step >= 3 ? "bg-[#59FFA0]" : "bg-gray-600"}`} />
              <div className={`w-2 h-2 rounded-full ${step >= 3 ? "bg-[#59FFA0]" : "bg-gray-600"}`} />
            </div>
          </div>
          <Image src="/images/maha-logo.png" alt="MAHA" width={40} height={40} />
        </div>
      </div>

      <div className="px-6 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Event Info */}
          <Card className="bg-gray-900/50 border-gray-800 mb-8">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <Image src="/images/maha-logo.png" alt="MAHA" width={60} height={60} />
                <div>
                  <h2 className="text-xl font-bold text-[#59FFA0]">THE MAHA-RAGE</h2>
                  <p className="text-gray-400">30 October 2025 - 31 October 2025</p>
                  <p className="text-sm text-gray-500">Jawaharlal Nehru Stadium, New Delhi</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {step === 1 && (
            <>
              <h1 className="text-3xl font-bold mb-8 text-center">Select Ticket Type</h1>

              <div className="space-y-4 mb-8">
                {ticketTypes.map((ticket) => (
                  <Card
                    key={ticket.id}
                    className={`cursor-pointer transition-all duration-300 ${
                      selectedTicket === ticket.id
                        ? "bg-[#454ADE]/20 border-[#454ADE]"
                        : "bg-gray-900/50 border-gray-800 hover:border-gray-600"
                    }`}
                    onClick={() => setSelectedTicket(ticket.id)}
                  >
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2">{ticket.name}</h3>
                          <p className="text-gray-400 mb-2">{ticket.description}</p>
                          <Badge
                            className={`${ticket.available > 50 ? "bg-[#59FFA0]/20 text-[#59FFA0]" : "bg-orange-500/20 text-orange-400"}`}
                          >
                            {ticket.available} left
                          </Badge>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-[#59FFA0]">₹{ticket.price.toLocaleString()}</div>
                          <div className="text-sm text-gray-400">per ticket</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}

          {step === 2 && selectedTicketType && (
            <>
              <h1 className="text-3xl font-bold mb-8 text-center">Select Quantity</h1>

              <Card className="bg-gray-900/50 border-gray-800 mb-8">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h3 className="text-xl font-bold">{selectedTicketType.name}</h3>
                      <p className="text-gray-400">{selectedTicketType.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[#59FFA0]">
                        ₹{selectedTicketType.price.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-400">per ticket</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                      className="border-[#59FFA0] text-[#59FFA0] hover:bg-[#59FFA0] hover:text-black"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="text-3xl font-bold w-16 text-center">{quantity}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setQuantity(Math.min(8, quantity + 1))}
                      disabled={quantity >= 8}
                      className="border-[#59FFA0] text-[#59FFA0] hover:bg-[#59FFA0] hover:text-black"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="text-center mt-4 text-sm text-gray-400">Maximum 8 tickets per order</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-[#454ADE]/10 to-[#59FFA0]/10 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center text-2xl font-bold">
                    <span>Total:</span>
                    <span className="text-[#59FFA0]">₹{totalPrice.toLocaleString()}</span>
                  </div>
                </CardContent>
              </Card>
            </>
          )}

          {/* Continue Button */}
          <Button
            size="lg"
            className="w-full mt-8 bg-[#454ADE] hover:bg-[#454ADE]/80 text-white font-semibold py-4"
            onClick={handleContinue}
            disabled={step === 1 && !selectedTicket}
          >
            {step === 1 ? "Continue" : "Select Seats"}
          </Button>
        </div>
      </div>
    </div>
  )
}