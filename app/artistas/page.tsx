'use client';

const artistas = [
  {
    nome: "Cesária Évora",
    titulo: "A Diva dos Pés Descalços",
    imagem: "https://ds.static.rtbf.be/article/image/1920x1080/4/b/4/2654d1a3f16bf62d0dc4f91fa3ec9377-1719821759.jpg",
    bio: "Nascida em Mindelo, Cesária foi a maior embaixadora da música cabo-verdiana. Ficou mundialmente conhecida por cantar a Morna descalça, simbolizando a luta contra a pobreza.",
    bibliografia: ["Miss Perfumado (1992)", "Café Atlântico (1999)", "Voz d'Amor (2003)"],
    cor: "border-blue-500"
  },
  {
    nome: "Mayra Andrade",
    titulo: "Voz da Nova Geração",
    imagem: "https://s.rfi.fr/media/display/3b80c53c-115e-11ea-93c0-005056bf7c53/w:980/p:16x9/mayra_andrade.jpg",
    bio: "Representante da música cabo-verdiana moderna, Mayra mistura influências do Jazz, Pop e ritmos tradicionais, criando uma sonoridade tropical e cosmopolita.",
    bibliografia: ["Navega (2006)", "Storia, Storia... (2009)", "Manga (2019)"],
    cor: "border-yellow-500"
  },
  {
    nome: "Lura",
    titulo: "Energia do Funaná e Batuku",
    imagem: "https://th.bing.com/th/id/R.5f79c2577da132539d897a91812b9560?rik=5C7RKluln%2fTrcg&riu=http%3a%2f%2fwww.conexaolusofona.org%2fwp-content%2fuploads%2f2015%2f10%2fcapa_lura.jpg&ehk=ShpnLzDE0g4SRAQyhyLvSmrHp0wjNDB4wsGKgVfsWYs%3d&risl=&pid=ImgRaw&r=0",
    bio: "Cantora e compositora, Lura é famosa pela sua energia em palco. A sua música foca-se nos ritmos mais rápidos e profundos da ilha de Santiago.",
    bibliografia: ["Di Korpu ku Alma (2005)", "M'bem di Fora (2006)", "Herança (2015)"],
    cor: "border-blue-900"
  },
  {
    nome: "Gil Semedo",
    titulo: "O Rei do Pop Cabo-verdiano",
    imagem: "https://cdn.plataformamedia.com/2023/08/15063529/gil-semed.jpeg", 
    bio: "Criador do estilo 'Cabo Love', Gil Semedo é um ícone para a diáspora, fundindo ritmos tradicionais com Pop e R&B.",
    bibliografia: ["Caboswing (1991)", "Nos Lider (1995)"],
    cor: "border-orange-500"
  },
  {
    nome: "Eugenio Tavares",
    titulo: "O Pensador da Música",
    imagem: "https://th.bing.com/th/id/OSK.aTw2EZoJh5haYHI7NPj93QAAAA?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    bio: "Músico, escritor e ex-Ministro da Cultura. É um dos compositores mais prolíficos, estudando profundamente a origem dos ritmos das ilhas.",
    bibliografia: ["Simentera (1995)", "Kreol (2010)"],
    cor: "border-green-600"
  },
  {
    nome: "Tito Paris",
    titulo: "O Mestre da Guitarra",
    imagem: "https://www.caboverdeamusica.online/wp-content/uploads/2021/08/Tito-Paris-%C2%A9Marlene-Nobre.jpg",
    bio: "Nascido em São Vicente, é um dos maiores responsáveis pela divulgação da música cabo-verdiana em Portugal e na Europa.",
    bibliografia: ["Dança Ma Mi Crioula (1994)", "Mim Ê Bô (2017)"],
    cor: "border-red-500"
  },
];

export default function SeccaoArtistas() {
  return (
    <section className="py-20 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-blue-900 mb-4">Vozes da Nossa Terra</h2>
          <p className="text-gray-600 max-w-2xl mx-auto italic">
            "A música de Cabo Verde é o espelho da nossa alma, misturando a saudade da Morna com a alegria do Funaná."
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {artistas.map((artista, index) => (
            <div key={index} className={`bg-white rounded-3xl overflow-hidden shadow-xl border-t-8 ${artista.cor} hover:scale-105 transition-transform duration-300`}>
              {/* Container da Foto */}
              <div className="h-72 overflow-hidden">
                <img 
                  src={artista.imagem} 
                  alt={artista.nome} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Conteúdo */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-1">{artista.nome}</h3>
                <span className="text-sm font-semibold text-yellow-500 uppercase tracking-widest block mb-4">
                  {artista.titulo}
                </span>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {artista.bio}
                </p>

                <div className="space-y-3">
                  <h4 className="text-xs font-black text-gray-400 uppercase tracking-tighter">Discografia Selecionada</h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {artista.bibliografia.map((obra, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs font-medium text-blue-800 bg-blue-50 p-2 rounded-lg">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        {obra}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}