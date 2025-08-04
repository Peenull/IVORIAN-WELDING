import { getCategoryProducts, getTopProduct } from "@/app/Actions/server";
import Header from "@/app/Frame/Header";
import ProductsMapper from "@/app/components/ProductsMapper";
import TopProduct from "@/app/components/TopProduct";

export async function generateMetadata({ params }) {
  const { category } = await params;

  return {
    title: `${category.toUpperCase()} || IVORIAN WELDING`,
    description: `Ivorian Welding Workshop Best Designs for ${category.toUpperCase()} that can be welded for our Customers`,
  };
}

export default async function CategoryPage({ params }) {
  const { category } = await params;

  const topProduct = await getTopProduct(category);
  const products = await getCategoryProducts(category);

  return (
    <div className="category-view">
      <Header cat={category} />
      <TopProduct product={topProduct} category={category} />
      <ProductsMapper initialProducts={products} category={category} />
    </div>
  );
}
