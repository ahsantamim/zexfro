"use client";

export function MailSettings() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">Carbonio Mail Settings</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">SMTP Host</label>
          <input
            type="text"
            placeholder="mail.example.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Port</label>
            <input
              type="number"
              placeholder="587"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Secure</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
              <option>TLS</option>
              <option>SSL</option>
              <option>None</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Username</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Save Settings
        </button>
      </form>
    </div>
  );
}
