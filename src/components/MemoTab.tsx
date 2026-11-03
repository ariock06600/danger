import React from 'react';
import { Footprints, Flame, Scissors, Zap, AlertTriangle, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const MemoTab: React.FC = () => {
  const sections = [
    {
      title: '1. Éviter les chutes dans la maison',
      icon: <Footprints className="w-5 h-5 text-amber-600" />,
      color: 'bg-amber-50 border-amber-200 text-amber-950',
      tagColor: 'bg-amber-200 text-amber-900',
      rules: [
        "Dans l'escalier, on tient toujours la rampe et on ne court jamais.",
        "On ne laisse aucun jouet, livre ou ballon traîner sur les marches.",
        "On ne grimpe jamais sur une chaise ou une table près d'une fenêtre ouverte.",
        "On vérifie que les petits tapis ont une semelle antidérapante.",
      ],
      ttsText: "Pour éviter les chutes : tiens la rampe dans l'escalier, range tes jouets pour ne pas trébucher, et ne grimpe jamais près d'une fenêtre ouverte !",
    },
    {
      title: '2. Se protéger du feu et des brûlures',
      icon: <Flame className="w-5 h-5 text-orange-600" />,
      color: 'bg-orange-50 border-orange-200 text-orange-950',
      tagColor: 'bg-orange-200 text-orange-900',
      rules: [
        "La cheminée ou le poêle doit toujours avoir une grille de protection (pare-feu).",
        "On ne s'approche jamais trop près des flammes ou des braises chaudes.",
        "Dans la cuisine, les queues de casseroles doivent être tournées vers l'intérieur.",
        "L'eau chaude du robinet peut brûler : on ouvre toujours l'eau froide d'abord.",
      ],
      ttsText: "Pour éviter les brûlures : ne t'approche jamais du feu sans pare-feu et fais attention aux casseroles chaudes dans la cuisine !",
    },
    {
      title: '3. Attention aux objets coupants',
      icon: <Scissors className="w-5 h-5 text-rose-600" />,
      color: 'bg-rose-50 border-rose-200 text-rose-950',
      tagColor: 'bg-rose-200 text-rose-900',
      rules: [
        "En classe ou à la maison, les enfants utilisent des ciseaux à bouts ronds.",
        "On referme toujours ses ciseaux après s'en être servi.",
        "On ne laisse pas traîner de ciseaux, couteaux ou punaises sur le bord des meubles.",
        "Quand on transporte des ciseaux, on tient les pointes fermées dans sa main.",
      ],
      ttsText: "Pour éviter les coupures : utilise des ciseaux à bouts ronds, referme-les bien et range-les dans une trousse ou un tiroir !",
    },
    {
      title: '4. Dompter le danger de l’électricité',
      icon: <Zap className="w-5 h-5 text-yellow-600" />,
      color: 'bg-yellow-50 border-yellow-200 text-yellow-950',
      tagColor: 'bg-yellow-200 text-yellow-900',
      rules: [
        "Ne jamais toucher une prise ou un appareil électrique avec les mains mouillées.",
        "Ne jamais tirer sur le fil électrique pour le débrancher : on tire doucement sur la prise.",
        "Ne jamais brancher trop d'appareils sur la même multiprise (risque de surchauffe).",
        "Ne jamais introduire d'objet métallique dans les trous d'une prise de courant.",
      ],
      ttsText: "Attention à l'électricité : ne touche jamais une prise avec les mains mouillées et ne tire pas sur les fils électriques !",
    },
    {
      title: '5. Ne rien avaler d’inconnu (Intoxications)',
      icon: <AlertTriangle className="w-5 h-5 text-purple-600" />,
      color: 'bg-purple-50 border-purple-200 text-purple-950',
      tagColor: 'bg-purple-200 text-purple-900',
      rules: [
        "Ne bois jamais dans une bouteille ou un verre si tu ne sais pas ce qu'il y a dedans.",
        "Les produits de nettoyage et la javel sont des poisons mortels : on n'y touche pas.",
        "Les médicaments ne sont pas des bonbons : seul un adulte peut t'en donner.",
        "Ne mets jamais de petites piles boutons dans la bouche : c'est très grave.",
      ],
      ttsText: "Contre les intoxications : ne bois jamais un liquide inconnu et ne prends jamais de médicaments sans un adulte !",
    },
    {
      title: '6. Sécurité au jardin et autour de l’eau',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
      color: 'bg-emerald-50 border-emerald-200 text-emerald-950',
      tagColor: 'bg-emerald-200 text-emerald-900',
      rules: [
        "La piscine doit toujours avoir une barrière fermée : on ne s'y baigne jamais sans un adulte.",
        "On reste à bonne distance du barbecue allumé et de la tondeuse à gazon.",
        "On attache toujours son casque avant de rouler à vélo ou à trottinette.",
        "On ne cueille ni ne mange jamais de baies ou de champignons du jardin.",
      ],
      ttsText: "Au jardin : surveille les points d'eau, garde ton casque à vélo, éloigne-toi du barbecue et ne mange pas les baies sauvages !",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-6 py-2">
      {/* Intro Header */}
      <div className="bg-white rounded-2xl border border-amber-200 p-5 shadow-xs flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center text-2xl shrink-0 shadow-xs">
          📖
        </div>
        <div>
          <h2 className="font-['Outfit'] font-bold text-slate-900 text-xl sm:text-2xl">
            La Fiche Réflexes de l'Inspecteur Sécurité
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Au cycle 2 (CE1), apprendre à repérer les dangers permet d'éviter les accidents à la maison et au jardin. Voici les 6 grandes règles d'or à retenir et à partager avec ta famille !
          </p>
        </div>
      </div>

      {/* Cards list */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sections.map((section, idx) => (
          <div
            key={idx}
            className={`rounded-2xl border p-5 flex flex-col justify-between shadow-2xs ${section.color}`}
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="p-2 rounded-xl bg-white shadow-2xs">{section.icon}</span>
                <h3 className="font-['Outfit'] font-bold text-base sm:text-lg">
                  {section.title}
                </h3>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm">
                {section.rules.map((rule, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-slate-500" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Reminder footer */}
      <div className="bg-amber-100/70 border border-amber-300 rounded-2xl p-4 text-xs sm:text-sm text-amber-950 flex items-center gap-3">
        <ShieldCheck className="w-6 h-6 text-amber-700 shrink-0" />
        <p>
          <strong>Règle d'or :</strong> En cas de danger ou si tu as un doute, préviens toujours immédiatement un adulte (papa, maman, maître ou maîtresse) !
        </p>
      </div>
    </div>
  );
};
