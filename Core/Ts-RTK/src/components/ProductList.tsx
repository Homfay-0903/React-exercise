import { useGetProductsQuery, useGetProductByIdQuery } from "../services/productApi";
import type { Product } from "../services/productApi";

const ProductList = () => {
    const { isLoading, data, error } = useGetProductsQuery({ limit: 5 })

    if (isLoading) return <div>加载中...</div>
    if (error) return <div>出错了: {(error as any).message}</div>
    if (!data) return null

    return (
        <div>
            <h3>total is {data.total}</h3>
            <ul>
                {data.products.map((product: Product) => (
                    <ProductItem key={product.id} product={product}></ProductItem>
                ))}
            </ul>

        </div>
    )
}

const ProductItem = ({ product }: { product: Product }) => {
    const { data: detail } = useGetProductByIdQuery(product.id, {
        skip: !product.id
    })

    return (
        <li>
            <strong>{product.title}</strong>, price is {product.price}
            {detail && <span> (详情加载完成)</span>}
        </li>
    )
}

export default ProductList