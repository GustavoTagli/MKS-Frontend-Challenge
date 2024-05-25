import { useCart } from '@/hooks/useCart';
import { ProductInfo } from '@/styles/Grid.style';
import { ContainerProduct } from '@/styles/Grid.style';
import { Product } from '@/types/product';
import { formatCurrency } from '@/utils/format-currency';
import { Snackbar, Tooltip } from '@mui/material';
import { ShoppingBagOpen } from '@phosphor-icons/react';
import Image from 'next/image';
import { useState } from 'react';

interface GridProductItemProps {
  product: Product;
}

export function GridProductItem({ product }: GridProductItemProps) {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const { cartItems, updateCartItems } = useCart();

  const handleAddToCart = () => {
    if (cartItems.length > 0) {
      let cartItemsArray = cartItems.map((item) => ({ ...item }));

      let existingProductIndex = cartItemsArray.findIndex(
        (item: { id: string }) => item.id === product.id
      );

      if (existingProductIndex != -1) {
        cartItemsArray[existingProductIndex].quantity += 1;
      } else {
        cartItemsArray.push({ ...product, quantity: 1 });
      }
      updateCartItems(cartItemsArray);
    } else {
      const newCart = [{ ...product, quantity: 1 }];
      updateCartItems(newCart);
    }
    setOpenSnackbar(true);
  };

  return (
    <>
      <ContainerProduct
        initial={{ opacity: 0 }}
        animate='visible'
        variants={{ visible: { opacity: 1 } }}
      >
        <figure>
          <Image
            src={product.photo}
            alt={`Imagem do produto: ${product.name}`}
            width={170}
            height={130}
          />
        </figure>
        <ProductInfo>
          <Tooltip title={`${product.brand} ${product.name}`}>
            <div>
              <h3>{`${product.brand} ${product.name}`}</h3>
              <div>
                <p>
                  R$
                  {formatCurrency(product.price)}
                </p>
              </div>
            </div>
          </Tooltip>
          <p>{product.description}</p>
        </ProductInfo>
        <button onClick={handleAddToCart}>
          <ShoppingBagOpen size={16} />
          <span>Comprar</span>
        </button>
      </ContainerProduct>
      <Snackbar
        open={openSnackbar}
        onClose={() => setOpenSnackbar(false)}
        autoHideDuration={3000}
        message={'Produto adicionado ao carrinho com sucesso!'}
      />
    </>
  );
}
