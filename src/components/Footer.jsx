import { FaWhatsapp } from "react-icons/fa";
import { Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Logo */}

          <div>
            <h2 className="text-3xl font-extrabold text-blue-400">
              BHANDARE
            </h2>

            <p className="uppercase tracking-[4px] text-gray-400 text-sm mt-1">
              Online Services
            </p>

            <p className="mt-6 text-gray-300 leading-7">
              Fast, secure and reliable online services with complete customer satisfaction.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-xl font-bold mb-5">
              Quick Links
            </h3>

            <div className="space-y-3">

              <a href="#home" className="block hover:text-blue-400 transition">
                Home
              </a>

              <a href="#services" className="block hover:text-blue-400 transition">
                Services
              </a>

              <a href="#process" className="block hover:text-blue-400 transition">
                Process
              </a>

              <a href="#contact" className="block hover:text-blue-400 transition">
                Contact
              </a>

            </div>
          </div>

          {/* Contact */}

          <div>
            <h3 className="text-xl font-bold mb-5">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-3">
                <Phone size={20} className="text-blue-400" />
                <span>+91 84463 18518</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-blue-400 mt-1" />
                <span>
                  Nagar Panchayat Building,<br />
                  Wadwani, Maharashtra
                </span>
              </div>

              <a
                href="https://wa.me/918446318518"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 px-5 py-3 rounded-xl font-semibold transition"
              >
                <FaWhatsapp size={22} />
                WhatsApp
              </a>

            </div>
          </div>

        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Bhandare Online Services. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}