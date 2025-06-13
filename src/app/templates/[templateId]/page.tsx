import FAQTemplate from "@/components/templates/FAQTemplate";
import PrivacyPolicyTemplate from "@/components/templates/PrivacyPolicyTemplate";
import CitizenRegistrationForm from "@/components/templates/RegistrationForm";
import TermsOfServiceTemplate from "@/components/templates/TermsOfServiceTemplate";
import { templates } from "@/data/templates";
import { Metadata } from "next";
import { notFound } from "next/navigation";

// Component mapping for templates
const templateComponents = {
  "privacy-policy-template": PrivacyPolicyTemplate,
  "faq-page-template": FAQTemplate,
  "terms-of-service-template": TermsOfServiceTemplate,
  "citizen-registration": CitizenRegistrationForm,
  // Add more template components as they're created
  "documentation-requirements-template": () => (
    <div className="min-h-screen bg-gradient-to-b from-secondary-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-secondary-900 dark:text-gray-100 mb-4">
          Documentation Requirements Template
        </h1>
        <p className="text-secondary-600 dark:text-gray-300">
          Template preview coming soon...
        </p>
      </div>
    </div>
  ),
  "fees-payment-template": () => (
    <div className="min-h-screen bg-gradient-to-b from-secondary-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-secondary-900 dark:text-gray-100 mb-4">
          Fees & Payment Template
        </h1>
        <p className="text-secondary-600 dark:text-gray-300">
          Template preview coming soon...
        </p>
      </div>
    </div>
  ),
};

interface PageProps {
  params: Promise<{
    templateId: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { templateId } = await params;
  const template = templates.find(t => t.id === templateId);
  
  if (!template) {
    return {
      title: "Template Not Found - Civix UI",
    };
  }

  return {
    title: `${template.title} - Template Preview - Civix UI`,
    description: template.description,
    keywords: template.tags.join(", "),
  };
}

export async function generateStaticParams() {
  return templates.map((template) => ({
    templateId: template.id,
  }));
}

export default async function TemplatePage({ params }: PageProps) {
  const { templateId } = await params;
  const template = templates.find(t => t.id === templateId);
  
  if (!template) {
    notFound();
  }

  const TemplateComponent = templateComponents[templateId as keyof typeof templateComponents];
  
  if (!TemplateComponent) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-secondary-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-secondary-900 dark:text-gray-100 mb-4">
            {template.title}
          </h1>
          <p className="text-secondary-600 dark:text-gray-300 mb-4">
            {template.description}
          </p>
          <p className="text-secondary-500 dark:text-gray-400">
            Template preview coming soon...
          </p>
        </div>
      </div>
    );
  }

  return <TemplateComponent />;
} 