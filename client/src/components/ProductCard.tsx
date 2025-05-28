
type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
};

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      <p className="text-blue-600">{product.price}</p>
    </div>
  );
}

export default ProductCard;
