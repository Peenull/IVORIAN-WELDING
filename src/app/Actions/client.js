export async function getSavedProducts() {
  let storedProducts = localStorage.getItem("savedProducts");
  if (storedProducts) {
    const products = await JSON.parse(storedProducts);
    return products;
  } else {
    localStorage.setItem("storedProducts", JSON.stringify([]));
  }
}
