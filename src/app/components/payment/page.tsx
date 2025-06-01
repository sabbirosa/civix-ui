"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  AlertCircle,
  Banknote,
  Check,
  CheckCircle,
  CreditCard,
  DollarSign,
  Loader2,
  Lock,
  Receipt,
  Shield,
  Smartphone,
  Wallet,
  X,
  XCircle,
} from "lucide-react";
import { useEffect, useState } from "react";

// Toast notification component
interface ToastProps {
  message: string;
  type: "success" | "error" | "info";
  isVisible: boolean;
  onClose: () => void;
}

const Toast = ({ message, type, isVisible, onClose }: ToastProps) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  const bgColor =
    type === "success"
      ? "bg-green-500"
      : type === "error"
        ? "bg-red-500"
        : "bg-blue-500";
  const icon =
    type === "success" ? (
      <CheckCircle className="h-5 w-5" />
    ) : type === "error" ? (
      <AlertCircle className="h-5 w-5" />
    ) : (
      <Loader2 className="h-5 w-5" />
    );

  return (
    <div
      className={`fixed top-4 right-4 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2 transform transition-all duration-300 ease-in-out z-50 ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      {icon}
      <span className="font-medium">{message}</span>
      <button onClick={onClose} className="ml-2 hover:bg-white/20 rounded p-1">
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

// Payment status component
interface PaymentStatusProps {
  status: "idle" | "processing" | "success" | "error";
  method: string;
  amount: number;
}

const PaymentStatus = ({ status, method, amount }: PaymentStatusProps) => {
  if (status === "idle") return null;

  const statusConfig = {
    processing: {
      icon: <Loader2 className="h-12 w-12 animate-spin text-blue-500" />,
      title: "Processing Payment...",
      subtitle: `Processing ${method} payment of ৳${amount}`,
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
    },
    success: {
      icon: <CheckCircle className="h-12 w-12 text-green-500" />,
      title: "Payment Successful!",
      subtitle: `৳${amount} paid successfully via ${method}`,
      bgColor: "bg-green-50 dark:bg-green-900/20",
      borderColor: "border-green-200 dark:border-green-800",
    },
    error: {
      icon: <AlertCircle className="h-12 w-12 text-red-500" />,
      title: "Payment Failed",
      subtitle: `Failed to process ${method} payment. Please try again. / ${method} দিয়ে পেমেন্ট ব্যর্থ।`,
      bgColor: "bg-red-50 dark:bg-red-900/20",
      borderColor: "border-red-200 dark:border-red-800",
    },
  };

  const config = statusConfig[status];

  return (
    <div
      className={`${config.bgColor} ${config.borderColor} border rounded-lg p-6 transition-all duration-500 ease-in-out transform scale-100`}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="transform transition-all duration-300 ease-in-out">
          {config.icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {config.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            {config.subtitle}
          </p>
        </div>
        {status === "success" && (
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Transaction ID: TXN{Date.now()}
          </div>
        )}
      </div>
    </div>
  );
};

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

  // Feedback state management
  const [paymentStatus, setPaymentStatus] = useState<
    "idle" | "processing" | "success" | "error"
  >("idle");
  const [toast, setToast] = useState<{
    isVisible: boolean;
    message: string;
    type: "success" | "error" | "info";
  }>({
    isVisible: false,
    message: "",
    type: "info",
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const services = [
    { name: "Passport Fee / পাসপোর্ট ফি", amount: 3000, code: "PS-001" },
    {
      name: "Birth Certificate / জন্ম সার্টিফিকেট",
      amount: 50,
      code: "BC-002",
    },
    { name: "Trade License / ট্রেড লাইসেন্স", amount: 1000, code: "TL-003" },
  ];

  const totalAmount = services.reduce((sum, s) => sum + s.amount, 0);

  const showToast = (message: string, type: "success" | "error" | "info") => {
    setToast({
      isVisible: true,
      message,
      type,
    });
  };

  const hideToast = () => {
    setToast((prev) => ({ ...prev, isVisible: false }));
  };

  const handlePayment = async (method: string) => {
    // Start processing
    setPaymentStatus("processing");
    setIsButtonDisabled(true);

    showToast("Initiating payment...", "info");

    try {
      // Simulate payment processing delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Simulate random success/failure for demo purposes
      const isSuccess = Math.random() > 0.2; // 80% success rate

      if (isSuccess) {
        setPaymentStatus("success");
        showToast(
          `Payment successful with ${method}! / ${method} দিয়ে পেমেন্ট সফল!`,
          "success"
        );

        // Reset after 5 seconds
        setTimeout(() => {
          setPaymentStatus("idle");
          setIsButtonDisabled(false);
        }, 5000);
      } else {
        setPaymentStatus("error");
        showToast(
          `Payment failed with ${method}. Please try again. / ${method} দিয়ে পেমেন্ট ব্যর্থ।`,
          "error"
        );

        // Reset after 3 seconds
        setTimeout(() => {
          setPaymentStatus("idle");
          setIsButtonDisabled(false);
        }, 3000);
      }
    } catch {
      setPaymentStatus("error");
      showToast("An error occurred during payment processing.", "error");

      setTimeout(() => {
        setPaymentStatus("idle");
        setIsButtonDisabled(false);
      }, 3000);
    }
  };

  const validateForm = () => {
    if (selectedMethod === "card") {
      return (
        cardData.cardNumber &&
        cardData.expiryDate &&
        cardData.cvv &&
        cardData.cardHolder
      );
    } else if (selectedMethod === "bkash" || selectedMethod === "nagad") {
      return mobileData.phoneNumber && mobileData.pin;
    }
    return true;
  };

  return (
    <div className="space-y-8">
      {/* Toast Notification */}
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />

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
                <Button
                  variant="outline"
                  className="h-16 flex-col text-xs"
                  disabled={isButtonDisabled}
                  onClick={() => {
                    setSelectedMethod("bkash");
                    handlePayment("bkash");
                  }}
                >
                  <Smartphone className="h-5 w-5 mb-1" />
                  bKash
                </Button>
                <Button
                  variant="outline"
                  className="h-16 flex-col text-xs"
                  disabled={isButtonDisabled}
                  onClick={() => {
                    setSelectedMethod("nagad");
                    handlePayment("nagad");
                  }}
                >
                  <Smartphone className="h-5 w-5 mb-1" />
                  Nagad
                </Button>
                <Button
                  variant="outline"
                  className="h-16 flex-col text-xs"
                  disabled={isButtonDisabled}
                  onClick={() => {
                    setSelectedMethod("card");
                    handlePayment("card");
                  }}
                >
                  <CreditCard className="h-5 w-5 mb-1" />
                  Card
                </Button>
              </div>
              <div className="text-center pt-4 border-t">
                <div className="text-lg font-semibold">Total: ৳500</div>
                <Button
                  className="w-full mt-3"
                  disabled={isButtonDisabled}
                  onClick={() => handlePayment("default")}
                >
                  {paymentStatus === "processing" ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Shield className="h-4 w-4 mr-2" />
                      Proceed to Payment
                    </>
                  )}
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
              {/* Payment Status Display */}
              {paymentStatus !== "idle" && (
                <PaymentStatus
                  status={paymentStatus}
                  method={selectedMethod}
                  amount={totalAmount}
                />
              )}

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
                    <span>৳{totalAmount}</span>
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
                    disabled={isButtonDisabled}
                  >
                    <Smartphone className="h-6 w-6 mb-2" />
                    <span className="font-medium">bKash</span>
                    <span className="text-xs opacity-70">Mobile Banking</span>
                  </Button>
                  <Button
                    variant={selectedMethod === "nagad" ? "primary" : "outline"}
                    className="h-20 flex-col"
                    onClick={() => setSelectedMethod("nagad")}
                    disabled={isButtonDisabled}
                  >
                    <Smartphone className="h-6 w-6 mb-2" />
                    <span className="font-medium">Nagad</span>
                    <span className="text-xs opacity-70">Mobile Banking</span>
                  </Button>
                  <Button
                    variant={selectedMethod === "card" ? "primary" : "outline"}
                    className="h-20 flex-col"
                    onClick={() => setSelectedMethod("card")}
                    disabled={isButtonDisabled}
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
                        disabled={isButtonDisabled}
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
                        disabled={isButtonDisabled}
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
                        disabled={isButtonDisabled}
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
                          disabled={isButtonDisabled}
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
                          disabled={isButtonDisabled}
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
                        disabled={isButtonDisabled}
                      />
                    </div>
                  </div>
                </div>
              ) : null}

              <Button
                onClick={() => handlePayment(selectedMethod)}
                className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
                size="large"
                disabled={isButtonDisabled || !validateForm()}
              >
                {paymentStatus === "processing" ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Processing Payment...
                  </>
                ) : (
                  <>
                    <Lock className="h-4 w-4 mr-2" />
                    Pay ৳{totalAmount} / ৳{totalAmount} পরিশোধ করুন
                  </>
                )}
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
                    <Input
                      id="bkash-number"
                      placeholder="01XXXXXXXXX"
                      disabled={isButtonDisabled}
                    />
                  </div>
                  <div>
                    <Label htmlFor="bkash-pin">PIN</Label>
                    <Input
                      id="bkash-pin"
                      type="password"
                      placeholder="Enter your bKash PIN"
                      disabled={isButtonDisabled}
                    />
                  </div>
                </div>
                <Button
                  className="w-full bg-pink-600 hover:bg-pink-700 disabled:opacity-50"
                  disabled={isButtonDisabled}
                  onClick={() => handlePayment("bkash")}
                >
                  {paymentStatus === "processing" &&
                  selectedMethod === "bkash" ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Pay with bKash"
                  )}
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
                    <Input
                      id="nagad-number"
                      placeholder="01XXXXXXXXX"
                      disabled={isButtonDisabled}
                    />
                  </div>
                  <div>
                    <Label htmlFor="nagad-pin">PIN</Label>
                    <Input
                      id="nagad-pin"
                      type="password"
                      placeholder="Enter your Nagad PIN"
                      disabled={isButtonDisabled}
                    />
                  </div>
                </div>
                <Button
                  className="w-full bg-orange-600 hover:bg-orange-700 disabled:opacity-50"
                  disabled={isButtonDisabled}
                  onClick={() => handlePayment("nagad")}
                >
                  {paymentStatus === "processing" &&
                  selectedMethod === "nagad" ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Pay with Nagad"
                  )}
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
                    disabled={isButtonDisabled}
                  />
                </div>
                <div>
                  <Label htmlFor="bank-amount">
                    Amount Transferred / স্থানান্তরিত পরিমাণ *
                  </Label>
                  <Input
                    id="bank-amount"
                    placeholder="৳4,050"
                    disabled={isButtonDisabled}
                  />
                </div>
              </div>
              <Button
                className="w-full"
                disabled={isButtonDisabled}
                onClick={() => handlePayment("bank")}
              >
                {paymentStatus === "processing" && selectedMethod === "bank" ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Receipt className="h-4 w-4 mr-2" />
                    Confirm Bank Transfer / ব্যাংক ট্রান্সফার নিশ্চিত করুন
                  </>
                )}
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
          <div className="space-y-4 p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <h3 className="text-lg font-semibold text-green-600 dark:text-green-400 flex items-center">
              <Check className="h-5 w-5 mr-2" />
              Do
            </h3>
            <ul className="space-y-3 text-green-700 dark:text-green-200">
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
          </div>
          <div className="space-y-4 p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 flex items-center">
              <XCircle className="h-5 w-5 mr-2" />
              Don&apos;t
            </h3>
            <ul className="space-y-3 text-red-700 dark:text-red-200">
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
          </div>
        </div>
      </div>

      {/* Component Reference */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Component Specifications
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Detailed specifications and characteristics of the Payment component
          for implementation guidance.
        </p>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                  <th className="text-left p-4 font-semibold text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Specification
                  </th>
                  <th className="text-left p-4 font-semibold text-gray-900 dark:text-gray-100">
                    Details
                  </th>
                  <th className="text-left p-4 font-semibold text-gray-900 dark:text-gray-100">
                    Purpose & Usage
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Component Type
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Payment Processing Interface
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Handles secure payment processing for government fees and
                    services
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Complexity Level
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                      High
                    </span>
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Complex implementation with security, validation, and
                    payment gateway integration
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Payment Methods
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Credit/Debit cards, Mobile banking, Internet banking,
                    Digital wallets
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Multiple payment options to accommodate different citizen
                    preferences
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Security Features
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    PCI compliance, SSL encryption, Fraud detection, Secure
                    tokenization
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Comprehensive security measures for government payment
                    processing
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Transaction States
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Pending, Processing, Success, Failed, Cancelled, Refunded
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Clear transaction status tracking and user feedback
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Accessibility Features
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Screen reader support, Keyboard navigation, Focus
                    management, ARIA labels
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Ensures payment accessibility for all citizens including
                    those with disabilities
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Language Support
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    English, Bengali (বাংলা)
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Bilingual payment interface and transaction messages for
                    government applications
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Compliance Standards
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    PCI DSS, Government security guidelines, Data protection
                    regulations
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Meets government and international payment security
                    standards
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Design System
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Color tokens, Typography scale, Icon system, Security
                    indicators
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Consistent with CivixUI design principles and government
                    branding
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Use Cases
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Service fees, License payments, Fine payments, Tax payments,
                    Application fees
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Essential for processing government service payments and
                    fees
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
