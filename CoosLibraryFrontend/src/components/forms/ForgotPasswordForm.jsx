import React, { useState } from "react";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ loading: false, message: "", error: false });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      return setStatus({ loading: false, message: "Please enter your email.", error: true });
    }

    try {
      setStatus({ loading: true, message: "", error: false });

      // 🔹 Replace this with your actual API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setStatus({
        loading: false,
        message: "Password reset link sent! Check your inbox.",
        error: false,
      });
      setEmail("");
    } catch (err) {
      setStatus({
        loading: false,
        message: "Something went wrong. Please try again.",
        error: true,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-indigo-100 p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">
          Forgot Password
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Enter your registered email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={status.loading}
            className={`w-full py-2 font-semibold rounded-lg transition-all ${
              status.loading
                ? "bg-indigo-400 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700 text-white"
            }`}
          >
            {status.loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        {status.message && (
          <p
            className={`mt-4 text-center font-medium ${
              status.error ? "text-red-500" : "text-green-600"
            }`}
          >
            {status.message}
          </p>
        )}

        <p className="mt-6 text-center text-sm text-gray-600">
          Remembered your password?{" "}
          <a
            href="/login"
            className="text-indigo-600 hover:underline font-medium"
          >
            Go back to Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;


/*await new Promise((resolve) => setTimeout(resolve, 1500));
 
to 

const res = await fetch("http://localhost:8080/api/auth/forgot-password", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email }),
});
const data = await res.json();
*/