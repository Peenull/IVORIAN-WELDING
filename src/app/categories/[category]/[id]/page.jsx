import ContactOnProduct from "@/app/components/ContactOnProduct";
import { getViewProduct, getCategoryProducts } from "@/app/Actions/server";
import Header from "@/app/Frame/Header";
import Link from "next/link";
import "../../../styles/View.css";
import ProductsMapper from "@/app/components/ProductsMapper";

export async function generateMetadata({ params }) {
  const { category, id } = await params;

  return {
    title: `${category.toUpperCase()}-${id} || IVORIAN WELDING`,
    description: `View the Design Structure of this ${category.toUpperCase()} to Contacts the Welder if you need one.`,
  };
}

export default async function ProductViewPage({ params }) {
  const { id, category } = await params;
  const products = await getCategoryProducts(category);
  const product = await getViewProduct(id, category);
  return (
    <>
      <Header cat={category} />
      <div className="view-product">
        <Link
          className="view-image-wrapper"
          key={product.image}
          href={product.image}
        >
          <img
            // width={200}
            // height={400}
            className="view-image"
            src={product.image}
            alt={product.image}
          ></img>
        </Link>
        <Link className="view-category-link" href={`/categories/${category}`}>
          {category.toUpperCase()}
        </Link>
        <ContactOnProduct product={product} category={category} />
      </div>
      <h1 className="view-other-category-label">
        OTHER DESIGNS FOR {category.toUpperCase()}
      </h1>
      <ProductsMapper initialProducts={products} category={category} />
    </>
  );
}
