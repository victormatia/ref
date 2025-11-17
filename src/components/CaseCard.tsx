type TCase = {
  title: string;
  imageUrl: string;
  year: number;
};

export default function CaseCard({ caseData }: { caseData: TCase }) {
  return (
    <div className="group relative h-48 w-96 cursor-pointer overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center grayscale transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0"
        style={{ backgroundImage: `url(${caseData.imageUrl})` }}></div>

      <div className="relative flex h-full w-full items-end p-4">
        <div className="p-2">
          <h3 className="text-xl font-bold text-white">{caseData.title}</h3>
          <span className="text-white">{caseData.year}</span>
        </div>
      </div>
    </div>
  );
}
