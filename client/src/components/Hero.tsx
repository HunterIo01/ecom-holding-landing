import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative h-screen min-h-[800px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Abstract architecture/modern office background */}
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
          alt="Modern office architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-90" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-accent font-medium tracking-wider uppercase mb-4 text-sm md:text-base">
              Strategic E-Commerce Growth
            </h2>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
              Building the Future of <br />
              <span className="text-white/90">Digital Commerce</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
              We acquire, optimize, and scale exceptional e-commerce brands. 
              Join a portfolio dedicated to sustainable growth and operational excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="bg-accent text-primary hover:bg-accent/90 text-lg px-8 py-6 rounded-full font-semibold transition-transform hover:-translate-y-1"
              >
                Partner With Us
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" })}
                className="border-white text-white hover:bg-white/10 hover:text-white text-lg px-8 py-6 rounded-full transition-transform hover:-translate-y-1 bg-transparent"
              >
                View Portfolio
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60"
      >
        <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent" />
      </motion.div>
    </section>
  );
}
