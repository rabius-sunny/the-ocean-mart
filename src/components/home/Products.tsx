import SingleProduct from 'components/shared/SingleProduct'

interface IProps {
  products: IProduct[] | null
  isLoading: boolean
}

export default function Products({ products }: IProps) {
  return (
    <>
      <div className="container">
        <div className="row gap-4">
          {products?.map((product: IProduct) => (
            <SingleProduct product={product} />
          ))}
        </div>
      </div>
    </>
  )
}
