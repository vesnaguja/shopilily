const productsUrl = 'https://fakestoreapi.com/products'

// fetch all products
export const getAllProducts = async () => {
  const request = await fetch(productsUrl);
  const response = await request.json();
  return response;
}