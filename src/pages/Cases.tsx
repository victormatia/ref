import Carrousel from '@/components/Carrousel';

const events = [
  { title: 'Fundação da Empresa', year: 2018, imageUrl: 'https://picsum.photos/800/600?party=1' },
  { title: 'Primeiro Projeto Internacional', year: 2019, imageUrl: 'https://picsum.photos/800/600?party=2' },
  { title: 'Expansão para Novos Mercados', year: 2020, imageUrl: 'https://picsum.photos/800/600?party=3' },
  { title: 'Lançamento da Ref Wedding', year: 2020, imageUrl: 'https://picsum.photos/800/600?party=4' },
  { title: 'Criação da Ref Crew', year: 2021, imageUrl: 'https://picsum.photos/800/600?party=5' },
  { title: 'Parceria com Grandes Estúdios', year: 2021, imageUrl: 'https://picsum.photos/800/600?party=6' },
  { title: 'Primeiro Prêmio em Audiovisual', year: 2022, imageUrl: 'https://picsum.photos/800/600?party=7' },
  { title: 'Expansão da Equipe', year: 2022, imageUrl: 'https://picsum.photos/800/600?party=8' },
  { title: 'Novo Escritório Criativo', year: 2023, imageUrl: 'https://picsum.photos/800/600?party=9' },
  { title: 'Reconhecimento Internacional', year: 2024, imageUrl: 'https://picsum.photos/800/600?party=10' },
];

export default function Cases() {
  return (
    <div id="cases" className="flex flex-col gap-8">
      <h2 className="mt-16 ml-4 text-4xl font-bold text-white md:ml-16 md:text-7xl">Cases</h2>
      <h3 className="ml-4 text-xl font-medium text-zinc-300 md:ml-16">Documentários</h3>
      <Carrousel events={events} reverse={false} />
      <h3 className="ml-4 text-xl font-medium text-zinc-300 md:ml-16">Aftermovies</h3>
      <Carrousel events={events} reverse />
      <h3 className="ml-4 text-xl font-medium text-zinc-300 md:ml-16">Turismo</h3>
      <Carrousel events={events} reverse={false} />
    </div>
  );
}
