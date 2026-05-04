# Plano Técnico — Issue #45

## Desenvolver novos estilos de squads para implementação

**Repositório:** `jerryzin9/agente-github-teste-`
**Issue:** #45
**Status:** `OPEN`
**Label:** `enhancement`
**Responsável pelo plano:** planning (subagent)
**Data:** 2026-05-04

---

## 1. Análise do Estado Atual

### 1.1 Código existente — squads

**Resultado da varredura:** Nenhum código de "squad styles" encontrado no repositório.

O repositório atual é uma **loja e-commerce de camisas de times de futebol** construída em Next.js 14 com as seguintes estruturas:

| Arquivo | Função |
|---|---|
| `app/page.tsx` | Página principal com listagem e filtro por liga |
| `components/HeroBanner.tsx` | Banner principal |
| `components/ProductCard.tsx` | Card de produto com modal de compra |
| `components/FilterBar.tsx` | Filtro por liga/campeonato |
| `components/CartDrawer.tsx` | Gaveta do carrinho |
| `lib/products.ts` | Catálogo de 8 produtos (times reais) |
| `lib/store.ts` | Estado global do carrinho com Zustand + persistência |

**Tecnologias:**
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Zustand (state management)
- `persisted` middleware (localStorage)

### 1.2 Lacuna identificada

A issue #45 menciona "estilos de squads", porém **o codebase atual não possui nenhuma abstração de squads**. Isso significa que a feature precisa ser **criada do zero**, não ampliada.

Possibilidades:
1. A issue foi criada como placeholder/teste e não reflete o roadmap real do projeto.
2. O projeto está em transição e "squads" refere-se a uma abstração futura detime/organização dentro do contexto da loja.
3. Existe um desconhecimento de que o repositório é uma e-commerce e não um sistema de squads.

### 1.3 Decisão de abordagem

Dado o contexto da issue e a natureza genérica do título, **proporemos uma abstração de "squads de время"** (squads de desenvolvimento/time de projeto) que pode ser integrada ao projeto de formas alternativas. A definição concreta dos estilos será feita após validação humana.

---

## 2. Definição dos Novos Estilos de Squad

Após análise, propomos **3 novos estilos de squads** para implementação:

### Squad Alpha (Ecommerce Store)
- **Perfil:** Time pequeno/freelancer gerenciando loja virtual
- **Estrutura:** Owner + Dev
- **Stack:** Next.js + Tailwind + Zustand
- **Features:** Catálogo, carrinho, filtro, checkout simples

### Squad Beta (Ecommerce Store Escalável)
- **Perfil:** Time médio com processos definidos
- **Estrutura:** Owner + Dev + Designer + QA
- **Stack:** Next.js + Supabase (BD + Auth + Storage) + Stripe
- **Features:** Tudo do Alpha + autenticação, pedidos persistidos, painel admin

### Squad Gamma (Marketplace Multi-vendedor)
- **Perfil:** Time grande com múltiplos vendedores
- **Estrutura:** Owner + Dev + Designer + QA + DevOps
- **Stack:** Next.js + Supabase + Stripe Connect
- **Features:** Tudo do Beta + multi-vendedor, comissões, painel por vendedor

---

## 3. Arquitetura / Proposta de Implementação

### 3.1 Estrutura de Diretórios Proposta

```
app/
  (store)/
    page.tsx              # Homepage atual
    /checkout
      page.tsx            # Checkout com Stripe
    /admin
      page.tsx           # Painel admin (Squad Beta+)
    /auth
      /login
        page.tsx
      /register
        page.tsx
  /api
    /webhooks
      /stripe
        route.ts

lib/
  products.ts             # Já existe
  store.ts               # Já existe (Zustand)
  supabase/
    client.ts            # Cliente Supabase
    server.ts            # Server client
  stripe.ts              # Config Stripe
  squads/
    alpha.ts             # Squad Alpha config
    beta.ts              # Squad Beta config
    gamma.ts             # Squad Gamma config
    types.ts             # Tipos compartilhados

components/
  (existing components)
  /squad
    SquadSelector.tsx    # Seletor de estilo de squad
    SquadConfig.tsx      # Configuração visual do squad
  /admin
    ProductManager.tsx   # CRUD de produtos (Beta+)
    OrderList.tsx        # Lista de pedidos (Beta+)
  /auth
    LoginForm.tsx
    RegisterForm.tsx
```

### 3.2 Abordagem de Implementação

**Fase 1 — Infraestrutura base (Alpha):**
- Criar pasta `/lib/squads/` com tipos e configurações
- Criar `SquadSelector` component (UI para escolher estilo)
- Criar flag de configuração `CURRENT_SQUAD` em `lib/squads/config.ts`
- Manter compatibilidade total com código existente (Alpha = estado atual)

**Fase 2 — Beta:**
- Configurar Supabase (projeto novo ou existente)
- Migrar `products` e `orders` para tabelas Supabase
- Adicionar auth com Supabase Auth
- Criar `ProductManager` para admin
- Criar API routes para webhooks

**Fase 3 — Gamma:**
- Adicionar multi-tenancy
- Criar schema de vendedores
- Implementar Stripe Connect
- Criar painel por vendedor

---

## 4. Passos Numerados de Execução

### Fase Alpha (Base)

| Passo | Ação | Dependência |
|---|---|---|
| 1 | Criar `lib/squads/types.ts` com tipos `SquadStyle`, `SquadConfig`, `SquadFeature` | — |
| 2 | Criar `lib/squads/alpha.ts` com configuração do Squad Alpha | Passo 1 |
| 3 | Criar `lib/squads/beta.ts` com configuração do Squad Beta | Passo 1 |
| 4 | Criar `lib/squads/gamma.ts` com configuração do Squad Gamma | Passo 1 |
| 5 | Criar `lib/squads/config.ts` exportando estilo ativo e transições | Passos 2, 3, 4 |
| 6 | Criar `components/squad/SquadSelector.tsx` (UI de seleção visual) | Passo 5 |
| 7 | Criar `components/squad/SquadBadge.tsx` (badge visual do squad ativo) | Passo 5 |
| 8 | Integrar `SquadBadge` na homepage (`app/page.tsx`) | Passo 7 |
| 9 | Adicionar rota `/squads` com `SquadSelector` (página de configuração) | Passo 6 |
| 10 | Documentar cada estilo em `docs/squads/` (README por estilo) | Passos 2, 3, 4 |

### Fase Beta (Escalabilidade)

| Passo | Ação | Dependência |
|---|---|---|
| 11 | Configurar projeto Supabase e obter credenciais | — |
| 12 | Criar `lib/supabase/client.ts` e `lib/supabase/server.ts` | Passo 11 |
| 13 | Criar tabela `products` no Supabase (migrar dados de `lib/products.ts`) | Passo 12 |
| 14 | Criar tabela `orders` no Supabase | Passo 12 |
| 15 | Implementar Supabase Auth (login/register) | Passo 12 |
| 16 | Criar `components/auth/LoginForm.tsx` e `RegisterForm.tsx` | Passo 15 |
| 17 | Criar `components/admin/ProductManager.tsx` (CRUD) | Passo 13 |
| 18 | Criar `components/admin/OrderList.tsx` | Passo 14 |
| 19 | Criar `/app/admin/page.tsx` com painel admin | Passo 17, 18 |
| 20 | Configurar Stripe checkout session em `/api/checkout/route.ts` | Passo 14 |
| 21 | Configurar Stripe webhook em `/api/webhooks/stripe/route.ts` | Passo 20 |
| 22 | Testar fluxo completo: produto → checkout → webhook → order | Passos 20, 21 |

### Fase Gamma (Marketplace)

| Passo | Ação | Dependência |
|---|---|---|
| 23 | Criar tabela `sellers` no Supabase | Passo 12 |
| 24 | Configurar Stripe Connect (onboarding de vendedores) | Passo 23 |
| 25 | Criar `components/seller/SellerDashboard.tsx` | Passo 24 |
| 26 | Criar `/app/seller/[id]/page.tsx` (painel por vendedor) | Passo 25 |
| 27 | Ajustar queries de produtos para filtrar por `seller_id` | Passo 23 |
| 28 | Implementar lógica de comissão entre plataformas | Passo 24 |
| 29 | Testar fluxo multi-vendedor | Passos 25, 26, 27, 28 |

---

## 5. Dependências entre Passos

```
Passo 1
  ├── Passo 2 (alpha.ts)
  ├── Passo 3 (beta.ts)
  └── Passo 4 (gamma.ts)
        └── Passo 5 (config.ts)
              ├── Passo 6 (SquadSelector)
              └── Passo 7 (SquadBadge)
                    └── Passo 8 (integrar na homepage)
                          └── Passo 9 (rota /squads)
                                └── Passo 10 (documentação)
                                        FIM FASE ALPHA

        ── PARALELO: Passo 11 (Supabase setup)
              └── Passo 12 (clients)
                    ├── Passo 13 (tabela products)
                    ├── Passo 14 (tabela orders)
                    └── Passo 15 (auth)
                          ├── Passo 16 (forms)
                          ├── Passo 17 (ProductManager)
                          ├── Passo 18 (OrderList)
                          └── Passo 20 (Stripe checkout)
                                └── Passo 21 (webhook)
                                      └── Passo 22 (teste completo)
                                            FIM FASE BETA

              ── PARALELO: Passo 23 (tabela sellers)
                    └── Passo 24 (Stripe Connect)
                          ├── Passo 25 (SellerDashboard)
                          ├── Passo 26 (seller page)
                          ├── Passo 27 (queries filtradas)
                          └── Passo 28 (comissão)
                                └── Passo 29 (teste multi-vendedor)
                                      FIM FASE GAMMA
```

---

## 6. Riscos e Mitigações

| Risco | Probabilidade | Impacto | Mitigação |
|---|---|---|---|
| Issue não reflete o código real (squads vs e-commerce) | **Alta** | Alta | Confirmar com humano antes de iniciar implementação. Se a issue for placeholder, recomendar redirecionamento para feature mais alinhada com o codebase (ex: "Melhorar sistema de filtros", "Adicionar auth", "Criar painel admin") |
| Supabase + Stripe adicionam complexidade de credenciais | Média | Alta | Usar variáveis de ambiente, nunca hardcodar. Criar `.env.example` na raiz com todas as vars necessárias |
| Migração de `products` para Supabase quebra o estado atual | Média | Alta | Manter `lib/products.ts` como fallback; usar Supabase apenas quando `CURRENT_SQUAD !== 'alpha'` |
| Stripe Connect tem onboarding complexo e revisão manual | Alta | Média | Documentar processo de ativação; usar modo test inicialmente |
| squads Beta e Gamma podem nunca serem implementados | Alta | Baixa | Entregar Fase Alpha com valor real; Beta e Gamma como roadmap opcional |
| Autenticação adiciona estado de sessão que pode conflitar com Zustand | Média | Média | Manter Zustand para carrinho; usar Supabase Auth para identity apenas |

---

## 7. Checklist Confirmado pelo Planning

- [x] Análise do estado atual do repositório realizada
- [x] Código existente de squads identificado (inexistente —起点)
- [x] Tecnologias do projeto identificadas (Next.js 14, TypeScript, Tailwind, Zustand)
- [x] 3 estilos de squad propostos (Alpha, Beta, Gamma)
- [x] Arquitetura de diretórios proposta
- [x] 29 passos de execução numerados
- [x] Dependências entre passos mapeadas
- [x] 6 riscos identificados com mitigações
- [ ] **Confirmação humana pendente** antes de prosseguir para `execution`

---

## 8. Recomendação do Planning

> **⚠️ Atenção:** A issue #45 menciona "estilos de squads" mas o repositório atual é uma **loja e-commerce de camisas de futebol** sem nenhuma abstração de squads. A interpretação adotada neste plano assume que "squad" refere-se a um **estilo de organização de time de desenvolvimento** (Alpha/Beta/Gamma) aplicado ao projeto e-commerce.
>
> **Recomendação:** Validar com o humano se a interpretação está correta antes de prosseguir para `execution`. Caso a issue seja um placeholder, podemos redirecionar para uma feature mais relevante ao projeto real (ex: auth, admin panel, filtros avançados).

---

## 9. Próximo Passo

```
STATUS: WAITING_APPROVAL
AÇÃO: Confirmação humana sobre:
  1. A interpretação de "squad styles" como estilos de organização de time (Alpha/Beta/Gamma) está correta?
  2. A arquitetura de diretórios proposta é adequada?
  3. Devemos prosseguir com a Fase Alpha primeiro?
PENDENTE_DE: humano
AGENTE_NEXT: execution (após aprovação)
```