import React from 'react';
import { ShieldCheck, Play, ArrowRight, Lock, BookOpen, PhoneCall } from 'lucide-react';
import { sound } from '../utils/audio';

interface LandingPageProps {
  onStartSalon: () => void;
  onStartCuisine: () => void;
  onStartChambre: () => void;
  onStartSalleDeBain: () => void;
  onStartGarage: () => void;
  onStartJardin: () => void;
  onGoToMemo: () => void;
  onGoToEmergency: () => void;
  foundSalonCount: number;
  foundCuisineCount: number;
  foundChambreCount: number;
  foundSalleDeBainCount: number;
  foundGarageCount: number;
  foundJardinCount: number;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  onStartSalon,
  onStartCuisine,
  onStartChambre,
  onStartSalleDeBain,
  onStartGarage,
  onStartJardin,
  onGoToMemo,
  onGoToEmergency,
  foundSalonCount,
  foundCuisineCount,
  foundChambreCount,
  foundSalleDeBainCount,
  foundGarageCount,
  foundJardinCount,
}) => {
  const rooms = [
    {
      id: 'salon',
      title: 'Le Salon',
      subtitle: '8 dangers à démasquer',
      status: 'active' as const,
      icon: '🛋️',
      image: '/public/assets/aistudio/image_5624f257.png',
      description:
        'Escalier encombré de jouets, cheminée sans pare-feu, multiprise au sol, fenêtre ouverte...',
      hazards: ['Chute', 'Brûlure', 'Électrocution', 'Coupure', 'Intoxication'],
      accentColor: 'border-amber-400 bg-amber-50/40 hover:border-amber-500',
      action: onStartSalon,
      foundCount: foundSalonCount,
    },
    {
      id: 'cuisine',
      title: 'La Cuisine',
      subtitle: '8 dangers à démasquer',
      status: 'active' as const,
      icon: '🍳',
      image: '/public/assets/aistudio/image_ef8c4428.png',
      description:
        'Queues de casseroles qui dépassent, fer à repasser branché, appareils électriques près de l’eau et détergents.',
      hazards: ['Brûlure', 'Électrocution', 'Intoxication', 'Coupure', 'Chute'],
      accentColor: 'border-orange-400 bg-orange-50/40 hover:border-orange-500',
      action: onStartCuisine,
      foundCount: foundCuisineCount,
    },
    {
      id: 'chambre',
      title: 'La Chambre',
      subtitle: '8 dangers à démasquer',
      status: 'active' as const,
      icon: '🛏️',
      image: '/public/assets/aistudio/image_89c0b33a.png',
      description:
        'Lit mezzanine en hauteur, fenêtre sur la commode, lampe couverte d’un tissu, sac plastique et étagère surchargée.',
      hazards: ['Chute', 'Défenestration', 'Brûlure', 'Étouffement', 'Coupure'],
      accentColor: 'border-sky-400 bg-sky-50/40 hover:border-sky-500',
      action: onStartChambre,
      foundCount: foundChambreCount,
    },
    {
      id: 'salle_de_bain',
      title: 'La Salle de Bain',
      subtitle: '8 dangers à démasquer',
      status: 'active' as const,
      icon: '🛁',
      image: '/public/assets/aistudio/image_cd21f0d7.png',
      description:
        'Baignoire pleine d’eau, flaque glissante au sol, sèche-cheveux et radiateur près de l’eau, rasoir et médicaments.',
      hazards: ['Noyade', 'Électrocution', 'Brûlure', 'Chute', 'Intoxication', 'Coupure'],
      accentColor: 'border-teal-400 bg-teal-50/40 hover:border-teal-500',
      action: onStartSalleDeBain,
      foundCount: foundSalleDeBainCount,
    },
    {
      id: 'garage',
      title: 'Le Garage',
      subtitle: '8 dangers à démasquer',
      status: 'active' as const,
      icon: '🚗',
      image: '/public/assets/aistudio/image_549324c5.png',
      description:
        'Cisailles et scie suspendues, perceuse branchée, bidon d’essence, chiens qui mangent, escabeau instable et voiture.',
      hazards: ['Coupure', 'Électrocution', 'Intoxication', 'Morsure', 'Écrasement', 'Chute'],
      accentColor: 'border-yellow-500 bg-amber-50/50 hover:border-yellow-600',
      action: onStartGarage,
      foundCount: foundGarageCount,
    },
    {
      id: 'jardin',
      title: 'Le Jardin',
      subtitle: '8 dangers à démasquer',
      status: 'active' as const,
      icon: '🌳',
      image: '/public/assets/aistudio/image_1c9aea3a.png',
      description:
        'Piscine gonflable sans barrière, canette sucrée attirant les guêpes, barbecue chaud, tondeuse, vélo et baies toxiques.',
      hazards: ['Noyade', 'Brûlure', 'Chute', 'Coupure', 'Piqûre', 'Intoxication'],
      accentColor: 'border-emerald-500 bg-emerald-50/50 hover:border-emerald-600',
      action: onStartJardin,
      foundCount: foundJardinCount,
    },
  ];

  return (
    <div className="flex flex-col gap-10 py-2">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-amber-50/70 border border-amber-200 rounded-3xl p-6 sm:p-10 shadow-xs relative overflow-hidden">
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-amber-800 mb-3">
            <span>Cycle 2 · CE1</span>
            <span aria-hidden="true">·</span>
            <span>Prévention des accidents domestiques</span>
            <span aria-hidden="true">·</span>
            <span>6 Missions Détective</span>
          </div>

          <h1 className="font-['Outfit'] font-black text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
            La Maison des Dangers
          </h1>

          <p className="text-base sm:text-lg text-slate-700 mt-4 leading-relaxed font-normal">
            Apprends à repérer les pièges cachés dans chaque pièce de la maison. Clique sur les objets à risque et nomme avec précision le danger grâce au menu déroulant (chute, brûlure, électrocution, coupure, étouffement, défenestration...).
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={() => {
                sound.playClick();
                onStartSalon();
              }}
              className="px-4 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-['Outfit'] font-bold text-sm shadow-sm hover:shadow-md transition-all flex items-center gap-1.5 cursor-pointer active:scale-98"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>1. Le Salon</span>
              <span className="text-xs bg-amber-600 px-1.5 py-0.2 rounded-full font-mono">
                {foundSalonCount}/8
              </span>
            </button>

            <button
              onClick={() => {
                sound.playClick();
                onStartCuisine();
              }}
              className="px-4 py-2.5 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-['Outfit'] font-bold text-sm shadow-sm hover:shadow-md transition-all flex items-center gap-1.5 cursor-pointer active:scale-98"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>2. La Cuisine</span>
              <span className="text-xs bg-orange-700 px-1.5 py-0.2 rounded-full font-mono">
                {foundCuisineCount}/8
              </span>
            </button>

            <button
              onClick={() => {
                sound.playClick();
                onStartChambre();
              }}
              className="px-4 py-2.5 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white font-['Outfit'] font-bold text-sm shadow-sm hover:shadow-md transition-all flex items-center gap-1.5 cursor-pointer active:scale-98"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>3. La Chambre</span>
              <span className="text-xs bg-sky-700 px-1.5 py-0.2 rounded-full font-mono">
                {foundChambreCount}/8
              </span>
            </button>

            <button
              onClick={() => {
                sound.playClick();
                onStartSalleDeBain();
              }}
              className="px-4 py-2.5 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-['Outfit'] font-bold text-sm shadow-sm hover:shadow-md transition-all flex items-center gap-1.5 cursor-pointer active:scale-98"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>4. Salle de Bain</span>
              <span className="text-xs bg-teal-700 px-1.5 py-0.2 rounded-full font-mono">
                {foundSalleDeBainCount}/8
              </span>
            </button>

            <button
              onClick={() => {
                sound.playClick();
                onStartGarage();
              }}
              className="px-4 py-2.5 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-['Outfit'] font-bold text-sm shadow-sm hover:shadow-md transition-all flex items-center gap-1.5 cursor-pointer active:scale-98"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>5. Le Garage</span>
              <span className="text-xs bg-amber-700 px-1.5 py-0.2 rounded-full font-mono">
                {foundGarageCount}/8
              </span>
            </button>

            <button
              onClick={() => {
                sound.playClick();
                onStartJardin();
              }}
              className="px-4 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-['Outfit'] font-bold text-sm shadow-sm hover:shadow-md transition-all flex items-center gap-1.5 cursor-pointer active:scale-98"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>6. Le Jardin</span>
              <span className="text-xs bg-emerald-700 px-1.5 py-0.2 rounded-full font-mono">
                {foundJardinCount}/8
              </span>
            </button>

            <button
              onClick={() => {
                sound.playClick();
                onGoToMemo();
              }}
              className="px-3.5 py-2.5 rounded-2xl bg-white hover:bg-amber-100/60 text-slate-700 font-semibold text-xs border border-slate-200 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5 text-amber-600" />
              <span>Fiche Réflexes</span>
            </button>

            <button
              onClick={() => {
                sound.playClick();
                onGoToEmergency();
              }}
              className="px-3.5 py-2.5 rounded-2xl bg-white hover:bg-rose-50 text-slate-700 font-semibold text-xs border border-slate-200 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5 text-rose-500" />
              <span>Urgences (15, 18, 112)</span>
            </button>
          </div>
        </div>
      </section>

      {/* Grid of the 6 House Rooms */}
      <section className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h2 className="font-['Outfit'] font-bold text-slate-900 text-xl sm:text-2xl">
              Les 6 Pièces de la Maison à Explorer
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              Chaque pièce contient des pièges du quotidien à identifier et à nommer.
            </p>
          </div>
          <span className="text-xs font-mono font-bold bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full border border-emerald-200">
            6 / 6 disponibles
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rooms.map((room) => {
            const isActive = room.status === 'active';

            return (
              <div
                key={room.id}
                className={`rounded-2xl border-2 p-5 flex flex-col justify-between transition-all relative overflow-hidden shadow-2xs ${room.accentColor} ${
                  isActive ? 'ring-2 ring-amber-300 shadow-sm' : ''
                }`}
              >
                <div>
                  {/* Room Thumbnail / Preview */}
                  {isActive && room.image ? (
                    <div className="w-full aspect-16/9 rounded-xl overflow-hidden mb-4 border border-amber-200 shadow-2xs relative bg-slate-900">
                      <img
                        src={room.image}
                        alt={`Aperçu de ${room.title}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-emerald-600 text-white text-xs font-bold px-2.5 py-0.5 rounded-full shadow-xs">
                        Disponible
                      </div>
                      <div className="absolute bottom-2 left-2 bg-slate-900/80 backdrop-blur-xs text-white text-xs px-2 py-0.5 rounded-md font-mono font-bold">
                        {room.foundCount}/8 trouvés
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-24 rounded-xl bg-slate-100 border border-slate-200/80 flex items-center justify-center text-4xl mb-4 relative">
                      <span>{room.icon}</span>
                      <div className="absolute top-2 right-2 bg-slate-200 text-slate-600 text-[11px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                        <Lock className="w-3 h-3" />
                        <span>Bientôt disponible</span>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{room.icon}</span>
                      <h3 className="font-['Outfit'] font-bold text-slate-900 text-lg sm:text-xl">
                        {room.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs font-semibold text-amber-800 mt-1">{room.subtitle}</p>

                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {room.description}
                  </p>

                  {/* Typical hazards chips */}
                  <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-slate-200/60">
                    {room.hazards.map((h, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3">
                  {isActive && room.action ? (
                    <button
                      onClick={() => {
                        sound.playClick();
                        room.action();
                      }}
                      className="w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                    >
                      <Play className="w-4 h-4 fill-current" />
                      <span>Entrer dans {room.title.toLowerCase()}</span>
                    </button>
                  ) : (
                    <button
                      disabled
                      className="w-full py-2.5 px-4 rounded-xl bg-slate-100 text-slate-400 font-semibold text-xs flex items-center justify-center gap-1.5 cursor-not-allowed"
                    >
                      <Lock className="w-3.5 h-3.5" />
                      <span>Prochainement disponible</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* How to play / Methodology */}
      <section className="bg-white border border-amber-200 rounded-3xl p-6 sm:p-8 shadow-xs">
        <h2 className="font-['Outfit'] font-bold text-slate-900 text-xl sm:text-2xl mb-1">
          Comment mener l'enquête ?
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mb-6">
          Une méthode simple et intuitive en 3 étapes pour apprendre à se protéger.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 flex flex-col gap-2">
            <span className="w-9 h-9 rounded-xl bg-amber-500 text-white font-bold text-base flex items-center justify-center font-mono">
              1
            </span>
            <h3 className="font-['Outfit'] font-bold text-slate-900 text-base">
              Observe la pièce
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Scrute chaque détail : les lits en hauteur, les lampes, les jouets au sol, les sacs et les fenêtres.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 flex flex-col gap-2">
            <span className="w-9 h-9 rounded-xl bg-amber-500 text-white font-bold text-base flex items-center justify-center font-mono">
              2
            </span>
            <h3 className="font-['Outfit'] font-bold text-slate-900 text-base">
              Clique sur un piège
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Quand tu découvres un objet dangereux, clique dessus pour ouvrir la boîte de dialogue avec zoom en gros plan.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 flex flex-col gap-2">
            <span className="w-9 h-9 rounded-xl bg-amber-500 text-white font-bold text-base flex items-center justify-center font-mono">
              3
            </span>
            <h3 className="font-['Outfit'] font-bold text-slate-900 text-base">
              Nomme le danger
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Sélectionne le nom du risque dans le menu déroulant : chute, brûlure, défenestration, étouffement ou coupure.
            </p>
          </div>
        </div>
      </section>

      {/* Teacher & Parent Pedagogical Note */}
      <section className="bg-amber-100/60 border border-amber-300 rounded-2xl p-5 text-xs sm:text-sm text-amber-950 flex items-start gap-3">
        <ShieldCheck className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
        <div className="flex-1">
          <p className="font-bold text-amber-900 mb-0.5">
            Pour les enseignants de CE1 et les parents :
          </p>
          <p className="text-amber-900/90 leading-relaxed">
            Cette application s'inscrit dans le programme officiel de l'Éducation Nationale française au Cycle 2 : <em>Questionner le monde — Éducation à la santé et à la sécurité</em>. Elle permet d'identifier les risques de la vie courante, d'adopter des comportements prudents et de connaître les numéros de secours.
          </p>
        </div>
      </section>
    </div>
  );
};
