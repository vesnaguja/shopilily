const jeweleryUrl = 'https://fakestoreapi.com/products/category/jewelery'

export const getJewelery = async () => {
  const request = await fetch(jeweleryUrl);
  const response = await request.json();
  return response;
}