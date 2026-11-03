export interface DangerOption {
  id: string;
  label: string;
  iconEmoji: string;
}

export const DANGER_OPTIONS: DangerOption[] = [
  { id: 'brulure', label: 'Brûlure', iconEmoji: '🔥' },
  { id: 'chute', label: 'Chute', iconEmoji: '⚠️' },
  { id: 'coupure', label: 'Coupure', iconEmoji: '✂️' },
  { id: 'defenestration', label: 'Défenestration (chute par la fenêtre)', iconEmoji: '🪟' },
  { id: 'ecrasement', label: 'Écrasement', iconEmoji: '🚗' },
  { id: 'electrocution', label: 'Électrocution', iconEmoji: '⚡' },
  { id: 'etouffement', label: 'Étouffement', iconEmoji: '🫁' },
  { id: 'intoxication', label: 'Intoxication', iconEmoji: '☠️' },
  { id: 'morsure', label: 'Morsure', iconEmoji: '🐕' },
  { id: 'noyade', label: 'Noyade', iconEmoji: '💧' },
  { id: 'piqure', label: 'Piqûre (insecte)', iconEmoji: '🐝' },
];

export interface DangerItem {
  id: string;
  dangerName: string; // The primary danger name: "Chute", "Électrocution", "Brûlure"...
  correctOptionId: string; // id in DANGER_OPTIONS
  acceptedOptionIds?: string[]; // alternative accepted option ids
  locationDescription: string;
  coords: {
    x: number;
    y: number;
    radius: number;
  };
  highlightBox: {
    left: number;
    top: number;
    width: number;
    height: number;
  };
  hint: string;
  explanation: string;
  goodHabit: string;
  emergencyNumber: {
    num: string;
    label: string;
  };
}

// Exercise 1: Le Salon
export const SALON_DANGERS_DATA: DangerItem[] = [
  {
    id: 'escalier_jouets',
    dangerName: 'Chute',
    correctOptionId: 'chute',
    locationDescription: "Sur les marches de l'escalier",
    coords: {
      x: 9,
      y: 50,
      radius: 7,
    },
    highlightBox: {
      left: 3,
      top: 34,
      width: 12,
      height: 33,
    },
    hint: "Regarde les jouets qui traînent sur les marches en bois...",
    explanation: "Si quelqu'un marche sur un patin ou une voiture, il peut glisser et tomber dans l'escalier.",
    goodHabit: "Toujours ranger ses jouets pour laisser les escaliers dégagés.",
    emergencyNumber: {
      num: '15',
      label: 'SAMU (en cas de blessure ou de fracture)',
    },
  },
  {
    id: 'ballon_tapis',
    dangerName: 'Chute',
    correctOptionId: 'chute',
    locationDescription: "Au pied de l'escalier",
    coords: {
      x: 9,
      y: 77,
      radius: 6,
    },
    highlightBox: {
      left: 1,
      top: 67,
      width: 15,
      height: 22,
    },
    hint: "Regarde le ballon et le tapis en bas de l'escalier...",
    explanation: "En descendant la dernière marche, on peut glisser sur le tapis ou rouler sur le ballon et chuter.",
    goodHabit: "Garder le bas des marches bien net et fixer les tapis.",
    emergencyNumber: {
      num: '15',
      label: 'SAMU (Urgences médicales)',
    },
  },
  {
    id: 'fenetre_ouverte',
    dangerName: 'Défenestration',
    correctOptionId: 'defenestration',
    acceptedOptionIds: ['defenestration', 'chute'],
    locationDescription: "À la fenêtre ouverte",
    coords: {
      x: 26,
      y: 35,
      radius: 7,
    },
    highlightBox: {
      left: 19,
      top: 20,
      width: 15,
      height: 34,
    },
    hint: "Regarde la chaise placée sous la fenêtre grande ouverte...",
    explanation: "Grimper sur une chaise près d'une fenêtre ouverte peut provoquer une chute dans le vide.",
    goodHabit: "Ne jamais grimper sur un meuble sous une fenêtre et ne jamais se pencher.",
    emergencyNumber: {
      num: '18',
      label: 'Pompiers (Secours d’urgence)',
    },
  },
  {
    id: 'cheminee_feu',
    dangerName: 'Brûlure',
    correctOptionId: 'brulure',
    locationDescription: "Devant le feu de cheminée",
    coords: {
      x: 47,
      y: 49,
      radius: 7,
    },
    highlightBox: {
      left: 41,
      top: 40,
      width: 13,
      height: 22,
    },
    hint: "Regarde les flammes allumées sans vitre ni grille...",
    explanation: "Sans pare-feu, une étincelle ou un geste trop près des flammes peut provoquer de graves brûlures.",
    goodHabit: "Toujours mettre un pare-feu devant la cheminée et rester à distance.",
    emergencyNumber: {
      num: '18',
      label: 'Pompiers (en cas de feu ou de brûlure)',
    },
  },
  {
    id: 'table_bouteille',
    dangerName: 'Intoxication',
    correctOptionId: 'intoxication',
    locationDescription: "Sur la table basse",
    coords: {
      x: 47,
      y: 64,
      radius: 6,
    },
    highlightBox: {
      left: 42,
      top: 56,
      width: 11,
      height: 18,
    },
    hint: "Regarde la bouteille blanche et le verre posés sur la table...",
    explanation: "On ne sait pas ce que contient cette bouteille. Boire un produit inconnu peut provoquer une intoxication grave.",
    goodHabit: "Ne jamais boire un liquide inconnu sans l'autorisation d'un adulte.",
    emergencyNumber: {
      num: '15',
      label: 'SAMU ou Centre Antipoison',
    },
  },
  {
    id: 'ciseaux_meuble',
    dangerName: 'Coupure',
    correctOptionId: 'coupure',
    locationDescription: "Sur le meuble en bois",
    coords: {
      x: 80,
      y: 47,
      radius: 6,
    },
    highlightBox: {
      left: 74,
      top: 42,
      width: 12,
      height: 12,
    },
    hint: "Regarde les ciseaux pointus posés ouverts sur le bord...",
    explanation: "Des ciseaux pointus ouverts sur le rebord peuvent tomber ou couper les doigts.",
    goodHabit: "Toujours refermer les ciseaux et les ranger dans un tiroir ou une trousse.",
    emergencyNumber: {
      num: '15',
      label: 'SAMU (Urgences médicales)',
    },
  },
  {
    id: 'multiprise_fils',
    dangerName: 'Électrocution',
    correctOptionId: 'electrocution',
    locationDescription: "Au sol près de la prise murale",
    coords: {
      x: 79,
      y: 84,
      radius: 8,
    },
    highlightBox: {
      left: 65,
      top: 69,
      width: 25,
      height: 27,
    },
    hint: "Regarde la multiprise surchargée et les fils électriques au sol...",
    explanation: "Tirer sur les fils ou surcharger une multiprise peut provoquer un choc électrique ou un incendie.",
    goodHabit: "Ne jamais tirer sur un fil électrique et ne pas surcharger les prises.",
    emergencyNumber: {
      num: '18',
      label: 'Pompiers (Incendie ou accident électrique)',
    },
  },
  {
    id: 'chaton_marche',
    dangerName: 'Chute',
    correctOptionId: 'chute',
    locationDescription: "En marchant sans regarder devant soi",
    coords: {
      x: 94,
      y: 62,
      radius: 6,
    },
    highlightBox: {
      left: 88,
      top: 48,
      width: 11,
      height: 28,
    },
    hint: "Regarde quelqu'un qui marche en lisant la tête baissée...",
    explanation: "Marcher en lisant sans regarder ses pieds peut faire trébucher dans les obstacles et provoquer une chute.",
    goodHabit: "Pour lire une histoire, on s'installe tranquillement assis dans le fauteuil.",
    emergencyNumber: {
      num: '15',
      label: 'SAMU (Urgences médicales)',
    },
  },
];

// Exercise 2: La Cuisine
export const KITCHEN_DANGERS_DATA: DangerItem[] = [
  {
    id: 'cuisine_fer_repasser',
    dangerName: 'Brûlure',
    correctOptionId: 'brulure',
    acceptedOptionIds: ['brulure', 'electrocution', 'chute'],
    locationDescription: "Sur la table à repasser",
    coords: {
      x: 16,
      y: 56,
      radius: 8,
    },
    highlightBox: {
      left: 4,
      top: 48,
      width: 20,
      height: 46,
    },
    hint: "Regarde le fer à repasser branché qui dégage de la vapeur chaude...",
    explanation: "Un fer à repasser branché est très chaud. Tirer sur le fil ou toucher la semelle peut provoquer une grave brûlure.",
    goodHabit: "Toujours débrancher le fer après usage et ne jamais laisser pendre le cordon d'alimentation.",
    emergencyNumber: {
      num: '18',
      label: 'Pompiers (en cas de brûlure grave)',
    },
  },
  {
    id: 'cuisine_tiroir_ouvert',
    dangerName: 'Chute',
    correctOptionId: 'chute',
    locationDescription: "En bas du meuble colonne",
    coords: {
      x: 25,
      y: 77,
      radius: 6,
    },
    highlightBox: {
      left: 22,
      top: 69,
      width: 7,
      height: 21,
    },
    hint: "Regarde en bas du grand meuble orange...",
    explanation: "Un tiroir laissé grand ouvert au ras du sol peut faire trébucher quelqu'un et provoquer une chute.",
    goodHabit: "Toujours repousser et refermer les tiroirs après s'en être servi.",
    emergencyNumber: {
      num: '15',
      label: 'SAMU (Urgences médicales)',
    },
  },
  {
    id: 'cuisine_cocotte_minute',
    dangerName: 'Brûlure',
    correctOptionId: 'brulure',
    locationDescription: "Devant la fenêtre",
    coords: {
      x: 48,
      y: 52,
      radius: 6,
    },
    highlightBox: {
      left: 45,
      top: 47,
      width: 7,
      height: 12,
    },
    hint: "Regarde l'appareil qui fume sous pression au fond...",
    explanation: "La cocotte-minute contient de la vapeur sous pression très chaude qui peut provoquer de graves brûlures.",
    goodHabit: "Ne jamais toucher ou tenter d'ouvrir une cocotte-minute chaude sans un adulte.",
    emergencyNumber: {
      num: '18',
      label: 'Pompiers (en cas de brûlure)',
    },
  },
  {
    id: 'cuisine_nappe_table',
    dangerName: 'Coupure',
    correctOptionId: 'coupure',
    acceptedOptionIds: ['coupure', 'chute'],
    locationDescription: "Sur la table avec la nappe qui pend",
    coords: {
      x: 46,
      y: 69,
      radius: 8,
    },
    highlightBox: {
      left: 39,
      top: 60,
      width: 16,
      height: 19,
    },
    hint: "Regarde la nappe rose qui dépasse avec la vaisselle dessus...",
    explanation: "Si quelqu'un tire sur la nappe qui pend, les verres et assiettes peuvent tomber et se briser en morceaux coupants.",
    goodHabit: "Ne jamais s'agripper à une nappe de table pour se relever.",
    emergencyNumber: {
      num: '15',
      label: 'SAMU (Urgences médicales)',
    },
  },
  {
    id: 'cuisine_casserole_poignee',
    dangerName: 'Brûlure',
    correctOptionId: 'brulure',
    locationDescription: "Sur la plaque de cuisson",
    coords: {
      x: 61,
      y: 56,
      radius: 6,
    },
    highlightBox: {
      left: 58,
      top: 51,
      width: 7,
      height: 11,
    },
    hint: "Regarde la queue de la casserole sur la plaque allumée...",
    explanation: "La poignée de la casserole dépasse vers l'extérieur. On peut l'accrocher en passant et renverser du liquide bouillant.",
    goodHabit: "Toujours orienter la poignée des casseroles vers l'intérieur de la cuisinière.",
    emergencyNumber: {
      num: '18',
      label: 'Pompiers (en cas de brûlure)',
    },
  },
  {
    id: 'cuisine_grille_pain_eau',
    dangerName: 'Électrocution',
    correctOptionId: 'electrocution',
    locationDescription: "Près de l'évier",
    coords: {
      x: 72,
      y: 60,
      radius: 5,
    },
    highlightBox: {
      left: 69,
      top: 56,
      width: 6,
      height: 10,
    },
    hint: "Regarde l'appareil électrique branché tout près de l'évier...",
    explanation: "L'eau et l'électricité sont incompatibles. Un appareil électrique branché près de l'évier peut provoquer une électrocution mortelle.",
    goodHabit: "Garder tous les appareils électriques à bonne distance des points d'eau.",
    emergencyNumber: {
      num: '18',
      label: 'Pompiers (Accident électrique)',
    },
  },
  {
    id: 'cuisine_marmite_bouillante',
    dangerName: 'Brûlure',
    correctOptionId: 'brulure',
    locationDescription: "À côté de l'évier",
    coords: {
      x: 77,
      y: 58,
      radius: 6,
    },
    highlightBox: {
      left: 73,
      top: 52,
      width: 8,
      height: 14,
    },
    hint: "Regarde le grand faitout fumant posé sur le plan de travail...",
    explanation: "Cette marmite remplie d'eau bouillante dégage de la vapeur et peut se renverser sur un enfant.",
    goodHabit: "Ne jamais s'approcher d'un plat qui sort du feu et demander l'aide d'un adulte.",
    emergencyNumber: {
      num: '18',
      label: 'Pompiers (en cas de brûlure)',
    },
  },
  {
    id: 'cuisine_produits_entretien',
    dangerName: 'Intoxication',
    correctOptionId: 'intoxication',
    locationDescription: "Dans le meuble sous l'évier",
    coords: {
      x: 85,
      y: 76,
      radius: 6,
    },
    highlightBox: {
      left: 82,
      top: 68,
      width: 8,
      height: 16,
    },
    hint: "Regarde les bouteilles de produits ménagers dans le placard ouvert...",
    explanation: "L'eau de javel et les nettoyants sont des produits chimiques toxiques qui peuvent provoquer une intoxication grave.",
    goodHabit: "Ranger les produits ménagers en hauteur et verrouiller les placards avec une sécurité enfant.",
    emergencyNumber: {
      num: '15',
      label: 'SAMU ou Centre Antipoison',
    },
  },
];

// Exercise 3: La Chambre
export const BEDROOM_DANGERS_DATA: DangerItem[] = [
  {
    id: 'chambre_lampe_tissu',
    dangerName: 'Brûlure',
    correctOptionId: 'brulure',
    acceptedOptionIds: ['brulure'],
    locationDescription: "Sur la table de chevet",
    coords: {
      x: 4,
      y: 66,
      radius: 6,
    },
    highlightBox: {
      left: 1,
      top: 57,
      width: 7,
      height: 20,
    },
    hint: "Regarde le vêtement posé sur la lampe de chevet allumée...",
    explanation: "Poser un tissu sur une lampe allumée peut faire surchauffer l'ampoule et provoquer une brûlure ou un incendie.",
    goodHabit: "Ne jamais rien poser sur une lampe allumée et toujours éteindre la lumière avant de dormir.",
    emergencyNumber: {
      num: '18',
      label: 'Pompiers (en cas de départ de feu)',
    },
  },
  {
    id: 'chambre_etagere_livres',
    dangerName: 'Chute',
    correctOptionId: 'chute',
    locationDescription: "Sur l'étagère au-dessus du lit",
    coords: {
      x: 14.5,
      y: 35,
      radius: 7,
    },
    highlightBox: {
      left: 10,
      top: 22,
      width: 10,
      height: 20,
    },
    hint: "Regarde la lourde pile de livres qui penche au-dessus de l'oreiller...",
    explanation: "Une pile de livres lourds mal empilée au-dessus du lit peut chuter sur la tête pendant le sommeil.",
    goodHabit: "Ranger les livres lourds dans un meuble bas et ne rien surcharger au-dessus de sa tête.",
    emergencyNumber: {
      num: '15',
      label: 'SAMU (Urgences médicales)',
    },
  },
  {
    id: 'chambre_legos_sol',
    dangerName: 'Chute',
    correctOptionId: 'chute',
    acceptedOptionIds: ['chute', 'coupure'],
    locationDescription: "Au sol devant le coffre à jouets",
    coords: {
      x: 27,
      y: 88,
      radius: 5,
    },
    highlightBox: {
      left: 24,
      top: 84,
      width: 6,
      height: 9,
    },
    hint: "Regarde les petites briques de jeu éparpillées sur le tapis...",
    explanation: "Marcher pieds nus sur des briques dures peut faire glisser, trébucher et blesser la plante des pieds.",
    goodHabit: "Toujours rassembler et ranger ses petites briques de jeu dans un bac fermé.",
    emergencyNumber: {
      num: '15',
      label: 'SAMU (en cas de blessure)',
    },
  },
  {
    id: 'chambre_patin_sol',
    dangerName: 'Chute',
    correctOptionId: 'chute',
    locationDescription: "Au sol à côté de la commode",
    coords: {
      x: 36,
      y: 69,
      radius: 5,
    },
    highlightBox: {
      left: 34,
      top: 63,
      width: 5,
      height: 13,
    },
    hint: "Regarde le patin à roulettes laissé au sol près du meuble...",
    explanation: "Poser le pied par inadvertance sur un patin à roulettes peut faire glisser brutalement et provoquer une chute.",
    goodHabit: "Toujours ranger ses rollers et patins dans un placard après utilisation.",
    emergencyNumber: {
      num: '15',
      label: 'SAMU (Urgences médicales)',
    },
  },
  {
    id: 'chambre_fenetre_commode',
    dangerName: 'Défenestration',
    correctOptionId: 'defenestration',
    acceptedOptionIds: ['defenestration', 'chute'],
    locationDescription: "À la fenêtre au-dessus de la commode",
    coords: {
      x: 43,
      y: 39,
      radius: 8,
    },
    highlightBox: {
      left: 38,
      top: 26,
      width: 11,
      height: 27,
    },
    hint: "Regarde la commode placée juste sous la fenêtre grande ouverte...",
    explanation: "Grimper sur les tiroirs de la commode sous la fenêtre ouverte peut provoquer une chute très grave dans le vide.",
    goodHabit: "Ne jamais placer de meuble sous une fenêtre et ne jamais grimper pour regarder dehors.",
    emergencyNumber: {
      num: '18',
      label: 'Pompiers (Secours d’urgence)',
    },
  },
  {
    id: 'chambre_lit_mezzanine',
    dangerName: 'Chute',
    correctOptionId: 'chute',
    locationDescription: "Le lit mezzanine en hauteur",
    coords: {
      x: 58,
      y: 56,
      radius: 9,
    },
    highlightBox: {
      left: 51,
      top: 27,
      width: 16,
      height: 58,
    },
    hint: "Regarde la hauteur du lit et l'échelle en bois...",
    explanation: "S'agiter ou chahuter sur un lit en hauteur peut faire basculer et provoquer une chute de plus d'un mètre cinquante.",
    goodHabit: "Ne jamais sauter sur un lit en hauteur et toujours descendre marche par marche par l'échelle.",
    emergencyNumber: {
      num: '15',
      label: 'SAMU (Urgences médicales)',
    },
  },
  {
    id: 'chambre_sac_plastique',
    dangerName: 'Étouffement',
    correctOptionId: 'etouffement',
    locationDescription: "Sur le porte-manteau mural",
    coords: {
      x: 82,
      y: 51,
      radius: 6,
    },
    highlightBox: {
      left: 79,
      top: 40,
      width: 6,
      height: 18,
    },
    hint: "Regarde le sac plastique blanc suspendu au porte-manteau...",
    explanation: "Mettre un sac en plastique sur la tête ou le visage peut empêcher de respirer et provoquer un étouffement très grave.",
    goodHabit: "Ne jamais jouer avec un sac en plastique et le ranger hors de portée des jeunes enfants.",
    emergencyNumber: {
      num: '15',
      label: 'SAMU (Urgences médicales)',
    },
  },
  {
    id: 'chambre_flechettes_porte',
    dangerName: 'Coupure',
    correctOptionId: 'coupure',
    locationDescription: "Sur la porte de la chambre",
    coords: {
      x: 93,
      y: 44,
      radius: 7,
    },
    highlightBox: {
      left: 89,
      top: 28,
      width: 8,
      height: 60,
    },
    hint: "Regarde la cible et les fléchettes pointues fixées sur la porte...",
    explanation: "Lancer des fléchettes pointues vers une porte peut blesser quelqu'un qui entre ou couper la peau.",
    goodHabit: "Préférer des fléchettes à ventouses ou magnétiques et ne jamais jouer en direction d'une porte.",
    emergencyNumber: {
      num: '15',
      label: 'SAMU (en cas de blessure)',
    },
  },
];

// Exercise 4: La Salle de Bain
export const BATHROOM_DANGERS_DATA: DangerItem[] = [
  {
    id: 'salle_de_bain_medicaments_lavabo',
    dangerName: 'Intoxication',
    correctOptionId: 'intoxication',
    locationDescription: "Sur le meuble à côté du lavabo",
    coords: {
      x: 9,
      y: 51,
      radius: 6,
    },
    highlightBox: {
      left: 7,
      top: 46,
      width: 5,
      height: 9,
    },
    hint: "Regarde la boîte jaune et la plaquette de pilules posées à gauche du lavabo...",
    explanation: "Prendre des médicaments sans savoir ce que c'est peut provoquer une intoxication très grave.",
    goodHabit: "Ne jamais toucher ni avaler de comprimés sans l'accord et la présence d'un adulte.",
    emergencyNumber: {
      num: '15',
      label: 'SAMU ou Centre Antipoison',
    },
  },
  {
    id: 'salle_de_bain_rasoir',
    dangerName: 'Coupure',
    correctOptionId: 'coupure',
    locationDescription: "Sur le rebord du lavabo",
    coords: {
      x: 16,
      y: 52,
      radius: 5,
    },
    highlightBox: {
      left: 14,
      top: 50,
      width: 4,
      height: 6,
    },
    hint: "Regarde le rasoir à main posé juste à côté du lavabo...",
    explanation: "La lame d'un rasoir mécanique est extrêmement tranchante et peut provoquer une coupure profonde aux doigts.",
    goodHabit: "Toujours laisser les rasoirs et les objets tranchants hors de portée des enfants.",
    emergencyNumber: {
      num: '15',
      label: 'SAMU (en cas de coupure ou saignement)',
    },
  },
  {
    id: 'salle_de_bain_seche_cheveux',
    dangerName: 'Électrocution',
    correctOptionId: 'electrocution',
    acceptedOptionIds: ['electrocution', 'brulure'],
    locationDescription: "Sur le meuble bas tout près de l'eau",
    coords: {
      x: 35.5,
      y: 56,
      radius: 6,
    },
    highlightBox: {
      left: 32.5,
      top: 52,
      width: 6.5,
      height: 8.5,
    },
    hint: "Regarde le sèche-cheveux branché posé tout près de la baignoire...",
    explanation: "Un appareil électrique branché à côté de l'eau peut tomber dedans et provoquer une électrocution mortelle.",
    goodHabit: "Toujours débrancher les appareils électriques après usage et les éloigner de la baignoire.",
    emergencyNumber: {
      num: '18',
      label: 'Pompiers (Accident électrique)',
    },
  },
  {
    id: 'salle_de_bain_flaque_eau',
    dangerName: 'Chute',
    correctOptionId: 'chute',
    locationDescription: "Au sol sur le carrelage",
    coords: {
      x: 40,
      y: 84,
      radius: 7,
    },
    highlightBox: {
      left: 35,
      top: 75,
      width: 10,
      height: 18,
    },
    hint: "Regarde la grande flaque d'eau sur le carrelage en sortant du bain...",
    explanation: "Marcher sur du carrelage mouillé pieds nus peut faire glisser brutalement et provoquer une lourde chute.",
    goodHabit: "Toujours mettre un tapis de bain antidérapant et essuyer l'eau tombée au sol.",
    emergencyNumber: {
      num: '15',
      label: 'SAMU (Urgences médicales)',
    },
  },
  {
    id: 'salle_de_bain_baignoire_eau',
    dangerName: 'Noyade',
    correctOptionId: 'noyade',
    locationDescription: "Dans la baignoire remplie d'eau",
    coords: {
      x: 48,
      y: 49,
      radius: 8,
    },
    highlightBox: {
      left: 39,
      top: 44,
      width: 14,
      height: 11,
    },
    hint: "Regarde la baignoire remplie d'eau avec les jouets sans adulte...",
    explanation: "Une baignoire pleine d'eau laissée sans surveillance peut provoquer une noyade en quelques secondes, même dans peu d'eau.",
    goodHabit: "Ne jamais rester seul dans son bain et toujours vider la baignoire après utilisation.",
    emergencyNumber: {
      num: '18',
      label: 'Pompiers ou SAMU (Urgence vitale)',
    },
  },
  {
    id: 'salle_de_bain_robinet_eau_chaude',
    dangerName: 'Brûlure',
    correctOptionId: 'brulure',
    locationDescription: "Au robinet de la baignoire",
    coords: {
      x: 57.5,
      y: 46,
      radius: 5,
    },
    highlightBox: {
      left: 55,
      top: 42,
      width: 5,
      height: 9,
    },
    hint: "Regarde le robinet d'où s'échappe de la vapeur très chaude...",
    explanation: "L'eau bouillante qui coule directement du robinet peut provoquer de graves brûlures sur la peau.",
    goodHabit: "Toujours vérifier la température de l'eau avec le coude ou un thermomètre avant d'entrer.",
    emergencyNumber: {
      num: '18',
      label: 'Pompiers (en cas de brûlure)',
    },
  },
  {
    id: 'salle_de_bain_radiateur',
    dangerName: 'Électrocution',
    correctOptionId: 'electrocution',
    acceptedOptionIds: ['electrocution', 'brulure'],
    locationDescription: "Au sol branché près de l'eau",
    coords: {
      x: 55,
      y: 76,
      radius: 8,
    },
    highlightBox: {
      left: 48,
      top: 64,
      width: 14,
      height: 24,
    },
    hint: "Regarde le radiateur d'appoint branché au sol à côté de la flaque d'eau...",
    explanation: "Un radiateur mobile branché au sol près de l'eau peut provoquer une électrocution ou des brûlures par contact.",
    goodHabit: "Ne jamais brancher de radiateur électrique mobile dans une pièce d'eau sans surveillance.",
    emergencyNumber: {
      num: '18',
      label: 'Pompiers (Accident électrique)',
    },
  },
  {
    id: 'salle_de_bain_armoire_pharmacie',
    dangerName: 'Intoxication',
    correctOptionId: 'intoxication',
    acceptedOptionIds: ['intoxication', 'chute'],
    locationDescription: "L'armoire à pharmacie ouverte au mur",
    coords: {
      x: 76,
      y: 27,
      radius: 8,
    },
    highlightBox: {
      left: 70,
      top: 16,
      width: 12,
      height: 22,
    },
    hint: "Regarde l'armoire à pharmacie blanche ouverte avec des bouteilles et flacons...",
    explanation: "Une armoire à pharmacie ouverte permet d'attraper des produits toxiques qui peuvent provoquer une intoxication grave.",
    goodHabit: "Toujours fermer à clé l'armoire à pharmacie et la placer bien en hauteur.",
    emergencyNumber: {
      num: '15',
      label: 'SAMU ou Centre Antipoison',
    },
  },
];

// Exercise 5: Le Garage
export const GARAGE_DANGERS_DATA: DangerItem[] = [
  {
    id: 'garage_cisaille',
    dangerName: 'Coupure',
    correctOptionId: 'coupure',
    acceptedOptionIds: ['coupure'],
    locationDescription: "Sur le panneau d'outils (cisailles de jardin)",
    coords: {
      x: 9.2,
      y: 40,
      radius: 6,
    },
    highlightBox: {
      left: 7,
      top: 30,
      width: 4.5,
      height: 20,
    },
    hint: "Regarde les grandes cisailles suspendues sur le panneau perforé...",
    explanation: "Les cisailles de jardin sont lourdes et très tranchantes. Les manipuler peut provoquer une coupure profonde ou pincer les doigts.",
    goodHabit: "Ne jamais toucher aux outils de jardin tranchants et laisser les adultes s'en servir.",
    emergencyNumber: {
      num: '15',
      label: 'SAMU (en cas de coupure profonde ou saignement)',
    },
  },
  {
    id: 'garage_scie',
    dangerName: 'Coupure',
    correctOptionId: 'coupure',
    acceptedOptionIds: ['coupure'],
    locationDescription: "Sur le panneau d'outils (scie à main)",
    coords: {
      x: 15.5,
      y: 37,
      radius: 5.5,
    },
    highlightBox: {
      left: 14,
      top: 28,
      width: 3.5,
      height: 18,
    },
    hint: "Regarde la scie égoïne accrochée à côté du marteau...",
    explanation: "La lame dentée en métal sert à couper du bois épais et peut provoquer une coupure sévère si on la touche.",
    goodHabit: "Laisser les scies et les lames tranchantes accrochées bien en hauteur.",
    emergencyNumber: {
      num: '15',
      label: 'SAMU (Urgences médicales)',
    },
  },
  {
    id: 'garage_perceuse',
    dangerName: 'Électrocution',
    correctOptionId: 'electrocution',
    acceptedOptionIds: ['electrocution', 'coupure'],
    locationDescription: "Sur l'établi (perceuse branchée)",
    coords: {
      x: 9.5,
      y: 58,
      radius: 6,
    },
    highlightBox: {
      left: 4.5,
      top: 52,
      width: 9.5,
      height: 12,
    },
    hint: "Regarde l'outil électrique branché avec son fil sur la prise...",
    explanation: "Une perceuse branchée sur secteur présente un risque d'électrocution et peut blesser grièvement si le bouton de mise en marche est pressé.",
    goodHabit: "Toujours débrancher les appareils électriques d'atelier après usage et ne jamais toucher à la gâchette.",
    emergencyNumber: {
      num: '18',
      label: 'Pompiers (Accident électrique)',
    },
  },
  {
    id: 'garage_chiens',
    dangerName: 'Morsure',
    correctOptionId: 'morsure',
    acceptedOptionIds: ['morsure', 'coupure'],
    locationDescription: "Au sol (chiens en train de manger)",
    coords: {
      x: 18,
      y: 85,
      radius: 8,
    },
    highlightBox: {
      left: 9,
      top: 73,
      width: 18.5,
      height: 24,
    },
    hint: "Regarde les deux chiens en train de manger ensemble dans la gamelle...",
    explanation: "Déranger ou surprendre des chiens pendant leur repas peut provoquer une morsure grave car ils protègent instinctivement leur nourriture.",
    goodHabit: "Ne jamais s'approcher d'un animal qui mange ou qui dort, et ne jamais essayer de lui prendre sa gamelle.",
    emergencyNumber: {
      num: '15',
      label: 'SAMU (en cas de morsure ou blessure)',
    },
  },
  {
    id: 'garage_voiture',
    dangerName: 'Écrasement',
    correctOptionId: 'ecrasement',
    acceptedOptionIds: ['ecrasement', 'intoxication', 'chute'],
    locationDescription: "Au milieu du garage (la voiture)",
    coords: {
      x: 48.7,
      y: 59,
      radius: 9,
    },
    highlightBox: {
      left: 39,
      top: 41,
      width: 20,
      height: 37,
    },
    hint: "Regarde la voiture garée au milieu du garage...",
    explanation: "Une voiture qui manœuvre ou redémarre peut causer un écrasement grave. Faire tourner le moteur dans un garage fermé peut également dégager des gaz toxiques (risque d'asphyxie).",
    goodHabit: "Ne jamais jouer autour, devant ou derrière un véhicule dans le garage ou une allée.",
    emergencyNumber: {
      num: '15',
      label: 'SAMU ou Pompiers (Accident corporel)',
    },
  },
  {
    id: 'garage_bidon_essence',
    dangerName: 'Intoxication',
    correctOptionId: 'intoxication',
    acceptedOptionIds: ['intoxication', 'brulure'],
    locationDescription: "Au sol près de l'escabeau (bidon rouge)",
    coords: {
      x: 74,
      y: 82.5,
      radius: 5.5,
    },
    highlightBox: {
      left: 70,
      top: 76,
      width: 7.5,
      height: 13,
    },
    hint: "Regarde le bidon d'essence rouge posé au sol...",
    explanation: "Ce jerrican contient du carburant ou des produits chimiques qui peuvent provoquer une intoxication grave en cas d'ingestion ou d'inhalation, et peuvent s'enflammer.",
    goodHabit: "Ne jamais toucher ni ouvrir un bidon d'essence et le garder hermétiquement fermé hors de portée.",
    emergencyNumber: {
      num: '15',
      label: 'SAMU ou Centre Antipoison',
    },
  },
  {
    id: 'garage_escabeau',
    dangerName: 'Chute',
    correctOptionId: 'chute',
    acceptedOptionIds: ['chute'],
    locationDescription: "L'escabeau déplié",
    coords: {
      x: 80.8,
      y: 67,
      radius: 8,
    },
    highlightBox: {
      left: 75,
      top: 43,
      width: 11.5,
      height: 48,
    },
    hint: "Regarde l'escabeau métallique déplié sans personne pour le stabiliser...",
    explanation: "Grimper sur un escabeau ou le bousculer peut le faire basculer et provoquer une chute de plus d'un mètre sur le sol en béton.",
    goodHabit: "Ne jamais monter sur une échelle ou un escabeau sans la présence et la tenue d'un adulte.",
    emergencyNumber: {
      num: '15',
      label: 'SAMU (Urgences médicales)',
    },
  },
  {
    id: 'garage_produits_etagere',
    dangerName: 'Intoxication',
    correctOptionId: 'intoxication',
    acceptedOptionIds: ['intoxication', 'brulure', 'chute'],
    locationDescription: "Sur les étagères murales (solvants et produits chimiques)",
    coords: {
      x: 76.8,
      y: 20,
      radius: 7.5,
    },
    highlightBox: {
      left: 70.5,
      top: 4,
      width: 13,
      height: 32,
    },
    hint: "Regarde les bouteilles et flacons de solvants posés sur les étagères en briques...",
    explanation: "Ces étagères portent des bouteilles de solvants, d'eau de javel et d'antigel qui peuvent provoquer une grave intoxication ou des brûlures chimiques si on les manipule.",
    goodHabit: "Ne jamais toucher aux flacons de bricolage ou de jardinage sans l'accord d'un adulte.",
    emergencyNumber: {
      num: '15',
      label: 'SAMU ou Centre Antipoison',
    },
  },
];

// Exercise 6: Le Jardin
export const GARDEN_DANGERS_DATA: DangerItem[] = [
  {
    id: 'jardin_piscine',
    dangerName: 'Noyade',
    correctOptionId: 'noyade',
    acceptedOptionIds: ['noyade', 'chute'],
    locationDescription: "La piscine gonflable remplie d'eau sans barrière",
    coords: {
      x: 8.5,
      y: 65,
      radius: 7,
    },
    highlightBox: {
      left: 1.5,
      top: 57,
      width: 14,
      height: 13,
    },
    hint: "Regarde le bassin d'eau bleu installé dans l'herbe sans barrière de sécurité...",
    explanation: "Même dans quelques centimètres d'eau, un jeune enfant peut glisser et se noyer en moins de 3 minutes sans bruit.",
    goodHabit: "Ne jamais s'approcher d'un point d'eau ou d'une piscine sans la surveillance directe et continue d'un adulte.",
    emergencyNumber: {
      num: '18',
      label: 'Pompiers ou SAMU (15)',
    },
  },
  {
    id: 'jardin_canette',
    dangerName: 'Piqûre',
    correctOptionId: 'piqure',
    acceptedOptionIds: ['piqure', 'etouffement', 'intoxication', 'coupure'],
    locationDescription: "La canette de soda ouverte posée sur la souche",
    coords: {
      x: 23.3,
      y: 72.5,
      radius: 4,
    },
    highlightBox: {
      left: 21.8,
      top: 67.5,
      width: 3.2,
      height: 10,
    },
    hint: "Regarde la canette rouge ouverte posée sur la souche d'arbre coupée...",
    explanation: "Les boissons sucrées attirent les guêpes. Boire sans regarder peut provoquer une piqûre dans la gorge entraînant un risque d'étouffement, ou des coupures avec les bords métalliques.",
    goodHabit: "Ne jamais boire dans une canette laissée à l'air libre et toujours jeter ses emballages à la poubelle.",
    emergencyNumber: {
      num: '15',
      label: 'SAMU (en cas de piqûre dans la gorge ou allergie)',
    },
  },
  {
    id: 'jardin_balancoire',
    dangerName: 'Chute',
    correctOptionId: 'chute',
    acceptedOptionIds: ['chute'],
    locationDescription: "Le portique de balançoires et son échelle",
    coords: {
      x: 23.5,
      y: 54,
      radius: 7.5,
    },
    highlightBox: {
      left: 16.5,
      top: 43,
      width: 13.5,
      height: 23,
    },
    hint: "Regarde la grande structure de jeux avec les balançoires et les cordes...",
    explanation: "Sauter d'une balançoire en mouvement ou lâcher les cordes peut provoquer une chute violente sur le sol dur.",
    goodHabit: "Toujours attendre l'arrêt complet de la balançoire pour descendre et bien se tenir avec les deux mains.",
    emergencyNumber: {
      num: '15',
      label: 'SAMU (Urgences médicales)',
    },
  },
  {
    id: 'jardin_barbecue',
    dangerName: 'Brûlure',
    correctOptionId: 'brulure',
    acceptedOptionIds: ['brulure'],
    locationDescription: "Le barbecue allumé avec des braises et saucisses",
    coords: {
      x: 38.5,
      y: 65,
      radius: 6.5,
    },
    highlightBox: {
      left: 34.5,
      top: 56.5,
      width: 8,
      height: 17.5,
    },
    hint: "Regarde la cuve en métal sur pieds d'où s'échappe de la fumée chaude...",
    explanation: "La cuve en métal et la grille sont brûlantes. S'approcher ou bousculer le barbecue peut provoquer des brûlures graves ou enflammer les vêtements.",
    goodHabit: "Rester toujours à bonne distance d'un barbecue allumé et ne jamais courir ou jouer avec un ballon à proximité.",
    emergencyNumber: {
      num: '18',
      label: 'Pompiers (Brûlure ou incendie)',
    },
  },
  {
    id: 'jardin_velo',
    dangerName: 'Chute',
    correctOptionId: 'chute',
    acceptedOptionIds: ['chute', 'coupure'],
    locationDescription: "Le vélo d'enfant posé au milieu de l'allée",
    coords: {
      x: 50.8,
      y: 71,
      radius: 7,
    },
    highlightBox: {
      left: 45,
      top: 59,
      width: 11,
      height: 24,
    },
    hint: "Regarde le petit vélo garé sur le chemin de terre et de gravillons...",
    explanation: "Rouler à vélo sans casque de protection peut entraîner un traumatisme crânien ou des blessures graves en cas de chute sur les pierres.",
    goodHabit: "Toujours porter et bien attacher son casque de vélo avant de monter en selle, même dans le jardin.",
    emergencyNumber: {
      num: '15',
      label: 'SAMU (Urgences médicales)',
    },
  },
  {
    id: 'jardin_tondeuse',
    dangerName: 'Coupure',
    correctOptionId: 'coupure',
    acceptedOptionIds: ['coupure', 'chute', 'brulure'],
    locationDescription: "La tondeuse à gazon motorisée posée sur l'herbe",
    coords: {
      x: 87.5,
      y: 59,
      radius: 6,
    },
    highlightBox: {
      left: 83.5,
      top: 51.5,
      width: 7.5,
      height: 16.5,
    },
    hint: "Regarde la machine rouge à moteur servant à tondre la pelouse...",
    explanation: "Sous la machine, les lames en acier tournent à très grande vitesse. Elles peuvent causer des coupures très profondes ou projeter des pierres.",
    goodHabit: "Ne jamais s'approcher d'une tondeuse en marche et ne jamais glisser ses mains ou pieds sous le carter.",
    emergencyNumber: {
      num: '15',
      label: 'SAMU (Urgences médicales)',
    },
  },
  {
    id: 'jardin_arbre',
    dangerName: 'Chute',
    correctOptionId: 'chute',
    acceptedOptionIds: ['chute', 'morsure'],
    locationDescription: "Le raton perché très haut sur la branche de l'arbre",
    coords: {
      x: 89.8,
      y: 35.5,
      radius: 6.5,
    },
    highlightBox: {
      left: 86,
      top: 25.5,
      width: 8.5,
      height: 19.5,
    },
    hint: "Regarde dans les hauteurs du grand arbre à droite...",
    explanation: "Grimper trop haut dans un arbre ou monter sur des branches fragiles peut provoquer une chute de grande hauteur et des fractures.",
    goodHabit: "Ne pas monter seul dans les grands arbres et respecter les conseils de sécurité des adultes.",
    emergencyNumber: {
      num: '18',
      label: 'Pompiers ou SAMU (15)',
    },
  },
  {
    id: 'jardin_baies',
    dangerName: 'Intoxication',
    correctOptionId: 'intoxication',
    acceptedOptionIds: ['intoxication', 'etouffement'],
    locationDescription: "Le buisson aux petites baies rouges inconnues",
    coords: {
      x: 93,
      y: 82,
      radius: 8,
    },
    highlightBox: {
      left: 86.5,
      top: 64,
      width: 13.5,
      height: 35.5,
    },
    hint: "Regarde le gros buisson avec plein de petits fruits rouges au premier plan...",
    explanation: "De nombreuses baies et plantes sauvages du jardin sont toxiques. Les porter à la bouche peut provoquer une intoxication alimentaire sévère ou un empoisonnement.",
    goodHabit: "Ne jamais cueillir ni manger de fruits, baies ou champignons trouvés dans la nature sans l'accord formel d'un adulte.",
    emergencyNumber: {
      num: '15',
      label: 'SAMU ou Centre Antipoison',
    },
  },
];

// Backwards compatibility alias
export const DANGERS_DATA = SALON_DANGERS_DATA;


