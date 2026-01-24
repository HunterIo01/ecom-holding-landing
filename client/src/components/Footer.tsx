export function Footer() {
  return (
    <footer className="bg-primary border-t border-white/10 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left flex items-center gap-4">
            <img 
              src="/logo.png" 
              alt="Ecom Holding" 
              className="h-16 w-auto brightness-0 invert"
            />
            <div>
              <h3 className="font-display text-xl font-bold mb-1">Ecom Holding</h3>
              <p className="text-white/50 text-sm max-w-xs">
                Construyendo el futuro del comercio digital a traves de adquisiciones estrategicas y excelencia operativa.
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70">
            <a href="#" className="hover:text-accent transition-colors" data-testid="link-privacy">Politica de Privacidad</a>
            <a href="#" className="hover:text-accent transition-colors" data-testid="link-terms">Terminos de Servicio</a>
            <a href="#" className="hover:text-accent transition-colors" data-testid="link-linkedin">LinkedIn</a>
            <a href="#" className="hover:text-accent transition-colors" data-testid="link-instagram">Instagram</a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs text-white/30">
          © {new Date().getFullYear()} Ecom Holding. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
