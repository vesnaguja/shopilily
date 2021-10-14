const produstsUrl = 'https://fakestoreapi.com/products'

// fetch all products
export const getAllProducts = async () => {
  const request = await fetch(produstsUrl);
  const response = await request.json();
  return response;
}