// ======================================================
// BHANDARE ONLINE SERVICES
// PREMIUM HERO SECTION
// PART 1
// ======================================================

import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaShieldAlt,
  FaBolt,
  FaHeadset,
} from "react-icons/fa";
import { ArrowRight } from "lucide-react";

import heroImage from "../assets/images/hero.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center"
    >
      {/* Background Blur */}
      <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-blue-300/20 rounded-full blur-3xl"></div>

      <div className="absolute top-1/2 -right-40 w-[420px] h-[420px] bg-cyan-300/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-200/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}

        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold shadow-sm mb-8">

            <FaShieldAlt />

            Fast • Secure • Reliable

          </div>

          {/* Heading */}

          <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-tight text-gray-900">

            Your Trusted

            <br />

            <span className="text-blue-700">

              Online Service

            </span>

            <br />

            Partner

          </h1>

          {/* Description */}

          <p className="mt-8 text-lg text-gray-600 leading-8 max-w-xl">

            PAN Card, Passport Assistance, GST Registration,
            Government Forms, Railway & Flight Tickets,
            Income Tax Return (ITR), Udyam Registration
            and many more digital services under one roof.

          </p>{/* CTA Buttons */}

          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="#services"
              className="group inline-flex items-center gap-3 bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Explore Services

              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition"
              />
            </a>

            <a
              href="https://wa.me/918446318518"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <FaWhatsapp size={24} />

              WhatsApp
            </a>

          </div>

          {/* Trust Features */}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">

            <div className="flex items-center gap-3 bg-white rounded-2xl p-4 shadow-lg">

              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">

                <FaShieldAlt className="text-blue-700 text-xl" />

              </div>

              <div>

                <h4 className="font-bold text-gray-900">
                  100% Secure
                </h4>

                <p className="text-sm text-gray-500">
                  Safe Documentation
                </p>

              </div>

            </div>

            <div className="flex items-center gap-3 bg-white rounded-2xl p-4 shadow-lg">

              <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center">

                <FaBolt className="text-yellow-500 text-xl" />

              </div>

              <div>

                <h4 className="font-bold text-gray-900">
                  Quick Service
                </h4>

                <p className="text-sm text-gray-500">
                  Fast Processing
                </p>

              </div>

            </div>

            <div className="flex items-center gap-3 bg-white rounded-2xl p-4 shadow-lg">

              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">

                <FaHeadset className="text-green-600 text-xl" />

              </div>

              <div>

                <h4 className="font-bold text-gray-900">
                  Trusted Support
                </h4>

                <p className="text-sm text-gray-500">
                  Always Here to Help
                </p>

              </div>

            </div>

          </div>

        </motion.div>{/* RIGHT SIDE */}

        <motion.div
  initial={{ opacity: 0, x: 80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.9 }}
  className="relative hidden lg:flex justify-center"
>
          {/* Hero Image */}

          <motion.img
            src={heroImage}
            alt="Bhandare Online Services"
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10 w-full max-w-xl drop-shadow-2xl"
          />

          {/* Floating Card 1 */}

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="absolute hidden lg:flex top-10 -left-4 bg-white rounded-2xl shadow-2xl px-6 py-4 z-20"
          >
            <h3 className="text-3xl font-extrabold text-blue-700">
              5000+
            </h3>

            <p className="text-gray-500 text-sm">
              Happy Customers
            </p>
          </motion.div>

          {/* Floating Card 2 */}

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
            }}
            className="absolute hidden lg:flex bottom-12 -right-4 bg-white rounded-2xl shadow-2xl px-6 py-4 z-20"
          >
            <h3 className="text-3xl font-extrabold text-green-600">
              20+
            </h3>

            <p className="text-gray-500 text-sm">
              Online Services
            </p>
          </motion.div>
        </motion.div>

      </div>

      {/* Bottom Fade */}

      

    </section>
  );
}