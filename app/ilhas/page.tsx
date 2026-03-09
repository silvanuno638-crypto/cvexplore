import IlhasCaboVerde from '../components/Ilhas';

export default function PaginaIlhas() {
  return (
    <main className="py-12 px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900">As 10 Ilhas</h1>
        <p className="text-gray-600 mt-2">Cada ilha, um mundo por descobrir.</p>
      </div>
      <div className="max-w-7xl mx-auto">
        <IlhasCaboVerde />
      </div>
    </main>
  );
}