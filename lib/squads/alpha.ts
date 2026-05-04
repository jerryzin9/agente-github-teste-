import { SquadConfig } from './types';

export const alphaConfig: SquadConfig = {
  style: 'alpha',
  name: 'Squad Alpha — Ecommerce Store',
  description: 'Time pequeno/freelancer gerenciando loja virtual. Stack mínimo viável com Next.js, Tailwind e Zustand.',
  stack: ['Next.js', 'Tailwind', 'Zustand'],
  roles: ['Owner', 'Dev'],
  color: '#10b981', // emerald-500
  features: [
    {
      id: 'catalog',
      name: 'Catálogo de Produtos',
      description: 'Listagem de camisas de times com filtro por liga',
      enabled: true,
    },
    {
      id: 'cart',
      name: 'Carrinho de Compras',
      description: 'Adicionar/remover itens com persistência em localStorage',
      enabled: true,
    },
    {
      id: 'checkout-simple',
      name: 'Checkout Simples',
      description: 'Fluxo de compra básico sem persistência server-side',
      enabled: true,
    },
    {
      id: 'auth',
      name: 'Autenticação',
      description: 'Sistema de login/cadastro com Supabase Auth',
      enabled: false,
    },
    {
      id: 'admin-panel',
      name: 'Painel Admin',
      description: 'CRUD de produtos e gestão de pedidos',
      enabled: false,
    },
    {
      id: 'stripe-checkout',
      name: 'Stripe Checkout',
      description: 'Pagamento integrado via Stripe',
      enabled: false,
    },
    {
      id: 'multi-seller',
      name: 'Multi-vendedor',
      description: 'Suporte a múltiplos vendedores com Stripe Connect',
      enabled: false,
    },
  ],
};