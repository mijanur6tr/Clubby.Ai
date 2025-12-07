import React from "react";
import { X } from "lucide-react"; // for the close icon

const UpgradeModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-80 relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>

        {/* Title */}
        <h2 className="text-xl font-bold mb-3 text-center">
          Premium Feature
        </h2>

        {/* Message */}
        <p className="text-gray-600 text-center mb-6">
          This feature is available only for Premium users.
        </p>

        {/* Only Upgrade Button */}
        <button
          onClick={() => (window.location.href = "/ai/subscription")}
          className="w-full py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-900 transition"
        >
          Upgrade Now
        </button>
      </div>
    </div>
  );
};

export default UpgradeModal;
