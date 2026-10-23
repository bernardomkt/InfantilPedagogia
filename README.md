# Clube da Pedagogia - Aplicação React

Aplicação moderna em **React 19**, **TypeScript**, **Vite** e **Tailwind CSS**, reescrita a partir do projeto original preservando todas as regras de negócio, layouts, dados de checkout e materiais pedagógicos.

## Recursos Preservados

- **Hero com Contador Regressivo**: Cronômetro de 15 minutos sincronizado via `sessionStorage`, selos de compra segura, preços promocionais e chamada de ação.
- **Seção de Importância e Benefícios**: Lista estruturada com as diretrizes da BNCC (do berçário ao 5º ano).
- **Slider de Depoimentos**: Carrossel responsivo com depoimentos reais de mães e professoras.
- **Público-Alvo**: Comparativo visual "As atividades são para você que..." vs "Mas, não são para quem...".
- **Carrossel Interativo de Atividades**: Prévia de 10 páginas reais do material com navegação por setas e indicadores pontilhados.
- **Grade com 8 Apostilas Bônus**: Apostilas inclusas com valores riscados e tag "GRÁTIS".
- **Tabela de Planos de Preço**:
  - **Kit Básico**: R$ 20,00 (aciona modal interativo de upsell).
  - **Kit Premium**: R$ 39,90 (redirecionamento direto ao checkout com garantia de 30 dias).
- **Modal de Upsell Estratégico**: Oferta exclusiva do Plano Premium por R$ 28,00 ou prosseguimento com o Básico.
- **Garantia Incondicional de 7 Dias**: Informações claras com devolução de 100% do investimento.
- **Perguntas Frequentes (FAQ)**: Acordeão interativo com dados estruturados Schema.org (`FAQPage`).
- **Rodapé e Políticas**: Modais de Termos de Uso e Política de Privacidade.

## Executando o Projeto

```bash
npm install
npm run dev
```

A aplicação roda na porta `3000` em `http://localhost:3000`.

## Build para Produção

```bash
npm run build
```
