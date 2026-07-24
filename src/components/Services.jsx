import { motion } from "framer-motion";
import {
  CreditCard,
  FileText,
  Briefcase,
  GraduationCap,
  Plane,
  Building2,
  Receipt,
  BadgeCheck,
  ShieldCheck,
  ArrowRight,
  Ticket,
  FileBadge,
} from "lucide-react";

const services = [
  {
    icon: CreditCard,
    title: "PAN Card",
    desc: "New PAN Card & corrections.",
  },
  {
    icon: BadgeCheck,
    title: "Passport Assistance",
    desc: "New passport & renewal support.",
  },
  {
    icon: GraduationCap,
    title: "Job & Exam Forms",
    desc: "Government & private application forms.",
  },
  {
    icon: Building2,
    title: "GST Registration",
    desc: "GST registration & related services.",
  },
  {
    icon: Receipt,
    title: "Income Tax Return",
    desc: "Fast and accurate ITR filing.",
  },
  {
    icon: Briefcase,
    title: "Udyam Registration",
    desc: "MSME registration made simple.",
  },
  {
    icon: ShieldCheck,
    title: "FSSAI Registration",
    desc: "Food license registration support.",
  },
  {
    icon: Ticket,
    title: "Railway & Flight Tickets",
    desc: "Easy ticket booking service.",
  },
  {
    icon: FileBadge,
    title: "Online Certificates",
    desc: "Government certificate assistance.",
  },
  {
    icon: Plane,
    title: "Travel Services",
    desc: "Travel bookings & online support.",
  },
  {
    icon: FileText,
    title: "Resume Creation",
    desc: "Professional resumes for jobs.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-700 font-semibold uppercase tracking-widest">
            Our Services
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4">
            Everything You Need
            <span className="text-blue-700"> Under One Roof</span>
          </h2>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Fast, secure and reliable online services with complete customer
            support.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: .5,
                  delay: index * .05,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="bg-white rounded-3xl p-8 shadow-lg border border-blue-100 hover:shadow-2xl transition-all duration-300"
              >

                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">

                  <Icon
                    size={34}
                    className="text-blue-700"
                  />

                </div>

                <h3 className="text-xl font-bold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  {service.desc}
                </p>

                <button className="mt-6 flex items-center gap-2 text-blue-700 font-semibold hover:gap-3 transition-all">

                  Learn More

                  <ArrowRight size={18} />

                </button>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}