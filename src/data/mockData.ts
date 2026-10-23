export interface ActivityExample {
  id: number;
  sheetNumber: number;
  src: string;
  alt: {
    'pt-PT': string;
    'es-ES': string;
    'it-IT': string;
  };
  title: {
    'pt-PT': string;
    'es-ES': string;
    'it-IT': string;
  };
  description: {
    'pt-PT': string;
    'es-ES': string;
    'it-IT': string;
  };
}

export const ACTIVITY_EXAMPLES: ActivityExample[] = [
  {
    id: 1,
    sheetNumber: 1,
    src: '/images/amostras/ficha-1.png',
    alt: {
      'pt-PT': 'Ficha 1: Procura da letra A (amostra real do PDF)',
      'es-ES': 'Ficha 1: Búsqueda de la letra A (muestra real del PDF)',
      'it-IT': 'Scheda 1: Caccia alla lettera A (anteprima reale del PDF)',
    },
    title: {
      'pt-PT': 'Procura da letra A',
      'es-ES': 'Búsqueda de la letra A',
      'it-IT': 'Caccia alla lettera A',
    },
    description: {
      'pt-PT': 'Identificação e discriminação visual da vogal A em grelha com letras variadas.',
      'es-ES': 'Identificación y discriminación visual de la vocal A en cuadrícula de letras.',
      'it-IT': 'Riconoscimento e discriminazione visiva della vocale A in griglia mista.',
    },
  },
  {
    id: 2,
    sheetNumber: 2,
    src: '/images/amostras/ficha-2.png',
    alt: {
      'pt-PT': 'Ficha 2: Contagem de 1 a 5 (amostra real do PDF)',
      'es-ES': 'Ficha 2: Conteo del 1 al 5 (muestra real del PDF)',
      'it-IT': 'Scheda 2: Conteggio da 1 a 5 (anteprima reale del PDF)',
    },
    title: {
      'pt-PT': 'Contagem de 1 a 5',
      'es-ES': 'Conteo del 1 al 5',
      'it-IT': 'Conteggio da 1 a 5',
    },
    description: {
      'pt-PT': 'Contagem de círculos e registo numérico correspondente até 5.',
      'es-ES': 'Conteo de círculos y escritura del numeral correspondiente hasta el 5.',
      'it-IT': 'Conteggio di cerchi e scrittura del numero corrispondente fino a 5.',
    },
  },
  {
    id: 3,
    sheetNumber: 3,
    src: '/images/amostras/ficha-3.png',
    alt: {
      'pt-PT': 'Ficha 3: Padrões e sequências (amostra real do PDF)',
      'es-ES': 'Ficha 3: Patrones y secuencias (muestra real del PDF)',
      'it-IT': 'Scheda 3: Sequenze e modelli (anteprima reale del PDF)',
    },
    title: {
      'pt-PT': 'Padrões e sequências',
      'es-ES': 'Patrones y secuencias',
      'it-IT': 'Sequenze e modelli (pattern)',
    },
    description: {
      'pt-PT': 'Identificação e continuação de sequências com círculo, quadrado e triângulo.',
      'es-ES': 'Identificación y continuación de secuencias lógicas con formas geométricas.',
      'it-IT': 'Riconoscimento e prosecuzione di sequenze con cerchio, quadrato e triangolo.',
    },
  },
  {
    id: 4,
    sheetNumber: 4,
    src: '/images/amostras/ficha-4.png',
    alt: {
      'pt-PT': 'Ficha 4: Traçados e coordenação motora (amostra real do PDF)',
      'es-ES': 'Ficha 4: Trazos y coordinación motriz (muestra real del PDF)',
      'it-IT': 'Scheda 4: Tracciati e pregrafismo (anteprima reale del PDF)',
    },
    title: {
      'pt-PT': 'Traçados e coordenação',
      'es-ES': 'Trazos y grafomotricidad',
      'it-IT': 'Tracciati e pregrafismo',
    },
    description: {
      'pt-PT': 'Exercícios de grafomotricidade e controlo do traço com linhas retas e onduladas.',
      'es-ES': 'Ejercicios de grafomotricidad con líneas rectas, curvas y onduladas.',
      'it-IT': 'Esercizi di coordinazione oculo-manuale e pregrafismo con linee rette e ondulate.',
    },
  },
  {
    id: 5,
    sheetNumber: 5,
    src: '/images/amostras/ficha-5.png',
    alt: {
      'pt-PT': 'Ficha 5: Ligação maiúsculas e minúsculas (amostra real do PDF)',
      'es-ES': 'Ficha 5: Unión de mayúsculas y minúsculas (muestra real del PDF)',
      'it-IT': 'Scheda 5: Collegamento maiuscole e minuscole (anteprima reale del PDF)',
    },
    title: {
      'pt-PT': 'Ligação maiúsculas/minúsculas',
      'es-ES': 'Unión mayúsculas/minúsculas',
      'it-IT': 'Collegamento maiuscole/minuscole',
    },
    description: {
      'pt-PT': 'Correspondência e associação direta entre letras maiúsculas e minúsculas.',
      'es-ES': 'Asociación y unión directa entre letras mayúsculas y minúsculas.',
      'it-IT': 'Associazione diretta e collegamento tra lettere maiuscole e minuscole.',
    },
  },
  {
    id: 6,
    sheetNumber: 6,
    src: '/images/amostras/ficha-6.png',
    alt: {
      'pt-PT': 'Ficha 6: Desenho de quantidades (amostra real do PDF)',
      'es-ES': 'Ficha 6: Dibujo de cantidades (muestra real del PDF)',
      'it-IT': 'Scheda 6: Disegno delle quantità (anteprima reale del PDF)',
    },
    title: {
      'pt-PT': 'Desenho de quantidades',
      'es-ES': 'Dibujo de cantidades',
      'it-IT': 'Disegno delle quantità',
    },
    description: {
      'pt-PT': 'Representação gráfica da quantidade indicada em cada retângulo.',
      'es-ES': 'Representación gráfica de las cantidades solicitadas mediante dibujo.',
      'it-IT': 'Rappresentazione grafica della quantità richiesta tramite disegno.',
    },
  },
];
