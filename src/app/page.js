import { getCategoryProducts } from "./Actions/server";
import Header from "./Frame/Header";
import ProductCard from "./components/ProductCard";
import "../app/styles/Home.css";
import HeroSection from "./components/HeroSection";

export function metadata() {
  return {
    title: "IVORIAN WELDING | BUEA CAMEROON",
    description:
      "Welding and Fabricating of Iron Doors, Window Protectors, Gates, Fences, Tables, Chairs, Beds in and out of Buea, Cameroon",
  };
}

export default async function Home() {
  let products = await getCategoryProducts("home-products");
  return (
    <div className="home-page">
      <Header cat={"home"} />
      <HeroSection />
      <h1 className="home-page-best-design-label">Best Designs</h1>
      <div className="products-mapper">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
}
