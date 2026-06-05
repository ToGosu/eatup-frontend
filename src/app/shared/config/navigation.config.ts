export interface NavigationFeature {
  name: string;
  path: string;
}

export interface NavigationModule {
  name: string;
  expanded: boolean;
  features: NavigationFeature[];
}

/** Fuente única del menú lateral. Al agregar una vista nueva, actualizar solo este archivo. */
export const NAVIGATION_MODULES: NavigationModule[] = [
  {
    name: 'Payment',
    expanded: false,
    features: [
      { name: 'Cash Receipt', path: '/payment/cashreceipt' },
      { name: 'Facturas', path: '/payment/invoice' },
      { name: 'Payment Method', path: '/payment/paymentmethod' },
    ],
  },
  {
    name: 'Commercial',
    expanded: true,
    features: [
      { name: 'Descuentos', path: '/commercial/discount' },
      { name: 'Descuentos por Cliente', path: '/commercial/customer-discount' },
      { name: 'Clientes', path: '/commercial/clients' },
      { name: 'Vendedores', path: '/commercial/seller' },
      { name: 'Compras', path: '/commercial/purchases' },
      { name: 'Proveedores', path: '/commercial/provider' },
      { name: 'Mesas', path: '/commercial/tables' },
      { name: 'Ventas', path: '/commercial/sales' },
    ],
  },
  {
    name: 'Inventory',
    expanded: false,
    features: [
      { name: 'Transfer', path: '/inventory/transfer' },
      { name: 'Categorías', path: '/inventory/categories' },
      { name: 'Productos', path: '/inventory/product' },
      { name: 'Recetas', path: '/inventory/recipes' },
      { name: 'Sedes', path: '/inventor/locations' },
    ],
  },
];
