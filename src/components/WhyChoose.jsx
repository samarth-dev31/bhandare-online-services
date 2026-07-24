import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock3,
  BadgeCheck,
  Users,
  Headphones,
  FileCheck,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "100% Secure",
    desc: "Your personal documents and information remain safe and confidential.",
  },
  {
    icon: Clock3,
    title: "Fast Processing",
    desc: "Quick application submission with minimal waiting time.",
  },
  {
    icon: BadgeCheck,
    title: "Trusted Service",
    desc: "Reliable assistance with accurate documentation and guidance.",
  },
  {
    icon: Users,
    title: "5000+ Happy Customers",
    desc: "Serving customers with satisfaction and professional support.",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    desc: "Friendly assistance before, during and after every service.",
  },
  {
    icon: FileCheck,
    title: "All Services in One Place",
    desc: "Government forms, registrations and online services under one roof.",
  },
];

export default function WhyChoose() {
  return (
    <section id="why" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-700 uppercase tracking-[4px] font-semibold">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900">
            Why Choose
            <span className="text-blue-700">
              {" "}Bhandare Online Services?
            </span>
          </h2>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            We provide reliable, secure and hassle-free online services with complete customer satisfaction.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: .5,
                  delay: index * .08,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="bg-gradient-to-br from-white to-blue-50 border border-blue-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >

                <div className="w-16 h-16 rounded-2xl bg-blue-700 flex items-center justify-center mb-6">

                  <Icon
                    className="text-white"
                    size={32}
                  />

                </div>

                <h3 className="text-xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {item.desc}
                </p>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}