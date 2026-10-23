export type Language = 'pt-PT' | 'es-ES' | 'it-IT';

export interface Translations {
  brand: string;
  topBanner: string;
  revisionBadge: string;
  commercialMode: {
    internalActiveBanner: string;
    publicDisabledBanner: string;
    testNotice: string;
    toggleLabel: string;
    internalPill: string;
    publicDisabledPill: string;
    disabledCtaText: string;
    disabledModalTitle: string;
    disabledModalText: string;
    disabledModalClose: string;
  };
  nav: {
    objectives: string;
    examples: string;
    moreActivities: string;
    pricing: string;
    faq: string;
    checkoutBtn: string;
    homeAriaLabel: string;
    langAriaLabel: string;
  };
  hero: {
    title: string;
    subtitle: string;
    statusBadge: string;
    reviewNotice: string;
    priceType: string;
    priceValue: string;
    priceVat: string;
    priceNote: string;
    ctaButton: string;
    ctaTestNotice: string;
    badgeSecure: string;
    badgePdf: string;
    badgeGuarantee: string;
    samplesBadge: string;
    samplesSubtitle: string;
    sampleSheetAlt: string;
    clickToEnlarge: string;
    sampleLangNotice: string;
    heroIllustrationAlt: string;
    heroIllustrationCaption: string;
    badgeActivitiesPill: string;
    viewRealSamplesAction: string;
  };
  objectives: {
    badge: string;
    title: string;
    intro: string;
    sheetsCountNotice: string;
    sheetIncluded: string;
    sheets: Array<{
      number: string;
      title: string;
      description: string;
    }>;
  };
  audience: {
    forYouTitle: string;
    forYouItems: string[];
    notForYouTitle: string;
    notForYouItems: string[];
  };
  gallery: {
    badge: string;
    title: string;
    subtitle: string;
    sampleLangNotice: string;
    ctaButton: string;
    prevAria: string;
    nextAria: string;
    dotAria: string;
    sheetLabel: string;
    openPreview: string;
    closePreview: string;
  };
  moreActivities: {
    badge: string;
    title: string;
    description: string;
    buttonLabel: string;
  };
  extraWorkbookModal: {
    badge: string;
    title: string;
    priceValue: string;
    priceVat: string;
    statusNotice: string;
    sheetsTitle: string;
    sheets: string[];
    futureNote: string;
    disabledBtn: string;
    dismissBtn: string;
    closeAria: string;
  };
  pricing: {
    sectionTitle: string;
    statusNotice: string;
    planBadge: string;
    planTitle: string;
    planSubtitle: string;
    priceValue: string;
    priceVat: string;
    hotmartNote: string;
    features: string[];
    ctaButton: string;
    secureNotice: string;
    testingOnlyNotice: string;
    paymentMethodsAlt: string;
  };
  timedOffer: {
    badge: string;
    title: string;
    priceValue: string;
    priceVat: string;
    description: string;
    gamesTitle: string;
    games: string[];
    disclaimer: string;
    ctaButton: string;
    dismissButton: string;
    closeAria: string;
  };
  countdown: {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
    ended: string;
    timezoneLabel: string;
  };
  faq: {
    title: string;
    subtitle: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  guarantee: {
    title: string;
    p1: string;
    p2: string;
    badgeAlt: string;
  };
  footer: {
    privacyLink: string;
    termsLink: string;
    cookiePreferencesLink: string;
    copyright: string;
  };
  consent: {
    regionAria: string;
    title: string;
    description: string;
    acceptBtn: string;
    rejectBtn: string;
  };
  payments: {
    badge: string;
    title: string;
    subtitle: string;
    cardsAndPaypalTitle: string;
    cardsAndPaypalDesc: string;
    portugalTitle: string;
    portugalDesc: string;
    mbwayNotice: string;
    localMethodsTitle: string;
    localMethodsDesc: string;
    conditionalNotice: string;
    hotmartProcessingNotice: string;
    instantProcessingNotice: string;
    officialCheckoutNotice: string;
    countryDependentNotice: string;
  };
  policies: {
    privacyTitle: string;
    privacyContent: string[];
    termsTitle: string;
    termsContent: string[];
    closeBtn: string;
  };
}

// Forward campaign labels only: never copy tokens, arbitrary query data or test flags.
export const buildCheckoutUrl = (search: string): string => {
  const checkout = new URL('https://pay.hotmart.com/B108145603W');
  const incoming = new URLSearchParams(search);
  for (const key of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'utm_id', 'src', 'sck']) {
    const value = incoming.get(key);
    if (value && value.length <= 500) checkout.searchParams.set(key, value);
  }
  return checkout.toString();
};
export const HOTMART_CHECKOUT_URL = buildCheckoutUrl(typeof window === 'undefined' ? '' : window.location.search);

export const TRANSLATIONS: Record<Language, Translations> = {
  "pt-PT": {
    "brand": "Infantil Pedagogia",
    "topBanner": "Pagamento único · 3,99 € + IVA aplicável",
    "revisionBadge": "Edição de revisão · Sem validação humana ou aprovação formal da Hotmart",
    "commercialMode": {
      "internalActiveBanner": "Modo de Prévia Interna: Link oficial Hotmart ativo para testes do proprietário.",
      "publicDisabledBanner": "Modo de Visualização Pública: Cobrança comercial desativada antes do lançamento.",
      "testNotice": "Pagamento processado pela Hotmart. Confirme o conteúdo e a disponibilidade de entrega antes de pagar.",
      "toggleLabel": "Alternar configuração comercial:",
      "internalPill": "Prévia Interna (Checkout Ativo)",
      "publicDisabledPill": "Público (Cobrança Desativada)",
      "disabledCtaText": "Cobrança desativada (em revisão)",
      "disabledModalTitle": "Venda Comercial Desativada",
      "disabledModalText": "Este produto encontra-se em fase de revisão pedagógica interna e aguarda homologação formal. A cobrança pública permanece desativada.",
      "disabledModalClose": "Entendido"
    },
    "nav": {
      "objectives": "As 6 Fichas",
      "examples": "Amostras Reais",
      "moreActivities": "Mais Atividades",
      "pricing": "Aceder",
      "faq": "Dúvidas",
      "checkoutBtn": "Aceder ao Checkout",
      "homeAriaLabel": "Infantil Pedagogia - Início",
      "langAriaLabel": "Mudar idioma da página"
    },
    "hero": {
      "title": "KIT DE ATIVIDADES PEDAGÓGICAS",
      "subtitle": "Conjunto didático de 6 fichas pedagógicas imprimíveis para o início da aprendizagem.",
      "statusBadge": "Atividades imprimíveis · PT / ES / IT",
      "reviewNotice": "Aviso de desenvolvimento: Os ficheiros PDF são uma edição de revisão interna, sem validação humana de especialistas nem aprovação formal da Hotmart. O pagamento comercial público deve permanecer desativado antes do lançamento.",
      "priceType": "Pagamento único",
      "priceValue": "3,99 €",
      "priceVat": "+ IVA aplicável (total final no checkout)",
      "priceNote": "O preço final com IVA é apurado no checkout da Hotmart de acordo com o país de faturação.",
      "ctaButton": "QUERO ADQUIRIR O MATERIAL",
      "ctaTestNotice": "Pagamento processado pela Hotmart. Confirme o conteúdo e a disponibilidade de entrega antes de pagar.",
      "badgeSecure": "Compra Segura",
      "badgePdf": "6 Fichas em PDF",
      "badgeGuarantee": "Garantia de 7 Dias",
      "samplesBadge": "Amostras Reais do Kit (6 Fichas)",
      "samplesSubtitle": "Composição das 6 fichas pedagógicas incluídas na edição de revisão",
      "sampleSheetAlt": "Amostra da ficha",
      "clickToEnlarge": "Clique na ficha para ampliar a pré-visualização",
      "sampleLangNotice": "Amostras em português · PDFs disponíveis em português, espanhol e italiano",
      "heroIllustrationAlt": "Ilustração do kit de 6 atividades pedagógicas com menino de óculos e materiais didáticos",
      "heroIllustrationCaption": "Ilustração do kit; veja as amostras reais abaixo",
      "badgeActivitiesPill": "6 Atividades Lúdicas",
      "viewRealSamplesAction": "Ver as 6 amostras reais abaixo"
    },
    "objectives": {
      "badge": "6 Fichas Imprimíveis",
      "title": "Conteúdo Real do Kit Pedagógico",
      "intro": "O kit é composto por seis fichas de introdução à literacia e numeracia:",
      "sheetsCountNotice": "Kit composto estritamente pelas 6 fichas abaixo (sem cadernos adicionais não produzidos):",
      "sheetIncluded": "Ficha incluída no PDF",
      "sheets": [
        {
          "number": "Ficha 1",
          "title": "Procura da letra A",
          "description": "Identificação visual e discriminação da vogal A em contexto lúdico."
        },
        {
          "number": "Ficha 2",
          "title": "Contagem 1 a 5",
          "description": "Exercícios práticos de contagem e associação de quantidades até 5."
        },
        {
          "number": "Ficha 3",
          "title": "Padrões",
          "description": "Identificação, repetição e continuação de sequências lógicas simples."
        },
        {
          "number": "Ficha 4",
          "title": "Traçados",
          "description": "Coordenação motora fina e exercícios de grafomotricidade preparatórios."
        },
        {
          "number": "Ficha 5",
          "title": "Ligação maiúsculas / minúsculas",
          "description": "Correspondência entre letras maiúsculas e minúsculas correspondentes."
        },
        {
          "number": "Ficha 6",
          "title": "Desenho de quantidades",
          "description": "Representação gráfica do numeral através do desenho dos elementos correspondentes."
        }
      ]
    },
    "audience": {
      "forYouTitle": "Este material é indicado para si se...",
      "forYouItems": [
        "Procura as 6 fichas estruturadas de iniciação para imprimir em casa ou na sala de aula;",
        "Pretende exercitar a contagem elementar (1-5) e o reconhecimento da letra A;",
        "Deseja praticar grafomotricidade, padrões e associação de maiúsculas/minúsculas;",
        "Prefere conteúdos digitais em formato PDF para imprimir conforme a sua rotina."
      ],
      "notForYouTitle": "Não é indicado se...",
      "notForYouItems": [
        "Procura cadernos extensos e avançados de gramática ou ortografia complexa;",
        "Procura apenas aplicações digitais interativas sem suporte em papel;",
        "Não pretende acompanhar a criança na realização das fichas impressas."
      ]
    },
    "gallery": {
      "badge": "Fichas do Kit",
      "title": "Explore as Atividades do Kit",
      "subtitle": "Capas ilustrativas das atividades. Toque numa capa para ver a ficha real incluída no PDF.",
      "sampleLangNotice": "Amostras em português · PDFs disponíveis em português, espanhol e italiano",
      "ctaButton": "QUERO ADQUIRIR O MATERIAL",
      "prevAria": "Ficha anterior",
      "nextAria": "Próxima ficha",
      "dotAria": "Ir para a ficha número",
      "sheetLabel": "Ficha",
      "openPreview": "Ampliar ficha",
      "closePreview": "Fechar ampliação"
    },
    "moreActivities": {
      "badge": "EXPANSÃO PEDAGÓGICA (EM PREPARAÇÃO)",
      "title": "Mais atividades",
      "description": "Conheça o Caderno Extra composto por 6 fichas adicionais: simetria, labirinto, sequências numéricas, forma diferente, subtração e cópia de grelha.",
      "buttonLabel": "Conhecer Caderno Extra"
    },
    "extraWorkbookModal": {
      "badge": "OFERTA EM PREPARAÇÃO · COBRANÇA DESATIVADA",
      "title": "Caderno Extra de Atividades",
      "priceValue": "7,99 €",
      "priceVat": "+ IVA aplicável",
      "statusNotice": "Aviso de revisão: Este caderno complementar com 6 fichas encontra-se em preparação interna, sem validação humana ou aprovação formal da Hotmart. A cobrança está desativada na versão pública.",
      "sheetsTitle": "Conteúdo real das 6 fichas do Caderno Extra:",
      "sheets": [
        "Ficha 1: Simetria",
        "Ficha 2: Labirinto",
        "Ficha 3: Sequências numéricas",
        "Ficha 4: Identificação de forma diferente",
        "Ficha 5: Subtração elementar",
        "Ficha 6: Cópia de grelha"
      ],
      "futureNote": "Não é cobrado nenhum valor pelo Caderno Extra no checkout atual. Quando os ficheiros finais forem aprovados, o checkout próprio será ativado.",
      "disabledBtn": "Cobrança desativada (em preparação)",
      "dismissBtn": "Agora não",
      "closeAria": "Fechar janela do Caderno Extra"
    },
    "pricing": {
      "sectionTitle": "Acesso ao Kit Pedagógico (6 Fichas)",
      "statusNotice": "Pagamento único · Ficheiros digitais em PDF",
      "planBadge": "KIT DIGITAL",
      "planTitle": "Kit com 6 Fichas Pedagógicas",
      "planSubtitle": "As 6 fichas fundamentais em formato PDF de alta resolução, prontas para descarregar e imprimir.",
      "priceValue": "3,99 €",
      "priceVat": "+ IVA aplicável",
      "hotmartNote": "Pagamento único. O valor final com IVA é apurado no checkout da Hotmart conforme o país.",
      "features": [
        "6 fichas essenciais de literacia e numeracia em PDF",
        "Procura da letra A e contagem de 1 a 5",
        "Padrões, traçados e desenho de quantidades",
        "Ligação de letras maiúsculas e minúsculas",
        "Garantia incondicional de 7 dias na Hotmart"
      ],
      "ctaButton": "ACEDER AO CHECKOUT (3,99 € + IVA)",
      "secureNotice": "Pagamento processado pela Hotmart.",
      "testingOnlyNotice": "",
      "paymentMethodsAlt": "Meios de pagamento aceites pela Hotmart"
    },
    "timedOffer": {
      "badge": "OFERTA COMPLEMENTAR (ORDER BUMP)",
      "title": "Jogos de Letras e Números",
      "priceValue": "1,99 €",
      "priceVat": "+ IVA aplicável",
      "description": "Deseja complementar as fichas com o conjunto de 4 jogos imprimíveis para reforço lúdico?",
      "gamesTitle": "Jogos adicionais incluídos:",
      "games": [
        "Memória de letras",
        "Dominó de quantidades",
        "Bingo",
        "Percurso 1-12"
      ],
      "disclaimer": "Nota importante: Esta oferta de 1,99 € + IVA é um adicional (order bump) sujeito a configuração ativa no checkout da Hotmart. A seleção e disponibilidade do adicional serão confirmadas diretamente na página de pagamento.",
      "ctaButton": "Ver opções no checkout",
      "dismissButton": "Agora não",
      "closeAria": "Fechar pop-up da oferta complementar"
    },
    "countdown": {
      "days": "dias",
      "hours": "horas",
      "minutes": "min",
      "seconds": "seg",
      "ended": "Prazo da oferta encerrado",
      "timezoneLabel": "Fuso horário:"
    },
    "faq": {
      "title": "Perguntas Frequentes",
      "subtitle": "Informações sobre o conteúdo e o acesso ao material.",
      "items": [
        {
          "question": "Quantas fichas estão incluídas neste kit?",
          "answer": "O kit inclui exatamente 6 fichas: procura da letra A, contagem 1-5, padrões, traçados, ligação maiúsculas/minúsculas e desenho de quantidades."
        },
        {
          "question": "O material é físico ou digital?",
          "answer": "O material é 100% digital em formato PDF para imprimir em qualquer impressora doméstica ou loja de cópias."
        },
        {
          "question": "Como confirmo a entrega do material?",
          "answer": "Confira a disponibilidade dos ficheiros e as condições de entrega na Hotmart antes de concluir o pagamento."
        },
        {
          "question": "Como funciona a garantia de 7 dias?",
          "answer": "A garantia de 7 dias é gerida diretamente pela plataforma Hotmart, permitindo o reembolso total caso o material não corresponda às suas expectativas."
        }
      ]
    },
    "guarantee": {
      "title": "Garantia Incondicional de 7 Dias",
      "p1": "Tem 7 dias para avaliar as 6 fichas pedagógicas. Se por qualquer motivo não ficar satisfeito, o reembolso de 100% é processado pela Hotmart.",
      "p2": "Processo gerido diretamente através da plataforma de pagamento.",
      "badgeAlt": "Selo de garantia de 7 dias Hotmart"
    },
    "footer": {
      "privacyLink": "POLÍTICA DE PRIVACIDADE",
      "termsLink": "TERMOS DE USO",
      "cookiePreferencesLink": "PREFERÊNCIAS DE COOKIES",
      "copyright": "Infantil Pedagogia © 2026. Todos os direitos reservados."
    },
    "consent": {
      "regionAria": "Consentimento de cookies e tratamento de dados de marketing",
      "title": "Privacidade e Tratamento de Dados (UTMify e Meta)",
      "description": "Ao aceitar, concorda com a recolha e processamento de identificadores online (tais como endereço IP, dados do navegador e cookies) e eventos de navegação através dos serviços de medição da UTMify e da Meta. Estes dados não são anónimos e podem ser partilhados para efeitos de atribuição e otimização de campanhas publicitárias. Pode rejeitar ou revogar a sua escolha a qualquer momento.",
      "acceptBtn": "Aceitar Rastreio",
      "rejectBtn": "Rejeitar Rastreio"
    },
    "payments": {
      "badge": "Meios de Pagamento Europeus",
      "title": "Pagamentos Seguros e Métodos Disponíveis",
      "subtitle": "O processamento das encomendas é realizado de forma encriptada diretamente na plataforma oficial da Hotmart.",
      "cardsAndPaypalTitle": "Cartão e PayPal",
      "cardsAndPaypalDesc": "Aceita os principais cartões de débito/crédito internacionais e conta PayPal para pagamentos rápidos e protegidos.",
      "portugalTitle": "Portugal: MB WAY e Multibanco",
      "portugalDesc": "Para compradores em Portugal, estão disponíveis pagamentos por MB WAY e por referência Multibanco no checkout oficial da Hotmart.",
      "mbwayNotice": "Importante: Segundo a documentação oficial da Hotmart, o MB WAY não se encontra disponível para pagamentos complementares de 1 clique (order bump / funil de vendas).",
      "localMethodsTitle": "Métodos Locais Europeus",
      "localMethodsDesc": "Klarna e Pay by Bank (SEPA Instant) também podem aparecer. A disponibilidade varia conforme o país de faturação, o dispositivo, a oferta e as opções apresentadas pela Hotmart.",
      "conditionalNotice": "A disponibilidade exata de cada método é confirmada na página segura do checkout Hotmart após selecionar o país de faturação. Não cobramos diretamente nem recolhemos dados de pagamento nesta página.",
      "hotmartProcessingNotice": "Pagamento processado pela Hotmart.",
      "instantProcessingNotice": "Processamento pela Hotmart",
      "officialCheckoutNotice": "Checkout oficial Hotmart",
      "countryDependentNotice": "Conforme país selecionado no checkout"
    },
    "policies": {
      "privacyTitle": "Política de Privacidade e Cookies",
      "privacyContent": [
        "A Infantil Pedagogia informa com total transparência como são tratados os dados dos utilizadores.",
        "Ao autorizar cookies de marketing, serviços de medição como UTMify e Meta podem processar identificadores online (como endereço IP, identificadores de cookies e parâmetros de navegação). Estes dados não são anónimos e permitem a atribuição e medição de campanhas.",
        "O utilizador tem o direito de rejeitar o rastreio e de revogar a sua decisão a qualquer momento através da opção \"Preferências de Cookies\" no rodapé da página.",
        "As transações financeiras e dados de pagamento são recolhidos e processados de forma encriptada exclusivamente pela Hotmart."
      ],
      "termsTitle": "Termos de Utilização - Edição de Revisão",
      "termsContent": [
        "O material disponibilizado nesta página é uma edição de revisão interna composta por 6 fichas pedagógicas, sem validação humana prévia ou homologação pela Hotmart.",
        "O acesso ao checkout está configurado exclusivamente para testes técnicos do proprietário, devendo a cobrança pública permanecer desativada até à aprovação formal.",
        "É expressamente proibida a reprodução para fins comerciais, revenda ou distribuição não autorizada dos ficheiros."
      ],
      "closeBtn": "Fechar"
    }
  },
  "es-ES": {
    "brand": "Infantil Pedagogia",
    "topBanner": "Pago único · 3,99 € + IVA aplicable",
    "revisionBadge": "Edición de revisión · Sin validación humana o aprobación formal de Hotmart",
    "commercialMode": {
      "internalActiveBanner": "Modo de Vista Previa Interna: Enlace oficial Hotmart activo para pruebas del propietario.",
      "publicDisabledBanner": "Modo de Visualización Pública: Cobro comercial desactivado antes del lanzamiento.",
      "testNotice": "Pago procesado por Hotmart. Confirma el contenido y la disponibilidad de entrega antes de pagar.",
      "toggleLabel": "Alternar configuración comercial:",
      "internalPill": "Vista Previa Interna (Checkout Activo)",
      "publicDisabledPill": "Público (Cobro Desactivado)",
      "disabledCtaText": "Cobro desactivado (en revisión)",
      "disabledModalTitle": "Venta Comercial Desactivada",
      "disabledModalText": "Este producto se encuentra en fase de revisión pedagógica interna y espera homologación formal. El cobro público permanece desactivado.",
      "disabledModalClose": "Entendido"
    },
    "nav": {
      "objectives": "Las 6 Fichas",
      "examples": "Muestras Reales",
      "moreActivities": "Más Actividades",
      "pricing": "Acceder",
      "faq": "Preguntas",
      "checkoutBtn": "Ir al Checkout",
      "homeAriaLabel": "Infantil Pedagogia - Inicio",
      "langAriaLabel": "Cambiar idioma de la página"
    },
    "hero": {
      "title": "KIT DE ACTIVIDADES PEDAGÓGICAS",
      "subtitle": "Conjunto didáctico de 6 fichas pedagógicas imprimibles para la iniciación al aprendizaje.",
      "statusBadge": "Actividades imprimibles · PT / ES / IT",
      "reviewNotice": "Aviso de desarrollo: Los archivos PDF son una edición de revisión interna, sin validación humana experta ni aprobación formal de Hotmart. El cobro comercial público debe permanecer desactivado antes del lanzamiento.",
      "priceType": "Pago único",
      "priceValue": "3,99 €",
      "priceVat": "+ IVA aplicable (total final en el checkout)",
      "priceNote": "El precio final con IVA se calcula en la pasarela de Hotmart según el país de residencia fiscal.",
      "ctaButton": "QUIERO ADQUIRIR EL MATERIAL",
      "ctaTestNotice": "Pago procesado por Hotmart. Confirma el contenido y la disponibilidad de entrega antes de pagar.",
      "badgeSecure": "Compra Segura",
      "badgePdf": "6 Fichas en PDF",
      "badgeGuarantee": "Garantía de 7 Días",
      "samplesBadge": "Muestras Reales del Kit (6 Fichas)",
      "samplesSubtitle": "Composición de las 6 fichas didácticas incluidas en la edición de revisión",
      "sampleSheetAlt": "Muestra de la ficha",
      "clickToEnlarge": "Pulsa en la ficha para ampliar la vista previa",
      "sampleLangNotice": "Muestras en portugués · PDFs disponibles en portugués, español e italiano",
      "heroIllustrationAlt": "Ilustración del kit de 6 actividades pedagógicas con niño con gafas y materiales didácticos",
      "heroIllustrationCaption": "Ilustración del kit; mira las muestras reales abajo",
      "badgeActivitiesPill": "6 Actividades Lúdicas",
      "viewRealSamplesAction": "Ver las 6 muestras reales abajo"
    },
    "objectives": {
      "badge": "6 Fichas Imprimibles",
      "title": "Contenido Real del Kit Pedagógico",
      "intro": "El kit está compuesto por seis fichas de iniciación a la lectura, escritura y cálculo:",
      "sheetsCountNotice": "Kit compuesto estrictamente por las 6 fichas detalladas a continuación:",
      "sheetIncluded": "Ficha incluida en el PDF",
      "sheets": [
        {
          "number": "Ficha 1",
          "title": "Búsqueda de la letra A",
          "description": "Identificación visual y discriminación de la vocal A en contexto lúdico."
        },
        {
          "number": "Ficha 2",
          "title": "Conteo del 1 al 5",
          "description": "Ejercicios prácticos de conteo y correspondencia de cantidades hasta el 5."
        },
        {
          "number": "Ficha 3",
          "title": "Patrones",
          "description": "Identificación, repetición y continuación de secuencias lógicas sencillas."
        },
        {
          "number": "Ficha 4",
          "title": "Trazos",
          "description": "Coordinación motriz fina y ejercicios de grafomotricidad preparatoria."
        },
        {
          "number": "Ficha 5",
          "title": "Unión mayúsculas / minúsculas",
          "description": "Asociación y emparejamiento entre letras mayúsculas y sus minúsculas."
        },
        {
          "number": "Ficha 6",
          "title": "Dibujo de cantidades",
          "description": "Representación gráfica del número mediante el dibujo de elementos."
        }
      ]
    },
    "audience": {
      "forYouTitle": "Este material es para ti si...",
      "forYouItems": [
        "Buscas las 6 fichas estructuradas de iniciación para imprimir en casa o en clase;",
        "Deseas ejercitar el conteo del 1 al 5 y la identificación de la letra A;",
        "Quieres practicar grafomotricidad, patrones y unión de mayúsculas con minúsculas;",
        "Prefieres archivos en formato PDF listos para imprimir a tu propio ritmo."
      ],
      "notForYouTitle": "No es para ti si...",
      "notForYouItems": [
        "Buscas cuadernos extensos de gramática compleja u ortografía avanzada;",
        "Buscas únicamente aplicaciones digitales interactivas sin soporte en papel;",
        "No tienes tiempo para acompañar al niño durante la realización de las fichas."
      ]
    },
    "gallery": {
      "badge": "Fichas del Kit",
      "title": "Explora las Actividades del Kit",
      "subtitle": "Portadas ilustrativas de las actividades. Pulsa una portada para ver la ficha real incluida en el PDF.",
      "sampleLangNotice": "Muestras en portugués · PDFs disponibles en portugués, español e italiano",
      "ctaButton": "QUIERO ADQUIRIR EL MATERIAL",
      "prevAria": "Ficha anterior",
      "nextAria": "Próxima ficha",
      "dotAria": "Ir a la ficha número",
      "sheetLabel": "Ficha",
      "openPreview": "Ampliar ficha",
      "closePreview": "Cerrar ampliación"
    },
    "moreActivities": {
      "badge": "AMPLIACIÓN PEDAGÓGICA (EN PREPARACIÓN)",
      "title": "Más actividades",
      "description": "Conoce el Cuaderno Extra compuesto por 6 fichas complementarias: simetría, laberinto, secuencias numéricas, forma diferente, sustracción y copia de cuadrícula.",
      "buttonLabel": "Conocer Cuaderno Extra"
    },
    "extraWorkbookModal": {
      "badge": "OFERTA EN PREPARACIÓN · COBRO DESACTIVADO",
      "title": "Cuaderno Extra de Actividades",
      "priceValue": "7,99 €",
      "priceVat": "+ IVA aplicable",
      "statusNotice": "Aviso de revisión: Este cuaderno complementario de 6 fichas se encuentra en preparación interna, sin validación humana ni aprobación de Hotmart. El cobro está desactivado en la versión pública.",
      "sheetsTitle": "Contenido real de las 6 fichas del Cuaderno Extra:",
      "sheets": [
        "Ficha 1: Simetría",
        "Ficha 2: Laberinto",
        "Ficha 3: Secuencias numéricas",
        "Ficha 4: Identificación de forma diferente",
        "Ficha 5: Sustracción elemental",
        "Ficha 6: Copia de cuadrícula"
      ],
      "futureNote": "No se cobra ningún importe por el Cuaderno Extra en el checkout actual. Cuando los archivos finales estén aprobados, se activará su propia pasarela.",
      "disabledBtn": "Cobro desactivado (en preparación)",
      "dismissBtn": "Ahora no",
      "closeAria": "Cerrar ventana del Cuaderno Extra"
    },
    "pricing": {
      "sectionTitle": "Acceso al Kit Pedagógico (6 Fichas)",
      "statusNotice": "Pago único · Archivos digitales en PDF",
      "planBadge": "KIT DIGITAL",
      "planTitle": "Kit con 6 Fichas Pedagógicas",
      "planSubtitle": "Las 6 fichas básicas en formato PDF de alta resolución, listas para descargar e imprimir.",
      "priceValue": "3,99 €",
      "priceVat": "+ IVA aplicable",
      "hotmartNote": "Pago único. El importe definitivo con IVA se calcula en la pasarela de Hotmart según el país.",
      "features": [
        "6 fichas esenciales de lectoescritura y cálculo en PDF",
        "Búsqueda de la letra A y conteo del 1 al 5",
        "Patrones lógicos, trazos y dibujo de cantidades",
        "Unión de mayúsculas con minúsculas",
        "Garantía incondicional de 7 días en Hotmart"
      ],
      "ctaButton": "ACCEDER AL CHECKOUT (3,99 € + IVA)",
      "secureNotice": "Pago procesado por Hotmart.",
      "testingOnlyNotice": "",
      "paymentMethodsAlt": "Métodos de pago aceptados por Hotmart"
    },
    "timedOffer": {
      "badge": "OFERTA COMPLEMENTARIA (ORDER BUMP)",
      "title": "Juegos de Letras y Números",
      "priceValue": "1,99 €",
      "priceVat": "+ IVA aplicable",
      "description": "¿Deseas complementar las fichas con el set de 4 juegos imprimibles de refuerzo lúdico?",
      "gamesTitle": "Juegos adicionales incluidos:",
      "games": [
        "Memoria de letras",
        "Dominó de cantidades",
        "Bingo",
        "Recorrido 1-12"
      ],
      "disclaimer": "Nota importante: Esta oferta de 1,99 € + IVA es un adicional (order bump) sujeto a configuración activa en Hotmart. La selección y disponibilidad del producto se confirman directamente en el checkout.",
      "ctaButton": "Ver opciones en el checkout",
      "dismissButton": "Ahora no",
      "closeAria": "Cerrar ventana de la oferta complementaria"
    },
    "countdown": {
      "days": "días",
      "hours": "horas",
      "minutes": "min",
      "seconds": "seg",
      "ended": "Plazo de la oferta finalizado",
      "timezoneLabel": "Zona horaria:"
    },
    "faq": {
      "title": "Preguntas Frecuentes",
      "subtitle": "Información sobre el contenido y el acceso al material.",
      "items": [
        {
          "question": "¿Cuántas fichas incluye exactamente este kit?",
          "answer": "El kit incluye exactamente 6 fichas: búsqueda de la letra A, conteo del 1 al 5, patrones, trazos, unión de mayúsculas/minúsculas y dibujo de cantidades."
        },
        {
          "question": "¿Es material físico o digital?",
          "answer": "Es 100% digital en formato PDF para imprimir en cualquier impresora doméstica o copistería."
        },
        {
          "question": "¿Cómo confirmo la entrega del material?",
          "answer": "Consulta la disponibilidad de los archivos y las condiciones de entrega en Hotmart antes de completar el pago."
        },
        {
          "question": "¿Cómo funciona la garantía de 7 días?",
          "answer": "La garantía de 7 días se tramita de forma oficial y directa a través de Hotmart con reembolso del 100%."
        }
      ]
    },
    "guarantee": {
      "title": "Garantía Incondicional de 7 Días",
      "p1": "Cuentas con 7 días para examinar las 6 fichas didácticas. Si no se ajustan a tus expectativas, Hotmart gestiona el reembolso íntegro.",
      "p2": "Procedimiento directo y seguro a través de la pasarela de pago.",
      "badgeAlt": "Sello de garantía de 7 días de Hotmart"
    },
    "footer": {
      "privacyLink": "POLÍTICA DE PRIVACIDAD",
      "termsLink": "TÉRMINOS DE USO",
      "cookiePreferencesLink": "PREFERENCIAS DE COOKIES",
      "copyright": "Infantil Pedagogia © 2026. Todos los derechos reservados."
    },
    "consent": {
      "regionAria": "Consentimiento de cookies y tratamiento de datos de marketing",
      "title": "Privacidad y Tratamiento de Datos (UTMify y Meta)",
      "description": "Al aceptar, consientes la recogida y tratamiento de identificadores en línea (como dirección IP, datos del navegador y cookies) y eventos de navegación mediante los servicios de UTMify y Meta. Estos datos no son anónimos y pueden emplearse para la atribución y optimización de campañas publicitarias. Puedes rechazar o revocar tu consentimiento en cualquier momento.",
      "acceptBtn": "Aceptar Seguimiento",
      "rejectBtn": "Rechazar Seguimiento"
    },
    "payments": {
      "badge": "Métodos de Pago Europeos",
      "title": "Pagos Seguros y Métodos Disponibles",
      "subtitle": "El procesamiento de los pedidos se realiza de forma cifrada directamente en la pasarela oficial de Hotmart.",
      "cardsAndPaypalTitle": "Tarjeta y PayPal",
      "cardsAndPaypalDesc": "Admite las principales tarjetas bancarias internacionales y cuenta PayPal para transacciones rápidas y protegidas.",
      "portugalTitle": "Portugal: MB WAY y Multibanco",
      "portugalDesc": "Para compras en Portugal, están disponibles pagos mediante MB WAY y referencia Multibanco en el checkout oficial de Hotmart.",
      "mbwayNotice": "Importante: Según la documentación técnica oficial de Hotmart, MB WAY no está disponible para ofertas complementarias de 1 solo clic (order bump / embudo de ventas).",
      "localMethodsTitle": "Métodos Locales Europeos",
      "localMethodsDesc": "También pueden aparecer Klarna y Pay by Bank (SEPA Instant). La disponibilidad depende del país de facturación, el dispositivo, la oferta y las opciones de Hotmart.",
      "conditionalNotice": "La disponibilidad exacta de cada método se confirma en la pasarela segura de Hotmart tras indicar el país de facturación. No cobramos directamente ni almacenamos datos de pago.",
      "hotmartProcessingNotice": "Pago procesado por Hotmart.",
      "instantProcessingNotice": "Procesamiento por Hotmart",
      "officialCheckoutNotice": "Checkout oficial Hotmart",
      "countryDependentNotice": "Según el país seleccionado en la pasarela"
    },
    "policies": {
      "privacyTitle": "Política de Privacidad y Cookies",
      "privacyContent": [
        "Infantil Pedagogia informa con total transparencia sobre el tratamiento de datos de los usuarios.",
        "Al aceptar las cookies de marketing, herramientas de medición como UTMify y Meta pueden recopilar identificadores en línea (incluyendo dirección IP, identificadores de cookies y parámetros de navegación). Estos datos no son anónimos y permiten medir y optimizar campañas.",
        "El usuario tiene el derecho de rechazar este rastreo y de revocar su decisión en cualquier instante mediante el enlace \"Preferencias de Cookies\" situado en el pie de página.",
        "Los pagos y datos de facturación se transmiten de forma cifrada y segura a través de Hotmart."
      ],
      "termsTitle": "Términos de Uso - Edición de Revisión",
      "termsContent": [
        "El material presentado en esta página es una edición de revisión interna compuesta por 6 fichas pedagógicas, sin validación humana previa ni aprobación formal de Hotmart.",
        "El enlace de pago está configurado únicamente para pruebas técnicas del propietario, debiendo el cobro comercial público permanecer desactivado.",
        "Queda prohibida la reproducción con fines lucrativos, reventa o distribución no autorizada de los archivos."
      ],
      "closeBtn": "Cerrar"
    }
  },
  "it-IT": {
    "brand": "Infantil Pedagogia",
    "topBanner": "Pagamento unico · 3,99 € + IVA applicabile",
    "revisionBadge": "Edizione di revisione · Senza convalida umana o approvazione formale di Hotmart",
    "commercialMode": {
      "internalActiveBanner": "Modalità Anteprima Interna: Link ufficiale Hotmart attivo per i test del proprietario.",
      "publicDisabledBanner": "Modalità Visualizzazione Pubblica: Pagamento commerciale disattivato prima del lancio.",
      "testNotice": "Pagamento elaborato da Hotmart. Verifica il contenuto e la disponibilità prima di pagare.",
      "toggleLabel": "Cambia configurazione commerciale:",
      "internalPill": "Anteprima Interna (Checkout Attivo)",
      "publicDisabledPill": "Pubblico (Pagamento Disattivato)",
      "disabledCtaText": "Pagamento disattivato (in revisione)",
      "disabledModalTitle": "Vendita Commerciale Disattivata",
      "disabledModalText": "Questo prodotto è in fase di revisione pedagogica interna e attende l'omologazione formale. Il pagamento pubblico rimane disattivato.",
      "disabledModalClose": "Compreso"
    },
    "nav": {
      "objectives": "Le 6 Schede",
      "examples": "Campioni Reali",
      "moreActivities": "Altre Attività",
      "pricing": "Accedi",
      "faq": "Domande",
      "checkoutBtn": "Vai al Checkout",
      "homeAriaLabel": "Infantil Pedagogia - Home",
      "langAriaLabel": "Cambia lingua della pagina"
    },
    "hero": {
      "title": "KIT DI ATTIVITÀ PEDAGOGICHE",
      "subtitle": "Raccolta didattica di 6 schede pedagogiche stampabili per l'inizio dell'apprendimento.",
      "statusBadge": "Attività stampabili · PT / ES / IT",
      "reviewNotice": "Avviso di sviluppo: I file PDF costituiscono un'edizione di revisione interna, senza convalida umana di esperti né approvazione formale di Hotmart. Il pagamento commerciale pubblico deve rimanere disattivato prima del lancio.",
      "priceType": "Pagamento unico",
      "priceValue": "3,99 €",
      "priceVat": "+ IVA applicabile (totale finale al checkout)",
      "priceNote": "Il prezzo finale con IVA viene calcolato sulla cassa di Hotmart in base al Paese di residenza fiscale.",
      "ctaButton": "VOGLIO ACQUISTARE IL MATERIALE",
      "ctaTestNotice": "Pagamento elaborato da Hotmart. Verifica il contenuto e la disponibilità prima di pagare.",
      "badgeSecure": "Acquisto Sicuro",
      "badgePdf": "6 Schede in PDF",
      "badgeGuarantee": "Garanzia di 7 Giorni",
      "samplesBadge": "Campioni Reali del Kit (6 Schede)",
      "samplesSubtitle": "Composizione delle 6 schede didattiche incluse nell'edizione di revisione",
      "sampleSheetAlt": "Campione della scheda",
      "clickToEnlarge": "Clicca sulla scheda per ingrandire l'anteprima",
      "sampleLangNotice": "Campioni in portoghese · PDF disponibili in portoghese, spagnolo e italiano",
      "heroIllustrationAlt": "Illustrazione del kit di 6 attività didattiche con bimbo con occhiali e materiali didattici",
      "heroIllustrationCaption": "Illustrazione del kit; vedi i campioni reali sotto",
      "badgeActivitiesPill": "6 Attività Didattiche",
      "viewRealSamplesAction": "Vedi i 6 campioni reali sotto"
    },
    "objectives": {
      "badge": "6 Schede Stampabili",
      "title": "Contenuto Reale del Kit Pedagogico",
      "intro": "Il kit comprende sei schede introduttive di letto-scrittura e calcolo:",
      "sheetsCountNotice": "Kit composto rigorosamente dalle 6 schede riportate di seguito:",
      "sheetIncluded": "Scheda inclusa nel PDF",
      "sheets": [
        {
          "number": "Scheda 1",
          "title": "Caccia alla lettera A",
          "description": "Riconoscimento visivo e discriminazione della vocale A in chiave ludica."
        },
        {
          "number": "Scheda 2",
          "title": "Conteggio da 1 a 5",
          "description": "Esercizi pratici di conteggio e associazione di quantità fino a 5."
        },
        {
          "number": "Scheda 3",
          "title": "Sequenze e modelli (Pattern)",
          "description": "Individuazione, ripetizione e prosecuzione di sequenze logiche elementari."
        },
        {
          "number": "Scheda 4",
          "title": "Tracciati e pregrafismo",
          "description": "Coordinazione oculo-manuale ed esercizi di grafomotricità propedeutica."
        },
        {
          "number": "Scheda 5",
          "title": "Collegamento maiuscole / minuscole",
          "description": "Associazione e corrispondenza tra lettere maiuscole e minuscole."
        },
        {
          "number": "Scheda 6",
          "title": "Disegno delle quantità",
          "description": "Rappresentazione grafica del numero mediante il disegno degli elementi corrispondenti."
        }
      ]
    },
    "audience": {
      "forYouTitle": "Questo materiale fa per te se...",
      "forYouItems": [
        "Cerchi le 6 schede strutturate di introduzione da stampare a casa o a scuola;",
        "Vuoi esercitare il conteggio elementare (1-5) e il riconoscimento della lettera A;",
        "Desideri allenare il pregrafismo, i modelli logici e l'abbinamento maiuscolo/minuscolo;",
        "Preferisci file digitali in formato PDF pronti da stampare secondo i tuoi ritmi."
      ],
      "notForYouTitle": "Non fa per te se...",
      "notForYouItems": [
        "Cerchi quaderni voluminosi di grammatica complessa o ortografia avanzata;",
        "Cerchi unicamente app digitali interattive su schermo senza schede cartacee;",
        "Non puoi dedicare tempo per seguire il bambino durante lo svolgimento delle schede."
      ]
    },
    "gallery": {
      "badge": "Schede del Kit",
      "title": "Esplora le Attività del Kit",
      "subtitle": "Copertine illustrative delle attività. Tocca una copertina per vedere la scheda reale inclusa nel PDF.",
      "sampleLangNotice": "Campioni in portoghese · PDF disponibili in portoghese, spagnolo e italiano",
      "ctaButton": "VOGLIO ACQUISTARE IL MATERIALE",
      "prevAria": "Scheda precedente",
      "nextAria": "Prossima scheda",
      "dotAria": "Vai alla scheda numero",
      "sheetLabel": "Scheda",
      "openPreview": "Ingrandisci scheda",
      "closePreview": "Chiudi ingrandimento"
    },
    "moreActivities": {
      "badge": "POTENZIAMENTO DIDATTICO (IN PREPARAZIONE)",
      "title": "Altre attività",
      "description": "Scopri il Quaderno Extra composto da 6 schede complementari: simmetria, labirinto, sequenze numeriche, forma diversa, sottrazione e copia su griglia.",
      "buttonLabel": "Scopri il Quaderno Extra"
    },
    "extraWorkbookModal": {
      "badge": "OFFERTA IN PREPARAZIONE · PAGAMENTO DISATTIVATO",
      "title": "Quaderno Extra di Attività",
      "priceValue": "7,99 €",
      "priceVat": "+ IVA applicabile",
      "statusNotice": "Avviso di revisione: Questo quaderno complementare di 6 schede è in preparazione interna, senza convalida umana né approvazione di Hotmart. Il pagamento è disattivato nella versione pubblica.",
      "sheetsTitle": "Contenuto reale delle 6 schede del Quaderno Extra:",
      "sheets": [
        "Scheda 1: Simmetria",
        "Scheda 2: Labirinto",
        "Scheda 3: Sequenze numeriche",
        "Scheda 4: Individuazione della forma diversa",
        "Scheda 5: Sottrazione elementare",
        "Scheda 6: Copia su griglia"
      ],
      "futureNote": "Nessun importo per il Quaderno Extra viene addebitato al checkout attuale. Il link dedicato verrà attivato una volta approvati i file definitivi.",
      "disabledBtn": "Pagamento disattivato (in preparazione)",
      "dismissBtn": "Ora no",
      "closeAria": "Chiudi finestra del Quaderno Extra"
    },
    "pricing": {
      "sectionTitle": "Accesso al Kit Didattico (6 Schede)",
      "statusNotice": "Pagamento unico · File digitali in PDF",
      "planBadge": "KIT DIGITALE",
      "planTitle": "Kit con 6 Schede Pedagogiche",
      "planSubtitle": "Le 6 schede fondamentali in formato PDF ad alta risoluzione, pronte da scaricare e stampare.",
      "priceValue": "3,99 €",
      "priceVat": "+ IVA applicabile",
      "hotmartNote": "Pagamento unico. L'importo definitivo con IVA viene calcolato alla cassa di Hotmart secondo il Paese.",
      "features": [
        "6 schede essenziali di letto-scrittura e calcolo in PDF",
        "Caccia alla lettera A e conteggio da 1 a 5",
        "Sequenze logiche, pregrafismo e disegno delle quantità",
        "Collegamento tra lettere maiuscole e minuscole",
        "Garanzia incondizionata di 7 giorni su Hotmart"
      ],
      "ctaButton": "VAI AL CHECKOUT (3,99 € + IVA)",
      "secureNotice": "Pagamento elaborato da Hotmart.",
      "testingOnlyNotice": "",
      "paymentMethodsAlt": "Metodi di pagamento accettati da Hotmart"
    },
    "timedOffer": {
      "badge": "OFFERTA COMPLEMENTARE (ORDER BUMP)",
      "title": "Giochi di Lettere e Numeri",
      "priceValue": "1,99 €",
      "priceVat": "+ IVA applicabile",
      "description": "Vuoi arricchire le schede con il set di 4 giochi stampabili per il potenziamento ludico?",
      "gamesTitle": "Giochi aggiuntivi inclusi:",
      "games": [
        "Memoria delle lettere",
        "Domino delle quantità",
        "Bingo",
        "Percorso 1-12"
      ],
      "disclaimer": "Nota importante: Questa offerta da 1,99 € + IVA è un'aggiunta (order bump) soggetta a configurazione attiva su Hotmart. La selezione e la disponibilità dell'aggiunta vengono confermate direttamente alla cassa.",
      "ctaButton": "Vedi opzioni al checkout",
      "dismissButton": "Ora no",
      "closeAria": "Chiudi finestra dell'offerta complementare"
    },
    "countdown": {
      "days": "giorni",
      "hours": "ore",
      "minutes": "min",
      "seconds": "sec",
      "ended": "Periodo promozionale concluso",
      "timezoneLabel": "Fuso orario:"
    },
    "faq": {
      "title": "Domande Frequenti",
      "subtitle": "Informazioni sul contenuto e su come accedere al materiale.",
      "items": [
        {
          "question": "Quante schede sono incluse in questo kit?",
          "answer": "Il kit include esattamente 6 schede: caccia alla lettera A, conteggio 1-5, modelli (pattern), tracciati, collegamento maiuscole/minuscole e disegno delle quantità."
        },
        {
          "question": "Il materiale è cartaceo o digitale?",
          "answer": "Il materiale è 100% digitale in formato PDF pronto da stampare con qualsiasi stampante domestica o copisteria."
        },
        {
          "question": "Come verifico la consegna del materiale?",
          "answer": "Verifica la disponibilità dei file e le condizioni di consegna su Hotmart prima di completare il pagamento."
        },
        {
          "question": "Come funziona la garanzia di 7 giorni?",
          "answer": "La garanzia di 7 giorni viene gestita direttamente e in modo trasparente tramite Hotmart con rimborso integrale del 100%."
        }
      ]
    },
    "guarantee": {
      "title": "Garanzia Incondizionata di 7 Giorni",
      "p1": "Hai 7 giorni per esaminare le 6 schede didattiche. Se non corrispondono alle tue aspettative, Hotmart gestisce il rimborso del 100%.",
      "p2": "Procedura ufficiale e sicura gestita dalla piattaforma di pagamento.",
      "badgeAlt": "Sigillo di garanzia di 7 giorni Hotmart"
    },
    "footer": {
      "privacyLink": "INFORMATIVA SULLA PRIVACY",
      "termsLink": "TERMINI DI UTILIZZO",
      "cookiePreferencesLink": "PREFERENZE COOKIE",
      "copyright": "Infantil Pedagogia © 2026. Tutti i diritti riservati."
    },
    "consent": {
      "regionAria": "Consenso sui cookie e trattamento dei dati di marketing",
      "title": "Privacy e Trattamento Dati (UTMify e Meta)",
      "description": "Accettando, acconsenti alla raccolta e al trattamento di identificatori online (come indirizzo IP, dati del browser e cookie) ed eventi di navigazione tramite i servizi di misurazione di UTMify e Meta. Questi dati non sono anonimi e possono essere condivisi per l'attribuzione e l'ottimizzazione delle campagne pubblicitarie. Puoi rifiutare o revocare il tuo consenso in qualsiasi momento.",
      "acceptBtn": "Accetta Tracciamento",
      "rejectBtn": "Rifiuta Tracciamento"
    },
    "payments": {
      "badge": "Metodi di Pagamento Europei",
      "title": "Pagamenti Sicuri e Metodi Disponibili",
      "subtitle": "L'elaborazione degli ordini avviene in modo crittografato direttamente sulla piattaforma ufficiale di Hotmart.",
      "cardsAndPaypalTitle": "Carta e PayPal",
      "cardsAndPaypalDesc": "Accetta le principali carte bancarie internazionali e account PayPal per pagamenti rapidi e protetti.",
      "portugalTitle": "Portogallo: MB WAY e Multibanco",
      "portugalDesc": "Per gli ordini fatturati in Portogallo, sono disponibili MB WAY e bollettino Multibanco nel checkout di Hotmart.",
      "mbwayNotice": "Importante: In base alla documentazione ufficiale di Hotmart, MB WAY non è disponibile per acquisti complementari a 1 clic (order bump / funnel di vendita).",
      "localMethodsTitle": "Metodi Locali Europei",
      "localMethodsDesc": "Possono comparire anche Klarna e Pay by Bank (SEPA Instant). La disponibilità varia secondo il Paese di fatturazione, il dispositivo, l'offerta e le opzioni di Hotmart.",
      "conditionalNotice": "L'effettiva disponibilità di ciascun metodo viene confermata nella cassa protetta di Hotmart dopo aver impostato il Paese. Non gestiamo pagamenti né conserviamo dati bancari.",
      "hotmartProcessingNotice": "Pagamento elaborato da Hotmart.",
      "instantProcessingNotice": "Elaborazione tramite Hotmart",
      "officialCheckoutNotice": "Checkout ufficiale Hotmart",
      "countryDependentNotice": "In base al Paese selezionato alla cassa"
    },
    "policies": {
      "privacyTitle": "Informativa sulla Privacy e Cookie",
      "privacyContent": [
        "Infantil Pedagogia fornisce informazioni chiare e veritiere sul trattamento dei dati degli utenti.",
        "Se si autorizzano i cookie di marketing, servizi di misurazione come UTMify e Meta possono raccogliere identificatori online (inclusi indirizzo IP, identificatori di cookie e parametri di navigazione). Tali dati non sono anonimi e consentono la misurazione delle campagne pubblicitarie.",
        "L'utente ha il diritto di rifiutare questo tracciamento e di revocare la propria scelta in qualsiasi momento tramite il link \"Preferenze Cookie\" presente nel piè di pagina.",
        "I pagamenti e i dati di fatturazione vengono gestiti esclusivamente e in forma crittografata dalla piattaforma Hotmart."
      ],
      "termsTitle": "Termini di Utilizzo - Edizione di Revisione",
      "termsContent": [
        "Il materiale presentato in questa pagina è un'edizione di revisione interna composta da 6 schede didattiche, senza previa convalida umana né approvazione da parte di Hotmart.",
        "Il link di pagamento è configurato esclusivamente per i test tecnici del proprietario; il pagamento commerciale pubblico deve rimanere disattivato.",
        "È vietata la rivendita, la riproduzione commerciale o la condivisione pubblica non autorizzata dei file."
      ],
      "closeBtn": "Chiudi"
    }
  }
};
