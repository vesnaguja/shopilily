const productUrl = `https://fakestoreapi.com/products/`

// fetch single product
export const getProduct = async (id) => {
  const request = await fetch(`${productUrl}/${id}`);
  const response = await request.json();
  return response;
}