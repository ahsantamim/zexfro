"use client";

import { 
  ContentLayout, 
  ContentSection, 
  SectionHeader,
  FeatureCard,
  CTABox 
} from "@/components/ui/ContentLayout";
import { 
  Target,
  Users,
  Globe,
  Award,
  TrendingUp,
  Shield,
  Package,
  CheckCircle2,
  Heart,
  Sparkles
} from "lucide-react";
import Image from "next/image";
import ScrollVelocity from "@/components/ui/ScrollVelocity";

export default function AboutPage() {
  return (
    <ContentLayout
      pageTitle="About Us"
      pageDescription="A Journey of Excellence from 2018 to Present"
      heroImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80"
    >
      {/* Scroll Velocity Text Bar */}
      <div className="w-full bg-gradient-to-r from-[#0a4a9e] via-[#05306b] to-[#0a4a9e] py-8 text-white overflow-hidden">
        <ScrollVelocity
          texts={['📢 Announcement 2026 📢']} 
          velocity={50}
          className="custom-scroll-text"
        />
      </div>

      {/* Evolution Story */}
      <ContentSection bgColor="white">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Evolution into Zexfro International Limited
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            A Journey of Excellence (2018 – Present)
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Founded in <strong>2018</strong> as a proprietorship, Zexfro International began with a clear vision: to bridge markets and deliver excellence in the world of trade. Over the past seven years, we have navigated challenges, embraced innovation, and remained steadfast in our commitment to quality.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Today, on <strong>September 14, 2025</strong>, we are thrilled to announce our official incorporation as <strong>Zexfro International Limited</strong>. This transition marks a new chapter in our history—one that reflects our growth from a dedicated local enterprise to a structured corporate entity.
            </p>
            <div className="bg-blue-50 border-l-4 border-[#0a4a9e] p-6 rounded-r-lg">
              <p className="text-gray-700 font-semibold mb-2">
                🎉 Celebrating Our Founding Anniversary
              </p>
              <p className="text-gray-600">
                We want to make September 14 memorable as we celebrate the founding anniversary of Zexfro International Limited. All buyers, sellers, and well-wishers will be invited to join us in commemorating this special milestone.
              </p>
            </div>
          </div>

          <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80"
              alt="Zexfro team collaboration"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </ContentSection>

      {/* Gratitude Section */}
      <ContentSection bgColor="gray">
        <SectionHeader
          title="Our Deepest Gratitude"
          subtitle="We recognize that this success is not ours alone"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white rounded-lg p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-[#0a4a9e]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Valued Buyers</h3>
            <p className="text-gray-600">
              Thank you for trusting our products and services. Your satisfaction has been our greatest reward.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Trusted Suppliers & Vendors</h3>
            <p className="text-gray-600">
              Your timely cooperation and commitment to quality have been the backbone of our operations.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Well-wishers & Stakeholders</h3>
            <p className="text-gray-600">
              Your prayers and encouragement have fueled our drive to succeed during this seven-year journey.
            </p>
          </div>
        </div>
      </ContentSection>

      {/* Looking Ahead */}
      <ContentSection bgColor="blue">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
              <Sparkles className="w-10 h-10 text-[#0a4a9e]" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Looking Ahead
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            As <strong>Zexfro International Limited</strong>, we are more than just a trading company; we are your reliable partner in global commerce. Our mission remains the same—to provide seamless trade solutions—but our vision is now broader, aiming to set new benchmarks in the international arena.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We humbly request your continued prayers and cooperation as we embark on this exciting new era. Together, let's build a future of shared prosperity.
          </p>
        </div>
      </ContentSection>

      {/* Who We Are */}
      <ContentSection bgColor="white">
        <SectionHeader
          title="Zexfro International Ltd"
          subtitle="Your trusted partner in global trade"
          centered
        />

        <div className="max-w-4xl mx-auto mt-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Zexfro International Ltd is a trusted and fast-growing Import-Export and Trading company established in Bangladesh, headquartered in Uttara, Dhaka. From the beginning, our core mission has been to connect global suppliers with the Bangladeshi market while ensuring premium quality, affordability, compliance, and customer satisfaction.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We specialize in importing a diverse range of products from different countries around the world and distributing them across Bangladesh through a reliable marketing and supply network. Along with import and local distribution, we proudly contribute to Bangladesh's economy by exporting high-quality local products to international markets.
          </p>
        </div>
      </ContentSection>

      {/* What We Do - Imports */}
      <ContentSection bgColor="gray">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&q=80"
              alt="Import operations"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <SectionHeader
              title="What We Do - Imports"
              subtitle="Global products for the Bangladeshi market"
            />

            <p className="text-gray-700 mb-6 mt-6">
              We import products from globally verified manufacturers and suppliers across industries including:
            </p>

            <div className="grid grid-cols-1 gap-3">
              {[
                "Veterinary & Animal Health Products",
                "Agricultural Equipment & Tools",
                "Garments & Textile Raw Materials",
                "Industrial and Commercial Machineries",
                "Beauty & Cosmetic Products",
                "Garment Accessories & Finished Goods",
                "General Consumer Products",
                "Specialized Industrial Equipment",
                "And many more based on market demand"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border-l-4 border-[#0a4a9e] p-4 rounded-r-lg mt-6">
              <p className="text-sm text-gray-700">
                All imported goods are carefully sourced through strict quality inspection, compliance verification, and documentation standards to meet local regulatory and market expectations.
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* What We Do - Exports */}
      <ContentSection bgColor="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              title="What We Do - Exports"
              subtitle="Bangladeshi excellence to the world"
            />

            <p className="text-gray-700 mb-6 mt-6">
              Zexfro International Ltd also exports Bangladeshi products including:
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-gray-900">Garments & Apparel</span>
                  <p className="text-sm text-gray-600">High-quality textile products from Bangladesh</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-gray-900">Agricultural & Organic Goods</span>
                  <p className="text-sm text-gray-600">Fresh and processed agricultural products</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-gray-900">Local Consumer and Industrial Products</span>
                  <p className="text-sm text-gray-600">Diverse range of manufactured goods</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-gray-900">Handicrafts & Specialized Items</span>
                  <p className="text-sm text-gray-600">Unique Bangladeshi craftsmanship</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-gray-900">Customized Products</span>
                  <p className="text-sm text-gray-600">Based on international buyer requirements</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-lg mt-6">
              <p className="text-sm text-gray-700">
                We ensure every export shipment meets international trade standards, proper documentation, packaging, and delivery commitments.
              </p>
            </div>
          </div>

          <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80"
              alt="Export operations"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </ContentSection>

      {/* Commitment to Quality */}
      <ContentSection bgColor="gray">
        <SectionHeader
          title="Our Commitment to Quality"
          subtitle="Quality is not just a standard—it's a responsibility"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <FeatureCard
            icon={<Shield className="w-6 h-6" />}
            title="Product Verification"
            description="Product verification from certified global suppliers"
            color="blue"
          />
          <FeatureCard
            icon={<CheckCircle2 className="w-6 h-6" />}
            title="Quality Checks"
            description="Pre-shipment and post-landing quality checks"
            color="green"
          />
          <FeatureCard
            icon={<Award className="w-6 h-6" />}
            title="Compliance"
            description="Compliance with Bangladesh trade regulations"
            color="purple"
          />
          <FeatureCard
            icon={<Target className="w-6 h-6" />}
            title="Industry Standards"
            description="Industry-specific quality assurance protocols"
            color="orange"
          />
          <FeatureCard
            icon={<Package className="w-6 h-6" />}
            title="Logistics Support"
            description="Safe and efficient logistics and distribution support"
            color="blue"
          />
          <FeatureCard
            icon={<Users className="w-6 h-6" />}
            title="Dedicated Team"
            description="Our dedicated quality team ensures only the best products reach customers"
            color="green"
          />
        </div>
      </ContentSection>

      {/* Customer Satisfaction */}
      <ContentSection bgColor="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80"
              alt="Customer satisfaction"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <SectionHeader
              title="Customer Satisfaction"
              subtitle="Our Top Priority"
            />

            <p className="text-gray-700 mb-6 mt-6">
              We aim to deliver value by offering:
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-blue-50 p-4 rounded-lg">
                <div className="w-12 h-12 bg-[#0a4a9e] rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Authentic Products</h4>
                  <p className="text-sm text-gray-600">Genuine quality guaranteed</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-green-50 p-4 rounded-lg">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Competitive Pricing</h4>
                  <p className="text-sm text-gray-600">Best value for your investment</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-purple-50 p-4 rounded-lg">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Reliable Support</h4>
                  <p className="text-sm text-gray-600">Always here to help</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-orange-50 p-4 rounded-lg">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">On-time Delivery</h4>
                  <p className="text-sm text-gray-600">Meeting deadlines consistently</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-blue-50 p-4 rounded-lg">
                <div className="w-12 h-12 bg-[#0a4a9e] rounded-full flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Transparent Communication</h4>
                  <p className="text-sm text-gray-600">Clear and honest updates</p>
                </div>
              </div>
            </div>

            <p className="text-gray-600 mt-6">
              We work closely with retailers, distributors, corporate buyers, and individual consumers to build long-term trust and satisfaction.
            </p>
          </div>
        </div>
      </ContentSection>

      {/* Why Choose Us */}
      <ContentSection bgColor="blue">
        <SectionHeader
          title="Why Choose Zexfro International Ltd"
          subtitle="Your trusted partner for global trade excellence"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-[#0a4a9e]" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Strong Global Network</h3>
            <p className="text-gray-600">Strong global supplier & buyer network</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Package className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">End-to-End Expertise</h3>
            <p className="text-gray-600">End-to-End trade, logistics & compliance expertise</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Deep Market Insight</h3>
            <p className="text-gray-600">Deep market insight in Bangladesh</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Industry-Focused</h3>
            <p className="text-gray-600">Industry-focused sourcing and distribution</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-[#0a4a9e]" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Customer-Centric</h3>
            <p className="text-gray-600">Customer-centric business model</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Quality & Ethics</h3>
            <p className="text-gray-600">Commitment to quality and ethical trade</p>
          </div>
        </div>
      </ContentSection>

      {/* Vision & Mission */}
      <ContentSection bgColor="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-[#0a4a9e] to-[#05306b] rounded-lg p-8 text-white shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Our Vision</h2>
            </div>
            <p className="text-lg text-white/90 leading-relaxed">
              To become one of the most reliable global trade facilitators in Bangladesh by providing world-class products, building strong partnerships, and contributing to international commerce with integrity and innovation.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-lg p-8 text-white shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Our Mission</h2>
            </div>
            <ul className="space-y-3 text-white/90">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>To import high-quality global products at competitive prices</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>To distribute them efficiently across Bangladesh</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>To maintain compliance, standards, and transparency in trade</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>To export Bangladeshi products to international buyers</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>To ensure customer satisfaction through quality and service</span>
              </li>
            </ul>
          </div>
        </div>
      </ContentSection>

      {/* Closing Message */}
      <ContentSection bgColor="gray">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Let's Grow Together
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Zexfro International Ltd continues to expand its reach, diversify its sourcing capabilities, and strengthen customer relationships. We believe in empowering businesses and consumers through global trade solutions backed by quality and trust.
          </p>
          <div className="bg-gradient-to-r from-[#0a4a9e] to-[#05306b] rounded-lg p-8 text-white">
            <p className="text-xl font-semibold mb-4">Warm Regards,</p>
            <p className="text-2xl font-bold">The Management Team</p>
            <p className="text-xl mt-2">Zexfro International Limited</p>
          </div>
        </div>
      </ContentSection>

      {/* CTA */}
      <ContentSection bgColor="white">
        <CTABox
          title="Ready to Partner With Us?"
          description="Join hundreds of businesses that trust Zexfro International Limited for their international trade needs. Let's grow together in this new era of excellence."
          buttonText="Get Started Today"
          buttonLink="/contact"
        />
      </ContentSection>
    </ContentLayout>
  );
}
