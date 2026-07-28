import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const updateQuantity = (newQuantity) => {
    if (newQuantity < 1) return;

    setQuantity(newQuantity);
    onQuantityChange?.(product.id, newQuantity);
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>

        <p>{product.description}</p>

        <div className="flex items-center gap-3 mt-4">
          <span className="font-medium">Required Quantity</span>

          <div className="join">
            <button
              className="btn join-item"
              onClick={() => updateQuantity(quantity - 1)}
            >
              -
            </button>

            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => updateQuantity(Number(e.target.value) || 1)}
              className="input input-bordered join-item w-20 text-center"
            />

            <button
              className="btn join-item"
              onClick={() => updateQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
        </div>

        <div className="card-actions justify-end">
          <button
            className="btn btn-primary"
            onClick={() =>
              navigate("/booking", {
                state: {
                  product,
                  quantity,
                },
              })
            }
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
