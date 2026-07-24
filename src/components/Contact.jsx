import { motion } from "framer-motion";
import { Phone, MapPin, Clock3 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
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
            Contact Us
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900">
            We're Here to
            <span className="text-blue-700"> Help You</span>
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            Have questions? Contact us today for quick, secure and reliable online services.
          </p>
        </motion.div>

        {/* Contact Card */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl border border-blue-100 p-10"
        >
          <div className="space-y-8">

            {/* Phone */}

            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">
                <Phone className="text-blue-700" size={28} />
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Phone
                </h3>

                <a
                  href="tel:+918446318518"
                  className="text-gray-600 hover:text-blue-700 transition"
                >
                  +91 84463 18518
                </a>
              </div>
            </div>

            {/* WhatsApp */}

            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">
                <FaWhatsapp className="text-green-600 text-3xl" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  WhatsApp
                </h3>

                <a
                  href="https://wa.me/918446318518"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline"
                >
                  Chat with us on WhatsApp
                </a>
              </div>
            </div>

            {/* Address */}

            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center">
                <MapPin className="text-red-600" size={28} />
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Office Address
                </h3>

                <p className="text-gray-600">
                  Nagar Panchayat Building,<br />
                  Wadwani, Maharashtra
                </p>
              </div>
            </div>

            {/* Working Hours */}

            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-yellow-100 flex items-center justify-center">
                <Clock3 className="text-yellow-600" size={28} />
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Working Hours
                </h3>

                <p className="text-gray-600">
                  Monday – Sunday<br />
                  9:00 AM – 7:00 PM
                </p>
              </div>
            </div>

          </div>

          {/* CTA Button */}

          <a
            href="https://wa.me/918446318518"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 w-full flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-[1.02]"
          >
            <FaWhatsapp size={24} />
            Contact on WhatsApp
          </a>

        </motion.div>

      </div>
    </section>
  );
}