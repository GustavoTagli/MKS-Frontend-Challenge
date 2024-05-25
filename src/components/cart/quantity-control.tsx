import { QuantityContainer } from '@/styles/Cart.style';
import { Minus, Plus } from '@phosphor-icons/react';

interface QuantityControlProps {
  quantity: number;
  updateQuantity: (newQuantity: number) => void;
}

export function QuantityControl({
  quantity,
  updateQuantity,
}: QuantityControlProps) {
  const handleDecrement = () => updateQuantity(quantity - 1);
  const handleIncrement = () => updateQuantity(quantity + 1);

  return (
    <QuantityContainer>
      <p>Qtd:</p>
      <div>
        <button
          onClick={handleDecrement}
          disabled={quantity === 1 ? true : false}
          className={quantity === 1 ? 'disabled' : ''}
        >
          <Minus size={10} />
        </button>
        <span></span>
        <p>{quantity}</p>
        <span></span>
        <button onClick={handleIncrement}>
          <Plus size={10} />
        </button>
      </div>
    </QuantityContainer>
  );
}
