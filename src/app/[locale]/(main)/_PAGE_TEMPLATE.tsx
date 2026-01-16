/**
 * DOCUMENTATION PAGE TEMPLATE
 *
 * This is a reusable template for creating long-form content pages with scrollspy navigation.
 *
 * TO USE THIS TEMPLATE:
 * 1. Copy this file to your desired location (e.g., compliance-standards/page.tsx)
 * 2. Update the metadata (title, description)
 * 3. Define your sections array with unique IDs and titles
 * 4. Update pageTitle and pageDescription in DocLayout
 * 5. Create DocSection components for each section
 * 6. Add your content inside each DocSection
 * 7. Delete this comment block
 *
 * EXAMPLES:
 * - /competitive-advantages - Competitive Advantages
 * - /logistics-support - Logistics Support
 * - /quality-assurance - Quality Assurance
 */

import { DocLayout, DocSection } from "@/components/ui/DocLayout";
import { Shield, Package, Globe, Award, TrendingUp } from "lucide-react"; // Import icons you need
import Image from "next/image"; // Import for adding images

export const metadata = {
  title: "Your Page Title - Zexfro | Subtitle",
  description:
    "Your page description for SEO. This appears in search results and social media shares.",
};

// Define your sections - these will appear in the sidebar navigation
const sections = [
  { id: "section-1", title: "First Section Title" },
  { id: "section-2", title: "Second Section Title" },
  { id: "section-3", title: "Third Section Title" },
  { id: "section-4", title: "Fourth Section Title" },
  { id: "section-5", title: "Fifth Section Title" },
];

export default function YourPageName() {
  return (
    <DocLayout
      sections={sections}
      pageTitle="Your Page Title"
      pageDescription="Your page description that appears in the blue header section at the top of the page."
    >
      {/* Section 1 */}
      <DocSection id="section-1" title="First Section Title">
        {/* Optional: Icon header for visual interest */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Shield className="w-6 h-6 text-[#0a4a9e]" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Subsection Title
            </h3>
            <p className="text-gray-600">
              Brief description or introduction to this subsection.
            </p>
          </div>
        </div>

        {/* Main content - use <p> tags for paragraphs */}
        <p>
          Your main content paragraph goes here. This is regular body text that
          explains the topic in detail.
        </p>

        <p>
          Add multiple paragraphs as needed. Each paragraph should be wrapped in
          a &lt;p&gt; tag for proper spacing.
        </p>

        {/* Optional: Add an image after introduction - great for visual appeal */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="https://images.unsplash.com/photo-YOUR-IMAGE-ID?w=1200&q=80"
            alt="Descriptive alt text for accessibility and SEO"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-semibold">
              Image Caption or Description
            </p>
          </div>
        </div>

        {/* Highlighted info box - use for important lists or callouts */}
        <div className="bg-blue-50 border-l-4 border-[#0a4a9e] p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-3">Box Title:</h4>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-[#0a4a9e] font-bold">•</span>
              <span>
                <strong>Item Title:</strong> Description of the item
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0a4a9e] font-bold">•</span>
              <span>
                <strong>Item Title:</strong> Description of the item
              </span>
            </li>
          </ul>
        </div>

        {/* Statistics grid - use for displaying metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-[#0a4a9e] mb-2">99%</div>
            <div className="text-sm text-gray-600">Statistic Label</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-[#0a4a9e] mb-2">500+</div>
            <div className="text-sm text-gray-600">Statistic Label</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-[#0a4a9e] mb-2">24/7</div>
            <div className="text-sm text-gray-600">Statistic Label</div>
          </div>
        </div>

        <p>More content after the statistics...</p>
      </DocSection>

      {/* Section 2 */}
      <DocSection id="section-2" title="Second Section Title">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Package className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Subsection Title
            </h3>
            <p className="text-gray-600">Brief description.</p>
          </div>
        </div>

        <p>Section 2 content...</p>

        {/* Use different colors for variety: green, yellow, purple, orange, red */}
        <div className="bg-green-50 border-l-4 border-green-600 p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-3">Green Info Box:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-semibold text-gray-900 mb-2">Column Title</h5>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• List item</li>
                <li>• List item</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-gray-900 mb-2">Column Title</h5>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• List item</li>
                <li>• List item</li>
              </ul>
            </div>
          </div>
        </div>
      </DocSection>

      {/* Section 3 */}
      <DocSection id="section-3" title="Third Section Title">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Globe className="w-6 h-6 text-yellow-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Subsection Title
            </h3>
            <p className="text-gray-600">Brief description.</p>
          </div>
        </div>

        <p>Section 3 content...</p>

        {/* Two-column layout for related information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="bg-white border-2 border-[#0a4a9e] rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">Left Column Title</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• List item with description</li>
              <li>• List item with description</li>
              <li>• List item with description</li>
            </ul>
          </div>
          <div className="bg-white border-2 border-[#0a4a9e] rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">Right Column Title</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• List item with description</li>
              <li>• List item with description</li>
              <li>• List item with description</li>
            </ul>
          </div>
        </div>
      </DocSection>

      {/* Section 4 */}
      <DocSection id="section-4" title="Fourth Section Title">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Award className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Subsection Title
            </h3>
            <p className="text-gray-600">Brief description.</p>
          </div>
        </div>

        <p>Section 4 content...</p>
      </DocSection>

      {/* Section 5 (Final section with CTA) */}
      <DocSection id="section-5" title="Fifth Section Title">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <TrendingUp className="w-6 h-6 text-red-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Subsection Title
            </h3>
            <p className="text-gray-600">Brief description.</p>
          </div>
        </div>

        <p>Final section content...</p>

        {/* Call-to-Action box (typically at end of last section) */}
        <div className="bg-gradient-to-r from-[#0a4a9e] to-[#05306b] rounded-lg p-8 text-white my-8">
          <h4 className="text-2xl font-bold mb-4">Ready to Take Action?</h4>
          <p className="mb-6 text-white/90">
            Compelling call-to-action text that encourages users to contact you
            or take the next step.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#0a4a9e] font-bold px-8 py-3 rounded-full hover:bg-white/90 transition-colors duration-200"
          >
            Contact Us Today
          </a>
        </div>
      </DocSection>
    </DocLayout>
  );
}

/**
 * AVAILABLE ICON COLORS FOR VARIETY:
 *
 * Blue (Primary Brand Color):
 * - bg-blue-100 with text-[#0a4a9e]
 * - border-[#0a4a9e]
 *
 * Green:
 * - bg-green-100 with text-green-600
 * - border-green-600
 *
 * Yellow:
 * - bg-yellow-100 with text-yellow-600
 * - border-yellow-600
 *
 * Purple:
 * - bg-purple-100 with text-purple-600
 * - border-purple-600
 *
 * Orange:
 * - bg-orange-100 with text-orange-600
 * - border-orange-600
 *
 * Red:
 * - bg-red-100 with text-red-600
 * - border-red-600
 *
 *
 * COMMON LUCIDE ICONS TO USE:
 *
 * - Shield, ShieldCheck, ShieldAlert
 * - CheckCircle, Check, CheckSquare
 * - Package, PackageCheck, PackageSearch
 * - Truck, Ship, Plane
 * - Globe, Map, MapPin
 * - Clock, Timer, Calendar
 * - FileCheck, FileText, File
 * - Award, Star, Trophy
 * - Users, User, UserCheck
 * - TrendingUp, BarChart, LineChart
 * - Settings, Cog, Tool
 * - Eye, Search, Scan
 * - Lock, Key, Unlock
 * - Heart, ThumbsUp, Smile
 */
