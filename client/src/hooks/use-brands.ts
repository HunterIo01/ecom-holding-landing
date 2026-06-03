const brands = [
  {
    id: 1,
    name: "CTRL Recovery®",
    description: "Equipamiento premium de recuperación física: frío, calor y compresión para atletas exigentes.",
    imageUrl: "/ctrl-recovery.png",
    websiteUrl: "https://ctrlrecovery.com/en"
  },
  {
    id: 2,
    name: "Kloss Buenos Aires",
    description: "Marca argentina de calzado y camperas de cuero con identidad urbana y colecciones exclusivas.",
    imageUrl: "/kloss.png",
    websiteUrl: "https://www.klossbsas.com/"
  },
  {
    id: 3,
    name: "Yalla",
    description: "Relojes y accesorios de moda con estilo único, envío gratis y cuotas sin interés en toda Argentina.",
    imageUrl: "/yalla.png",
    websiteUrl: "https://www.yalla.com.ar/"
  }
];

export function useBrands() {
  return {
    data: brands,
    isLoading: false,
    error: null
  };
}
