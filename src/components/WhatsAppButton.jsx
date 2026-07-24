import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/918446318518"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="relative">
        {/* Ping Animation */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30"></span>

        {/* Button */}
        <div className="relative w-16 h-16 rounded-full bg-green-600 hover:bg-green-700 shadow-2xl flex items-center justify-center transition-all duration-300">
          <FaWhatsapp className="text-white text-4xl" />
        </div>
      </div>
    </motion.a>
  );
}