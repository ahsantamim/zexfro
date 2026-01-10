"use client";

import {
  ContentLayout,
  ContentSection,
  SectionHeader,
  CTABox,
} from "@/components/ui/ContentLayout";
import {
  FileText,
  Scale,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Shield,
  Users,
  CreditCard,
} from "lucide-react";
import { RegisterModal } from "@/components/home/RegisterModal";

export default function TermsConditionsPage() {
  return (
    <ContentLayout
      pageTitle="Terms & Conditions"
      pageDescription="Please read these terms and conditions carefully before using our services. By accessing or using Zexfro, you agree to be bound by these terms."
      heroImage="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&q=80"
    >
      {/* Introduction */}
      <ContentSection bgColor="white">
        <div className="prose prose-lg max-w-none">
          <div className="bg-blue-50 border-l-4 border-[#0a4a9e] p-6 mb-8">
            <p className="text-gray-700 mb-2">
              <strong>Last Updated:</strong> January 4, 2026
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Effective Date:</strong> January 1, 2026
            </p>
            <p className="text-gray-700 mb-0">
              <strong>Version:</strong> 1.0
            </p>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to Zexfro. These Terms and Conditions ("Terms", "Agreement")
            govern your access to and use of the Zexfro website and services
            (collectively, the "Service"). By accessing or using our Service,
            you agree to be bound by these Terms.
          </p>

          <div className="bg-orange-50 border-l-4 border-orange-600 p-6 mt-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-2">
                  Important Notice
                </h4>
                <p className="text-gray-700 mb-0">
                  If you do not agree to these Terms, you must not access or use
                  our Service. Please read these Terms carefully and contact us
                  if you have any questions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Acceptance of Terms */}
      <ContentSection bgColor="gray">
        <SectionHeader
          title="Acceptance of Terms"
          subtitle="Understanding your agreement with Zexfro"
          icon={<FileText className="w-7 h-7 text-white" />}
        />

        <div className="bg-white rounded-lg p-8 border border-gray-200 mt-8">
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-gray-900 mb-3">
                1.1 Agreement to Terms
              </h4>
              <p className="text-gray-700">
                By creating an account, accessing our website, or using any of
                our services, you acknowledge that you have read, understood,
                and agree to be bound by these Terms and all applicable laws and
                regulations.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">1.2 Eligibility</h4>
              <p className="text-gray-700">
                You must be at least 18 years old and have the legal capacity to
                enter into contracts to use our Service. By using our Service,
                you represent and warrant that you meet these eligibility
                requirements.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">1.3 Business Use</h4>
              <p className="text-gray-700">
                Our Service is intended for business and commercial use only. If
                you are using the Service on behalf of an organization, you
                represent that you have the authority to bind that organization
                to these Terms.
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* User Accounts */}
      <ContentSection bgColor="white">
        <SectionHeader
          title="User Accounts & Responsibilities"
          subtitle="Your obligations as a Zexfro user"
          icon={<Users className="w-7 h-7 text-white" />}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">You Must:</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>
                  Provide accurate and complete registration information
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Maintain the security of your account credentials</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Notify us immediately of any unauthorized access</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Keep your account information up to date</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Comply with all applicable laws and regulations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Use the Service only for lawful business purposes</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">You Must Not:</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">✗</span>
                <span>Share your account credentials with others</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">✗</span>
                <span>
                  Use the Service for illegal or fraudulent activities
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">✗</span>
                <span>Attempt to gain unauthorized access to our systems</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">✗</span>
                <span>Upload viruses or malicious code</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">✗</span>
                <span>Interfere with or disrupt the Service</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">✗</span>
                <span>Violate intellectual property rights</span>
              </li>
            </ul>
          </div>
        </div>
      </ContentSection>

      {/* Services & Orders */}
      <ContentSection bgColor="gray">
        <SectionHeader
          title="Services & Order Processing"
          subtitle="How we handle your import/export transactions"
          icon={<CreditCard className="w-7 h-7 text-white" />}
        />

        <div className="space-y-6 mt-8">
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-3">
              3.1 Service Description
            </h4>
            <p className="text-gray-700">
              Zexfro provides a platform connecting importers and exporters for
              international trade. We facilitate transactions, manage logistics,
              ensure compliance, and provide support services. The specific
              services available may vary based on your location and account
              type.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-3">
              3.2 Order Placement
            </h4>
            <p className="text-gray-700 mb-4">
              When you place an order through our platform:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-[#0a4a9e]">•</span>
                <span>
                  You make an offer to purchase products or services at the
                  stated price
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0a4a9e]">•</span>
                <span>
                  We will send you a confirmation email acknowledging receipt of
                  your order
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0a4a9e]">•</span>
                <span>
                  The contract is formed when we accept your order and begin
                  processing
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0a4a9e]">•</span>
                <span>
                  We reserve the right to refuse or cancel any order at our
                  discretion
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-3">
              3.3 Pricing & Payment
            </h4>
            <p className="text-gray-700 mb-4">
              All prices are displayed in the currency specified and are subject
              to change without notice. Payment terms include:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-[#0a4a9e]">•</span>
                <span>Payment must be made using approved payment methods</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0a4a9e]">•</span>
                <span>
                  You are responsible for all applicable taxes and duties
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0a4a9e]">•</span>
                <span>
                  Late payments may incur additional fees or service suspension
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0a4a9e]">•</span>
                <span>Refunds are subject to our refund policy</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-3">
              3.4 Shipping & Delivery
            </h4>
            <p className="text-gray-700">
              We work with trusted logistics partners to deliver your orders.
              Delivery times are estimates and may vary due to customs
              clearance, weather conditions, or other factors beyond our
              control. Risk of loss transfers to you upon delivery.
            </p>
          </div>
        </div>
      </ContentSection>

      {/* Intellectual Property */}
      <ContentSection bgColor="white">
        <SectionHeader
          title="Intellectual Property Rights"
          subtitle="Protecting our content and your content"
          icon={<Shield className="w-7 h-7 text-white" />}
        />

        <div className="bg-white rounded-lg p-8 border border-gray-200 mt-8">
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-gray-900 mb-3">4.1 Our Content</h4>
              <p className="text-gray-700">
                All content on the Zexfro platform, including text, graphics,
                logos, images, software, and design, is the property of Zexfro
                or its licensors and is protected by copyright, trademark, and
                other intellectual property laws. You may not copy, modify,
                distribute, or create derivative works without our express
                written permission.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">4.2 Your Content</h4>
              <p className="text-gray-700">
                You retain ownership of any content you submit to our platform.
                By submitting content, you grant us a worldwide, non-exclusive,
                royalty-free license to use, reproduce, modify, and display that
                content in connection with providing our Service.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">4.3 Trademarks</h4>
              <p className="text-gray-700">
                "Zexfro" and our logo are registered trademarks. You may not use
                our trademarks without our prior written consent. All other
                trademarks appearing on our platform are the property of their
                respective owners.
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Limitation of Liability */}
      <ContentSection bgColor="gray">
        <SectionHeader
          title="Limitation of Liability & Disclaimers"
          subtitle="Understanding the limits of our responsibility"
          icon={<Scale className="w-7 h-7 text-white" />}
        />

        <div className="bg-white rounded-lg p-8 border border-gray-200 mt-8">
          <div className="bg-orange-50 border-l-4 border-orange-600 p-6 mb-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-2">
                  Important Legal Notice
                </h4>
                <p className="text-gray-700 mb-0">
                  Please read this section carefully as it limits our liability
                  and affects your legal rights.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-gray-900 mb-3">
                5.1 Service "As Is"
              </h4>
              <p className="text-gray-700">
                The Service is provided "as is" and "as available" without
                warranties of any kind, either express or implied. We do not
                guarantee that the Service will be uninterrupted, secure, or
                error-free.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">
                5.2 Limitation of Liability
              </h4>
              <p className="text-gray-700 mb-4">
                To the maximum extent permitted by law, Zexfro shall not be
                liable for:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#0a4a9e]">•</span>
                  <span>
                    Indirect, incidental, special, consequential, or punitive
                    damages
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0a4a9e]">•</span>
                  <span>
                    Loss of profits, revenue, data, or business opportunities
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0a4a9e]">•</span>
                  <span>
                    Delays or failures in delivery due to circumstances beyond
                    our control
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0a4a9e]">•</span>
                  <span>
                    Actions or omissions of third-party service providers
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">
                5.3 Maximum Liability
              </h4>
              <p className="text-gray-700">
                Our total liability to you for any claims arising from your use
                of the Service shall not exceed the amount you paid to us in the
                twelve (12) months preceding the claim.
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Termination */}
      <ContentSection bgColor="white">
        <SectionHeader
          title="Termination & Suspension"
          subtitle="How accounts can be terminated"
          icon={<XCircle className="w-7 h-7 text-white" />}
        />

        <div className="bg-white rounded-lg p-8 border border-gray-200 mt-8">
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-gray-900 mb-3">
                6.1 Termination by You
              </h4>
              <p className="text-gray-700">
                You may terminate your account at any time by contacting our
                support team. Upon termination, you will no longer have access
                to your account and any data associated with it.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">
                6.2 Termination by Us
              </h4>
              <p className="text-gray-700 mb-4">
                We may suspend or terminate your account immediately, without
                prior notice, if:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#0a4a9e]">•</span>
                  <span>You breach these Terms or any applicable laws</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0a4a9e]">•</span>
                  <span>We suspect fraudulent or illegal activity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0a4a9e]">•</span>
                  <span>You fail to pay amounts owed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0a4a9e]">•</span>
                  <span>Required by law or regulatory authorities</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">
                6.3 Effect of Termination
              </h4>
              <p className="text-gray-700">
                Upon termination, your right to use the Service will immediately
                cease. All provisions of these Terms that by their nature should
                survive termination shall survive, including ownership
                provisions, warranty disclaimers, and limitations of liability.
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Governing Law */}
      <ContentSection bgColor="gray">
        <SectionHeader
          title="Governing Law & Dispute Resolution"
          subtitle="Legal jurisdiction and dispute handling"
          icon={<Scale className="w-7 h-7 text-white" />}
        />

        <div className="bg-white rounded-lg p-8 border border-gray-200 mt-8">
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-gray-900 mb-3">
                7.1 Governing Law
              </h4>
              <p className="text-gray-700">
                These Terms shall be governed by and construed in accordance
                with the laws of Bangladesh, without regard to its conflict of
                law provisions.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">
                7.2 Dispute Resolution
              </h4>
              <p className="text-gray-700">
                Any disputes arising from these Terms or your use of the Service
                shall first be resolved through good faith negotiations. If
                negotiations fail, disputes shall be resolved through binding
                arbitration in Dhaka, Bangladesh, in accordance with the
                Arbitration Act of Bangladesh.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">7.3 Jurisdiction</h4>
              <p className="text-gray-700">
                You agree to submit to the exclusive jurisdiction of the courts
                located in Dhaka, Bangladesh, for any legal proceedings that
                cannot be resolved through arbitration.
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Changes to Terms */}
      <ContentSection bgColor="white">
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Changes to These Terms
          </h3>
          <p className="text-gray-700 mb-4">
            We reserve the right to modify these Terms at any time. We will
            notify you of any material changes by posting the new Terms on this
            page and updating the "Last Updated" date. Your continued use of the
            Service after such modifications constitutes your acceptance of the
            updated Terms.
          </p>
          <p className="text-gray-700 mb-0">
            We encourage you to review these Terms periodically to stay informed
            about your rights and obligations.
          </p>
        </div>
      </ContentSection>

      {/* Contact Section */}
      <ContentSection bgColor="gray">
        <div className="bg-gradient-to-r from-[#0a4a9e] to-[#05306b] rounded-lg p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Questions About These Terms?
          </h3>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            If you have any questions or concerns about these Terms and
            Conditions, please don't hesitate to contact our legal team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:legal@zexfro.com"
              className="inline-block bg-white text-[#0a4a9e] font-bold px-8 py-3 rounded-full hover:bg-white/90 transition-all duration-300"
            >
              legal@zexfro.com
            </a>
            <a
              href="/contact"
              className="inline-block bg-white/20 text-white font-bold px-8 py-3 rounded-full hover:bg-white/30 transition-all duration-300"
            >
              Contact Support
            </a>
          </div>
        </div>
      </ContentSection>

      {/* CTA Section */}
      <ContentSection bgColor="white">
        <CTABox
          title="Ready to Start Trading?"
          description="Join Zexfro today and experience secure, compliant, and efficient global trade operations."
          buttonText="Create Your Account"
          buttonElement={
            <RegisterModal>
              <button className="inline-block bg-white text-[#0a4a9e] font-bold px-10 py-4 rounded-full hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Register Now
              </button>
            </RegisterModal>
          }
        />
      </ContentSection>
    </ContentLayout>
  );
}
