import { Mouse } from 'lucide-react';

export default function Home() {
  return (
    <div
      id="home"
      className="relative flex h-screen flex-col justify-center gap-8 overflow-hidden p-4 md:justify-end-safe md:p-16">
      <video
        className="absolute top-0 left-0 z-0 h-screen w-full object-cover"
        src="/videos/bg-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="to absolute inset-0 bg-gradient-to-t from-black from-20% to-black/40"></div>

      <div className="z-10 text-white">
        <h1 className="text-6xl font-bold uppercase max-sm:text-4xl">
          A <span className="text-outline">tela</span> é nossa <br /> janela para o{' '}
          <span className="text-outline">mundo</span>
        </h1>
      </div>
      <div className="z-10 flex animate-pulse gap-2">
        <Mouse size={24} className="text-base text-zinc-500" />
        <p className="text-lg font-normal text-zinc-500">Role para baixo</p>
      </div>
    </div>
  );
}
