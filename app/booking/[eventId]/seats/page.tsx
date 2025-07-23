"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"

// Generate seat map data
const generateSeatMap = () => {
  const sections = ["A", "B", "C", "D", "E", "F", "G", "H"]
  const seatMap = []

  for (const section of sections) {
    const sectionSeats = []
    const rowCount = section <= "D" ? 15 : 20 // Front sections have fewer rows

    for (let row = 1; row <= rowCount; row++) {
      const rowSeats = []
      const seatsPerRow = section <= "B" ? 12 : section <= "D" ? 16 : 20

      for (let seat = 1; seat <= seatsPerRow; seat++) {
        const isAvailable = Math.random() > 0.3 // 70% availability
        const isPremium = section <= "C"

        rowSeats.push({
          id: `${section}${row}-${seat}`,
          section,
          row,
          seat,
          available: isAvailable,
          premium: isPremium,
          selected: false,
        })
      }
      sectionSeats.push(rowSeats)
    }
    seatMap.push({ section, rows: sectionSeats })
  }

  return seatMap
}

// Define the props interface for the Seats page, including searchParams
interface SeatsPageProps {
  params: {
    eventId: string;
  };
}

// Rename the main function to SeatsPage and accept the props
export default function SeatsPage({ params }: SeatsPageProps) {   
  const router = useRouter()
  const searchParams = useSearchParams()
  const ticketType = searchParams.get("ticket")
  const quantity = Number.parseInt(searchParams.get("quantity") || "1")

  const [seatMap, setSeatMap] = useState(generateSeatMap())
  const [selectedSeats, setSelectedSeats] = useState<string[]>([])

  const handleSeatClick = (seatId: string) => {
    const seat = seatMap.flatMap((s) => s.rows.flat()).find((s) => s.id === seatId)
    if (!seat?.available) return

    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((id) => id !== seatId))
    } else if (selectedSeats.length < quantity) {
      setSelectedSeats([...selectedSeats, seatId])
    }
  }

  const handleContinue = () => {
    if (selectedSeats.length === quantity) {
      router.push(
        `/booking/${params.eventId}/payment?ticket=${ticketType}&quantity=${quantity}&seats=${selectedSeats.join(",")}`,
      )
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="flex items-center justify-between p-4">
          <Link href={`/booking/${params.eventId}`}>
            <Button variant="ghost" size="sm" className="text-white hover:text-[#59FFA0]">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </Link>
          <div className="text-center">
            <div className="text-sm text-gray-400">Select Seats</div>
            <div className="text-xs text-[#59FFA0] mt-1">
              {selectedSeats.length} of {quantity} selected
            </div>
          </div>
          <Image src="/images/maha-logo.png" alt="MAHA" width={40} height={40} />
        </div>
      </div>

      <div className="px-4 py-6">
        <div className="max-w-4xl mx-auto">
          {/* Stage */}
          <div className="text-center mb-8">
            <div className="bg-gradient-to-r from-[#454ADE] to-[#59FFA0] h-4 rounded-full mb-2 mx-auto max-w-md" />
            <div className="text-sm text-gray-400">STAGE</div>
          </div>

          {/* Seat Map */}
          <div className="space-y-6 mb-8">
            {seatMap.map((section) => (
              <div key={section.section} className="text-center">
                <h3 className="text-lg font-bold mb-4 text-[#59FFA0]">Section {section.section}</h3>
                <div className="space-y-1">
                  {section.rows.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex justify-center gap-1">
                      {row.map((seat) => (
                        <button
                          key={seat.id}
                          onClick={() => handleSeatClick(seat.id)}
                          disabled={!seat.available}
                          className={`w-6 h-6 text-xs rounded transition-all duration-200 ${
                            selectedSeats.includes(seat.id)
                              ? "bg-[#59FFA0] text-black font-bold"
                              : seat.available
                                ? seat.premium
                                  ? "bg-[#454ADE] hover:bg-[#454ADE]/80 text-white"
                                  : "bg-gray-600 hover:bg-gray-500 text-white"
                                : "bg-gray-800 text-gray-600 cursor-not-allowed"
                          }`}
                        >
                          {seat.seat}
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Legend */}
          <Card className="bg-gray-900/50 border-gray-800 mb-8">
            <CardContent className="p-4">
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-[#59FFA0] rounded" />
                  <span>Selected</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-[#454ADE] rounded" />
                  <span>Premium Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-600 rounded" />
                  <span>Standard Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-800 rounded" />
                  <span>Unavailable</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Selected Seats Info */}
          {selectedSeats.length > 0 && (
            <Card className="bg-gradient-to-r from-[#454ADE]/10 to-[#59FFA0]/10 border-gray-800 mb-8">
              <CardContent className="p-4">
                <h4 className="font-bold mb-2">Selected Seats:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedSeats.map((seatId) => (
                    <span key={seatId} className="bg-[#59FFA0]/20 text-[#59FFA0] px-2 py-1 rounded text-sm">
                      {seatId}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Continue Button */}
          <Button
            size="lg"
            className="w-full bg-[#454ADE] hover:bg-[#454ADE]/80 text-white font-semibold py-4"
            onClick={handleContinue}
            disabled={selectedSeats.length !== quantity}
          >
            Continue to Payment ({selectedSeats.length}/{quantity})
          </Button>
        </div>
      </div>
    </div>
  )
}
