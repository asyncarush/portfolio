"use client";

import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";

type ServiceType = "devops" | "fullstack" | "backend" | "other";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mpwldgpq");
  const [selectedService, setSelectedService] = useState<ServiceType>("devops");

  const services = [
    { id: "devops", label: "DevOps Support" },
    { id: "fullstack", label: "Full Stack App Development" },
    { id: "backend", label: "Backend Issue Resolution" },
    { id: "other", label: "Other Inquiry" },
  ];

  if (state.succeeded) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center p-8 bg-white rounded-xl border border-green-200 shadow-lg"
      >
        <h3 className="text-2xl font-bold text-green-600 mb-2">Thank You!</h3>
        <p className="text-gray-700">
          Your message has been sent successfully. I'll get back to you soon!
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="text-center mb-12">
        <h2 className="text-sm font-semibold text-violet-600 mb-3 tracking-wider uppercase">
          Get in Touch
        </h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-5">
          Let's <span className="text-violet-600">Work Together</span>
        </h1>
        <div className="w-16 h-1 bg-violet-600 mx-auto rounded-full mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          Have a project in mind or need technical assistance? Drop me a message
          and I'll get back to you as soon as possible.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 max-w-3xl mx-auto">
        <input type="hidden" name="service" value={selectedService} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 text-base rounded-lg bg-white border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all shadow-sm"
              placeholder="John Doe"
            />
            <ValidationError
              prefix="Name"
              field="name"
              errors={state.errors}
              className="text-red-600 text-sm mt-1 block"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 text-base rounded-lg bg-white border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all shadow-sm"
              placeholder="john@example.com"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="text-red-600 text-sm mt-1 block"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            I need help with <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
            {services.map((service) => (
              <div key={service.id} className="flex items-center">
                <input
                  id={service.id}
                  name="service"
                  type="radio"
                  checked={selectedService === service.id}
                  onChange={() => setSelectedService(service.id as ServiceType)}
                  className="h-4 w-4 text-violet-600 focus:ring-violet-500 border-gray-300"
                />
                <label
                  htmlFor={service.id}
                  className="ml-2 block text-sm text-gray-700"
                >
                  {service.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Your Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full px-4 py-3 text-base rounded-lg bg-white border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all shadow-sm"
            placeholder="Tell me about your project or inquiry..."
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="text-red-600 text-sm mt-1.5 block"
          />
        </div>

        <div className="pt-4">
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full py-3.5 px-6 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center text-base"
          >
            {state.submitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
