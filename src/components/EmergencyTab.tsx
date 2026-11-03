import React, { useState } from 'react';
import { PhoneCall, ShieldAlert, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { sound } from '../utils/audio';
import confetti from 'canvas-confetti';

interface QuizScenario {
  id: string;
  situation: string;
  correctNum: '15' | '18' | '112';
  explanation: string;
}

const SCENARIOS: QuizScenario[] = [
  {
    id: 's1',
    situation: "De la fumée noire sort du poêle et les flammes commencent à brûler le tapis du salon !",
    correctNum: '18',
    explanation: "Bravo ! C'est le 18 pour les Sapeurs-Pompiers en cas d'incendie ou de fumée.",
  },
  {
    id: 's2',
    situation: "Quelqu'un est tombé lourdement dans l'escalier, sa jambe est déformée et il a très mal !",
    correctNum: '15',
    explanation: "Exact ! Le 15 c'est le SAMU pour les urgences médicales et les blessures graves.",
  },
  {
    id: 's3',
    situation: "Tu es en vacances en Espagne ou en Belgique et il y a une urgence grave !",
    correctNum: '112',
    explanation: "Parfait ! Le 112 fonctionne dans tous les pays d'Europe, gratuitement même sans crédit !",
  },
  {
    id: 's4',
    situation: "Un petit frère a bu un produit ménager toxique par erreur dans la cuisine !",
    correctNum: '15',
    explanation: "Très bien ! Le 15 contacte directement les médecins du SAMU et le centre antipoison.",
  },
];

export const EmergencyTab: React.FC = () => {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [quizFeedback, setQuizFeedback] = useState<{
    status: 'idle' | 'correct' | 'wrong';
    message: string;
  }>({ status: 'idle', message: '' });

  const numbers = [
    {
      num: '15',
      name: 'Le SAMU',
      role: 'Urgences Médicales',
      desc: 'Pour une personne blessée gravement, inconsciente ou qui a du mal à respirer.',
      badge: 'bg-rose-100 text-rose-900 border-rose-300',
      numBg: 'bg-rose-500 text-white',
    },
    {
      num: '18',
      name: 'Les Sapeurs-Pompiers',
      role: 'Incendies et Secours',
      desc: 'Pour un départ de feu, une fuite de gaz, une inondation ou un accident de la route.',
      badge: 'bg-orange-100 text-orange-900 border-orange-300',
      numBg: 'bg-orange-600 text-white',
    },
    {
      num: '112',
      name: 'Numéro d’Urgence Européen',
      role: 'Partout en Europe',
      desc: 'Le numéro unique valable dans toute l’Union européenne, gratuit depuis n’importe quel téléphone.',
      badge: 'bg-blue-100 text-blue-900 border-blue-300',
      numBg: 'bg-blue-600 text-white',
    },
    {
      num: '114',
      name: 'Urgences par SMS',
      role: 'Personnes sourdes ou muettes',
      desc: 'Accessible par SMS ou visio pour toute personne qui ne peut pas parler ou entendre au téléphone.',
      badge: 'bg-emerald-100 text-emerald-900 border-emerald-300',
      numBg: 'bg-emerald-600 text-white',
    },
  ];

  const currentScenario = SCENARIOS[currentScenarioIndex];

  const handleAnswer = (choice: '15' | '18' | '112') => {
    if (choice === currentScenario.correctNum) {
      sound.playSuccess();
      try {
        confetti({
          particleCount: 50,
          spread: 50,
          origin: { y: 0.7 },
        });
      } catch {
        // ignore
      }
      setQuizFeedback({
        status: 'correct',
        message: currentScenario.explanation,
      });
    } else {
      sound.playError();
      const message = `Ce n'est pas le ${choice}. Réfléchis bien au type de danger et réessaie !`;
      setQuizFeedback({
        status: 'wrong',
        message,
      });
    }
  };

  const nextScenario = () => {
    setQuizFeedback({ status: 'idle', message: '' });
    setCurrentScenarioIndex((prev) => (prev + 1) % SCENARIOS.length);
  };

  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-6 py-2">
      {/* Header */}
      <div className="bg-white rounded-2xl border border-rose-200 p-5 shadow-xs flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-rose-500 text-white flex items-center justify-center text-2xl shrink-0 shadow-xs">
          ☎️
        </div>
        <div>
          <h2 className="font-['Outfit'] font-bold text-slate-900 text-xl sm:text-2xl">
            Les Numéros d'Urgence à Connaître par Cœur
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            En France, ces numéros sont <strong>gratuits</strong> et fonctionnent 24h/24, même sur un téléphone portable verrouillé sans code.
          </p>
        </div>
      </div>

      {/* Grid of the 4 Essential Numbers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {numbers.map((item) => (
          <div
            key={item.num}
            className={`rounded-2xl border p-4 sm:p-5 flex items-start gap-4 bg-white shadow-2xs hover:shadow-xs transition-shadow`}
          >
            <div
              className={`w-14 h-14 rounded-2xl ${item.numBg} flex items-center justify-center font-['Outfit'] font-black text-2xl shrink-0 shadow-sm`}
            >
              {item.num}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between gap-1">
                <span className="font-['Outfit'] font-bold text-slate-900 text-base">
                  {item.name}
                </span>
              </div>
              <span className="text-xs font-semibold text-rose-700 block mt-0.5">
                {item.role}
              </span>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* How to make an emergency call */}
      <div className="bg-white rounded-2xl border border-amber-200 p-5 shadow-xs">
        <h3 className="font-['Outfit'] font-bold text-slate-900 text-base sm:text-lg flex items-center gap-2 mb-3">
          <ShieldAlert className="w-5 h-5 text-amber-600" />
          <span>Le message d'alerte : Les 3 règles d'or au téléphone</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs sm:text-sm">
          <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-950">
            <span className="font-bold block text-amber-900 mb-1">1. Où je suis ?</span>
            Donne ton adresse exacte (numéro, rue, ville, étage, code d'entrée).
          </div>
          <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-950">
            <span className="font-bold block text-amber-900 mb-1">2. Que s'est-il passé ?</span>
            Explique calmement s'il y a un feu, une chute ou une personne blessée.
          </div>
          <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-950">
            <span className="font-bold block text-amber-900 mb-1">3. Ne raccroche pas !</span>
            Attends toujours que les secours te disent de raccrocher le téléphone.
          </div>
        </div>
      </div>

      {/* Interactive Quiz Mini-Game */}
      <div className="bg-gradient-to-r from-amber-500/10 via-rose-500/10 to-amber-500/10 border-2 border-amber-300 rounded-2xl p-5 shadow-xs flex flex-col gap-4">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xl">🎯</span>
            <h3 className="font-['Outfit'] font-bold text-slate-900 text-base sm:text-lg">
              Mini-Défi CE1 : Quel numéro composes-tu ?
            </h3>
          </div>
          <span className="text-xs font-mono font-bold bg-white px-2 py-0.5 rounded-full border border-amber-200 text-slate-700">
            Situation {currentScenarioIndex + 1}/{SCENARIOS.length}
          </span>
        </div>

        <div className="bg-white rounded-xl p-4 border border-amber-200 shadow-2xs">
          <p className="font-semibold text-slate-900 text-sm sm:text-base">
            « {currentScenario.situation} »
          </p>
        </div>

        {/* Buttons to dial */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => handleAnswer('15')}
            className="px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-['Outfit'] font-black text-xl shadow-xs transition-transform active:scale-95 flex items-center gap-2 cursor-pointer"
          >
            <PhoneCall className="w-5 h-5" />
            <span>Appeler le 15</span>
          </button>
          <button
            onClick={() => handleAnswer('18')}
            className="px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-['Outfit'] font-black text-xl shadow-xs transition-transform active:scale-95 flex items-center gap-2 cursor-pointer"
          >
            <PhoneCall className="w-5 h-5" />
            <span>Appeler le 18</span>
          </button>
          <button
            onClick={() => handleAnswer('112')}
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-['Outfit'] font-black text-xl shadow-xs transition-transform active:scale-95 flex items-center gap-2 cursor-pointer"
          >
            <PhoneCall className="w-5 h-5" />
            <span>Appeler le 112</span>
          </button>
        </div>

        {/* Feedback message */}
        {quizFeedback.status !== 'idle' && (
          <div
            className={`rounded-xl p-3 flex items-start gap-2.5 text-xs sm:text-sm animate-in fade-in ${
              quizFeedback.status === 'correct'
                ? 'bg-emerald-100 border border-emerald-300 text-emerald-950'
                : 'bg-rose-100 border border-rose-300 text-rose-950'
            }`}
          >
            {quizFeedback.status === 'correct' ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-5 h-5 text-rose-700 shrink-0 mt-0.5" />
            )}
            <div className="flex-1">
              <p className="font-semibold">{quizFeedback.message}</p>
              {quizFeedback.status === 'correct' && (
                <button
                  onClick={nextScenario}
                  className="mt-2 text-xs font-bold bg-emerald-700 text-white px-3 py-1 rounded-lg hover:bg-emerald-800 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Situation suivante</span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
