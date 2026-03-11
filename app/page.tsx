export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section com Degradê Suave */}
      <section className="bg-gradient-to-b from-blue-700 to-blue-500 text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black mb-4 drop-shadow-md">Cabo Verde</h1>
          <p className="text-xl md:text-2xl font-light opacity-90 italic">"No Stress" e muita Morabeza</p>
        </div>
      </section>

      {/* História e Identidade */}
      <section className="max-w-5xl mx-auto py-20 px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <img 
              src="https://th.bing.com/th/id/R.42120d0510566adf03cb11f07dd7d019?rik=unCsH%2bd95P84rg&riu=http%3a%2f%2fwww.africa-turismo.com%2fcabo-verde%2fimagens%2fhistoria.jpg&ehk=3SW8yN45iKezkvmvIxWpqBnXv1MEq6y8DTE8UTNIwPE%3d&risl=&pid=ImgRaw&r=0" 
              alt="Cultura Cabo-verdiana" 
              className="rounded-3xl shadow-2xl relative z-10 border-8 border-white"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Nossa História</h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                A história de Cabo Verde começa no <strong>século XV</strong>, quando as ilhas foram descobertas por navegadores portugueses em <strong>1460</strong>.
              </p>
              <p>
                O povoamento iniciou-se em <strong>1462</strong>, com a ilha de Santiago sendo a primeira a ser habitada. A história do arquipélago inclui a abolição da escravatura em <strong>1869</strong> e culmina com a conquista da independência em <strong>1975</strong>.
              </p>
            </div>
            
            <div className="mt-8 flex gap-4">
              <div className="flex flex-col items-center p-4 bg-blue-50 rounded-2xl w-32">
                <img className="h-12 w-12 object-cover rounded-lg" src="https://deb975968b.clvaw-cdnwnd.com/1909754c571d3df8a8c5ffaf300927e6/200000014-3a4673a469/Cabo%20verde%20location.jpeg?ph=deb975968b" alt="Mapa" />
                <span className="text-xs font-bold text-blue-800 mt-2 text-center">Localização</span>
              </div>
            
              <div className="flex flex-col items-center p-4 bg-blue-50 rounded-2xl w-32">
                <img className="h-12 w-12 object-cover rounded-lg" src="https://img.freepik.com/fotos-premium/bandeira-de-cabo-verde-simbolo-de-liberdade-e-identidade-renderizacao-3d-da-bandeira-nacional_767408-1004.jpg" alt="Bandeira" />
                <span className="text-xs font-bold text-blue-800 mt-2 text-center">Bandeira</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultura - Curiosidades uma abaixo da outra */}
      <section className="bg-yellow-400 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-black text-blue-900 mb-12 text-center">Curiosidades sobre Cabo Verde</h2>
          
          <div className="flex flex-col gap-8">
            {/* Card 1 - Carnaval */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-blue-800 mb-4 border-b-2 border-yellow-400 pb-2 inline-block">
                Carnaval de São Vicente
              </h3>
              <div className="text-gray-700 space-y-4 leading-relaxed">
                <p>O Carnaval de São Vicente é a maior festa cultural da ilha, combinando desfiles oficiais e tradições únicas. Em <strong>2026</strong>, a programação promete ser intensa entre 13 a 18 de fevereiro.</p>
                <p><strong>Destaques:</strong> Grupos como Cruzeiros do Norte e Flores do Mindelo transformam a Rua de Lisboa num espetáculo de cor, enquanto os tradicionais <em>Mandingas</em> mantêm viva a raiz popular com suas pinturas corporais e ritmos tribais.</p>
                <p className="text-sm italic text-gray-500">Fonte: www.rtc.cv</p>
              </div>
            </div>

            {/* Card 2 - Outras Curiosidades */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-blue-800 mb-4 border-b-2 border-yellow-400 pb-2 inline-block">
                Cultura e Natureza
              </h3>
              <div className="text-gray-700 space-y-6 leading-relaxed">
                <div>
                  <p><strong>A Alma da Música:</strong> A <em>Morna</em>, patrimônio da UNESCO, reflete a melancolia e a alma do povo, eternizada pela voz de Cesária Évora.</p>
                </div>
                <div>
                  <p><strong>Ilha do Fogo:</strong> Abriga o ponto mais alto do país, um vulcão ativo a 2.829 metros de altitude, oferecendo uma das paisagens mais dramáticas do Atlântico.</p>
                </div>
                <div>
                  <p><strong>Cidade Velha:</strong> Localizada em Santiago, foi a primeira cidade construída por europeus nos trópicos e é hoje um Patrimônio Mundial da UNESCO.</p>
                </div>
                <div>
                  <p><strong>Gastronomia:</strong> A <em>Cachupa</em> é o prato nacional por excelência, um guisado rico que sustenta a energia e a tradição das famílias cabo-verdianas.</p>
                </div>
                <div>
                  <p><strong>Língua:</strong> Embora o Português seja oficial, o <em>Kriolu</em> (Crioulo Cabo-verdiano) é a língua do coração, com variantes musicais em cada ilha.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}