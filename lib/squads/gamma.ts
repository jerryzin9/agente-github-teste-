import { SquadConfig } from './types';

export const gammaConfig: SquadConfig = {
  style: 'gamma',
  name: 'Squad Gamma — Marketplace Multi-vendedor',
  description: 'Time grande com múltiplos vendedores. Stripe Connect para comissões e painel por vendedor.',
  stack: ['Next.js', 'Supabase', 'Stripe Connect'],
  roles: ['Owner', 'Dev', 'Designer', 'QA', 'DevOps'],
  color: '#8b5cf6', // violet-500
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
      description: 'Suporte a múltiplos vendedores com Stripe Connect e comissões',
      enabled: true,
    },
  ],
};