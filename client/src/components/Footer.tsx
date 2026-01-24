export function Footer() {
  return (
    <footer className="bg-primary border-t border-white/10 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="font-display text-2xl font-bold mb-2">Ecom Holding</h3>
            <p className="text-white/50 text-sm max-w-xs">
              Building the future of digital commerce through strategic acquisition and operational excellence.
            </p>
          </div>
          
          <div className="flex space-x-8 text-sm text-white/70">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-accent transition-colors">Twitter</a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs text-white/30">
          © {new Date().getFullYear()} Ecom Holding. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
