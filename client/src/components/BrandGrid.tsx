import { motion } from "framer-motion";
import { useBrands } from "@/hooks/use-brands";
import { ExternalLink, Loader2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function BrandGrid() {
  const { data: brands, isLoading, error } = useBrands();

  if (error) {
    return (
      <div className="py-24 text-center text-destructive">
        Failed to load portfolio. Please try again later.
      </div>
    );
  }

  return (
    <section id="portfolio" className="py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-4 px-4 py-1 border-primary/20 text-primary">
              Our Portfolio
            </Badge>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
              Distinguished Brands
            </h2>
            <p className="text-muted-foreground text-lg">
              A curated collection of market-leading e-commerce entities, 
              each demonstrating exceptional value and growth potential.
            </p>
          </motion.div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <Loader2 className="w-12 h-12 animate-spin text-primary/20" />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands?.map((brand, index) => (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group h-full overflow-hidden border-border/50 hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={brand.imageUrl} 
                      alt={brand.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
                  </div>
                  <CardContent className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-display text-2xl font-bold text-primary">{brand.name}</h3>
                      {brand.websiteUrl && (
                        <a 
                          href={brand.websiteUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-accent transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {brand.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
