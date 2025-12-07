import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl mb-8 text-blue-100">
          Join thousands of satisfied customers today
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
        >
          Contact Us Now
        </Link>
      </div>
    </section>
  );
}
