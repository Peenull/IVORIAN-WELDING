"use server";
export const getViewProduct = async (id, category) => {
  // const res = await fetch(`http://localhost:3000/Data/${"2"}.json`);
  const res = await fetch(`http://localhost:3000/Data/${category}.json`);
  const data = await res.json();
  let product = await data.find((product) => product.id == id);

  return product;
};

export const getCategoryProducts = async (category) => {
  const res = await fetch(`http://localhost:3000/Data/${category}.json`);
  const data = await res.json();
  return data;
};

export const getTopProduct = async () => {
  const res = await fetch(`http://localhost:3000/Data/top.json`);
  const data = await res.json();
  return data;
};
