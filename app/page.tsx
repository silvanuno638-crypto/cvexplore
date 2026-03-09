export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section com Degradê Suave */}
      <section className="bg-gradient-to-b from-blue-700 to-blue-500 text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Bandeira Estilizada */}
          
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
                O povoamento iniciou-se em<strong>1462</strong>, com a ilha de Santiago sendo a primeira a ser habitada. A história do arquipélago inclui a abolição da escravatura em <strong>1869</strong> e culmina com a conquista da independência em <strong>1975</strong>, moldando a identidade cultural do país. Cabo Verde é um exemplo de como a colonização e a luta pela independência influenciaram sua trajetória histórica.
              </p>
            </div>
            
            <div className="mt-8 flex gap-4">
              <div className="flex flex-col items-center p-4 bg-blue-50 rounded-2xl">
                <span className="text-2xl"><img src="https://deb975968b.clvaw-cdnwnd.com/1909754c571d3df8a8c5ffaf300927e6/200000014-3a4673a469/Cabo%20verde%20location.jpeg?ph=deb975968b"></img></span>
                <span className="text-xs font-bold text-blue-800 mt-1">Localização</span>
              </div>
            
              <div className="flex flex-col items-center p-4 bg-blue-50 rounded-2xl">
                <span className="text-2xl"><img src="https://img.freepik.com/fotos-premium/bandeira-de-cabo-verde-simbolo-de-liberdade-e-identidade-renderizacao-3d-da-bandeira-nacional_767408-1004.jpg"></img></span>
                <span className="text-xs font-bold text-blue-800 mt-1">Bandeira</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultura - Banner Colorido */}
      <section className="bg-yellow-400 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-blue-900 mb-12">Cultura e Tradição</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Gastronomia</h3>
              <p className="text-gray-600">A Cachupa é o nosso prato nacional. Uma mistura rica de milho, feijão e carnes.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Língua</h3>
              <p className="text-gray-600">O Crioulo é a nossa língua materna, doce e musical, falada em todas as ilhas.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Ritmo</h3>
              <p className="text-gray-600">Da Morna melancólica ao Funaná energético, a música é a nossa alma.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}