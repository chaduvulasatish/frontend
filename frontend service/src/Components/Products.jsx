import ProductCard from "../components/ProductCard";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "Description for Product 1",
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description for Product 2",
    },
    {
      id: 3,
      name: "Product 3",
      description: "Description for Product 3",
    },
  ];
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Products</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
