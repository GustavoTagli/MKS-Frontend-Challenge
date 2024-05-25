import { useProducts } from '@/hooks/useProducts'
import { ProductItem } from '../product-item'
import { ProductSkeleton } from '../product-skeleton'
import { When } from '../wrappers/when'

import * as Styles from './styles'

export function GridProducts() {
  const { products, isLoading } = useProducts()

  return (
    <Styles.GridContainer>
      <When expr={isLoading}>
        {Array.from({ length: 8 }).map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </When>
      <When expr={products?.length === 0}>
        <p className='center'>Nenhum produto disponível</p>
      </When>
      <When expr={products}>
        {products?.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </When>
    </Styles.GridContainer>
  )
}
