import "../styles/Frame.css";
import Link from "next/link";

function Header({ cat }) {
  let categories = [
    "doors",
    "windows",
    "gates",
    "fences",
    "blinds",
    "chairs",
    "cages",
    "beds",
  ];

  return (
    <header className="header">
      <div className="header-static-container">
        <Link href={"/"} className="header-name">
          IVORIAN WELDING
        </Link>
        <Link className="header-links" href={"/saved"}>
          Saved
        </Link>
        <Link className="header-links" href="/about">
          About
        </Link>
      </div>
      <div className="header-dynamic-container">
        <Link
          className={`header-category ${cat == "home" && "active"}`}
          href={"/"}
        >
          HOME
        </Link>
        {categories.map((category) => (
          <Link
            href={`/categories/${category}`}
            key={category}
            className={`header-category ${cat == category && "active"}`}
          >
            {category.toUpperCase()}
          </Link>
        ))}
      </div>
    </header>
  );
}

export default Header;
