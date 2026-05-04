# Squad Alpha — Ecommerce Store

## Visão Geral

**Squad Alpha** é o estilo base da plataforma e-commerce de camisas de futebol. Projetado para times pequenos ou atuação solo, com stack mínimo viável.

## Características

| Atributo | Valor |
|---|---|
| **Style** | alpha |
| **Stack** | Next.js, Tailwind, Zustand |
| **Roles** | Owner, Dev |
| **Complexidade** | Baixa |

## Features Habilitadas

- ✅ **Catálogo de Produtos** — Listagem com filtro por liga
- ✅ **Carrinho de Compras** — Persistência em localStorage
- ✅ **Checkout Simples** — Fluxo básico sem persistência server-side
- ❌ **Autenticação** — Não disponível neste estilo
- ❌ **Painel Admin** — Não disponível neste estilo
- ❌ **Stripe Checkout** — Não disponível neste estilo
- ❌ **Multi-vendedor** — Não disponível neste estilo

## Arquitetura

```
lib/
  products.ts     # Catálogo estático de produtos
  store.ts        # Estado do carrinho com Zustand
  squads/
    types.ts      # Tipos TypeScript
    alpha.ts      # Config Alpha
    beta.ts       # Config Beta
    gamma.ts      # Config Gamma
    config.ts     # CURRENT_SQUAD e helpers

components/
  HeroBanner.tsx
  ProductCard.tsx
  FilterBar.tsx
  CartDrawer.tsx
  squad/
    SquadBadge.tsx    # Badge visual do squad ativo
    SquadSelector.tsx # UI de seleção
```

## Rotas

- `/` — Homepage com catálogo e carrinho
- `/squads` — Página de seleção de squad (visualização apenas)

## Limitações

- Carrinho não persiste em servidor
- Sem autenticação de usuários
- Sem painel administrativo
- Sem integração com gateways de pagamento

## Próximos Passos

Para evoluir para **Squad Beta**,参见 [BETA.md](./BETA.md).

## Histórico

- Criado em: 2026-05-04
- Issue: #45