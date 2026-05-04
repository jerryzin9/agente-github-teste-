# Squad Gamma — Marketplace Multi-vendedor

## Visão Geral

**Squad Gamma** é o estilo marketplace para times grandes com múltiplos vendedores. Usa Stripe Connect para comissões e painel individual por vendedor.

## Características

| Atributo | Valor |
|---|---|
| **Style** | gamma |
| **Stack** | Next.js, Supabase, Stripe Connect |
| **Roles** | Owner, Dev, Designer, QA, DevOps |
| **Complexidade** | Alta |

## Features Habilitadas

- ✅ **Catálogo de Produtos** — Listagem com filtro por liga
- ✅ **Carrinho de Compras** — Persistência em localStorage
- ❌ **Checkout Simples** — Substituído por Stripe Checkout
- ✅ **Autenticação** — Login/cadastro via Supabase Auth
- ✅ **Painel Admin** — Gestão centralizada
- ✅ **Stripe Checkout** — Pagamento integrado com webhook
- ✅ **Multi-vendedor** — Stripe Connect com comissões automáticas

## Arquitetura Adicional

```
lib/
  stripe-connect.ts   # Lógica de onboarding e comissões

app/
  seller/
    [id]/
      page.tsx        # Painel do vendedor

components/
  seller/
    SellerDashboard.tsx
```

## Variáveis de Ambiente Adicionais

```bash
STRIPE_CONNECT_CLIENT_ID=ca_...
STRIPE_CONNECT_WEBHOOK_SECRET=whsec_...
```

## Tabela Supabase Adicional

- `sellers` — Cadastro de vendedores com stripe_account_id

## Fluxo de Onboarding (Vendedor)

1. Vendedor inicia onboarding via Stripe Connect
2. Plataforma recebe webhook de confirmação
3. Vendedor pode cadastrar produtos com seu `seller_id`
4. Commission rate calculado automaticamente

## Histórico

- Criado em: 2026-05-04
- Issue: #45