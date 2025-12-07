export const siteConfig = {
  name: "Company Profile",
  description: "Professional company profile website",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  company: {
    name: "Your Company Name",
    address: "123 Business Street, City, Country",
    phone: "+1 (555) 123-4567",
    email: "contact@yourcompany.com",
  },
  social: {
    twitter: "https://twitter.com/yourcompany",
    facebook: "https://facebook.com/yourcompany",
    linkedin: "https://linkedin.com/company/yourcompany",
    instagram: "https://instagram.com/yourcompany",
  },
};
