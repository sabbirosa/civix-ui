"use client";

import {
  AlertCircle,
  Camera,
  Check,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  FileText,
  MapPin,
  Phone,
  Shield,
  User,
} from "lucide-react";
import { useRef, useState } from "react";

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

interface Address {
  presentVillage: string;
  presentPostOffice: string;
  presentUpazila: string;
  presentDistrict: string;
  presentDivision: string;
  permanentVillage: string;
  permanentPostOffice: string;
  permanentUpazila: string;
  permanentDistrict: string;
  permanentDivision: string;
  sameAsPresent: boolean;
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

interface ValidationErrors {
  [key: string]: string;
}

interface PaymentInfo {
  method: string;
  amount: number;
  isPaid: boolean;
}

const STEPS = [
  {
    id: 1,
    title: "Personal Information",
    titleBn: "ব্যক্তিগত তথ্য",
    icon: User,
    description: "Basic personal details",
  },
  {
    id: 2,
    title: "Address Details",
    titleBn: "ঠিকানার বিবরণ",
    icon: MapPin,
    description: "Present & permanent address",
  },
  {
    id: 3,
    title: "Contact Information",
    titleBn: "যোগাযোগের তথ্য",
    icon: Phone,
    description: "Phone, email & emergency contact",
  },
  {
    id: 4,
    title: "Document Upload",
    titleBn: "ডকুমেন্ট আপলোড",
    icon: FileText,
    description: "Required documents & photos",
  },
  {
    id: 5,
    title: "Payment",
    titleBn: "পেমেন্ট",
    icon: CreditCard,
    description: "Application fee payment",
  },
  {
    id: 6,
    title: "Review & Submit",
    titleBn: "পর্যালোচনা ও জমা",
    icon: Shield,
    description: "Final review before submission",
  },
];

const DIVISIONS = [
  "Dhaka",
  "Chattogram",
  "Rajshahi",
  "Khulna",
  "Barishal",
  "Sylhet",
  "Rangpur",
  "Mymensingh",
];

export default function CitizenRegistrationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);
  const [isApplicationSubmitted, setIsApplicationSubmitted] = useState(false);
  const [applicationId, setApplicationId] = useState<string>("");
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

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

  const [payment, setPayment] = useState<PaymentInfo>({
    method: "",
    amount: 2500,
    isPaid: false,
  });

  const [address, setAddress] = useState<Address>({
    presentVillage: "",
    presentPostOffice: "",
    presentUpazila: "",
    presentDistrict: "",
    presentDivision: "",
    permanentVillage: "",
    permanentPostOffice: "",
    permanentUpazila: "",
    permanentDistrict: "",
    permanentDivision: "",
    sameAsPresent: false,
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

  const fileInputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});

  const validateStep = (step: number): boolean => {
    const newErrors: ValidationErrors = {};

    switch (step) {
      case 1:
        if (!personalInfo.fullName.trim())
          newErrors.fullName = "Full name is required";
        if (!personalInfo.fullNameBn.trim())
          newErrors.fullNameBn = "Bengali name is required";
        if (!personalInfo.nidNumber.trim())
          newErrors.nidNumber = "NID number is required";
        if (personalInfo.nidNumber.length < 10)
          newErrors.nidNumber = "Invalid NID number";
        if (!personalInfo.birthDate)
          newErrors.birthDate = "Birth date is required";
        if (!personalInfo.gender) newErrors.gender = "Gender is required";
        if (!personalInfo.fatherName.trim())
          newErrors.fatherName = "Father's name is required";
        if (!personalInfo.motherName.trim())
          newErrors.motherName = "Mother's name is required";
        break;

      case 2:
        if (!address.presentVillage.trim())
          newErrors.presentVillage = "Present village is required";
        if (!address.presentPostOffice.trim())
          newErrors.presentPostOffice = "Post office is required";
        if (!address.presentUpazila.trim())
          newErrors.presentUpazila = "Upazila is required";
        if (!address.presentDistrict.trim())
          newErrors.presentDistrict = "District is required";
        if (!address.presentDivision)
          newErrors.presentDivision = "Division is required";

        if (!address.sameAsPresent) {
          if (!address.permanentVillage.trim())
            newErrors.permanentVillage = "Permanent village is required";
          if (!address.permanentPostOffice.trim())
            newErrors.permanentPostOffice = "Permanent post office is required";
          if (!address.permanentUpazila.trim())
            newErrors.permanentUpazila = "Permanent upazila is required";
          if (!address.permanentDistrict.trim())
            newErrors.permanentDistrict = "Permanent district is required";
          if (!address.permanentDivision)
            newErrors.permanentDivision = "Permanent division is required";
        }
        break;

      case 3:
        if (!contactInfo.mobile.trim())
          newErrors.mobile = "Mobile number is required";
        if (!/^01\d{9}$/.test(contactInfo.mobile))
          newErrors.mobile = "Invalid mobile number format";
        if (!contactInfo.email.trim()) newErrors.email = "Email is required";
        if (!/\S+@\S+\.\S+/.test(contactInfo.email))
          newErrors.email = "Invalid email format";
        if (!contactInfo.emergencyContact.trim())
          newErrors.emergencyContact = "Emergency contact is required";
        if (!contactInfo.emergencyRelation.trim())
          newErrors.emergencyRelation = "Relation is required";
        break;

      case 4:
        if (!documents.nidCopy) newErrors.nidCopy = "NID copy is required";
        if (!documents.birthCertificate)
          newErrors.birthCertificate = "Birth certificate is required";
        if (!documents.photograph)
          newErrors.photograph = "Photograph is required";
        break;

      case 5:
        if (!payment.method)
          newErrors.paymentMethod = "Payment method is required";
        if (!payment.isPaid)
          newErrors.payment = "Payment must be completed to proceed";
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (!completedSteps.includes(currentStep)) {
        setCompletedSteps([...completedSteps, currentStep]);
      }
      if (currentStep < STEPS.length) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStepClick = (stepId: number) => {
    if (stepId <= currentStep || completedSteps.includes(stepId - 1)) {
      setCurrentStep(stepId);
    }
  };

  const handleFileUpload = (field: keyof DocumentInfo, file: File) => {
    if (file.size > 5 * 1024 * 1024) {
      setErrors((prev) => ({
        ...prev,
        [field]: "File size must be less than 5MB",
      }));
      return;
    }

    setDocuments((prev) => ({ ...prev, [field]: file }));
    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[field];
      return newErrors;
    });
  };

  const removeFile = (field: keyof DocumentInfo) => {
    setDocuments((prev) => ({ ...prev, [field]: null }));
    if (fileInputRefs.current[field]) {
      fileInputRefs.current[field]!.value = "";
    }
  };

  const handleSameAsPresent = (checked: boolean) => {
    setAddress((prev) => ({
      ...prev,
      sameAsPresent: checked,
      ...(checked
        ? {
            permanentVillage: prev.presentVillage,
            permanentPostOffice: prev.presentPostOffice,
            permanentUpazila: prev.presentUpazila,
            permanentDistrict: prev.presentDistrict,
            permanentDivision: prev.presentDivision,
          }
        : {}),
    }));
  };

  const handlePayment = async (method: string) => {
    setIsPaymentProcessing(true);
    setPayment((prev) => ({ ...prev, method }));

    try {
      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setPayment((prev) => ({ ...prev, isPaid: true }));

      // Clear payment error if exists
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.payment;
        delete newErrors.paymentMethod;
        return newErrors;
      });
    } catch (error) {
      setErrors((prev) => ({
        ...prev,
        payment: "Payment failed. Please try again.",
      }));
      console.error("Payment error:", error);
    } finally {
      setIsPaymentProcessing(false);
    }
  };

  const handleSubmit = async () => {
    if (!validateStep(6)) return;

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 3000));

      // Generate application ID
      const appId = `CRF-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
      setApplicationId(appId);
      setIsApplicationSubmitted(true);
    } catch (error) {
      setErrors((prev) => ({
        ...prev,
        submit: "Submission failed. Please try again.",
      }));
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderFormField = (
    label: string,
    name: string,
    type: string = "text",
    value: string,
    onChange: (value: string) => void,
    options?: string[],
    placeholder?: string,
    required: boolean = true
  ) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {type === "select" ? (
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
            errors[name] ? "border-red-500 bg-red-50" : "border-gray-300"
          }`}
        >
          <option value="">Select {label.toLowerCase()}</option>
          {options?.map((option) => (
            <option key={option} value={option.toLowerCase()}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
            errors[name] ? "border-red-500 bg-red-50" : "border-gray-300"
          }`}
        />
      )}
      {errors[name] && (
        <p className="mt-1 text-sm text-red-600 flex items-center">
          <AlertCircle className="h-4 w-4 mr-1" />
          {errors[name]}
        </p>
      )}
    </div>
  );

  const renderPersonalInfoStep = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <User className="h-8 w-8 text-primary-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Personal Information
        </h3>
        <p className="text-gray-600">ব্যক্তিগত তথ্য দিয়ে শুরু করুন</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {renderFormField(
          "Full Name (English)",
          "fullName",
          "text",
          personalInfo.fullName,
          (value) => setPersonalInfo((prev) => ({ ...prev, fullName: value })),
          undefined,
          "Enter your full name"
        )}

        {renderFormField(
          "পূর্ণ নাম (বাংলা)",
          "fullNameBn",
          "text",
          personalInfo.fullNameBn,
          (value) =>
            setPersonalInfo((prev) => ({ ...prev, fullNameBn: value })),
          undefined,
          "আপনার পূর্ণ নাম লিখুন"
        )}

        {renderFormField(
          "National ID Number",
          "nidNumber",
          "text",
          personalInfo.nidNumber,
          (value) => setPersonalInfo((prev) => ({ ...prev, nidNumber: value })),
          undefined,
          "Enter your 10-17 digit NID number"
        )}

        {renderFormField(
          "Date of Birth",
          "birthDate",
          "date",
          personalInfo.birthDate,
          (value) => setPersonalInfo((prev) => ({ ...prev, birthDate: value }))
        )}

        {renderFormField(
          "Gender",
          "gender",
          "select",
          personalInfo.gender,
          (value) => setPersonalInfo((prev) => ({ ...prev, gender: value })),
          ["Male", "Female", "Other"]
        )}

        {renderFormField(
          "Father's Name",
          "fatherName",
          "text",
          personalInfo.fatherName,
          (value) =>
            setPersonalInfo((prev) => ({ ...prev, fatherName: value })),
          undefined,
          "Enter father's name"
        )}

        {renderFormField(
          "Mother's Name",
          "motherName",
          "text",
          personalInfo.motherName,
          (value) =>
            setPersonalInfo((prev) => ({ ...prev, motherName: value })),
          undefined,
          "Enter mother's name"
        )}

        {renderFormField(
          "Spouse Name",
          "spouse",
          "text",
          personalInfo.spouse || "",
          (value) => setPersonalInfo((prev) => ({ ...prev, spouse: value })),
          undefined,
          "Enter spouse name (if married)",
          false
        )}
      </div>
    </div>
  );

  const renderAddressStep = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <MapPin className="h-8 w-8 text-primary-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Address Information
        </h3>
        <p className="text-gray-600">বর্তমান ও স্থায়ী ঠিকানার তথ্য</p>
      </div>

      {/* Present Address */}
      <div className="bg-blue-50 rounded-lg p-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">
          Present Address / বর্তমান ঠিকানা
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {renderFormField(
            "Village/Area",
            "presentVillage",
            "text",
            address.presentVillage,
            (value) =>
              setAddress((prev) => ({ ...prev, presentVillage: value })),
            undefined,
            "Enter village/area name"
          )}

          {renderFormField(
            "Post Office",
            "presentPostOffice",
            "text",
            address.presentPostOffice,
            (value) =>
              setAddress((prev) => ({ ...prev, presentPostOffice: value })),
            undefined,
            "Enter post office"
          )}

          {renderFormField(
            "Upazila/Thana",
            "presentUpazila",
            "text",
            address.presentUpazila,
            (value) =>
              setAddress((prev) => ({ ...prev, presentUpazila: value })),
            undefined,
            "Enter upazila/thana"
          )}

          {renderFormField(
            "District",
            "presentDistrict",
            "text",
            address.presentDistrict,
            (value) =>
              setAddress((prev) => ({ ...prev, presentDistrict: value })),
            undefined,
            "Enter district"
          )}

          <div className="md:col-span-2">
            {renderFormField(
              "Division",
              "presentDivision",
              "select",
              address.presentDivision,
              (value) =>
                setAddress((prev) => ({ ...prev, presentDivision: value })),
              DIVISIONS
            )}
          </div>
        </div>
      </div>

      {/* Same as Present Checkbox */}
      <div className="flex items-center space-x-3 bg-gray-50 rounded-lg p-4">
        <input
          type="checkbox"
          id="sameAsPresent"
          checked={address.sameAsPresent}
          onChange={(e) => handleSameAsPresent(e.target.checked)}
          className="h-5 w-5 text-primary-600 rounded border-gray-300 focus:ring-primary-500"
        />
        <label
          htmlFor="sameAsPresent"
          className="text-sm font-medium text-gray-700"
        >
          Permanent address is same as present address / স্থায়ী ঠিকানা বর্তমান
          ঠিকানার মতোই
        </label>
      </div>

      {/* Permanent Address */}
      {!address.sameAsPresent && (
        <div className="bg-green-50 rounded-lg p-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">
            Permanent Address / স্থায়ী ঠিকানা
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {renderFormField(
              "Village/Area",
              "permanentVillage",
              "text",
              address.permanentVillage,
              (value) =>
                setAddress((prev) => ({ ...prev, permanentVillage: value })),
              undefined,
              "Enter village/area name"
            )}

            {renderFormField(
              "Post Office",
              "permanentPostOffice",
              "text",
              address.permanentPostOffice,
              (value) =>
                setAddress((prev) => ({ ...prev, permanentPostOffice: value })),
              undefined,
              "Enter post office"
            )}

            {renderFormField(
              "Upazila/Thana",
              "permanentUpazila",
              "text",
              address.permanentUpazila,
              (value) =>
                setAddress((prev) => ({ ...prev, permanentUpazila: value })),
              undefined,
              "Enter upazila/thana"
            )}

            {renderFormField(
              "District",
              "permanentDistrict",
              "text",
              address.permanentDistrict,
              (value) =>
                setAddress((prev) => ({ ...prev, permanentDistrict: value })),
              undefined,
              "Enter district"
            )}

            <div className="md:col-span-2">
              {renderFormField(
                "Division",
                "permanentDivision",
                "select",
                address.permanentDivision,
                (value) =>
                  setAddress((prev) => ({ ...prev, permanentDivision: value })),
                DIVISIONS
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderContactStep = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <Phone className="h-8 w-8 text-primary-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Contact Information
        </h3>
        <p className="text-gray-600">যোগাযোগের মাধ্যম ও জরুরি যোগাযোগ</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {renderFormField(
          "Mobile Number",
          "mobile",
          "tel",
          contactInfo.mobile,
          (value) => setContactInfo((prev) => ({ ...prev, mobile: value })),
          undefined,
          "01XXXXXXXXX"
        )}

        {renderFormField(
          "Email Address",
          "email",
          "email",
          contactInfo.email,
          (value) => setContactInfo((prev) => ({ ...prev, email: value })),
          undefined,
          "example@email.com"
        )}

        {renderFormField(
          "Emergency Contact",
          "emergencyContact",
          "tel",
          contactInfo.emergencyContact,
          (value) =>
            setContactInfo((prev) => ({ ...prev, emergencyContact: value })),
          undefined,
          "01XXXXXXXXX"
        )}

        {renderFormField(
          "Relation with Emergency Contact",
          "emergencyRelation",
          "text",
          contactInfo.emergencyRelation,
          (value) =>
            setContactInfo((prev) => ({ ...prev, emergencyRelation: value })),
          undefined,
          "Father/Mother/Brother/Sister etc."
        )}
      </div>
    </div>
  );

  const renderDocumentUploadStep = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <FileText className="h-8 w-8 text-primary-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Document Upload
        </h3>
        <p className="text-gray-600">প্রয়োজনীয় কাগজপত্র আপলোড করুন</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            key: "nidCopy",
            label: "National ID Copy",
            icon: FileText,
            required: true,
          },
          {
            key: "birthCertificate",
            label: "Birth Certificate",
            icon: FileText,
            required: true,
          },
          {
            key: "photograph",
            label: "Recent Photograph",
            icon: Camera,
            required: true,
          },
          {
            key: "signature",
            label: "Signature",
            icon: FileText,
            required: false,
          },
        ].map(({ key, label, icon: Icon, required }) => {
          const file = documents[key as keyof DocumentInfo];
          const hasError = errors[key];

          return (
            <div
              key={key}
              className={`relative border-2 border-dashed rounded-lg p-6 transition-colors ${
                hasError
                  ? "border-red-300 bg-red-50"
                  : file
                    ? "border-green-300 bg-green-50"
                    : "border-gray-300 hover:border-primary-300"
              }`}
            >
              <div className="text-center">
                <Icon
                  className={`h-12 w-12 mx-auto mb-4 ${
                    hasError
                      ? "text-red-400"
                      : file
                        ? "text-green-500"
                        : "text-gray-400"
                  }`}
                />

                <h4 className="font-medium text-gray-900 mb-2">
                  {label} {required && <span className="text-red-500">*</span>}
                </h4>

                {file ? (
                  <div className="space-y-3">
                    <div className="flex items-center justify-center text-sm text-green-600">
                      <Check className="h-4 w-4 mr-1" />
                      {file.name}
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => {
                          fileInputRefs.current[key]?.click();
                        }}
                        className="px-3 py-1 text-sm bg-primary-500 text-white rounded hover:bg-primary-600"
                      >
                        Replace
                      </button>
                      <button
                        onClick={() => removeFile(key as keyof DocumentInfo)}
                        className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => fileInputRefs.current[key]?.click()}
                    className="px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors"
                  >
                    Choose File
                  </button>
                )}

                <input
                  ref={(el) => {
                    fileInputRefs.current[key] = el;
                  }}
                  type="file"
                  accept="image/*,.pdf"
                  onChange={(e) => {
                    const selectedFile = e.target.files?.[0];
                    if (selectedFile)
                      handleFileUpload(key as keyof DocumentInfo, selectedFile);
                  }}
                  className="hidden"
                />
              </div>

              {hasError && (
                <p className="mt-2 text-sm text-red-600 flex items-center justify-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {hasError}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex">
          <AlertCircle className="h-5 w-5 text-blue-400 mr-3 mt-0.5" />
          <div className="text-sm text-blue-800">
            <p className="font-medium mb-2">File Requirements:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Maximum file size: 5MB</li>
              <li>Accepted formats: JPG, PNG, PDF</li>
              <li>Documents should be clear and readable</li>
              <li>Photograph should be recent (within 6 months)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPaymentStep = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <CreditCard className="h-8 w-8 text-primary-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Payment</h3>
        <p className="text-gray-600">আবেদন ফি পরিশোধ করুন</p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-semibold text-lg text-gray-900">
              Application Fee
            </h4>
            <p className="text-sm text-gray-600">
              Citizen Registration Processing Fee
            </p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-gray-900">
              ৳{payment.amount}
            </p>
            <p className="text-sm text-gray-500">BDT</p>
          </div>
        </div>
      </div>

      {payment.isPaid ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <div className="flex items-center">
            <CheckCircle className="h-8 w-8 text-green-500 mr-4" />
            <div>
              <h4 className="font-semibold text-green-900">
                Payment Successful!
              </h4>
              <p className="text-green-700">
                Your payment has been processed successfully.
              </p>
              <p className="text-sm text-green-600 mt-1">
                Method: {payment.method}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900">Select Payment Method</h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                method: "Mobile Banking",
                options: ["bKash", "Nagad", "Rocket"],
              },
              {
                method: "Card Payment",
                options: ["Visa", "Mastercard", "American Express"],
              },
            ].map(({ method, options }) => (
              <div
                key={method}
                className="border border-gray-200 rounded-lg p-4"
              >
                <h5 className="font-medium text-gray-900 mb-3">{method}</h5>
                <div className="space-y-2">
                  {options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handlePayment(option)}
                      disabled={isPaymentProcessing}
                      className="w-full px-4 py-3 text-left border border-gray-300 rounded-md hover:bg-gray-50 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{option}</span>
                        {isPaymentProcessing && payment.method === option && (
                          <div className="animate-spin h-4 w-4 border-2 border-primary-500 border-t-transparent rounded-full"></div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {errors.paymentMethod && (
            <p className="text-sm text-red-600 flex items-center">
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.paymentMethod}
            </p>
          )}

          {errors.payment && (
            <p className="text-sm text-red-600 flex items-center">
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.payment}
            </p>
          )}
        </div>
      )}

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <div className="flex">
          <AlertCircle className="h-5 w-5 text-yellow-400 mr-3 mt-0.5" />
          <div className="text-sm text-yellow-800">
            <p className="font-medium mb-1">Payment Information:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Payment is required to process your application</li>
              <li>Payment is secure and encrypted</li>
              <li>You will receive a payment confirmation</li>
              <li>Refunds are available as per policy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const renderReviewStep = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <Shield className="h-8 w-8 text-primary-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Review & Submit
        </h3>
        <p className="text-gray-600">সব তথ্য পর্যালোচনা করে জমা দিন</p>
      </div>

      <div className="space-y-6">
        {/* Personal Information */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
            <User className="h-5 w-5 mr-2 text-primary-600" />
            Personal Information
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium">Name:</span> {personalInfo.fullName}
            </div>
            <div>
              <span className="font-medium">Bengali Name:</span>{" "}
              {personalInfo.fullNameBn}
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
            <div>
              <span className="font-medium">Father:</span>{" "}
              {personalInfo.fatherName}
            </div>
            <div>
              <span className="font-medium">Mother:</span>{" "}
              {personalInfo.motherName}
            </div>
            {personalInfo.spouse && (
              <div>
                <span className="font-medium">Spouse:</span>{" "}
                {personalInfo.spouse}
              </div>
            )}
          </div>
        </div>

        {/* Address Information */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
            <MapPin className="h-5 w-5 mr-2 text-primary-600" />
            Address Information
          </h4>
          <div className="space-y-4">
            <div>
              <p className="font-medium text-sm mb-2">Present Address:</p>
              <p className="text-sm text-gray-700">
                {address.presentVillage}, {address.presentPostOffice},{" "}
                {address.presentUpazila}, {address.presentDistrict},{" "}
                {address.presentDivision}
              </p>
            </div>
            <div>
              <p className="font-medium text-sm mb-2">Permanent Address:</p>
              <p className="text-sm text-gray-700">
                {address.sameAsPresent
                  ? "Same as present address"
                  : `${address.permanentVillage}, ${address.permanentPostOffice}, ${address.permanentUpazila}, ${address.permanentDistrict}, ${address.permanentDivision}`}
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
            <Phone className="h-5 w-5 mr-2 text-primary-600" />
            Contact Information
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium">Mobile:</span> {contactInfo.mobile}
            </div>
            <div>
              <span className="font-medium">Email:</span> {contactInfo.email}
            </div>
            <div>
              <span className="font-medium">Emergency Contact:</span>{" "}
              {contactInfo.emergencyContact}
            </div>
            <div>
              <span className="font-medium">Relation:</span>{" "}
              {contactInfo.emergencyRelation}
            </div>
          </div>
        </div>

        {/* Documents */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
            <FileText className="h-5 w-5 mr-2 text-primary-600" />
            Uploaded Documents
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {Object.entries(documents).map(([key, file]) => (
              <div key={key} className="flex items-center text-sm">
                <Check className="h-4 w-4 text-green-500 mr-2" />
                <span className="font-medium">
                  {key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}
                  :
                </span>
                <span className="ml-1 text-gray-600">
                  {file?.name || "Not uploaded"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <div className="flex">
          <AlertCircle className="h-5 w-5 text-yellow-400 mr-3 mt-0.5" />
          <div className="text-sm text-yellow-800">
            <p className="font-medium mb-1">Important Notice:</p>
            <p>
              Please review all information carefully before submitting. Once
              submitted, you will not be able to edit this application. You will
              receive a confirmation email with your application reference
              number.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSuccessPage = () => (
    <div className="text-center space-y-8 py-12">
      <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto">
        <CheckCircle className="h-12 w-12 text-green-600" />
      </div>

      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Application Submitted Successfully!
        </h2>
        <p className="text-xl text-gray-600 mb-2">
          আবেদন সফলভাবে জমা দেওয়া হয়েছে!
        </p>
        <p className="text-gray-500">
          Your citizen registration application has been received and is being
          processed.
        </p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-md mx-auto">
        <h3 className="font-semibold text-gray-900 mb-3">
          Application Details
        </h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Application ID:</span>
            <span className="font-mono font-medium text-blue-700">
              {applicationId}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Submitted:</span>
            <span className="font-medium">
              {new Date().toLocaleDateString("en-BD")}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Payment Status:</span>
            <span className="font-medium text-green-600">Paid</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Processing Time:</span>
            <span className="font-medium">7-10 business days</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => {
              // Generate and download PDF receipt
              const element = document.createElement("a");
              const fileContent = `
Application Receipt
==================
Application ID: ${applicationId}
Applicant: ${personalInfo.fullName}
NID: ${personalInfo.nidNumber}
Submit Date: ${new Date().toLocaleDateString("en-BD")}
Payment Amount: ৳${payment.amount}
Payment Method: ${payment.method}
Status: Submitted

Please keep this receipt for your records.
              `;
              const file = new Blob([fileContent], { type: "text/plain" });
              element.href = URL.createObjectURL(file);
              element.download = `receipt-${applicationId}.txt`;
              element.click();
            }}
            className="flex items-center px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
          >
            <FileText className="h-4 w-4 mr-2" />
            Download Receipt
          </button>

          <button
            onClick={() => window.location.reload()}
            className="flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Submit New Application
          </button>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 max-w-2xl mx-auto text-left">
        <div className="flex">
          <AlertCircle className="h-5 w-5 text-yellow-400 mr-3 mt-0.5" />
          <div className="text-sm text-yellow-800">
            <p className="font-medium mb-2">What&apos;s Next?</p>
            <ul className="list-disc list-inside space-y-1">
              <li>You will receive a confirmation email within 24 hours</li>
              <li>
                Our team will review your application within 7-10 business days
              </li>
              <li>
                You can track your application status using the Application ID
              </li>
              <li>You will be notified via email and SMS about any updates</li>
              <li>
                Contact support if you need assistance:
                support@citizenreg.gov.bd
              </li>
            </ul>
            <p className="mt-3 font-medium">
              Please save your Application ID:{" "}
              <span className="font-mono bg-white px-2 py-1 rounded">
                {applicationId}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const getCurrentStepContent = () => {
    if (isApplicationSubmitted) {
      return renderSuccessPage();
    }

    switch (currentStep) {
      case 1:
        return renderPersonalInfoStep();
      case 2:
        return renderAddressStep();
      case 3:
        return renderContactStep();
      case 4:
        return renderDocumentUploadStep();
      case 5:
        return renderPaymentStep();
      case 6:
        return renderReviewStep();
      default:
        return null;
    }
  };

  const isStepComplete = (stepId: number) => {
    return completedSteps.includes(stepId) || stepId < currentStep;
  };

  const canAccessStep = (stepId: number) => {
    return stepId <= currentStep || completedSteps.includes(stepId - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {!isApplicationSubmitted && (
            <>
              {/* Header */}
              <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-6">
                <h1 className="text-3xl font-bold">
                  Citizen Registration Form
                </h1>
                <p className="text-primary-100 mt-1">নাগরিক নিবন্ধন ফর্ম</p>
              </div>

              {/* Enhanced Progress Bar */}
              <div className="px-8 py-6 bg-gray-50 border-b">
                <div className="flex items-center justify-between">
                  {STEPS.map((step, index) => {
                    const Icon = step.icon;
                    const isActive = step.id === currentStep;
                    const isCompleted = isStepComplete(step.id);
                    const isAccessible = canAccessStep(step.id);

                    return (
                      <div key={step.id} className="flex items-center flex-1">
                        <div className="flex flex-col items-center">
                          <button
                            onClick={() => handleStepClick(step.id)}
                            disabled={!isAccessible}
                            className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                              isActive
                                ? "bg-primary-500 text-white ring-4 ring-primary-200"
                                : isCompleted
                                  ? "bg-green-500 text-white hover:bg-green-600"
                                  : isAccessible
                                    ? "bg-gray-200 text-gray-600 hover:bg-gray-300"
                                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                            }`}
                          >
                            {isCompleted ? (
                              <Check className="h-5 w-5" />
                            ) : (
                              <Icon className="h-5 w-5" />
                            )}
                          </button>
                          <div className="mt-2 text-center">
                            <div
                              className={`text-sm font-medium ${
                                isActive ? "text-primary-600" : "text-gray-600"
                              }`}
                            >
                              {step.title}
                            </div>
                            <div className="text-xs text-gray-500">
                              {step.titleBn}
                            </div>
                            <div className="text-xs text-gray-400 mt-1">
                              {step.description}
                            </div>
                          </div>
                        </div>
                        {index < STEPS.length - 1 && (
                          <div
                            className={`flex-1 h-0.5 mx-4 ${
                              isCompleted ? "bg-green-500" : "bg-gray-300"
                            }`}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}

          {/* Form Content */}
          <div className="px-8 py-8">{getCurrentStepContent()}</div>

          {!isApplicationSubmitted && (
            /* Enhanced Navigation */
            <div className="px-8 py-6 border-t bg-gray-50 flex justify-between items-center">
              <button
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className="flex items-center px-6 py-3 text-gray-600 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors"
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous
              </button>

              <div className="text-sm text-gray-500">
                Step {currentStep} of {STEPS.length}
              </div>

              {currentStep === STEPS.length ? (
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="flex items-center px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 transition-colors"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="flex items-center px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                >
                  Next
                  <ChevronRight className="h-4 w-4 ml-2" />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
