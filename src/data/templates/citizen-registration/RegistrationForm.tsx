"use client";

import {
  AlertCircle,
  Check,
  ChevronLeft,
  ChevronRight,
  Upload,
} from "lucide-react";
import { useState } from "react";

interface PersonalInfo {
  fullName: string;
  fullNameBn: string;
  nidNumber: string;
  birthDate: string;
  gender: string;
  fatherName: string;
  motherName: string;
  spouse?: string;
}

interface ContactInfo {
  mobile: string;
  email: string;
  emergencyContact: string;
  emergencyRelation: string;
}

interface DocumentInfo {
  nidCopy: File | null;
  birthCertificate: File | null;
  photograph: File | null;
  signature: File | null;
}

const STEPS = [
  { id: 1, title: "Personal Information", titleBn: "ব্যক্তিগত তথ্য" },
  { id: 2, title: "Address Details", titleBn: "ঠিকানার বিবরণ" },
  { id: 3, title: "Contact Information", titleBn: "যোগাযোগের তথ্য" },
  { id: 4, title: "Document Upload", titleBn: "ডকুমেন্ট আপলোড" },
  { id: 5, title: "Review & Submit", titleBn: "পর্যালোচনা ও জমা" },
];

export default function CitizenRegistrationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    fullName: "",
    fullNameBn: "",
    nidNumber: "",
    birthDate: "",
    gender: "",
    fatherName: "",
    motherName: "",
    spouse: "",
  });

  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    mobile: "",
    email: "",
    emergencyContact: "",
    emergencyRelation: "",
  });

  const [documents, setDocuments] = useState<DocumentInfo>({
    nidCopy: null,
    birthCertificate: null,
    photograph: null,
    signature: null,
  });

  const handleNext = () => {
    if (currentStep < STEPS.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFileUpload = (field: keyof DocumentInfo, file: File) => {
    setDocuments((prev) => ({
      ...prev,
      [field]: file,
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    alert("Application submitted successfully!");
    setIsSubmitting(false);
  };

  const renderPersonalInfoStep = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Personal Information / ব্যক্তিগত তথ্য
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name (English) *
          </label>
          <input
            type="text"
            value={personalInfo.fullName}
            onChange={(e) =>
              setPersonalInfo((prev) => ({ ...prev, fullName: e.target.value }))
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            পূর্ণ নাম (বাংলা) *
          </label>
          <input
            type="text"
            value={personalInfo.fullNameBn}
            onChange={(e) =>
              setPersonalInfo((prev) => ({
                ...prev,
                fullNameBn: e.target.value,
              }))
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="আপনার পূর্ণ নাম লিখুন"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            National ID Number *
          </label>
          <input
            type="text"
            value={personalInfo.nidNumber}
            onChange={(e) =>
              setPersonalInfo((prev) => ({
                ...prev,
                nidNumber: e.target.value,
              }))
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Enter your NID number"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date of Birth *
          </label>
          <input
            type="date"
            value={personalInfo.birthDate}
            onChange={(e) =>
              setPersonalInfo((prev) => ({
                ...prev,
                birthDate: e.target.value,
              }))
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Gender *
          </label>
          <select
            value={personalInfo.gender}
            onChange={(e) =>
              setPersonalInfo((prev) => ({ ...prev, gender: e.target.value }))
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Father&apos;s Name *
          </label>
          <input
            type="text"
            value={personalInfo.fatherName}
            onChange={(e) =>
              setPersonalInfo((prev) => ({
                ...prev,
                fatherName: e.target.value,
              }))
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Enter father's name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mother&apos;s Name *
          </label>
          <input
            type="text"
            value={personalInfo.motherName}
            onChange={(e) =>
              setPersonalInfo((prev) => ({
                ...prev,
                motherName: e.target.value,
              }))
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Enter mother's name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Spouse Name (if married)
          </label>
          <input
            type="text"
            value={personalInfo.spouse || ""}
            onChange={(e) =>
              setPersonalInfo((prev) => ({ ...prev, spouse: e.target.value }))
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Enter spouse name"
          />
        </div>
      </div>
    </div>
  );

  const renderDocumentUploadStep = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Document Upload / ডকুমেন্ট আপলোড
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { key: "nidCopy", label: "National ID Copy", required: true },
          {
            key: "birthCertificate",
            label: "Birth Certificate",
            required: true,
          },
          { key: "photograph", label: "Recent Photograph", required: true },
          { key: "signature", label: "Signature", required: false },
        ].map(({ key, label, required }) => (
          <div
            key={key}
            className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center"
          >
            <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h4 className="font-medium text-gray-900 mb-2">
              {label} {required && "*"}
            </h4>
            <input
              type="file"
              accept="image/*,.pdf"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleFileUpload(key as keyof DocumentInfo, file);
              }}
              className="hidden"
              id={key}
            />
            <label
              htmlFor={key}
              className="cursor-pointer bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-600 transition-colors"
            >
              Choose File
            </label>
            {documents[key as keyof DocumentInfo] && (
              <div className="mt-2 text-sm text-green-600 flex items-center justify-center">
                <Check className="h-4 w-4 mr-1" />
                File uploaded
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
        <div className="flex">
          <AlertCircle className="h-5 w-5 text-blue-400 mr-2" />
          <div className="text-sm text-blue-800">
            <p className="font-medium mb-1">File Requirements:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Maximum file size: 5MB</li>
              <li>Accepted formats: JPG, PNG, PDF</li>
              <li>Documents should be clear and readable</li>
              <li>All required documents must be uploaded</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const renderReviewStep = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Review Information / তথ্য পর্যালোচনা
      </h3>

      <div className="bg-gray-50 rounded-lg p-6 space-y-6">
        <div>
          <h4 className="font-medium text-gray-900 mb-3">
            Personal Information
          </h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium">Name:</span> {personalInfo.fullName}
            </div>
            <div>
              <span className="font-medium">NID:</span> {personalInfo.nidNumber}
            </div>
            <div>
              <span className="font-medium">Birth Date:</span>{" "}
              {personalInfo.birthDate}
            </div>
            <div>
              <span className="font-medium">Gender:</span> {personalInfo.gender}
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-medium text-gray-900 mb-3">
            Contact Information
          </h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium">Mobile:</span> {contactInfo.mobile}
            </div>
            <div>
              <span className="font-medium">Email:</span> {contactInfo.email}
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-medium text-gray-900 mb-3">Documents</h4>
          <div className="space-y-2 text-sm">
            {Object.entries(documents).map(([key, file]) => (
              <div key={key} className="flex items-center">
                <Check className="h-4 w-4 text-green-500 mr-2" />
                <span>
                  {key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}
                  :{" "}
                </span>
                <span className="text-gray-600">
                  {file?.name || "Not uploaded"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
        <div className="flex">
          <AlertCircle className="h-5 w-5 text-yellow-400 mr-2" />
          <div className="text-sm text-yellow-800">
            <p className="font-medium">
              Please review all information carefully before submitting.
            </p>
            <p>
              Once submitted, you will not be able to edit this application.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const getCurrentStepContent = () => {
    switch (currentStep) {
      case 1:
        return renderPersonalInfoStep();
      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Address Information</h3>
            {/* Address form fields would go here */}
            <p className="text-gray-600">Address form implementation...</p>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mobile Number *
                </label>
                <input
                  type="text"
                  value={contactInfo.mobile}
                  onChange={(e) =>
                    setContactInfo((prev) => ({
                      ...prev,
                      mobile: e.target.value,
                    }))
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Enter your mobile number"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={contactInfo.email}
                  onChange={(e) =>
                    setContactInfo((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Emergency Contact *
                </label>
                <input
                  type="text"
                  value={contactInfo.emergencyContact}
                  onChange={(e) =>
                    setContactInfo((prev) => ({
                      ...prev,
                      emergencyContact: e.target.value,
                    }))
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Enter emergency contact number"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Relation with Emergency Contact *
                </label>
                <input
                  type="text"
                  value={contactInfo.emergencyRelation}
                  onChange={(e) =>
                    setContactInfo((prev) => ({
                      ...prev,
                      emergencyRelation: e.target.value,
                    }))
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Enter relation"
                  required
                />
              </div>
            </div>
          </div>
        );
      case 4:
        return renderDocumentUploadStep();
      case 5:
        return renderReviewStep();
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-primary-500 text-white px-6 py-4">
            <h1 className="text-2xl font-bold">Citizen Registration Form</h1>
            <p className="text-primary-100">নাগরিক নিবন্ধন ফর্ম</p>
          </div>

          {/* Progress Bar */}
          <div className="px-6 py-4 border-b">
            <div className="flex items-center justify-between">
              {STEPS.map((step) => (
                <div key={step.id} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      step.id <= currentStep
                        ? "bg-primary-500 text-white"
                        : "bg-gray-300 text-gray-600"
                    }`}
                  >
                    {step.id < currentStep ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      step.id
                    )}
                  </div>
                  <div className="ml-2 text-sm">
                    <div className="font-medium">{step.title}</div>
                    <div className="text-gray-500 text-xs">{step.titleBn}</div>
                  </div>
                  {step.id < STEPS.length && (
                    <div className="w-16 h-0.5 bg-gray-300 mx-4" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Content */}
          <div className="px-6 py-8">{getCurrentStepContent()}</div>

          {/* Navigation */}
          <div className="px-6 py-4 border-t bg-gray-50 flex justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className="flex items-center px-4 py-2 text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:text-gray-800"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Previous
            </button>

            {currentStep === STEPS.length ? (
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="flex items-center px-6 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="flex items-center px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600"
              >
                Next
                <ChevronRight className="h-4 w-4 ml-1" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
