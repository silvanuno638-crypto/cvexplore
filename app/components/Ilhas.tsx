'use client';
import { useState } from 'react';

type Ilha = {
  nome: string;
  desc: string;
  img: string;
};

export default function IlhasCaboVerde() {
  const [showIlhaModal, setShowIlhaModal] = useState(false);
  const [ilhaSelecionada, setIlhaSelecionada] = useState<Ilha | null>(null);

  const ilhas: Ilha[] = [
    {
      nome: "Santo Antão",
      desc: "Descoberta no século XV pelos navegadores portugueses, Santo Antão tornou-se uma das ilhas agrícolas mais importantes de Cabo Verde.",
      img: "https://i.pinimg.com/originals/45/14/b7/4514b7c039ebc2da3ac687ae0bd5df4c.jpg"
    },
    {
      nome: "São Vicente",
      desc: "Inicialmente desabitada, São Vicente cresceu no século XIX com o porto de Mindelo, tornando-se centro cultural de Cabo Verde.",
      img: "https://tse2.mm.bing.net/th/id/OIP.-uqluLiq07xesGzXS3GgxQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      nome: "Santa Luzia",
      desc: "Descoberta no século XV, nunca teve população permanente devido à falta de água. Hoje é reserva natural.",
      img: "https://www.capeverdeislands.org/wp-content/uploads/2020/02/santa-luzia.jpg"
    },
    {
      nome: "São Nicolau",
      desc: "Durante séculos foi um centro cultural e educacional importante em Cabo Verde.",
      img: "https://www.capeverde.com/wp-content/uploads/2023/02/sao-nicolau-mountain-landscape-768x509.webp"
    },
    {
      nome: "Sal",
      desc: "Recebeu o nome devido às suas salinas exploradas desde o século XIX.",
      img: "https://admin.tcv.made2web.dev/uploads/5_praia_de_santa_maria_ilha_do_sal_cabo_verde_9fe418051d.jpg"
    },
    {
      nome: "Boa Vista",
      desc: "Conhecida pelas dunas e praias extensas onde as tartarugas marinhas desovam.",
      img: "https://www.boavistaofficial.com/boa-vista-cabo-verde/wp-content/uploads/2016/11/DJI_0055.jpg"
    },
    {
      nome: "Maio",
      desc: "Importante na produção de sal durante o período colonial.",
      img: "https://www.capeverde.com/wp-content/uploads/2023/02/maio-lonely-beaches.webp"
    },
    {
      nome: "Santiago",
      desc: "A maior ilha de Cabo Verde e primeiro local colonizado pelos portugueses.",
      img: "https://c8.alamy.com/comp/CETBAH/panorama-of-cidade-velha-santiago-cape-verde-islands-africa-unesco-CETBAH.jpg"
    },
    {
      nome: "Fogo",
      desc: "Dominada pelo vulcão Pico do Fogo, famosa pelo vinho cultivado em solo vulcânico.",
      img: "https://admin.tcv.made2web.dev/uploads/outras_atracoes_ilha_fogo_cabo_verde_647e0c60ec.jpg"
    },
    {
      nome: "Brava",
      desc: "Conhecida como a ilha das flores devido ao seu clima mais húmido.",
      img: "https://admin.visit-caboverde.com/uploads/ilha_da_brava_cabo_verde_2_1db86c39e4.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-blue-900 uppercase italic tracking-tighter">
            Nossas Ilhas 🇨🇻
          </h2>
          <p className="text-gray-500 mt-2 italic font-light text-xl">
            Cada uma com a sua história única
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ilhas.map((ilha) => (
            <div
              key={ilha.nome}
              onClick={() => {
                setIlhaSelecionada(ilha);
                setShowIlhaModal(true);
              }}
              className="group cursor-pointer bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-4 border-white hover:border-yellow-400 hover:-translate-y-3 hover:rotate-[0.5deg]"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={ilha.img}
                  alt={ilha.nome}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black text-blue-900 flex items-center justify-between">
                  {ilha.nome}
                  <span className="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    Ler História
                  </span>
                </h3>
                <p className="text-gray-600 mt-3 text-base leading-relaxed line-clamp-2 italic">
                  {ilha.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {showIlhaModal && ilhaSelecionada && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-blue-900/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-white rounded-[3rem] max-w-4xl w-full overflow-hidden shadow-2xl relative border-4 border-white animate-modalZoom">
            <button
              onClick={() => setShowIlhaModal(false)}
              className="absolute top-6 right-6 z-20 bg-gray-100 hover:bg-red-500 hover:text-white w-10 h-10 rounded-full transition-all font-bold flex items-center justify-center shadow-lg"
            >
              ✕
            </button>

            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 h-80 md:h-auto">
                <img
                  src={ilhaSelecionada.img}
                  alt={ilhaSelecionada.nome}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-12 flex flex-col justify-center">
                <span className="text-blue-600 font-black text-sm uppercase tracking-[0.3em] mb-2">
                  Cabo Verde
                </span>
                <h3 className="text-4xl font-black text-blue-900 uppercase italic tracking-tighter mb-6">
                  {ilhaSelecionada.nome}
                </h3>
                <div className="w-16 h-1 bg-yellow-400 mb-8"></div>
                <p className="text-gray-700 leading-relaxed text-lg italic">
                  {ilhaSelecionada.desc}
                </p>
                <button
                  onClick={() => setShowIlhaModal(false)}
                  className="mt-10 px-10 py-4 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 transition-all shadow-xl uppercase text-xs tracking-widest"
                >
                  Voltar ao Arquipélago
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ONDA ANIMADA */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-[200%] h-[140px] animate-wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,176C672,160,768,160,864,170.7C960,181,1056,203,1152,202.7C1248,203,1344,181,1392,170.7L1440,160L1440,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
}