const storeApi = 'https://fakestoreapi.com';

const routes = {
  productsApi: () => `${storeApi}/products`,

  listPage: () => '/',
  cardPage: (id: number | string = '') => (id ? `product?id=${id}` : 'product'),
};

export default routes;
