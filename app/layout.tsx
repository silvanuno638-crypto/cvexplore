  import Navbar from './components/Navbar';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className="antialiased">
        <Navbar />
        {/* O 'pt-20' garante que o conteúdo comece após a Navbar */}
        <main className="pt-20">
          {children}
        </main>
        
        {/* Rodapé simples opcional aqui */}
        <footer className="bg-white border-t py-8 text-center text-gray-500 text-sm">
          <p>© 2026 Explore Cabo Verde - Todos os direitos reservados.</p>
        </footer>
      </body>
    </html>
  );
}
// app/layout.tsx

export const metadata = {
  title: 'Explore Cabo Verde | História, Cultura e as 10 Ilhas',
  description: 'Descubra a Morabeza, a gastronomia e as paisagens paradisíacas do arquipélago de Cabo Verde.',
  keywords: 'Cabo Verde, Turismo, Ilha do Sal, Boavista, Morabeza, Viagem África',
};