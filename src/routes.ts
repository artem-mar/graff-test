const storeApi = 'https://fakestoreapi.com';

const routes = {
  productsApi: () => `${storeApi}/products`,
  productByIdApi: (id: number) => `${storeApi}/products/${id}`,

  listPage: () => '/',
  cardPage: (id: number | string = '') => (id ? `product?id=${id}` : 'product'),
};

export default routes;
