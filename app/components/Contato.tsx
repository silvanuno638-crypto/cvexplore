'use client';

// Verifique se esta linha está exatamente assim:
export default function FormularioContato() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mensagem enviada!');
  };
  return (
    <section className="w-full max-w-md mx-auto p-8 bg-white rounded-2xl shadow-lg border border-gray-100 mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Entre em Contato</h2>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
          <input 
            type="text" 
            placeholder="Seu nome completo"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
            required 
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
          <input 
            type="email" 
            placeholder="seu@email.com"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
            required 
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
          <textarea 
            rows={4} 
            placeholder="Como posso te ajudar?"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
            required
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md"
        >
          Enviar Mensagem
        </button>
      </form>
    </section>
  );
}