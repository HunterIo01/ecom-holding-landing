import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from "wouter";
import { User, Lock, Loader2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const loginSchema = z.object({
  username: z.string().min(1, "Usuario requerido"),
  password: z.string().min(1, "Contrasena requerida"),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginForm) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Acceso Restringido",
        description: "Contacta al administrador para obtener credenciales.",
        variant: "destructive",
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary to-primary/90 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform origin-top-right" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-accent/10 -skew-x-12 transform origin-bottom-left" />
      
      <div className="w-full max-w-md relative z-10">
        <Link href="/">
          <a className="inline-flex items-center text-white/70 hover:text-white transition-colors mb-8 text-sm" data-testid="link-back">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </a>
        </Link>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-secondary/30 p-8 flex items-center justify-center border-b border-border/50">
            <img 
              src="/logo.png" 
              alt="Ecom Holding" 
              className="h-20 w-auto"
            />
          </div>

          <div className="p-8 md:p-10">
            <div className="text-center mb-8">
              <h1 className="font-display text-2xl font-bold text-primary mb-2">
                Acceso Seguro
              </h1>
              <p className="text-muted-foreground text-sm">
                Plataforma de administracion interna
              </p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                          <Input
                            placeholder="Usuario"
                            className="h-12 pl-12 bg-secondary/30 border-border rounded-xl focus:border-primary focus:ring-primary"
                            data-testid="input-username"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                          <Input
                            type="password"
                            placeholder="Contrasena"
                            className="h-12 pl-12 bg-secondary/30 border-border rounded-xl focus:border-primary focus:ring-primary"
                            data-testid="input-password"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-white text-base font-semibold rounded-xl"
                  data-testid="button-signin"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Ingresando...
                    </>
                  ) : (
                    "Iniciar Sesion"
                  )}
                </Button>
              </form>
            </Form>

            <div className="mt-6 pt-6 border-t border-border/50 text-center">
              <p className="text-xs text-muted-foreground">
                Acceso exclusivo para socios autorizados
              </p>
            </div>
          </div>
        </div>

        <p className="text-center text-white/40 text-xs mt-8">
          © {new Date().getFullYear()} Ecom Holding. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
}
