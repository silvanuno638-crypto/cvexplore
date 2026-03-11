import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import Weather from './components/Weather';
import './globals.css';

// 1. Definição dos Metadados (SEO)
export const metadata: Metadata = {
  title: 'Explore Cabo Verde | História, Cultura e as 10 Ilhas',
  description: 'Descubra a Morabeza, a gastronomia e as paisagens paradisíacas do arquipélago de Cabo Verde.',
  keywords: 'Cabo Verde, Turismo, Ilha do Sal, Boavista, Morabeza, Viagem África',
};

// 2. Layout Único
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className="antialiased flex flex-col min-h-screen">
        <Navbar />
        
        {/* O 'pt-20' garante que o conteúdo não fique escondido sob a Navbar fixa */}
        <main className="flex-grow pt-20">
          {children}
        </main>
        
        {/* Rodapé unificado com o componente de clima */}
        <footer className="bg-white border-t py-8 px-6 text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 Explore Cabo Verde - Todos os direitos reservados.</p>
          <Weather /> 
        </footer>
      </body>
    </html>
  );
}