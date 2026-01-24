import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { insertInquirySchema, type CreateInquiryInput } from "@shared/schema";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, Phone, MapPin, Loader2 } from "lucide-react";

export function ContactForm() {
  const { mutate: createInquiry, isPending } = useCreateInquiry();
  
  const form = useForm<CreateInquiryInput>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: CreateInquiryInput) => {
    createInquiry(data, {
      onSuccess: () => form.reset(),
    });
  };

  return (
    <section id="contact" className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Let's Build Together</h2>
            <p className="text-white/70 text-lg mb-12 leading-relaxed max-w-lg">
              Whether you're looking to sell your e-commerce brand or exploring investment opportunities, 
              our team is ready to discuss the future.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-white/10 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Email Us</h4>
                  <p className="text-white/60">partnerships@ecomholding.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white/10 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Call Us</h4>
                  <p className="text-white/60">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white/10 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Headquarters</h4>
                  <p className="text-white/60">
                    100 Innovation Drive, Suite 500<br />
                    San Francisco, CA 94105
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl text-foreground"
          >
            <h3 className="font-display text-2xl font-bold mb-6">Send an Inquiry</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" className="h-12 bg-secondary/30" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="john@company.com" className="h-12 bg-secondary/30" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your brand or inquiry..." 
                          className="min-h-[150px] resize-none bg-secondary/30" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={isPending}
                  className="w-full h-12 text-lg font-semibold bg-primary hover:bg-primary/90"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                    </>
                  ) : (
                    "Submit Inquiry"
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
