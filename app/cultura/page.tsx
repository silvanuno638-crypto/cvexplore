export default function CulturaPage() {
  const frases = [
    { cv: "Modi ki bu sta?", pt: "Como estás?" },
    { cv: "Mantenha", pt: "mandar cumprimento" },
    { cv: "obrigad", pt: "Obrigado" },
    { cv: "Tudu dretu", pt: "Tudo bem" },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-12">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-blue-800">Cultura e Tradição</h1>
        <p className="text-gray-600 mt-2">Descubra a alma das ilhas através da música, língua e sabores.</p>
      </header>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Dicionário de Crioulo */}
        <section className="bg-blue-50 p-6 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            🗣️ Dicionário de bolso
          </h2>
          <div className="space-y-4">
            {frases.map((f, i) => (
              <div key={i} className="bg-white p-3 rounded-lg flex justify-between shadow-sm">
                <span className="font-bold text-blue-600">{f.cv}</span>
                <span className="text-gray-500">{f.pt}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Música - Playlist Spotify */}
        <section className="bg-purple-50 p-6 rounded-2xl shadow-sm text-center">
          <h2 className="text-2xl font-semibold mb-4">🎶 Sons das Ilhas</h2>
          <p className="text-sm text-gray-600 mb-4">Deixe-se levar pelo ritmo</p>
           <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Ritmo</h3>
              <p className="text-gray-600">
                <h2>Morna</h2>
                <h2>Funana</h2>
                <h2>Batuque</h2>
                <h2>Tabanca</h2>
                <h2>Coladeira</h2>
              </p>
            </div>
        </section>
      </div>

      {/* Gastronomia */}
      <section className="bg-orange-50 p-8 rounded-2xl">
        <h2 className="text-2xl font-semibold mb-6">🥘 Sabores Típicos</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <span className="text-3xl">🍲</span>
            <h3 className="font-bold mt-2">Cachupa</h3>
            <p className="text-sm text-gray-500">O prato nacional, rico e reconfortante.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <span className="text-3xl">🦐</span>
            <h3 className="font-bold mt-2">Lagostada</h3>
            <p className="text-sm text-gray-500">Marisco fresco vindo direto do Atlântico.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <span className="text-3xl">🍮</span>
            <h3 className="font-bold mt-2">Pudim de Leite</h3>
            <p className="text-sm text-gray-400 font-light">Especialmente o de queijo da Ilha do Fogo.</p>
          </div>
        </div>
      </section>
    </div>
  );
}