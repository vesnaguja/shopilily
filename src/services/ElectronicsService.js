const electronicsUrl = 'https://fakestoreapi.com/products/category/electronics'

export const getElectronics = async () => {
  const request = await fetch(electronicsUrl);
  const response = await request.json();
  return response;
}