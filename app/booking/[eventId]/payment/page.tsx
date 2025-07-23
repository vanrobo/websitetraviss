"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, CreditCard, Smartphone, Wallet } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useRouter, useSearchParams, useParams } from "next/navigation"

const ticketPrices = {
  "early-bird": 2999,
  premium: 4999,
  vip: 8999,
  platinum: 15999,
}


export default function PaymentPage() {  
  const router = useRouter()
  const params = useParams()
  const searchParams = useSearchParams()
  const ticketType = searchParams.get("ticket") || "early-bird"
  const quantity = Number.parseInt(searchParams.get("quantity") || "1")
  const seats = searchParams.get("seats")?.split(",") || []

  const [paymentMethod, setPaymentMethod] = useState("card")
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    name: "",
    email: "",
    phone: "",
  })
  const [isProcessing, setIsProcessing] = useState(false)

  const ticketPrice = ticketPrices[ticketType as keyof typeof ticketPrices] || 2999
  const subtotal = ticketPrice * quantity
  const fees = Math.round(subtotal * 0.05) // 5% booking fee
  const total = subtotal + fees

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handlePayment = async () => {
    setIsProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Redirect to confirmation
    router.push(
      `/booking/${params.eventId}/confirmation?ticket=${ticketType}&quantity=${quantity}&seats=${seats.join(",")}&total=${total}`,
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="flex items-center justify-between p-4">
          <Link href={`/booking/${params.eventId}/seats?ticket=${ticketType}&quantity=${quantity}`}>
            <Button variant="ghost" size="sm" className="text-white hover:text-[#59FFA0]">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </Link>
          <div className="text-center">
            <div className="text-sm text-gray-400">Payment</div>
            <div className="text-xs text-[#59FFA0] mt-1">Step 3 of 3</div>
          </div>
          <Image src="/images/maha-logo.png" alt="MAHA" width={40} height={40} />
        </div>
      </div>

      <div className="px-6 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Order Summary */}
          <Card className="bg-gray-900/50 border-gray-800 mb-8">
            <CardHeader>
              <CardTitle className="text-[#59FFA0]">Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>THE MAHA-RAGE - {ticketType.toUpperCase()}</span>
                  <span>₹{ticketPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Quantity</span>
                  <span>×{quantity}</span>
                </div>
                <div className="flex justify-between">
                  <span>Selected Seats</span>
                  <span className="text-sm text-gray-400">{seats.join(", ")}</span>
                </div>
                <hr className="border-gray-700" />
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Booking Fees</span>
                  <span>₹{fees.toLocaleString()}</span>
                </div>
                <hr className="border-gray-700" />
                <div className="flex justify-between text-xl font-bold text-[#59FFA0]">
                  <span>Total</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Method Selection */}
          <Card className="bg-gray-900/50 border-gray-800 mb-8">
            <CardHeader>
              <CardTitle>Payment Method</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <Button
                  variant={paymentMethod === "card" ? "default" : "outline"}
                  className={`p-4 h-auto flex-col gap-2 ${
                    paymentMethod === "card"
                      ? "bg-[#454ADE] hover:bg-[#454ADE]/80"
                      : "border-gray-600 hover:border-[#454ADE]"
                  }`}
                  onClick={() => setPaymentMethod("card")}
                >
                  <CreditCard className="h-6 w-6" />
                  <span className="text-sm">Card</span>
                </Button>
                <Button
                  variant={paymentMethod === "upi" ? "default" : "outline"}
                  className={`p-4 h-auto flex-col gap-2 ${
                    paymentMethod === "upi"
                      ? "bg-[#454ADE] hover:bg-[#454ADE]/80"
                      : "border-gray-600 hover:border-[#454ADE]"
                  }`}
                  onClick={() => setPaymentMethod("upi")}
                >
                  <Smartphone className="h-6 w-6" />
                  <span className="text-sm">UPI</span>
                </Button>
                <Button
                  variant={paymentMethod === "wallet" ? "default" : "outline"}
                  className={`p-4 h-auto flex-col gap-2 ${
                    paymentMethod === "wallet"
                      ? "bg-[#454ADE] hover:bg-[#454ADE]/80"
                      : "border-gray-600 hover:border-[#454ADE]"
                  }`}
                  onClick={() => setPaymentMethod("wallet")}
                >
                  <Wallet className="h-6 w-6" />
                  <span className="text-sm">Wallet</span>
                </Button>
              </div>

              {/* Payment Form */}
              {paymentMethod === "card" && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      value={formData.cardNumber}
                      onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                      className="bg-gray-800 border-gray-600 text-white"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiryDate">Expiry Date</Label>
                      <Input
                        id="expiryDate"
                        placeholder="MM/YY"
                        value={formData.expiryDate}
                        onChange={(e) => handleInputChange("expiryDate", e.target.value)}
                        className="bg-gray-800 border-gray-600 text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV</Label>
                      <Input
                        id="cvv"
                        placeholder="123"
                        value={formData.cvv}
                        onChange={(e) => handleInputChange("cvv", e.target.value)}
                        className="bg-gray-800 border-gray-600 text-white"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="name">Cardholder Name</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="bg-gray-800 border-gray-600 text-white"
                    />
                  </div>
                </div>
              )}

              {paymentMethod === "upi" && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="upiId">UPI ID</Label>
                    <Input id="upiId" placeholder="yourname@paytm" className="bg-gray-800 border-gray-600 text-white" />
                  </div>
                </div>
              )}

              {paymentMethod === "wallet" && (
                <div className="space-y-4">
                  <Select>
                    <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                      <SelectValue placeholder="Select Wallet" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="paytm">Paytm</SelectItem>
                      <SelectItem value="phonepe">PhonePe</SelectItem>
                      <SelectItem value="googlepay">Google Pay</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-gray-900/50 border-gray-800 mb-8">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-gray-800 border-gray-600 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="bg-gray-800 border-gray-600 text-white"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Confirm Payment Button */}
          <Button
            size="lg"
            className="w-full bg-gradient-to-r from-[#454ADE] to-[#59FFA0] hover:opacity-90 text-white font-bold py-4"
            onClick={handlePayment}
            disabled={isProcessing}
          >
            {isProcessing ? "Processing Payment..." : `Confirm Payment - ₹${total.toLocaleString()}`}
          </Button>

          <p className="text-xs text-gray-400 text-center mt-4">
            By completing this purchase, you agree to our Terms of Service and Privacy Policy. All sales are final and
            non-refundable.
          </p>
        </div>
      </div>
    </div>
  )
}
