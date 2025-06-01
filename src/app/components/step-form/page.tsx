"use client";

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
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle,
  FileText,
  Shield,
  Star,
  User,
  X,
  XCircle,
} from "lucide-react";
import { useState } from "react";

// Step Form Components for demonstration
const StepForm = ({
  children,
  currentStep,
  steps,
  // onStepChange,
  // validateStep,
  showProgress = true,
}: {
  children: React.ReactNode;
  currentStep: number;
  steps: { id: number; title: string; description: string }[];
  onStepChange: (step: number) => void;
  validateStep?: (step: number) => boolean;
  showProgress?: boolean;
}) => (
  <div className="space-y-6">
    {/* Step Progress */}
    <div className="flex items-center justify-between mb-8">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
              currentStep === step.id
                ? "bg-blue-500 text-white"
                : currentStep > step.id
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
            }`}
          >
            {currentStep > step.id ? <Check className="h-4 w-4" /> : step.id}
          </div>
          <div className="ml-3 hidden md:block">
            <div
              className={`text-sm font-medium ${
                currentStep >= step.id
                  ? "text-gray-900 dark:text-gray-100"
                  : "text-gray-500 dark:text-gray-400"
              }`}
            >
              {step.title}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {step.description}
            </div>
          </div>
          {index < steps.length - 1 && (
            <div
              className={`w-16 h-0.5 mx-4 ${
                currentStep > step.id
                  ? "bg-green-500"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            />
          )}
        </div>
      ))}
    </div>

    {showProgress && (
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-6">
        <div
          className="bg-blue-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${(currentStep / steps.length) * 100}%` }}
        />
      </div>
    )}

    {children}
  </div>
);

// const StepFormStep = ({
//   children,
//   step,
// }: {
//   children: React.ReactNode;
//   step: number;
// }) => {
//   return <div>{children}</div>;
// };

export default function StepFormPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Info
    fullName: "",
    fullNameBn: "",
    fatherName: "",
    motherName: "",
    dateOfBirth: "",
    nid: "",

    // Contact Info
    presentAddress: "",
    permanentAddress: "",
    mobileNumber: "",
    email: "",

    // Additional Info
    profession: "",
    emergencyContact: "",
    documents: [] as File[],
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const steps = [
    {
      id: 1,
      title: "Personal Information / ব্যক্তিগত তথ্য",
      description: "Basic details / মৌলিক বিবরণ",
    },
    {
      id: 2,
      title: "Contact Information / যোগাযোগের তথ্য",
      description: "Address & contact / ঠিকানা ও যোগাযোগ",
    },
    {
      id: 3,
      title: "Additional Details / অতিরিক্ত বিবরণ",
      description: "Extra information / অতিরিক্ত তথ্য",
    },
    {
      id: 4,
      title: "Review & Submit / পর্যালোচনা ও জমা",
      description: "Verify information / তথ্য যাচাই",
    },
  ];

  const validateCurrentStep = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 1) {
      if (!formData.fullName) newErrors.fullName = "Full name is required";
      if (!formData.fatherName)
        newErrors.fatherName = "Father's name is required";
      if (!formData.motherName)
        newErrors.motherName = "Mother's name is required";
      if (!formData.dateOfBirth)
        newErrors.dateOfBirth = "Date of birth is required";
      if (!formData.nid) newErrors.nid = "National ID is required";
    } else if (currentStep === 2) {
      if (!formData.presentAddress)
        newErrors.presentAddress = "Present address is required";
      if (!formData.mobileNumber)
        newErrors.mobileNumber = "Mobile number is required";
      if (!formData.email) newErrors.email = "Email is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateCurrentStep()) {
      setCurrentStep(Math.min(4, currentStep + 1));
    }
  };

  const prevStep = () => {
    setCurrentStep(Math.max(1, currentStep - 1));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Application submitted successfully!");
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Step Form
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Multi-step form component with progress tracking, validation, and
          government-specific features for citizen registration and service
          applications.
        </p>
      </div>

      {/* Basic Usage */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Basic Usage
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Create multi-step forms with progress indicators and validation for
          complex government applications.
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Simple Registration Form
            </h3>
            <StepForm
              currentStep={1}
              steps={[
                { id: 1, title: "Personal Info", description: "Basic details" },
                {
                  id: 2,
                  title: "Contact Info",
                  description: "Contact details",
                },
                { id: 3, title: "Review", description: "Final review" },
              ]}
              onStepChange={() => {}}
            >
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="simple-name">Full Name</Label>
                      <Input
                        id="simple-name"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="simple-email">Email</Label>
                      <Input
                        id="simple-email"
                        type="email"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="flex justify-between">
                      <Button variant="outline" disabled>
                        Previous
                      </Button>
                      <Button>Next</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </StepForm>
          </div>
        </div>
      </div>

      {/* Government Registration Form */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Government Registration Form
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Complete citizen registration form with step-by-step guidance and
          bilingual support.
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <Card>
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-gray-100">
                Citizen Registration / নাগরিক নিবন্ধন
              </CardTitle>
              <CardDescription>
                Please fill in all required information accurately / সকল
                প্রয়োজনীয় তথ্য সঠিকভাবে পূরণ করুন
              </CardDescription>
            </CardHeader>
            <CardContent>
              <StepForm
                currentStep={currentStep}
                steps={steps}
                onStepChange={setCurrentStep}
                validateStep={validateCurrentStep}
              >
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      Personal Information / ব্যক্তিগত তথ্য
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">
                          Full Name / পূর্ণ নাম *
                        </Label>
                        <Input
                          id="fullName"
                          placeholder="Enter your full name"
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              fullName: e.target.value,
                            })
                          }
                          className={errors.fullName ? "border-red-500" : ""}
                        />
                        {errors.fullName && (
                          <p className="text-red-500 text-sm">
                            {errors.fullName}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="fullNameBn">
                          Full Name (Bengali) / পূর্ণ নাম (বাংলা)
                        </Label>
                        <Input
                          id="fullNameBn"
                          placeholder="বাংলায় আপনার পূর্ণ নাম লিখুন"
                          value={formData.fullNameBn}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              fullNameBn: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="fatherName">
                          Father&apos;s Name / পিতার নাম *
                        </Label>
                        <Input
                          id="fatherName"
                          placeholder="Enter father's name"
                          value={formData.fatherName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              fatherName: e.target.value,
                            })
                          }
                          className={errors.fatherName ? "border-red-500" : ""}
                        />
                        {errors.fatherName && (
                          <p className="text-red-500 text-sm">
                            {errors.fatherName}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="motherName">
                          Mother&apos;s Name / মাতার নাম *
                        </Label>
                        <Input
                          id="motherName"
                          placeholder="Enter mother's name"
                          value={formData.motherName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              motherName: e.target.value,
                            })
                          }
                          className={errors.motherName ? "border-red-500" : ""}
                        />
                        {errors.motherName && (
                          <p className="text-red-500 text-sm">
                            {errors.motherName}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="dateOfBirth">
                          Date of Birth / জন্ম তারিখ *
                        </Label>
                        <Input
                          id="dateOfBirth"
                          type="date"
                          value={formData.dateOfBirth}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              dateOfBirth: e.target.value,
                            })
                          }
                          className={errors.dateOfBirth ? "border-red-500" : ""}
                        />
                        {errors.dateOfBirth && (
                          <p className="text-red-500 text-sm">
                            {errors.dateOfBirth}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="nid">
                          National ID / জাতীয় পরিচয়পত্র *
                        </Label>
                        <Input
                          id="nid"
                          placeholder="1234567890123"
                          value={formData.nid}
                          onChange={(e) =>
                            setFormData({ ...formData, nid: e.target.value })
                          }
                          className={errors.nid ? "border-red-500" : ""}
                        />
                        {errors.nid && (
                          <p className="text-red-500 text-sm">{errors.nid}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <Button variant="outline" disabled>
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Previous
                      </Button>
                      <Button onClick={nextStep}>
                        Next
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 2: Contact Information */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      Contact Information / যোগাযোগের তথ্য
                    </h3>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="presentAddress">
                          Present Address / বর্তমান ঠিকানা *
                        </Label>
                        <Textarea
                          id="presentAddress"
                          placeholder="Enter your present address"
                          rows={3}
                          value={formData.presentAddress}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              presentAddress: e.target.value,
                            })
                          }
                          className={
                            errors.presentAddress ? "border-red-500" : ""
                          }
                        />
                        {errors.presentAddress && (
                          <p className="text-red-500 text-sm">
                            {errors.presentAddress}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="permanentAddress">
                          Permanent Address / স্থায়ী ঠিকানা
                        </Label>
                        <Textarea
                          id="permanentAddress"
                          placeholder="Enter your permanent address"
                          rows={3}
                          value={formData.permanentAddress}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              permanentAddress: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="mobileNumber">
                            Mobile Number / মোবাইল নম্বর *
                          </Label>
                          <Input
                            id="mobileNumber"
                            placeholder="+8801XXXXXXXXX"
                            value={formData.mobileNumber}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                mobileNumber: e.target.value,
                              })
                            }
                            className={
                              errors.mobileNumber ? "border-red-500" : ""
                            }
                          />
                          {errors.mobileNumber && (
                            <p className="text-red-500 text-sm">
                              {errors.mobileNumber}
                            </p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">
                            Email Address / ইমেইল ঠিকানা *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="example@email.com"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                            className={errors.email ? "border-red-500" : ""}
                          />
                          {errors.email && (
                            <p className="text-red-500 text-sm">
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <Button variant="outline" onClick={prevStep}>
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Previous
                      </Button>
                      <Button onClick={nextStep}>
                        Next
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3: Additional Details */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      Additional Details / অতিরিক্ত বিবরণ
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="profession">Profession / পেশা</Label>
                        <Input
                          id="profession"
                          placeholder="Enter your profession"
                          value={formData.profession}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              profession: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="emergencyContact">
                          Emergency Contact / জরুরি যোগাযোগ
                        </Label>
                        <Input
                          id="emergencyContact"
                          placeholder="Emergency contact number"
                          value={formData.emergencyContact}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              emergencyContact: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <Button variant="outline" onClick={prevStep}>
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Previous
                      </Button>
                      <Button onClick={nextStep}>
                        Next
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 4: Review & Submit */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      Review & Submit / পর্যালোচনা ও জমা
                    </h3>
                    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg space-y-4">
                      <h4 className="font-medium text-gray-900 dark:text-gray-100">
                        Personal Information / ব্যক্তিগত তথ্য
                      </h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <strong>Full Name:</strong> {formData.fullName}
                        </div>
                        <div>
                          <strong>Father&apos;s Name:</strong>{" "}
                          {formData.fatherName}
                        </div>
                        <div>
                          <strong>Mother&apos;s Name:</strong>{" "}
                          {formData.motherName}
                        </div>
                        <div>
                          <strong>Date of Birth:</strong> {formData.dateOfBirth}
                        </div>
                        <div>
                          <strong>National ID:</strong> {formData.nid}
                        </div>
                      </div>

                      <h4 className="font-medium text-gray-900 dark:text-gray-100 pt-4">
                        Contact Information / যোগাযোগের তথ্য
                      </h4>
                      <div className="grid grid-cols-1 gap-2 text-sm">
                        <div>
                          <strong>Present Address:</strong>{" "}
                          {formData.presentAddress}
                        </div>
                        <div>
                          <strong>Mobile Number:</strong>{" "}
                          {formData.mobileNumber}
                        </div>
                        <div>
                          <strong>Email:</strong> {formData.email}
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <Button variant="outline" onClick={prevStep}>
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Previous
                      </Button>
                      <Button
                        onClick={handleSubmit}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Submit Application / আবেদন জমা দিন
                      </Button>
                    </div>
                  </div>
                )}
              </StepForm>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Business License Application */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Business License Application
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Multi-step business registration form with document collection and
          verification steps.
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <Card>
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-gray-100">
                Trade License Application / ট্রেড লাইসেন্স আবেদন
              </CardTitle>
              <CardDescription>
                Apply for business registration and trade license / ব্যবসা
                নিবন্ধন ও ট্রেড লাইসেন্সের জন্য আবেদন করুন
              </CardDescription>
            </CardHeader>
            <CardContent>
              <StepForm
                currentStep={1}
                steps={[
                  {
                    id: 1,
                    title: "Business Info / ব্যবসার তথ্য",
                    description: "Company details / কোম্পানির বিবরণ",
                  },
                  {
                    id: 2,
                    title: "Owner Details / মালিকের তথ্য",
                    description: "Owner information / মালিকের তথ্য",
                  },
                  {
                    id: 3,
                    title: "Documents / কাগজপত্র",
                    description: "Required documents / প্রয়োজনীয় কাগজপত্র",
                  },
                  {
                    id: 4,
                    title: "Payment / পেমেন্ট",
                    description: "Fee payment / ফি প্রদান",
                  },
                ]}
                onStepChange={() => {}}
              >
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    Business Information / ব্যবসার তথ্য
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="businessName">
                        Business Name / ব্যবসার নাম *
                      </Label>
                      <Input
                        id="businessName"
                        placeholder="Enter business name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="businessType">
                        Business Type / ব্যবসার ধরন *
                      </Label>
                      <Input
                        id="businessType"
                        placeholder="e.g., Retail, Manufacturing"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="businessAddress">
                        Business Address / ব্যবসার ঠিকানা *
                      </Label>
                      <Textarea
                        id="businessAddress"
                        placeholder="Enter business address"
                        rows={3}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="businessPhone">
                        Business Phone / ব্যবসার ফোন *
                      </Label>
                      <Input id="businessPhone" placeholder="+8801XXXXXXXXX" />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <Button variant="outline" disabled>
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Previous
                    </Button>
                    <Button>
                      Next
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </StepForm>
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
                <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                    Application Forms
                  </h3>
                  <p className="text-blue-800 dark:text-blue-200 text-sm">
                    Create complex government application forms with
                    step-by-step guidance for services like passport, visa, and
                    license applications.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <User className="h-6 w-6 text-green-600 dark:text-green-400 mt-1" />
                <div>
                  <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">
                    Registration Processes
                  </h3>
                  <p className="text-green-800 dark:text-green-200 text-sm">
                    Implement citizen registration, business registration, and
                    service enrollment processes with validation and progress
                    tracking.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <Shield className="h-6 w-6 text-purple-600 dark:text-purple-400 mt-1" />
                <div>
                  <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">
                    Compliance Workflows
                  </h3>
                  <p className="text-purple-800 dark:text-purple-200 text-sm">
                    Build compliance and audit workflows with multiple
                    verification steps, document collection, and approval
                    processes.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <Star className="h-6 w-6 text-orange-600 dark:text-orange-400 mt-1" />
                <div>
                  <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">
                    Survey & Assessment
                  </h3>
                  <p className="text-orange-800 dark:text-orange-200 text-sm">
                    Create multi-section surveys, assessments, and evaluation
                    forms with conditional logic and progress indicators.
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
                User Experience Design
              </h3>
              <ul className="space-y-2 text-blue-800 dark:text-blue-200">
                <li>• Keep each step focused on a single topic or category</li>
                <li>
                  • Provide clear progress indicators and step descriptions
                </li>
                <li>
                  • Allow users to navigate back and forth between completed
                  steps
                </li>
                <li>• Show validation errors immediately and clearly</li>
                <li>• Use descriptive step titles in both languages</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-3">
                Data Management
              </h3>
              <ul className="space-y-2 text-green-800 dark:text-green-200">
                <li>
                  • Implement client-side validation with server-side backup
                </li>
                <li>• Save form progress automatically to prevent data loss</li>
                <li>• Provide form data review before final submission</li>
                <li>• Use proper field types and input constraints</li>
                <li>• Implement secure data transmission and storage</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200 dark:border-purple-800">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-3">
                Government Standards
              </h3>
              <ul className="space-y-2 text-purple-800 dark:text-purple-200">
                <li>
                  • Follow government accessibility guidelines and standards
                </li>
                <li>• Implement proper security measures for sensitive data</li>
                <li>• Provide bilingual support for all form elements</li>
                <li>• Include clear instructions and help text</li>
                <li>• Maintain audit trails for compliance requirements</li>
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
                  <span>
                    Break complex forms into logical, digestible steps
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="h-4 w-4 mt-0.5 text-green-600" />
                  <span>Validate each step before allowing progression</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="h-4 w-4 mt-0.5 text-green-600" />
                  <span>
                    Provide clear progress indicators and completion status
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="h-4 w-4 mt-0.5 text-green-600" />
                  <span>Allow users to save progress and return later</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="h-4 w-4 mt-0.5 text-green-600" />
                  <span>Use consistent bilingual labeling throughout</span>
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
                    Create steps with too many fields or overwhelming content
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <X className="h-4 w-4 mt-0.5 text-red-600" />
                  <span>Allow progression without proper validation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <X className="h-4 w-4 mt-0.5 text-red-600" />
                  <span>Hide the overall progress from users</span>
                </li>
                <li className="flex items-start space-x-2">
                  <X className="h-4 w-4 mt-0.5 text-red-600" />
                  <span>Force users to complete forms in a single session</span>
                </li>
                <li className="flex items-start space-x-2">
                  <X className="h-4 w-4 mt-0.5 text-red-600" />
                  <span>Use technical jargon without explanations</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* API Reference */}
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
                    Component
                  </th>
                  <th className="px-6 py-3 text-left font-medium text-gray-900 dark:text-gray-100">
                    Props
                  </th>
                  <th className="px-6 py-3 text-left font-medium text-gray-900 dark:text-gray-100">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left font-medium text-gray-900 dark:text-gray-100">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-100">
                    StepForm
                  </td>
                  <td className="px-6 py-4 font-mono text-gray-600 dark:text-gray-300">
                    currentStep
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    number
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    Currently active step
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4 font-mono text-gray-600 dark:text-gray-300">
                    steps
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    array
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    Array of step objects with id, title, description
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4 font-mono text-gray-600 dark:text-gray-300">
                    onStepChange
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    function
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    Callback when step changes
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4 font-mono text-gray-600 dark:text-gray-300">
                    validateStep
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    function
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    Optional validation function for steps
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4 font-mono text-gray-600 dark:text-gray-300">
                    showProgress
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    boolean
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    Show progress bar (default: true)
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
                  Keyboard Navigation
                </h3>
                <p>
                  All form elements are accessible via keyboard navigation with
                  proper tab order and focus management.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  Screen Readers
                </h3>
                <p>
                  Proper ARIA labels, roles, and descriptions are provided for
                  all interactive elements and form states.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  Visual Indicators
                </h3>
                <p>
                  Clear visual feedback for current step, completed steps,
                  validation errors, and progress status.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  Language Support
                </h3>
                <p>
                  Full bilingual support with proper language attributes and
                  text direction handling.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
