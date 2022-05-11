interface IProps {
  product: IProduct
}

export default function SingleProduct({ product }: IProps) {
  return (
    <div className="col-md-4">
      <h3>{product.name}</h3>
    </div>
  )
}
