import React, { useState } from "react";
import authService from "../appwrite/auth.js";

const OtpVerificationDialog = ({ emailOtpData, onClose, onVerified }) => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVerify = async () => {
    setLoading(true);

    try {
      const session = await authService.verifyEmailOTP(emailOtpData.userId, otp);
      onVerified(session); // callback to parent
    } catch (err) {
      alert("❌ Invalid OTP: " + err.message);
    } finally {
      setLoading(false);
    }
    
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-sm shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Verify OTP</h2>
        <p className="text-sm text-gray-600 mb-3">
          Enter the OTP sent to <span className="font-medium">{emailOtpData.email}</span>
        </p>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full border px-4 py-2 rounded-md mb-4 focus:outline-none focus:ring focus:border-blue-400"
          placeholder="Enter OTP"
        />

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Cancel
          </button>
          <button
            onClick={handleVerify}
            disabled={loading}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OtpVerificationDialog;
