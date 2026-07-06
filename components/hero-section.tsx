"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-neutral-50 min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-neutral-900 mb-6">
            Premium Car Rentals for Your Next Journey
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl"
        >
          <p className="text-lg md:text-xl text-neutral-600 mb-10">
            Experience luxury, comfort, and reliability with Gunjal Tours. Choose from our wide range of meticulously maintained vehicles for any occasion.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-8 py-6 text-lg shadow-lg shadow-emerald-600/20"
            onClick={() => {
              document.getElementById("fleet")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View Our Cars
          </Button>
        </motion.div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[40rem] h-[40rem] bg-emerald-100 rounded-full blur-3xl opacity-50 z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[30rem] h-[30rem] bg-emerald-50 rounded-full blur-3xl opacity-50 z-0 pointer-events-none" />
    </section>
  );
}
