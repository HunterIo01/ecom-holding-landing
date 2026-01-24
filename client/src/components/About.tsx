import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Users, Globe } from "lucide-react";

const FEATURES = [
  {
    icon: TrendingUp,
    title: "Strategic Growth",
    description: "We leverage data-driven strategies to scale brands sustainably in competitive markets."
  },
  {
    icon: Users,
    title: "Expert Leadership",
    description: "Our team brings decades of combined experience in logistics, marketing, and finance."
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Expanding market presence across borders with optimized supply chain solutions."
  }
];

export function About() {
  return (
    <section id="about" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
              Redefining E-Commerce Ownership
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              At Ecom Holding, we don't just invest in companies; we invest in potential. 
              Our mission is to acquire premier e-commerce brands and elevate them through 
              operational excellence, technology integration, and strategic capital allocation.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We believe in preserving the unique DNA of each brand while providing the 
              infrastructure needed to scale beyond boundaries.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {["Proven Track Record", "Capital Efficiency", "Operational Expertise", "Long-term Vision"].map((item) => (
                <div key={item} className="flex items-center space-x-3">
                  <CheckCircle2 className="text-accent w-5 h-5 flex-shrink-0" />
                  <span className="font-medium text-primary">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-8">
            {FEATURES.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-shadow flex items-start space-x-6"
              >
                <div className="bg-primary/5 p-4 rounded-xl">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-primary mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
