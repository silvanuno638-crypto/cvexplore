export default function CulturaPage() {
  const frases = [
    { cv: "Modi ki bu sta?", pt: "Como estás?" },
    { cv: "Mantenha", pt: "Mandar cumprimento" },
    { cv: "Obrigad", pt: "Obrigado" },
    { cv: "Tudu dretu", pt: "Tudo bem" },
    { cv: "N ta gosta di bo", pt: "Eu gosto de você" },
    { cv: "Bo ta dretu", pt: "Você está certo" },
  ];

  const ritmos = [
    { 
      nome: "Morna", 
      emoji: "🎻", 
      descricao: "Balada tradicional e sentimental de Cabo Verde.",
      img: "https://feelportugal.com/wp-content/uploads/2019/11/74475157_160776321684132_7918335550971445248_n.jpg"
    },
    { 
      nome: "Funana", 
      emoji: "🪕", 
      descricao: "Ritmo rápido e energético, típico de Santiago.",
      img: "data:image/webp;base64,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"
    },
    { 
      nome: "Batuque", 
      emoji: "🥁", 
      descricao: "Dança e música percussiva com raízes africanas.",
      img: "https://images.trustinnews.pt/uploads/sites/5/2021/07/33921458-960x640.jpg"
    },
    { 
      nome: "Tabanca", 
      emoji: "🎷", 
      descricao: "Música folclórica vibrante com influências europeias.",
      img: "https://www.caboverdeamusica.online/wp-content/uploads/2022/06/tabanka-Charles-Aki-lem-cabral-e1654552907489.jpg"
    },
    { 
      nome: "Coladeira", 
      emoji: "🎸", 
      descricao: "Ritmo alegre e dançante, muito popular nas festas.",
      img: "https://i.pinimg.com/736x/bb/f2/27/bbf227d7b36482e86296924234c8a0df.jpg"
    },
  ];

  const gastronomia = [
    {
      nome: "Cachupa",
      emoji: "🍲",
      descricao: "Prato nacional, rico e reconfortante, mistura de milho, feijão e carnes.",
      img: "https://blog.remitly.com/wp-content/uploads/2023/09/cape-verde-cachupa-scaled.jpg"
    },
    {
      nome: "Lagostada",
      emoji: "🦐",
      descricao: "Marisco fresco do Atlântico, muito apreciado nas ilhas costeiras.",
      img: "https://admin.visit-caboverde.com/uploads/gastronomia_de_cabo_verde_pratos_tipicos_4_45a5781884.png"
    },
    {
      nome: "Pudim de Leite",
      emoji: "🍮",
      descricao: "Doce tradicional, especialmente feito com queijo da Ilha do Fogo.",
      img: "https://i.pinimg.com/736x/5f/87/cc/5f87cca196203799b5481660211561c1.jpg"
    },
    {
      nome: "Grogue",
      emoji: "🥃",
      descricao: "Bebida alcoólica tradicional feita da destilação da cana-de-açúcar, símbolo cultural de Cabo Verde.",
      img: "https://salcaboverde.com/wp-content/uploads/2012/04/Grogue-Sal-Cape-Verde.jpg"
    },
    {
      nome: "Caldo de Peixe",
      emoji: "🍲",
      descricao: "Sopa quente e saborosa feita com peixe fresco, legumes e temperos típicos.",
      img: "https://tse1.mm.bing.net/th/id/OIP.UGLzQGw7xkDXW7VlQ6YA-AHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      nome: "Pastel de Peixe",
      emoji: "🥟",
      descricao: "Salgado frito recheado com peixe temperado, muito apreciado nas ruas e festas.",
      img: "https://th.bing.com/th/id/R.0732f5ff8dc36e2f10c205aabc9ba337?rik=0trCIZzvUG%2fRQQ&pid=ImgRaw&r=0"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-8 space-y-16 font-sans">
      <header className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-extrabold text-blue-900 mb-3">Cultura e Tradição de Cabo Verde</h1>
        <p className="text-xl text-gray-700 italic">
          Descubra a alma das ilhas através da música, língua, sabores e história que unem o povo cabo-verdiano.
        </p>
      </header>

      {/* História Cultural */}
      <section className="bg-blue-50 p-8 rounded-3xl shadow-lg max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 border-b-4 border-yellow-400 inline-block pb-1">
          🏝️ História e Tradições
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          A cultura de Cabo Verde é um mosaico vibrante de influências africanas, portuguesas e indígenas. Cada ilha traz sua própria herança, expressa nas músicas que emocionam, na língua crioula falada com orgulho, e nos pratos que contam histórias de resistência e celebração.
          Festas tradicionais como a <strong>Festa de São João</strong> e o <strong>Festival de Baía das Gatas</strong> são momentos de união e alegria, onde danças e ritmos ancestrais ganham vida.
        </p>
      </section>

      {/* Dicionário de Crioulo */}
      <section className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 border-b-4 border-yellow-400 inline-block pb-1 flex items-center gap-2">
          🗣️ Dicionário de Bolso
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {frases.map((f, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-4 border-2 border-blue-200 rounded-xl hover:shadow-lg transition-shadow bg-gradient-to-r from-blue-50 to-white cursor-default select-none"
              title={`Tradução: ${f.pt}`}
            >
              <span className="text-xl font-extrabold text-blue-700">{f.cv}</span>
              <span className="text-gray-500 italic">{f.pt}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Música com imagens */}
      <section className="max-w-5xl mx-auto bg-purple-50 rounded-3xl shadow-lg p-8 text-center">
        <h2 className="text-3xl font-bold text-purple-800 mb-6 border-b-4 border-yellow-400 inline-block pb-1 flex justify-center items-center gap-3">
          🎶 Sons das Ilhas
        </h2>
        <p className="mb-8 text-gray-700 max-w-2xl mx-auto italic">
          Deixe-se levar pelo ritmo e diversidade musical que fazem a identidade de Cabo Verde tão especial.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {ritmos.map((r, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
              title={r.descricao}
            >
              {/* Imagem do ritmo */}
              {r.img && (
                <img 
                  src={r.img} 
                  alt={r.nome} 
                  className="w-full h-32 object-cover rounded-t-2xl mb-3 shadow-md"
                  loading="lazy"
                />
              )}
              <span className="text-5xl mb-2">{r.emoji}</span>
              <h3 className="text-xl font-bold text-purple-700">{r.nome}</h3>
              <p className="text-gray-600 mt-2 text-center text-sm p-3">{r.descricao}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gastronomia */}
      <section className="max-w-6xl mx-auto bg-orange-50 rounded-3xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-orange-800 mb-6 border-b-4 border-yellow-400 inline-block pb-1 flex items-center gap-3">
          🥘 Sabores Típicos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {gastronomia.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow cursor-default"
            >
              <img
                src={item.img}
                alt={item.nome}
                className="w-40 h-28 rounded-2xl object-cover mb-5 shadow-md"
                loading="lazy"
              />
              <span className="text-5xl mb-2">{item.emoji}</span>
              <h3 className="font-extrabold text-xl text-orange-700">{item.nome}</h3>
              <p className="text-gray-600 text-center mt-2 text-sm">{item.descricao}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Rodapé */}
      <footer className="text-center text-gray-400 text-sm mt-20 mb-10">
        © 2026 Cabo Verde Cultura | Desenvolvido com ❤️ por você
      </footer>
    </div>
  );
}