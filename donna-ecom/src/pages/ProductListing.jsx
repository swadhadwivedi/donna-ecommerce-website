import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const subcategory = searchParams.get("subcategory");

  useEffect(() => {
    let url = "http://localhost:5000/api/products";
    const params = [];
    if (category) params.push(`category=${category}`);
    if (subcategory) params.push(`subcategory=${subcategory}`);
    if (params.length) url += "?" + params.join("&");

    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, [category, subcategory]);

  return (
    <div>
      <h2 style={{ textAlign: "center", margin: "20px 0" }}>
        {subcategory
          ? `${subcategory} - ${category} Collection`
          : category
          ? `${category} Collection`
          : "Shop the Collection"}
      </h2>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
