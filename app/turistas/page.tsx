'use client';
import { useState } from 'react';

interface Ponto {
  nome: string;
  desc: string;
  img: string;
}

export default function PontosTuristicosPage() {
  const [showModal, setShowModal] = useState(false);
  const [pontoSelecionado, setPontoSelecionado] = useState<Ponto | null>(null);

  const pontos: Ponto[] = [
    {
      nome: "Cidade Velha",
      desc: "Primeira cidade colonial de Cabo Verde e Patrimônio Mundial da UNESCO, famosa por sua história e arquitetura.",
      img: "https://c8.alamy.com/comp/CETBAH/panorama-of-cidade-velha-santiago-cape-verde-islands-africa-unesco-CETBAH.jpg"
    },
    {
      nome: "Monte Verde",
      desc: "O ponto mais alto de São Vicente, oferecendo vistas panorâmicas espetaculares da ilha.",
      img: "https://thumbs.dreamstime.com/b/monte-verde-sao-vicente-cape-verde-islands-7525824.jpg"
    },
    {
      nome: "Praia de Santa Maria",
      desc: "Praia paradisíaca de águas cristalinas localizada na ilha do Sal, ideal para relaxar e esportes aquáticos.",
      img: "https://admin.tcv.made2web.dev/uploads/5_praia_de_santa_maria_ilha_do_sal_cabo_verde_9fe418051d.jpg"
    },
    {
      nome: "Parque Natural do Fogo",
      desc: "Área protegida em torno do vulcão Pico do Fogo, com trilhas incríveis e paisagens vulcânicas únicas.",
      img: "https://admin.tcv.made2web.dev/uploads/outras_atracoes_ilha_fogo_cabo_verde_647e0c60ec.jpg"
    },
    {
      nome: "Buracona (Olho Azul)",
      desc: "Buracona, mais conhecida como “Blue Eye” ou “Olho Azul”, é uma joia natural localizada na ilha do Sal, em Cabo Verde. Este maravilhoso local está situado numa zona remota do noroeste da ilha, aninhado entre rochas vulcânicas que pairam sobre o oceano, oferecendo uma piscina natural única onde as cores se misturam num espectáculo visual que encanta qualquer visitante. O Olho Azul é uma cavidade subaquática que, iluminada pelos raios solares, revela tons mágicos de azul e turquesa, tornando a água cristalina e criando um extraordinário efeito visual que lembra a íris de um olho.",
      img: "https://destinoseviagens.com/wp-content/uploads/2016/08/olho-azul.png"
    },
    {
      nome: "Praia de Chaves",
      desc: "Praia extensa de areia dourada na ilha da Boa Vista, perfeita para caminhadas e relaxamento.",
      img: "https://thumbs.dreamstime.com/b/spiaggia-praia-de-chaves-di-chaves-boavista-capo-verde-cabo-verd-48112869.jpg"
    },
    {
      nome: "Vale do Paul",
      desc: "Vale fértil em Santo Antão, rodeado por montanhas e plantações, ideal para trilhas e turismo rural.",
      img: "https://www.almadeviajante.com/wp-content/uploads/trilho-vale-do-paul-santo-antao-1536x1024.jpg"
    },
    {
      nome: "Baía das Gatas",
      desc: "Local famoso pelo festival anual de música e pelas águas calmas, ideal para banho e eventos culturais.",
      img: "https://www.anacao.cv/wp-content/uploads/2022/05/Baia-das-gatas-2022-1000x600.jpg"
    },
    {
      nome: "Ribeira Grande",
      desc: "Cidade histórica em Santo Antão, conhecida por suas paisagens verdes e arquitetura tradicional.",
      img: "https://c8.alamy.com/comp/2WH6TC0/town-ribeira-grande-island-sao-antao-cape-verde-cabo-verde-africa-ribeira-grande-is-the-largest-town-of-the-ribeira-grande-municipality-on-the-2WH6TC0.jpg"
    },
    {
      nome: "Pelourinho de Cidade Velha",
      desc: "É um importante símbolo histórico, construído no período colonial português, e está associado à antiga função administrativa e judicial da cidade, que foi a primeira capital de Cabo Verde.Cidade Velha é atualmente Património Mundial da UNESCO, reconhecida pela sua relevância histórica e cultural.",
      img: "https://farm6.staticflickr.com/5668/23227871045_c9cc1e96f2_b.jpg"
    },
    {
      nome: "Forte de São Filipe",
      desc: "Forte histórico em Cidade Velha, construído no século XVI para proteção da cidade, com vista panorâmica do litoral.",
      img: "https://destinoseviagens.com/wp-content/uploads/2016/08/forte-sao-filipe-santiago-cabo-verde.jpg"
    },
    {
      nome: "Baia dos tubarões",
      desc: "Descubra a encantadora Baía dos Tubarões no Sal, Cabo Verde: um espetáculo de tubarões-limão, águas cristalinas e cultura local numa experiência única!",
      img: "https://www.nationalgeographic.pt/medio/2023/08/27/4_99ece4d0_230827165014_720x405.jpg"
    },
    {
      nome: "Salinas de Pedra de Lume",
      desc: "Aninhado na extensão nordeste da ilha do Sal, em Cabo Verde, encontra-se o local surreal e histórico de Salinas de Pedra de Lume. Este local único revela-se na cratera de um vulcão extinto, 39 metros acima do nível do mar, encapsulado numa área de 40 hectares. Com a sua proximidade a uma enseada abrigada, é uma mistura do passado rústico da ilha com os sussurros tranquilos do oceano. A essência das Salinas de Pedra de Lume está encapsulada nas suas antigas minas de sal, onde a carícia implacável da água do mar contra o coração da cratera se transforma num espetáculo de sal. O cenário é nada menos que surrealista, com as salinas pintando um mosaico de branco e rosa brilhante, contrastando com o cenário contrastante de montanhas de sal brancas como a neve e o azul insondável do céu.",
      img: "https://www.capeverdeislands.org/wp-content/uploads/2018/02/salinas-pedra-de-luma.jpg"
    },
    {
      nome: "Deserto de Viana",
      desc: "O Deserto de Viana é uma das maravilhas naturais da Ilha da Boa Vista, Cabo Verde. Localizado no nordeste da ilha, este deserto é caracterizado por dunas de areia esbranquiçada que contrastam com o azul límpido do céu africano. As dunas são formadas pela força dos ventos alísios do Sahara, que transportam areia do continente africano para a ilha",
      img: "https://tse4.mm.bing.net/th/id/OIP.Hjt4O2L5L6zuUQpGTCnBFAHaE_?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      nome: "Pico da Cruz",
      desc: "Pico da Cruz é um ponto de referência natural localizado na ilha de Santo Antão, em Cabo Verde. É uma das elevações mais conhecidas da ilha, oferecendo vistas panorâmicas sobre vales, montanhas e o oceano Atlântico.",
      img: "https://paulinaontheroad.com/wp-content/uploads/2021/01/xoxo.jpg"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-8 space-y-16 font-sans">
      <header className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-extrabold text-blue-900 mb-3">Pontos Turísticos de Cabo Verde</h1>
        <p className="text-xl text-gray-700 italic">
          Explore os lugares mais emblemáticos das ilhas, entre praias, montanhas e patrimônios históricos.
        </p>
      </header>

      {/* Grid de pontos turísticos */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {pontos.map((ponto, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform"
            onClick={() => { setPontoSelecionado(ponto); setShowModal(true); }}
          >
            <img
              src={ponto.img}
              alt={ponto.nome}
              className="w-full h-56 object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-2">{ponto.nome}</h3>
              <p className="text-gray-600 line-clamp-2">{ponto.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Modal */}
      {showModal && pontoSelecionado && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 bg-gray-200 hover:bg-blue-600 hover:text-white w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors"
            >
              ✕
            </button>

            <img
              src={pontoSelecionado.img}
              alt={pontoSelecionado.nome}
              className="w-full h-64 object-cover"
            />

            <div className="p-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">{pontoSelecionado.nome}</h2>
              <p className="text-gray-700 text-lg leading-relaxed">{pontoSelecionado.desc}</p>
              <button
                onClick={() => setShowModal(false)}
                className="mt-6 px-8 py-3 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}