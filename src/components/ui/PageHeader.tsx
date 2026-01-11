"use client";

interface PageHeaderProps {
  title: string;
  description: string;
  heroImage?: string;
}

export function PageHeader({ title, description, heroImage }: PageHeaderProps) {
  return (
    <section className="relative py-20 md:py-32 text-white overflow-hidden">
      {/* Background Image (if provided) */}
      {heroImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${heroImage}')`,
            }}
          />
          {/* Gradient Overlay for background image */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a4a9e]/95 via-[#05306b]/10 to-[#041f3f]/85" />
        </>
      )}
      
      {/* Gradient Background (if no image) */}
      {!heroImage && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a4a9e] via-[#05306b] to-[#041f3f]" />
      )}
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-40 h-40 border-2 border-white rounded-none" />
      </div>
      
      <div className="container mx-auto max-w-7xl px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '100ms' }}>
          {description}
        </p>
      </div>
      
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
          animation-fill-mode: backwards;
        }
      `}</style>
    </section>
  );
}
