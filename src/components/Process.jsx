import { motion } from "framer-motion";
import {
  PhoneCall,
  FileText,
  Settings,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: PhoneCall,
    title: "Contact Us",
    description:
      "Call or WhatsApp us and tell us the service you need.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Submit Documents",
    description:
      "Share the required documents online or visit our office.",
  },
  {
    number: "03",
    icon: Settings,
    title: "Processing",
    description:
      "We verify your documents and complete the application quickly.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Service Completed",
    description:
      "Receive your completed service with complete satisfaction.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="py-24 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-700 uppercase tracking-[4px] font-semibold">
            Simple Process
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900">
            How It
            <span className="text-blue-700"> Works</span>
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            Just four easy steps to complete your online service quickly,
            securely, and without any hassle.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Line (Desktop) */}

          <div className="hidden lg:block absolute top-12 left-24 right-24 h-1 bg-blue-200 rounded-full"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
                className="relative bg-white rounded-3xl shadow-xl border border-blue-100 p-8 text-center hover:shadow-2xl transition-all duration-300 z-10"
              >
                {/* Number */}

                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}

                <div className="mt-8 mx-auto w-20 h-20 rounded-2xl bg-blue-100 flex items-center justify-center">
                  <Icon size={38} className="text-blue-700" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {step.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}