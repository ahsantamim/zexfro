export function TeamSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Add team members here */}
          <p className="col-span-full text-center text-gray-600">
            Team member cards will go here
          </p>
        </div>
      </div>
    </section>
  );
}
