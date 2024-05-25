import { useCart } from '@/hooks/useCart'
import { Product } from '@/types/product'
import { formatCurrency } from '@/utils/format-currency'
import { Tooltip } from '@mui/material'
import Image from 'next/image'
import { CustomButton } from './components/custom-button'
import { useSnackbar } from 'notistack'

import * as Styles from './styles'

export function ProductItem({ product }: { product: Product }) {
  const { enqueueSnackbar } = useSnackbar()
  const { addProduct } = useCart()

  const handleAddToCart = () => {
    addProduct(product)
    enqueueSnackbar('Produto adicionado ao carrinho', {
      variant: 'success',
      autoHideDuration: 2500,
    })
  }

  return (
    <>
      <Styles.ProductContainer
        initial={{ opacity: 0 }}
        animate='visible'
        variants={{ visible: { opacity: 1 } }}
      >
        <Styles.ProductImage>
          <Image
            src={product.photo}
            alt={`Imagem do produto: ${product.name}`}
            width={170}
            height={130}
          />
        </Styles.ProductImage>
        <Styles.ProductInfo>
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
        </Styles.ProductInfo>
        <CustomButton onClick={handleAddToCart} />
      </Styles.ProductContainer>
    </>
  )
}
