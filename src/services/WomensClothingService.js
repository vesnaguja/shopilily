const womensClothingUrl = 'https://fakestoreapi.com/products/category/women\'s clothing';

export const getWomensClothing = async () => {
  const request = await fetch(womensClothingUrl);
  const response = await request.json();
  return response;
}