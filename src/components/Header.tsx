import React from 'react';
import { ShieldCheck, Volume2, VolumeX, RotateCcw, PhoneCall, BookOpen, Home } from 'lucide-react';

interface HeaderProps {
  currentTab: 'home' | 'salon' | 'cuisine' | 'chambre' | 'salle_de_bain' | 'garage' | 'jardin' | 'memo' | 'emergency';
  setCurrentTab: (tab: 'home' | 'salon' | 'cuisine' | 'chambre' | 'salle_de_bain' | 'garage' | 'jardin' | 'memo' | 'emergency') => void;
  foundSalonCount: number;
  totalSalonCount: number;
  foundCuisineCount: number;
  totalCuisineCount: number;
  foundChambreCount: number;
  totalChambreCount: number;
  foundSalleDeBainCount: number;
  totalSalleDeBainCount: number;
  foundGarageCount: number;
  totalGarageCount: number;
  foundJardinCount: number;
  totalJardinCount: number;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onReset: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  foundSalonCount,
  totalSalonCount,
  foundCuisineCount,
  totalCuisineCount,
  foundChambreCount,
  totalChambreCount,
  foundSalleDeBainCount,
  totalSalleDeBainCount,
  foundGarageCount,
  totalGarageCount,
  foundJardinCount,
  totalJardinCount,
  soundEnabled,
  onToggleSound,
  onReset,
}) => {
  const isRoomActive =
    currentTab === 'salon' ||
    currentTab === 'cuisine' ||
    currentTab === 'chambre' ||
    currentTab === 'salle_de_bain' ||
    currentTab === 'garage' ||
    currentTab === 'jardin';

  return (
    <header className="bg-white border-b border-amber-200/80 sticky top-0 z-40 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        {/* Zone 1: Brand Wordmark (clickable to home) */}
        <button
          onClick={() => setCurrentTab('home')}
          className="flex items-center gap-3 shrink-0 text-left cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-xs group-hover:bg-amber-600 transition-colors">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <span className="font-['Outfit',sans-serif] font-bold text-lg sm:text-xl text-slate-900 tracking-tight block leading-tight">
              La Maison des Dangers
            </span>
            <span className="text-xs font-medium text-amber-700 block">
              Sécurité domestique · Niveau CE1
            </span>
          </div>
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-2 text-sm font-medium">
          <button
            onClick={() => setCurrentTab('home')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer ${
              currentTab === 'home'
                ? 'bg-amber-100 text-amber-900 font-semibold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Home className="w-4 h-4 text-amber-600" />
            <span>Accueil (Les 6 Pièces)</span>
          </button>

          <button
            onClick={() => setCurrentTab('salon')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer ${
              currentTab === 'salon'
                ? 'bg-amber-100 text-amber-900 font-semibold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <span>Le Salon</span>
            <span className="text-xs bg-amber-200/70 text-amber-800 px-1.5 py-0.5 rounded-md font-mono font-bold">
              {foundSalonCount}/{totalSalonCount}
            </span>
          </button>

          <button
            onClick={() => setCurrentTab('cuisine')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer ${
              currentTab === 'cuisine'
                ? 'bg-orange-100 text-orange-950 font-semibold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <span>La Cuisine</span>
            <span className="text-xs bg-orange-200/70 text-orange-900 px-1.5 py-0.5 rounded-md font-mono font-bold">
              {foundCuisineCount}/{totalCuisineCount}
            </span>
          </button>

          <button
            onClick={() => setCurrentTab('chambre')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer ${
              currentTab === 'chambre'
                ? 'bg-sky-100 text-sky-950 font-semibold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <span>La Chambre</span>
            <span className="text-xs bg-sky-200/70 text-sky-900 px-1.5 py-0.5 rounded-md font-mono font-bold">
              {foundChambreCount}/{totalChambreCount}
            </span>
          </button>

          <button
            onClick={() => setCurrentTab('salle_de_bain')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer ${
              currentTab === 'salle_de_bain'
                ? 'bg-teal-100 text-teal-950 font-semibold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <span>La Salle de Bain</span>
            <span className="text-xs bg-teal-200/70 text-teal-900 px-1.5 py-0.5 rounded-md font-mono font-bold">
              {foundSalleDeBainCount}/{totalSalleDeBainCount}
            </span>
          </button>

          <button
            onClick={() => setCurrentTab('garage')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer ${
              currentTab === 'garage'
                ? 'bg-amber-100 text-amber-950 font-semibold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <span>Le Garage</span>
            <span className="text-xs bg-amber-200/70 text-amber-900 px-1.5 py-0.5 rounded-md font-mono font-bold">
              {foundGarageCount}/{totalGarageCount}
            </span>
          </button>

          <button
            onClick={() => setCurrentTab('jardin')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer ${
              currentTab === 'jardin'
                ? 'bg-emerald-100 text-emerald-950 font-semibold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <span>Le Jardin</span>
            <span className="text-xs bg-emerald-200/70 text-emerald-900 px-1.5 py-0.5 rounded-md font-mono font-bold">
              {foundJardinCount}/{totalJardinCount}
            </span>
          </button>

          <button
            onClick={() => setCurrentTab('memo')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer ${
              currentTab === 'memo'
                ? 'bg-amber-100 text-amber-900 font-semibold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <BookOpen className="w-4 h-4 text-amber-600" />
            <span>Fiche Réflexes</span>
          </button>

          <button
            onClick={() => setCurrentTab('emergency')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer ${
              currentTab === 'emergency'
                ? 'bg-amber-100 text-amber-900 font-semibold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <PhoneCall className="w-4 h-4 text-rose-500" />
            <span>Numéros d'Urgence (15, 18, 112)</span>
          </button>
        </nav>

        {/* Zone 3: Actions & Controls */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onToggleSound}
            title={soundEnabled ? 'Couper le son' : 'Activer le son'}
            className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Contrôle du son"
          >
            {soundEnabled ? <Volume2 className="w-5 h-5 text-amber-600" /> : <VolumeX className="w-5 h-5 text-slate-400" />}
          </button>

          {isRoomActive && (
            <button
              onClick={onReset}
              title="Reprendre cette pièce à zéro"
              className="px-3.5 py-2 text-xs font-bold text-amber-950 bg-amber-100 hover:bg-amber-200 border border-amber-300 rounded-xl transition-all flex items-center gap-1.5 shadow-2xs hover:shadow-xs cursor-pointer active:scale-95"
            >
              <RotateCcw className="w-3.5 h-3.5 text-amber-800" />
              <span>Reprendre à 0</span>
            </button>
          )}
        </div>
      </div>

      {/* Mobile nav bar row */}
      <div className="md:hidden flex items-center justify-around border-t border-amber-100 px-2 py-1.5 bg-amber-50/70 text-xs overflow-x-auto">
        <button
          onClick={() => setCurrentTab('home')}
          className={`py-1 px-2 rounded-md font-medium shrink-0 ${currentTab === 'home' ? 'bg-amber-200 text-amber-900 font-bold' : 'text-slate-700'}`}
        >
          Accueil
        </button>
        <button
          onClick={() => setCurrentTab('salon')}
          className={`py-1 px-2 rounded-md font-medium shrink-0 ${currentTab === 'salon' ? 'bg-amber-200 text-amber-900 font-bold' : 'text-slate-700'}`}
        >
          Salon ({foundSalonCount}/{totalSalonCount})
        </button>
        <button
          onClick={() => setCurrentTab('cuisine')}
          className={`py-1 px-2 rounded-md font-medium shrink-0 ${currentTab === 'cuisine' ? 'bg-orange-200 text-orange-950 font-bold' : 'text-slate-700'}`}
        >
          Cuisine ({foundCuisineCount}/{totalCuisineCount})
        </button>
        <button
          onClick={() => setCurrentTab('chambre')}
          className={`py-1 px-2 rounded-md font-medium shrink-0 ${currentTab === 'chambre' ? 'bg-sky-200 text-sky-950 font-bold' : 'text-slate-700'}`}
        >
          Chambre ({foundChambreCount}/{totalChambreCount})
        </button>
        <button
          onClick={() => setCurrentTab('salle_de_bain')}
          className={`py-1 px-2 rounded-md font-medium shrink-0 ${currentTab === 'salle_de_bain' ? 'bg-teal-200 text-teal-950 font-bold' : 'text-slate-700'}`}
        >
          SdB ({foundSalleDeBainCount}/{totalSalleDeBainCount})
        </button>
        <button
          onClick={() => setCurrentTab('garage')}
          className={`py-1 px-2 rounded-md font-medium shrink-0 ${currentTab === 'garage' ? 'bg-amber-200 text-amber-950 font-bold' : 'text-slate-700'}`}
        >
          Garage ({foundGarageCount}/{totalGarageCount})
        </button>
        <button
          onClick={() => setCurrentTab('jardin')}
          className={`py-1 px-2 rounded-md font-medium shrink-0 ${currentTab === 'jardin' ? 'bg-emerald-200 text-emerald-950 font-bold' : 'text-slate-700'}`}
        >
          Jardin ({foundJardinCount}/{totalJardinCount})
        </button>
        <button
          onClick={() => setCurrentTab('memo')}
          className={`py-1 px-2 rounded-md font-medium shrink-0 ${currentTab === 'memo' ? 'bg-amber-200 text-amber-900 font-bold' : 'text-slate-700'}`}
        >
          Fiche
        </button>
        <button
          onClick={() => setCurrentTab('emergency')}
          className={`py-1 px-2 rounded-md font-medium shrink-0 ${currentTab === 'emergency' ? 'bg-amber-200 text-amber-900 font-bold' : 'text-slate-700'}`}
        >
          Urgences
        </button>
      </div>
    </header>
  );
};
