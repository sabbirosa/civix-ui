"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowRight,
  Building,
  Check,
  CheckCircle,
  FileText,
  User,
  Users,
  X,
  XCircle,
} from "lucide-react";
import { useState } from "react";

export default function FormRegistrationPage() {
  const [citizenData, setCitizenData] = useState({
    fullName: "",
    fullNameBn: "",
    fatherName: "",
    motherName: "",
    nidNumber: "",
    dateOfBirth: "",
    gender: "male",
    maritalStatus: "single",
    religion: "",
    nationality: "Bangladeshi",
    presentAddress: "",
    permanentAddress: "",
    mobileNumber: "",
    email: "",
    emergencyContact: "",
  });

  const [businessData, setBusinessData] = useState({
    businessName: "",
    businessNameBn: "",
    businessType: "",
    ownerName: "",
    ownerNID: "",
    businessAddress: "",
    contactNumber: "",
    email: "",
    licenseType: "general",
    description: "",
    establishmentDate: "",
  });

  const [step, setStep] = useState(1);

  const handleCitizenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Citizen registration:", citizenData);
    alert(
      "Citizen registration submitted successfully! / নাগরিক নিবন্ধন সফলভাবে জমা দেওয়া হয়েছে!"
    );
  };

  const handleBusinessSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Business registration:", businessData);
    alert(
      "Business registration submitted successfully! / ব্যবসা নিবন্ধন সফলভাবে জমা দেওয়া হয়েছে!"
    );
  };

  const nextStep = () => setStep(Math.min(3, step + 1));
  const prevStep = () => setStep(Math.max(1, step - 1));

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Form Registration
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Comprehensive registration forms for citizens and businesses with
          government-specific validation, multi-step workflows, and bilingual
          support.
        </p>
      </div>

      {/* Basic Registration Form */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Basic Registration Form
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Simple registration form with essential fields for user registration
          and service applications.
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Service Registration
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Register for government services
              </p>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="basic-name">Full Name *</Label>
                    <Input
                      id="basic-name"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="basic-email">Email Address *</Label>
                    <Input
                      id="basic-email"
                      type="email"
                      placeholder="example@email.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="basic-phone">Phone Number *</Label>
                    <Input
                      id="basic-phone"
                      type="tel"
                      placeholder="+8801XXXXXXXXX"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="basic-nid">National ID</Label>
                    <Input id="basic-nid" placeholder="1234567890123" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="basic-address">Address</Label>
                  <Textarea
                    id="basic-address"
                    placeholder="Enter your address"
                    rows={3}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Register for Service
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Citizen Registration Form */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Citizen Registration Form
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Complete citizen registration form with comprehensive personal
          information and bilingual support.
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Citizen Registration / নাগরিক নিবন্ধন
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Complete all required information for citizen registration /
                নাগরিক নিবন্ধনের জন্য সমস্ত প্রয়োজনীয় তথ্য পূরণ করুন
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleCitizenSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h4 className="text-md font-semibold text-gray-900 dark:text-gray-100 border-b pb-2">
                    Personal Information / ব্যক্তিগত তথ্য
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="citizen-fullName">
                        Full Name / পূর্ণ নাম *
                      </Label>
                      <Input
                        id="citizen-fullName"
                        required
                        placeholder="Enter your full name"
                        value={citizenData.fullName}
                        onChange={(e) =>
                          setCitizenData({
                            ...citizenData,
                            fullName: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="citizen-fullNameBn">
                        Full Name (Bengali) / পূর্ণ নাম (বাংলা)
                      </Label>
                      <Input
                        id="citizen-fullNameBn"
                        placeholder="বাংলায় আপনার পূর্ণ নাম লিখুন"
                        value={citizenData.fullNameBn}
                        onChange={(e) =>
                          setCitizenData({
                            ...citizenData,
                            fullNameBn: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="citizen-fatherName">
                        Father&apos;s Name / পিতার নাম *
                      </Label>
                      <Input
                        id="citizen-fatherName"
                        required
                        placeholder="Enter father's name"
                        value={citizenData.fatherName}
                        onChange={(e) =>
                          setCitizenData({
                            ...citizenData,
                            fatherName: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="citizen-motherName">
                        Mother&apos;s Name / মাতার নাম *
                      </Label>
                      <Input
                        id="citizen-motherName"
                        required
                        placeholder="Enter mother's name"
                        value={citizenData.motherName}
                        onChange={(e) =>
                          setCitizenData({
                            ...citizenData,
                            motherName: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="citizen-nidNumber">
                        National ID / জাতীয় পরিচয়পত্র *
                      </Label>
                      <Input
                        id="citizen-nidNumber"
                        required
                        placeholder="1234567890123"
                        value={citizenData.nidNumber}
                        onChange={(e) =>
                          setCitizenData({
                            ...citizenData,
                            nidNumber: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="citizen-dateOfBirth">
                        Date of Birth / জন্ম তারিখ *
                      </Label>
                      <Input
                        id="citizen-dateOfBirth"
                        type="date"
                        required
                        value={citizenData.dateOfBirth}
                        onChange={(e) =>
                          setCitizenData({
                            ...citizenData,
                            dateOfBirth: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="citizen-gender">Gender / লিঙ্গ *</Label>
                      <select
                        id="citizen-gender"
                        required
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                        value={citizenData.gender}
                        onChange={(e) =>
                          setCitizenData({
                            ...citizenData,
                            gender: e.target.value,
                          })
                        }
                      >
                        <option value="male">Male / পুরুষ</option>
                        <option value="female">Female / মহিলা</option>
                        <option value="other">Other / অন্যান্য</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="citizen-religion">Religion / ধর্ম</Label>
                      <Input
                        id="citizen-religion"
                        placeholder="Enter your religion"
                        value={citizenData.religion}
                        onChange={(e) =>
                          setCitizenData({
                            ...citizenData,
                            religion: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-4">
                  <h4 className="text-md font-semibold text-gray-900 dark:text-gray-100 border-b pb-2">
                    Contact Information / যোগাযোগের তথ্য
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="citizen-presentAddress">
                        Present Address / বর্তমান ঠিকানা *
                      </Label>
                      <Textarea
                        id="citizen-presentAddress"
                        required
                        rows={3}
                        placeholder="Enter your present address"
                        value={citizenData.presentAddress}
                        onChange={(e) =>
                          setCitizenData({
                            ...citizenData,
                            presentAddress: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="citizen-permanentAddress">
                        Permanent Address / স্থায়ী ঠিকানা
                      </Label>
                      <Textarea
                        id="citizen-permanentAddress"
                        rows={3}
                        placeholder="Enter your permanent address"
                        value={citizenData.permanentAddress}
                        onChange={(e) =>
                          setCitizenData({
                            ...citizenData,
                            permanentAddress: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="citizen-mobileNumber">
                          Mobile Number / মোবাইল নম্বর *
                        </Label>
                        <Input
                          id="citizen-mobileNumber"
                          type="tel"
                          required
                          placeholder="+8801XXXXXXXXX"
                          value={citizenData.mobileNumber}
                          onChange={(e) =>
                            setCitizenData({
                              ...citizenData,
                              mobileNumber: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div>
                        <Label htmlFor="citizen-email">
                          Email Address / ইমেইল ঠিকানা
                        </Label>
                        <Input
                          id="citizen-email"
                          type="email"
                          placeholder="example@email.com"
                          value={citizenData.email}
                          onChange={(e) =>
                            setCitizenData({
                              ...citizenData,
                              email: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <Button type="submit" size="large" className="w-full">
                  Submit Registration / নিবন্ধন জমা দিন
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Business Registration Form */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Business Registration Form
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Multi-step business registration form with progress tracking and
          comprehensive business information collection.
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Business Registration / ব্যবসা নিবন্ধন
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Register your business with the government / সরকারের সাথে আপনার
                ব্যবসা নিবন্ধন করুন
              </p>

              {/* Step Indicator */}
              <div className="flex items-center space-x-4 mt-4">
                {[1, 2, 3].map((stepNumber) => (
                  <div key={stepNumber} className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        step >= stepNumber
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-400"
                      }`}
                    >
                      {step > stepNumber ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        stepNumber
                      )}
                    </div>
                    {stepNumber < 3 && (
                      <div
                        className={`w-12 h-0.5 mx-2 ${
                          step > stepNumber
                            ? "bg-blue-500"
                            : "bg-gray-200 dark:bg-gray-600"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleBusinessSubmit}>
                {/* Step 1: Basic Information */}
                {step === 1 && (
                  <div className="space-y-6">
                    <h4 className="text-md font-semibold text-gray-900 dark:text-gray-100">
                      Basic Information / মৌলিক তথ্য
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="business-name">
                          Business Name / ব্যবসার নাম *
                        </Label>
                        <Input
                          id="business-name"
                          required
                          placeholder="Enter business name"
                          value={businessData.businessName}
                          onChange={(e) =>
                            setBusinessData({
                              ...businessData,
                              businessName: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div>
                        <Label htmlFor="business-name-bn">
                          Business Name (Bengali) / ব্যবসার নাম (বাংলা)
                        </Label>
                        <Input
                          id="business-name-bn"
                          placeholder="বাংলায় ব্যবসার নাম লিখুন"
                          value={businessData.businessNameBn}
                          onChange={(e) =>
                            setBusinessData({
                              ...businessData,
                              businessNameBn: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div>
                        <Label htmlFor="business-type">
                          Business Type / ব্যবসার ধরন *
                        </Label>
                        <select
                          id="business-type"
                          required
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                          value={businessData.businessType}
                          onChange={(e) =>
                            setBusinessData({
                              ...businessData,
                              businessType: e.target.value,
                            })
                          }
                        >
                          <option value="">Select business type</option>
                          <option value="retail">Retail / খুচরা</option>
                          <option value="wholesale">Wholesale / পাইকারি</option>
                          <option value="manufacturing">
                            Manufacturing / উৎপাদন
                          </option>
                          <option value="service">Service / সেবা</option>
                          <option value="restaurant">
                            Restaurant / রেস্তোরাঁ
                          </option>
                          <option value="technology">
                            Technology / প্রযুক্তি
                          </option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="establishment-date">
                          Establishment Date / প্রতিষ্ঠার তারিখ
                        </Label>
                        <Input
                          id="establishment-date"
                          type="date"
                          value={businessData.establishmentDate}
                          onChange={(e) =>
                            setBusinessData({
                              ...businessData,
                              establishmentDate: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="business-description">
                        Business Description / ব্যবসার বিবরণ
                      </Label>
                      <Textarea
                        id="business-description"
                        rows={4}
                        placeholder="Describe your business activities"
                        value={businessData.description}
                        onChange={(e) =>
                          setBusinessData({
                            ...businessData,
                            description: e.target.value,
                          })
                        }
                      />
                    </div>
                    <Button type="button" onClick={nextStep} className="w-full">
                      Next: Owner Information
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                )}

                {/* Step 2: Owner Information */}
                {step === 2 && (
                  <div className="space-y-6">
                    <h4 className="text-md font-semibold text-gray-900 dark:text-gray-100">
                      Owner Information / মালিকের তথ্য
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="owner-name">
                          Owner Name / মালিকের নাম *
                        </Label>
                        <Input
                          id="owner-name"
                          required
                          placeholder="Enter owner's name"
                          value={businessData.ownerName}
                          onChange={(e) =>
                            setBusinessData({
                              ...businessData,
                              ownerName: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div>
                        <Label htmlFor="owner-nid">
                          Owner NID / মালিকের জাতীয় পরিচয়পত্র *
                        </Label>
                        <Input
                          id="owner-nid"
                          required
                          placeholder="1234567890123"
                          value={businessData.ownerNID}
                          onChange={(e) =>
                            setBusinessData({
                              ...businessData,
                              ownerNID: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div>
                        <Label htmlFor="business-contact">
                          Contact Number / যোগাযোগ নম্বর *
                        </Label>
                        <Input
                          id="business-contact"
                          type="tel"
                          required
                          placeholder="+8801XXXXXXXXX"
                          value={businessData.contactNumber}
                          onChange={(e) =>
                            setBusinessData({
                              ...businessData,
                              contactNumber: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div>
                        <Label htmlFor="business-email">
                          Business Email / ব্যবসার ইমেইল
                        </Label>
                        <Input
                          id="business-email"
                          type="email"
                          placeholder="business@example.com"
                          value={businessData.email}
                          onChange={(e) =>
                            setBusinessData({
                              ...businessData,
                              email: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="business-address">
                        Business Address / ব্যবসার ঠিকানা *
                      </Label>
                      <Textarea
                        id="business-address"
                        required
                        rows={3}
                        placeholder="Enter complete business address"
                        value={businessData.businessAddress}
                        onChange={(e) =>
                          setBusinessData({
                            ...businessData,
                            businessAddress: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="flex space-x-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={prevStep}
                        className="flex-1"
                      >
                        Previous
                      </Button>
                      <Button
                        type="button"
                        onClick={nextStep}
                        className="flex-1"
                      >
                        Next: License & Submit
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3: License & Submit */}
                {step === 3 && (
                  <div className="space-y-6">
                    <h4 className="text-md font-semibold text-gray-900 dark:text-gray-100">
                      License Information / লাইসেন্সের তথ্য
                    </h4>
                    <div>
                      <Label htmlFor="license-type">
                        License Type / লাইসেন্সের ধরন *
                      </Label>
                      <select
                        id="license-type"
                        required
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                        value={businessData.licenseType}
                        onChange={(e) =>
                          setBusinessData({
                            ...businessData,
                            licenseType: e.target.value,
                          })
                        }
                      >
                        <option value="general">
                          General Trade License / সাধারণ ট্রেড লাইসেন্স
                        </option>
                        <option value="food">
                          Food & Beverage License / খাদ্য ও পানীয় লাইসেন্স
                        </option>
                        <option value="pharmaceutical">
                          Pharmaceutical License / ঔষধ লাইসেন্স
                        </option>
                        <option value="technology">
                          Technology Service License / প্রযুক্তি সেবা লাইসেন্স
                        </option>
                        <option value="export">
                          Export License / রপ্তানি লাইসেন্স
                        </option>
                      </select>
                    </div>

                    {/* Summary */}
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg space-y-3">
                      <h5 className="font-semibold text-gray-900 dark:text-gray-100">
                        Registration Summary / নিবন্ধনের সারসংক্ষেপ
                      </h5>
                      <div className="text-sm space-y-2">
                        <div className="flex justify-between">
                          <span>Business Name:</span>
                          <span className="font-medium">
                            {businessData.businessName}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Business Type:</span>
                          <span className="font-medium">
                            {businessData.businessType}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Owner:</span>
                          <span className="font-medium">
                            {businessData.ownerName}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>License Type:</span>
                          <span className="font-medium">
                            {businessData.licenseType}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={prevStep}
                        className="flex-1"
                      >
                        Previous
                      </Button>
                      <Button
                        type="submit"
                        className="flex-1 bg-green-600 hover:bg-green-700"
                      >
                        Submit Registration / নিবন্ধন জমা দিন
                      </Button>
                    </div>
                  </div>
                )}
              </form>
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
                <User className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                    Citizen Registration
                  </h3>
                  <p className="text-blue-800 dark:text-blue-200 text-sm">
                    Register citizens for government services, national ID
                    cards, voter registration, and social benefit programs.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <Building className="h-6 w-6 text-green-600 dark:text-green-400 mt-1" />
                <div>
                  <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">
                    Business Registration
                  </h3>
                  <p className="text-green-800 dark:text-green-200 text-sm">
                    Register businesses for trade licenses, tax registration,
                    import/export permits, and regulatory compliance.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <FileText className="h-6 w-6 text-purple-600 dark:text-purple-400 mt-1" />
                <div>
                  <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">
                    Document Applications
                  </h3>
                  <p className="text-purple-800 dark:text-purple-200 text-sm">
                    Apply for passports, driving licenses, birth certificates,
                    marriage certificates, and other official documents.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <Users className="h-6 w-6 text-orange-600 dark:text-orange-400 mt-1" />
                <div>
                  <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">
                    Service Enrollment
                  </h3>
                  <p className="text-orange-800 dark:text-orange-200 text-sm">
                    Enroll in government programs, healthcare services,
                    education systems, and public benefit schemes.
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
                Form Design & Validation
              </h3>
              <ul className="space-y-2 text-blue-800 dark:text-blue-200">
                <li>
                  • Group related fields logically and use clear section headers
                </li>
                <li>
                  • Implement real-time validation with helpful error messages
                </li>
                <li>
                  • Use appropriate input types and constraints for data
                  validation
                </li>
                <li>• Provide clear required field indicators and help text</li>
                <li>• Save progress automatically to prevent data loss</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-3">
                User Experience
              </h3>
              <ul className="space-y-2 text-green-800 dark:text-green-200">
                <li>
                  • Break long forms into logical steps with progress indicators
                </li>
                <li>
                  • Allow users to navigate back and edit previous sections
                </li>
                <li>
                  • Provide clear instructions and examples for complex fields
                </li>
                <li>• Use auto-complete and smart defaults when possible</li>
                <li>• Offer multiple language options for diverse user base</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200 dark:border-purple-800">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-3">
                Government Compliance
              </h3>
              <ul className="space-y-2 text-purple-800 dark:text-purple-200">
                <li>
                  • Follow government data collection and privacy standards
                </li>
                <li>• Implement secure data transmission and storage</li>
                <li>• Provide bilingual support as required by law</li>
                <li>• Include accessibility features for disabled users</li>
                <li>• Maintain audit trails and compliance documentation</li>
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
                  <span>Use clear, descriptive labels for all form fields</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="h-4 w-4 mt-0.5 text-green-600" />
                  <span>
                    Provide both English and Bengali labels when required
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="h-4 w-4 mt-0.5 text-green-600" />
                  <span>Validate data on both client and server side</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="h-4 w-4 mt-0.5 text-green-600" />
                  <span>Group related information into logical sections</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="h-4 w-4 mt-0.5 text-green-600" />
                  <span>Provide clear success and error feedback</span>
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
                  <span>Create overly long forms without section breaks</span>
                </li>
                <li className="flex items-start space-x-2">
                  <X className="h-4 w-4 mt-0.5 text-red-600" />
                  <span>Use technical jargon without explanations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <X className="h-4 w-4 mt-0.5 text-red-600" />
                  <span>Skip validation or provide unclear error messages</span>
                </li>
                <li className="flex items-start space-x-2">
                  <X className="h-4 w-4 mt-0.5 text-red-600" />
                  <span>Collect unnecessary personal information</span>
                </li>
                <li className="flex items-start space-x-2">
                  <X className="h-4 w-4 mt-0.5 text-red-600" />
                  <span>Ignore accessibility requirements</span>
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
                    Element
                  </th>
                  <th className="px-6 py-3 text-left font-medium text-gray-900 dark:text-gray-100">
                    Purpose
                  </th>
                  <th className="px-6 py-3 text-left font-medium text-gray-900 dark:text-gray-100">
                    Required
                  </th>
                  <th className="px-6 py-3 text-left font-medium text-gray-900 dark:text-gray-100">
                    Example
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-100">
                    Form Header
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    Title and description
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    Yes
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    Citizen Registration / নাগরিক নিবন্ধন
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-100">
                    Section Headers
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    Group related fields
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    Recommended
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    Personal Information / ব্যক্তিগত তথ্য
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-100">
                    Field Labels
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    Bilingual field identification
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    Yes
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    Full Name / পূর্ণ নাম *
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-100">
                    Validation
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    Data validation and error display
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    Yes
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    Required field validation
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-100">
                    Progress Indicator
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    Multi-step form progress
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    For multi-step
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    Step 1 of 3
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
                  Form Labels & Structure
                </h3>
                <p>
                  All form elements have proper labels and are structured with
                  semantic HTML for screen reader compatibility.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  Keyboard Navigation
                </h3>
                <p>
                  Complete keyboard navigation support with logical tab order
                  and focus management throughout all form sections.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  Error Handling
                </h3>
                <p>
                  Clear error messages with ARIA labels and proper color
                  contrast for accessibility compliance.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  Language Support
                </h3>
                <p>
                  Bilingual form support with proper language attributes and
                  text direction handling for English and Bengali.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
