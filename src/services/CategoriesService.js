const categoriesUrl = 'https://fakestoreapi.com/products/categories'

// fetch categories
export const getAllCategories = async () => {
  const request = await fetch(categoriesUrl);
  const response = await request.json();
  return response;
}

