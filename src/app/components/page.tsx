"use client";

import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AlertTriangle,
  CheckCircle,
  Download,
  Eye,
  EyeOff,
  File,
  Heart,
  Info,
  MessageSquare,
  Share2,
  Star,
  ThumbsUp,
  Upload,
  X,
  XCircle
} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Validation schemas
const citizenRegistrationSchema = z.object({
  fullName: z.string().min(2, "নাম কমপক্ষে ২ অক্ষরের হতে হবে"),
  fullNameBn: z.string().min(2, "বাংলা নাম কমপক্ষে ২ অক্ষরের হতে হবে"),
  nid: z.string().regex(/^\d{10}$|^\d{13}$|^\d{17}$/, "সঠিক জাতীয় পরিচয়পত্র নম্বর দিন"),
  mobile: z.string().regex(/^01[3-9]\d{8}$/, "সঠিক মোবাইল নম্বর দিন (যেমন: 01700000000)"),
  email: z.string().email("সঠিক ইমেইল ঠিকানা দিন"),
  address: z.string().min(10, "সম্পূর্ণ ঠিকানা লিখুন"),
  birthDate: z.string().min(1, "জন্ম তারিখ নির্বাচন করুন"),
  gender: z.enum(["male", "female", "other"], {
    required_error: "লিঙ্গ নির্বাচন করুন",
  }),
});

const serviceApplicationSchema: z.ZodType<any> = z.object({
  serviceType: z.string().min(1, "সেবার ধরন নির্বাচন করুন"),
  applicantName: z.string().min(2, "আবেদনকারীর নাম লিখুন"),
  fatherName: z.string().min(2, "পিতার নাম লিখুন"),
  motherName: z.string().min(2, "মাতার নাম লিখুন"),
  presentAddress: z.string().min(10, "বর্তমান ঠিকানা লিখুন"),
  permanentAddress: z.string().min(10, "স্থায়ী ঠিকানা লিখুন"),
  phoneNumber: z.string().regex(/^01[3-9]\d{8}$/, "সঠিক মোবাইল নম্বর দিন"),
  emergencyContact: z.string().regex(/^01[3-9]\d{8}$/, "জরুরি যোগাযোগের নম্বর দিন"),
  reason: z.string().min(20, "আবেদনের কারণ বিস্তারিত লিখুন (কমপক্ষে ২০ অক্ষর)"),
});

type CitizenRegistrationForm = z.infer<typeof citizenRegistrationSchema>;

const InteractiveDemo = ({ title, description, children }: {
  title: string;
  description: string;
  children: React.ReactNode;
}) => {
  return (
    <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 mb-8">
      <CardHeader>
        <CardTitle className="text-gray-900 dark:text-gray-100">{title}</CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-300">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
};

const FileUploadDemo = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const newFiles = Array.from(e.dataTransfer.files);
      setFiles(prev => [...prev, ...newFiles].slice(0, 5)); // Limit to 5 files
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles].slice(0, 5));
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          dragActive
            ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20"
            : "border-gray-300 dark:border-gray-600 hover:border-primary-400"
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
        <p className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
          Upload Documents / ডকুমেন্ট আপলোড করুন
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          Drag and drop files here, or click to select files
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
          Supports: PDF, JPG, PNG, DOC (Max 5MB each)
        </p>
        <input
          type="file"
          multiple
          accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
          onChange={handleFileInput}
          className="hidden"
          id="file-upload"
        />
        <Button variant="outline" onClick={() => document.getElementById('file-upload')?.click()}>
          <Upload className="h-4 w-4 mr-2" />
          Select Files
        </Button>
      </div>

      {files.length > 0 && (
        <div className="space-y-2">
          <h4 className="font-medium text-gray-900 dark:text-gray-100">Uploaded Files:</h4>
          {files.map((file, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-3">
                <File className="h-5 w-5 text-primary-500" />
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{file.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="small"
                onClick={() => removeFile(index)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const PasswordFieldDemo = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const getPasswordStrength = (pwd: string) => {
    let strength = 0;
    if (pwd.length >= 8) strength++;
    if (/[A-Z]/.test(pwd)) strength++;
    if (/[a-z]/.test(pwd)) strength++;
    if (/[0-9]/.test(pwd)) strength++;
    if (/[^A-Za-z0-9]/.test(pwd)) strength++;
    return strength;
  };

  const passwordStrength = getPasswordStrength(password);
  const strengthColors = ["bg-red-500", "bg-red-400", "bg-yellow-500", "bg-green-400", "bg-green-500"];
  const strengthLabels = ["Very Weak", "Weak", "Fair", "Good", "Strong"];

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="password" required>Password / পাসওয়ার্ড</Label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            placeholder="Enter a strong password"
          />
          <Button
            type="button"
            variant="ghost"
            size="small"
            className="absolute right-0 top-0 h-full px-3"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </Button>
        </div>
        {password && (
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="flex-1 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all ${strengthColors[passwordStrength - 1]}`}
                  style={{ width: `${(passwordStrength / 5) * 100}%` }}
                ></div>
              </div>
              <span className="text-xs text-gray-600 dark:text-gray-300">
                {passwordStrength > 0 ? strengthLabels[passwordStrength - 1] : "Too Weak"}
              </span>
            </div>
            <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-1">
              <li className={`flex items-center space-x-1 ${password.length >= 8 ? "text-green-600" : ""}`}>
                {password.length >= 8 ? <CheckCircle className="h-3 w-3" /> : <XCircle className="h-3 w-3" />}
                <span>At least 8 characters</span>
              </li>
              <li className={`flex items-center space-x-1 ${/[A-Z]/.test(password) ? "text-green-600" : ""}`}>
                {/[A-Z]/.test(password) ? <CheckCircle className="h-3 w-3" /> : <XCircle className="h-3 w-3" />}
                <span>One uppercase letter</span>
              </li>
              <li className={`flex items-center space-x-1 ${/[0-9]/.test(password) ? "text-green-600" : ""}`}>
                {/[0-9]/.test(password) ? <CheckCircle className="h-3 w-3" /> : <XCircle className="h-3 w-3" />}
                <span>One number</span>
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword" required>Confirm Password / পাসওয়ার্ড নিশ্চিত করুন</Label>
        <div className="relative">
          <Input
            id="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            error={confirmPassword && password !== confirmPassword ? "Passwords do not match" : ""}
          />
          <Button
            type="button"
            variant="ghost"
            size="small"
            className="absolute right-0 top-0 h-full px-3"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </div>
  );
};

const CitizenRegistrationDemo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CitizenRegistrationForm>({
    resolver: zodResolver(citizenRegistrationSchema),
  });

  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data: CitizenRegistrationForm) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Form submitted:", data);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
          Registration Successful!
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Your citizen registration has been submitted successfully.
        </p>
        <Button onClick={() => setSubmitted(false)}>
          Submit Another Registration
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="fullName" required>Full Name (English)</Label>
          <Input
            id="fullName"
            {...register("fullName")}
            placeholder="Enter your full name"
            error={errors.fullName?.message}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="fullNameBn" required>Full Name (বাংলা)</Label>
          <Input
            id="fullNameBn"
            {...register("fullNameBn")}
            placeholder="আপনার পূর্ণ নাম লিখুন"
            error={errors.fullNameBn?.message}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="nid" required>National ID Number</Label>
          <Input
            id="nid"
            {...register("nid")}
            placeholder="1234567890123"
            error={errors.nid?.message}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="mobile" required>Mobile Number</Label>
          <Input
            id="mobile"
            {...register("mobile")}
            placeholder="01700000000"
            error={errors.mobile?.message}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" required>Email Address</Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder="your.email@example.com"
            error={errors.email?.message}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="birthDate" required>Date of Birth</Label>
          <Input
            id="birthDate"
            type="date"
            {...register("birthDate")}
            error={errors.birthDate?.message}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="address" required>Address</Label>
        <Textarea
          id="address"
          {...register("address")}
          placeholder="Enter your complete address"
          error={errors.address?.message}
        />
      </div>

      <div className="space-y-2">
        <Label required>Gender</Label>
        <div className="flex space-x-6">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              value="male"
              {...register("gender")}
              className="w-4 h-4 text-primary-600 border-gray-300 focus:ring-primary-500"
            />
            <span className="text-sm text-gray-900 dark:text-gray-100">Male / পুরুষ</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              value="female"
              {...register("gender")}
              className="w-4 h-4 text-primary-600 border-gray-300 focus:ring-primary-500"
            />
            <span className="text-sm text-gray-900 dark:text-gray-100">Female / মহিলা</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              value="other"
              {...register("gender")}
              className="w-4 h-4 text-primary-600 border-gray-300 focus:ring-primary-500"
            />
            <span className="text-sm text-gray-900 dark:text-gray-100">Other / অন্যান্য</span>
          </label>
        </div>
        {errors.gender && (
          <p className="text-sm text-red-600 dark:text-red-400">{errors.gender.message}</p>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting} loading={isSubmitting} className="w-full">
        {isSubmitting ? "Submitting..." : "Submit Registration / নিবন্ধন জমা দিন"}
      </Button>
    </form>
  );
};

const AlertsDemo = () => {
  const [alerts, setAlerts] = useState([
    { id: 1, type: "success", title: "Success", message: "Your application has been submitted successfully.", visible: true },
    { id: 2, type: "warning", title: "Warning", message: "Please review your information before submitting.", visible: true },
    { id: 3, type: "error", title: "Error", message: "Failed to upload document. Please try again.", visible: true },
    { id: 4, type: "info", title: "Information", message: "Your session will expire in 5 minutes.", visible: true },
  ]);

  const removeAlert = (id: number) => {
    setAlerts(prev => prev.filter(alert => alert.id !== id));
  };

  const resetAlerts = () => {
    setAlerts([
      { id: 1, type: "success", title: "Success", message: "Your application has been submitted successfully.", visible: true },
      { id: 2, type: "warning", title: "Warning", message: "Please review your information before submitting.", visible: true },
      { id: 3, type: "error", title: "Error", message: "Failed to upload document. Please try again.", visible: true },
      { id: 4, type: "info", title: "Information", message: "Your session will expire in 5 minutes.", visible: true },
    ]);
  };

  const alertStyles = {
    success: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200",
    warning: "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800 text-yellow-800 dark:text-yellow-200",
    error: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200",
    info: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-200",
  };

  const alertIcons = {
    success: <CheckCircle className="h-5 w-5" />,
    warning: <AlertTriangle className="h-5 w-5" />,
    error: <XCircle className="h-5 w-5" />,
    info: <Info className="h-5 w-5" />,
  };

  return (
    <div className="space-y-4">
      {alerts.map((alert) => (
        <div
          key={alert.id}
          className={`p-4 border rounded-lg flex items-start space-x-3 ${alertStyles[alert.type as keyof typeof alertStyles]}`}
        >
          <div className="flex-shrink-0">
            {alertIcons[alert.type as keyof typeof alertIcons]}
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-medium">{alert.title}</h4>
            <p className="text-sm mt-1">{alert.message}</p>
          </div>
          <Button
            variant="ghost"
            size="small"
            onClick={() => removeAlert(alert.id)}
            className="flex-shrink-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      ))}
      
      {alerts.length === 0 && (
        <div className="text-center py-8 text-gray-500 dark:text-gray-400">
          <p>All alerts have been dismissed.</p>
          <Button variant="outline" onClick={resetAlerts} className="mt-4">
            Reset Alerts
          </Button>
        </div>
      )}
    </div>
  );
};

const PaymentDemo = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [amount, setAmount] = useState("");
  const [processing, setProcessing] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handlePayment = async () => {
    setProcessing(true);
    await new Promise(resolve => setTimeout(resolve, 3000));
    setProcessing(false);
    setCompleted(true);
  };

  if (completed) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
          Payment Successful!
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Transaction ID: PAY-{Math.random().toString(36).substr(2, 9).toUpperCase()}
        </p>
        <Button onClick={() => { setCompleted(false); setAmount(""); setPaymentMethod(""); }}>
          Make Another Payment
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="amount" required>Payment Amount (BDT)</Label>
        <Input
          id="amount"
          type="number"
          value={amount}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAmount(e.target.value)}
          placeholder="0.00"
          min="1"
        />
      </div>

      <div className="space-y-4">
        <Label required>Payment Method</Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { id: "bkash", name: "bKash", logo: "📱" },
            { id: "nagad", name: "Nagad", logo: "💳" },
            { id: "rocket", name: "Rocket", logo: "🚀" },
            { id: "card", name: "Credit/Debit Card", logo: "💳" },
          ].map((method) => (
            <label
              key={method.id}
              className={`flex items-center space-x-3 p-4 border rounded-lg cursor-pointer transition-colors ${
                paymentMethod === method.id
                  ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20"
                  : "border-gray-300 dark:border-gray-600 hover:border-primary-300"
              }`}
            >
              <input
                type="radio"
                value={method.id}
                checked={paymentMethod === method.id}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-4 h-4 text-primary-600 border-gray-300 focus:ring-primary-500"
              />
              <span className="text-2xl">{method.logo}</span>
              <span className="font-medium text-gray-900 dark:text-gray-100">{method.name}</span>
            </label>
          ))}
        </div>
      </div>

      <Button
        onClick={handlePayment}
        disabled={!amount || !paymentMethod || processing}
        loading={processing}
        className="w-full"
      >
        {processing ? "Processing Payment..." : `Pay ৳${amount || "0"}`}
      </Button>
    </div>
  );
};

export default function ComponentsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Interactive Components / ইন্টারঅ্যাক্টিভ কম্পোনেন্ট
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Explore interactive components designed for Bangladesh e-government services. 
              See how components behave, validate data, and provide feedback to users.
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 mt-2 font-bengali">
              বাংলাদেশের ই-সরকার সেবার জন্য ডিজাইন করা ইন্টারঅ্যাক্টিভ কম্পোনেন্ট দেখুন এবং পরীক্ষা করুন।
            </p>
          </div>

          {/* Button Variations */}
          <InteractiveDemo
            title="Button Variations / বাটন বৈচিত্র্য"
            description="Different button styles for various actions and states"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="danger">Delete</Button>
              <Button variant="primary" loading>Loading...</Button>
              <Button variant="outline" disabled>Disabled</Button>
              <Button variant="primary" icon={<Download className="h-4 w-4" />}>
                Download
              </Button>
            </div>
          </InteractiveDemo>

          {/* Form Validation Demo */}
          <InteractiveDemo
            title="Citizen Registration Form / নাগরিক নিবন্ধন ফর্ম"
            description="Complete registration form with real-time validation using Zod"
          >
            <CitizenRegistrationDemo />
          </InteractiveDemo>

          {/* Password Field Demo */}
          <InteractiveDemo
            title="Password Field with Strength Indicator / পাসওয়ার্ড শক্তি নির্দেশক"
            description="Secure password input with strength validation and visibility toggle"
          >
            <PasswordFieldDemo />
          </InteractiveDemo>

          {/* File Upload Demo */}
          <InteractiveDemo
            title="Document Upload / ডকুমেন্ট আপলোড"
            description="Drag and drop file upload with preview and validation"
          >
            <FileUploadDemo />
          </InteractiveDemo>

          {/* Alert Messages */}
          <InteractiveDemo
            title="Alert Messages / সতর্কতা বার্তা"
            description="Different types of alerts for user feedback"
          >
            <AlertsDemo />
          </InteractiveDemo>

          {/* Payment Interface */}
          <InteractiveDemo
            title="Payment Gateway / পেমেন্ট গেটওয়ে"
            description="Secure payment interface with multiple payment methods"
          >
            <PaymentDemo />
          </InteractiveDemo>

          {/* Status Indicators */}
          <InteractiveDemo
            title="Status Indicators / স্ট্যাটাস নির্দেশক"
            description="Various status indicators for applications and services"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="font-medium text-green-800 dark:text-green-200">Approved</span>
                </div>
                <p className="text-sm text-green-700 dark:text-green-300">Your application has been approved</p>
              </div>
              
              <div className="p-4 border border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  <span className="font-medium text-yellow-800 dark:text-yellow-200">Pending</span>
                </div>
                <p className="text-sm text-yellow-700 dark:text-yellow-300">Under review by authorities</p>
              </div>
              
              <div className="p-4 border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <XCircle className="h-5 w-5 text-red-600" />
                  <span className="font-medium text-red-800 dark:text-red-200">Rejected</span>
                </div>
                <p className="text-sm text-red-700 dark:text-red-300">Please resubmit with corrections</p>
              </div>
              
              <div className="p-4 border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Info className="h-5 w-5 text-blue-600" />
                  <span className="font-medium text-blue-800 dark:text-blue-200">In Progress</span>
                </div>
                <p className="text-sm text-blue-700 dark:text-blue-300">Currently being processed</p>
              </div>
            </div>
          </InteractiveDemo>

          {/* Service Feedback */}
          <InteractiveDemo
            title="Service Feedback / সেবার মতামত"
            description="Interactive feedback system for government services"
          >
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  How was your experience? / আপনার অভিজ্ঞতা কেমন ছিল?
                </h3>
                <div className="flex justify-center space-x-4">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <Button
                      key={rating}
                      variant="ghost"
                      size="large"
                      className="p-2 hover:bg-yellow-50 dark:hover:bg-yellow-900/20"
                    >
                      <Star className="h-8 w-8 text-yellow-400 fill-current" />
                    </Button>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-center space-x-4">
                <Button variant="outline" className="flex items-center space-x-2">
                  <ThumbsUp className="h-4 w-4" />
                  <span>Helpful</span>
                </Button>
                <Button variant="outline" className="flex items-center space-x-2">
                  <Heart className="h-4 w-4" />
                  <span>Love it</span>
                </Button>
                <Button variant="outline" className="flex items-center space-x-2">
                  <MessageSquare className="h-4 w-4" />
                  <span>Comment</span>
                </Button>
                <Button variant="outline" className="flex items-center space-x-2">
                  <Share2 className="h-4 w-4" />
                  <span>Share</span>
                </Button>
              </div>
            </div>
          </InteractiveDemo>

          {/* Best Practices Section */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
              Best Practices / সর্বোত্তম অনুশীলন
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
                <CardHeader>
                  <CardTitle className="text-green-800 dark:text-green-200 flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5" />
                    <span>Do / করুন</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-green-800 dark:text-green-200">
                    <li>• Always provide clear error messages in both languages</li>
                    <li>• Use loading states for better user experience</li>
                    <li>• Implement real-time validation for immediate feedback</li>
                    <li>• Include progress indicators for multi-step processes</li>
                    <li>• Test with actual users and government officials</li>
                    <li>• Use consistent patterns across all forms</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
                <CardHeader>
                  <CardTitle className="text-red-800 dark:text-red-200 flex items-center space-x-2">
                    <XCircle className="h-5 w-5" />
                    <span>Don&apos;t / করবেন না</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-red-800 dark:text-red-200">
                    <li>• Don&apos;t show validation errors before user input</li>
                    <li>• Avoid complex forms without clear progress indication</li>
                    <li>• Don&apos;t use technical error messages for end users</li>
                    <li>• Avoid auto-submitting forms without user confirmation</li>
                    <li>• Don&apos;t hide important validation requirements</li>
                    <li>• Avoid inconsistent button placements and styles</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
} 