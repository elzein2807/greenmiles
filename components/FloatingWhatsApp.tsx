"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { contact } from "@/lib/data";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={contact.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Green Miles on WhatsApp"
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      className="group fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-card sm:bottom-6 sm:right-6"
    >
      <span className="absolute inset-0 -z-10 rounded-full bg-[#25D366] opacity-60 motion-safe:animate-ping" />
      <MessageCircle className="h-6 w-6" strokeWidth={2} />
      <span className="sr-only">Chat on WhatsApp</span>
    </motion.a>
  );
}
