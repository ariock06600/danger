import React, { useRef, useState } from 'react';
import { DangerItem } from '../data/dangers';
import { Check, HelpCircle, RotateCcw, Eye, EyeOff } from 'lucide-react';

interface SceneViewerProps {
  dangers: DangerItem[];
  foundDangerIds: string[];
  selectedDanger: DangerItem | null;
  onSelectDanger: (danger: DangerItem) => void;
  onReset: () => void;
  imageSrc?: string;
  roomName?: string;
  aspectClass?: string;
}

export const SceneViewer: React.FC<SceneViewerProps> = ({
  dangers,
  foundDangerIds,
  selectedDanger,
  onSelectDanger,
  onReset,
  imageSrc = '/public/assets/aistudio/image_5624f257.png',
  roomName = 'la pièce',
  aspectClass = 'aspect-16/9',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hideMarkers, setHideMarkers] = useState<boolean>(false);

  // Click anywhere on image handler to detect closest danger
  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clickX = ((e.clientX - rect.left) / rect.width) * 100;
    const clickY = ((e.clientY - rect.top) / rect.height) * 100;

    let nearest: DangerItem | null = null;
    let minDistance = 9999;

    dangers.forEach((danger) => {
      const dx = clickX - danger.coords.x;
      const dy = clickY - danger.coords.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist <= danger.coords.radius * 1.6 && dist < minDistance) {
        minDistance = dist;
        nearest = danger;
      }
    });

    if (nearest) {
      onSelectDanger(nearest);
    }
  };

  const remainingCount = dangers.length - foundDangerIds.length;

  return (
    <div className="flex flex-col gap-3">
      {/* Top Banner with Instruction, Stars, Eye toggle & Direct Reset Button */}
      <div className="bg-white rounded-xl border border-amber-200/90 p-3 sm:p-4 shadow-xs flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold font-['Outfit'] text-xl shrink-0">
            🔎
          </div>
          <div>
            <h2 className="font-['Outfit'] font-bold text-slate-900 text-base sm:text-lg">
              Observe la pièce et clique sur les pièges !
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Survole un repère pour voir le dessin derrière, ou clique dessus pour ouvrir le gros plan.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Progress Stars */}
          <div className="flex items-center gap-1.5 bg-amber-50 px-2.5 py-1.5 rounded-lg border border-amber-200">
            <span className="text-xs font-bold text-amber-950">Trouvés :</span>
            <div className="flex gap-0.5">
              {dangers.map((d) => (
                <span
                  key={d.id}
                  className={`text-sm ${
                    foundDangerIds.includes(d.id) ? 'text-amber-500 font-bold' : 'text-slate-300'
                  }`}
                  title={d.dangerName}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-xs font-mono font-bold text-amber-900 ml-1">
              {foundDangerIds.length}/{dangers.length}
            </span>
          </div>

          {/* Eye toggle to view raw drawing without any pins */}
          <button
            onClick={() => setHideMarkers(!hideMarkers)}
            className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-colors flex items-center gap-1.5 border cursor-pointer ${
              hideMarkers
                ? 'bg-amber-500 text-white border-amber-600 shadow-2xs'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
            }`}
            title={hideMarkers ? 'Réafficher les repères' : 'Masquer temporairement les repères pour bien voir le dessin'}
          >
            {hideMarkers ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5 text-slate-500" />}
            <span className="hidden sm:inline">
              {hideMarkers ? 'Voir repères' : 'Masquer repères'}
            </span>
          </button>

          {/* Bouton pour reprendre à 0 */}
          <button
            onClick={onReset}
            className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center gap-1.5 border border-slate-300 cursor-pointer"
            title="Remettre cette pièce à zéro"
          >
            <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
            <span className="hidden sm:inline">Reprendre à 0</span>
          </button>
        </div>
      </div>

      {/* Main Image Container */}
      <div
        ref={containerRef}
        onClick={handleImageClick}
        className={`relative w-full ${aspectClass} bg-slate-900 rounded-2xl overflow-hidden border-2 border-amber-200 shadow-md cursor-crosshair select-none group`}
      >
        {/* Background Image */}
        <img
          src={imageSrc}
          alt={`Dangers cachés dans ${roomName} pour élèves de CE1`}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover pointer-events-none"
        />

        {/* Highlight box for selected or found danger */}
        {!hideMarkers &&
          dangers.map((danger) => {
            const isFound = foundDangerIds.includes(danger.id);
            const isSelected = selectedDanger?.id === danger.id;

            if (!isSelected && !isFound) return null;

            return (
              <div
                key={`box-${danger.id}`}
                style={{
                  left: `${danger.highlightBox.left}%`,
                  top: `${danger.highlightBox.top}%`,
                  width: `${danger.highlightBox.width}%`,
                  height: `${danger.highlightBox.height}%`,
                }}
                className={`absolute pointer-events-none rounded-xl transition-all duration-300 ${
                  isSelected
                    ? 'border-3 border-amber-400 bg-amber-400/20 ring-4 ring-amber-300/40 animate-pulse'
                    : 'border-2 border-emerald-400/80 bg-emerald-500/10'
                }`}
              />
            );
          })}

        {/* Hotspots / Markers (translucent and see-through on hover!) */}
        {!hideMarkers &&
          dangers.map((danger, index) => {
            const isFound = foundDangerIds.includes(danger.id);
            const isSelected = selectedDanger?.id === danger.id;

            return (
              <div
                key={danger.id}
                style={{
                  left: `${danger.coords.x}%`,
                  top: `${danger.coords.y}%`,
                }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group/pin"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectDanger(danger);
                }}
              >
                {isFound ? (
                  // Found marker: Green checkmark badge with slight translucency on hover
                  <div
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-115 hover:opacity-30 ${
                      isSelected
                        ? 'bg-emerald-600 text-white ring-4 ring-emerald-300 scale-110'
                        : 'bg-emerald-500/90 text-white ring-2 ring-white/90'
                    }`}
                    title={`${danger.dangerName} (Trouvé ! Survole pour voir derrière)`}
                  >
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 stroke-[3]" />
                  </div>
                ) : (
                  // Unfound marker: Translucent glass ring, fades to almost invisible on hover to show drawing!
                  <div
                    className={`relative flex items-center justify-center transition-all ${
                      isSelected ? 'scale-115' : ''
                    }`}
                  >
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-['Outfit'] font-bold text-xs transition-all duration-200 border-2 shadow-xs backdrop-blur-2xs ${
                        isSelected
                          ? 'bg-amber-500 text-white ring-4 ring-amber-200 border-white'
                          : 'bg-white/70 text-slate-800 border-amber-400/90 hover:bg-white/10 hover:border-amber-300/40 hover:opacity-15 active:opacity-0'
                      }`}
                      title="Clique pour voir le gros plan ou survole pour voir le dessin derrière"
                    >
                      <HelpCircle className="w-4 h-4 text-amber-700" />
                    </div>

                    {/* Marker small index number */}
                    <span className="absolute -top-1 -right-1 bg-slate-900/80 text-white text-[9px] font-bold rounded-full w-3.5 h-3.5 flex items-center justify-center group-hover/pin:opacity-20 transition-opacity">
                      {index + 1}
                    </span>
                  </div>
                )}
              </div>
            );
          })}

        {/* Quick status overlay in bottom-left */}
        <div className="absolute bottom-2 left-2 bg-slate-900/80 backdrop-blur-xs text-white px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-2 pointer-events-none">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>
            {foundDangerIds.length}/{dangers.length} dangers trouvés
          </span>
          {remainingCount > 0 && (
            <span className="text-amber-300">
              ({remainingCount} restant{remainingCount > 1 ? 's' : ''})
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
