import { SquadConfig } from './types';

export const betaConfig: SquadConfig = {
  style: 'beta',
  name: 'Squad Beta — Ecommerce Escalável',
  description: 'Time médio com processos definidos. Adiciona Supabase para persistência, Auth e Stripe para pagamentos.',
  stack: ['Next.js', 'Supabase', 'Stripe', 'Zustand'],
  roles: ['Owner', 'Dev', 'Designer', 'QA'],
  color: '#3b82f6', // blue-500
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
      enabled: false,
    },
    {
      id: 'auth',
      name: 'Autenticação',
      description: 'Sistema de login/cadastro com Supabase Auth',
      enabled: true,
    },
    {
      id: 'admin-panel',
      name: 'Painel Admin',
      description: 'CRUD de produtos e gestão de pedidos',
      enabled: true,
    },
    {
      id: 'stripe-checkout',
      name: 'Stripe Checkout',
      description: 'Pagamento integrado via Stripe com webhook',
      enabled: true,
    },
    {
      id: 'multi-seller',
      name: 'Multi-vendedor',
      description: 'Suporte a múltiplos vendedores com Stripe Connect',
      enabled: false,
    },
  ],
};