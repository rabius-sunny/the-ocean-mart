import Product from 'services/Product'
import { useEffect, useState } from 'react'
import Products from 'components/home/Products'

export default function Home() {
  const [products, setProducts] = useState<IProduct[]>([] as IProduct[])
  useEffect(() => {
    Product.getProducts()
      .then(data => setProducts(data))
      .catch(err => console.log(err))
  }, [])
  console.log(products)

  return (
    <>
      <h1>Home</h1>
      <Products products={products} isLoading={false} />
    </>
  )
}
