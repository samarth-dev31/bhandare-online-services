import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What services do you provide?",
    answer:
      "We provide PAN Card, Aadhaar Update Guidance, Passport Assistance, GST Registration, ITR Filing, Udyam Registration, Job & Exam Forms, Railway & Flight Ticket Booking, FSSAI Registration and many more online services.",
  },
  {
    question: "How can I submit my documents?",
    answer:
      "You can visit our office or send the required documents through WhatsApp for eligible services.",
  },
  {
    question: "How long does the process take?",
    answer:
      "The processing time depends on the service, but we always aim to complete your work as quickly as possible.",
  },
  {
    question: "Are my documents safe?",
    answer:
      "Yes. Your personal information and documents are kept secure and confidential.",
  },
  {
    question: "How can I contact you?",
    answer:
      "You can call us, send a WhatsApp message, or visit our office during business hours.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-24 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-14">

          <span className="uppercase tracking-[4px] text-blue-700 font-semibold">
            FAQ
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900">
            Frequently Asked
            <span className="text-blue-700"> Questions</span>
          </h2>

          <p className="mt-5 text-gray-600">
            Find answers to the most common questions about our services.
          </p>

        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-blue-100 shadow-md overflow-hidden"
            >

              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-gray-900 text-lg">
                  {faq.question}
                </span>

                <ChevronDown
                  size={22}
                  className={`transition-transform duration-300 ${
                    active === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>

                {active === index && (

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="px-6 pb-6 text-gray-600 leading-7">
                      {faq.answer}
                    </p>
                  </motion.div>

                )}

              </AnimatePresence>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}