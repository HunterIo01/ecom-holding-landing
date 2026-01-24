import { motion } from "framer-motion";
import { CheckCircle2, Clock, Wallet, ShieldCheck, MessageCircle, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const BENEFITS = [
  {
    icon: Wallet,
    title: "Pago Fijo o Por Venta",
    description: "Elegi entre pago fijo diario o pago por cada venta realizada. Vos decidis."
  },
  {
    icon: Clock,
    title: "Liquidaciones Semanales",
    description: "Todos los lunes recibis tu liquidacion en pesos a la cuenta que prefieras."
  },
  {
    icon: ShieldCheck,
    title: "Operacion Segura",
    description: "No necesitamos acceder a tu cuenta. Solo recibis, confirmas y transferis."
  }
];

const REQUIREMENTS = [
  "Compromiso para transferir cuando entren 3 ventas (para que el despacho confirme rapido)",
  "Cuenta de Mercado Pago con antiguedad y limpia",
  "Sin actividad sospechosa, bloqueos o deudas en tu cuenta"
];

const DAILY_TASKS = [
  "Realizar transferencia de ventas cada 3 ventas",
  "Enviar reporte a las 22PM para confirmar montos y desempeno del dia"
];

const TESTIMONIALS = [
  { id: 1, name: "Carolina M.", location: "Buenos Aires" },
  { id: 2, name: "Martin L.", location: "Cordoba" },
  { id: 3, name: "Lucia R.", location: "Rosario" },
  { id: 4, name: "Diego S.", location: "Mendoza" }
];

export function PartnerSection() {
  const whatsappNumber = "5491178526527";
  const whatsappMessage = encodeURIComponent("Hola! Quiero formar parte como socio de Ecom Holding");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="partner" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
            Quiero Ser un Socio
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Si buscas generar ingresos extra sin necesidad de trabajar muchas horas, 
            te permitimos asociarte con nosotros de manera segura y escalable.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-border/50 mb-16"
        >
          <h3 className="font-display text-2xl font-bold text-primary mb-6">Como Funciona</h3>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Nos sucede a diario que Tienda Nube solo permite crear una tienda por Mercado Pago. 
            Por eso buscamos <span className="font-semibold text-primary">partners</span> para ampliar 
            la operacion de manera segura.
          </p>
          <div className="bg-accent/10 rounded-xl p-6 border-l-4 border-accent">
            <p className="text-primary font-medium">
              <strong>NO</strong> es necesario que accedamos a tu cuenta de Mercado Pago. Te asocias 
              con nosotros en la parte financiera: solo recibis los pagos, los confirmas y luego 
              los envias a una cuenta segura. Nuestro equipo se encarga de administrar, pagar 
              proveedores, despacho, encomienda, etc.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {BENEFITS.map((benefit, idx) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="h-full text-center p-8 border-border/50 hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="font-display text-xl font-bold text-primary mb-3">{benefit.title}</h4>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-border/50"
          >
            <h3 className="font-display text-2xl font-bold text-primary mb-6">Tarea Diaria</h3>
            <div className="space-y-4">
              {DAILY_TASKS.map((task, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <Clock className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-lg">{task}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-border/50"
          >
            <h3 className="font-display text-2xl font-bold text-primary mb-6">Requisitos Importantes</h3>
            <div className="space-y-4">
              {REQUIREMENTS.map((req, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">{req}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="font-display text-2xl font-bold text-primary text-center mb-10">
            Testimonios de Nuestros Socios
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <Card className="overflow-hidden border-border/50 hover:shadow-lg transition-shadow group">
                  <div className="aspect-video bg-primary/5 relative flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                    <div className="bg-white/90 w-14 h-14 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform cursor-pointer">
                      <Play className="w-6 h-6 text-primary ml-1" />
                    </div>
                  </div>
                  <CardContent className="p-4 text-center">
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button
            size="lg"
            onClick={() => window.open(whatsappUrl, '_blank')}
            className="bg-[#25D366] hover:bg-[#20BD5A] text-white text-lg px-10 py-7 rounded-full font-semibold transition-transform hover:-translate-y-1 shadow-lg"
            data-testid="button-whatsapp-partner"
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            QUIERO FORMAR PARTE
          </Button>
          <p className="text-muted-foreground mt-4 text-sm">
            Te responderemos lo antes posible por WhatsApp
          </p>
        </motion.div>

      </div>
    </section>
  );
}
