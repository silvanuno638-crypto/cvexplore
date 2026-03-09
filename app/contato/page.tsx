import FormularioContato from '../components/Contato';

export default function PaginaContato() {
  return (
    <main className="py-20 px-6 max-w-xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-900">Contacto</h1>
        <p className="text-gray-600 mt-2">Tem dúvidas sobre Cabo Verde? Fale connosco.</p>
      </div>
      <FormularioContato />
    </main>
  );
}