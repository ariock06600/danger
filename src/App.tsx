import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { LandingPage } from './components/LandingPage';
import { SceneViewer } from './components/SceneViewer';
import { DropdownSelectorModal } from './components/DropdownSelectorModal';
import { MemoTab } from './components/MemoTab';
import { EmergencyTab } from './components/EmergencyTab';
import {
  SALON_DANGERS_DATA,
  KITCHEN_DANGERS_DATA,
  BEDROOM_DANGERS_DATA,
  BATHROOM_DANGERS_DATA,
  GARAGE_DANGERS_DATA,
  GARDEN_DANGERS_DATA,
  DangerItem,
} from './data/dangers';
import { sound } from './utils/audio';
import confetti from 'canvas-confetti';

export default function App() {
  const [currentTab, setCurrentTab] = useState<'home' | 'salon' | 'cuisine' | 'chambre' | 'salle_de_bain' | 'garage' | 'jardin' | 'memo' | 'emergency'>('home');

  // Salon found hazards state
  const [foundSalonIds, setFoundSalonIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('ce1_dangers_salon_v1') || localStorage.getItem('ce1_dangers_found_v1');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Cuisine found hazards state
  const [foundCuisineIds, setFoundCuisineIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('ce1_dangers_cuisine_v1');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Bedroom found hazards state
  const [foundChambreIds, setFoundChambreIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('ce1_dangers_chambre_v1');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Bathroom found hazards state
  const [foundSalleDeBainIds, setFoundSalleDeBainIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('ce1_dangers_salle_de_bain_v1');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Garage found hazards state
  const [foundGarageIds, setFoundGarageIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('ce1_dangers_garage_v1');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Jardin found hazards state
  const [foundJardinIds, setFoundJardinIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('ce1_dangers_jardin_v1');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [selectedDanger, setSelectedDanger] = useState<DangerItem | null>(null);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [resetNotice, setResetNotice] = useState<string | null>(null);

  // Sync states to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('ce1_dangers_salon_v1', JSON.stringify(foundSalonIds));
    } catch {
      // Ignore
    }
  }, [foundSalonIds]);

  useEffect(() => {
    try {
      localStorage.setItem('ce1_dangers_cuisine_v1', JSON.stringify(foundCuisineIds));
    } catch {
      // Ignore
    }
  }, [foundCuisineIds]);

  useEffect(() => {
    try {
      localStorage.setItem('ce1_dangers_chambre_v1', JSON.stringify(foundChambreIds));
    } catch {
      // Ignore
    }
  }, [foundChambreIds]);

  useEffect(() => {
    try {
      localStorage.setItem('ce1_dangers_salle_de_bain_v1', JSON.stringify(foundSalleDeBainIds));
    } catch {
      // Ignore
    }
  }, [foundSalleDeBainIds]);

  useEffect(() => {
    try {
      localStorage.setItem('ce1_dangers_garage_v1', JSON.stringify(foundGarageIds));
    } catch {
      // Ignore
    }
  }, [foundGarageIds]);

  useEffect(() => {
    try {
      localStorage.setItem('ce1_dangers_jardin_v1', JSON.stringify(foundJardinIds));
    } catch {
      // Ignore
    }
  }, [foundJardinIds]);

  const currentRoomDangers =
    currentTab === 'jardin'
      ? GARDEN_DANGERS_DATA
      : currentTab === 'garage'
      ? GARAGE_DANGERS_DATA
      : currentTab === 'salle_de_bain'
      ? BATHROOM_DANGERS_DATA
      : currentTab === 'chambre'
      ? BEDROOM_DANGERS_DATA
      : currentTab === 'cuisine'
      ? KITCHEN_DANGERS_DATA
      : SALON_DANGERS_DATA;

  const currentFoundIds =
    currentTab === 'jardin'
      ? foundJardinIds
      : currentTab === 'garage'
      ? foundGarageIds
      : currentTab === 'salle_de_bain'
      ? foundSalleDeBainIds
      : currentTab === 'chambre'
      ? foundChambreIds
      : currentTab === 'cuisine'
      ? foundCuisineIds
      : foundSalonIds;

  // Handle correct answer in dropdown menu
  const handleCorrectAnswer = (dangerId: string) => {
    if (currentTab === 'jardin') {
      if (!foundJardinIds.includes(dangerId)) {
        const updated = [...foundJardinIds, dangerId];
        setFoundJardinIds(updated);

        if (updated.length === GARDEN_DANGERS_DATA.length) {
          setTimeout(() => {
            sound.playVictory();
            try {
              confetti({
                particleCount: 140,
                spread: 95,
                origin: { y: 0.5 },
              });
            } catch {
              // ignore
            }
          }, 800);
        }
      }
    } else if (currentTab === 'garage') {
      if (!foundGarageIds.includes(dangerId)) {
        const updated = [...foundGarageIds, dangerId];
        setFoundGarageIds(updated);

        if (updated.length === GARAGE_DANGERS_DATA.length) {
          setTimeout(() => {
            sound.playVictory();
            try {
              confetti({
                particleCount: 120,
                spread: 90,
                origin: { y: 0.5 },
              });
            } catch {
              // ignore
            }
          }, 800);
        }
      }
    } else if (currentTab === 'salle_de_bain') {
      if (!foundSalleDeBainIds.includes(dangerId)) {
        const updated = [...foundSalleDeBainIds, dangerId];
        setFoundSalleDeBainIds(updated);

        if (updated.length === BATHROOM_DANGERS_DATA.length) {
          setTimeout(() => {
            sound.playVictory();
            try {
              confetti({
                particleCount: 120,
                spread: 90,
                origin: { y: 0.5 },
              });
            } catch {
              // ignore
            }
          }, 800);
        }
      }
    } else if (currentTab === 'chambre') {
      if (!foundChambreIds.includes(dangerId)) {
        const updated = [...foundChambreIds, dangerId];
        setFoundChambreIds(updated);

        if (updated.length === BEDROOM_DANGERS_DATA.length) {
          setTimeout(() => {
            sound.playVictory();
            try {
              confetti({
                particleCount: 120,
                spread: 90,
                origin: { y: 0.5 },
              });
            } catch {
              // ignore
            }
          }, 800);
        }
      }
    } else if (currentTab === 'cuisine') {
      if (!foundCuisineIds.includes(dangerId)) {
        const updated = [...foundCuisineIds, dangerId];
        setFoundCuisineIds(updated);

        if (updated.length === KITCHEN_DANGERS_DATA.length) {
          setTimeout(() => {
            sound.playVictory();
            try {
              confetti({
                particleCount: 120,
                spread: 90,
                origin: { y: 0.5 },
              });
            } catch {
              // ignore
            }
          }, 800);
        }
      }
    } else {
      if (!foundSalonIds.includes(dangerId)) {
        const updated = [...foundSalonIds, dangerId];
        setFoundSalonIds(updated);

        if (updated.length === SALON_DANGERS_DATA.length) {
          setTimeout(() => {
            sound.playVictory();
            try {
              confetti({
                particleCount: 120,
                spread: 90,
                origin: { y: 0.5 },
              });
            } catch {
              // ignore
            }
          }, 800);
        }
      }
    }
  };

  const handleResetCurrentRoom = () => {
    sound.playClick();
    setSelectedDanger(null);

    if (currentTab === 'jardin') {
      setFoundJardinIds([]);
      try {
        localStorage.removeItem('ce1_dangers_jardin_v1');
      } catch {
        // ignore
      }
      setResetNotice("Tous les dangers du jardin ont été remis à zéro !");
    } else if (currentTab === 'garage') {
      setFoundGarageIds([]);
      try {
        localStorage.removeItem('ce1_dangers_garage_v1');
      } catch {
        // ignore
      }
      setResetNotice("Tous les dangers du garage ont été remis à zéro !");
    } else if (currentTab === 'salle_de_bain') {
      setFoundSalleDeBainIds([]);
      try {
        localStorage.removeItem('ce1_dangers_salle_de_bain_v1');
      } catch {
        // ignore
      }
      setResetNotice("Tous les dangers de la salle de bain ont été remis à zéro !");
    } else if (currentTab === 'chambre') {
      setFoundChambreIds([]);
      try {
        localStorage.removeItem('ce1_dangers_chambre_v1');
      } catch {
        // ignore
      }
      setResetNotice("Tous les dangers de la chambre ont été remis à zéro !");
    } else if (currentTab === 'cuisine') {
      setFoundCuisineIds([]);
      try {
        localStorage.removeItem('ce1_dangers_cuisine_v1');
      } catch {
        // ignore
      }
      setResetNotice("Tous les dangers de la cuisine ont été remis à zéro !");
    } else {
      setFoundSalonIds([]);
      try {
        localStorage.removeItem('ce1_dangers_salon_v1');
        localStorage.removeItem('ce1_dangers_found_v1');
      } catch {
        // ignore
      }
      setResetNotice("Tous les dangers du salon ont été remis à zéro !");
    }

    setTimeout(() => {
      setResetNotice(null);
    }, 2500);
  };

  const handleToggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    sound.setEnabled(next);
    if (next) sound.playClick();
  };

  return (
    <div className="min-h-screen flex flex-col bg-amber-50/40 text-slate-800">
      {/* Header */}
      <Header
        currentTab={currentTab}
        setCurrentTab={(tab) => {
          sound.playClick();
          setCurrentTab(tab);
          setSelectedDanger(null);
        }}
        foundSalonCount={foundSalonIds.length}
        totalSalonCount={SALON_DANGERS_DATA.length}
        foundCuisineCount={foundCuisineIds.length}
        totalCuisineCount={KITCHEN_DANGERS_DATA.length}
        foundChambreCount={foundChambreIds.length}
        totalChambreCount={BEDROOM_DANGERS_DATA.length}
        foundSalleDeBainCount={foundSalleDeBainIds.length}
        totalSalleDeBainCount={BATHROOM_DANGERS_DATA.length}
        foundGarageCount={foundGarageIds.length}
        totalGarageCount={GARAGE_DANGERS_DATA.length}
        foundJardinCount={foundJardinIds.length}
        totalJardinCount={GARDEN_DANGERS_DATA.length}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        onReset={handleResetCurrentRoom}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 py-4 sm:py-6 flex flex-col gap-5">
        {currentTab === 'home' && (
          <LandingPage
            onStartSalon={() => setCurrentTab('salon')}
            onStartCuisine={() => setCurrentTab('cuisine')}
            onStartChambre={() => setCurrentTab('chambre')}
            onStartSalleDeBain={() => setCurrentTab('salle_de_bain')}
            onStartGarage={() => setCurrentTab('garage')}
            onStartJardin={() => setCurrentTab('jardin')}
            onGoToMemo={() => setCurrentTab('memo')}
            onGoToEmergency={() => setCurrentTab('emergency')}
            foundSalonCount={foundSalonIds.length}
            foundCuisineCount={foundCuisineIds.length}
            foundChambreCount={foundChambreIds.length}
            foundSalleDeBainCount={foundSalleDeBainIds.length}
            foundGarageCount={foundGarageIds.length}
            foundJardinCount={foundJardinIds.length}
          />
        )}

        {/* Le Salon Exercise */}
        {currentTab === 'salon' && (
          <div className="flex flex-col gap-4">
            {resetNotice && (
              <div className="bg-emerald-100 border border-emerald-300 text-emerald-900 px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between shadow-2xs animate-in fade-in slide-in-from-top-1">
                <span className="flex items-center gap-2">
                  <span>🔄</span>
                  <span>{resetNotice}</span>
                </span>
                <span className="text-xs font-mono font-bold bg-white/70 px-2 py-0.5 rounded-md">
                  0/8
                </span>
              </div>
            )}

            <div className="flex items-center justify-between">
              <button
                onClick={() => setCurrentTab('home')}
                className="text-xs font-semibold text-amber-900 hover:text-amber-950 flex items-center gap-1.5 bg-white hover:bg-amber-100/60 px-3 py-1.5 rounded-lg border border-amber-200 transition-colors cursor-pointer"
              >
                <span>← Retour aux 6 pièces de la maison</span>
              </button>

              <button
                onClick={() => setCurrentTab('cuisine')}
                className="text-xs font-semibold text-orange-900 hover:text-orange-950 flex items-center gap-1.5 bg-orange-100 hover:bg-orange-200 px-3 py-1.5 rounded-lg border border-orange-200 transition-colors cursor-pointer"
              >
                <span>Passer à la Cuisine (Exercice 2) →</span>
              </button>
            </div>

            {/* Interactive Scene Viewer for Salon */}
            <SceneViewer
              dangers={SALON_DANGERS_DATA}
              foundDangerIds={foundSalonIds}
              selectedDanger={selectedDanger}
              onSelectDanger={(danger) => setSelectedDanger(danger)}
              onReset={handleResetCurrentRoom}
              imageSrc="/public/assets/aistudio/image_5624f257.png"
              roomName="le salon"
              aspectClass="aspect-16/9"
            />
          </div>
        )}

        {/* La Cuisine Exercise */}
        {currentTab === 'cuisine' && (
          <div className="flex flex-col gap-4">
            {resetNotice && (
              <div className="bg-emerald-100 border border-emerald-300 text-emerald-900 px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between shadow-2xs animate-in fade-in slide-in-from-top-1">
                <span className="flex items-center gap-2">
                  <span>🔄</span>
                  <span>{resetNotice}</span>
                </span>
                <span className="text-xs font-mono font-bold bg-white/70 px-2 py-0.5 rounded-md">
                  0/8
                </span>
              </div>
            )}

            <div className="flex items-center justify-between">
              <button
                onClick={() => setCurrentTab('home')}
                className="text-xs font-semibold text-amber-900 hover:text-amber-950 flex items-center gap-1.5 bg-white hover:bg-amber-100/60 px-3 py-1.5 rounded-lg border border-amber-200 transition-colors cursor-pointer"
              >
                <span>← Retour aux 6 pièces de la maison</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentTab('salon')}
                  className="text-xs font-semibold text-amber-900 hover:text-amber-950 flex items-center gap-1.5 bg-amber-100 hover:bg-amber-200 px-3 py-1.5 rounded-lg border border-amber-200 transition-colors cursor-pointer"
                >
                  <span>← Revenir au Salon</span>
                </button>
                <button
                  onClick={() => setCurrentTab('chambre')}
                  className="text-xs font-semibold text-sky-900 hover:text-sky-950 flex items-center gap-1.5 bg-sky-100 hover:bg-sky-200 px-3 py-1.5 rounded-lg border border-sky-200 transition-colors cursor-pointer"
                >
                  <span>Passer à la Chambre (Exercice 3) →</span>
                </button>
              </div>
            </div>

            {/* Interactive Scene Viewer for Cuisine */}
            <SceneViewer
              dangers={KITCHEN_DANGERS_DATA}
              foundDangerIds={foundCuisineIds}
              selectedDanger={selectedDanger}
              onSelectDanger={(danger) => setSelectedDanger(danger)}
              onReset={handleResetCurrentRoom}
              imageSrc="/public/assets/aistudio/image_ef8c4428.png"
              roomName="la cuisine"
              aspectClass="aspect-16/9 sm:aspect-[2/1]"
            />
          </div>
        )}

        {/* La Chambre Exercise */}
        {currentTab === 'chambre' && (
          <div className="flex flex-col gap-4">
            {resetNotice && (
              <div className="bg-emerald-100 border border-emerald-300 text-emerald-900 px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between shadow-2xs animate-in fade-in slide-in-from-top-1">
                <span className="flex items-center gap-2">
                  <span>🔄</span>
                  <span>{resetNotice}</span>
                </span>
                <span className="text-xs font-mono font-bold bg-white/70 px-2 py-0.5 rounded-md">
                  0/8
                </span>
              </div>
            )}

            <div className="flex items-center justify-between">
              <button
                onClick={() => setCurrentTab('home')}
                className="text-xs font-semibold text-amber-900 hover:text-amber-950 flex items-center gap-1.5 bg-white hover:bg-amber-100/60 px-3 py-1.5 rounded-lg border border-amber-200 transition-colors cursor-pointer"
              >
                <span>← Retour aux 6 pièces de la maison</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentTab('cuisine')}
                  className="text-xs font-semibold text-orange-900 hover:text-orange-950 flex items-center gap-1.5 bg-orange-100 hover:bg-orange-200 px-3 py-1.5 rounded-lg border border-orange-200 transition-colors cursor-pointer"
                >
                  <span>← Revenir à la Cuisine</span>
                </button>
                <button
                  onClick={() => setCurrentTab('salle_de_bain')}
                  className="text-xs font-semibold text-teal-900 hover:text-teal-950 flex items-center gap-1.5 bg-teal-100 hover:bg-teal-200 px-3 py-1.5 rounded-lg border border-teal-200 transition-colors cursor-pointer"
                >
                  <span>Passer à la Salle de Bain (Exercice 4) →</span>
                </button>
              </div>
            </div>

            {/* Interactive Scene Viewer for Bedroom */}
            <SceneViewer
              dangers={BEDROOM_DANGERS_DATA}
              foundDangerIds={foundChambreIds}
              selectedDanger={selectedDanger}
              onSelectDanger={(danger) => setSelectedDanger(danger)}
              onReset={handleResetCurrentRoom}
              imageSrc="/public/assets/aistudio/image_89c0b33a.png"
              roomName="la chambre"
              aspectClass="aspect-16/9 sm:aspect-[2.1/1]"
            />
          </div>
        )}

        {/* La Salle de Bain Exercise */}
        {currentTab === 'salle_de_bain' && (
          <div className="flex flex-col gap-4">
            {resetNotice && (
              <div className="bg-emerald-100 border border-emerald-300 text-emerald-900 px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between shadow-2xs animate-in fade-in slide-in-from-top-1">
                <span className="flex items-center gap-2">
                  <span>🔄</span>
                  <span>{resetNotice}</span>
                </span>
                <span className="text-xs font-mono font-bold bg-white/70 px-2 py-0.5 rounded-md">
                  0/8
                </span>
              </div>
            )}

            <div className="flex items-center justify-between">
              <button
                onClick={() => setCurrentTab('home')}
                className="text-xs font-semibold text-amber-900 hover:text-amber-950 flex items-center gap-1.5 bg-white hover:bg-amber-100/60 px-3 py-1.5 rounded-lg border border-amber-200 transition-colors cursor-pointer"
              >
                <span>← Retour aux 6 pièces de la maison</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentTab('chambre')}
                  className="text-xs font-semibold text-sky-900 hover:text-sky-950 flex items-center gap-1.5 bg-sky-100 hover:bg-sky-200 px-3 py-1.5 rounded-lg border border-sky-200 transition-colors cursor-pointer"
                >
                  <span>← Revenir à la Chambre (Exercice 3)</span>
                </button>
                <button
                  onClick={() => setCurrentTab('garage')}
                  className="text-xs font-semibold text-amber-900 hover:text-amber-950 flex items-center gap-1.5 bg-amber-100 hover:bg-amber-200 px-3 py-1.5 rounded-lg border border-amber-300 transition-colors cursor-pointer"
                >
                  <span>Passer au Garage (Exercice 5) →</span>
                </button>
              </div>
            </div>

            {/* Interactive Scene Viewer for Bathroom */}
            <SceneViewer
              dangers={BATHROOM_DANGERS_DATA}
              foundDangerIds={foundSalleDeBainIds}
              selectedDanger={selectedDanger}
              onSelectDanger={(danger) => setSelectedDanger(danger)}
              onReset={handleResetCurrentRoom}
              imageSrc="/public/assets/aistudio/image_cd21f0d7.png"
              roomName="la salle de bain"
              aspectClass="aspect-16/9 sm:aspect-[2.07/1]"
            />
          </div>
        )}

        {/* Le Garage Exercise */}
        {currentTab === 'garage' && (
          <div className="flex flex-col gap-4">
            {resetNotice && (
              <div className="bg-emerald-100 border border-emerald-300 text-emerald-900 px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between shadow-2xs animate-in fade-in slide-in-from-top-1">
                <span className="flex items-center gap-2">
                  <span>🔄</span>
                  <span>{resetNotice}</span>
                </span>
                <span className="text-xs font-mono font-bold bg-white/70 px-2 py-0.5 rounded-md">
                  0/8
                </span>
              </div>
            )}

            <div className="flex flex-wrap items-center justify-between gap-2">
              <button
                onClick={() => setCurrentTab('home')}
                className="text-xs font-semibold text-amber-900 hover:text-amber-950 flex items-center gap-1.5 bg-white hover:bg-amber-100/60 px-3 py-1.5 rounded-lg border border-amber-200 transition-colors cursor-pointer"
              >
                <span>← Retour aux 6 pièces de la maison</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentTab('salle_de_bain')}
                  className="text-xs font-semibold text-teal-900 hover:text-teal-950 flex items-center gap-1.5 bg-teal-100 hover:bg-teal-200 px-3 py-1.5 rounded-lg border border-teal-200 transition-colors cursor-pointer"
                >
                  <span>← Salle de Bain (Ex. 4)</span>
                </button>
                <button
                  onClick={() => setCurrentTab('jardin')}
                  className="text-xs font-bold text-white flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 px-3 py-1.5 rounded-lg shadow-2xs hover:shadow-xs transition-colors cursor-pointer"
                >
                  <span>Passer au Jardin (Exercice 6) →</span>
                </button>
              </div>
            </div>

            {/* Interactive Scene Viewer for Garage */}
            <SceneViewer
              dangers={GARAGE_DANGERS_DATA}
              foundDangerIds={foundGarageIds}
              selectedDanger={selectedDanger}
              onSelectDanger={(danger) => setSelectedDanger(danger)}
              onReset={handleResetCurrentRoom}
              imageSrc="/public/assets/aistudio/image_549324c5.png"
              roomName="le garage"
              aspectClass="aspect-16/9 sm:aspect-[2.07/1]"
            />
          </div>
        )}

        {/* Le Jardin Exercise */}
        {currentTab === 'jardin' && (
          <div className="flex flex-col gap-4">
            {resetNotice && (
              <div className="bg-emerald-100 border border-emerald-300 text-emerald-900 px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between shadow-2xs animate-in fade-in slide-in-from-top-1">
                <span className="flex items-center gap-2">
                  <span>🔄</span>
                  <span>{resetNotice}</span>
                </span>
                <span className="text-xs font-mono font-bold bg-white/70 px-2 py-0.5 rounded-md">
                  0/8
                </span>
              </div>
            )}

            <div className="flex flex-wrap items-center justify-between gap-2">
              <button
                onClick={() => setCurrentTab('home')}
                className="text-xs font-semibold text-amber-900 hover:text-amber-950 flex items-center gap-1.5 bg-white hover:bg-amber-100/60 px-3 py-1.5 rounded-lg border border-amber-200 transition-colors cursor-pointer"
              >
                <span>← Retour aux 6 pièces de la maison</span>
              </button>

              <button
                onClick={() => setCurrentTab('garage')}
                className="text-xs font-semibold text-amber-950 hover:text-black flex items-center gap-1.5 bg-amber-100 hover:bg-amber-200 px-3 py-1.5 rounded-lg border border-amber-300 transition-colors cursor-pointer"
              >
                <span>← Revenir au Garage (Exercice 5)</span>
              </button>
            </div>

            {/* Interactive Scene Viewer for Jardin */}
            <SceneViewer
              dangers={GARDEN_DANGERS_DATA}
              foundDangerIds={foundJardinIds}
              selectedDanger={selectedDanger}
              onSelectDanger={(danger) => setSelectedDanger(danger)}
              onReset={handleResetCurrentRoom}
              imageSrc="/public/assets/aistudio/image_1c9aea3a.png"
              roomName="le jardin"
              aspectClass="aspect-16/9 sm:aspect-[2.15/1]"
            />
          </div>
        )}

        {currentTab === 'memo' && <MemoTab />}

        {currentTab === 'emergency' && <EmergencyTab />}
      </main>

      {/* Dropdown Hazard Naming Modal */}
      {selectedDanger && (
        <DropdownSelectorModal
          selectedDanger={selectedDanger}
          foundDangerIds={currentFoundIds}
          onCorrectAnswer={handleCorrectAnswer}
          onClose={() => setSelectedDanger(null)}
          imageSrc={
            currentTab === 'jardin'
              ? '/public/assets/aistudio/image_1c9aea3a.png'
              : currentTab === 'garage'
              ? '/public/assets/aistudio/image_549324c5.png'
              : currentTab === 'salle_de_bain'
              ? '/public/assets/aistudio/image_cd21f0d7.png'
              : currentTab === 'chambre'
              ? '/public/assets/aistudio/image_89c0b33a.png'
              : currentTab === 'cuisine'
              ? '/public/assets/aistudio/image_ef8c4428.png'
              : '/public/assets/aistudio/image_5624f257.png'
          }
        />
      )}

      {/* Footer */}
      <footer className="print:hidden border-t border-amber-200/80 bg-white py-4 mt-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-xs text-slate-500">
          <p>
            La Maison des Dangers · Conforme aux programmes scolaires français du Cycle 2 (CP - CE1) · Éducation à la sécurité et prévention des accidents domestiques.
          </p>
        </div>
      </footer>
    </div>
  );
}
