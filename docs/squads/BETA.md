# Squad Beta — Ecommerce Escalável

## Visão Geral

**Squad Beta** é o estilo escalável para times médios com processos definidos. Adiciona Supabase para persistência, autenticação e Stripe para pagamentos.

## Características

| Atributo | Valor |
|---|---|
| **Style** | beta |
| **Stack** | Next.js, Supabase, Stripe, Zustand |
| **Roles** | Owner, Dev, Designer, QA |
| **Complexidade** | Média |

## Features Habilitadas

- ✅ **Catálogo de Produtos** — Listagem com filtro por liga
- ✅ **Carrinho de Compras** — Persistência em localStorage
- ❌ **Checkout Simples** — Substituído por Stripe Checkout
- ✅ **Autenticação** — Login/cadastro via Supabase Auth
- ✅ **Painel Admin** — CRUD de produtos e gestão de pedidos
- ✅ **Stripe Checkout** — Pagamento integrado com webhook
- ❌ **Multi-vendedor** — Não disponível neste estilo

## Arquitetura Adicional

```
lib/
  supabase/
    client.ts    # Cliente browser
    server.ts    # Cliente server
  stripe.ts     # Config Stripe

app/
  admin/
    page.tsx    # Painel administrativo
  api/
    checkout/
      route.ts      # Stripe checkout session
    webhooks/
      stripe/
        route.ts    # Webhook de pagamento

components/
  auth/
    LoginForm.tsx
    RegisterForm.tsx
  admin/
    ProductManager.tsx
    OrderList.tsx
```

## Variáveis de Ambiente

```bash
SUPABASE_URL=your-project-url
SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_KEY=your-service-key
STRIPE_PUBLIC_KEY=pk_...
STRIPE_SECRET_KEY=sk_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

## Tabelas Supabase

- `products` — Catálogo migrado de lib/products.ts
- `orders` — Pedidos com status
- `users` — Autenticação via Supabase Auth

## Próximos Passos

Para evoluir para **Squad Gamma**,参见 [GAMMA.md](./GAMMA.md).

## Histórico

- Criado em: 2026-05-04
- Issue: #45