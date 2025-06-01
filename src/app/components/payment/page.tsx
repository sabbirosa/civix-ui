"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Banknote,
  Check,
  CheckCircle,
  CreditCard,
  DollarSign,
  Lock,
  Receipt,
  Shield,
  Smartphone,
  Wallet,
  X,
  XCircle,
} from "lucide-react";
import { useState } from "react";

export default function PaymentPage() {
  const [selectedMethod, setSelectedMethod] = useState("bkash");
  const [cardData, setCardData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardHolder: "",
  });
  const [mobileData, setMobileData] = useState({
    phoneNumber: "",
    pin: "",
  });

  const services = [
    { name: "Passport Fee / পাসপোর্ট ফি", amount: 3000, code: "PS-001" },
    {
      name: "Birth Certificate / জন্ম সার্টিফিকেট",
      amount: 50,
      code: "BC-002",
    },
    { name: "Trade License / ট্রেড লাইসেন্স", amount: 1000, code: "TL-003" },
  ];

  const handlePayment = (method: string) => {
    console.log(`Payment initiated with ${method}`);
    alert(`Payment successful with ${method}! / ${method} দিয়ে পেমেন্ট সফল!`);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Payment
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Secure payment component supporting multiple payment methods including
          mobile banking, cards, and bank transfers for government services with
          bilingual support.
        </p>
      </div>

      {/* Basic Payment Selection */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Basic Payment Methods
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Choose from various payment methods available for government services
          in Bangladesh.
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Payment Methods / পেমেন্ট পদ্ধতি
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Select your preferred payment method / আপনার পছন্দের পেমেন্ট
                পদ্ধতি নির্বাচন করুন
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-3">
                <Button variant="outline" className="h-16 flex-col text-xs">
                  <Smartphone className="h-5 w-5 mb-1" />
                  bKash
                </Button>
                <Button variant="outline" className="h-16 flex-col text-xs">
                  <Smartphone className="h-5 w-5 mb-1" />
                  Nagad
                </Button>
                <Button variant="outline" className="h-16 flex-col text-xs">
                  <CreditCard className="h-5 w-5 mb-1" />
                  Card
                </Button>
              </div>
              <div className="text-center pt-4 border-t">
                <div className="text-lg font-semibold">Total: ৳500</div>
                <Button className="w-full mt-3">
                  <Shield className="h-4 w-4 mr-2" />
                  Proceed to Payment
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Government Service Payment */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Government Service Payment
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Complete payment system for government services with multiple payment
          options and fee breakdown.
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Government Service Payment / সরকারি সেবার পেমেন্ট
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Pay for government services securely / নিরাপদভাবে সরকারি সেবার
                জন্য পেমেন্ট করুন
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Service List */}
              <div className="space-y-4">
                <h4 className="font-medium text-gray-900 dark:text-gray-100">
                  Service Fees / সেবার ফি
                </h4>
                {services.map((service) => (
                  <div
                    key={service.code}
                    className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded"
                  >
                    <div>
                      <span className="font-medium text-gray-900 dark:text-gray-100">
                        {service.name}
                      </span>
                      <br />
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        Code: {service.code}
                      </span>
                    </div>
                    <span className="font-semibold text-gray-900 dark:text-gray-100">
                      ৳{service.amount}
                    </span>
                  </div>
                ))}
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center font-bold text-lg">
                    <span>Total Amount / মোট পরিমাণ</span>
                    <span>
                      ৳{services.reduce((sum, s) => sum + s.amount, 0)}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Processing Fee Included / প্রসেসিং ফি অন্তর্ভুক্ত
                  </div>
                </div>
              </div>

              {/* Payment Method Selection */}
              <div className="space-y-4">
                <h4 className="font-medium text-gray-900 dark:text-gray-100">
                  Select Payment Method / পেমেন্ট পদ্ধতি নির্বাচন করুন
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button
                    variant={selectedMethod === "bkash" ? "primary" : "outline"}
                    className="h-20 flex-col"
                    onClick={() => setSelectedMethod("bkash")}
                  >
                    <Smartphone className="h-6 w-6 mb-2" />
                    <span className="font-medium">bKash</span>
                    <span className="text-xs opacity-70">Mobile Banking</span>
                  </Button>
                  <Button
                    variant={selectedMethod === "nagad" ? "primary" : "outline"}
                    className="h-20 flex-col"
                    onClick={() => setSelectedMethod("nagad")}
                  >
                    <Smartphone className="h-6 w-6 mb-2" />
                    <span className="font-medium">Nagad</span>
                    <span className="text-xs opacity-70">Mobile Banking</span>
                  </Button>
                  <Button
                    variant={selectedMethod === "card" ? "primary" : "outline"}
                    className="h-20 flex-col"
                    onClick={() => setSelectedMethod("card")}
                  >
                    <CreditCard className="h-6 w-6 mb-2" />
                    <span className="font-medium">Card Payment</span>
                    <span className="text-xs opacity-70">
                      Credit/Debit Card
                    </span>
                  </Button>
                </div>
              </div>

              {/* Payment Details Based on Selection */}
              {selectedMethod === "bkash" || selectedMethod === "nagad" ? (
                <div className="space-y-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h5 className="font-medium text-blue-900 dark:text-blue-100">
                    {selectedMethod === "bkash" ? "bKash" : "Nagad"} Payment
                    Details
                  </h5>
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="mobile-number">
                        Mobile Number / মোবাইল নম্বর *
                      </Label>
                      <Input
                        id="mobile-number"
                        placeholder="+8801XXXXXXXXX"
                        value={mobileData.phoneNumber}
                        onChange={(e) =>
                          setMobileData({
                            ...mobileData,
                            phoneNumber: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="mobile-pin">PIN / পিন *</Label>
                      <Input
                        id="mobile-pin"
                        type="password"
                        placeholder="Enter your PIN"
                        value={mobileData.pin}
                        onChange={(e) =>
                          setMobileData({ ...mobileData, pin: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </div>
              ) : selectedMethod === "card" ? (
                <div className="space-y-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h5 className="font-medium text-green-900 dark:text-green-100">
                    Card Payment Details
                  </h5>
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="card-number">
                        Card Number / কার্ড নম্বর *
                      </Label>
                      <Input
                        id="card-number"
                        placeholder="1234 5678 9012 3456"
                        value={cardData.cardNumber}
                        onChange={(e) =>
                          setCardData({
                            ...cardData,
                            cardNumber: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry">Expiry Date / মেয়াদ *</Label>
                        <Input
                          id="expiry"
                          placeholder="MM/YY"
                          value={cardData.expiryDate}
                          onChange={(e) =>
                            setCardData({
                              ...cardData,
                              expiryDate: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV *</Label>
                        <Input
                          id="cvv"
                          placeholder="123"
                          value={cardData.cvv}
                          onChange={(e) =>
                            setCardData({ ...cardData, cvv: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="card-holder">
                        Card Holder Name / কার্ডধারীর নাম *
                      </Label>
                      <Input
                        id="card-holder"
                        placeholder="Enter cardholder name"
                        value={cardData.cardHolder}
                        onChange={(e) =>
                          setCardData({
                            ...cardData,
                            cardHolder: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
              ) : null}

              <Button
                onClick={() => handlePayment(selectedMethod)}
                className="w-full bg-green-600 hover:bg-green-700"
                size="large"
              >
                <Lock className="h-4 w-4 mr-2" />
                Pay ৳{services.reduce((sum, s) => sum + s.amount, 0)} / ৳
                {services.reduce((sum, s) => sum + s.amount, 0)} পরিশোধ করুন
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Mobile Banking Payment */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Mobile Banking Payment
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Streamlined mobile banking payment interface for quick and secure
          transactions.
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* bKash Payment */}
            <Card className="border-pink-200 dark:border-pink-800">
              <CardHeader className="bg-pink-50 dark:bg-pink-900/20">
                <h3 className="text-lg font-semibold text-pink-900 dark:text-pink-100 flex items-center">
                  <Smartphone className="h-5 w-5 mr-2" />
                  bKash Payment
                </h3>
              </CardHeader>
              <CardContent className="p-4 space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    ৳1,500
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Service Fee
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="bkash-number">bKash Number</Label>
                    <Input id="bkash-number" placeholder="01XXXXXXXXX" />
                  </div>
                  <div>
                    <Label htmlFor="bkash-pin">PIN</Label>
                    <Input
                      id="bkash-pin"
                      type="password"
                      placeholder="Enter your bKash PIN"
                    />
                  </div>
                </div>
                <Button className="w-full bg-pink-600 hover:bg-pink-700">
                  Pay with bKash
                </Button>
                <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
                  Secured by bKash SSL encryption
                </div>
              </CardContent>
            </Card>

            {/* Nagad Payment */}
            <Card className="border-orange-200 dark:border-orange-800">
              <CardHeader className="bg-orange-50 dark:bg-orange-900/20">
                <h3 className="text-lg font-semibold text-orange-900 dark:text-orange-100 flex items-center">
                  <Smartphone className="h-5 w-5 mr-2" />
                  Nagad Payment
                </h3>
              </CardHeader>
              <CardContent className="p-4 space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    ৳1,500
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Service Fee
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="nagad-number">Nagad Number</Label>
                    <Input id="nagad-number" placeholder="01XXXXXXXXX" />
                  </div>
                  <div>
                    <Label htmlFor="nagad-pin">PIN</Label>
                    <Input
                      id="nagad-pin"
                      type="password"
                      placeholder="Enter your Nagad PIN"
                    />
                  </div>
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  Pay with Nagad
                </Button>
                <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
                  Secured by Nagad encryption
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Bank Transfer Payment */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Bank Transfer Payment
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Traditional bank transfer option for users who prefer banking methods.
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Bank Transfer / ব্যাংক ট্রান্সফার
              </h3>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-3">
                  Bank Details / ব্যাংকের তথ্য
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Bank Name:</span>
                    <br />
                    <span>Sonali Bank Limited</span>
                  </div>
                  <div>
                    <span className="font-medium">Account Number:</span>
                    <br />
                    <span>1234567890123</span>
                  </div>
                  <div>
                    <span className="font-medium">Routing Number:</span>
                    <br />
                    <span>123456789</span>
                  </div>
                  <div>
                    <span className="font-medium">Branch:</span>
                    <br />
                    <span>Dhaka Main Branch</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <Label htmlFor="reference">
                    Reference Number / রেফারেন্স নম্বর *
                  </Label>
                  <Input
                    id="reference"
                    placeholder="Enter transaction reference number"
                  />
                </div>
                <div>
                  <Label htmlFor="bank-amount">
                    Amount Transferred / স্থানান্তরিত পরিমাণ *
                  </Label>
                  <Input id="bank-amount" placeholder="৳4,050" />
                </div>
              </div>
              <Button className="w-full">
                <Receipt className="h-4 w-4 mr-2" />
                Confirm Bank Transfer / ব্যাংক ট্রান্সফার নিশ্চিত করুন
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Use Cases */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Use Cases
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <DollarSign className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                    Government Service Fees
                  </h3>
                  <p className="text-blue-800 dark:text-blue-200 text-sm">
                    Process payments for passports, licenses, certificates, and
                    other government document fees with secure processing.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <Receipt className="h-6 w-6 text-green-600 dark:text-green-400 mt-1" />
                <div>
                  <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">
                    Tax Payments
                  </h3>
                  <p className="text-green-800 dark:text-green-200 text-sm">
                    Collect income tax, VAT, customs duties, and other
                    government taxes through multiple payment channels.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <Banknote className="h-6 w-6 text-purple-600 dark:text-purple-400 mt-1" />
                <div>
                  <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">
                    Utility Bills
                  </h3>
                  <p className="text-purple-800 dark:text-purple-200 text-sm">
                    Enable payments for electricity, water, gas bills, and other
                    utility services with bill integration.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <Wallet className="h-6 w-6 text-orange-600 dark:text-orange-400 mt-1" />
                <div>
                  <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">
                    Fine Payments
                  </h3>
                  <p className="text-orange-800 dark:text-orange-200 text-sm">
                    Process traffic fines, court fees, and penalty payments with
                    automated receipt generation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Best Practices */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Best Practices
        </h2>
        <div className="space-y-6">
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-800">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
                Security & Trust
              </h3>
              <ul className="space-y-2 text-blue-800 dark:text-blue-200">
                <li>• Implement SSL encryption for all payment transactions</li>
                <li>• Use secure payment gateways with PCI DSS compliance</li>
                <li>• Display security badges and certificates prominently</li>
                <li>• Never store sensitive payment information locally</li>
                <li>• Provide clear security information to users</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-3">
                User Experience
              </h3>
              <ul className="space-y-2 text-green-800 dark:text-green-200">
                <li>• Provide multiple payment method options</li>
                <li>• Show clear fee breakdown and total amounts</li>
                <li>• Use intuitive payment flow with progress indicators</li>
                <li>• Offer payment confirmation and receipt generation</li>
                <li>• Support payment method preferences and saved options</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200 dark:border-purple-800">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-3">
                Government Compliance
              </h3>
              <ul className="space-y-2 text-purple-800 dark:text-purple-200">
                <li>• Comply with Bangladesh Bank payment regulations</li>
                <li>• Implement proper audit trails for all transactions</li>
                <li>• Support government-approved payment methods</li>
                <li>• Provide bilingual payment interfaces and receipts</li>
                <li>
                  • Maintain transaction records for regulatory compliance
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Usage Guidelines */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Usage Guidelines
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                <h3 className="font-semibold text-green-900 dark:text-green-100">
                  Do
                </h3>
              </div>
              <ul className="space-y-3 text-green-800 dark:text-green-200">
                <li className="flex items-start space-x-2">
                  <Check className="h-4 w-4 mt-0.5 text-green-600" />
                  <span>Clearly display all fees and charges upfront</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="h-4 w-4 mt-0.5 text-green-600" />
                  <span>Provide secure payment processing with encryption</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="h-4 w-4 mt-0.5 text-green-600" />
                  <span>Offer multiple payment method options</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="h-4 w-4 mt-0.5 text-green-600" />
                  <span>Generate confirmation receipts immediately</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="h-4 w-4 mt-0.5 text-green-600" />
                  <span>Support bilingual payment interfaces</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <XCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                <h3 className="font-semibold text-red-900 dark:text-red-100">
                  Don&apos;t
                </h3>
              </div>
              <ul className="space-y-3 text-red-800 dark:text-red-200">
                <li className="flex items-start space-x-2">
                  <X className="h-4 w-4 mt-0.5 text-red-600" />
                  <span>
                    Store payment card details without proper encryption
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <X className="h-4 w-4 mt-0.5 text-red-600" />
                  <span>Hide additional fees until the final step</span>
                </li>
                <li className="flex items-start space-x-2">
                  <X className="h-4 w-4 mt-0.5 text-red-600" />
                  <span>Use unsecured payment processing methods</span>
                </li>
                <li className="flex items-start space-x-2">
                  <X className="h-4 w-4 mt-0.5 text-red-600" />
                  <span>
                    Force users to create accounts for one-time payments
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <X className="h-4 w-4 mt-0.5 text-red-600" />
                  <span>Ignore payment failure handling and recovery</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Component Reference */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Component Reference
        </h2>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left font-medium text-gray-900 dark:text-gray-100">
                    Payment Method
                  </th>
                  <th className="px-6 py-3 text-left font-medium text-gray-900 dark:text-gray-100">
                    Description
                  </th>
                  <th className="px-6 py-3 text-left font-medium text-gray-900 dark:text-gray-100">
                    Security
                  </th>
                  <th className="px-6 py-3 text-left font-medium text-gray-900 dark:text-gray-100">
                    Usage
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-100">
                    bKash/Nagad
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    Mobile banking payment
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    SSL encrypted
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    Most popular for small payments
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-100">
                    Credit/Debit Card
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    International card payment
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    PCI DSS compliant
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    Higher value transactions
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-100">
                    Bank Transfer
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    Direct bank account transfer
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    Bank level security
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    Large amount payments
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-100">
                    Internet Banking
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    Online banking portal
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    Bank authentication
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    Trusted by traditional users
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Accessibility */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Accessibility
        </h2>
        <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-6">
            <div className="space-y-4 text-blue-800 dark:text-blue-200">
              <div>
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  Payment Form Accessibility
                </h3>
                <p>
                  All payment forms include proper labels, error handling, and
                  keyboard navigation for screen reader compatibility.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  Security Indicators
                </h3>
                <p>
                  Visual and textual security indicators help users understand
                  payment safety with appropriate ARIA labels.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  Error Handling
                </h3>
                <p>
                  Clear error messages with high contrast and assistive
                  technology support for payment failures and validation issues.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  Language Support
                </h3>
                <p>
                  Complete bilingual support for payment interfaces, receipts,
                  and error messages in English and Bengali.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
