"use client";

import { Bell, Megaphone, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

interface AnnouncementBadgeProps {
  text?: string;
  link?: string;
  icon?: "bell" | "megaphone" | "sparkles";
}

export function AnnouncementBadge({
  text = "What's New",
  link = "#",
  icon = "sparkles",
}: AnnouncementBadgeProps) {
  const [isHovered, setIsHovered] = useState(false);

  const icons = {
    bell: Bell,
    megaphone: Megaphone,
    sparkles: Sparkles,
  };

  const Icon = icons[icon];

  return (
    <motion.a
      href={link}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group cursor-pointer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {/* Outer Glow Ring */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 blur-md opacity-60"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main Badge Container */}
      <div className="relative flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 rounded-full shadow-lg overflow-hidden">
        {/* Animated Shine Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          animate={{
            x: ["-100%", "200%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 1,
          }}
        />

        {/* Icon with Rotation Animation */}
        <motion.div
          animate={{
            rotate: isHovered ? 360 : 0,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.5 }}
        >
          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white drop-shadow-lg" />
        </motion.div>

        {/* Text */}
        <span className="text-xs sm:text-sm font-bold text-white drop-shadow-md whitespace-nowrap relative z-10">
          {text}
        </span>

        {/* Pulse Dot */}
        <div className="relative">
          <motion.div
            className="w-2 h-2 bg-white rounded-full"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute inset-0 bg-white rounded-full"
            animate={{
              scale: [1, 2, 2],
              opacity: [0.8, 0, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        </div>
      </div>

      {/* Hover Tooltip (Optional) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 10,
        }}
        className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap pointer-events-none shadow-xl"
      >
        Click to view announcements
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
      </motion.div>
    </motion.a>
  );
}
