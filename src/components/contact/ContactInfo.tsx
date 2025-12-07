export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
        <p className="text-gray-600">
          Get in touch with us through any of these channels
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <div className="text-2xl">📍</div>
          <div>
            <h4 className="font-semibold mb-1">Address</h4>
            <p className="text-gray-600">123 Business Street, City, Country</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="text-2xl">📧</div>
          <div>
            <h4 className="font-semibold mb-1">Email</h4>
            <p className="text-gray-600">contact@yourcompany.com</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="text-2xl">📞</div>
          <div>
            <h4 className="font-semibold mb-1">Phone</h4>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </div>
        </div>
      </div>
    </div>
  );
}
