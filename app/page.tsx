'use client';
import { useState } from 'react';

export default function Home() {
  const [showBandeira, setShowBandeira] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-700 to-blue-500 text-white py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black mb-4 drop-shadow-2xl italic uppercase tracking-tighter">Cabo Verde</h1>
          <p className="text-xl md:text-2xl font-light opacity-90 italic">"No Stress" e muita Morabeza</p>
        </div>
      </section>

      {/* História e Identidade */}
      <section className="max-w-5xl mx-auto py-20 px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
            <img 
              src="https://th.bing.com/th/id/R.42120d0510566adf03cb11f07dd7d019?rik=unCsH%2bd95P84rg&riu=http%3a%2f%2fwww.africa-turismo.com%2fcabo-verde%2fimagens%2fhistoria.jpg&ehk=3SW8yN45iKezkvmvIxWpqBnXv1MEq6y8DTE8UTNIwPE%3d&risl=&pid=ImgRaw&r=0" 
              alt="Cultura Cabo-verdiana" 
              className="rounded-3xl shadow-2xl relative z-10 border-8 border-white transform group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-6 border-l-4 border-yellow-400 pl-4 uppercase tracking-widest text-balance">Nossa História & Identidade</h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>A história de Cabo Verde começa no <strong>século XV</strong>, descoberto em <strong>1460</strong>.</p>
              <p>O povoamento iniciou-se em <strong>1462</strong>, florescendo numa cultura única que conquistou a independência em <strong>1975</strong>.</p>
            </div>
            
            <div className="mt-10 flex gap-6">
              <a 
                href="https://www.google.com/maps/place/Cabo+Verde/@16.0274712,-25.960205,7z" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center p-4 bg-blue-50 rounded-2xl w-32 hover:bg-blue-600 group transition-all duration-300 shadow-md hover:-translate-y-2"
              >
                <img className="h-12 w-12 object-cover rounded-lg group-hover:brightness-110" src="https://deb975968b.clvaw-cdnwnd.com/1909754c571d3df8a8c5ffaf300927e6/200000014-3a4673a469/Cabo%20verde%20location.jpeg?ph=deb975968b" alt="Mapa" />
                <span className="text-[10px] font-black text-blue-800 mt-2 group-hover:text-white uppercase tracking-tighter">Localização</span>
              </a>
            
              <button 
                onClick={() => setShowBandeira(true)}
                className="flex flex-col items-center p-4 bg-blue-50 rounded-2xl w-32 hover:bg-yellow-400 group transition-all duration-300 shadow-md hover:-translate-y-2"
              >
                <img className="h-12 w-12 object-cover rounded-lg" src="https://img.freepik.com/fotos-premium/bandeira-de-cabo-verde-simbolo-de-liberdade-e-identidade-renderizacao-3d-da-bandeira-nacional_767408-1004.jpg" alt="Bandeira" />
                <span className="text-[10px] font-black text-blue-800 mt-2 group-hover:text-blue-900 uppercase tracking-tighter">A Bandeira</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL DA BANDEIRA */}
      {showBandeira && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-blue-900/90 backdrop-blur-md animate-in fade-in duration-300">
          <style>{`
            @keyframes flagWaving {
              0% { transform: perspective(1000px) rotateY(0deg) skewY(0deg); }
              25% { transform: perspective(1000px) rotateY(5deg) skewY(1deg); }
              50% { transform: perspective(1000px) rotateY(0deg) skewY(-1deg); }
              75% { transform: perspective(1000px) rotateY(-5deg) skewY(1deg); }
              100% { transform: perspective(1000px) rotateY(0deg) skewY(0deg); }
            }
            .animate-wind {
              animation: flagWaving 4s ease-in-out infinite;
              transform-style: preserve-3d;
            }
          `}</style>
          
          <div className="bg-white rounded-[40px] max-w-4xl w-full overflow-hidden shadow-2xl relative flex flex-col md:flex-row border-4 border-white">
            <button 
              onClick={() => setShowBandeira(false)} 
              className="absolute top-6 right-6 z-20 bg-gray-100 hover:bg-red-500 hover:text-white w-10 h-10 rounded-full transition-all font-bold flex items-center justify-center shadow-lg"
            >✕</button>

            <div className="md:w-1/2 bg-blue-600 p-12 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wave-cut.png')]"></div>
              <div className="animate-wind relative z-10">
                <img 
                  src="https://img.freepik.com/fotos-premium/bandeira-de-cabo-verde-simbolo-de-liberdade-e-identidade-renderizacao-3d-da-bandeira-nacional_767408-1004.jpg" 
                  className="w-full shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] rounded-sm border-l-8 border-blue-900"
                  alt="Bandeira ao Vento"
                />
              </div>
            </div>

            <div className="md:w-1/2 p-10 bg-white">
              <h2 className="text-3xl font-black text-blue-900 mb-6 flex items-center gap-2 uppercase italic tracking-tighter">
                Simbologia <span className="text-yellow-500 text-sm font-normal">Nacional</span>
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 rounded-2xl hover:bg-blue-50 border border-transparent hover:border-blue-100">
                  <div className="w-4 h-4 rounded-full bg-blue-600 shrink-0"></div>
                  <p className="text-gray-700 text-sm"><span className="font-bold">AZUL:</span> O mar infinito e o céu que nos une.</p>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-2xl hover:bg-gray-50 border border-transparent hover:border-gray-100">
                  <div className="w-4 h-4 rounded-full bg-white border shrink-0"></div>
                  <p className="text-gray-700 text-sm"><span className="font-bold">BRANCO:</span> A paz e a esperança do nosso povo.</p>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-2xl hover:bg-red-50 border border-transparent hover:border-red-100">
                  <div className="w-4 h-4 rounded-full bg-red-600 shrink-0"></div>
                  <p className="text-gray-700 text-sm"><span className="font-bold">VERMELHO:</span> O esforço e o trabalho árduo.</p>
                </div>
                <div className="p-6 bg-blue-900 rounded-[2rem] text-white mt-6 shadow-xl relative overflow-hidden">
                  <p className="text-xs leading-relaxed font-medium">
                    As <span className="text-yellow-400 font-black">10 ESTRELAS</span> representam as dez ilhas do arquipélago, unidas em círculo simbolizando a união da nação.
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setShowBandeira(false)}
                className="mt-8 w-full py-4 bg-yellow-400 text-blue-900 font-black rounded-2xl hover:bg-yellow-500 transition-all uppercase text-xs tracking-[0.2em]"
              >
                Concluir Leitura
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Secção Sabias que? */}
      <section className="bg-yellow-400 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-black text-blue-900 mb-16 text-center uppercase tracking-tighter">Sabias que?</h2>
          <div className="flex flex-col gap-10">
            {/* Card Carnaval */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl transform hover:-translate-y-1 transition-transform border-b-8 border-blue-600">
              <h3 className="text-2xl font-bold text-blue-800 mb-4 border-b-4 border-yellow-400 pb-2 inline-block uppercase italic">Carnaval de São Vicente</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">O Carnaval de São Vicente é a maior festa cultural da ilha, combinando desfiles oficiais, grupos espontâneos, bailes populares e tradições como os mandingas, com programação intensa de <strong>13 a 18 de fevereiro.</strong></p>
              <p className="text-xs font-bold text-blue-300 uppercase tracking-widest">Fonte: www.rtc.cv</p>
            </div>

            {/* Card Lista */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl">
              <h3 className="text-2xl font-bold text-blue-800 mb-8 border-b-4 border-yellow-400 pb-2 inline-block uppercase italic">Cultura e Natureza Viva</h3>
              <div className="grid gap-8">
                {[
                  { t: "A Alma da Música", d: "A Morna, património da UNESCO, eternizada por Cesária Évora." },
                  { t: "Ilha do Fogo", d: "Vulcão ativo a 2.829 metros de altitude com paisagens dramáticas." },
                  { t: "Cidade Velha", d: "Primeira cidade construída por europeus nos trópicos, património UNESCO." },
                  { t: "Gastronomia", d: "A Cachupa é o prato nacional, um guisado rico que une as famílias." },
                  { t: "Língua", d: "O Kriolu é a língua do coração e da nossa identidade musical." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start border-l-4 border-blue-50 pl-6 hover:border-yellow-400 transition-all group">
                    <span className="text-3xl font-black text-blue-100 italic group-hover:text-yellow-400 transition-colors">0{i + 1}</span>
                    <div>
                      <h4 className="font-bold text-blue-900 uppercase text-sm tracking-tighter">{item.t}</h4>
                      <p className="text-gray-600 text-base leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}