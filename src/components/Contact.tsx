"use client";

import { motion } from "framer-motion";
import { FiMail, FiMapPin } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import type { IconType } from "react-icons";

interface ContactItem {
  icon: IconType;
  label: string;
  value: string;
  href: string | null;
  external?: boolean;
}

const contacts: ContactItem[] = [
  {
    icon: FiMail,
    label: "Email",
    value: "Jacobfernandez0607@yahoo.com",
    href: "mailto:Jacobfernandez0607@yahoo.com",
  },

  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "JacobFernandezProgrammer",
    href: "https://linkedin.com/in/JacobFernandezProgrammer",
    external: true,
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: "San Antonio, Texas",
    href: null,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-6"
      style={{ background: "rgba(6,6,18,0.6)" }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#00d4ff] text-[11px] font-mono tracking-[0.4em] uppercase mb-3"
        >
          08 / Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-space font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-5"
        >
          Let&apos;s Build Something
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-[#8892a4] text-lg mb-16 max-w-xl mx-auto leading-relaxed"
        >
          Whether you&apos;re looking for a game programmer, a systems engineer,
          or just want to talk C++, I&apos;d love to connect.
        </motion.p>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 gap-4 mb-14 text-left">
          {contacts.map((item, i) => {
            const Icon = item.icon;
            const content = (
              <div className="flex items-center gap-4 p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] transition-all duration-300 group-hover:border-[#00d4ff]/30 group-hover:bg-white/[0.04]">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-[#00d4ff]/20 bg-[#00d4ff]/[0.06] flex-shrink-0">
                  <Icon className="text-[#00d4ff] text-xl" />
                </div>
                <div className="min-w-0">
                  <p className="text-[#8892a4] text-xs font-mono mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-white font-medium text-sm truncate">
                    {item.value}
                  </p>
                </div>
              </div>
            );

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.09 }}
                className="group"
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="block cursor-pointer"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="cursor-default">{content}</div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        >
          <a
            href="mailto:Jacobfernandez0607@yahoo.com"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-semibold text-black text-lg transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #00d4ff 0%, #0066ff 100%)",
              boxShadow: "0 0 40px rgba(0,212,255,0.3)",
            }}
          >
            <FiMail className="text-xl" />
            Send Me an Email
          </a>
        </motion.div>
      </div>
    </section>
  );
}
