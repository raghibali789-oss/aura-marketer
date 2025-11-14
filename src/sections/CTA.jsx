import React from "react";
import { motion } from "framer-motion";
import Button from "../components/Button";
import { Rocket, Sparkles } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 px-6 bg-gray-900 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-teal-600 via-teal-700 to-amber-600 rounded-[2.5rem] p-12 md:p-20 shadow-2xl overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-400/20 rounded-full blur-3xl" />

          <div className="relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full mb-8"
            >
              <Rocket className="w-5 h-5 text-white" />
              <span className="text-white font-medium">
                Limited Spots for Early Partners
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Be Part of Our First Launch Campaigns
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-teal-50 mb-10 max-w-2xl mx-auto"
            >
              Join forward-thinking brands and talented creators shaping the
              future of influencer marketing in the GCC.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                onClick={() => console.log("Brand clicked")}
                className="bg-white text-teal-700 hover:bg-gray-100 px-8 py-6 text-lg rounded-full shadow-xl"
                size="lg"
              >
                Work With Us
              </Button>

              <Button
                onClick={() => console.log("Influencer clicked")}
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full shadow-xl backdrop-blur-sm"
                size="lg"
              >
                <Sparkles className="mr-2 w-5 h-5" />
                Join Our Creator List
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
