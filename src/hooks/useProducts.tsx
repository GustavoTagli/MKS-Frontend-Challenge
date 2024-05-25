import { ProductsFetchResponse } from '@/types/products-response'
import { useQuery } from '@tanstack/react-query'
import axios, { AxiosPromise } from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL as string

const fetcher = (query: string): AxiosPromise<ProductsFetchResponse> => {
  return axios(`${API_URL}/products?${query}`)
}

export function useProducts() {
  const { data, isLoading } = useQuery({
    queryFn: () => fetcher('page=1&rows=8&sortBy=name&orderBy=ASC'),
    queryKey: ['products'],
    staleTime: 1000 * 60 * 2,
  })

  return { products: data?.data?.products, isLoading }
}
