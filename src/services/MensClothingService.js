const mensClothingUrl = 'https://fakestoreapi.com/products/category/men\'s clothing';

export const getMensClothing = async () => {
  const request = await fetch(mensClothingUrl);
  const response = await request.json();
  return response;
}