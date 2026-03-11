export default function IlhasCaboVerde() {
  const ilhas = [
  
  // Barlavento
  { nome: "Santo Antão", desc: "Montanhas verdes e trilhas profundas. O paraíso do trekking.", img: "https://i.pinimg.com/originals/45/14/b7/4514b7c039ebc2da3ac687ae0bd5df4c.jpg" },
  { nome: "São Vicente", desc: "Capital cultural (Mindelo). Música, noite e o Carnaval.", img: "https://tse2.mm.bing.net/th/id/OIP.-uqluLiq07xesGzXS3GgxQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3" },
  { nome: "Santa Luzia", desc: "Reserva natural desabitada. Beleza selvagem e pura.", img: "https://www.capeverdeislands.org/wp-content/uploads/2020/02/santa-luzia.jpg" },
  { nome: "São Nicolau", desc: "Paisagens rústicas e tradições preservadas.", img: "https://www.capeverde.com/wp-content/uploads/2023/02/sao-nicolau-mountain-landscape-768x509.webp" },
  { nome: "Sal", desc: "Praias de areia branca e salinas. O destino mais turístico.", img: "https://admin.tcv.made2web.dev/uploads/5_praia_de_santa_maria_ilha_do_sal_cabo_verde_9fe418051d.jpg" },
  { nome: "Boa Vista", desc: "Dunas do deserto e praias desertas. Famosa pelas tartarugas.", img: "https://www.boavistaofficial.com/boa-vista-cabo-verde/wp-content/uploads/2016/11/DJI_0055.jpg" },

  // Sotavento
  { nome: "Maio", desc: "Tranquilidade absoluta, praias virgens e paz total.", img: "https://www.capeverde.com/wp-content/uploads/2023/02/maio-lonely-beaches.webp" },
  { nome: "Santiago", desc: "A maior ilha e capital (Praia). História e mercados vibrantes.", img: "https://c8.alamy.com/comp/CETBAH/panorama-of-cidade-velha-santiago-cape-verde-islands-africa-unesco-CETBAH.jpg" },
  { nome: "Fogo", desc: "Dominada pelo vulcão ativo. Famosa pelo vinho e café.", img: "https://admin.tcv.made2web.dev/uploads/outras_atracoes_ilha_fogo_cabo_verde_647e0c60ec.jpg" },
  { nome: "Brava", desc: "A ilha das flores. Pequena, úmida e romântica.", img: "https://admin.visit-caboverde.com/uploads/ilha_da_brava_cabo_verde_2_1db86c39e4.jpg" }

  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {ilhas.map((ilha) => (
        <div key={ilha.nome} className="bg-white rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
          <img src={ilha.img} alt={ilha.nome} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-bold text-blue-900">{ilha.nome}</h3>
            <p className="text-gray-600 mt-2 text-sm leading-relaxed">{ilha.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}