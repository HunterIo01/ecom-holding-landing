import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { User, Lock, Loader2 } from "lucide-react";
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
    <div className="min-h-screen bg-[#1a1f2e] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl p-8 mb-8 flex items-center justify-center">
          <img 
            src="/logo.png" 
            alt="Ecom Holding" 
            className="h-32 w-auto"
          />
        </div>

        <div className="text-center mb-8">
          <h1 className="text-white text-2xl font-semibold tracking-wide">
            Acceso Seguro
          </h1>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        placeholder="Usuario"
                        className="h-14 pl-12 bg-[#2a3142] border-[#3a4152] text-white placeholder:text-gray-400 rounded-xl focus:border-[#6366f1] focus:ring-[#6366f1]"
                        data-testid="input-username"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-400" />
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
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        type="password"
                        placeholder="Contrasena"
                        className="h-14 pl-12 bg-[#2a3142] border-[#3a4152] text-white placeholder:text-gray-400 rounded-xl focus:border-[#6366f1] focus:ring-[#6366f1]"
                        data-testid="input-password"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-14 bg-[#6366f1] hover:bg-[#5558e3] text-white text-lg font-semibold rounded-xl mt-4"
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

        <div className="mt-8 text-center">
          <a 
            href="/" 
            className="text-gray-400 hover:text-white transition-colors text-sm"
            data-testid="link-back-home"
          >
            Volver al inicio
          </a>
        </div>
      </div>
    </div>
  );
}
