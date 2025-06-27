import { ProductCard } from "@/components/Products/ProductCard";
import { products } from "@/components/Products/products";

export default function ProductsPage() {
  return (
    <div className="flex gap-4 flex-wrap">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
