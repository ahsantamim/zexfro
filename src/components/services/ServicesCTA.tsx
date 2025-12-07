import Link from "next/link";

export function ServicesCTA() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Interested in Our Services?</h2>
        <Link
          href="/contact"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition mt-4"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
