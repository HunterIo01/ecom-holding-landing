import { motion } from "framer-motion";
import { CheckCircle2, Clock, Wallet, ShieldCheck, MessageCircle, Star, BadgeCheck } from "lucide-react";
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
  "Compromiso para transferir cuando entren 2 ventas (para pagar la campaña publicitaria, y asi maximizar la cantidad de ventas)",
  "Cuenta de Mercado Pago con antiguedad y limpia",
  "Sin actividad sospechosa, bloqueos o deudas en tu cuenta"
];

const DAILY_TASKS = [
  "Realizar transferencia de ventas cada 2 ventas",
  "Enviar reporte a las 22PM para confirmar montos y desempeno del dia"
];

const TESTIMONIALS = [
  {
    id: 1,
    name: "Mirta B.",
    location: "Buenos Aires",
    platform: "Mercado Pago",
    platformColor: "bg-sky-100 text-sky-700",
    quote: "Muy fácil de entender el proceso. Apenas entra una venta, transfiero y listo. Nunca tuve inconvenientes.",
    initials: "MB",
    avatarColor: "bg-purple-600",
    date: "Abr 2026",
    verified: true,
    stars: 4,
  },
  {
    id: 2,
    name: "Karina",
    location: "Córdoba",
    platform: "Mercado Pago",
    platformColor: "bg-sky-100 text-sky-700",
    amount: "$187.554",
    quote: "Empecé con dudas pero el equipo me explicó todo paso a paso. Hoy es mi ingreso extra fijo cada semana.",
    initials: "K",
    avatarColor: "bg-blue-600",
    date: "05 Abr 2026",
    verified: true,
  },
  {
    id: 3,
    name: "Nuria",
    location: "Argentina",
    platform: "Mercado Pago",
    platformColor: "bg-sky-100 text-sky-700",
    amount: "$520.560",
    quote: "Lo que más me gustó es que no necesitan acceder a mi cuenta. Todo transparente y con comprobante.",
    initials: "N",
    avatarColor: "bg-emerald-600",
    date: "18 Abr 2026",
    verified: true,
  },
  {
    id: 4,
    name: "Natalia G.",
    location: "Buenos Aires",
    platform: "Mercado Pago",
    platformColor: "bg-sky-100 text-sky-700",
    amount: "$80.000",
    quote: "Trabajo desde casa, a mi ritmo. El sistema es claro y el pago siempre llega a tiempo.",
    initials: "NG",
    avatarColor: "bg-indigo-600",
    date: "22 Abr 2026",
    verified: true,
  },
  {
    id: 5,
    name: "Lucas C.",
    location: "Argentina",
    platform: "Mercado Pago",
    platformColor: "bg-sky-100 text-sky-700",
    amount: "$324.781",
    quote: "Llevo varias semanas y los montos son reales. Todo se confirma con comprobante. Muy serio el equipo.",
    initials: "LC",
    avatarColor: "bg-orange-600",
    date: "29 Abr 2026",
    verified: true,
  },
  {
    id: 6,
    name: "Ayelen",
    location: "Argentina",
    platform: "Mercado Pago",
    platformColor: "bg-sky-100 text-sky-700",
    quote: "Al principio era escéptica, pero el proceso es super sencillo. Empezamos a la mañana y sin complicaciones.",
    initials: "A",
    avatarColor: "bg-pink-600",
    date: "May 2026",
    verified: true,
    stars: 4,
  },
  {
    id: 7,
    name: "Valentina R.",
    location: "Córdoba",
    platform: "Mercado Pago",
    platformColor: "bg-sky-100 text-sky-700",
    quote: "El primer mes ya había generado $460.000 de sueldo extra. No lo podía creer, pero los comprobantes están ahí. Sigo creciendo semana a semana.",
    initials: "VR",
    avatarColor: "bg-rose-600",
    date: "Abr 2026",
    verified: true,
    stars: 5,
  },
  {
    id: 8,
    name: "Sebastián M.",
    location: "Santa Fe",
    platform: "Mercado Pago",
    platformColor: "bg-sky-100 text-sky-700",
    amount: "$256.000",
    quote: "Logré cumplir mis objetivos semanales, accedí a los 3 bonos y pasé de un básico de $140.000 semanal a $196.000. Un cambio enorme para mi familia.",
    initials: "SM",
    avatarColor: "bg-teal-600",
    date: "Abr 2026",
    verified: true,
    stars: 5,
  },
  {
    id: 9,
    name: "Romina P.",
    location: "Buenos Aires",
    platform: "Mercado Pago",
    platformColor: "bg-sky-100 text-sky-700",
    amount: "$360.000",
    quote: "En mi primer mes saqué $460.000 extra trabajando desde casa. Pensé que era mentira, pero lo viví y los comprobantes lo prueban.",
    initials: "RP",
    avatarColor: "bg-fuchsia-600",
    date: "Mar 2026",
    verified: true,
    stars: 4,
  },
  {
    id: 10,
    name: "Gonzalo T.",
    location: "Mendoza",
    platform: "Mercado Pago",
    platformColor: "bg-sky-100 text-sky-700",
    quote: "Lo que más me convenció fue la transparencia. Cada transferencia tiene su comprobante. Ya llevo más de $400.000 de sueldo extra generados este mes.",
    initials: "GT",
    avatarColor: "bg-cyan-600",
    date: "May 2026",
    verified: true,
    stars: 5,
  },
  {
    id: 11,
    name: "Florencia C.",
    location: "Córdoba",
    platform: "Mercado Pago",
    platformColor: "bg-sky-100 text-sky-700",
    amount: "$189.000",
    quote: "Cumplí los 3 bonos en la segunda semana y salté de $140.000 a $196.000 semanal. Es el mejor ingreso extra que encontré hasta hoy.",
    initials: "FC",
    avatarColor: "bg-violet-600",
    date: "Abr 2026",
    verified: true,
    stars: 4,
  },
  {
    id: 12,
    name: "Matías L.",
    location: "Santa Fe",
    platform: "Mercado Pago",
    platformColor: "bg-sky-100 text-sky-700",
    amount: "$412.000",
    quote: "Muy prolijo el equipo. Las transacciones siempre se acreditan en tiempo y forma. Llevo meses y jamás tuve un problema.",
    initials: "ML",
    avatarColor: "bg-lime-600",
    date: "Mar 2026",
    verified: true,
    stars: 5,
  },
  {
    id: 13,
    name: "Daniela V.",
    location: "Buenos Aires",
    platform: "Mercado Pago",
    platformColor: "bg-sky-100 text-sky-700",
    quote: "Ya supero los $460.000 de sueldo extra por mes. Sigo en el método porque funciona de verdad y el equipo siempre está disponible.",
    initials: "DV",
    avatarColor: "bg-amber-600",
    date: "May 2026",
    verified: true,
    stars: 4,
  },
];

export function PartnerSection() {
  const whatsappNumber = "543516226733";
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
          <div className="text-center mb-12">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-primary mb-3">
              Lo Que Dicen Nuestros Socios
            </h3>
            <p className="text-muted-foreground text-lg">Transferencias reales, socios reales.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="h-full border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                  <CardContent className="p-6 flex flex-col h-full">

                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-full ${testimonial.avatarColor} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                          {testimonial.initials}
                        </div>
                        <div>
                          <p className="font-bold text-primary">{testimonial.name}</p>
                          <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                        </div>
                      </div>
                      {testimonial.verified && (
                        <BadgeCheck className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      )}
                    </div>

                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < (testimonial.stars ?? 5) ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"}`} />
                      ))}
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-5 italic">
                      "{testimonial.quote}"
                    </p>

                    <div className="border-t border-border/50 pt-4 space-y-2">
                      {testimonial.amount && (
                        <div className="flex items-center justify-between bg-emerald-50 rounded-lg px-3 py-2">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            <span className="text-xs font-medium text-emerald-700">Transferencia verificada</span>
                          </div>
                          <span className="font-bold text-emerald-700 text-sm">{testimonial.amount}</span>
                        </div>
                      )}
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${testimonial.platformColor}`}>
                          {testimonial.platform}
                        </span>
                        <span className="text-xs text-muted-foreground">{testimonial.date}</span>
                      </div>
                    </div>

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
