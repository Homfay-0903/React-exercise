import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Product {
    id: number
    title: string
    price: number
    description: string
}

export interface ProductsResponse {
    products: Product[]
    total: number
    skip: number
    limit: number
}

interface GetProductsArgs {
    limit?: number
    skip?: number
}

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/products' }),
    tagTypes: ['Product'],
    endpoints: (builder) => ({
        getProducts: builder.query<ProductsResponse, GetProductsArgs>({
            query: ({ limit = 10, skip = 0 }) => `?limit=${limit}&skip=${skip}`,
            providesTags: ['Product']
        }),

        getProductById: builder.query<Product, number>({
            query: (id) => `/${id}`,
            providesTags: (_result, _error, id) => [{ type: 'Product', id }]
        }),

        updateProduct: builder.mutation<Product, { id: number, body: Partial<Product> }>({
            query: ({ id, body }) => ({
                url: `${id}`,
                method: 'PUT',
                body
            }),
            invalidatesTags: ['Product']
        })
    })
})

export const {
    useGetProductsQuery,
    useGetProductByIdQuery,
    useUpdateProductMutation
} = productApi