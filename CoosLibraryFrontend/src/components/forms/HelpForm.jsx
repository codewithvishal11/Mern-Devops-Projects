import React, { useState } from 'react';
import { Loader2, CheckCircle, XCircle } from 'lucide-react'; // Using lucide-react for modern icons
import { getHelpRequests, postHelpRequest } from '../../services/helpService';

// Helper component for displaying status messages
const StatusAlert = ({ status, message }) => {
  if (status === 'idle' || !message) return null;

  const classes = {
    success: 'bg-green-100 border-green-400 text-green-700',
    error: 'bg-red-100 border-red-400 text-red-700',
  };

  const Icon = status === 'success' ? CheckCircle : XCircle;

  return (
    <div className={`flex items-center p-4 border rounded-lg mb-6 ${classes[status]}`} role="alert">
      <Icon className="w-5 h-5 mr-3 flex-shrink-0" />
      <span className="text-sm font-medium">{message}</span>
    </div>
  );
};

const HelpForm = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState('idle'); // 'idle', 'success', 'error'
  const [statusMessage, setStatusMessage] = useState('');
 
  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus('idle'); // Reset status on new submission
    setStatusMessage('');

    try {
      await postHelpRequest(formData);
      setSubmissionStatus('success');
      setStatusMessage("Your Message was sent successfully!");

      //Reset form
      setFormData({
        fullname: "",
        email: "",
        subject: "",
        message: ""
      })
    } catch (err) {
      console.error(err);
      setSubmissionStatus('error');
      setStatusMessage(err.response?.data?.message || "Something went wrong. Please try again");
    } finally {
      setIsSubmitting(false);
    }
  };

  const {fullname, email, subject, message} = formData;

  return (
    <div className="max-w-4xl mx-auto p-8 md:p-12 font-sans">
      <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-10 border border-purple-100">
        <h2 className="text-3xl font-extrabold text-purple-700 mb-2">
          Contact Our Support Team
        </h2>
        <p className="text-lg text-gray-500 mb-8">
          We're here to help you 24*7. Please fill out the form below and we'll get back to you as soon as possible.
        </p>

        {/* Submission Status Message */}
        <StatusAlert status={submissionStatus} message={statusMessage} />

        {/* The handleSubmit function is attached to the form's onSubmit event */}
        <form className="space-y-6" onSubmit={handleSubmit}>

          {/* Full Name Input */}
          <div>
            <label htmlFor="fullname" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Enter your full name"
              required
              value={fullname}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 transition duration-150 ease-in-out sm:text-base disabled:opacity-50"
              disabled={isSubmitting}
            />
          </div>

          {/* Email Address Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="you@example.com"
              required
              value={email} // BIND VALUE
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 transition duration-150 ease-in-out sm:text-base disabled:opacity-50"
              disabled={isSubmitting}
            />
          </div>

          {/* Subject Dropdown/Input */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              required
              value={subject} // BIND VALUE
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 bg-white transition duration-150 ease-in-out sm:text-base appearance-none disabled:opacity-50"
              disabled={isSubmitting}
            >
              <option value="" disabled>Select an issue...</option>
              <option value="login">Login/Account Issue</option>
              <option value="book">Book Access/Content Issue</option>
              <option value="technical">Technical Support</option>
              <option value="feedback">General Feedback</option>
              <option value="other">Other Inquiry</option>
            </select>
          </div>

          {/* Message Textarea */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Describe your issue or question in detail..."
              required
              value={message} // BIND VALUE
             onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 transition duration-150 ease-in-out sm:text-base disabled:opacity-50"
              disabled={isSubmitting}
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting} // DISABLE while submitting
              className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-lg font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-150 ease-in-out transform hover:scale-[1.01] disabled:bg-purple-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin w-5 h-5 mr-3" />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HelpForm;