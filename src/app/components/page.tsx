"use client";

import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AlertTriangle,
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  Building,
  CheckCircle,
  CheckSquare,
  Circle,
  Clock,
  CreditCard,
  Download,
  Eye,
  EyeOff,
  File,
  FileText,
  Globe,
  GraduationCap,
  Heart,
  Info,
  MapPin,
  MessageSquare,
  Share2,
  Shield,
  Star,
  ThumbsUp,
  TrendingUp,
  Upload,
  User,
  Users,
  X,
  XCircle,
} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Validation schemas
const citizenRegistrationSchema = z.object({
  fullName: z.string().min(2, "নাম কমপক্ষে ২ অক্ষরের হতে হবে"),
  fullNameBn: z.string().min(2, "বাংলা নাম কমপক্ষে ২ অক্ষরের হতে হবে"),
  nid: z
    .string()
    .regex(/^\d{10}$|^\d{13}$|^\d{17}$/, "সঠিক জাতীয় পরিচয়পত্র নম্বর দিন"),
  mobile: z
    .string()
    .regex(/^01[3-9]\d{8}$/, "সঠিক মোবাইল নম্বর দিন (যেমন: 01700000000)"),
  email: z.string().email("সঠিক ইমেইল ঠিকানা দিন"),
  address: z.string().min(10, "সম্পূর্ণ ঠিকানা লিখুন"),
  birthDate: z.string().min(1, "জন্ম তারিখ নির্বাচন করুন"),
  gender: z.enum(["male", "female", "other"], {
    required_error: "লিঙ্গ নির্বাচন করুন",
  }),
});

// const serviceApplicationSchema: z.ZodType<any> = z.object({
//   serviceType: z.string().min(1, "সেবার ধরন নির্বাচন করুন"),
//   applicantName: z.string().min(2, "আবেদনকারীর নাম লিখুন"),
//   fatherName: z.string().min(2, "পিতার নাম লিখুন"),
//   motherName: z.string().min(2, "মাতার নাম লিখুন"),
//   presentAddress: z.string().min(10, "বর্তমান ঠিকানা লিখুন"),
//   permanentAddress: z.string().min(10, "স্থায়ী ঠিকানা লিখুন"),
//   phoneNumber: z.string().regex(/^01[3-9]\d{8}$/, "সঠিক মোবাইল নম্বর দিন"),
//   emergencyContact: z.string().regex(/^01[3-9]\d{8}$/, "জরুরি যোগাযোগের নম্বর দিন"),
//   reason: z.string().min(20, "আবেদনের কারণ বিস্তারিত লিখুন (কমপক্ষে ২০ অক্ষর)"),
// });

type CitizenRegistrationForm = z.infer<typeof citizenRegistrationSchema>;

const InteractiveDemo = ({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) => {
  return (
    <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 mb-8">
      <CardHeader>
        <CardTitle className="text-gray-900 dark:text-gray-100">
          {title}
        </CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-300">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
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
      setFiles((prev) => [...prev, ...newFiles].slice(0, 5)); // Limit to 5 files
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const newFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...newFiles].slice(0, 5));
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
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
        <Button
          variant="outline"
          onClick={() => document.getElementById("file-upload")?.click()}
        >
          <Upload className="h-4 w-4 mr-2" />
          Select Files
        </Button>
      </div>

      {files.length > 0 && (
        <div className="space-y-2">
          <h4 className="font-medium text-gray-900 dark:text-gray-100">
            Uploaded Files:
          </h4>
          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
            >
              <div className="flex items-center space-x-3">
                <File className="h-5 w-5 text-primary-500" />
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    {file.name}
                  </p>
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
  const strengthColors = [
    "bg-red-500",
    "bg-red-400",
    "bg-yellow-500",
    "bg-green-400",
    "bg-green-500",
  ];
  const strengthLabels = ["Very Weak", "Weak", "Fair", "Good", "Strong"];

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="password" required>
          Password / পাসওয়ার্ড
        </Label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            placeholder="Enter a strong password"
          />
          <Button
            type="button"
            variant="ghost"
            size="small"
            className="absolute right-0 top-0 h-full px-3"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
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
                {passwordStrength > 0
                  ? strengthLabels[passwordStrength - 1]
                  : "Too Weak"}
              </span>
            </div>
            <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-1">
              <li
                className={`flex items-center space-x-1 ${password.length >= 8 ? "text-green-600" : ""}`}
              >
                {password.length >= 8 ? (
                  <CheckCircle className="h-3 w-3" />
                ) : (
                  <XCircle className="h-3 w-3" />
                )}
                <span>At least 8 characters</span>
              </li>
              <li
                className={`flex items-center space-x-1 ${/[A-Z]/.test(password) ? "text-green-600" : ""}`}
              >
                {/[A-Z]/.test(password) ? (
                  <CheckCircle className="h-3 w-3" />
                ) : (
                  <XCircle className="h-3 w-3" />
                )}
                <span>One uppercase letter</span>
              </li>
              <li
                className={`flex items-center space-x-1 ${/[0-9]/.test(password) ? "text-green-600" : ""}`}
              >
                {/[0-9]/.test(password) ? (
                  <CheckCircle className="h-3 w-3" />
                ) : (
                  <XCircle className="h-3 w-3" />
                )}
                <span>One number</span>
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword" required>
          Confirm Password / পাসওয়ার্ড নিশ্চিত করুন
        </Label>
        <div className="relative">
          <Input
            id="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setConfirmPassword(e.target.value)
            }
            placeholder="Confirm your password"
            error={
              confirmPassword && password !== confirmPassword
                ? "Passwords do not match"
                : ""
            }
          />
          <Button
            type="button"
            variant="ghost"
            size="small"
            className="absolute right-0 top-0 h-full px-3"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
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
    await new Promise((resolve) => setTimeout(resolve, 2000));
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
          <Label htmlFor="fullName" required>
            Full Name (English)
          </Label>
          <Input
            id="fullName"
            {...register("fullName")}
            placeholder="Enter your full name"
            error={errors.fullName?.message}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="fullNameBn" required>
            Full Name (বাংলা)
          </Label>
          <Input
            id="fullNameBn"
            {...register("fullNameBn")}
            placeholder="আপনার পূর্ণ নাম লিখুন"
            error={errors.fullNameBn?.message}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="nid" required>
            National ID Number
          </Label>
          <Input
            id="nid"
            {...register("nid")}
            placeholder="1234567890123"
            error={errors.nid?.message}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="mobile" required>
            Mobile Number
          </Label>
          <Input
            id="mobile"
            {...register("mobile")}
            placeholder="01700000000"
            error={errors.mobile?.message}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" required>
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder="your.email@example.com"
            error={errors.email?.message}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="birthDate" required>
            Date of Birth
          </Label>
          <Input
            id="birthDate"
            type="date"
            {...register("birthDate")}
            error={errors.birthDate?.message}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="address" required>
          Address
        </Label>
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
            <span className="text-sm text-gray-900 dark:text-gray-100">
              Male / পুরুষ
            </span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              value="female"
              {...register("gender")}
              className="w-4 h-4 text-primary-600 border-gray-300 focus:ring-primary-500"
            />
            <span className="text-sm text-gray-900 dark:text-gray-100">
              Female / মহিলা
            </span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              value="other"
              {...register("gender")}
              className="w-4 h-4 text-primary-600 border-gray-300 focus:ring-primary-500"
            />
            <span className="text-sm text-gray-900 dark:text-gray-100">
              Other / অন্যান্য
            </span>
          </label>
        </div>
        {errors.gender && (
          <p className="text-sm text-red-600 dark:text-red-400">
            {errors.gender.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        loading={isSubmitting}
        className="w-full"
      >
        {isSubmitting
          ? "Submitting..."
          : "Submit Registration / নিবন্ধন জমা দিন"}
      </Button>
    </form>
  );
};

const AlertsDemo = () => {
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      type: "success",
      title: "Success",
      message: "Your application has been submitted successfully.",
      visible: true,
    },
    {
      id: 2,
      type: "warning",
      title: "Warning",
      message: "Please review your information before submitting.",
      visible: true,
    },
    {
      id: 3,
      type: "error",
      title: "Error",
      message: "Failed to upload document. Please try again.",
      visible: true,
    },
    {
      id: 4,
      type: "info",
      title: "Information",
      message: "Your session will expire in 5 minutes.",
      visible: true,
    },
  ]);

  const removeAlert = (id: number) => {
    setAlerts((prev) => prev.filter((alert) => alert.id !== id));
  };

  const resetAlerts = () => {
    setAlerts([
      {
        id: 1,
        type: "success",
        title: "Success",
        message: "Your application has been submitted successfully.",
        visible: true,
      },
      {
        id: 2,
        type: "warning",
        title: "Warning",
        message: "Please review your information before submitting.",
        visible: true,
      },
      {
        id: 3,
        type: "error",
        title: "Error",
        message: "Failed to upload document. Please try again.",
        visible: true,
      },
      {
        id: 4,
        type: "info",
        title: "Information",
        message: "Your session will expire in 5 minutes.",
        visible: true,
      },
    ]);
  };

  const alertStyles = {
    success:
      "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200",
    warning:
      "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800 text-yellow-800 dark:text-yellow-200",
    error:
      "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200",
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
    await new Promise((resolve) => setTimeout(resolve, 3000));
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
          Transaction ID: PAY-
          {Math.random().toString(36).substr(2, 9).toUpperCase()}
        </p>
        <Button
          onClick={() => {
            setCompleted(false);
            setAmount("");
            setPaymentMethod("");
          }}
        >
          Make Another Payment
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="amount" required>
          Payment Amount (BDT)
        </Label>
        <Input
          id="amount"
          type="number"
          value={amount}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setAmount(e.target.value)
          }
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
              <span className="font-medium text-gray-900 dark:text-gray-100">
                {method.name}
              </span>
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

const ChecklistDemo = () => {
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>(
    {}
  );

  const checklistItems = [
    {
      id: "nid",
      label: "জাতীয় পরিচয়পত্রের কপি",
      labelEn: "National ID Copy",
      required: true,
    },
    {
      id: "birth_cert",
      label: "জন্ম নিবন্ধন সনদ",
      labelEn: "Birth Certificate",
      required: true,
    },
    {
      id: "address_proof",
      label: "ঠিকানার প্রমাণপত্র",
      labelEn: "Address Proof",
      required: true,
    },
    {
      id: "photo",
      label: "পাসপোর্ট সাইজ ছবি",
      labelEn: "Passport Size Photo",
      required: true,
    },
    {
      id: "income_cert",
      label: "আয়ের সনদপত্র",
      labelEn: "Income Certificate",
      required: false,
    },
    {
      id: "bank_statement",
      label: "ব্যাংক স্টেটমেন্ট",
      labelEn: "Bank Statement",
      required: false,
    },
  ];

  const handleCheck = (id: string) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const completedRequired = checklistItems.filter(
    (item) => item.required && checkedItems[item.id]
  ).length;
  const totalRequired = checklistItems.filter((item) => item.required).length;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          Required Documents / প্রয়োজনীয় কাগজপত্র
        </h3>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {completedRequired}/{totalRequired} completed
        </div>
      </div>

      <div className="space-y-3">
        {checklistItems.map((item) => (
          <div
            key={item.id}
            className={`flex items-center space-x-3 p-3 rounded-lg border transition-colors ${
              checkedItems[item.id]
                ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800"
                : "bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
            }`}
          >
            <button
              onClick={() => handleCheck(item.id)}
              className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${
                checkedItems[item.id]
                  ? "bg-green-500 border-green-500 text-white"
                  : "border-gray-300 dark:border-gray-600 hover:border-green-400"
              }`}
            >
              {checkedItems[item.id] && <CheckSquare className="w-4 h-4" />}
            </button>
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <span
                  className={`font-medium ${checkedItems[item.id] ? "text-green-800 dark:text-green-200" : "text-gray-900 dark:text-gray-100"}`}
                >
                  {item.label}
                </span>
                {item.required && (
                  <span className="text-xs bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 px-2 py-1 rounded">
                    Required
                  </span>
                )}
              </div>
              <p
                className={`text-sm ${checkedItems[item.id] ? "text-green-600 dark:text-green-400" : "text-gray-500 dark:text-gray-400"}`}
              >
                {item.labelEn}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <div className="flex items-center space-x-2 mb-2">
          <Info className="w-5 h-5 text-blue-600" />
          <span className="font-medium text-blue-800 dark:text-blue-200">
            Progress
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(completedRequired / totalRequired) * 100}%` }}
          />
        </div>
        <p className="text-sm text-blue-700 dark:text-blue-300 mt-2">
          {completedRequired === totalRequired
            ? "All required documents checked!"
            : `${totalRequired - completedRequired} required documents remaining`}
        </p>
      </div>
    </div>
  );
};

const RadioGroupDemo = () => {
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedEducation, setSelectedEducation] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const genderOptions = [
    { value: "male", label: "পুরুষ", labelEn: "Male" },
    { value: "female", label: "মহিলা", labelEn: "Female" },
    { value: "other", label: "অন্যান্য", labelEn: "Other" },
  ];

  const educationOptions = [
    { value: "primary", label: "প্রাথমিক", labelEn: "Primary" },
    { value: "secondary", label: "মাধ্যমিক", labelEn: "Secondary" },
    {
      value: "higher_secondary",
      label: "উচ্চ মাধ্যমিক",
      labelEn: "Higher Secondary",
    },
    { value: "bachelor", label: "স্নাতক", labelEn: "Bachelor" },
    { value: "master", label: "স্নাতকোত্তর", labelEn: "Master" },
    { value: "phd", label: "পিএইচডি", labelEn: "PhD" },
  ];

  const districtOptions = [
    { value: "dhaka", label: "ঢাকা", labelEn: "Dhaka" },
    { value: "chittagong", label: "চট্টগ্রাম", labelEn: "Chittagong" },
    { value: "sylhet", label: "সিলেট", labelEn: "Sylhet" },
    { value: "rajshahi", label: "রাজশাহী", labelEn: "Rajshahi" },
    { value: "khulna", label: "খুলনা", labelEn: "Khulna" },
    { value: "barishal", label: "বরিশাল", labelEn: "Barishal" },
    { value: "rangpur", label: "রংপুর", labelEn: "Rangpur" },
    { value: "mymensingh", label: "ময়মনসিংহ", labelEn: "Mymensingh" },
  ];

  const RadioGroup = ({
    options,
    value,
    onChange,
    name,
    title,
  }: {
    options: { value: string; label: string; labelEn: string }[];
    value: string;
    onChange: (value: string) => void;
    name: string;
    title: string;
  }) => (
    <div className="space-y-3">
      <h4 className="font-medium text-gray-900 dark:text-gray-100">{title}</h4>
      <div className="space-y-2">
        {options.map(
          (option: { value: string; label: string; labelEn: string }) => (
            <label
              key={option.value}
              className={`flex items-center space-x-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                value === option.value
                  ? "bg-primary-50 dark:bg-primary-900/20 border-primary-200 dark:border-primary-800"
                  : "bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  value === option.value
                    ? "border-primary-500 bg-primary-500"
                    : "border-gray-300 dark:border-gray-600"
                }`}
              >
                {value === option.value && (
                  <Circle className="w-2 h-2 fill-current text-white" />
                )}
              </div>
              <input
                type="radio"
                name={name}
                value={option.value}
                checked={value === option.value}
                onChange={(e) => onChange(e.target.value)}
                className="sr-only"
              />
              <div>
                <div
                  className={`font-medium ${value === option.value ? "text-primary-800 dark:text-primary-200" : "text-gray-900 dark:text-gray-100"}`}
                >
                  {option.label}
                </div>
                <div
                  className={`text-sm ${value === option.value ? "text-primary-600 dark:text-primary-400" : "text-gray-500 dark:text-gray-400"}`}
                >
                  {option.labelEn}
                </div>
              </div>
            </label>
          )
        )}
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <RadioGroup
        options={genderOptions}
        value={selectedGender}
        onChange={setSelectedGender}
        name="gender"
        title="Gender / লিঙ্গ"
      />
      <RadioGroup
        options={educationOptions}
        value={selectedEducation}
        onChange={setSelectedEducation}
        name="education"
        title="Education / শিক্ষাগত যোগ্যতা"
      />
      <RadioGroup
        options={districtOptions}
        value={selectedDistrict}
        onChange={setSelectedDistrict}
        name="district"
        title="District / জেলা"
      />
    </div>
  );
};

const StepFormDemo = () => {
  const [currentStep, setCurrentStep] = useState(1);
  // const [formData, setFormData] = useState({
  //   personal: {},
  //   documents: {},
  //   verification: {},
  //   payment: {},
  // });

  const steps = [
    { id: 1, title: "Personal Info", titleBn: "ব্যক্তিগত তথ্য", icon: User },
    { id: 2, title: "Documents", titleBn: "কাগজপত্র", icon: FileText },
    { id: 3, title: "Verification", titleBn: "যাচাইকরণ", icon: Shield },
    { id: 4, title: "Payment", titleBn: "পেমেন্ট", icon: CreditCard },
  ];

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const StepIndicator = () => (
    <div className="flex items-center justify-between mb-8">
      {steps.map((step, index) => {
        const isActive = currentStep === step.id;
        const isCompleted = currentStep > step.id;
        const IconComponent = step.icon;

        return (
          <div key={step.id} className="flex items-center">
            <div
              className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-colors ${
                isCompleted
                  ? "bg-green-500 border-green-500 text-white"
                  : isActive
                    ? "bg-primary-500 border-primary-500 text-white"
                    : "bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-400"
              }`}
            >
              {isCompleted ? (
                <CheckCircle className="w-6 h-6" />
              ) : (
                <IconComponent className="w-6 h-6" />
              )}
            </div>
            <div className="ml-3 hidden md:block">
              <div
                className={`font-medium ${isActive || isCompleted ? "text-gray-900 dark:text-gray-100" : "text-gray-500 dark:text-gray-400"}`}
              >
                {step.title}
              </div>
              <div
                className={`text-sm ${isActive || isCompleted ? "text-gray-600 dark:text-gray-300" : "text-gray-400"}`}
              >
                {step.titleBn}
              </div>
            </div>
            {index < steps.length - 1 && (
              <ArrowRight
                className={`w-6 h-6 mx-4 ${isCompleted ? "text-green-500" : "text-gray-300 dark:text-gray-600"}`}
              />
            )}
          </div>
        );
      })}
    </div>
  );

  const StepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Personal Information / ব্যক্তিগত তথ্য
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Full Name / পূর্ণ নাম</Label>
                <Input placeholder="Enter your full name" />
              </div>
              <div>
                <Label>Father&apos;s Name / পিতার নাম</Label>
                <Input placeholder="Enter father's name" />
              </div>
              <div>
                <Label>Mother&apos;s Name / মাতার নাম</Label>
                <Input placeholder="Enter mother's name" />
              </div>
              <div>
                <Label>Date of Birth / জন্ম তারিখ</Label>
                <Input type="date" />
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Document Upload / কাগজপত্র আপলোড
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
                <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Upload NID Copy
                </p>
              </div>
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
                <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Upload Photo
                </p>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Verification / যাচাইকরণ
            </h3>
            <div className="text-center py-8">
              <Shield className="mx-auto h-16 w-16 text-green-500 mb-4" />
              <p className="text-lg text-gray-900 dark:text-gray-100 mb-2">
                OTP Verification Required
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We&apos;ve sent a verification code to your mobile number
              </p>
              <Input
                placeholder="Enter 6-digit OTP"
                className="max-w-xs mx-auto"
              />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Payment / পেমেন্ট
            </h3>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium">Service Fee:</span>
                <span className="text-lg font-bold">৳500</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="h-16">
                  <CreditCard className="w-6 h-6 mr-2" />
                  bKash
                </Button>
                <Button variant="outline" className="h-16">
                  <CreditCard className="w-6 h-6 mr-2" />
                  Nagad
                </Button>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <StepIndicator />
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6">
        <StepContent />
      </div>
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={prevStep}
          disabled={currentStep === 1}
        >
          Previous
        </Button>
        <Button onClick={nextStep} disabled={currentStep === steps.length}>
          {currentStep === steps.length ? "Submit" : "Next"}
        </Button>
      </div>
    </div>
  );
};

const TimelineDemo = () => {
  const [selectedApplication, setSelectedApplication] = useState("app001");

  const applications = {
    app001: {
      title: "Trade License Application",
      titleBn: "ট্রেড লাইসেন্স আবেদন",
      status: "In Progress",
      timeline: [
        {
          id: 1,
          title: "Application Submitted",
          titleBn: "আবেদন জমা দেওয়া হয়েছে",
          description: "Application received and initial review started",
          date: "2024-01-15 10:30 AM",
          status: "completed",
          icon: FileText,
        },
        {
          id: 2,
          title: "Document Verification",
          titleBn: "নথি যাচাইকরণ",
          description: "All submitted documents are being verified",
          date: "2024-01-16 02:15 PM",
          status: "completed",
          icon: CheckCircle,
        },
        {
          id: 3,
          title: "Field Inspection",
          titleBn: "মাঠ পরিদর্শন",
          description: "On-site verification by authorized officer",
          date: "2024-01-18 11:00 AM",
          status: "current",
          icon: MapPin,
        },
        {
          id: 4,
          title: "Final Approval",
          titleBn: "চূড়ান্ত অনুমোদন",
          description: "Final review and approval process",
          date: "Pending",
          status: "pending",
          icon: Award,
        },
        {
          id: 5,
          title: "License Issued",
          titleBn: "লাইসেন্স জারি",
          description: "Trade license certificate will be issued",
          date: "Pending",
          status: "pending",
          icon: Download,
        },
      ],
    },
    app002: {
      title: "Birth Certificate Application",
      titleBn: "জন্ম নিবন্ধন সনদ আবেদন",
      status: "Approved",
      timeline: [
        {
          id: 1,
          title: "Application Submitted",
          titleBn: "আবেদন জমা দেওয়া হয়েছে",
          description: "Online application successfully submitted",
          date: "2024-01-10 09:00 AM",
          status: "completed",
          icon: FileText,
        },
        {
          id: 2,
          title: "Payment Confirmed",
          titleBn: "পেমেন্ট নিশ্চিত",
          description: "Application fee payment received",
          date: "2024-01-10 09:15 AM",
          status: "completed",
          icon: CreditCard,
        },
        {
          id: 3,
          title: "Document Review",
          titleBn: "নথি পর্যালোচনা",
          description: "Supporting documents reviewed and approved",
          date: "2024-01-12 03:30 PM",
          status: "completed",
          icon: CheckCircle,
        },
        {
          id: 4,
          title: "Certificate Generated",
          titleBn: "সনদ তৈরি",
          description: "Birth certificate has been generated",
          date: "2024-01-13 10:00 AM",
          status: "completed",
          icon: Award,
        },
        {
          id: 5,
          title: "Ready for Collection",
          titleBn: "সংগ্রহের জন্য প্রস্তুত",
          description: "Certificate ready for pickup or delivery",
          date: "2024-01-13 02:00 PM",
          status: "completed",
          icon: Download,
        },
      ],
    },
  };

  const currentApp =
    applications[selectedApplication as keyof typeof applications];

  return (
    <div className="space-y-6">
      {/* Application Selector */}
      <div className="flex space-x-4 mb-6">
        {Object.entries(applications).map(([key, app]) => (
          <Button
            key={key}
            variant={selectedApplication === key ? "primary" : "outline"}
            onClick={() => setSelectedApplication(key)}
            className="flex-1"
          >
            {app.title}
          </Button>
        ))}
      </div>

      {/* Application Header */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              {currentApp.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {currentApp.titleBn}
            </p>
          </div>
          <div
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              currentApp.status === "Approved"
                ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200"
                : "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200"
            }`}
          >
            {currentApp.status}
          </div>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Application ID: {selectedApplication.toUpperCase()}
        </p>
      </div>

      {/* Timeline */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-6">
          Application Timeline / আবেদনের সময়রেখা
        </h4>

        <div className="relative">
          {currentApp.timeline.map((item, index) => {
            const IconComponent = item.icon;
            const isLast = index === currentApp.timeline.length - 1;

            return (
              <div
                key={item.id}
                className="relative flex items-start space-x-4 pb-8"
              >
                {!isLast && (
                  <div
                    className={`absolute left-6 top-12 w-0.5 h-full ${
                      item.status === "completed"
                        ? "bg-green-500"
                        : "bg-gray-300 dark:bg-gray-600"
                    }`}
                  />
                )}

                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${
                    item.status === "completed"
                      ? "bg-green-500 border-green-500 text-white"
                      : item.status === "current"
                        ? "bg-blue-500 border-blue-500 text-white animate-pulse"
                        : "bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-400"
                  }`}
                >
                  <IconComponent className="w-6 h-6" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h5
                      className={`font-medium ${
                        item.status === "completed" || item.status === "current"
                          ? "text-gray-900 dark:text-gray-100"
                          : "text-gray-500 dark:text-gray-400"
                      }`}
                    >
                      {item.title}
                    </h5>
                    <span
                      className={`text-sm ${
                        item.status === "completed" || item.status === "current"
                          ? "text-gray-600 dark:text-gray-300"
                          : "text-gray-400"
                      }`}
                    >
                      {item.date}
                    </span>
                  </div>
                  <p
                    className={`text-sm mt-1 ${
                      item.status === "completed" || item.status === "current"
                        ? "text-gray-600 dark:text-gray-300"
                        : "text-gray-400"
                    }`}
                  >
                    {item.titleBn}
                  </p>
                  <p
                    className={`text-sm mt-1 ${
                      item.status === "completed" || item.status === "current"
                        ? "text-gray-500 dark:text-gray-400"
                        : "text-gray-400"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const GovernmentServicesDemo = () => {
  const services = [
    {
      category: "Citizen Services",
      categoryBn: "নাগরিক সেবা",
      icon: Users,
      services: [
        {
          name: "Birth Certificate",
          nameBn: "জন্ম নিবন্ধন",
          icon: FileText,
          status: "Online",
        },
        {
          name: "Death Certificate",
          nameBn: "মৃত্যু সনদ",
          icon: FileText,
          status: "Online",
        },
        {
          name: "Marriage Certificate",
          nameBn: "বিবাহ সনদ",
          icon: FileText,
          status: "Online",
        },
        {
          name: "Divorce Certificate",
          nameBn: "তালাক সনদ",
          icon: FileText,
          status: "Offline",
        },
      ],
    },
    {
      category: "Business Services",
      categoryBn: "ব্যবসায়িক সেবা",
      icon: Briefcase,
      services: [
        {
          name: "Trade License",
          nameBn: "ট্রেড লাইসেন্স",
          icon: Award,
          status: "Online",
        },
        {
          name: "VAT Registration",
          nameBn: "ভ্যাট নিবন্ধন",
          icon: Building,
          status: "Online",
        },
        {
          name: "Import License",
          nameBn: "আমদানি লাইসেন্স",
          icon: Globe,
          status: "Offline",
        },
        {
          name: "Export License",
          nameBn: "রপ্তানি লাইসেন্স",
          icon: Globe,
          status: "Online",
        },
      ],
    },
    {
      category: "Education Services",
      categoryBn: "শিক্ষা সেবা",
      icon: GraduationCap,
      services: [
        {
          name: "HSC Certificate",
          nameBn: "এইচএসসি সনদ",
          icon: BookOpen,
          status: "Online",
        },
        {
          name: "SSC Certificate",
          nameBn: "এসএসসি সনদ",
          icon: BookOpen,
          status: "Online",
        },
        {
          name: "Scholarship Application",
          nameBn: "বৃত্তির আবেদন",
          icon: Award,
          status: "Online",
        },
        {
          name: "University Admission",
          nameBn: "বিশ্ববিদ্যালয় ভর্তি",
          icon: GraduationCap,
          status: "Online",
        },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {services.map((category, categoryIndex) => {
        const CategoryIcon = category.icon;
        return (
          <Card
            key={categoryIndex}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
          >
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-gray-900 dark:text-gray-100">
                <CategoryIcon className="w-6 h-6 text-primary-500" />
                <div>
                  <div>{category.category}</div>
                  <div className="text-sm font-normal text-gray-600 dark:text-gray-300">
                    {category.categoryBn}
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {category.services.map((service, serviceIndex) => {
                  const ServiceIcon = service.icon;
                  return (
                    <div
                      key={serviceIndex}
                      className="flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center space-x-3">
                        <ServiceIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                        <div>
                          <div className="font-medium text-gray-900 dark:text-gray-100">
                            {service.name}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-300">
                            {service.nameBn}
                          </div>
                        </div>
                      </div>
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          service.status === "Online"
                            ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200"
                            : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                        }`}
                      >
                        {service.status}
                      </span>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

const StatisticsDemo = () => {
  const stats = [
    {
      title: "Total Applications",
      titleBn: "মোট আবেদন",
      value: "১,২৩,৪৫৬",
      change: "+১২%",
      changeType: "increase",
      icon: FileText,
      color: "blue",
    },
    {
      title: "Approved Today",
      titleBn: "আজ অনুমোদিত",
      value: "৮৯২",
      change: "+৮%",
      changeType: "increase",
      icon: CheckCircle,
      color: "green",
    },
    {
      title: "Pending Review",
      titleBn: "পর্যালোচনাধীন",
      value: "৪,৫৬৭",
      change: "-৫%",
      changeType: "decrease",
      icon: Clock,
      color: "yellow",
    },
    {
      title: "Revenue Generated",
      titleBn: "রাজস্ব আদায়",
      value: "৳২,৩৪,৫৬,৭৮৯",
      change: "+১৫%",
      changeType: "increase",
      icon: TrendingUp,
      color: "purple",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-500 text-blue-100",
      green: "bg-green-500 text-green-100",
      yellow: "bg-yellow-500 text-yellow-100",
      purple: "bg-purple-500 text-purple-100",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <Card
            key={index}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`p-3 rounded-lg ${getColorClasses(stat.color)}`}
                >
                  <IconComponent className="w-6 h-6" />
                </div>
                <span
                  className={`text-sm font-medium ${
                    stat.changeType === "increase"
                      ? "text-green-600 dark:text-green-400"
                      : "text-red-600 dark:text-red-400"
                  }`}
                >
                  {stat.change}
                </span>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {stat.value}
                </p>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {stat.title}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-300">
                  {stat.titleBn}
                </p>
              </div>
            </CardContent>
          </Card>
        );
      })}
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
              Explore interactive components designed for Bangladesh
              e-government services. See how components behave, validate data,
              and provide feedback to users.
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 mt-2 font-bengali">
              বাংলাদেশের ই-সরকার সেবার জন্য ডিজাইন করা ইন্টারঅ্যাক্টিভ
              কম্পোনেন্ট দেখুন এবং পরীক্ষা করুন।
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
              <Button variant="primary" loading>
                Loading...
              </Button>
              <Button variant="outline" disabled>
                Disabled
              </Button>
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
                  <span className="font-medium text-green-800 dark:text-green-200">
                    Approved
                  </span>
                </div>
                <p className="text-sm text-green-700 dark:text-green-300">
                  Your application has been approved
                </p>
              </div>

              <div className="p-4 border border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  <span className="font-medium text-yellow-800 dark:text-yellow-200">
                    Pending
                  </span>
                </div>
                <p className="text-sm text-yellow-700 dark:text-yellow-300">
                  Under review by authorities
                </p>
              </div>

              <div className="p-4 border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <XCircle className="h-5 w-5 text-red-600" />
                  <span className="font-medium text-red-800 dark:text-red-200">
                    Rejected
                  </span>
                </div>
                <p className="text-sm text-red-700 dark:text-red-300">
                  Please resubmit with corrections
                </p>
              </div>

              <div className="p-4 border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Info className="h-5 w-5 text-blue-600" />
                  <span className="font-medium text-blue-800 dark:text-blue-200">
                    In Progress
                  </span>
                </div>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Currently being processed
                </p>
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
                <Button
                  variant="outline"
                  className="flex items-center space-x-2"
                >
                  <ThumbsUp className="h-4 w-4" />
                  <span>Helpful</span>
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center space-x-2"
                >
                  <Heart className="h-4 w-4" />
                  <span>Love it</span>
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center space-x-2"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Comment</span>
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center space-x-2"
                >
                  <Share2 className="h-4 w-4" />
                  <span>Share</span>
                </Button>
              </div>
            </div>
          </InteractiveDemo>

          {/* Document Checklist */}
          <InteractiveDemo
            title="Document Checklist / নথি চেকলিস্ট"
            description="Interactive checklist for required documents with progress tracking"
          >
            <ChecklistDemo />
          </InteractiveDemo>

          {/* Radio Button Groups */}
          <InteractiveDemo
            title="Radio Button Groups / রেডিও বাটন গ্রুপ"
            description="Radio button groups for single selection options with bilingual support"
          >
            <RadioGroupDemo />
          </InteractiveDemo>

          {/* Step-by-Step Form */}
          <InteractiveDemo
            title="Multi-Step Form / ধাপে ধাপে ফর্ম"
            description="Step-by-step form with progress indicator and validation"
          >
            <StepFormDemo />
          </InteractiveDemo>

          {/* Status Timeline */}
          <InteractiveDemo
            title="Application Timeline / আবেদনের সময়রেখা"
            description="Visual timeline showing application status and progress"
          >
            <TimelineDemo />
          </InteractiveDemo>

          {/* Government Services Overview */}
          <InteractiveDemo
            title="Government Services / সরকারি সেবাসমূহ"
            description="Comprehensive overview of available government services by category"
          >
            <GovernmentServicesDemo />
          </InteractiveDemo>

          {/* Statistics Dashboard */}
          <InteractiveDemo
            title="Statistics Dashboard / পরিসংখ্যান ড্যাশবোর্ড"
            description="Key performance indicators and statistics for government services"
          >
            <StatisticsDemo />
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
                    <li>
                      • Always provide clear error messages in both languages
                    </li>
                    <li>• Use loading states for better user experience</li>
                    <li>
                      • Implement real-time validation for immediate feedback
                    </li>
                    <li>
                      • Include progress indicators for multi-step processes
                    </li>
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
                    <li>
                      • Don&apos;t show validation errors before user input
                    </li>
                    <li>
                      • Avoid complex forms without clear progress indication
                    </li>
                    <li>
                      • Don&apos;t use technical error messages for end users
                    </li>
                    <li>
                      • Avoid auto-submitting forms without user confirmation
                    </li>
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
