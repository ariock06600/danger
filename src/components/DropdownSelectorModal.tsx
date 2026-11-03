import React, { useState, useEffect } from 'react';
import { DangerItem, DANGER_OPTIONS } from '../data/dangers';
import { CheckCircle2, AlertCircle, X, ShieldAlert, Award } from 'lucide-react';
import { sound } from '../utils/audio';
import confetti from 'canvas-confetti';

interface DropdownSelectorModalProps {
  selectedDanger: DangerItem | null;
  foundDangerIds: string[];
  onCorrectAnswer: (dangerId: string) => void;
  onClose: () => void;
  imageSrc?: string;
}

export const DropdownSelectorModal: React.FC<DropdownSelectorModalProps> = ({
  selectedDanger,
  foundDangerIds,
  onCorrectAnswer,
  onClose,
  imageSrc = '/public/assets/aistudio/image_5624f257.png',
}) => {
  const [selectedValue, setSelectedValue] = useState<string>('');
  const [feedbackState, setFeedbackState] = useState<'idle' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState<string>('');

  useEffect(() => {
    setSelectedValue('');
    setFeedbackState('idle');
    setFeedbackMessage('');
  }, [selectedDanger]);

  if (!selectedDanger) return null;

  const isAlreadyFound = foundDangerIds.includes(selectedDanger.id);

  const handleValidate = () => {
    if (!selectedValue) {
      setFeedbackState('error');
      setFeedbackMessage('Choisis un danger dans le menu déroulant !');
      sound.playError();
      return;
    }

    const isCorrect =
      selectedValue === selectedDanger.correctOptionId ||
      Boolean(selectedDanger.acceptedOptionIds?.includes(selectedValue));

    if (isCorrect) {
      setFeedbackState('success');
      setFeedbackMessage(`Bravo ! C’est bien un risque de : ${selectedDanger.dangerName} !`);
      sound.playSuccess();

      try {
        confetti({
          particleCount: 60,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#F59E0B', '#10B981', '#3B82F6', '#EF4444'],
        });
      } catch {
        // Ignore
      }

      onCorrectAnswer(selectedDanger.id);
    } else {
      setFeedbackState('error');
      sound.playError();
      const chosenOption = DANGER_OPTIONS.find((o) => o.id === selectedValue);
      const chosenLabel = chosenOption ? chosenOption.label : 'ce danger';
      setFeedbackMessage(
        `Non, ce n'est pas « ${chosenLabel} ». Regarde bien l'objet dans l'aperçu et ce qui risque d'arriver !`
      );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white rounded-2xl max-w-lg w-full border-2 border-amber-300 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-amber-100/90 px-4 py-3 sm:px-6 flex items-center justify-between border-b border-amber-200">
          <div className="flex items-center gap-2">
            <span className="text-xl">⚠️</span>
            <h3 className="font-['Outfit'] font-bold text-slate-900 text-lg sm:text-xl">
              {isAlreadyFound ? 'Danger identifié !' : 'Nommer ce danger'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-amber-200/60 transition-colors cursor-pointer"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-4 sm:p-6 overflow-y-auto flex flex-col gap-4">
          {/* Aperçu en gros plan de ce qu'il y a derrière le cercle */}
          <div className="flex items-center gap-3.5 bg-slate-50 border border-slate-200 rounded-xl p-3 shadow-2xs">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg border-2 border-amber-400 overflow-hidden shrink-0 bg-slate-900 shadow-inner relative">
              <div
                className="w-full h-full transform hover:scale-110 transition-transform"
                style={{
                  backgroundImage: `url(${imageSrc})`,
                  backgroundPosition: `${selectedDanger.coords.x}% ${selectedDanger.coords.y}%`,
                  backgroundSize: '450%',
                  backgroundRepeat: 'no-repeat',
                }}
              />
            </div>
            <div className="flex-1">
              <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider block">
                🔍 Aperçu sous le repère :
              </span>
              <p className="text-xs sm:text-sm font-bold text-slate-800 mt-0.5">
                {selectedDanger.locationDescription}
              </p>
              <p className="text-xs text-slate-500 mt-1 leading-snug">
                Voici l'objet en gros plan pour bien observer le piège.
              </p>
            </div>
          </div>

          {isAlreadyFound ? (
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3 bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                <CheckCircle2 className="w-7 h-7 text-emerald-600 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                    Danger validé
                  </span>
                  <h4 className="font-['Outfit'] font-bold text-slate-900 text-2xl mt-1">
                    {selectedDanger.dangerName}
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Emplacement : {selectedDanger.locationDescription}
                  </p>
                </div>
              </div>

              {/* Explanation */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-sm text-slate-700 leading-relaxed">
                <p className="font-bold text-slate-900 mb-1">Pourquoi c'est dangereux ?</p>
                <p>{selectedDanger.explanation}</p>
              </div>

              {/* Good habit */}
              <div className="bg-amber-50 rounded-xl p-4 border border-amber-200 text-sm text-amber-950">
                <p className="font-bold flex items-center gap-1.5 text-amber-900 mb-1">
                  <Award className="w-4 h-4 text-amber-600" />
                  <span>Le bon réflexe :</span>
                </p>
                <p>{selectedDanger.goodHabit}</p>
              </div>

              {/* Emergency number */}
              <div className="flex items-center justify-between bg-rose-50 border border-rose-200 rounded-xl p-3 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-rose-500 text-white font-bold flex items-center justify-center font-mono text-base">
                    {selectedDanger.emergencyNumber.num}
                  </span>
                  <div>
                    <span className="font-bold text-rose-950 block">Numéro d'urgence :</span>
                    <span className="text-rose-800">{selectedDanger.emergencyNumber.label}</span>
                  </div>
                </div>
              </div>

              {/* Navigation: Uniquement le bouton Fermer comme demandé */}
              <div className="flex items-center justify-end pt-2">
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-2.5 text-sm font-bold text-white bg-slate-800 hover:bg-slate-900 rounded-xl cursor-pointer transition-colors"
                >
                  Fermer
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3 bg-amber-50/70 border border-amber-200 rounded-xl p-3 sm:p-4">
                <ShieldAlert className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-['Outfit'] font-bold text-slate-900 text-base">
                    Quel est ce danger ?
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    Sélectionne le nom du risque correspondant à l'objet dans le menu déroulant :
                  </p>
                </div>
              </div>

              {/* Dropdown containing only danger names */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="danger-type-select"
                  className="text-xs sm:text-sm font-bold text-slate-800 block"
                >
                  📋 Choisis le danger dans le menu déroulant :
                </label>

                <div className="relative">
                  <select
                    id="danger-type-select"
                    value={selectedValue}
                    onChange={(e) => {
                      setSelectedValue(e.target.value);
                      setFeedbackState('idle');
                    }}
                    className="w-full bg-white border-2 border-amber-300 focus:border-amber-500 rounded-xl px-4 py-3 text-base sm:text-lg font-bold text-slate-800 focus:outline-hidden focus:ring-4 focus:ring-amber-200 transition-all cursor-pointer shadow-xs"
                  >
                    <option value="" disabled>
                      -- Choisis un danger --
                    </option>
                    {DANGER_OPTIONS.map((opt) => (
                      <option key={opt.id} value={opt.id}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Feedback messages */}
              {feedbackState === 'error' && (
                <div className="bg-rose-50 border border-rose-200 rounded-xl p-3 flex items-start gap-2.5 text-xs sm:text-sm text-rose-900 animate-in fade-in">
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-semibold">{feedbackMessage}</p>
                  </div>
                </div>
              )}

              {feedbackState === 'success' && (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 flex items-start gap-2.5 text-xs sm:text-sm text-emerald-900 animate-in fade-in">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">{feedbackMessage}</p>
                  </div>
                </div>
              )}

              {/* Submit CTA */}
              <div className="flex items-center justify-between gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
                >
                  Annuler
                </button>

                <button
                  type="button"
                  onClick={handleValidate}
                  disabled={!selectedValue}
                  className={`px-5 py-2.5 text-sm font-bold rounded-xl transition-all flex items-center gap-2 shadow-sm ${
                    selectedValue
                      ? 'bg-amber-500 hover:bg-amber-600 text-white cursor-pointer hover:shadow-md active:scale-98'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Valider</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
