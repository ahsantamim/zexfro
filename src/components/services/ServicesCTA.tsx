import Link from "next/link";
import { ArrowRight, Phone, Mail } from "lucide-react";

export function ServicesCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0a4a9e] via-[#05306b] to-[#041f3f] text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border-2 border-white rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border-2 border-white rounded-full" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 text-center relative z-10">
        <span className="text-white font-semibold text-sm uppercase tracking-wider bg-white/20 px-4 py-2 rounded-full inline-block mb-6">
          Get Started Today
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Expand Your Global Trade?
        </h2>
        <p className="text-xl mb-10 text-white/90 max-w-3xl mx-auto">
          Let&apos;s discuss how our comprehensive import-export services can help your business thrive in international markets
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 bg-white text-[#0a4a9e] hover:bg-white/90 font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Contact Us Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          
          <Link
            href="/register"
            className="group inline-flex items-center gap-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0a4a9e] font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Register Your Business
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-white/90 mb-4">Or reach us directly:</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="tel:+1234567890" 
              className="flex items-center gap-2 text-white hover:text-white/80 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold">+1 (234) 567-890</span>
            </a>
            <a 
              href="mailto:info@zexfro.com" 
              className="flex items-center gap-2 text-white hover:text-white/80 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="font-semibold">info@zexfro.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
